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

  router.get('/unsubscribed', unsubscribed);
  router.get('/stories', showTestimonials);
  router.get('/all-stories', showAllTestimonials);

  app.use(noLangRouter);
  app.use('/:lang', router);

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
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

  function submitCatPhoto(req, res) {
    res.send('Submitted!');
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
        req.flash(
          'info',
          'Email address not found. ' +
            'Please update your Email preferences from your profile.'
        );
        return res.redirect('/map');
      } else {
        req.flash(
          'info',
          'We\'ve successfully updated your Email preferences.'
        );
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
