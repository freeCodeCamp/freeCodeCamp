var _ = require('underscore');
var colors = require('colors');
var fs = require('fs');
var inquirer = require('inquirer');
var M = require('mstring');

colors.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

inquirer.prompt({
  type: 'list',
  name: 'category',
  message: 'Hackathon Starter Generator:',
  choices: ['Authentication', 'Exit']
}, function(answer) {
  if (answer.category === 'Authentication') {
    inquirer.prompt({
      type: 'checkbox',
      message: 'Select Authentication Providers:',
      name: 'auth',
      choices: [
        { name: 'Facebook', checked: true },
        { name: 'GitHub', checked: true },
        { name: 'Google', checked: true },
        { name: 'Twitter', checked: true },
        { name: 'Local', checked: true },
        { name: 'LinkedIn', checked: true }
      ],
      validate: function(answer) {
        if (answer.length < 1) return 'You must choose at least one authentication method.';
        return true;
      }
    }, function(answer) {
      var index;

      var passportConfigFile = 'config/passport.js';
      var userModelFile = 'models/User.js';
      var profileTemplateFile = 'views/account/profile.jade';
      var loginTemplateFile = 'views/account/login.jade';

      var passportConfig = fs.readFileSync(passportConfigFile).toString().split('\n');
      var loginTemplate = fs.readFileSync(loginTemplateFile).toString().split('\n');
      var profileTemplate = fs.readFileSync(profileTemplateFile).toString().split('\n');
      var userModel = fs.readFileSync(userModelFile).toString().split('\n');

      if (_.contains(answer.auth, 'Facebook')) {
        var facebookStrategyRequire = "var FacebookStrategy = require('passport-facebook').Strategy;";
        var facebookStrategy = M(function() {
          /***
          // Sign in with Facebook.

          passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
            if (req.user) {
              User.findOne({ $or: [{ facebook: profile.id }, { email: profile.email }] }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a Facebook account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.save(function(err) {
                      req.flash('info', { msg: 'Facebook account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });
            } else {
              User.findOne({ facebook: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
                  if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Facebook manually from Account Settings.' });
                    done(err);
                  } else {
                    var user = new User();
                    user.email = profile._json.email;
                    user.facebook = profile.id;
                    user.tokens.push({ kind: 'facebook', accessToken: accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = 'https://graph.facebook.com/' + profile.id + '/picture?type=large';
                    user.profile.location = (profile._json.location) ? profile._json.location.name : '';
                    user.save(function(err) {
                      done(err, user);
                    });
                  }
                });
              });
            }
          }));

          ***/
        });
        var facebookButton = M(function() {
          /***
           a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')
             i.fa.fa-facebook
             | Sign in with Facebook
           ***/
        });
        var facebookLinkUnlink = M(function() {
          /***

           if user.facebook
             p: a.text-danger(href='/account/unlink/facebook') Unlink your Facebook account
           else
             p: a(href='/auth/facebook') Link your Facebook account
           ***/
        });
        var facebookModel = '  facebook: String,';

        if (passportConfig.indexOf(facebookStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, facebookStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, facebookStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(facebookButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, facebookLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, facebookModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('Facebook authentication has been added.'.info);
        } else {
          console.log('Facebook authentication is already active.'.warn);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(facebookStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Facebook.');
        passportConfig.splice(index, 47);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf("  if user.facebook");
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  facebook: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('Facebook authentication has been removed.'.error);
      }

      if (_.contains(answer.auth, 'Google')) {
        var googleStrategyRequire = "var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;";
        var googleStrategy = M(function() {
          /***
          // Sign in with Google.

          passport.use(new GoogleStrategy(secrets.google, function(req, accessToken, refreshToken, profile, done) {
            if (req.user) {
              User.findOne({ $or: [{ google: profile.id }, { email: profile.email }] }, function(err, existingUser) {
                if (existingUser) {
                  req.flash('errors', { msg: 'There is already a Google account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
                  done(err);
                } else {
                  User.findById(req.user.id, function(err, user) {
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.profile.name = user.profile.name || profile.displayName;
                    user.profile.gender = user.profile.gender || profile._json.gender;
                    user.profile.picture = user.profile.picture || profile._json.picture;
                    user.save(function(err) {
                      req.flash('info', { msg: 'Google account has been linked.' });
                      done(err, user);
                    });
                  });
                }
              });
            } else {
              User.findOne({ google: profile.id }, function(err, existingUser) {
                if (existingUser) return done(null, existingUser);
                User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
                  if (existingEmailUser) {
                    req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with Google manually from Account Settings.' });
                    done(err);
                  } else {
                    var user = new User();
                    user.email = profile._json.email;
                    user.google = profile.id;
                    user.tokens.push({ kind: 'google', accessToken: accessToken });
                    user.profile.name = profile.displayName;
                    user.profile.gender = profile._json.gender;
                    user.profile.picture = profile._json.picture;
                    user.save(function(err) {
                      done(err, user);
                    });
                  }
                });
              });
            }
          }));

          ***/
        });

        var googleButton = M(function() {
          /***
           a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')
             i.fa.fa-google-plus
             | Sign in with Google
           ***/
        });
        var googleLinkUnlink = M(function() {
          /***

           if user.google
             p: a.text-danger(href='/account/unlink/google') Unlink your Google account
           else
             p: a(href='/auth/google') Link your Google account
           ***/
        });
        var googleModel = '  google: String,';

        if (passportConfig.indexOf(googleStrategyRequire) < 0) {

          // config/passport.js (+)
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, googleStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, googleStrategy);
          fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

          // views/account/login.jade (+)
          loginTemplate.push(googleButton);
          fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

          // views/account/profile.jade (+)
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, googleLinkUnlink);
          fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

          // models/User.js (+)
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index - 1, 0, googleModel);
          fs.writeFileSync(userModelFile, userModel.join('\n'));

          console.log('Google authentication has been added.'.info);
        } else {
          console.log('Google authentication is already active.'.warn);
        }
      } else {

        // config/passport.js (-)
        index = passportConfig.indexOf(googleStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Google.');
        passportConfig.splice(index, 46);
        fs.writeFileSync(passportConfigFile, passportConfig.join('\n'));

        // views/account/login.jade (-)
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-google-plus.btn-social(href='/auth/google')");
        loginTemplate.splice(index, 4);
        fs.writeFileSync(loginTemplateFile, loginTemplate.join('\n'));

        // views/account/profile.jade (-)
        index = profileTemplate.indexOf("  if user.google");
        profileTemplate.splice(index - 1, 5);
        fs.writeFileSync(profileTemplateFile, profileTemplate.join('\n'));

        // models/User.js (-)
        index = userModel.indexOf('  google: String,');
        userModel.splice(index, 1);
        fs.writeFileSync(userModelFile, userModel.join('\n'));

        console.log('Google authentication has been removed.'.error);
      }
    });
  }
});