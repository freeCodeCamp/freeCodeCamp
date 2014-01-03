var domain = require('domain');
var express = require('express');
var fs = require('fs');
var flash = require('connect-flash');
var less = require('less-middleware');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');

// Load controllers
var home = require('./controllers/home');
var user = require('./controllers/user');
var api = require('./controllers/api');
var contact = require('./controllers/contact');

// App Configuration (API Keys, Database URI)
var secrets = require('./config/secrets');
var passportConf = require('./config/passport');

// Connect to MongoDB on a separate domain
var dbDomain = domain.create();
dbDomain.run(function() {
  mongoose.connect(secrets.db);
});

// Graceful error handling for MongoDB
dbDomain.on('error', function(err) {
  console.error(err.message);
  setTimeout(function() {
    mongoose.connect(secrets.db);
  }, 1000);
});

// Initialize express application
var app = express();

// Express Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.session({ secret: '0000' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(function(req, res, next) {
  res.locals.user = req.user;
  next();
});
app.use(flash());
app.use(less({ src: __dirname + '/public', compress: true }));
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
app.use(function(req, res) {
  res.status(404);
  res.render('404');
});
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  res.render('500');
});

// Login/Signup Routes
app.get('/', home.index);
app.get('/login', user.getLogin);
app.post('/login', user.postLogin);
app.get('/logout', user.logout);
app.get('/signup', user.getSignup);
app.post('/signup', user.postSignup);

// Primary Routes
app.get('/contact', contact.getContact);
app.post('/contact', contact.postContact);
app.get('/account', passportConf.isAuthenticated, user.getAccount);
app.post('/account/profile', passportConf.isAuthenticated, user.postAccountProfileTab);
app.post('/account/settings', passportConf.isAuthenticated, user.postAccountSettingsTab);
app.post('/account/delete', passportConf.isAuthenticated, user.postDeleteAccount);
app.get('/account/unlink/:provider', passportConf.isAuthenticated, user.getOauthUnlink);
app.get('/api', api.getApi);
app.get('/api/foursquare', passportConf.isAuthenticated, passportConf.isAuthorized, api.getFoursquare);
app.get('/api/tumblr', passportConf.isAuthenticated, passportConf.isAuthorized, api.getTumblr);
app.get('/api/facebook', passportConf.isAuthenticated, api.getFacebook);
app.get('/api/scraping', api.getScraping);
app.get('/api/github', passportConf.isAuthenticated, passportConf.isAuthorized, api.getGithub);
app.get('/api/lastfm', api.getLastfm);
app.get('/api/nyt', api.getNewYorkTimes);
app.get('/api/twitter', passportConf.isAuthenticated, api.getTwitter);
app.get('/api/aviary', api.getAviary);

// OAuth Routes
app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));
app.get('/auth/foursquare', passport.authorize('foursquare'));
app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), function(req, res) { res.redirect('/api/foursquare'); });
app.get('/auth/tumblr', passport.authorize('tumblr'));
app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), function(req, res) { res.redirect('/api/tumblr'); });

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
