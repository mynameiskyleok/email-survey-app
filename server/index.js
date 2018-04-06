const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

// load schemas
require('./models/User');
require('./models/Survey');

require('./services/passport'); // load passport so it has access to app

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());
// enable cookies in our applications
app.use(
  cookieSession({
    // days x hours x minutes x seconds x milliseconds
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
// tell app to use cookies to manage our authentication
app.use(passport.initialize());
app.use(passport.session());

// Routing configuration
require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js and main.css files
  app.use(express.static('client/build'));

  // order of operations matters here, for the above
  // and below call

  // Express will serve up the index.html file if
  // it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
