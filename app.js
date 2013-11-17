var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    passport = require('passport');

// Configuration (API Keys, Database URI)
var config = require('./config.json');

// Load controllers
var home = require('./controllers/home'),
    api = require('./controllers/api'),
    auth = require('./controllers/auth'),
    user = require('./controllers/user');

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
app.use(express.session({ secret: 'Bob-Alice' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);

// Routes (url path, corresponding controller)
app.get('/', home.index);

app.get('/login', user.getLogin);
app.post('/login', user.postlogin);

app.get('/logout', user.logout);

app.get('/signup', user.getSignup);
app.post('/signup', user.postSignup);

app.get('/account', auth.ensureAuthenticated, user.account);

app.get('/admin', auth.ensureAuthenticated, auth.ensureAdmin(), user.admin);
app.get('/api/name', api.name);
app.get('/partials/:name', home.partials);

app.get('*', home.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});