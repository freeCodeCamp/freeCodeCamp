/**
 * Module dependencies.
 */

var express = require('express');
var cookieParser = require('cookie-parser');
var compress = require('compression');
var session = require('express-session');
var bodyParser = require('body-parser');
var logger = require('morgan');
var errorHandler = require('errorhandler');
var csrf = require('lusca').csrf();
var methodOverride = require('method-override');

var MongoStore = require('connect-mongo')({ session: session });
var flash = require('express-flash');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var expressValidator = require('express-validator');
var connectAssets = require('connect-assets');

/**
 * Load controllers.
 */

var homeController = require('./controllers/home');
var userController = require('./controllers/user');
var apiController = require('./controllers/api');
var contactController = require('./controllers/contact');

/**
 * API keys + Passport configuration.
 */

var secrets = require('./config/secrets');
var passportConf = require('./config/passport');

/**
 * Create Express server.
 */

var app = express();

/**
 * Mongoose configuration.
 */

mongoose.connect(secrets.db);
mongoose.connection.on('error', function() {
  console.error('MongoDB Connection Error. Make sure MongoDB is running.');
});

var hour = 3600000;
var day = hour * 24;
var week = day * 7;

/**
 * CSRF whitelist.
 */

var whitelist = ['/url1', '/url2'];

/**
 * Express configuration.
 */

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(connectAssets({
  paths: ['public/css', 'public/js'],
  helperContext: app.locals
}));
app.use(compress());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(expressValidator());
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
  secret: secrets.sessionSecret,
  store: new MongoStore({
    url: secrets.db,
    auto_reconnect: true
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(function(req, res, next) {
  // CSRF protection.
  if (whitelist.indexOf(req.path) !== -1) next();
  else csrf(req, res, next);
});
app.use(function(req, res, next) {
  // Make user object available in templates.
  res.locals.user = req.user;
  next();
});
app.use(function(req, res, next) {
  // Remember original destination before login.
  var path = req.path.split('/')[1];
  if (/auth|login|logout|signup|img|fonts|favicon/i.test(path)) {
    return next();
  }
  req.session.returnTo = req.path;
  next();
});
app.use(express.static(path.join(__dirname, 'public'), { maxAge: week }));

/**
 * Application routes.
 */

app.route('/')
  .get(homeController.index);

app.route('/login')
  .get(userController.getLogin)
  .post(userController.postLogin);

app.route('/logout')
  .get(userController.logout);

app.route('/forgot')
  .get(userController.getForgot)
  .post(userController.postForgot);

app.route('/reset/:token')
  .get(userController.getReset)
  .post(userController.postReset);

app.route('/signup')
  .get(userController.getSignup)
  .post(userController.postSignup);

app.route('/contact')
  .get(contactController.getContact)
  .post(contactController.postContact);

app.route('/account')
  .all(passportConf.isAuthenticated)
  .get(userController.getAccount);

app.route('/account/profile')
  .all(passportConf.isAuthenticated)
  .post(userController.postUpdateProfile);

app.route('/account/password')
  .all(passportConf.isAuthenticated)
  .post(userController.postUpdatePassword);

app.route('/account/delete')
  .all(passportConf.isAuthenticated)
  .post(userController.postDeleteAccount);

app.route('/account/unlink/:provider')
  .all(passportConf.isAuthenticated)
  .get(userController.getOauthUnlink);

app.route('/api')
  .get(apiController.getApi);

app.route('/api/lastfm')
  .get(apiController.getLastfm);

app.route('/api/nyt')
  .get(apiController.getNewYorkTimes);

app.route('/api/aviary')
  .get(apiController.getAviary);

app.route('/api/steam')
  .get(apiController.getSteam);

app.route('/api/aviary')
  .get(apiController.getAviary);

app.route('/api/scraping')
  .get(apiController.getScraping);

app.route('/api/yahoo')
  .get(apiController.getYahoo)

app.route('/api/stripe')
  .get(apiController.getStripe)
  .post(apiController.postStripe);

app.route('/api/twilio')
  .get(apiController.getTwilio)
  .post(apiController.postTwilio);

app.route('/api/clockwork')
  .get(apiController.getClockwork)
  .post(apiController.postClockwork);

app.route('/api/foursquare')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getFoursquare);

app.route('/api/tumblr')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getTumblr);

app.route('/api/foursquare')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getFoursquare);

app.route('/api/facebook')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getFacebook);

app.route('/api/github')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getGithub);

app.route('/api/twitter')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getTwitter)
  .post(apiController.postTwitter);

app.route('/api/venmo')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getVenmo)
  .post(apiController.postVenmo);

app.route('/api/linkedin')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getLinkedin)

app.route('/api/instagram')
  .all(passportConf.isAuthenticated)
  .all(passportConf.isAuthorized)
  .get(apiController.getInstagram)

/**
 * OAuth routes for sign-in.
 */

app.get('/auth/instagram', passport.authenticate('instagram'));
app.get('/auth/instagram/callback', passport.authenticate('instagram', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'user_location'] }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});
app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), function(req, res) {
  res.redirect(req.session.returnTo || '/');
});

/**
 * OAuth routes for API examples that require authorization.
 */

app.get('/auth/foursquare', passport.authorize('foursquare'));
app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), function(req, res) {
  res.redirect('/api/foursquare');
});
app.get('/auth/tumblr', passport.authorize('tumblr'));
app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), function(req, res) {
  res.redirect('/api/tumblr');
});
app.get('/auth/venmo', passport.authorize('venmo', { scope: 'make_payments access_profile access_balance access_email access_phone' }));
app.get('/auth/venmo/callback', passport.authorize('venmo', { failureRedirect: '/api' }), function(req, res) {
  res.redirect('/api/venmo');
});

/**
 * 500 Error Handler.
 * As of Express 4.0 it must be placed at the end, after all routes.
 */

app.use(errorHandler());

/**
 * Start Express server.
 */

app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

module.exports = app;