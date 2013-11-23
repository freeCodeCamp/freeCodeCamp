var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    flash = require('connect-flash'),
    mongoose = require('mongoose'),
    passport = require('passport');

// TODO: Add node-opencv!!
// TODO: "Lego-like" modules, e.g. swap one login view for another
// TODO: Let users plug any components of the website
// App Configuration (API Keys, Database URI)
var config = require('./config/config.json');
var passportConf = require('./config/passport');


// Load controllers
var home = require('./controllers/home'),
    user = require('./controllers/user'),
    api = require('./controllers/api'),
    contact = require('./controllers/contact');

// Connect to database
var db = mongoose.connect(config.db);



// Initialize express application
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.errorHandler());
app.use(express.favicon());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({ secret: 'Bob-vs-Alice' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


app.get('/', home.index);
app.get('/login', user.getLogin);
app.post('/login', user.postLogin);
app.get('/logout', user.logout);
app.get('/signup', user.getSignup);
app.post('/signup', user.postSignup);
app.get('/account', passportConf.ensureAuthenticated, user.account);
app.get('/admin', passportConf.ensureAuthenticated, passportConf.ensureAdmin(), user.getAdmin);
app.get('/partials/:name', home.partials);
app.get('/api', api.apiBrowser);
app.get('/api/foursquare', passportConf.ensureAuthenticated, api.foursquare);
app.get('/api/tumblr', passportConf.ensureAuthenticated, api.tumblr);
app.get('/contact', contact.getContact);
app.post('/contact', contact.postContact);

app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: [
    'email'
  ]
}), function(req, res) {
  // The request will be redirected to Facebook for authentication, so this
  // function will not be called.
});

app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));


app.get('/auth/google', passport.authenticate('google', {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
}), function (req, res) {
  // The request will be redirected to Google for authentication, so this
  // function will not be called.
});

app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/login'
}), function (req, res) {
  res.redirect('/');
});


app.get('/auth/foursquare', api.foursquareAuth);
app.get('/auth/foursquare/callback', api.foursquareCallback);
app.get('*', home.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});