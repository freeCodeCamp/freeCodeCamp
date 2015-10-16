import { Observable } from 'rx';
import uuid from 'node-uuid';
import moment from 'moment';
import debugFactory from 'debug';

import { saveUser, observeMethod } from '../../server/utils/rx';
import { blacklistedUsernames } from '../../server/utils/constants';

const debug = debugFactory('freecc:user:remote');
const BROWNIEPOINTS_TIMEOUT = [1, 'hour'];

function getAboutProfile({
  username,
  githubProfile: github,
  progressTimestamps = [],
  bio
}) {
  return {
    username,
    github,
    browniePoints: progressTimestamps.length,
    bio
  };
}

function nextTick(fn) {
  return process.nextTick(fn);
}

module.exports = function(User) {
  // NOTE(berks): user email validation currently not needed but build in. This
  // work around should let us sneak by
  // see:
  // https://github.com/strongloop/loopback/issues/1137#issuecomment-109200135
  delete User.validations.email;
  // set salt factor for passwords
  User.settings.saltWorkFactor = 5;
  // set user.rand to random number
  User.definition.rawProperties.rand.default =
    User.definition.properties.rand.default = function() {
      return Math.random();
    };

  // username should not be in blacklist
  User.validatesExclusionOf('username', {
    'in': blacklistedUsernames,
    message: 'is taken'
  });

  // username should be unique
  User.validatesUniquenessOf('username');
  User.settings.emailVerificationRequired = false;

  User.observe('before save', function({ instance: user }, next) {
    if (user) {
      user.username = user.username.trim().toLowerCase();
      user.email = typeof user.email === 'string' ?
        user.email.trim().toLowerCase() :
        user.email;

      if (!user.progressTimestamps) {
        user.progressTimestamps = [];
      }

      if (user.progressTimestamps.length === 0) {
        user.progressTimestamps.push({ timestamp: Date.now() });
      }
    }
    next();
  });

  debug('setting up user hooks');
  User.afterRemote('confirm', function(ctx) {
    ctx.req.flash('success', {
      msg: [
        'You\'re email has been confirmed!'
      ]
    });
    ctx.res.redirect('/email-signin');
  });

  User.beforeRemote('create', function({ req }, notUsed, next) {
    req.body.username = 'fcc' + uuid.v4().slice(0, 8);
    next();
  });

  User.on('resetPasswordRequest', function(info) {
    let url;
    const host = User.app.get('host');
    const { id: token } = info.accessToken;
    if (process.env.NODE_ENV === 'development') {
      const port = User.app.get('port');
      url = `http://${host}:${port}/reset-password?access_token=${token}`;
    } else {
      url =
        `http://freecodecamp.com/reset-password?access_token=${token}`;
    }

    // the email of the requested user
    debug(info.email);
    // the temp access token to allow password reset
    debug(info.accessToken.id);
    // requires AccessToken.belongsTo(User)
    var mailOptions = {
      to: info.email,
      from: 'Team@freecodecamp.com',
      subject: 'Password Reset Request',
      text: `
        Hello,\n\n
        This email is confirming that you requested to
        reset your password for your Free Code Camp account.
        This is your email: ${ info.email }.
        Go to ${ url } to reset your password.
        \n
        Happy Coding!
        \n
      `
    };

    User.app.models.Email.send(mailOptions, function(err) {
      if (err) { console.error(err); }
      debug('email reset sent');
    });
  });

  User.beforeRemote('login', function(ctx, notUsed, next) {
    const { body } = ctx.req;
    if (body && typeof body.email === 'string') {
      body.email = body.email.toLowerCase();
    }
    next();
  });

  User.afterRemote('login', function(ctx, accessToken, next) {
    var res = ctx.res;
    var req = ctx.req;
    // var args = ctx.args;

    var config = {
      signed: !!req.signedCookies,
      maxAge: accessToken.ttl
    };

    if (accessToken && accessToken.id) {
      debug('setting cookies');
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }

    return req.logIn({ id: accessToken.userId.toString() }, function(err) {
      if (err) {
        return next(err);
      }
      debug('user logged in');
      req.flash('success', { msg: 'Success! You are logged in.' });
      return res.redirect('/');
    });
  });

  User.afterRemoteError('login', function(ctx) {
    var res = ctx.res;
    var req = ctx.req;

    req.flash('errors', {
      msg: 'Invalid username or password.'
    });
    return res.redirect('/');
  });

  User.afterRemote('logout', function(ctx, result, next) {
    var res = ctx.res;
    res.clearCookie('access_token');
    res.clearCookie('userId');
    next();
  });

  User.doesExist = function doesExist(username, email, cb) {
    if (!username && !email) {
      return nextTick(function() {
        cb(null, false);
      });
    }
    debug('checking existence');

    // check to see if username is on blacklist
    if (username && blacklistedUsernames.indexOf(username) !== -1) {
      return cb(null, true);
    }

    var where = {};
    if (username) {
      where.username = username.toLowerCase();
    } else {
      where.email = email ? email.toLowerCase() : email;
    }
    debug('where', where);
    User.count(
      where,
      function(err, count) {
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

  User.about = function about(username, cb) {
    if (!username) {
      // Zalgo!!
      return nextTick(() => {
        cb(new TypeError(
            `username should be a string but got ${ username }`
        ));
      });
    }
    User.findOne({ where: { username } }, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user || user.username !== username) {
        return cb(new Error(`no user found for ${ username }`));
      }
      const aboutUser = getAboutProfile(user);
      return cb(null, aboutUser);
    });
  };

  User.remoteMethod(
    'about',
    {
      description: 'get public info about user',
      accepts: [
        {
          arg: 'username',
          type: 'string'
        }
      ],
      returns: [
        {
          arg: 'about',
          type: 'object'
        }
      ],
      http: {
        path: '/about',
        verb: 'get'
      }
    }
  );

  User.giveBrowniePoints =
    function giveBrowniePoints(receiver, giver, data = {}, dev = false, cb) {
      const findUser = observeMethod(User, 'findOne');
      if (!receiver) {
        return nextTick(() => {
          cb(
            new TypeError(`receiver should be a string but got ${ receiver }`)
          );
        });
      }
      if (!giver) {
        return nextTick(() => {
          cb(new TypeError(`giver should be a string but got ${ giver }`));
        });
      }
      let temp = moment();
      const browniePoints = temp
        .subtract.apply(temp, BROWNIEPOINTS_TIMEOUT)
        .valueOf();
      const user$ = findUser({ where: { username: receiver }});

      user$
        .tapOnNext((user) => {
          if (!user) {
            throw new Error(`could not find receiver for ${ receiver }`);
          }
        })
        .flatMap(({ progressTimestamps = [] }) => {
          return Observable.from(progressTimestamps);
        })
        // filter out non objects
        .filter((timestamp) => !!timestamp || typeof timestamp === 'object')
        // filterout timestamps older then an hour
        .filter(({ timestamp = 0 }) => {
          return timestamp >= browniePoints;
        })
        // filter out brownie points given by giver
        .filter((browniePoint) => {
          return browniePoint.giver === giver;
        })
        // no results means this is the first brownie point given by giver
        // so return -1 to indicate receiver should receive point
        .first({ defaultValue: -1 })
        .flatMap((browniePointsFromGiver) => {
          if (browniePointsFromGiver === -1) {

            return user$.flatMap((user) => {
              user.progressTimestamps.push({
                giver,
                timestamp: Date.now(),
                ...data
              });
              return saveUser(user);
            });
          }
          return Observable.throw(
            new Error(`${ giver } already gave ${ receiver } points`)
          );
        })
        .subscribe(
          (user) => {
            return cb(
              null,
              getAboutProfile(user),
              dev ?
                { giver, receiver, data } :
                null
            );
          },
          (e) => cb(e, null, dev ? { giver, receiver, data } : null),
          () => {
            debug('brownie points assigned completed');
          }
        );
    };

  User.remoteMethod(
    'giveBrowniePoints',
    {
      description: 'Give this user brownie points',
      accepts: [
        {
          arg: 'receiver',
          type: 'string',
          required: true
        },
        {
          arg: 'giver',
          type: 'string',
          required: true
        },
        {
          arg: 'data',
          type: 'object'
        },
        {
          arg: 'debug',
          type: 'boolean'
        }
      ],
      returns: [
        {
          arg: 'about',
          type: 'object'
        },
        {
          arg: 'debug',
          type: 'object'
        }
      ],
      http: {
        path: '/give-brownie-points',
        verb: 'POST'
      }
    }
  );
};
