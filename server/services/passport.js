const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

// serialize user from the database
passport.serializeUser((user, done) => {
  done(null, user.id); // no error, return user's db document _id
});

// deserialize id from the front-end, and find our user record
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true // if our auth request passes through a proxy, you can trust it (to use HTTPS)
    },
    async (accessToken, refreshToken, profile, done) => {
      // check for existing user
      const existingUser = await User.findOne({ googleId: profile.id });
      if (existingUser) {
        return done(null, existingUser); // no error, return existing user
      }
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
  )
);
