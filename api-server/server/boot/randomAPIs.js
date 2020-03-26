import request from 'request';

import { homeLocation } from '../../../config/env';

import constantStrings from '../utils/constantStrings.json';

const githubClient = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

module.exports = function(app) {
  const router = app.loopback.Router();
  const User = app.models.User;

  router.get('/api/github', githubCalls);
  router.get('/u/:email', unsubscribeDeprecated);
  router.get('/unsubscribe/:email', unsubscribeDeprecated);
  router.get('/ue/:unsubscribeId', unsubscribeById);
  router.get(
    '/the-fastest-web-page-on-the-internet',
    theFastestWebPageOnTheInternet
  );
  router.get('/unsubscribed/:unsubscribeId', unsubscribedWithId);
  router.get('/unsubscribed', unsubscribed);
  router.get('/resubscribe/:unsubscribeId', resubscribe);
  router.get('/nonprofits', nonprofits);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);

  app.use(router);

  function theFastestWebPageOnTheInternet(req, res) {
    res.render('resources/the-fastest-web-page-on-the-internet', {
      title: 'This is the fastest web page on the internet'
    });
  }

  function bootcampCalculator(req, res) {
    res.render('resources/calculator', {
      title: 'Coding Bootcamp Cost Calculator'
    });
  }

  function nonprofits(req, res) {
    res.render('resources/nonprofits', {
      title: 'Your Nonprofit Can Get Pro Bono Code'
    });
  }

  function unsubscribeDeprecated(req, res) {
    req.flash(
      'info',
      'We are no longer able to process this unsubscription request. ' +
        'Please go to your settings to update your email preferences'
    );
    res.redirectWithFlash(homeLocation);
  }

  function unsubscribeById(req, res, next) {
    const { unsubscribeId } = req.params;
    if (!unsubscribeId) {
      req.flash('info', 'We could not find an account to unsubscribe');
      return res.redirectWithFlash(homeLocation);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to unsubscribe');
        return res.redirectWithFlash(homeLocation);
      }
      const updates = users.map(user => {
        return new Promise((resolve, reject) =>
          user.updateAttributes(
            {
              sendQuincyEmail: false
            },
            err => {
              if (err) {
                reject(err);
              } else {
                resolve();
              }
            }
          )
        );
      });
      return Promise.all(updates)
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences."
          );
          return res.redirectWithFlash(
            `${homeLocation}/unsubscribed/${unsubscribeId}`
          );
        })
        .catch(next);
    });
  }

  function unsubscribed(req, res) {
    res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed'
    });
  }

  function unsubscribedWithId(req, res) {
    const { unsubscribeId } = req.params;
    return res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed',
      unsubscribeId
    });
  }

  function resubscribe(req, res, next) {
    const { unsubscribeId } = req.params;
    if (!unsubscribeId) {
      req.flash(
        'info',
        'We we unable to process this request, please check and try againÍ'
      );
      res.redirect(homeLocation);
    }
    return User.find({ where: { unsubscribeId } }, (err, users) => {
      if (err || !users.length) {
        req.flash('info', 'We could not find an account to resubscribe');
        return res.redirectWithFlash(homeLocation);
      }
      const [user] = users;
      return new Promise((resolve, reject) =>
        user.updateAttributes(
          {
            sendQuincyEmail: true
          },
          err => {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          }
        )
      )
        .then(() => {
          req.flash(
            'success',
            "We've successfully updated your email preferences. Thank you " +
              'for resubscribing.'
          );
          return res.redirectWithFlash(homeLocation);
        })
        .catch(next);
    });
  }

  function githubCalls(req, res, next) {
    var githubHeaders = {
      headers: {
        'User-Agent': constantStrings.gitHubUserAgent
      },
      port: 80
    };
    request(
      [
        'https://api.github.com/repos/freecodecamp/',
        'freecodecamp/pulls?client_id=',
        githubClient,
        '&client_secret=',
        githubSecret
      ].join(''),
      githubHeaders,
      function(err, status1, pulls) {
        if (err) {
          return next(err);
        }
        pulls = pulls
          ? Object.keys(JSON.parse(pulls)).length
          : "Can't connect to github";

        return request(
          [
            'https://api.github.com/repos/freecodecamp/',
            'freecodecamp/issues?client_id=',
            githubClient,
            '&client_secret=',
            githubSecret
          ].join(''),
          githubHeaders,
          function(err, status2, issues) {
            if (err) {
              return next(err);
            }
            issues =
              pulls === parseInt(pulls, 10) && issues
                ? Object.keys(JSON.parse(issues)).length - pulls
                : "Can't connect to GitHub";
            return res.send({
              issues: issues,
              pulls: pulls
            });
          }
        );
      }
    );
  }
};
