require('dotenv').load();
var pmx = require('pmx');
pmx.init();

var _ = require('lodash'),
    uuid = require('node-uuid'),
    assign = require('lodash').assign,
    loopback = require('loopback'),
    boot = require('loopback-boot'),
    expressState = require('express-state'),
    localization = require('./localization.json'),
    path = require('path'),
    passportProviders = require('./passport-providers');

var setProfileFromGithub = require('./utils/auth').setProfileFromGithub;
var getSocialProvider = require('./utils/auth').getSocialProvider;
var getUsernameFromProvider = require('./utils/auth').getUsernameFromProvider;
var generateKey =
  require('loopback-component-passport/lib/models/utils').generateKey;

var isBeta = !!process.env.BETA;
var app = loopback();

expressState.extend(app);
app.set('state namespace', '__fcc__');

var PassportConfigurator =
  require('loopback-component-passport').PassportConfigurator;
var passportConfigurator = new PassportConfigurator(app);

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(loopback.token());

//This function will route the page to localization
//If no localization page(jade file) in config file("localization.json")
//You must config your localization page into localization.json (views Field)
//It will use english instead.
app.use(function(req,res,next){
    var render = res.render;
    var switchLocal = function(jade){
        var langs = req.acceptsLanguages(),
            locals = localization.locals,
            userAgent = '';
        if(langs && (userAgent=langs[0])){
            for(var lang in locals){
               var obj = locals[lang];
                if(obj['views'] && obj['views'].indexOf(jade)>-1 && obj['subset'].indexOf(userAgent)>-1){
                    return jade += obj['suffix'];
                }
            }
        }
        return jade;
    };
    res.render = function(view,locals,cb){
        view = switchLocal(view);
        res.locals.messages = req.flash();
        render.call(res,view,locals,cb);
    };
    next();
});

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

    if (!(/github/).test(provider)) {
      userObj[getSocialProvider(provider)] = getUsernameFromProvider(
        getSocialProvider(provider),
        profile
      );
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

app.start = _.once(function() {
  app.listen(app.get('port'), function() {
    app.emit('started');
    console.log(
      'FreeCodeCamp server listening on port %d in %s',
      app.get('port'),
      app.get('env')
    );
    if (isBeta) {
      console.log('Free Code Camp is in beta mode');
    }
  });
});

module.exports = app;

// start the server if `$ node server.js`
// in production use `$npm start-production`
// or `$node server/production` to start the server
// and wait for DB handshake
if (require.main === module) {
  app.start();
}
