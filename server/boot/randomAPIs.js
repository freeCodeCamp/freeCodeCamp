import request from 'request';
import constantStrings from '../utils/constantStrings.json';
import testimonials from '../resources/testimonials.json';

const githubClient = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

module.exports = function(app) {
  const router = app.loopback.Router();
  const User = app.models.User;
  const noLangRouter = app.loopback.Router();
  noLangRouter.get('/api/github', githubCalls);
  noLangRouter.get('/chat', chat);
  noLangRouter.get('/twitch', twitch);
  noLangRouter.get('/unsubscribe/:email', unsubscribeAll);
  noLangRouter.get('/unsubscribe-notifications/:email', unsubscribeAll);
  noLangRouter.get('/unsubscribe-quincy/:email', unsubscribeAll);
  noLangRouter.get('/submit-cat-photo', submitCatPhoto);
  noLangRouter.get(
    '/the-fastest-web-page-on-the-internet',
    theFastestWebPageOnTheInternet
  );
  noLangRouter.get('/shop/cancel-stickers', cancelStickers);
  noLangRouter.get('/shop/confirm-stickers', confirmStickers);

  router.get('/unsubscribed', unsubscribed);
  router.get('/nonprofits', nonprofits);
  router.get('/nonprofits-form', nonprofitsForm);
  router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
  router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);
  router.get('/stories', showTestimonials);
  router.get('/shop', showShop);
  router.get('/all-stories', showAllTestimonials);
  router.get('/terms', terms);
  router.get('/privacy', privacy);
  router.get('/how-nonprofit-projects-work', howNonprofitProjectsWork);
  router.get(
      '/software-resources-for-nonprofits',
      softwareResourcesForNonprofits
  );
  router.get('/code-of-conduct', codeOfConduct);
  router.get('/academic-honesty', academicHonesty);

  app.use(noLangRouter);
  app.use('/:lang', router);

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function terms(req, res) {
      res.render('resources/terms-of-service', {
            title: 'Terms of Service'
      });
  }

  function privacy(req, res) {
      res.render('resources/privacy', {
          title: 'Privacy policy'
      });
  }

  function howNonprofitProjectsWork(req, res) {
      res.render('resources/how-nonprofit-projects-work', {
          title: 'How our nonprofit projects work'
      });
  }

  function softwareResourcesForNonprofits(req, res) {
    res.render('resources/software-resources-for-nonprofits', {
      title: 'Software Resources for Nonprofits'
    });
  }

  function codeOfConduct(req, res) {
      res.render('resources/code-of-conduct', {
          title: 'Code of Conduct'
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
      title: 'Testimonials from Happy freeCodeCamp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials.slice(0, 72),
      moreStories: true
    });
  }

  function showAllTestimonials(req, res) {
    res.render('resources/stories', {
      title: 'Testimonials from Happy freeCodeCamp Students ' +
        'who got Software Engineer Jobs',
      stories: testimonials,
      moreStories: false
    });
  }

  function showShop(req, res) {
    res.render('resources/shop', {
      title: 'Support freeCodeCamp by Buying t-shirts, ' +
        'stickers, and other goodies'
    });
  }

  function confirmStickers(req, res) {
    req.flash('success', {
      msg: 'Thank you for supporting our community! You should receive ' +
        'your stickers in the mail soon!'
    });
    res.redirect('/shop');
  }

  function cancelStickers(req, res) {
      req.flash('info', {
        msg: 'You\'ve cancelled your purchase of our stickers. You can ' +
          'support our community any time by buying some.'
      });
      res.redirect('/shop');
  }
  function submitCatPhoto(req, res) {
    res.send('Submitted!');
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

  function unsubscribeAll(req, res, next) {
    req.checkParams('email', 'Must send a valid email').isEmail();
    var query = { email: req.params.email };
    var params = {
      sendQuincyEmail: false,
      sendMonthlyEmail: false,
      sendNotificationEmail: false
    };
    return User.updateAll(query, params, function(err, info) {
      if (err) { return next(err); }
      if (info.count === 0) {
        req.flash('info', {
          msg: 'Email address not found. ' +
          'Please update your Email preferences from your profile.'
        });
        return res.redirect('/map');
      } else {
        req.flash('info', {
          msg: 'We\'ve successfully updated your Email preferences.'
        });
        return res.redirect('/unsubscribed');
      }
    });
  }

  function unsubscribed(req, res) {
    res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed'
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
        if (err) { return next(err); }
        pulls = pulls ?
          Object.keys(JSON.parse(pulls)).length :
          'Can\'t connect to github';

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
            if (err) { return next(err); }
            issues = ((pulls === parseInt(pulls, 10)) && issues) ?
            Object.keys(JSON.parse(issues)).length - pulls :
              "Can't connect to GitHub";
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
