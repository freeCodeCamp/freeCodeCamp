import { Disposable, Observable, Scheduler } from 'rx';
import uuid from 'node-uuid';
import moment from 'moment';
import dedent from 'dedent';
import debug from 'debug';
import { blacklistedUsernames } from '../../server/utils/constants';

const log = debug('fcc:user:remote');
const BROWNIEPOINTS_TIMEOUT = [1, 'hour'];

const aboutFilter = {
  username: true,
  bio: true
};
function getAboutProfile({
  username,
  bio,
  points
}) {
  return {
    username,
    bio,
    browniePoints: points
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

  User.on('dataSourceAttached', () => {
    User.findOne$ = Observable.fromNodeCallback(User.findOne, User);
    User.findById$ = Observable.fromNodeCallback(User.findById, User);
    User.update$ = Observable.fromNodeCallback(User.updateAll, User);
    User.count$ = Observable.fromNodeCallback(User.count, User);
    // getPointsById$(_id: String|ObjectId) => Observable[Number]
    User.getPointsById$ = function getPointsById$(id) {
      return Observable.create(observer => {
        let isDisposed = false;
        // safe ObjectID creation
        // MongoID(id: ObjectID|String) => ObjectID
        // MongoDB requires id's to be of type ObjectID
        const _id = this.app.dataSources.db.connector.getDefaultIdType()(id);
        this.app.dataSources.db.connector
          .collection('user')
          .aggregate([
            { $match: { _id } },
            { $project: { points: { $size: '$progressTimestamps' } } }
          ], (err, [ { points = 1 } = {}]) => {
            if (isDisposed) { return null; }
            if (err) { return observer.onError(err); }
            observer.onNext(points);
            return observer.onCompleted();
          });
        return Disposable.create(() => { isDisposed = true; });
      });
    };
  });

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

  log('setting up user hooks');
  User.afterRemote('confirm', function(ctx) {
    ctx.req.flash('success', {
      msg: [
        'You\'re email has been confirmed!'
      ]
    });
    ctx.res.redirect('/email-signin');
  });

  User.beforeRemote('create', function({ req, res }, _, next) {
    req.body.username = 'fcc' + uuid.v4().slice(0, 8);
    if (!req.body.email) {
      return next();
    }
    return User.doesExist(null, req.body.email)
      .then(exists => {
        if (!exists) {
          return next();
        }

        req.flash('error', {
          msg: dedent`
      The ${req.body.email} email address is already associated with an account.
      Try signing in with it here instead.
          `
        });

        return res.redirect('/email-signin');
      })
      .catch(err => {
        console.error(err);
        req.flash('error', {
          msg: 'Oops, something went wrong, please try again later'
        });
        return res.redirect('/email-signup');
      });
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
    log(info.email);
    // the temp access token to allow password reset
    log(info.accessToken.id);
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
      log('email reset sent');
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
      log('setting cookies');
      res.cookie('access_token', accessToken.id, config);
      res.cookie('userId', accessToken.userId, config);
    }

    return req.logIn({ id: accessToken.userId.toString() }, function(err) {
      if (err) { return next(err); }

      log('user logged in');

      if (req.session && req.session.returnTo) {
        var redirectTo = req.session.returnTo;
        if (redirectTo === '/map-aside') {
          redirectTo = '/map';
        }
        return res.redirect(redirectTo);
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
    return res.redirect('/email-signin');
  });

  User.afterRemote('logout', function(ctx, result, next) {
    var res = ctx.res;
    res.clearCookie('access_token');
    res.clearCookie('userId');
    next();
  });

  User.doesExist = function doesExist(username, email) {
    if (!username && !email) {
      return Promise.resolve(false);
    }
    log('checking existence');

    // check to see if username is on blacklist
    if (username && blacklistedUsernames.indexOf(username) !== -1) {
      return Promise.resolve(true);
    }

    var where = {};
    if (username) {
      where.username = username.toLowerCase();
    } else {
      where.email = email ? email.toLowerCase() : email;
    }
    log('where', where);
    return User.count(where)
    .then(count => count > 0);
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
    username = username.toLowerCase();
    const filter = {
      where: { username },
      fields: { id: true, ...aboutFilter }
    };
    return User.findOne$(filter)
      .doOnNext(user => {
        if (!user || user.username !== username) {
          throw new Error(`no user found for ${ username }`);
        }
      })
      .flatMap(user => user.getPoints$().map(user))
      .map(user => getAboutProfile(user))
      .subscribe(
        aboutUser => cb(null, aboutUser),
        cb
      );
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
      receiver = receiver.toLowerCase();
      giver = giver.toLowerCase();
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
      if (giver === receiver) {
        return nextTick(() => {
          cb(new Error('giver and receiver must be different users'));
        });
      }
      let temp = moment();
      const browniePoints = temp
        .subtract.apply(temp, BROWNIEPOINTS_TIMEOUT)
        .valueOf();
      const user$ = User.findOne$({
        where: { username: receiver },
        fields: {
          ...aboutFilter,
          progressTimestamps: true
        }
      });
      const giver$ = User.count$({ username: giver });
      return Observable.combineLatest(
        user$,
        giver$,
        (user, giver) => ({ doesGiverExist: !!giver, user })
      )
        .tapOnNext(({ user, doesGiverExist }) => {
          if (!user) {
            throw new Error(`could not find receiver for ${ receiver }`);
          }
          if (!doesGiverExist) {
            throw new Error(`no user found for giver '${giver}'`);
          }
        })
        .flatMap(({ progressTimestamps = [] }) => {
          return Observable.from(
            progressTimestamps,
            null,
            null,
            Scheduler.default
          );
        })
        // filter out non objects
        .filter((timestamp) => !!timestamp || typeof timestamp === 'object')
        // filterout timestamps older then an hour
        .filter(({ timestamp = 0 }) => timestamp >= browniePoints)
        // filter out brownie points given by giver
        .filter(browniePoint => browniePoint.giver === giver)
        // no results means this is the first brownie point given by giver
        // so return -1 to indicate receiver should receive point
        .first({ defaultValue: -1 })
        .flatMap(browniePointsFromGiver => {
          if (browniePointsFromGiver === -1) {
            const updateData = {
              $push: {
                progressTimestamps: {
                  giver,
                  timestamp: Date.now()
                }
              }
            };
            return user$
              .flatMap(user => user.update$(updateData).map(user))
              .doOnNext(user => {
                user.points = user.progressTimestamps.length + 1;
              });
          }
          return Observable.throw(
            new Error(`${ giver } already gave ${ receiver } points`)
          );
        })
        .subscribe(
          user => cb(
            null,
            getAboutProfile(user),
            dev ?
              { giver, receiver, data } :
              null
          ),
          e => cb(e, null, dev ? { giver, receiver, data } : null),
          () => {
            log('brownie points assigned completed');
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

  // user.update$(updateData: Object) => Observable[Number]
  User.prototype.update$ = function update$(updateData) {
    const id = this.getId();
    const updateOptions = { allowExtendedOperators: true };
    if (
        !updateData ||
        typeof updateData !== 'object' ||
        !Object.keys(updateData).length
    ) {
      return Observable.throw(new Error(
        dedent`
          updateData must be an object with at least one key,
          but got ${updateData} with ${Object.keys(updateData).length}
        `.split('\n').join(' ')
      ));
    }
    return this.constructor.update$({ id }, updateData, updateOptions);
  };
  User.prototype.getTimestamps = function getTimestamps() {
    const id = this.getId();
    const filter = {
      where: { id },
      fields: { progressTimestamps: true }
    };
    return this.constructor.findOne$(filter)
      .map(user => {
        this.progressTimestamps = user.progressTimestamps;
        return user.progressTimestamps;
      });
  };
  User.prototype.getChallengeMap$ = function getChallengeMap$() {
    const id = this.getId();
    const filter = {
      where: { id },
      fields: { challengeMap: true }
    };
    return this.constructor.findOne$(filter)
      .map(user => {
        this.challengeMap = user.challengeMap;
        return user.challengeMap;
      });
  };
  // user.getPoints$() => Observable[Number]
  User.prototype.getPoints$ = function getPoints$() {
    const id = this.getId();
    return this.constructor
      .getPointsById$(id)
      .doOnNext(points => { this.points = points; });
  };
};
