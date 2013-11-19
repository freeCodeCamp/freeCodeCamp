var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    flash = require('connect-flash'),
    mongoose = require('mongoose'),
    passport = require('passport');

// TODO: Add node-opencv!!

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

// Routes (url path, corresponding controller)
app.get('/', home.index);

app.get('/login', user.getLogin);
app.post('/login', user.postLogin);

app.get('/logout', user.logout);

app.get('/signup', user.getSignup);
app.post('/signup', user.postSignup);

app.get('/account', passportConf.ensureAuthenticated, user.account);

app.get('/admin', passportConf.ensureAuthenticated, passportConf.ensureAdmin(), user.admin);
app.get('/partials/:name', home.partials);

app.get('/api', api.apiBrowser);
app.get('/api/foursquare', api.foursquare);
app.get('/api/foursquare/callback', api.foursquareCallback);

app.get('/contact', contact.getContact);
app.post('/contact', contact.postContact);



app.get('/auth/facebook', passport.authenticate('facebook'));
app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  successRedirect: '/',
  failureRedirect: '/login'
}));


app.get('/auth/foursquare', api.foursquareAuth);
app.get('/auth/foursquare/callback', api.foursquareCallback);

app.get('*', home.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});