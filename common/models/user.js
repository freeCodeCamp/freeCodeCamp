import { Observable } from 'rx';
import moment from 'moment';
import debugFactory from 'debug';

import { saveUser, observeMethod } from '../../server/utils/rx';
import { blacklistedUsernames } from '../../server/utils/constants';

const debug = debugFactory('freecc:user:remote');

function getAboutProfile({
  username,
  githubProfile: github,
  progressTimestamps = []
}) {
  return {
    username,
    github,
    browniePoints: progressTimestamps.length
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

  // username should not be in blacklist
  User.validatesExclusionOf('username', {
    'in': blacklistedUsernames,
    message: 'is taken'
  });

  // username should be unique
  User.validatesUniquenessOf('username');

  debug('setting up user hooks');
  User.afterRemote('confirm', function(ctx) {
    ctx.req.flash('success', {
      msg: [
        'You\'re email has been confirmed!'
      ]
    });
    ctx.res.redirect('/email-signin');
  });

  User.afterRemote('login', function(ctx, user, next) {
    var res = ctx.res;
    var req = ctx.req;
    // var args = ctx.args;

    var accessToken = {};
    var config = {
      signed: !!req.signedCookies,
      maxAge: accessToken.ttl
    };
    if (accessToken && accessToken.id) {
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }
    debug('before pass login');
    return req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
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
    var res = ctx.result;
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
        cb(
          new TypeError('FCC: username should be a string but got %s', username)
        );
      });
    }
    User.findOne({ where: { username } }, (err, user) => {
      if (err) {
        return cb(err);
      }
      if (!user || user.username !== username) {
        return cb(new Error('FCC: no user found for %s', username));
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
    function giveBrowniePoints(receiver, giver, data = {}, cb) {
      const findUser = observeMethod(User, 'findOne');
      if (!receiver) {
        return nextTick(() => {
          cb(new TypeError('receiver should be a string but got %s', receiver));
        });
      }
      if (!giver) {
        return nextTick(() => {
          cb(new TypeError('giver should be a string but got %s'));
        });
      }
      const oneHourAgo = moment().subtract(1, 'hour').valueOf();
      const user$ = findUser({ where: { username: receiver }});

      user$
        .tapOnNext((user) => {
          if (!user) {
            throw new Error('count not find receiver for %s', receiver);
          }
        })
        .flatMap(({ progressTimestamps = [] }) => {
          debug('progressTimestamps', progressTimestamps);
          return Observable.from(progressTimestamps);
        })
        // filter out non objects
        .filter((timestamp) => !!timestamp || typeof timestamp === 'object')
        // filterout timestamps older then an hour
        .filter(({ timestamp = 0 }) => {
          debug('timestamp', timestamp);
          return timestamp >= oneHourAgo;
        })
        // filter out brownie points given by giver
        .filter((browniePoint) => {
          debug('browniePoint', browniePoint);
          return browniePoint.giver === giver;
        })
        // no results means this is the first brownie point given by giver
        // so return -1 to indicate receiver should receive point
        .firstOrDefault(null, -1)
        .flatMap((browniePointsFromGiver) => {
          debug('bronie points from giver', browniePointsFromGiver, giver);
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
            new Error('giver already gave receiver points')
          );
        })
        .subscribe(
          (user) => {
            cb(null, getAboutProfile(user));
          },
          cb,
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
        }
      ],
      returns: [
        {
          arg: 'about',
          type: 'object'
        }
      ],
      http: {
        path: '/give-brownie-points',
        verb: 'get'
      }
    }
    );
};
