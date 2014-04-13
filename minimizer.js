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
  choices: ['Authentication', 'API Examples', 'Exit'],
  filter: function(val) {
    return val.toLowerCase();
  }
}, function(answer) {
  if (answer.category === 'authentication') {
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
        { name: 'LinkedIn' },
        { name: 'Instagram' }
      ],
      validate: function(answer) {
        if (answer.length < 1) {
          return 'You must choose at least one authentication method.';
        }
        return true;
      },
      filter: function(val) {
        return _.map(val, function(auth) {
          return auth.toLowerCase();
        });
      }
    }, function(answer) {
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

      var passportConfigFile = 'config/passport.js';
      var userModelFile = 'models/User.js';
      var profileTemplateFile = 'views/account/profile.jade';
      var loginTemplateFile = 'views/account/login.jade';

      var passportConfig = fs.readFileSync(passportConfigFile).toString();
      var loginTemplate = fs.readFileSync(loginTemplateFile).toString();
      var profileTemplate = fs.readFileSync(profileTemplateFile).toString();
      var userModel = fs.readFileSync(userModelFile).toString();

      var index,
          output;

      if (_.contains(answer.auth, 'facebook')) {
        if (passportConfig.indexOf(facebookStrategyRequire) < 0) {
          // config/passport.js (add)
          passportConfig = passportConfig.split('\n');
          index = passportConfig.indexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, facebookStrategyRequire);
          index = passportConfig.indexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, facebookStrategy);
          output = passportConfig.join('\n');
          fs.writeFileSync(passportConfigFile, output);

          // views/account/login.jade (add)
          loginTemplate = loginTemplate.split('\n');
          loginTemplate.push(facebookButton);
          output = loginTemplate.join('\n');
          fs.writeFileSync(loginTemplateFile, output);

          // views/account/profile.jade (add)
          profileTemplate = profileTemplate.split('\n');
          index = profileTemplate.indexOf('    h3 Linked Accounts');
          profileTemplate.splice(index + 1, 0, facebookLinkUnlink);
          output = profileTemplate.join('\n');
          fs.writeFileSync(profileTemplateFile, output);

          // models/User.js
          userModel = userModel.split('\n');
          index = userModel.indexOf('  tokens: Array,');
          userModel.splice(index -1 , 0, facebookModel);
          output = userModel.join('\n');
          fs.writeFileSync(userModelFile, output);

          console.log('Facebook authentication has been added.'.info);
        } else {
          console.log('Facebook authentication is already active.'.warn);
        }
      } else {
        // config/passport.js (remove)
        passportConfig = passportConfig.split('\n');
        index = passportConfig.indexOf(facebookStrategyRequire);
        passportConfig.splice(index, 1);
        index = passportConfig.indexOf('// Sign in with Facebook.');
        passportConfig.splice(index, 47);
        output = passportConfig.join('\n');
        fs.writeFileSync(passportConfigFile, output);

        // views/account/login.jade (remove)
        loginTemplate = loginTemplate.split('\n');
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')");
        loginTemplate.splice(index, 4);
        output = loginTemplate.join('\n');
        fs.writeFileSync(loginTemplateFile, output);

        // views/account/profile.jade (remove)
        profileTemplate = profileTemplate.split('\n');
        index = profileTemplate.indexOf("  if user.facebook");
        profileTemplate.splice(index - 1, 5);
        output = profileTemplate.join('\n');
        fs.writeFileSync(profileTemplateFile, output);

        // models/User.js
        userModel = userModel.split('\n');
        index = userModel.indexOf('  facebook: String,');
        userModel.splice(index, 1);
        output = userModel.join('\n');
        fs.writeFileSync(userModelFile, output);

        console.log('Facebook authentication has been removed.'.error);
      }
    });
  }
});