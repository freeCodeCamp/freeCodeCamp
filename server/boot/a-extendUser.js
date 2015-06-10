var debug = require('debug')('freecc:extendUser');

module.exports = function(app) {
  var User = app.models.User;
  // NOTE(berks): user email validation currently not needed but build in. This
  // work around should let us sneak by
  // see:
  // https://github.com/strongloop/loopback/issues/1137#issuecomment-109200135
  delete User.validations.email;
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
      ctx.req.flash({
        msg: 'Please check your email and click on the verification link '
          + 'before logging in.'
      });
      ctx.res.redirect('/');
    });
  });

  User.afterRemote('login', function(ctx, accessToken) {
    var res = ctx.res;
    var req = ctx.req;

    var config = {
      signed: !!req.signedCookies,
      maxAge: 1000 * accessToken.ttl
    };
    if (accessToken && accessToken.id) {
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }
    res.redirect('/');
  });

  User.afterRemote('logout', function(ctx, result, next) {
    var res = ctx.result;
    res.clearCookie('access_token');
    res.clearCookie('userId');
    next();
  });

  User.doesExist = function doesExist(username, email, cb) {
    debug('checking existence');
    var where = {};
    if (username) {
      where.username = username;
    } else {
      where.email = email;
    }
    User.count(
      { where: where },
      function (err, count) {
        if (err) { return cb(err); }
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
        path: '/exists'
      }
    }
  );
};
