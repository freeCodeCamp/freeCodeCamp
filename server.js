var express = require('express'),
    mongoStore = require('connect-mongo')(express),
    fs = require('fs'),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    config = require('./config'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development',
    config = require('./config/config'),
    auth = require('./config/middlewares/authorization'),
    mongoose = require('mongoose');

//Bootstrap db connection
var db = mongoose.connect(config.db);

//Bootstrap models
var models_path = __dirname + '/app/models';
var walk = function(path) {
    fs.readdirSync(path).forEach(function(file) {
        var newPath = path + '/' + file;
        var stat = fs.statSync(newPath);
        if (stat.isFile()) {
            if (/(.*)\.(js$|coffee$)/.test(file)) {
                require(newPath);
            }
        } else if (stat.isDirectory()) {
            walk(newPath);
        }
    });
};
walk(models_path);

//bootstrap passport config
require('./config/passport')(passport);

var app = express();

/**
 * Express Settings
 */
app.set('showStackError', true);
app.locals.pretty = true;
app.use(express.compress({
  filter: function(req, res) {
    return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
  },
  level: 9
}));
app.use(express.favicon());
app.use(express.static(config.root + '/public'));
app.set('views', config.root + '/app/views');
app.set('view engine', 'jade');
app.enable("jsonp callback");
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({
  secret: '1337',
  store: new mongoStore({
    db: db.connection.db,
    collection: 'sessions'
  })
}));
app.use(flash());
app.use(helpers(config.app.name));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

app.use(function(err, req, res, next) {
    //Treat as 404
    if (~err.message.indexOf('not found')) return next();

    //Log it
    console.error(err.stack);

    //Error page
    res.status(500).render('500', {
        error: err.stack
    });
});

app.use(function(req, res, next) {
    res.status(404).render('404', {
        url: req.originalUrl,
        error: 'Not found'
    });
});


//Bootstrap routes
require('./config/routes')(app, passport, auth);

//Start the app by listening on <port>
var port = process.env.PORT || config.port;
app.listen(port);
console.log('Express app started on port ' + port);

//Initializing logger
logger.init(app, passport, mongoose);

//expose app
exports = module.exports = app;
