/*eslint-disable no-inline-comments */
'use strict';
if (process.env.NODE_ENV === 'production') {
  // Logging and uptime tracking for app in production
  require('newrelic');
}
// allows directly require jsx files which are compiled on-the-fly
require('babel/register');
// Loads .env file and adds declared variables onto process.env object
require('dotenv').load();
var R = require('ramda'),
    loopback = require('loopback'),
    boot = require('loopback-boot'),

    // ## middlewares
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    session = require('express-session'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    bodyParser = require('body-parser'),
    helmet = require('helmet'),
    MongoStore = require('connect-mongo')(session),
    flash = require('express-flash'),
    expressValidator = require('express-validator'),
    connectAssets = require('connect-assets'),
    serveStatic = require('serve-static'),

    // ## utils
    path = require('path'),
    generalUtils = require('./utils/generalUtils'),

    // ## config
    passportProviders = require('./passport-providers');


var oneYear = 31557600000;
var app = loopback();

// # loopback passport
var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(compress());
app.use(serveStatic(path.join(__dirname, '../public'), {maxAge: oneYear}));
app.use(connectAssets({
  paths: [
    path.join(__dirname, '../public/css'),
    path.join(__dirname, '../public/js')
  ],
  helperContext: app.locals
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// TODO is this used?
app.use(expressValidator({
  customValidators: {
    matchRegex: function (param, regex) {
      return regex.test(param);
    }
  }
}));
app.use(methodOverride());
app.use(cookieParser(process.env.SESSION_SECRET));

app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.sessionSecret,
  store: new MongoStore({
    url: process.env.MONGODB || process.env.MONGOHQ_URL,
    autoReconnect: true
  })
}));

app.disable('x-powered-by');

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.xframe());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
             'Origin, X-Requested-With, Content-Type, Accept');
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
    '*.d3js.org'
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
    // TODO do we need the above now since we're allowing all images?
    /* allow all input since we have user submitted images for public profile*/
    '*'].concat(trusted),
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
  reportOnly: false, /* set to true if you only want to report errors */
  setAllHeaders: false, /* set to true if you want to set all headers */
  safari5: false /* set to true if you want to force buggy CSP in Safari 5 */
}));

app.use(flash());

passportConfigurator.init();

// Add all global locals here
app.use(function(req, res, next) {
  app.locals.user = req.user;
  app.locals.generateGravatar = generalUtils.generateGravatar;
  next();
});

boot(app, {
  env: process.env.NODE_ENV,
  appRootDir: __dirname
});

passportConfigurator.setupModels({
  userModel: app.models.user,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});

R.keys(passportProviders).map(function(strategy) {
  var config = passportProviders[strategy];
  config.session = config.session !== false;
  passportConfigurator.configureProvider(strategy, config);
});

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
  serveStatic(path.join(__dirname, 'public'), {maxAge: 31557600000})
);

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};

// start the server if `$ node server.js`
if (require.main === module) {
  app.start();
}

module.exports = app;
