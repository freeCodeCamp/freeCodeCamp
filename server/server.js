require('dotenv').load();
var pmx = require('pmx');
pmx.init();

var assign = require('lodash').assign,
    loopback = require('loopback'),
    boot = require('loopback-boot'),
    accepts = require('accepts'),
    cookieParser = require('cookie-parser'),
    compress = require('compression'),
    session = require('express-session'),
    expressState = require('express-state'),
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

    passportProviders = require('./passport-providers'),
    rxMiddleware = require('./utils/rx').rxMiddleware,
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

expressState.extend(app);
app.set('state namespace', '__fcc__');

var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

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
// adds passport initialization after session middleware phase is complete

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
  // NOTE(berks): add the following as the blob above was not covering www
  'http://www.freecodecamp.org',
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
  '127.0.0.1',
  '127.0.0.1:3000',
  'ws://127.0.0.1:3000/',
  'http://127.0.0.1:3000',
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
  'https://hn.inspectlet.com/',
  'http://*.github.com'
];

app.use(helmet.csp({
  defaultSrc: trusted,
  scriptSrc: [
    '*.optimizely.com',
    '*.aspnetcdn.com',
    '*.d3js.org',
    'https://cdn.inspectlet.com/inspectlet.js',
    'http://cdn.inspectlet.com/inspectlet.js',
    'http://beta.freecodecamp.com'
  ].concat(trusted),
  'connect-src': [
    'vimeo.com'
  ].concat(trusted),
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

boot(app, {
  appRootDir: __dirname,
  dev: process.env.NODE_ENV
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

Object.keys(passportProviders).map(function(strategy) {
  var config = passportProviders[strategy];
  config.session = config.session !== false;
  passportConfigurator.configureProvider(
    strategy,
    assign(config, passportOptions)
  );
});

app.start = function() {
  app.listen(app.get('port'), function() {
    app.emit('started');
    console.log(
      'FreeCodeCamp server listening on port %d in %s mode',
      app.get('port'),
      app.get('env')
    );
  });
};

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
