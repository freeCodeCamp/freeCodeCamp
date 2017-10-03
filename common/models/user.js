import { Observable } from 'rx';
import uuid from 'uuid';
import moment from 'moment';
import dedent from 'dedent';
import debugFactory from 'debug';
import { isEmail } from 'validator';
import path from 'path';
import loopback from 'loopback';

import { saveUser, observeMethod } from '../../server/utils/rx.js';
import { blacklistedUsernames } from '../../server/utils/constants.js';
import { wrapHandledError } from '../../server/utils/create-handled-error.js';
import {
  getServerFullURL,
  getEmailSender,
  getProtocol,
  getHost,
  getPort
} from '../../server/utils/url-utils.js';

const debug = debugFactory('fcc:user:remote');
const BROWNIEPOINTS_TIMEOUT = [1, 'hour'];

const createEmailError = () => new Error(
 'Please check to make sure the email is a valid email address.'
);

function destroyAll(id, Model) {
  return Observable.fromNodeCallback(
    Model.destroyAll,
    Model
  )({ userId: id });
}

const renderSignUpEmail = loopback.template(path.join(
  __dirname,
  '..',
  '..',
  'server',
  'views',
  'emails',
  'user-request-sign-up.ejs'
));

const renderSignInEmail = loopback.template(path.join(
  __dirname,
  '..',
  '..',
  'server',
  'views',
  'emails',
  'user-request-sign-in.ejs'
));

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

function getWaitPeriod(ttl) {
  const fiveMinutesAgo = moment().subtract(5, 'minutes');
  const lastEmailSentAt = moment(new Date(ttl || null));
  const isWaitPeriodOver = ttl ?
    lastEmailSentAt.isBefore(fiveMinutesAgo) : true;
  if (!isWaitPeriodOver) {
    const minutesLeft = 5 -
      (moment().minutes() - lastEmailSentAt.minutes());
    return minutesLeft;
  }
  return 0;
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
  // increase user accessToken ttl to 900 days
  User.settings.ttl = 900 * 24 * 60 * 60 * 1000;

  // username should not be in blacklist
  User.validatesExclusionOf('username', {
    in: blacklistedUsernames,
    message: 'is taken'
  });

  // username should be unique
  User.validatesUniquenessOf('username');
  User.settings.emailVerificationRequired = false;

  User.on('dataSourceAttached', () => {
    User.findOne$ = Observable.fromNodeCallback(User.findOne, User);
    User.update$ = Observable.fromNodeCallback(User.updateAll, User);
    User.count$ = Observable.fromNodeCallback(User.count, User);
    User.findOrCreate$ = Observable.fromNodeCallback(User.findOrCreate, User);
    User.prototype.createAccessToken$ = Observable.fromNodeCallback(
      User.prototype.createAccessToken
    );
  });

  User.beforeRemote('create', function({ req }) {
    const body = req.body;
    // note(berks): we now require all new users to supply an email
    // this was not always the case
    if (
      typeof body.email !== 'string' ||
      !isEmail(body.email)
    ) {
      return Promise.reject(createEmailError());
    }
    // assign random username to new users
    // actual usernames will come from github
    body.username = 'fcc' + uuid.v4();
    if (body) {
      // this is workaround for preventing a server crash
      // we do this on create and on save
      // refer strongloop/loopback/#1364
      if (body.password === '') {
        body.password = null;
      }
      // set email verified false on user email signup
      // should not be set with oauth signin methods
      body.emailVerified = false;
    }
    return User.doesExist(null, body.email)
      .catch(err => {
        throw wrapHandledError(err, { redirectTo: '/email-signup' });
      })
      .then(exists => {
        if (!exists) {
          return null;
        }
        const err = wrapHandledError(
          new Error('user already exists'),
          {
            redirectTo: '/email-signin',
            message: dedent`
      The ${body.email} email address is already associated with an account.
      Try signing in with it here instead.
              `
          }
        );
        throw err;
      });
  });

  User.observe('before save', function({ instance: user }, next) {
    if (user) {
      // Some old accounts will not have emails associated with theme
      // we verify only if the email field is populated
      if (user.email && !isEmail(user.email)) {
        return next(createEmailError());
      }
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
      // this is workaround for preventing a server crash
      // we do this on save and on create
      // refer strongloop/loopback/#1364
      if (user.password === '') {
        user.password = null;
      }
    }
    return next();
  });

  // remove lingering user identities before deleting user
  User.observe('before delete', function(ctx, next) {
    const UserIdentity = User.app.models.UserIdentity;
    const UserCredential = User.app.models.UserCredential;
    debug('removing user', ctx.where);
    var id = ctx.where && ctx.where.id ? ctx.where.id : null;
    if (!id) {
      return next();
    }
    return Observable.combineLatest(
      destroyAll(id, UserIdentity),
      destroyAll(id, UserCredential),
      function(identData, credData) {
        return {
          identData: identData,
          credData: credData
        };
      }
    )
      .subscribe(
        function(data) {
          debug('deleted', data);
        },
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

  debug('setting up user hooks');

  User.beforeRemote('confirm', function(ctx, _, next) {

    if (!ctx.req.query) {
      return ctx.res.redirect('/');
    }

    const uid = ctx.req.query.uid;
    const token = ctx.req.query.token;
    const redirect = ctx.req.query.redirect;

    return User.findById(uid, (err, user) => {

        if (err || !user) {
          ctx.req.flash('error', {
            msg: dedent`Oops, something went wrong, please try again later`
          });
          return ctx.res.redirect('/');
        }

        if (!user.verificationToken && !user.emailVerified) {
          ctx.req.flash('info', {
            msg: dedent`Looks like we have your email. But you haven't
             verified it yet, please sign in and request a fresh verification
             link.`
          });
          return ctx.res.redirect(redirect);
        }

        if (!user.verificationToken && user.emailVerified) {
          ctx.req.flash('info', {
            msg: dedent`Looks like you have already verified your email.
             Please sign in to continue.`
          });
          return ctx.res.redirect(redirect);
        }

        if (user.verificationToken && user.verificationToken !== token) {
          ctx.req.flash('info', {
            msg: dedent`Looks like you have clicked an invalid link.
             Please sign in and request a fresh one.`
          });
          return ctx.res.redirect(redirect);
        }

        return next();
    });
  });

  User.afterRemote('confirm', function(ctx) {
    if (!ctx.req.query) {
      return ctx.res.redirect('/');
    }
    const redirect = ctx.req.query.redirect;
    ctx.req.flash('success', {
      msg: [
        'Your email has been confirmed!'
      ]
    });
    return ctx.res.redirect(redirect);
  });

  User.beforeRemote('create', function({ req, res }, _, next) {
    req.body.username = 'fcc' + uuid.v4().slice(0, 8);
    if (!req.body.email) {
      return next();
    }
    if (!isEmail(req.body.email)) {
      return next(new Error('Email format is not valid'));
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
        return res.redirect('/email-signin');
      });
  });

  User.beforeRemote('login', function(ctx, notUsed, next) {
    const { body } = ctx.req;
    if (body && typeof body.email === 'string') {
      if (!isEmail(body.email)) {
        return next(createEmailError());
      }
      body.email = body.email.toLowerCase();
    }
    return next();
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
      if (err) { return next(err); }

      debug('user logged in');

      if (req.session && req.session.returnTo) {
        var redirectTo = req.session.returnTo;
        if (redirectTo === '/map-aside') {
          redirectTo = '/map';
        }
        return res.redirect(redirectTo);
      }

      req.flash('success', { msg: 'Success! You are now logged in.' });
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
    if (!username && (!email || !isEmail(email))) {
      return Promise.resolve(false);
    }
    debug('checking existence');

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
    debug('where', where);
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
    return User.findOne({ where: { username } }, (err, user) => {
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

  User.requestAuthLink = function requestAuthLink(email) {
    if (!isEmail(email)) {
      return Promise.reject(
        new Error('The submitted email not valid.')
      );
    }

    var userObj = {
      username: 'fcc' + uuid.v4().slice(0, 8),
      email: email,
      emailVerified: false
    };
    return User.findOrCreate$({ where: { email }}, userObj)
      .flatMap(([ user, isCreated ]) => {

        const minutesLeft = getWaitPeriod(user.emailAuthLinkTTL);
        if (minutesLeft > 0) {
          const timeToWait = minutesLeft ?
            `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}` :
            'a few seconds';
          debug('request before wait time : ' + timeToWait);
          return Observable.of(dedent`
            Please wait ${timeToWait} to resend an authentication link.
          `);
        }

        const renderAuthEmail = isCreated ?
          renderSignUpEmail : renderSignInEmail;

        // create a temporary access token with ttl for 15 minutes
        return user.createAccessToken$({ ttl: 15 * 60 * 1000 })
          .flatMap(token => {

          const { id: loginToken } = token;
          const loginEmail = user.email;
          const host = getServerFullURL();
          const mailOptions = {
            type: 'email',
            to: user.email,
            from: getEmailSender(),
            subject: 'freeCodeCamp - Authentication Request!',
            text: renderAuthEmail({
              host,
              loginEmail,
              loginToken
            })
          };

          return this.email.send$(mailOptions)
            .flatMap(() => {
              const emailAuthLinkTTL = token.created;
              return this.update$({
                emailAuthLinkTTL
            })
            .map(() => {
              return dedent`
                If you entered a valid email, a magic link is on its way.
                Please follow that link to sign in.
              `;
            });
          });
        });
      })
      .catch(err => {
        if (err) { debug(err); }
        return dedent`
          Oops, something is not right, please try again later.
        `;
      })
      .toPromise();
  };

  User.remoteMethod(
    'requestAuthLink',
    {
      description: 'request a link on email with temporary token to sign in',
      accepts: [{
        arg: 'email', type: 'string', required: true
      }],
      returns: [{
        arg: 'message', type: 'string'
      }],
      http: {
        path: '/request-auth-link', verb: 'POST'
      }
    }
  );

  User.prototype.updateEmail = function updateEmail(email) {
    const ownEmail = email === this.email;
    if (!isEmail('' + email)) {
      return Observable.throw(createEmailError());
    }
    // email is already associated and verified with this account
    if (ownEmail && this.emailVerified) {
      return Observable.throw(new Error(
        `${email} is already associated with this account.`
      ));
    }

    const minutesLeft = getWaitPeriod(this.emailVerifyTTL);
    if (ownEmail && minutesLeft > 0) {
      const timeToWait = minutesLeft ?
        `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}` :
        'a few seconds';
      debug('request before wait time : ' + timeToWait);
      return Observable.of(dedent`
        Please wait ${timeToWait} to resend an authentication link.
      `);
    }

    return Observable.fromPromise(User.doesExist(null, email))
      .flatMap(exists => {
        // not associated with this account, but is associated with another
        if (!ownEmail && exists) {
          return Promise.reject(
            new Error(`${email} is already associated with another account.`)
          );
        }

        const emailVerified = false;
        return this.update$({
          email,
          emailVerified,
          emailVerifyTTL: new Date()
        })
        .do(() => {
          this.email = email;
          this.emailVerified = emailVerified;
          this.emailVerifyTTL = new Date();
        });
      })
      .flatMap(() => {
        const mailOptions = {
          type: 'email',
          to: email,
          from: getEmailSender(),
          subject: 'freeCodeCamp - Email Update Requested',
          protocol: getProtocol(),
          host: getHost(),
          port: getPort(),
          template: path.join(
            __dirname,
            '..',
            '..',
            'server',
            'views',
            'emails',
            'user-email-verify.ejs'
          )
        };
        return this.verify(mailOptions);
      })
      .map(() => dedent`
        Please check your email.
        We sent you a link that you can click to verify your email address.
      `);
  };

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

      return user$
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

  User.themes = {
    night: true,
    default: true
  };

  User.prototype.updateTheme = function updateTheme(theme) {
    if (!this.constructor.themes[theme]) {
      const err = wrapHandledError(
        new Error('Theme is not valid.'),
        {
          Type: 'info',
          message: err.message
        }
      );
      return Promise.reject(err);
    }
    return this.update$({ theme })
      .map({ updatedTo: theme })
      .toPromise();
  };

  // deprecated. remove once live
  User.remoteMethod(
    'updateTheme',
    {
      isStatic: false,
      description: 'updates the users chosen theme',
      accepts: [
        {
          arg: 'theme',
          type: 'string',
          required: true
        }
      ],
      returns: [
        {
          arg: 'status',
          type: 'object'
        }
      ],
      http: {
        path: '/update-theme',
        verb: 'POST'
      }
    }
  );

  // user.updateTo$(updateData: Object) => Observable[Number]
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
  User.prototype.getPoints$ = function getPoints$() {
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
};
