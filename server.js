var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    config = require('./conf');

var User = require('./server/models/User');

var db = mongoose.connect(config.db);
var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/client/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieSession({ secret: process.env.COOKIE_SECRET || 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(config.root + '/public'));

passport.use(User.localStrategy);
passport.use(User.twitterStrategy());
passport.use(User.facebookStrategy());
passport.use(User.googleStrategy());
passport.use(User.linkedInStrategy());
passport.serializeUser(User.serializeUser);
passport.deserializeUser(User.deserializeUser);


/**
 * API Controllers
 */
var articles = require('./controllers/articles');
var users = require('./controllers/users');


/**
 * API Routes
 */
app.post('/api/users', users.create);
app.get('/api/users/me', users.me);
app.get('/api/users/:userId', users.show);
app.get('/api/articles', articles.all);
app.post('/api/articles', requiresLogin, articles.create);
app.get('/api/articles/:articleId', articles.show);
app.put('/api/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
app.del('/api/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});