import _ from 'lodash';
import dedent from 'dedent';
import moment from 'moment';
import { Observable } from 'rx';
import debugFactory from 'debug';

import {
  frontEndChallangeId,
  fullStackChallangeId
} from '../utils/constantStrings.json';
import { ifNoUser401, ifNoUserRedirectTo } from '../utils/middleware';
import { observeQuery } from '../utils/rx';

const debug = debugFactory('freecc:boot:user');
const daysBetween = 1.5;
const sendNonUserToMap = ifNoUserRedirectTo('/map');

function replaceScriptTags(value) {
  return value
    .replace(/<script>/gi, 'fccss')
    .replace(/<\/script>/gi, 'fcces');
}

function calcCurrentStreak(cals) {
  const revCals = cals.concat([Date.now()]).slice().reverse();
  let streakBroken = false;
  const lastDayInStreak = revCals
    .reduce((current, cal, index) => {
      const before = revCals[index === 0 ? 0 : index - 1];
      if (
        !streakBroken &&
        moment(before).diff(cal, 'days', true) < daysBetween
      ) {
        return index;
      }
      streakBroken = true;
      return current;
    }, 0);

  const lastTimestamp = revCals[lastDayInStreak];
  return Math.ceil(moment().diff(lastTimestamp, 'days', true));
}

function calcLongestStreak(cals) {
  let tail = cals[0];
  const longest = cals.reduce((longest, head, index) => {
    const last = cals[index === 0 ? 0 : index - 1];
    // is streak broken
    if (moment(head).diff(last, 'days', true) > daysBetween) {
      tail = head;
    }
    if (dayDiff(longest) < dayDiff([head, tail])) {
      return [head, tail];
    }
    return longest;
  }, [cals[0], cals[0]]);

  return Math.ceil(dayDiff(longest));
}

function dayDiff([head, tail]) {
  return moment(head).diff(tail, 'days', true);
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
    showCert
  );

  router.get(
    '/:username/full-stack-certification',
    showCert
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

        const baseAndZip = profileUser.completedChallenges.filter(
          function(obj) {
          return obj.challengeType === 3 || obj.challengeType === 4;
          }
        );

        const bonfires = profileUser.completedChallenges.filter(function(obj) {
          return obj.challengeType === 5 && (obj.name || '').match(/Bonfire/g);
        });

        const waypoints = profileUser.completedChallenges.filter(function(obj) {
          return (obj.name || '').match(/^Waypoint/i);
        });

        res.render('account/show', {
          title: 'Camper ' + profileUser.username + '\'s Code Portfolio',
          username: profileUser.username,
          name: profileUser.name,

          isMigrationGrandfathered: profileUser.isMigrationGrandfathered,
          isGithubCool: profileUser.isGithubCool,
          isLocked: !!profileUser.isLocked,

          pledge: profileUser.pledge,

          isFrontEndCert: profileUser.isFrontEndCert,
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

          baseAndZip,
          bonfires,
          waypoints,
          moment,

          longestStreak: profileUser.longestStreak,
          currentStreak: profileUser.currentStreak,

          replaceScriptTags
        });
      }
    );
  }

  function showCert(req, res, next) {
    const username = req.params.username.toLowerCase();
    const { user } = req;
    const showFront = req.path.split('/').pop() === 'front-end-certification';
    Observable.just(user)
      .flatMap(user => {
        if (user && user.username === username) {
          return Observable.just(user);
        }
        return findUserByUsername$(username, {
          isGithubCool: true,
          isFrontEndCert: true,
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
              msg: `404: We couldn't find the user ${username}`
            });
            return res.redirect('/');
          }
          if (!user.isGithubCool) {
            req.flash('errors', {
              msg: dedent`
                This user needs to link GitHub with their account
                in order to display this certificate to the public.
              `
            });
            return res.redirect('back');
          }
          if (user.isLocked) {
            req.flash('errors', {
              msg: dedent`
                ${username} has chosen to hide their work from the public.
                They need to unhide their work in order for this certificate to
                be verifiable.
              `
            });
            return res.redirect('back');
          }
          if (!user.isHonest) {
            req.flash('errors', {
              msg: dedent`
                ${username} has not agreed to our Academic Honesty Pledge yet.
              `
            });
            return res.redirect('back');
          }

          if (
            showFront && user.isFrontEndCert ||
            !showFront && user.isFullStackCert
          ) {
            var { completedDate = new Date() } =
              _.find(user.completedChallenges, {
                id: showFront ?
                  frontEndChallangeId :
                  fullStackChallangeId
              }) || {};

            return res.render(
              showFront ?
                'certificate/front-end.jade' :
                'certificate/full-stack.jade',
              {
                username: user.username,
                date: moment(new Date(completedDate))
                  .format('MMMM, Do YYYY'),
                name: user.name
              }
            );
          }
          req.flash('errors', {
            msg: showFront ?
              `Looks like user ${username} is not Front End certified` :
              `Looks like user ${username} is not Full Stack certified`
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
        req.flash('errors', err);
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
