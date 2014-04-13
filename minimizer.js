var fs = require('fs');
var inquirer = require('inquirer');
var _ = require('underscore');
var M = require('mstring')

inquirer.prompt({
  type: 'list',
  name: 'category',
  message: '☂  Hackathon Starter',
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
      var passportFile = 'config/passport.js';
      if (_.contains(answer.auth, 'facebook')) {
        var search = "var FacebookStrategy = require('passport-facebook').Strategy;";
        var strategy = M(function() {
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
        var body = fs.readFileSync(passportFile).toString();
        if (body.indexOf(search) < 0) {
          body = body.split('\n');
          var idx = body.lastIndexOf("var passport = require('passport');");
          body.splice(idx + 1, 0, search);
          var idx2 = body.lastIndexOf("passport.deserializeUser(function(id, done) {");
          body.splice(idx2 + 6, 0, strategy);

          var output = body.join('\n');
          fs.writeFileSync(passportFile, output);
        }
      }
    });
  } else if (answer.category === 'api examples') {
    console.log('selected api examples');
  }
});
