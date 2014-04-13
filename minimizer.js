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

      var passportConfigFile = 'config/passport.js';
      var userModelFile = 'models/User.js';
      var profileTemplateFile = 'views/account/profile.jade';
      var loginTemplateFile = 'views/account/login.jade';

      var passportConfig = fs.readFileSync(passportConfigFile).toString();
      var loginTemplate = fs.readFileSync(loginTemplateFile).toString();
      var profileTemplate = fs.readFileSync(profileTemplateFile).toString();

      var index,
          output;

      if (_.contains(answer.auth, 'facebook')) {
        // Check if FacebookStrategy is already in use. If it isn't defined,
        // add Facebook authentication.
        if (passportConfig.indexOf(facebookStrategyRequire) < 0) {

          // config/passport.js
          passportConfig = passportConfig.split('\n');

          index = passportConfig.lastIndexOf("var passport = require('passport');");
          passportConfig.splice(index + 1, 0, facebookStrategyRequire);
          index = passportConfig.lastIndexOf('passport.deserializeUser(function(id, done) {');
          passportConfig.splice(index + 6, 0, facebookStrategy);
          output = passportConfig.join('\n');
          fs.writeFileSync(passportConfigFile, output);

          // views/account/login.jade
          loginTemplate = loginTemplate.split('\n');
          loginTemplate.push(facebookButton);
          output = loginTemplate.join('\n');
          fs.writeFileSync(loginTemplateFile, output);

          // views/account/profile.jade
          profileTemplate = profileTemplate.split('\n');
          profileTemplate.push(facebookButton);
          output = loginTemplate.join('\n');
          fs.writeFileSync(loginTemplateFile, output);


          console.log('Facebook authentication has been added.'.info);
        } else {
          // Otherwise, safely ignore it. No need to add it twice.
          console.log('Facebook authentication is already active.'.warn);
        }
      } else {
        // If checkbox is unchecked, delete Facebook authentication entirely.
        passportConfig = passportConfig.split('\n');

        index = passportConfig.lastIndexOf(facebookStrategyRequire);
        passportConfig.splice(index, 1);

        index = passportConfig.lastIndexOf('// Sign in with Facebook.');
        passportConfig.splice(index, 47);

        output = passportConfig.join('\n');
        fs.writeFileSync(passportConfigFile, output);

        loginTemplate = loginTemplate.split('\n');
        index = loginTemplate.indexOf("      a.btn.btn-block.btn-facebook.btn-social(href='/auth/facebook')");
        loginTemplate.splice(index, 3);
        output = loginTemplate.join('\n');
        fs.writeFileSync(loginTemplateFile, output);

        console.log('Facebook authentication has been removed.'.error);
      }
    });
  }
});