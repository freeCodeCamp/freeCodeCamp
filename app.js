// Load modules and libraries
var express = require('express');
var http = require('http');
var less = require('less-middleware');
var path = require('path');
var fs = require('fs');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var passport = require('passport');

// Load controllers
var home = require('./controllers/home');
var user = require('./controllers/user');
var api = require('./controllers/api');
var contact = require('./controllers/contact');

// App Configuration (API Keys, Database URI)
var config = require('./config/config.json');
var passportConf = require('./config/passport');

// Connect to database
var db = mongoose.connect(config.db);

// Initialize express application
var app = express();

// Express Configuration
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'Bob vs Alice' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(less({ src: __dirname + '/public', compress: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// Express Routes
app.get('/', home.index);
app.get('/login', user.getLogin);
app.post('/login', user.postLogin);
app.get('/logout', user.logout);

app.get('/signup', user.getSignup);
app.post('/signup', user.postSignup);

app.get('/account', passportConf.ensureAuthenticated, user.getAccount);
app.post('/account/profile', passportConf.ensureAuthenticated, user.postAccountProfile);
app.post('/account/settings', passportConf.ensureAuthenticated, user.postAccountSettings);

app.get('/partials/:name', home.partials);

app.get('/api', api.apiBrowser);
app.get('/api/foursquare', passportConf.ensureAuthenticated, api.foursquare);
app.get('/api/tumblr', passportConf.ensureAuthenticated, api.tumblr);
app.get('/api/facebook', passportConf.ensureAuthenticated, api.facebook);

app.get('/contact', contact.getContact);
app.post('/contact', contact.postContact);

app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));

app.get('/auth/github', passport.authenticate('github'));
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), function(req, res) { res.redirect('/'); });

app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));


app.get('/auth/foursquare', api.foursquareAuth);
app.get('/auth/foursquare/callback', api.foursquareCallback);

app.get('*', home.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
