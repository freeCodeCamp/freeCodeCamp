var express = require('express'),
    http = require('http'),
    path = require('path'),
    fs = require('fs'),
    mongoose = require('mongoose'),
    passport = require('passport'),

    index = require('./controllers'),
    api = require('./controllers/api');



var db = module.exports = mongoose.connect('localhost');
var app = module.exports = express();

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieSession({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);


if (app.get('env') === 'development') {
  app.use(express.errorHandler());
};


/**
 * API Routes
 */
app.get('/', index.index);
app.get('/partial/:name', index.partial);


// JSON API
app.get('/api/name', api.name);

// redirect all others to the index (HTML5 history)
app.get('*', index.index);


app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});