var _ = require('lodash'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy,
    LinkedInStrategy = require('passport-linkedin-oauth2').Strategy,
    OAuthStrategy = require('passport-oauth').OAuthStrategy,
    OAuth2Strategy = require('passport-oauth').OAuth2Strategy,
    User = require('../models/User'),
    secrets = require('./secrets');

// Login Required middleware.
module.exports = {
  isAuthenticated: isAuthenticated,
  isAuthorized: isAuthorized,
  hasEmail: hasEmail
};

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: id
  }, '-password', function(err, user) {
    console.log(user);
    done(err, user);
  });
});

/**
 * OAuth Strategy Overview
 *
 * - User is already logged in.
 *   - Check if there is an existing account with a <provider> id.
 *     - If there is, return an error message. (Account merging not supported)
 *     - Else link new OAuth account with currently logged-in user.
 * - User is not logged in.
 *   - Check if it's a returning user.
 *     - If returning user, sign in and we are done.
 *     - Else check if there is an existing account with user's email.
 *       - If there is, return an error message.
 *       - Else create a new account.
 */

// Sign in with Twitter.

passport.use(new TwitterStrategy(secrets.twitter, function(req, accessToken, tokenSecret, profile, done) {
  if (req.user) {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a Twitter account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
        done(err);
      } else {
        User.findById(req.user.id, function(err, user) {
          user.twitter = profile.id;
          user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.location = user.profile.location || profile._json.location;
          user.profile.picture = user.profile.picture || profile._json.profile_image_url_https;
          user.save(function(err) {
            req.flash('info', { msg: 'Twitter account has been linked.' });
            done(err, user);
          });
        });
      }
    });

  } else {
    User.findOne({ twitter: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      var user = new User();
      // Twitter will not provide an email address.  Period.
      // But a person’s twitter username is guaranteed to be unique
      // so we can "fake" a twitter email address as follows:
      user.email = profile.username + "@please_add_your_email_here.com";
      user.profile.username = profile.username;
      user.twitter = profile.id;
      user.tokens.push({ kind: 'twitter', accessToken: accessToken, tokenSecret: tokenSecret });
      user.profile.name = profile.displayName;
      user.profile.location = profile._json.location;
      user.profile.picture = profile._json.profile_image_url_https;
      user.save(function(err) {
        done(err, user);
      });
    });
  }
}));

// Sign in with Google.

passport.use(new GoogleStrategy(secrets.google, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ google: profile.id }, function(err, existingUser) {
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

// Sign in with LinkedIn.

passport.use(new LinkedInStrategy(secrets.linkedin, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ linkedin: profile.id }, function(err, existingUser) {
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a LinkedIn account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
        done(err);
      } else {
        User.findById(req.user.id, function(err, user) {
          user.linkedin = profile.id;
          user.tokens.push({ kind: 'linkedin', accessToken: accessToken });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.location = user.profile.location || profile._json.location.name;
          user.profile.picture = user.profile.picture || profile._json.pictureUrl;
          user.profile.website = user.profile.website || profile._json.publicProfileUrl;
          user.save(function(err) {
            req.flash('info', { msg: 'LinkedIn account has been linked.' });
            done(err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ linkedin: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      User.findOne({ email: profile._json.emailAddress }, function(err, existingEmailUser) {
        if (existingEmailUser) {
          req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with LinkedIn manually from Account Settings.' });
          done(err);
        } else {
          var user = new User();
          user.linkedin = profile.id;
          user.tokens.push({ kind: 'linkedin', accessToken: accessToken });
          user.email = profile._json.emailAddress;
          user.profile.name = profile.displayName;
          user.profile.location = profile._json.location.name;
          user.profile.picture = profile._json.pictureUrl;
          user.profile.website = profile._json.publicProfileUrl;
          user.save(function(err) {
            done(err, user);
          });
        }
      });
    });
  }
}));

// Sign in with GitHub.

passport.use(new GitHubStrategy(secrets.github, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ github: profile.id }, function(err, existingUser) {
      if (existingUser) {
        req.flash('errors', { msg: 'There is already a GitHub account that belongs to you. Sign in with that account or delete it, then link it with your current account.' });
        done(err);
      } else {
        User.findById(req.user.id, function(err, user) {
          user.github = profile.id;
          user.tokens.push({ kind: 'github', accessToken: accessToken });
          user.profile.name = user.profile.name || profile.displayName;
          user.profile.picture = user.profile.picture || profile._json.avatar_url;
          user.profile.location = user.profile.location || profile._json.location;
          user.profile.website = user.profile.website || profile._json.blog;
          user.save(function(err) {
            req.flash('info', { msg: 'GitHub account has been linked.' });
            done(err, user);
          });
        });
      }
    });
  } else {
    User.findOne({ github: profile.id }, function(err, existingUser) {
      if (existingUser) return done(null, existingUser);
      User.findOne({ email: profile._json.email }, function(err, existingEmailUser) {
        if (existingEmailUser) {
          req.flash('errors', { msg: 'There is already an account using this email address. Sign in to that account and link it with GitHub manually from Account Settings.' });
          done(err);
        } else {
          var user = new User();
          user.email = profile._json.email;
          user.github = profile.id;
          user.tokens.push({ kind: 'github', accessToken: accessToken });
          user.profile.name = profile.displayName;
          user.profile.picture = profile._json.avatar_url;
          user.profile.location = profile._json.location;
          user.profile.website = profile._json.blog;
          user.save(function(err) {
            done(err, user);
          });
        }
      });
    });
  }
}));

// Sign in with Facebook.

passport.use(new FacebookStrategy(secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
  if (req.user) {
    User.findOne({ facebook: profile.id }, function(err, existingUser) {
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

// Sign in using Email and Password.
passport.use(
  new LocalStrategy(
    { usernameField: 'email' }, function(email, password, done) {
    User.findOne({ email: email }, function(err, user) {
      if (err) { return done(err); }

      if (!user) {
        return done(null, false, { message: 'Email ' + email + ' not found'});
      }
      user.comparePassword(password, function(err, isMatch) {
        if (err) { return done(err); }

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Invalid email or password.' });
        }
      });
    });
}));


// Sign in with Facebook.
passport.use(
  new FacebookStrategy(
    secrets.facebook, function(req, accessToken, refreshToken, profile, done) {
      if (req.user) {
        User.findOne({ facebook: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }

          if (existingUser) {
            req.flash('errors', {
              msg: [
                'There is already a Facebook account that belongs to you.',
                'Sign in with that account or delete it, then link it with',
                'your current account.'
              ].join(' ')
            });
            done();
          } else {
            User.findById(req.user.id, function(err, user) {
              if (err) { return done(err); }

              user.facebook = profile.id;
              user.tokens.push({
                kind: 'facebook',
                accessToken: accessToken
              });

              user.profile.name = user.profile.name || profile.displayName;
              user.profile.gender = user.profile.gender || profile._json.gender;

              user.profile.picture =
                user.profile.picture ||
                  'https://graph.facebook.com/' +
                  profile.id +
                  '/picture?type=large';

              user.save(function(err) {
                if (err) { return done(err); }

                  req.flash(
                    'info', { msg: 'Facebook account has been linked.' });
                  done(null, user);
              });
            });
          }
        });
      } else {
        User.findOne({ facebook: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }

          if (existingUser) { return done(null, existingUser); }

          User.findOne(
            { email: profile._json.email }, function(err, existingEmailUser) {
              if (err) { return done(err); }

              var user = existingEmailUser || new User();
              user.email = user.email || profile._json.email;
              user.facebook = profile.id;
              user.tokens.push({
                kind: 'facebook',
                accessToken: accessToken
              });
              user.profile.name = user.profile.name || profile.displayName;

              user.profile.gender =
                user.profile.gender || profile._json.gender;

              user.profile.picture =
                user.profile.picture ||
                'https://graph.facebook.com/' +
                profile.id +
                '/picture?type=large';

              user.profile.location =
                user.profile.location ||
                (profile._json.location) ? profile._json.location.name : '';

              user.challengesComplete = user.challengesCompleted || [];
              user.save(function(err) {
                if (err) { return done(err); }
                done(null, user);
              });
            });
        });
      }
}));

// Sign in with GitHub.

passport.use(
  new GitHubStrategy(
    secrets.github, function(req, accessToken, refreshToken, profile, done) {
      if (req.user) {
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }

          if (existingUser) {
            req.flash('errors', {
              msg: [
                'There is already a GitHub account that belongs to you.',
                'Sign in with that account or delete it, then link it with',
                'your current account.'
              ].join(' ')
            });
            done();
          } else {
            User.findById(req.user.id, function(err, user) {
              if (err) { return done(err); }

              user.github = profile.id;
              user.tokens.push({ kind: 'github', accessToken: accessToken });
              user.profile.name = user.profile.name || profile.displayName;

              user.profile.picture =
                user.profile.picture || profile._json.avatar_url;

              user.profile.location =
                user.profile.location || profile._json.location;

              user.profile.website =
                user.profile.website || profile._json.blog;

              user.save(function(err) {
                if (err) { return done(err); }

                req.flash('info', { msg: 'GitHub account has been linked.' });
                done(null, user);
              });
            });
          }
        });
      } else {
        User.findOne({ github: profile.id }, function(err, existingUser) {
          if (err) { return done(err); }

          if (existingUser) { return done(null, existingUser); }
          User.findOne(
            { email: profile._json.email }, function(err, existingEmailUser) {
              if (err) { return done(err); }

              var user = existingEmailUser || new User();
              user.email = user.email || profile._json.email;
              user.github = profile.id;
              user.tokens.push({
                kind: 'github',
                accessToken: accessToken
              });
              user.profile.name = user.profile.name || profile.displayName;

              user.profile.picture =
                user.profile.picture || profile._json.avatar_url;

              user.profile.location =
                user.profile.location || profile._json.location;

              user.profile.website =
                user.profile.website || profile._json.blog;

              user.save(function(err) {
                if (err) { return done(err); }
                done(null, user);
              });
          });
        });
      }
}));




function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect('/login');
}

function hasEmail(req, res) {
  if (req.user) {
      console.log('started');
      if (req.user.email) {
        res.redirect('/');
      } else {
        console.log('hit');
        req.flash('info', {
          msg: 'Please add your email address before starting our challenges.'
        });
        res.redirect('/account');
      }
  }
}

// Authorization Required middleware.
function isAuthorized(req, res, next) {
  var provider = req.path.split('/').slice(-1)[0];

  if (_.find(req.user.tokens, { kind: provider })) {
    next();
  } else {
    res.redirect('/auth/' + provider);
  }
}
