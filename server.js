var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    passport = require('passport'),

    config = require('./config'),

    // Load controllers
    home = require('./controllers/home'),
    api = require('./controllers/api'),
    auth = require('./controllers/auth'),
    users = require('./controllers/users');

// Connect to database
mongoose.connect(config.db, function(err, res) {
  if (err) {
    console.log ('Error connecting to database: ' + err);
  } else {
    console.log ('Successfully connected to database!');
  }
});

var app = module.exports = express();

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

// Routes
app.get('/', home.index);

//app.get('/account', auth.ensureAuthenticated, users.account);
app.get('/logout', users.logout);
app.post('/login', users.postlogin);
//app.get('/admin', auth.ensureAuthenticated, auth.ensureAdmin(), users.admin);
//app.get('/api/name', api.name);
app.get('/partials/login', users.getlogin);
app.get('/partials/:name', home.partials);

app.get('*', home.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});