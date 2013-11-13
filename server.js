var express = require('express'),
    mongoose = require('mongoose'),
    mongoStore = require('connect-mongo')(express),
    fs = require('fs'),
    flash = require('connect-flash'),
    helpers = require('view-helpers'),
    config = require('./conf'),
    passport = require('passport'),
    logger = require('mean-logger');

/**
 * Main application entry file.
 * Please note that the order of loading is important.
 */

//Load configurations
//if test env, load example file
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

/**
 * Generic require login routing middleware
 */
var requiresLogin = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.send(401, 'User is not authorized');
  }
  next();
};

/**
 * User authorizations routing middleware
 */
var hasAuthorization = function(req, res, next) {
    if (req.profile.id != req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};

/**
 * Article authorizations routing middleware
 */
var hasAuthorization = function(req, res, next) {
    if (req.article.user.id != req.user.id) {
      return res.send(401, 'User is not authorized');
    }
    next();
};

//Bootstrap db connection
var db = mongoose.connect(config.db);

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  crypto = require('crypto'),
  _ = require('underscore'),
  authTypes = ['github', 'twitter', 'facebook', 'google'];


/**
 * User Schema
 */
var UserSchema = new Schema({
  name: String,
  email: String,
  username: {
    type: String,
    unique: true
  },
  provider: String,
  hashed_password: String,
  salt: String,
  facebook: {},
  twitter: {},
  github: {},
  google: {}
});

/**
 * Virtuals
 */
UserSchema.virtual('password').set(function(password) {
  this._password = password;
  this.salt = this.makeSalt();
  this.hashed_password = this.encryptPassword(password);
}).get(function() {
    return this._password;
  });

/**
 * Validations
 */
var validatePresenceOf = function(value) {
  return value && value.length;
};

// the below 4 validations only apply if you are signing up traditionally
UserSchema.path('name').validate(function(name) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true;
  return name.length;
}, 'Name cannot be blank');

UserSchema.path('email').validate(function(email) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true;
  return email.length;
}, 'Email cannot be blank');

UserSchema.path('username').validate(function(username) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true;
  return username.length;
}, 'Username cannot be blank');

UserSchema.path('hashed_password').validate(function(hashed_password) {
  // if you are authenticating by any of the oauth strategies, don't validate
  if (authTypes.indexOf(this.provider) !== -1) return true;
  return hashed_password.length;
}, 'Password cannot be blank');


/**
 * Pre-save hook
 */
UserSchema.pre('save', function(next) {
  if (!this.isNew) return next();

  if (!validatePresenceOf(this.password) && authTypes.indexOf(this.provider) === -1)
    next(new Error('Invalid password'));
  else
    next();
});

/**
 * Methods
 */
UserSchema.methods = {
  /**
   * Authenticate - check if the passwords are the same
   *
   * @param {String} plainText
   * @return {Boolean}
   * @api public
   */
  authenticate: function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  /**
   * Make salt
   *
   * @return {String}
   * @api public
   */
  makeSalt: function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  },

  /**
   * Encrypt password
   *
   * @param {String} password
   * @return {String}
   * @api public
   */
  encryptPassword: function(password) {
    if (!password) return '';
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  }
};

mongoose.model('User', UserSchema);

/**
 * Article Schema
 */
var ArticleSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    default: '',
    trim: true
  },
  content: {
    type: String,
    default: '',
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
  return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
ArticleSchema.statics = {
  load: function(id, cb) {
    this.findOne({
      _id: id
    }).populate('user', 'name username').exec(cb);
  }
};

mongoose.model('Article', ArticleSchema);

//bootstrap passport config
var LocalStrategy = require('passport-local').Strategy,
    TwitterStrategy = require('passport-twitter').Strategy,
    FacebookStrategy = require('passport-facebook').Strategy,
    GitHubStrategy = require('passport-github').Strategy,
    GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

//Serialize sessions
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    _id: id
  }, function(err, user) {
    done(err, user);
  });
});

//Use local strategy
passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({
      email: email
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          message: 'Unknown user'
        });
      }
      if (!user.authenticate(password)) {
        return done(null, false, {
          message: 'Invalid password'
        });
      }
      return done(null, user);
    });
  }
));

//Use twitter strategy
passport.use(new TwitterStrategy({
    consumerKey: config.twitter.clientID,
    consumerSecret: config.twitter.clientSecret,
    callbackURL: config.twitter.callbackURL
  },
  function(token, tokenSecret, profile, done) {
    User.findOne({
      'twitter.id_str': profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          username: profile.username,
          provider: 'twitter',
          twitter: profile._json
        });
        user.save(function(err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

//Use facebook strategy
passport.use(new FacebookStrategy({
    clientID: config.facebook.clientID,
    clientSecret: config.facebook.clientSecret,
    callbackURL: config.facebook.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'facebook.id': profile.id
    }, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'facebook',
          facebook: profile._json
        });
        user.save(function(err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

//Use github strategy
passport.use(new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: config.github.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'github.id': profile.id
    }, function(err, user) {
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'github',
          github: profile._json
        });
        user.save(function(err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

//Use google strategy
passport.use(new GoogleStrategy({
    clientID: config.google.clientID,
    clientSecret: config.google.clientSecret,
    callbackURL: config.google.callbackURL
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOne({
      'google.id': profile.id
    }, function(err, user) {
      if (!user) {
        user = new User({
          name: profile.displayName,
          email: profile.emails[0].value,
          username: profile.username,
          provider: 'google',
          google: profile._json
        });
        user.save(function(err) {
          if (err) console.log(err);
          return done(err, user);
        });
      } else {
        return done(err, user);
      }
    });
  }
));

var app = express();

/**
 * Express Settings
 */
app.set('showStackError', true);
app.set('port', process.env.PORT || 3000);
app.locals.pretty = true;
app.use(express.compress({
  filter: function(req, res) {
    return (/json|text|javascript|css/).test(res.getHeader('Content-Type'));
  },
  level: 9
}));
app.use(express.favicon());
app.use(express.static(config.root + '/public'));
app.set('views', config.root + '/app/views');
app.set('view engine', 'jade');
app.enable("jsonp callback");
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.session({
  secret: '1337',
  store: new mongoStore({
    db: db.connection.db,
    collection: 'sessions'
  })
}));
app.use(flash());
app.use(helpers(config.app.name));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

app.use(function(err, req, res, next) {
    //Treat as 404
    if (~err.message.indexOf('not found')) return next();

    //Log it
    console.error(err.stack);

    //Error page
    res.status(500).render('500', {
        error: err.stack
    });
});

app.use(function(req, res, next) {
  res.status(404).render('404', {
    url: req.originalUrl,
    error: 'Not found'
  });
});


//User Routes
app.post('/users', users.create);
app.get('/users/me', users.me);
app.get('/users/:userId', users.show);

//Setting the facebook oauth routes
app.get('/auth/facebook', passport.authenticate('facebook', {
  scope: ['email', 'user_about_me'],
  failureRedirect: '/signin'
}), users.signin);

app.get('/auth/facebook/callback', passport.authenticate('facebook', {
  failureRedirect: '/signin'
}), users.authCallback);

//Setting the github oauth routes
app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/signin' }), users.signin);
app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/signin' }), users.authCallback);

//Setting the twitter oauth routes
app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/signin' }), users.signin);
app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/signin' }), users.authCallback);

//Setting the google oauth routes
app.get('/auth/google', passport.authenticate('google', {
  failureRedirect: '/signin',
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
}), users.signin);
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/signin' }), users.authCallback);

//Finish with setting up the userId param
app.param('userId', users.user);

//Article Routes
var articles = require('../app/controllers/articles');
app.get('/articles', articles.all);
app.post('/articles', auth.requiresLogin, articles.create);
app.get('/articles/:articleId', articles.show);
app.put('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
app.del('/articles/:articleId', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);


//Home route
var index = require('../app/controllers/index');
app.get('/', index.render);

console.log('Express app started on port ' + app.get('port'));
app.listen(app.get('port'));
