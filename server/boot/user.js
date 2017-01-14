import dedent from 'dedent';
import moment from 'moment-timezone';
import { Observable } from 'rx';
import debugFactory from 'debug';
import emoji from 'node-emoji';

import {
  frontEndChallengeId,
  dataVisChallengeId,
  backEndChallengeId
} from '../utils/constantStrings.json';
import certTypes from '../utils/certTypes.json';
import {
  ifNoUser401,
  ifNoUserRedirectTo
} from '../utils/middleware';
import { observeQuery } from '../utils/rx';
import {
  prepUniqueDays,
  calcCurrentStreak,
  calcLongestStreak
} from '../utils/user-stats';
import supportedLanguages from '../../common/utils/supported-languages';
import createNameIdMap from '../../common/utils/create-name-id-map';
import { cachedMap } from '../utils/map';

const debug = debugFactory('fcc:boot:user');
const sendNonUserToMap = ifNoUserRedirectTo('/map');
const certIds = {
  [certTypes.frontEnd]: frontEndChallengeId,
  [certTypes.dataVis]: dataVisChallengeId,
  [certTypes.backEnd]: backEndChallengeId
};

const certViews = {
  [certTypes.frontEnd]: 'certificate/front-end.jade',
  [certTypes.dataVis]: 'certificate/data-vis.jade',
  [certTypes.backEnd]: 'certificate/back-end.jade',
  [certTypes.fullStack]: 'certificate/full-stack.jade'
};

const certText = {
  [certTypes.frontEnd]: 'Front End certified',
  [certTypes.dataVis]: 'Data Vis Certified',
  [certTypes.backEnd]: 'Back End Certified',
  [certTypes.fullStack]: 'Full Stack Certified'
};

const dateFormat = 'MMM DD, YYYY';

function replaceScriptTags(value) {
  return value
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

function replaceFormAction(value) {
  return value.replace(/<form[^>]*>/, function(val) {
    return val.replace(/action(\s*?)=/, 'fccfaa$1=');
  });
}

function encodeFcc(value = '') {
  return replaceScriptTags(replaceFormAction(value));
}

function isAlgorithm(challenge) {
  // test if name starts with hike/waypoint/basejump/zipline
  // fix for bug that saved different challenges with incorrect
  // challenge types
  return !(/^(waypoint|hike|zipline|basejump)/i).test(challenge.name) &&
    +challenge.challengeType === 5;
}

function isProject(challenge) {
  return +challenge.challengeType === 3 ||
    +challenge.challengeType === 4;
}

function getChallengeGroup(challenge) {
  if (isProject(challenge)) {
    return 'projects';
  } else if (isAlgorithm(challenge)) {
    return 'algorithms';
  }
  return 'challenges';
}

// buildDisplayChallenges(
//   entities: { challenge: Object, challengeIdToName: Object },
//   challengeMap: Object,
//   tz: String
// ) => Observable[{
//   algorithms: Array,
//   projects: Array,
//   challenges: Array
// }]
function buildDisplayChallenges(
  { challenge: challengeMap = {}, challengeIdToName },
  userChallengeMap = {},
  timezone
) {
  return Observable.from(Object.keys(userChallengeMap))
    .map(challengeId => userChallengeMap[challengeId])
    .map(userChallenge => {
      const challengeId = userChallenge.id;
      const challenge = challengeMap[ challengeIdToName[challengeId] ];
      let finalChallenge = { ...userChallenge, ...challenge };
      if (userChallenge.completedDate) {
        finalChallenge.completedDate = moment
          .tz(userChallenge.completedDate, timezone)
          .format(dateFormat);
      }

      if (userChallenge.lastUpdated) {
        finalChallenge.lastUpdated = moment
          .tz(userChallenge.lastUpdated, timezone)
          .format(dateFormat);
      }

      return finalChallenge;
    })
    .filter(({ challengeType }) => challengeType !== 6)
    .groupBy(getChallengeGroup)
    .flatMap(group$ => {
      return group$.toArray().map(challenges => ({
        [getChallengeGroup(challenges[0])]: challenges
      }));
    })
    .reduce((output, group) => ({ ...output, ...group}), {})
    .map(groups => ({
      algorithms: groups.algorithms || [],
      projects: groups.projects ? groups.projects.reverse() : [],
      challenges: groups.challenges ? groups.challenges.reverse() : []
    }));
}

module.exports = function(app) {
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const User = app.models.User;
  const Block = app.models.Block;
  const map$ = cachedMap(Block);
  function findUserByUsername$(username, fields) {
    return observeQuery(
      User,
      'findOne',
      {
        where: { username },
        fields
      }
    );
  }

  router.get('/login', function(req, res) {
    res.redirect(301, '/signin');
  });
  router.get('/logout', function(req, res) {
    res.redirect(301, '/signout');
  });
  router.get('/signup', getEmailSignup);
  router.get('/signin', getSignin);
  router.get('/signout', signout);
  router.get('/forgot', getForgot);
  api.post('/forgot', postForgot);
  router.get('/reset-password', getReset);
  api.post('/reset-password', postReset);
  router.get('/email-signup', getEmailSignup);
  router.get('/email-signin', getEmailSignin);
  router.get('/deprecated-signin', getDepSignin);
  router.get('/update-email', getUpdateEmail);
  router.get(
    '/delete-my-account',
    sendNonUserToMap,
    showDelete
  );
  api.post(
    '/account/delete',
    ifNoUser401,
    postDeleteAccount
  );
  api.get(
    '/account',
    sendNonUserToMap,
    getAccount
  );
  router.get(
    '/reset-my-progress',
    sendNonUserToMap,
    showResetProgress
  );
  api.post(
    '/account/resetprogress',
    ifNoUser401,
    postResetProgress
  );

  api.get(
    '/account/unlink/:social',
    sendNonUserToMap,
    getUnlinkSocial
  );

  // Ensure these are the last routes!
  api.get(
    '/:username/front-end-certification',
    showCert.bind(null, certTypes.frontEnd)
  );

  api.get(
    '/:username/data-visualization-certification',
    showCert.bind(null, certTypes.dataVis)
  );

  api.get(
    '/:username/back-end-certification',
    showCert.bind(null, certTypes.backEnd)
  );

  api.get(
    '/:username/full-stack-certification',
    (req, res) => res.redirect(req.url.replace('full-stack', 'back-end'))
  );

  router.get('/:username', showUserProfile);

  app.use('/:lang', router);
  app.use(api);

  function getSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    return res.render('account/signin', {
      title: 'Sign in to freeCodeCamp'
    });
  }

  function signout(req, res) {
    req.logout();
    res.redirect('/');
  }


  function getDepSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    return res.render('account/deprecated-signin', {
      title: 'Sign in to freeCodeCamp using a Deprecated Login'
    });
  }

  function getUpdateEmail(req, res) {
    if (!req.user) {
      return res.redirect('/');
    }
    return res.render('account/update-email', {
      title: 'Update your Email'
    });
  }

  function getEmailSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    return res.render('account/email-signin', {
      title: 'Sign in to freeCodeCamp using your Email Address'
    });
  }

  function getEmailSignup(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    return res.render('account/email-signup', {
      title: 'Sign up for freeCodeCamp using your Email Address'
    });
  }

  function getAccount(req, res) {
    const { username } = req.user;
    return res.redirect('/' + username);
  }

  function getUnlinkSocial(req, res, next) {
    const { user } = req;
    const { username } = user;

    let social = req.params.social;
    if (!social) {
      req.flash('errors', {
        msg: 'No social account found'
      });
      return res.redirect('/' + username);
    }

    social = social.toLowerCase();
    const validSocialAccounts = ['twitter', 'linkedin'];
    if (validSocialAccounts.indexOf(social) === -1) {
      req.flash('errors', {
        msg: 'Invalid social account'
      });
      return res.redirect('/' + username);
    }

    if (!user[social]) {
      req.flash('errors', {
        msg: `No ${social} account associated`
      });
      return res.redirect('/' + username);
    }

    const query = {
      where: {
        provider: social
      }
    };

    return user.identities(query, function(err, identities) {
      if (err) { return next(err); }

      // assumed user identity is unique by provider
      let identity = identities.shift();
      if (!identity) {
        req.flash('errors', {
          msg: 'No social account found'
        });
        return res.redirect('/' + username);
      }

      return identity.destroy(function(err) {
        if (err) { return next(err); }

        const updateData = { [social]: null };

        return user.update$(updateData)
          .subscribe(() => {
            debug(`${social} has been unlinked successfully`);

            req.flash('info', {
              msg: `You\'ve successfully unlinked your ${social}.`
            });
            return res.redirect('/' + username);
          }, next);
      });
    });
  }

  function showUserProfile(req, res, next) {
    const username = req.params.username.toLowerCase();
    const { user } = req;

    // timezone of signed-in account
    // to show all date related components
    // using signed-in account's timezone
    // not of the profile she is viewing
    const timezone = user && user.timezone ?
      user.timezone :
      'UTC';

    const query = {
      where: { username },
      include: 'pledge'
    };

    return User.findOne$(query)
      .filter(userPortfolio => {
        if (!userPortfolio) {
          next();
        }
        return !!userPortfolio;
      })
      .flatMap(userPortfolio => {
        userPortfolio = userPortfolio.toJSON();

        const timestamps = userPortfolio
          .progressTimestamps
          .map(objOrNum => {
            return typeof objOrNum === 'number' ?
              objOrNum :
              objOrNum.timestamp;
          });

        const uniqueDays = prepUniqueDays(timestamps, timezone);

        userPortfolio.currentStreak = calcCurrentStreak(uniqueDays, timezone);
        userPortfolio.longestStreak = calcLongestStreak(uniqueDays, timezone);

        const calender = userPortfolio
          .progressTimestamps
          .map((objOrNum) => {
            return typeof objOrNum === 'number' ?
              objOrNum :
              objOrNum.timestamp;
          })
          .filter((timestamp) => {
            return !!timestamp;
          })
          .reduce((data, timeStamp) => {
            data[(timeStamp / 1000)] = 1;
            return data;
          }, {});

        if (userPortfolio.isCheater && !user) {
          req.flash('errors', {
            msg: dedent`
              Upon review, this account has been flagged for academic
              dishonesty. If you’re the owner of this account contact
              team@freecodecamp.com for details.
            `
          });
        }

        if (userPortfolio.bio) {
          userPortfolio.bio = emoji.emojify(userPortfolio.bio);
        }

        return map$.map(({ entities }) => createNameIdMap(entities))
          .flatMap(entities => buildDisplayChallenges(
            entities,
            userPortfolio.challengeMap,
            timezone
          ))
          .map(displayChallenges => ({
            ...userPortfolio,
            ...displayChallenges,
            title: 'Camper ' + userPortfolio.username + '\'s Code Portfolio',
            calender,
            github: userPortfolio.githubURL,
            moment,
            encodeFcc,
            supportedLanguages
          }));
      })
      .doOnNext(data => {
        return res.render('account/show', data);
      })
      .subscribe(
        () => {},
        next
      );
  }

  function showCert(certType, req, res, next) {
    const username = req.params.username.toLowerCase();
    const certId = certIds[certType];
    return findUserByUsername$(username, {
          isGithubCool: true,
          isCheater: true,
          isLocked: true,
          isFrontEndCert: true,
          isDataVisCert: true,
          isBackEndCert: true,
          isFullStackCert: true,
          isHonest: true,
          username: true,
          name: true,
          challengeMap: true
      })
      .subscribe(
        user => {
          if (!user) {
            req.flash('errors', {
              msg: `We couldn't find a user with the username ${username}`
            });
            return res.redirect('/');
          }
          if (!user.isGithubCool) {
            req.flash('errors', {
              msg: dedent`
                This user needs to link GitHub with their account
                in order for others to be able to view their certificate.
              `
            });
            return res.redirect('back');
          }

          if (user.isCheater) {
            return res.redirect(`/${user.username}`);
          }

          if (user.isLocked) {
            req.flash('errors', {
              msg: dedent`
                ${username} has chosen to make their profile
                  private. They will need to make their profile public
                  in order for others to be able to view their certificate.
              `
            });
            return res.redirect('back');
          }
          if (!user.isHonest) {
            req.flash('errors', {
              msg: dedent`
                ${username} has not yet agreed to our Academic Honesty Pledge.
              `
            });
            return res.redirect('back');
          }

          if (user[certType]) {

            const { challengeMap = {} } = user;
            const { completedDate = new Date() } = challengeMap[certId] || {};

            return res.render(
              certViews[certType],
              {
                username: user.username,
                date: moment(new Date(completedDate)).format('MMMM D, YYYY'),
                name: user.name
              }
            );
          }
          req.flash('errors', {
            msg: `Looks like user ${username} is not ${certText[certType]}`
          });
          return res.redirect('back');
        },
        next
      );
  }

  function showDelete(req, res) {
    return res.render('account/delete', { title: 'Delete My Account!' });
  }

  function postDeleteAccount(req, res, next) {
    User.destroyById(req.user.id, function(err) {
      if (err) { return next(err); }
      req.logout();
      req.flash('info', { msg: 'You\'ve successfully deleted your account.' });
      return res.redirect('/');
    });
  }

  function showResetProgress(req, res) {
    return res.render('account/reset-progress', { title: 'Reset My Progress!'
    });
  }

  function postResetProgress(req, res, next) {
    User.findById(req.user.id, function(err, user) {
      if (err) { return next(err); }
      return user.updateAttributes({
        progressTimestamps: [{
          timestamp: Date.now()
        }],
        currentStreak: 0,
        longestStreak: 0,
        currentChallengeId: '',
        isBackEndCert: false,
        isFullStackCert: false,
        isDataVisCert: false,
        isFrontEndCert: false,
        challengeMap: {},
        challegesCompleted: []
      }, function(err) {
        if (err) { return next(err); }
        req.flash('info', { msg: 'You\'ve successfully reset your progress.' });
        return res.redirect('/');
      });
    });
  }

  function getReset(req, res) {
    if (!req.accessToken) {
      req.flash('errors', { msg: 'access token invalid' });
      return res.render('account/forgot');
    }
    return res.render('account/reset', {
      title: 'Reset your Password',
      accessToken: req.accessToken.id
    });
  }

  function postReset(req, res, next) {
    const errors = req.validationErrors();
    const { password } = req.body;

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('back');
    }

    return User.findById(req.accessToken.userId, function(err, user) {
      if (err) { return next(err); }
      return user.updateAttribute('password', password, function(err) {
        if (err) { return next(err); }

        debug('password reset processed successfully');
        req.flash('info', { msg: 'You\'ve successfully reset your password.' });
        return res.redirect('/');
      });
    });
  }

  function getForgot(req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    return res.render('account/forgot', {
      title: 'Forgot Password'
    });
  }

  function postForgot(req, res) {
    req.validate('email', 'Email format is not valid').isEmail();
    const errors = req.validationErrors();
    const email = req.body.email.toLowerCase();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }

    return User.resetPassword({
      email: email
    }, function(err) {
      if (err) {
        req.flash('errors', err.message);
        return res.redirect('/forgot');
      }

      req.flash('info', {
        msg: 'An e-mail has been sent to ' +
        email +
        ' with further instructions.'
      });
      return res.render('account/forgot');
    });
  }
};
