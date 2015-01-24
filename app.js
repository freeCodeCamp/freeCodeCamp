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
    userController = require('./controllers/user'),
    contactController = require('./controllers/contact'),
    bonfireController = require('./controllers/bonfire'),

    /**
     * User model
     */
    User = require('./models/User'),

    /**
     * API keys and Passport configuration.
     */
    secrets = require('./config/secrets'),
    passportConf = require('./config/passport');

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
];

debug(trusted);
app.use(helmet.contentSecurityPolicy({
    defaultSrc: trusted,
    scriptSrc: ['*.optimizely.com', '*.aspnetcdn.com'].concat(trusted),
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
);

/**
 * Main routes.
 */

app.get('/', homeController.index);
app.get('/privacy', resourcesController.privacy);
app.get('/jquery-exercises', resourcesController.jqueryExercises);
app.get('/live-pair-programming', resourcesController.livePairProgramming);
app.get('/javascript-in-your-inbox', resourcesController.javaScriptInYourInbox);
app.get('/chromebook', resourcesController.chromebook);
app.get('/deploy-a-website', resourcesController.deployAWebsite);
app.get('/gmail-shortcuts', resourcesController.gmailShortcuts);
app.get('/control-shortcuts', resourcesController.controlShortcuts);
app.get('/control-shortcuts', resourcesController.deployAWebsite);
app.get('/stats', resourcesController.stats);
app.get(
    '/pair-program-with-team-viewer',
    resourcesController.pairProgramWithTeamViewer
);
app.get('/learn-to-code', resourcesController.about);
app.get('/about', resourcesController.about);
app.get('/login', userController.getLogin);
app.post('/login', userController.postLogin);
app.get('/logout', userController.logout);
app.get('/forgot', userController.getForgot);
app.post('/forgot', userController.postForgot);
app.get('/reset/:token', userController.getReset);
app.post('/reset/:token', userController.postReset);
app.get('/email-signup', userController.getEmailSignup);
app.get('/email-signin', userController.getEmailSignin);
app.post('/email-signup', userController.postEmailSignup);
app.post('/email-signin', userController.postLogin);
app.get('/nonprofits', contactController.getNonprofitsForm);
app.post('/nonprofits', contactController.postNonprofitsForm);
app.get(
  '/done-with-first-100-hours',
  contactController.getDoneWithFirst100Hours
);
app.post(
  '/done-with-first-100-hours',
  contactController.postDoneWithFirst100Hours
);

// # Protected routes, user must be logged in.
app.post(
    '/update-progress',
    passportConf.isAuthenticated,
    userController.updateProgress
);
app.get(
    '/challenges/:challengeNumber',
    challengesController.returnChallenge
);
app.all('/account', passportConf.isAuthenticated);
app.get('/account/api', userController.getAccountAngular);
app.get('/bonfire', bonfireController.index);
app.get(
    '/bonfires/:bonfireNumber',
    bonfireController.returnBonfire
);

// Unique Check API route
app.get('/api/checkUniqueUsername/:username', userController.checkUniqueUsername);
app.get('/api/checkExistingUsername/:username', userController.checkExistingUsername);
app.get('/api/checkUniqueEmail/:email', userController.checkUniqueEmail);
app.get('/account', userController.getAccount);
app.post('/account/profile', userController.postUpdateProfile);
app.post('/account/password', userController.postUpdatePassword);
app.post('/account/delete', userController.postDeleteAccount);
app.get('/account/unlink/:provider', userController.getOauthUnlink);


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
        if (timestamp[key] > 0) {
            points += 1;
        }
    }
    req.user.points = points;
    req.user.save();
});

app.post('/completed-bonfire/', function (req, res) {
    debug(req.body, 'In post method'
    ); // TODO: remove debug statement
    req.user.bonfiresHash[parseInt(req.body.bonfireNumber)] =
        Math.round(+new Date() / 1000);
    var timestamp = req.user.bonfiresHash;
    var points = 0;
    for (var key in timestamp) {
        if (timestamp[key] > 0) {
            points += 1;
        }
    }

    var isCompletedWith = req.body.bonfireInfo.completedWith || undefined;
    var isCompletedDate =  Math.round(+new Date() / 1000);
    var bonfireHash = req.body.bonfireInfo.bonfireHash;
    var isSolution = req.body.bonfireInfo.solution;
    req.user.bonfiresHash[bonfireHash] = {
        completedWith: isCompletedWith,
        completedDate: isCompletedDate,
        solution: isSolution
    };

    if (isCompletedWith) {
        User.findOne({"profile.username": isCompletedWith}, function(err, pairedWith) {
            if (err) {
                return err;
            } else {
                pairedWith.bonfiresHash[bonfireHash] = {
                    completedWith: req.user._id,
                    completedDate: isCompletedDate,
                    solution: isSolution
                };
                req.user.bonfiresHash[bonfireHash] = {
                    completedWith: pairedWith._id,
                    completedDate: isCompletedDate,
                    solution: isSolution
                };

                req.user.save();
                pairedWith.save();

            }
        })
    } else {
        req.user.bonfiresHash[bonfireHash] = {
            completedWith: null,
            completedDate: isCompletedDate,
            solution: isSolution
        };
        req.user.save();
    }
});

/**
 * OAuth sign-in routes.
 */

var passportOptions = {
    successRedirect: '/',
    failureRedirect: '/login'
};

app.get('/auth/twitter', passport.authenticate('twitter'));
app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', {
        successRedirect: '/',
        failureRedirect: '/login'
    })
);

app.get(
    '/auth/linkedin',
    passport.authenticate('linkedin', {
        state: 'SOME STATE'
    })
);

app.get(
    '/auth/linkedin/callback',
    passport.authenticate('linkedin', passportOptions)
);

app.get(
    '/auth/facebook',
    passport.authenticate('facebook', {scope: ['email', 'user_location']})
);

app.get(
    '/auth/facebook/callback',
    passport.authenticate('facebook', passportOptions), function (req, res) {
        res.redirect(req.session.returnTo || '/');
    }
);

app.get('/auth/github', passport.authenticate('github'));
app.get(
    '/auth/github/callback',
    passport.authenticate('github', passportOptions), function (req, res) {
        res.redirect(req.session.returnTo || '/');
    }
);

app.get(
    '/auth/google',
    passport.authenticate('google', {scope: 'profile email'})
);
app.get(
    '/auth/google/callback',
    passport.authenticate('google', passportOptions), function (req, res) {
        res.redirect(req.session.returnTo || '/');
    }
);

//put this route last
app.get(
    '/:username',
    userController.returnUser
);


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
