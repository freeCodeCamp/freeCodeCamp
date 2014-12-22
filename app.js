/**
 * Module dependencies.
 */
require('newrelic');
var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var _ = require('lodash');
var MongoStore = require('connect-mongo')(session);
var flash = require('express-flash');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');
var connectAssets = require('connect-assets');

/**
 * Controllers (route handlers).
 */

var homeController = require('./controllers/home');
var challengesController = require('./controllers/challenges');
var resourcesController = require('./controllers/resources');
var userController = require('./controllers/user');
var apiController = require('./controllers/api');
var contactController = require('./controllers/contact');

/**
 * User model
 */
var User = require('./models/User');
/**
 * API keys and Passport configuration.
 */

var secrets = require('./config/secrets');
var passportConf = require('./config/passport');

/**
 * Create Express server.
 */

var app = express();

/**
 * Connect to MongoDB.
 */

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});

/**
 * Express configuration.
 */

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
app.use(connectAssets({
    paths: [path.join(__dirname, 'public/css'), path.join(__dirname, 'public/js')],
    helperContext: app.locals
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({
        url: secrets.db,
        'auto_reconnect': true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.disable('x-powered-by');
app.use(helmet.xssFilter());
app.use(helmet.xframe());
app.use(helmet.contentSecurityPolicy({
    defaultSrc: ["'self'", 'freecodecamp.com'],
    scriptSrc: ['*.google-analytics.com', '*.optimizely.com', '*.googleapis.com', '*.twitter.com'],
    styleSrc: ["'self'", '*.twitter.com'],
    imgSrc: ["'self'", '*.amazonaws.com', '*.twitter.com', '*.twimg.com'],
    fontSrc: ["'self", '*.googleapis.com', '*.twitter.com'],
    mediaSrc: ['*.amazonaws.com', '*.twitter'],
    frameSrc: ['*.gitter.im', '*.vimeo.com'],
//    sandbox: ['allow-forms', 'allow-scripts'],
//    reportUri: '/report-violation',
    reportOnly: false, // set to true if you only want to report errors
    setAllHeaders: false, // set to true if you want to set all headers
    safari5: false // set to true if you want to force buggy CSP in Safari 5
}));

app.use(function(req, res, next) {
    // Make user object available in templates.
    res.locals.user = req.user;
    next();
});

app.use(function(req, res, next) {
    // Remember original destination before login.
    var path = req.path.split('/')[1];
    if (/auth|login|logout|signup|fonts|favicon/i.test(path)) {
        return next();
    }
    req.session.returnTo = req.path;
    next();
});

app.use(express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));

/**
 * Main routes.
 */
app.get('/', homeController.index);

app.get(
  '/resources/interview-questions',
  resourcesController.interviewQuestions);
app.get('/learn-to-code', resourcesController.learnToCode);
app.get('/privacy', resourcesController.privacy);
app.get('/jquery-exercises', resourcesController.jqueryExercises);
app.get('/live-pair-programming', resourcesController.livePairProgramming);
app.get('/javascript-in-your-inbox', resourcesController.javaScriptInYourInbox);
app.get('/chromebook', resourcesController.chromebook);
app.get('/pair-program-with-team-viewer', resourcesController.pairProgramWithTeamViewer);
app.get('/done-with-first-100-hours', resourcesController.doneWithFirst100Hours);
app.get('/programmer-interview-questions-app', resourcesController.programmerInterviewQuestionsApp);

app.get('/about', resourcesController.about);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/email-signup', userController.getEmailSignup);
app.get('/email-signin', userController.getEmailSignin);
app.post('/email-signup', userController.postEmailSignup);
app.post('/email-signin', userController.postLogin);
app.get('/nonprofits', contactController.getContact);
app.post('/nonprofits', contactController.postContact);

// # Protected routes, user must be logged in.
app.post(
    '/update-progress',
    passportConf.isAuthenticated,
    userController.updateProgress);

app.get(
    '/challenges/:challengeNumber',
    passportConf.isAuthenticated,
    challengesController.returnChallenge);
app.all('/account', passportConf.isAuthenticated);
app.get('/account', userController.getAccount);
app.post('/account/profile', userController.postUpdateProfile);
app.post('/account/password', userController.postUpdatePassword);
app.post('/account/delete', userController.postDeleteAccount);
app.get('/account/unlink/:provider', userController.getOauthUnlink);

/**
 * API examples routes.
 * accepts a post request. the challenge id req.body.challengeNumber
 * and updates user.challengesHash & user.challengesCompleted
 *
 */
app.post('/completed_challenge', function(req, res) {
    req.user.challengesHash[parseInt(req.body.challengeNumber)] = Math.round(+new Date() / 1000);
    var ch = req.user.challengesHash;
    var p = 0;
    for (k in ch) {
        if (ch[k] > 0) { p += 1}
    }
    req.user.points = p;
    req.user.save();
});

/**
 * OAuth sign-in routes.
 */

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get(
  '/auth/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
});

app.get(
  '/auth/linkedin',
  passport.authenticate('linkedin', {
    state: 'SOME STATE'
  }));

app.get(
  '/auth/linkedin/callback',
  passport.authenticate('linkedin', {
    successRedirect: '/',
    failureRedirect: '/login'
  }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/',failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
});

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/',failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
});

app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/',failureRedirect: '/login' }), function(req, res) {
    res.redirect(req.session.returnTo || '/');
});

/**
 * 500 Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function() {
  console.log(
    'FreeCodeCamp server listening on port %d in %s mode',
    app.get('port'),
    app.get('env')
  );
});

module.exports = app;
