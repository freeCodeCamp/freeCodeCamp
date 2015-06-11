var Rx = require('rx');
var debug = require('debug')('freecc:user:remote');

function destroyById(id, Model) {
  return Rx.Observable.create(function(observer) {
    Model.destroyById(id, function(err) {
      if (err) { return observer.onError(err); }
      observer.onCompleted();
    });
    return Rx.Disposable(Rx.helpers.noop);
  });
}

module.exports = function(User) {
  // NOTE(berks): user email validation currently not needed but build in. This
  // work around should let us sneak by
  // see:
  // https://github.com/strongloop/loopback/issues/1137#issuecomment-109200135
  delete User.validations.email;
  var app = User.app;
  var UserIdentity = app.models.UserIdentity;
  var UserCredential = app.models.UserCredential;
  debug('setting up user hooks');
  // send verification email to new camper
  User.afterRemote('create', function(ctx, user, next) {
    debug('user created, sending email');
    if (!user.email) { return next(); }

    var mailOptions = {
      type: 'email',
      to: user.email,
      from: 'Team@freecodecamp.com',
      subject: 'Welcome to Free Code Camp!',
      redirect: '/',
      text: [
        'Greetings from San Francisco!\n\n',
        'Thank you for joining our community.\n',
        'Feel free to email us at this address if you have ',
        'any questions about Free Code Camp.\n',
        'And if you have a moment, check out our blog: ',
        'blog.freecodecamp.com.\n',
        'Good luck with the challenges!\n\n',
        '- the Free Code Camp Volunteer Team'
      ].join('')
    };
    user.verify(mailOptions, function(err) {
      if (err) { return next(err); }
      debug('verification email sent');
      ctx.req.flash('success', {
        msg: [
          'Please check your email and click on the verification link '
          + 'before logging in.'
        ]
      });
      ctx.res.redirect('/');
    });
  });

  User.beforeRemote('login', function(ctx, instance, next) {
    debug('before called');
    debug(ctx, instance, next);
    next();
  });

  User.afterRemote('login', function(ctx, instance) {
    var res = ctx.res;
    var req = ctx.req;

    if (!instance || instance.emailVerified !== true) {
      debug(instance);
      req.flash('errors', {
        msg: [
          'Please verify your email address.'
        ]
      });
      return res.redirect('/');
    }

    /*
    var config = {
      signed: !!req.signedCookies,
      maxAge: 1000 * accessToken.ttl
    };
    if (accessToken && accessToken.id) {
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }
    */
    res.redirect('/');
  });

  User.afterRemote('logout', function(ctx, result, next) {
    var res = ctx.result;
    res.clearCookie('access_token');
    res.clearCookie('userId');
    next();
  });

  User.doesExist = function doesExist(username, email, cb) {
    if (!username && !email) {
      return process.nextTick(function() {
        cb(null, false);
      });
    }
    debug('checking existence');
    var where = {};
    if (username) {
      where.username = username.toLowerCase();
    } else {
      where.email = email ? email.toLowerCase() : email;
    }
    debug('where', where);
    User.count(
      where,
      function (err, count) {
        if (err) {
          debug('err checking existance: ', err);
          return cb(err);
        }
        if (count > 0) {
          return cb(null, true);
        }
        return cb(null, false);
      }
    );
  };

  User.remoteMethod(
    'doesExist',
    {
      description: 'checks whether a user exists using email or username',
      accepts: [
        {
          arg: 'username',
          type: 'string'
        },
        {
          arg: 'email',
          type: 'string'
        }
      ],
      returns: [
        {
          arg: 'exists',
          type: 'boolean'
        }
      ],
      http: {
        path: '/exists',
        verb: 'get'
      }
    }
  );

  User.observe('after delete', function(ctx, next) {
    debug('removing user', ctx.where);
    var id = ctx.where && ctx.where.id ? ctx.where.id : null;
    if (!id) {
      return next();
    }
    Rx.Observable.combineLatest(
      destroyById(id, UserIdentity),
      destroyById(id, UserCredential),
      Rx.helpers.noop
    ).subscribe(
      Rx.helpers.noop,
      function(err) {
        debug('error deleting user %s stuff', id, err);
        next(err);
      },
      function() {
        debug('user stuff deleted for user %s', id);
        next();
      }
    );
  });
};
