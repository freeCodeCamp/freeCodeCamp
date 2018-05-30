import { Observable } from 'rx';
import uuid from 'uuid/v4';
import moment from 'moment';
import dedent from 'dedent';
import debugFactory from 'debug';
import { isEmail } from 'validator';
import path from 'path';
import loopback from 'loopback';
import _ from 'lodash';
import { ObjectId } from 'mongodb';
import jwt from 'jsonwebtoken';

import { themes } from '../utils/themes';
import { saveUser, observeMethod } from '../../server/utils/rx.js';
import { blacklistedUsernames } from '../../server/utils/constants.js';
import { wrapHandledError } from '../../server/utils/create-handled-error.js';
import {
  getServerFullURL,
  getEmailSender
} from '../../server/utils/url-utils.js';
import {
  normaliseUserFields,
  getProgress,
  publicUserProps
} from '../../server/utils/publicUserProps';

const debug = debugFactory('fcc:models:user');
const BROWNIEPOINTS_TIMEOUT = [1, 'hour'];

const createEmailError = redirectTo => wrapHandledError(
  new Error('email format is invalid'),
  {
    type: 'info',
    message: 'Please check to make sure the email is a valid email address.',
    redirectTo
  }
);

function destroyAll(id, Model) {
  return Observable.fromNodeCallback(
    Model.destroyAll,
    Model
  )({ userId: id });
}

function buildCompletedChallengesUpdate(completedChallenges, project) {
  const key = Object.keys(project)[0];
  const solutions = project[key];
  const solutionKeys = Object.keys(solutions);
  const currentCompletedChallenges = [ ...completedChallenges ];
  const currentCompletedProjects = currentCompletedChallenges
    .filter(({id}) => solutionKeys.includes(id));
  const now = Date.now();
  const update = solutionKeys.reduce((update, currentId) => {
    const indexOfCurrentId = _.findIndex(
      update,
      ({id}) => id === currentId
    );
    const isCurrentlyCompleted = indexOfCurrentId !== -1;
    if (isCurrentlyCompleted) {
      update[indexOfCurrentId] = {
        ..._.find(update, ({id}) => id === currentId).__data,
        solution: solutions[currentId]
      };
    }
    if (!isCurrentlyCompleted) {
      return [
        ...update,
        {
          id: currentId,
          solution: solutions[currentId],
          challengeType: 3,
          completedDate: now
        }
      ];
    }
    return update;
  }, currentCompletedProjects);
  const updatedExisting = _.uniqBy(
    [
      ...update,
      ...currentCompletedChallenges
    ],
    'id'
  );
  return {
    updated: updatedExisting,
    isNewCompletionCount:
      updatedExisting.length - completedChallenges.length
  };
}

function isTheSame(val1, val2) {
  return val1 === val2;
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

const renderEmailChangeEmail = loopback.template(path.join(
  __dirname,
  '..',
  '..',
  'server',
  'views',
  'emails',
  'user-request-update-email.ejs'
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

function getWaitMessage(ttl) {
  const minutesLeft = getWaitPeriod(ttl);
  if (minutesLeft <= 0) {
    return null;
  }
  const timeToWait = minutesLeft ?
    `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}` :
    'a few seconds';

  return dedent`
    Please wait ${timeToWait} to resend an authentication link.
  `;
}

module.exports = function(User) {
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
    User.create$ = Observable.fromNodeCallback(
      User.create.bind(User)
    );
    User.prototype.createAccessToken$ = Observable.fromNodeCallback(
      User.prototype.createAccessToken
    );
  });

  User.observe('before save', function(ctx) {
    const beforeCreate = Observable.of(ctx)
      .filter(({ isNewInstance }) => isNewInstance)
      // User.create
      .map(({ instance }) => instance)
      .flatMap(user => {
        // note(berks): we now require all new users to supply an email
        // this was not always the case
        if (
          typeof user.email !== 'string' ||
          !isEmail(user.email)
        ) {
          throw createEmailError();
        }
        // assign random username to new users
        // actual usernames will come from github
        // use full uuid to ensure uniqueness
        user.username = 'fcc' + uuid();

        if (!user.externalId) {
          user.externalId = uuid();
        }
        if (!user.unsubscribeId) {
          user.unsubscribeId = new ObjectId();
        }

        if (!user.progressTimestamps) {
          user.progressTimestamps = [];
        }

        if (user.progressTimestamps.length === 0) {
          user.progressTimestamps.push({ timestamp: Date.now() });
        }
        return Observable.fromPromise(User.doesExist(null, user.email))
          .do(exists => {
            if (exists) {
              throw wrapHandledError(
                new Error('user already exists'),
                {
                  redirectTo: '/signin',
                  message: dedent`
        The ${user.email} email address is already associated with an account.
        Try signing in with it here instead.
                  `
                }
              );
            }
          });
      })
      .ignoreElements();

    const updateOrSave = Observable.of(ctx)
      // not new
      .filter(({ isNewInstance }) => !isNewInstance)
      .map(({ instance }) => instance)
      // is update or save user
      .filter(Boolean)
      .do(user => {
        // Some old accounts will not have emails associated with theme
        // we verify only if the email field is populated
        if (user.email && !isEmail(user.email)) {
          throw createEmailError();
        }

        user.username = user.username.trim().toLowerCase();
        user.email = typeof user.email === 'string' ?
          user.email.trim().toLowerCase() :
          user.email;

        if (!user.progressTimestamps) {
          user.progressTimestamps = [];
        }

        if (user.progressTimestamps.length === 0) {
          user.progressTimestamps.push(Date.now());
        }

        if (!user.externalId) {
          user.externalId = uuid();
        }

        if (!user.unsubscribeId) {
          user.unsubscribeId = new ObjectId();
        }
      })
      .ignoreElements();
    return Observable.merge(beforeCreate, updateOrSave)
      .toPromise();
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
  // overwrite lb confirm
  User.confirm = function(uid, token, redirectTo) {
    return this.findById(uid)
      .then(user => {
        if (!user) {
          throw wrapHandledError(
            new Error(`User not found: ${uid}`),
            {
              // standard oops
              type: 'info',
              redirectTo
            }
          );
        }
        if (user.verificationToken !== token) {
          throw wrapHandledError(
            new Error(`Invalid token: ${token}`),
            {
              type: 'info',
              message: dedent`
                Looks like you have clicked an invalid link.
                Please sign in and request a fresh one.
              `,
              redirectTo
            }
          );
        }
        return user.update$({
          email: user.newEmail,
          emailVerified: true,
          emailVerifyTTL: null,
          newEmail: null,
          verificationToken: null
        }).toPromise();
      });
  };

  User.prototype.loginByRequest = function loginByRequest(req, res) {
    const {
      query: {
        emailChange
      }
    } = req;
    const createToken = this.createAccessToken$()
      .do(accessToken => {
        const config = {
          signed: !!req.signedCookies,
          maxAge: accessToken.ttl,
          domain: process.env.COOKIE_DOMAIN || 'localhost'
        };
        if (accessToken && accessToken.id) {
          const jwtAccess = jwt.sign({accessToken}, process.env.JWT_SECRET);
          res.cookie('jwt_access_token', jwtAccess, config);
          res.cookie('access_token', accessToken.id, config);
          res.cookie('userId', accessToken.userId, config);
        }
      });
    let data = {
      emailVerified: true,
      emailAuthLinkTTL: null,
      emailVerifyTTL: null
    };
    if (emailChange && this.newEmail) {
      data = {
        ...data,
        email: this.newEmail,
        newEmail: null
      };
    }
    const updateUser = this.update$(data);
    return Observable.combineLatest(
      createToken,
      updateUser,
      req.logIn(this),
      (accessToken) => accessToken,
    );
  };

  User.afterRemote('logout', function({req, res}, result, next) {
    const config = {
      signed: !!req.signedCookies,
      domain: process.env.COOKIE_DOMAIN || 'localhost'
    };
    res.clearCookie('jwt_access_token', config);
    res.clearCookie('access_token', config);
    res.clearCookie('userId', config);
    res.clearCookie('_csrf', config);
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

  User.prototype.createAuthToken = function createAuthToken({ ttl } = {}) {
    return Observable.fromNodeCallback(
      this.authTokens.create.bind(this.authTokens)
    )({ ttl });
  };

  User.prototype.getEncodedEmail = function getEncodedEmail() {
    if (!this.email) {
      return null;
    }
    return Buffer(this.email).toString('base64');
  };

  User.decodeEmail = email => Buffer(email, 'base64').toString();

  function requestAuthEmail(isSignUp, newEmail) {
    return Observable.defer(() => {
      const messageOrNull = getWaitMessage(this.emailAuthLinkTTL);
      if (messageOrNull) {
        throw wrapHandledError(
          new Error('request is throttled'),
          {
            type: 'info',
            message: messageOrNull
          }
        );
      }

      // create a temporary access token with ttl for 15 minutes
      return this.createAuthToken({ ttl: 15 * 60 * 1000 });
    })
      .flatMap(token => {
        let renderAuthEmail = renderSignInEmail;
        let subject = 'Your sign in link for freeCodeCamp.org';
        if (isSignUp) {
          renderAuthEmail = renderSignUpEmail;
          subject = 'Your sign in link for your new freeCodeCamp.org account';
        }
        if (newEmail) {
          renderAuthEmail = renderEmailChangeEmail;
          subject = dedent`
            Please confirm your updated email address for freeCodeCamp.org
          `;
        }
        const { id: loginToken, created: emailAuthLinkTTL } = token;
        const loginEmail = this.getEncodedEmail(newEmail ? newEmail : null);
        const host = getServerFullURL();
        const mailOptions = {
          type: 'email',
          to: newEmail ? newEmail : this.email,
          from: getEmailSender(),
          subject,
          text: renderAuthEmail({
            host,
            loginEmail,
            loginToken,
            emailChange: !!newEmail
          })
        };
        return Observable.forkJoin(
          User.email.send$(mailOptions),
          this.update$({ emailAuthLinkTTL })
        );
      })
      .map(() =>
        dedent`
          Check your email and click the link we sent you to confirm you email.
        `
      );
  }

  User.prototype.requestAuthEmail = requestAuthEmail;

  User.prototype.requestUpdateEmail = function requestUpdateEmail(newEmail) {

    const currentEmail = this.email;
    const isOwnEmail = isTheSame(newEmail, currentEmail);
    const isResendUpdateToSameEmail = isTheSame(newEmail, this.newEmail);
    const isLinkSentWithinLimit = getWaitMessage(this.emailVerifyTTL);
    const isVerifiedEmail = this.emailVerified;

    if (isOwnEmail && isVerifiedEmail) {
      // email is already associated and verified with this account
      throw wrapHandledError(
        new Error('email is already verified'),
        {
          type: 'info',
          message: `
            ${newEmail} is already associated with this account.
            You can update a new email address instead.`
        }
      );
    }
    if (isResendUpdateToSameEmail && isLinkSentWithinLimit) {
      // trying to update with the same newEmail and
      // confirmation email is still valid
      throw wrapHandledError(
        new Error(),
        {
          type: 'info',
          message: dedent`
          We have already sent an email confirmation request to ${newEmail}.
          ${isLinkSentWithinLimit}`
        }
      );
    }
    if (!isEmail('' + newEmail)) {
      throw createEmailError();
    }

    // newEmail is not associated with this user, and
    // this attempt to change email is the first or
    // previous attempts have expired
    if (
        !isOwnEmail ||
        (isOwnEmail && !isVerifiedEmail) ||
        (isResendUpdateToSameEmail && !isLinkSentWithinLimit)
      ) {
      const updateConfig = {
        newEmail,
        emailVerified: false,
        emailVerifyTTL: new Date()
      };

      // defer prevents the promise from firing prematurely (before subscribe)
      return Observable.defer(() => User.doesExist(null, newEmail))
      .do(exists => {
        if (exists && !isOwnEmail) {
          // newEmail is not associated with this account,
          // but is associated with different account
          throw wrapHandledError(
            new Error('email already in use'),
            {
              type: 'info',
              message:
              `${newEmail} is already associated with another account.`
            }
          );
        }
      })
      .flatMap(()=>{
        return Observable.forkJoin(
          this.update$(updateConfig),
          this.requestAuthEmail(false, newEmail),
          (_, message) => message
        )
        .do(() => {
          Object.assign(this, updateConfig);
        });
      });

    } else {
      return 'Something unexpected happened whilst updating your email.';
    }
  };

  function requestCompletedChallenges() {
    return this.getCompletedChallenges$();
  }

  User.prototype.requestCompletedChallenges = requestCompletedChallenges;

  User.prototype.requestUpdateFlags = function requestUpdateFlags(values) {
    const flagsToCheck = Object.keys(values);
    const valuesToCheck = _.pick({ ...this }, flagsToCheck);
    const valuesToUpdate = flagsToCheck
      .filter(flag => !isTheSame(values[flag], valuesToCheck[flag]));
    if (!valuesToUpdate.length) {
      return Observable.of(dedent`
        No property in
        ${JSON.stringify(flagsToCheck, null, 2)}
        will introduce a change in this user.
        `
      )
       .map(() => dedent`Your settings have not been updated.`);
    }
    return Observable.from(valuesToUpdate)
      .flatMap(flag => Observable.of({ flag, newValue: values[flag] }))
      .toArray()
      .flatMap(updates => {
        return Observable.forkJoin(
          Observable.from(updates)
            .flatMap(({ flag, newValue }) => {
              return Observable.fromPromise(User.doesExist(null, this.email))
                .flatMap(() => {
                  return this.update$({ [flag]: newValue })
                  .do(() => {
                    this[flag] = newValue;
                  });
                });
            })
        );
      })
      .map(() => dedent`
        We have successfully updated your account.
      `);
  };

  User.prototype.updateMyPortfolio =
    function updateMyPortfolio(portfolioItem, deleteRequest) {
      const currentPortfolio = this.portfolio.slice(0);
      const pIndex = _.findIndex(
        currentPortfolio,
        p => p.id === portfolioItem.id
      );
      let updatedPortfolio = [];
      if (deleteRequest) {
        updatedPortfolio = currentPortfolio.filter(
          p => p.id !== portfolioItem.id
        );
      } else if (pIndex === -1) {
        updatedPortfolio = currentPortfolio.concat([ portfolioItem ]);
      } else {
        updatedPortfolio = [ ...currentPortfolio ];
        updatedPortfolio[pIndex] = { ...portfolioItem };
      }
      return this.update$({ portfolio: updatedPortfolio })
        .do(() => {
          this.portfolio = updatedPortfolio;
        })
        .map(() => dedent`
          Your portfolio has been updated.
        `);
    };

  User.prototype.updateMyProjects = function updateMyProjects(project) {
    const updateData = { $set: {} };
    return this.getCompletedChallenges$()
      .flatMap(() => {
        const {
          updated,
          isNewCompletionCount
        } = buildCompletedChallengesUpdate(
          this.completedChallenges,
          project
        );
        updateData.$set.completedChallenges = updated;
        if (isNewCompletionCount) {
          let points = [];
          // give points a length of isNewCompletionCount
          points[isNewCompletionCount - 1] = true;
          updateData.$push = {};
          updateData.$push.progressTimestamps = {
            $each: points.map(() => Date.now())
          };
        }
        return this.update$(updateData);
      })
      .do(() => Object.assign(this, updateData))
      .map(() => dedent`
        Your projects have been updated.
      `);
  };

  User.prototype.updateMyProfileUI = function updateMyProfileUI(profileUI) {
    const oldUI = { ...this.profileUI };
    const update = {
      profileUI: {
        ...oldUI,
        ...profileUI
      }
    };

    return this.update$(update)
      .do(() => Object.assign(this, update))
      .map(() => dedent`
        Your privacy settings have been updated.
      `);
  };

  User.prototype.updateMyUsername = function updateMyUsername(newUsername) {
    return Observable.defer(
      () => {
        const isOwnUsername = isTheSame(newUsername, this.username);
        if (isOwnUsername) {
          return Observable.of(dedent`
          ${newUsername} is already associated with this account.
          `);
        }
        return Observable.fromPromise(User.doesExist(newUsername));
      }
    )
    .flatMap(boolOrMessage => {
      if (typeof boolOrMessage === 'string') {
        return Observable.of(boolOrMessage);
      }
      if (boolOrMessage) {
        return Observable.of(dedent`
        ${newUsername} is already associated with a different account.
        `);
      }

      return this.update$({ username: newUsername })
        .do(() => {
          this.username = newUsername;
        })
        .map(() => dedent`
        Your username has been updated successfully.
        `);
    });
  };

  User.getPublicProfile = function getPublicProfile(username, cb) {
    return User.findOne$({ where: { username }})
      .flatMap(user => {
        if (!user) {
          return Observable.of({});
        }
        const { completedChallenges, progressTimestamps, timezone } = user;
        return Observable.of({
          entities: {
            user: {
              [user.username]: {
                ..._.pick(user, publicUserProps),
                isGithub: !!user.githubProfile,
                isLinkedIn: !!user.linkedIn,
                isTwitter: !!user.twitter,
                isWebsite: !!user.website,
                points: progressTimestamps.length,
                completedChallenges,
                ...getProgress(progressTimestamps, timezone),
                ...normaliseUserFields(user)
              }
            }
          },
          result: user.username
        });
      })
      .subscribe(
        user => cb(null, user),
        cb
      );
  };

  User.remoteMethod('getPublicProfile', {
    accepts: {
      arg: 'username',
      type: 'string',
      required: true
    },
    returns: [
      {
        arg: 'user',
        type: 'object',
        root: true
      }
    ],
    http: {
      path: '/get-public-profile',
      verb: 'GET'
    }
  });

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

  User.themes = themes;

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
    return this.update$({ theme }).toPromise();
  };

  // deprecated. remove once live
  User.remoteMethod(
    'updateTheme',
    {
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
  User.prototype.getCompletedChallenges$ = function getCompletedChallenges$() {
    const id = this.getId();
    const filter = {
      where: { id },
      fields: { completedChallenges: true }
    };
    return this.constructor.findOne$(filter)
      .map(user => {
        this.completedChallenges = user.completedChallenges;
        return user.completedChallenges;
      });
  };

  User.getMessages = messages => Promise.resolve(messages);

  User.remoteMethod('getMessages', {
    http: {
      verb: 'get',
      path: '/get-messages'
    },
    accepts: {
      arg: 'messages',
      type: 'object',
      http: ctx => ctx.req.flash()
    },
    returns: [
      {
        arg: 'messages',
        type: 'object',
        root: true
      }
    ]
  });
};
