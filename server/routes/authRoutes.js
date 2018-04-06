const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout', (req, res) => {
    // note: passport automatically attaches the 'logout()'
    // function to the req object
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    // note: passport automatically attaches the 'user'
    // property to the req object
    res.send(req.user);
  });
};
