import request from 'request';

import { homeLocation } from '../../../config/env';

import constantStrings from '../utils/constantStrings.json';
import testimonials from '../resources/testimonials.json';

const githubClient = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

module.exports = function(app) {
  const router = app.loopback.Router();
  const api = app.loopback.Router();
  const User = app.models.User;

  router.get('/api/github', githubCalls);
  router.get('/chat', chat);
  router.get('/twitch', twitch);
  router.get('/u/:email', unsubscribeDepricated);
  router.get('/unsubscribe/:email', unsubscribeDepricated);
  router.get('/ue/:unsubscribeId', unsubscribeById);
  router.get(
    '/the-fastest-web-page-on-the-internet',
    theFastestWebPageOnTheInternet
  );
  router.get('/unsubscribed/:unsubscribeId', unsubscribedWithId);
  router.get('/unsubscribed', unsubscribed);
  api.get('/resubscribe/:unsubscribeId', resubscribe);
  router.get('/nonprofits', nonprofits);
  router.get('/nonprofits-form', nonprofitsForm);
  router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
  router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);
  router.get('/stories', showTestimonials);
  router.get('/all-stories', showAllTestimonials);
  router.get('/how-nonprofit-projects-work', howNonprofitProjectsWork);
  router.get(
    '/software-resources-for-nonprofits',
    softwareResourcesForNonprofits
  );
  router.get('/academic-honesty', academicHonesty);

  app.use(router);

  app.use('/internal', api);

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function howNonprofitProjectsWork(req, res) {
    res.redirect(
      301,
      'https://medium.freecodecamp.com/open-source-for-good-1a0ea9f32d5a'
    );
  }

  function softwareResourcesForNonprofits(req, res) {
    res.render('resources/software-resources-for-nonprofits', {
      title: 'Software Resources for Nonprofits'
    });
  }

  function academicHonesty(req, res) {
    res.render('resources/academic-honesty', {
      title: 'Academic Honesty policy'
    });
  }

  function theFastestWebPageOnTheInternet(req, res) {
    res.render('resources/the-fastest-web-page-on-the-internet', {
      title: 'This is the fastest web page on the internet'
    });
  }

  function showTestimonials(req, res) {
    res.render('resources/stories', {
      title:
        'Testimonials from Happy freeCodeCamp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials.slice(0, 72),
      moreStories: true
    });
  }

  function showAllTestimonials(req, res) {
    res.render('resources/stories', {
      title:
        'Testimonials from Happy freeCodeCamp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials,
      moreStories: false
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

  function nonprofitsForm(req, res) {
    res.render('resources/nonprofits-form', {
      title: 'Nonprofit Projects Proposal Form'
    });
  }

  function agileProjectManagers(req, res) {
    res.render('resources/pmi-acp-agile-project-managers', {
      title: 'Get Agile Project Management Experience for the PMI-ACP'
    });
  }

  function agileProjectManagersForm(req, res) {
    res.render('resources/pmi-acp-agile-project-managers-form', {
      title: 'Agile Project Management Program Application Form'
    });
  }

  function twitch(req, res) {
    res.redirect('https://twitch.tv/freecodecamp');
  }

  function unsubscribeDepricated(req, res) {
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
