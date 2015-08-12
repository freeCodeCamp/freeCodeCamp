require('dotenv').load();
var pmx = require('pmx');
pmx.init();

var uuid = require('node-uuid'),
    assign = require('lodash').assign,
    loopback = require('loopback'),
    boot = require('loopback-boot'),
    expressState = require('express-state'),
    path = require('path'),
    passportProviders = require('./passport-providers');

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
app.disable('x-powered-by');

// adds passport initialization after session middleware phase is complete
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

// using es6 argument destructing
function setProfileFromGithub(
  user,
  {
    profileUrl: githubURL,
    username
  },
  {
    id: githubId,
    'avatar_url': picture,
    email: githubEmail,
    'created_at': joinedGithubOn,
    blog: website,
    location,
    name
  }
) {
  return assign(
    user,
    { isGithubCool: true, isMigrationGrandfathered: false },
    {
      name,
      username: username.toLowerCase(),
      location,
      joinedGithubOn,
      website,
      picture,
      githubId,
      githubURL,
      githubEmail,
      githubProfile: githubURL
    }
  );
}

var passportOptions = {
  emailOptional: true,
  profileToUser: function(provider, profile) {
    var emails = profile.emails;
    // NOTE(berks): get email or set to null.
    // MongoDB indexs email but can be sparse(blank)
    var email = emails && emails[0] && emails[0].value ?
      emails[0].value :
      null;

    // create random username
    // username will be assigned when camper signups for Github
    var username = 'fcc' + uuid.v4().slice(0, 8);
    var password = generateKey('password');
    var userObj = {
      username: username,
      password: password
    };

    if (email) {
      userObj.email = email;
    }

    if (/github/.test(provider)) {
      setProfileFromGithub(userObj, profile, profile._json);
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
