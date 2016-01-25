import _ from 'lodash';
import dedent from 'dedent';
import moment from 'moment';
import { Observable } from 'rx';
import debugFactory from 'debug';

import {
  frontEndChallengeId,
  dataVisChallengeId,
  backEndChallengeId
} from '../utils/constantStrings.json';

import certTypes from '../utils/certTypes.json';

import { ifNoUser401, ifNoUserRedirectTo } from '../utils/middleware';
import { observeQuery } from '../utils/rx';
import { calcCurrentStreak, calcLongestStreak } from '../utils/user-stats';

const debug = debugFactory('freecc:boot:user');
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
  [certTypes.fronEnd]: 'Front End certified',
  [certTypes.dataVis]: 'Data Vis Certified',
  [certTypes.backEnd]: 'Back End Certified',
  [certTypes.fullStack]: 'Full Stack Certified'
};

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

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
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
  router.get('/signin', getSignin);
  router.get('/signout', signout);
  router.get('/forgot', getForgot);
  router.post('/forgot', postForgot);
  router.get('/reset-password', getReset);
  router.post('/reset-password', postReset);
  router.get('/email-signup', getEmailSignup);
  router.get('/email-signin', getEmailSignin);
  router.get(
    '/toggle-lockdown-mode',
    sendNonUserToMap,
    toggleLockdownMode
  );
  router.post(
    '/account/delete',
    ifNoUser401,
    postDeleteAccount
  );
  router.get(
    '/account',
    sendNonUserToMap,
    getAccount
  );
  router.get('/vote1', vote1);
  router.get('/vote2', vote2);

  // Ensure these are the last routes!
  router.get(
    '/:username/front-end-certification',
    showCert.bind(null, certTypes.frontEnd)
  );

  router.get(
    '/:username/data-visualization-certification',
    showCert.bind(null, certTypes.dataVis)
  );

  router.get(
    '/:username/back-end-certification',
    showCert.bind(null, certTypes.backEnd)
  );

  router.get(
    '/:username/full-stack-certification',
    (req, res) => res.redirect(req.url.replace('full-stack', 'back-end'))
  );

  router.get('/:username', returnUser);

  app.use(router);

  function getSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/signin', {
      title: 'Sign in to Free Code Camp using a Social Media Account'
    });
  }

  function signout(req, res) {
    req.logout();
    res.redirect('/');
  }

  function getEmailSignin(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/email-signin', {
      title: 'Sign in to Free Code Camp using your Email Address'
    });
  }

  function getEmailSignup(req, res) {
    if (req.user) {
      return res.redirect('/');
    }
    res.render('account/email-signup', {
      title: 'Sign up for Free Code Camp using your Email Address'
    });
  }

  function getAccount(req, res) {
    const { username } = req.user;
    return res.redirect('/' + username);
  }

  function returnUser(req, res, next) {
    const username = req.params.username.toLowerCase();
    const { path } = req;
    User.findOne(
      {
        where: { username },
        include: 'pledge'
      },
      function(err, profileUser) {
        if (err) {
          return next(err);
        }
        if (!profileUser) {
          req.flash('errors', {
            msg: `404: We couldn't find path ${ path }`
          });
          console.log('404');
          return res.redirect('/');
        }
        profileUser = profileUser.toJSON();

        var cals = profileUser
          .progressTimestamps
          .map(objOrNum => {
            return typeof objOrNum === 'number' ?
              objOrNum :
              objOrNum.timestamp;
          })
          .sort();

        profileUser.currentStreak = calcCurrentStreak(cals);
        profileUser.longestStreak = calcLongestStreak(cals);

        const data = profileUser
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

        function filterAlgos(challenge) {
          // test if name starts with hike/waypoint/basejump/zipline
          // fix for bug that saved different challenges with incorrect
          // challenge types
          return !(/^(waypoint|hike|zipline|basejump)/i).test(challenge.name) &&
            +challenge.challengeType === 5;
        }

        function filterProjects(challenge) {
          return +challenge.challengeType === 3 ||
            +challenge.challengeType === 4;
        }

        const completedChallenges = profileUser.completedChallenges.filter(
          ({ name }) => typeof name === 'string'
        );

        const projects = completedChallenges.filter(filterProjects);

        const algos = completedChallenges.filter(filterAlgos);

        const challenges = completedChallenges
          .filter(challenge => !filterAlgos(challenge))
          .filter(challenge => !filterProjects(challenge));

        res.render('account/show', {
          title: 'Camper ' + profileUser.username + '\'s Code Portfolio',
          username: profileUser.username,
          name: profileUser.name,

          isMigrationGrandfathered: profileUser.isMigrationGrandfathered,
          isGithubCool: profileUser.isGithubCool,
          isLocked: !!profileUser.isLocked,

          pledge: profileUser.pledge,

          isFrontEndCert: profileUser.isFrontEndCert,
          isDataVisCert: profileUser.isDataVisCert,
          isBackEndCert: profileUser.isBackEndCert,
          isFullStackCert: profileUser.isFullStackCert,
          isHonest: profileUser.isHonest,

          location: profileUser.location,
          calender: data,

          github: profileUser.githubURL,
          linkedin: profileUser.linkedin,
          google: profileUser.google,
          facebook: profileUser.facebook,
          twitter: profileUser.twitter,
          picture: profileUser.picture,

          progressTimestamps: profileUser.progressTimestamps,

          projects,
          algos,
          challenges,
          moment,

          longestStreak: profileUser.longestStreak,
          currentStreak: profileUser.currentStreak,

          encodeFcc
        });
      }
    );
  }

  function showCert(certType, req, res, next) {
    const username = req.params.username.toLowerCase();
    const { user } = req;
    Observable.just(user)
      .flatMap(user => {
        if (user && user.username === username) {
          return Observable.just(user);
        }
        return findUserByUsername$(username, {
          isGithubCool: true,
          isFrontEndCert: true,
          isDataVisCert: true,
          isBackEndCert: true,
          isFullStackCert: true,
          isHonest: true,
          completedChallenges: true,
          username: true,
          name: true
        });
      })
      .subscribe(
        (user) => {
          if (!user) {
            req.flash('errors', {
              msg: `We couldn't find the user with the username ${username}`
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
            req.flash('errors', {
              msg: dedent`
                Upon review, this account has been flagged for academic
                dishonesty. If you’re the owner of this account contact
                team@freecodecamp.com for details.
              `
            });
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

            // find challenge in user profile
            // if not found supply empty object
            // if found grab date
            // if no date use todays date
            var { completedDate = new Date() } =
              _.find(
                user.completedChallenges,
                { id: certIds[certType] }
            ) || {};

            return res.render(
              certViews[certType],
              {
                username: user.username,
                date: moment(new Date(completedDate)).format('MMMM, Do YYYY'),
                name: user.name
              }
            );
          }
          req.flash('errors', {
            msg: `Looks like user ${username} is not ${certText[certType]}`
          });
          res.redirect('back');
        },
        next
      );
  }

  function toggleLockdownMode(req, res, next) {
    if (req.user.isLocked === true) {
      req.user.isLocked = false;
      return req.user.save(function(err) {
        if (err) { return next(err); }

        req.flash('success', {
          msg: dedent`
            Other people can now view all your challenge solutions.
            You can change this back at any time in the "Manage My Account"
            section at the bottom of this page.
          `
        });
        res.redirect('/' + req.user.username);
      });
    }
    req.user.isLocked = true;
    return req.user.save(function(err) {
      if (err) { return next(err); }

      req.flash('success', {
        msg: dedent`
          All your challenge solutions are now hidden from other people.
          You can change this back at any time in the "Manage My Account"
          section at the bottom of this page.
        `
      });
      res.redirect('/' + req.user.username);
    });
  }

  function postDeleteAccount(req, res, next) {
    User.destroyById(req.user.id, function(err) {
      if (err) { return next(err); }
      req.logout();
      req.flash('info', { msg: 'Your account has been deleted.' });
      res.redirect('/');
    });
  }

  function getReset(req, res) {
    if (!req.accessToken) {
      req.flash('errors', { msg: 'access token invalid' });
      return res.render('account/forgot');
    }
    res.render('account/reset', {
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

    User.findById(req.accessToken.userId, function(err, user) {
      if (err) { return next(err); }
      user.updateAttribute('password', password, function(err) {
      if (err) { return next(err); }

        debug('password reset processed successfully');
        req.flash('info', { msg: 'password reset processed successfully' });
        res.redirect('/');
      });
    });
  }

  function getForgot(req, res) {
    if (req.isAuthenticated()) {
      return res.redirect('/');
    }
    res.render('account/forgot', {
      title: 'Forgot Password'
    });
  }

  function postForgot(req, res) {
    const errors = req.validationErrors();
    const email = req.body.email.toLowerCase();

    if (errors) {
      req.flash('errors', errors);
      return res.redirect('/forgot');
    }

    User.resetPassword({
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
      res.render('account/forgot');
    });
  }

  /*
  function updateUserStoryPictures(userId, picture, username, cb) {
    Story.find({ 'author.userId': userId }, function(err, stories) {
      if (err) { return cb(err); }

      const tasks = [];
      stories.forEach(function(story) {
        story.author.picture = picture;
        story.author.username = username;
        tasks.push(function(cb) {
          story.save(cb);
        });
      });
      async.parallel(tasks, function(err) {
        if (err) {
          return cb(err);
        }
        cb();
      });
    });
  }
  */

  function vote1(req, res, next) {
    if (req.user) {
      req.user.tshirtVote = 1;
      req.user.save(function(err) {
        if (err) { return next(err); }

        req.flash('success', { msg: 'Thanks for voting!' });
        res.redirect('/map');
      });
    } else {
      req.flash('error', { msg: 'You must be signed in to vote.' });
      res.redirect('/map');
    }
  }

  function vote2(req, res, next) {
    if (req.user) {
      req.user.tshirtVote = 2;
      req.user.save(function(err) {
        if (err) { return next(err); }

        req.flash('success', { msg: 'Thanks for voting!' });
        res.redirect('/map');
      });
    } else {
      req.flash('error', {msg: 'You must be signed in to vote.'});
      res.redirect('/map');
    }
  }
};
