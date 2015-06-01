require('dotenv').load();
// handle uncaught exceptions. Forever will restart process on shutdown
process.on('uncaughtException', function (err) {
  console.error(
    (new Date()).toUTCString() + ' uncaughtException:',
    err.message
  );
  console.error(err.stack);
  /* eslint-disable no-process-exit */
  process.exit(1);
  /* eslint-enable no-process-exit */
});

var express = require('express'),
  accepts = require('accepts'),
  cookieParser = require('cookie-parser'),
  compress = require('compression'),
  session = require('express-session'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  //frameguard = require('frameguard'),
  //csp = require('helmet-csp'),
  MongoStore = require('connect-mongo')(session),
  flash = require('express-flash'),
  path = require('path'),
  mongoose = require('mongoose'),
  passport = require('passport'),
  expressValidator = require('express-validator'),
  request = require('request'),
  forceDomain = require('forcedomain'),
  lessMiddleware = require('less-middleware'),

  /**
   * Controllers (route handlers).
   */
  homeController = require('./boot/home'),
  resourcesController = require('./resources/resources'),
  userController = require('./boot/user'),
  nonprofitController = require('./boot/nonprofits'),
  fieldGuideController = require('./boot/fieldGuide'),
  challengeMapController = require('./boot/challengeMap'),
  challengeController = require('./boot/challenge'),
  jobsController = require('./boot/jobs'),
  redirects = require('./boot/redirects'),
  utility = require('./boot/utility'),
  storyController = require('./boot/story'),

  /**
   * API keys and Passport configuration.
   */
  secrets = require('./../config/secrets'),
  passportConf = require('./../config/passport');

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(secrets.db);
mongoose.connection.on('error', function () {
  console.error(
    'MongoDB Connection Error. Please make sure that MongoDB is running.'
  );
});

/**
 * Express configuration.
 */


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

if (process.env.NODE_ENV === 'production') {
  app.use(forceDomain({
    hostname: 'www.freecodecamp.com'
  }));
}

app.use(compress());
app.use(lessMiddleware(__dirname + '/public'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator({
  customValidators: {
    matchRegex: function (param, regex) {
      return regex.test(param);
    }
  }
}));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret,
  store: new MongoStore({
    url: secrets.db,
    'autoReconnect': true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.disable('x-powered-by');

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

var trusted = [
  "'self'",
  'blob:',
  '*.freecodecamp.com',
  'http://www.freecodecamp.com',
  'ws://freecodecamp.com/',
  'ws://www.freecodecamp.com/',
  '*.gstatic.com',
  '*.google-analytics.com',
  '*.googleapis.com',
  '*.google.com',
  '*.gstatic.com',
  '*.doubleclick.net',
  '*.twitter.com',
  '*.twitch.tv',
  '*.twimg.com',
  "'unsafe-eval'",
  "'unsafe-inline'",
  '*.bootstrapcdn.com',
  '*.cloudflare.com',
  'https://*.cloudflare.com',
  'localhost:3001',
  'ws://localhost:3001/',
  'http://localhost:3001',
  'localhost:3000',
  'ws://localhost:3000/',
  'http://localhost:3000',
  '*.ionicframework.com',
  'https://syndication.twitter.com',
  '*.youtube.com',
  '*.jsdelivr.net',
  'https://*.jsdelivr.net',
  '*.ytimg.com',
  '*.bitly.com',
  'http://cdn.inspectlet.com/',
  'wss://inspectletws.herokuapp.com/',
  'http://hn.inspectlet.com/'
];

app.use(helmet.csp({
  defaultSrc: trusted,
  scriptSrc: [
    '*.optimizely.com',
    '*.aspnetcdn.com',
    '*.d3js.org'
  ].concat(trusted),
  'connect-src': [
  ].concat(trusted),
  styleSrc: trusted,
  imgSrc: [
    /* allow all input since we have user submitted images for public profile*/
    '*'
  ].concat(trusted),
  fontSrc: ['*.googleapis.com'].concat(trusted),
  mediaSrc: [
    '*.amazonaws.com',
    '*.twitter.com'
  ].concat(trusted),
  frameSrc: [

    '*.gitter.im',
    '*.gitter.im https:',
    '*.vimeo.com',
    '*.twitter.com',
    '*.ghbtns.com'
  ].concat(trusted),
  reportOnly: false, // set to true if you only want to report errors
  setAllHeaders: false, // set to true if you want to set all headers
  safari5: false // set to true if you want to force buggy CSP in Safari 5
}));

app.use(function (req, res, next) {
  // Make user object available in templates.
  res.locals.user = req.user;
  next();
});

app.use(express.static(__dirname + '/public', {maxAge: 86400000 }));

app.use(function (req, res, next) {
  // Remember original destination before login.
  var path = req.path.split('/')[1];
  if (/auth|login|logout|signin|signup|fonts|favicon/i.test(path)) {
    return next();
  } else if (/\/stories\/comments\/\w+/i.test(req.path)) {
    return next();
  }
  req.session.returnTo = req.path;
  next();
});





/**
 * Nonprofit Project routes.
 */

app.get('/nonprofits/directory', nonprofitController.nonprofitsDirectory);

app.get(
  '/nonprofits/:nonprofitName',
  nonprofitController.returnIndividualNonprofit
);

app.get(
  '/jobs',
  jobsController.jobsDirectory
);







/**
 * Camper News routes.
 */



app.all('/account', passportConf.isAuthenticated);


/**
 * API routes
 */


/**
 * Field Guide related routes
 */
app.get('/field-guide/all-articles', fieldGuideController.showAllFieldGuides);

app.get('/field-guide/:fieldGuideName',
  fieldGuideController.returnIndividualFieldGuide
);

app.get('/field-guide/', fieldGuideController.returnNextFieldGuide);

app.post('/completed-field-guide/', fieldGuideController.completedFieldGuide);


/**
 * Challenge related routes
 */

app.get('/challenges/next-challenge',
  userController.userMigration,
  challengeController.returnNextChallenge
);

app.get(
  '/challenges/:challengeName',
  userController.userMigration,
  challengeController.returnIndividualChallenge
);

app.get('/challenges/',
  userController.userMigration,
  challengeController.returnCurrentChallenge);
// todo refactor these routes
app.post('/completed-challenge/', challengeController.completedChallenge);

app.post('/completed-zipline-or-basejump',
  challengeController.completedZiplineOrBasejump);

app.post('/completed-bonfire', challengeController.completedBonfire);

// Unique Check API route



/**
 * OAuth sign-in routes.
 */

var passportOptions = {
  successRedirect: '/',
  failureRedirect: '/login'
};

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  })
);

app.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', {
    state: 'SOME STATE'
  })
);

app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', passportOptions)
);

app.get(
  '/auth/facebook',
  passport.authenticate('facebook', {scope: ['email', 'user_location']})
);

app.get(
  '/auth/facebook/callback',
  passport.authenticate('facebook', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

app.get('/auth/github', passport.authenticate('github'));

app.get(
  '/auth/github/callback',
  passport.authenticate('github', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);

app.get(
  '/auth/google',
  passport.authenticate('google', {scope: 'profile email'})
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', passportOptions), function (req, res) {
    res.redirect(req.session.returnTo || '/');
  }
);


/**
 * 500 Error Handler.
 */
if (process.env.NODE_ENV === 'development') {
  app.use(errorHandler({ log: true }));
} else {
  // error handling in production
  app.use(function(err, req, res, next) {

    // respect err.status
    if (err.status) {
      res.statusCode = err.status;
    }

    // default status code to 500
    if (res.statusCode < 400) {
      res.statusCode = 500;
    }

    // parse res type
    var accept = accepts(req);
    var type = accept.type('html', 'json', 'text');

    var message = 'opps! Something went wrong. Please try again later';
    if (type === 'html') {
      req.flash('errors', { msg: message });
      return res.redirect('/');
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({ message: message });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  });
}

/**
 * Start Express server.
 */

app.listen(app.get('port'), function () {
  console.log(
    'FreeCodeCamp server listening on port %d in %s mode',
    app.get('port'),
    app.get('env')
  );
});

module.exports = app;
