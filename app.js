require('newrelic');
require('dotenv').load();
/**
 * Module dependencies.
 */

var express = require('express'),
    debug = require('debug')('freecc:server'),
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    session = require('express-session'),
    logger = require('morgan'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    _ = require('lodash'),
    MongoStore = require('connect-mongo')(session),
    flash = require('express-flash'),
    path = require('path'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    expressValidator = require('express-validator'),
    connectAssets = require('connect-assets'),

    /**
     * Controllers (route handlers).
     */
    homeController = require('./controllers/home'),
    challengesController = require('./controllers/challenges'),
    resourcesController = require('./controllers/resources'),
    contactController = require('./controllers/contact'),

    /**
     * API keys and Passport configuration.
     */
    secrets = require('./config/secrets'),
    passportUtils = require('./config/passport');

/**
 * Create Express server.
 */
var app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(secrets.db);
mongoose.connection.on('error', function () {
    console.error(
        'MongoDB Connection Error. Please make sure that MongoDB is running.'
    );
});

/**
 * Express configuration.
 */


app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
var oneYear = 31557600000;
app.use(express.static(__dirname + '/public', {maxAge: oneYear}));
app.use(connectAssets({
    paths: [
        path.join(__dirname, 'public/css'),
        path.join(__dirname, 'public/js')
    ],
    helperContext: app.locals
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator({
    customValidators: {
        matchRegex: function (param, regex) {
            return regex.test(param);
        }
    }
}));
app.use(methodOverride());
app.use(cookieParser());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({
        url: secrets.db,
        'auto_reconnect': true
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.disable('x-powered-by');

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.xframe());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var trusted = [
    "'self'",
    '*.freecodecamp.com',
    '*.gstatic.com',
    '*.google-analytics.com',
    '*.googleapis.com',
    '*.google.com',
    '*.gstatic.com',
    '*.doubleclick.net',
    '*.twitter.com',
    '*.twitch.tv',
    '*.twimg.com',
    "'unsafe-eval'",
    "'unsafe-inline'",
    '*.rafflecopter.com',
    '*.bootstrapcdn.com',
    '*.cloudflare.com',
    'localhost:3001',
    'ws://localhost:3001/',
    'http://localhost:3001',
    'localhost:3000',
    'ws://localhost:3000/',
    'http://localhost:3000',
    '*.ionicframework.com',
    'https://syndication.twitter.com',
    '*.youtube.com',
    '*.jsdelivr.net',
    '*.togetherjs.com',
    'https://*.togetherjs.com',
    'wss://hub.togetherjs.com',
    '*.ytimg.com',
    'wss://fcctogether.herokuapp.com',
    '*.bitly.com'
];

app.use(helmet.contentSecurityPolicy({
    defaultSrc: trusted,
    scriptSrc: [
        '*.optimizely.com',
        '*.aspnetcdn.com',
        '*.d3js.org',
    ].concat(trusted),
    'connect-src': [
        'ws://*.rafflecopter.com',
        'wss://*.rafflecopter.com',
        'https://*.rafflecopter.com',
        'ws://www.freecodecamp.com',
        'http://www.freecodecamp.com'
    ].concat(trusted),
    styleSrc: trusted,
    imgSrc: [
        '*.evernote.com',
        '*.amazonaws.com',
        'data:',
        '*.licdn.com',
        '*.gravatar.com',
        '*.akamaihd.net',
        'graph.facebook.com',
        '*.githubusercontent.com',
        '*.googleusercontent.com',
        '*' /* allow all input since we have user submitted images for public profile*/
    ].concat(trusted),
    fontSrc: ['*.googleapis.com'].concat(trusted),
    mediaSrc: [
        '*.amazonaws.com',
        '*.twitter.com'
    ].concat(trusted),
    frameSrc: [
        '*.gitter.im',
        '*.vimeo.com',
        '*.twitter.com',
        '*.rafflecopter.com',
        '*.ghbtns.com'
    ].concat(trusted),
    reportOnly: false, // set to true if you only want to report errors
    setAllHeaders: false, // set to true if you want to set all headers
    safari5: false // set to true if you want to force buggy CSP in Safari 5
}));

app.use(function (req, res, next) {
    // Make user object available in templates.
    res.locals.user = req.user;
    next();
});

app.use(function (req, res, next) {
    // Remember original destination before login.
    var path = req.path.split('/')[1];
    if (/auth|login|logout|signup|fonts|favicon/i.test(path)) {
        return next();
    }
    req.session.returnTo = req.path;
    next();
});

app.use(
    express.static(path.join(__dirname, 'public'), {maxAge: 31557600000})
)

/**
 * Challenge related routes
 */
app.get(
    '/challenges/',
    challengesController.returnNextChallenge
);
app.get(
    '/challenges/:challengeNumber',
    challengesController.returnChallenge
);

app.all('/account', passportUtils.isAuthenticated);


/**
 * API examples routes.
 * accepts a post request. the challenge id req.body.challengeNumber
 * and updates user.challengesHash & user.challengesCompleted
 *
 */
app.post('/completed-challenge', function (req, res) {
    req.user.challengesHash[parseInt(req.body.challengeNumber)] =
        Math.round(+new Date() / 1000);
    var timestamp = req.user.challengesHash;
    var points = 0;
    for (var key in timestamp) {
        if (timestamp[key] > 0 && req.body.challengeNumber < 54) {
            points += 1;
        }
    }
    req.user.points = points;
    req.user.save();
});

/**
 * 500 Error Handler.
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(app.get('port'), function () {
    console.log(
        'FreeCodeCamp server listening on port %d in %s mode',
        app.get('port'),
        app.get('env')
    );
});

module.exports = app;
