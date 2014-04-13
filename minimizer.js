var _ = require('underscore');
var colors = require('colors');
var fs = require('fs');
var inquirer = require('inquirer');
var M = require('mstring')

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
          return "You must choose at least one authentication method.";
        }
        return true;
      },
      filter: function(val) {
        return _.map(val, function(auth) {
          return auth.toLowerCase();
        });
      }
    }, function(answer) {
      var passportConfig = 'config/passport.js';
      var userModel  = 'models/User.js';
      var profileTemplate = 'views/account/profile.jade';
      var loginTemplate = 'views/account/login.jade';

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

      var body = fs.readFileSync(passportConfig).toString();

      if (_.contains(answer.auth, 'facebook')) {

        if (body.indexOf(facebookStrategyRequire) < 0) {
          body = body.split('\n');
          var idx = body.lastIndexOf("var passport = require('passport');");
          body.splice(idx + 1, 0, facebookStrategyRequire);
          var idx2 = body.lastIndexOf("passport.deserializeUser(function(id, done) {");
          body.splice(idx2 + 6, 0, facebookStrategy);
          var output = body.join('\n');
          fs.writeFileSync(passportConfig, output);
          console.log('Facebook authentication has been added.');
        } else {
          console.log('Facebook authentication is already active.');
        }
      } else {
        // If unchecked, delete Facebook auth completely.
        body = body.split('\n');
        var idx = body.lastIndexOf(facebookStrategyRequire);
        body.splice(idx, 1);
        var idx2 = body.lastIndexOf('// Sign in with Facebook.');
        body.splice(idx2, 47);
        var output = body.join('\n');
        fs.writeFileSync(passportConfig, output);
        console.log('Facebook authentication has been deleted.');
      }
    });
  } else if (answer.category === 'api examples') {
    console.log('selected api examples');
  }
});
