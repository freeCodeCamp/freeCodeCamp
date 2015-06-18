require('dotenv').load();
require('pmx').init();
// handle uncaught exceptions. Forever will restart process on shutdown

var R = require('ramda'),
  assign = require('lodash').assign,
  loopback = require('loopback'),
  boot = require('loopback-boot'),
  accepts = require('accepts'),
  cookieParser = require('cookie-parser'),
  compress = require('compression'),
  session = require('express-session'),
  logger = require('morgan'),
  errorHandler = require('errorhandler'),
  methodOverride = require('method-override'),
  bodyParser = require('body-parser'),
  helmet = require('helmet'),
  MongoStore = require('connect-mongo')(session),
  flash = require('express-flash'),
  path = require('path'),
  expressValidator = require('express-validator'),
  lessMiddleware = require('less-middleware'),
  pmx = require('pmx'),

  passportProviders = require('./passport-providers'),
  /**
   * API keys and Passport configuration.
   */
  secrets = require('./../config/secrets');

var generateKey =
  require('loopback-component-passport/lib/models/utils').generateKey;
/**
 * Create Express server.
 */
var app = loopback();
var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//if (process.env.NODE_ENV === 'production') {
//  app.use(forceDomain({
//    hostname: 'www.freecodecamp.com'
//  }));
//}

app.use(compress());
app.use(lessMiddleware(path.join(__dirname, '/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator({
  customValidators: {
    matchRegex: function(param, regex) {
      return regex.test(param);
    }
  }
}));
app.use(methodOverride());
app.use(cookieParser(secrets.cookieSecret));
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: secrets.sessionSecret,
  store: new MongoStore({
    url: secrets.db,
    'autoReconnect': true
  })
}));

app.use(flash());
app.disable('x-powered-by');

app.use(helmet.xssFilter());
app.use(helmet.noSniff());
app.use(helmet.frameguard());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

var trusted = [
  "'self'",
  'blob:',
  '104.236.218.15',
  '*.freecodecamp.com',
  'http://www.freecodecamp.com',
  'https://www.freecodecamp.com',
  'https://freecodecamp.com',
  'https://freecodecamp.org',
  '*.freecodecamp.org',
  'ws://freecodecamp.com/',
  'ws://www.freecodecamp.com/',
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
  '*.bootstrapcdn.com',
  '*.cloudflare.com',
  'https://*.cloudflare.com',
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
  'https://*.jsdelivr.net',
  '*.ytimg.com',
  '*.bitly.com',
  'http://cdn.inspectlet.com/',
  'https://cdn.inspeclet.com/',
  'wss://inspectletws.herokuapp.com/',
  'http://hn.inspectlet.com/',
  '*.googleapis.com',
  '*.gstatic.com',
  'https://hn.inspectlet.com/'
];

app.use(helmet.csp({
  defaultSrc: trusted,
  scriptSrc: [
    '*.optimizely.com',
    '*.aspnetcdn.com',
    '*.d3js.org',
    'https://cdn.inspectlet.com/inspectlet.js',
    'http://cdn.inspectlet.com/inspectlet.js'
  ].concat(trusted),
  'connect-src': [].concat(trusted),
  styleSrc: [
    '*.googleapis.com',
    '*.gstatic.com'
  ].concat(trusted),
  imgSrc: [
    /* allow all input since we have user submitted images for public profile*/
    '*'
  ].concat(trusted),
  fontSrc: [
    '*.googleapis.com',
    '*.gstatic.com'
  ].concat(trusted),
  mediaSrc: [
    '*.amazonaws.com',
    '*.twitter.com'
  ].concat(trusted),
  frameSrc: [
    '*.gitter.im',
    '*.gitter.im https:',
    '*.vimeo.com',
    '*.twitter.com',
    '*.ghbtns.com'
  ].concat(trusted),
  // set to true if you only want to report errors
  reportOnly: false,
  // set to true if you want to set all headers
  setAllHeaders: false,
  // set to true if you want to force buggy CSP in Safari 5
  safari5: false
}));

passportConfigurator.init();

app.use(function(req, res, next) {
  // Make user object available in templates.
  res.locals.user = req.user;
  next();
});

app.use(
  loopback.static(path.join(__dirname, '../public'), {
    maxAge: 86400000
  })
);

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
});

app.use(function(req, res, next) {
  // Remember original destination before login.
  var path = req.path.split('/')[1];
  if (/auth|login|logout|signin|signup|fonts|favicon/i.test(path)) {
    return next();
  } else if (/\/stories\/comments\/\w+/i.test(req.path)) {
    return next();
  }
  req.session.returnTo = req.path;
  next();
});

passportConfigurator.setupModels({
  userModel: app.models.user,
  userIdentityModel: app.models.userIdentity,
  userCredentialModel: app.models.userCredential
});

var passportOptions = {
  emailOptional: true,
  profileToUser: function(provider, profile) {
    var emails = profile.emails;
    // NOTE(berks): get email or set to null.
    // MongoDB indexs email but can be sparse(blank)
    var email = emails && emails[0] && emails[0].value ?
      emails[0].value :
      null;

    var username = (profile.username || profile.id);
    username = typeof username === 'string' ? username.toLowerCase() :
      username;
    var password = generateKey('password');
    var userObj = {
      username: username,
      password: password
    };

    if (email) {
      userObj.email = email;
    }
    return userObj;
  }
};

R.keys(passportProviders).map(function(strategy) {
  var config = passportProviders[strategy];
  config.session = config.session !== false;
  passportConfigurator.configureProvider(
    strategy,
    assign(config, passportOptions)
  );
});

/**
 * OAuth sign-in routes.
 */

/**
 * 500 Error Handler.
 */

//if (process.env.NODE_ENV === 'development') {
if (true) {
  app.use(errorHandler({
    log: true
  }));
} else {
  app.use(pmx.expressErrorHandler());
  // error handling in production disabling eslint due to express parity rules
  // for error handlers
  app.use(function(err, req, res, next) { // eslint-disable-line

    // respect err.status
    if (err.status) {
      res.statusCode = err.status;
    }

    // default status code to 500
    if (res.statusCode < 400) {
      res.statusCode = 500;
    }

    // parse res type
    var accept = accepts(req);
    var type = accept.type('html', 'json', 'text');

    var message = 'opps! Something went wrong. Please try again later';
    if (type === 'html') {
      req.flash('errors', {
        msg: message
      });
      return res.redirect('/');
      // json
    } else if (type === 'json') {
      res.setHeader('Content-Type', 'application/json');
      return res.send({
        message: message
      });
      // plain text
    } else {
      res.setHeader('Content-Type', 'text/plain');
      return res.send(message);
    }
  });
}

/**
 * Start Express server.
 */


app.listen(app.get('port'), function() {
  console.log(
    'FreeCodeCamp server listening on port %d in %s mode',
    app.get('port'),
    app.get('env')
  );
});

// start the server if `$ node server.js`


module.exports = app;
