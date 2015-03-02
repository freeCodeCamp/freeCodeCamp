var Client = require('node-rest-client').Client,
    debug = require('debug')('freecc:cntr:bonfires'),
    resources = require('../utils/resources'),
    secrets = require('../utils/secrets'),
    passportUtils = require('../utils/passportUtils'),
    generalUtils = require('../utils/generalUtils'),
    client = new Client();

module.exports = function(app) {
  debug('setting up resources routes');
  var User = app.models.user;
  var router = app.loopback.Router();
  router.get('/privacy', privacy);
  router.get('/jquery-exercises', jqueryExercises);
  router.get('/chat', chat);
  router.get('/live-pair-programming', livePairProgramming);
  router.get('/install-screenhero', installScreenHero);
  router.get('/javascript-in-your-inbox', javaScriptInYourInbox);
  router.get('/chromebook', chromebook);
  router.get('/deploy-a-website', deployAWebsite);
  router.get('/gmail-shortcuts', gmailShortcuts);
  router.get('/control-shortcuts', controlShortcuts);
  router.get('/control-shortcuts', deployAWebsite);
  router.get('/stats', function(req, res) {
    res.redirect(301, '/learn-to-code');
  });
  router.get('/learn-to-code', about);
  router.get('/about', function(req, res) {
    res.redirect(301, '/learn-to-code');
  });
  router.get('/resources/github', gitHubCalls);
  router.get('/resources/blogger', bloggerCalls);
  router.get('/resources/trello', trelloCalls);
  router.get(
    '/nonprofit-project-instructions',
    passportUtils.isAuthenticated,
    nonprofitProjectInstructions
  );
  router.get('/resources/checkUniqueEmail/:email', checkUniqueEmail);
  router.get('/resources/checkExistingUsername/:username', checkExistingUsername);
  router.get('/resources/checkUniqueUsername/:username', checkUniqueUsername);
  router.get('/resources/getAccountAngular/', getAccountAngular);

  function privacy(req, res) {
      res.render('resources/privacy', {
          title: 'Privacy'
      });
  }

  function deployAWebsite(req, res) {
      res.render('resources/deploy-a-website', {
          title: 'Deploy a Dynamic Website in 7 Minutes'
      });
  }

  function chat(req, res) {
      res.render('resources/chat', {
          title: "Enter Free Code Camp's Chat Rooms"
      });
  }

  function nonprofitProjectInstructions(req, res) {
      res.render('resources/nonprofit-project-instructions', {
          title: 'Nonprofit Project Instructions'
      });
  }

  function gmailShortcuts(req, res) {
      res.render('resources/gmail-shortcuts', {
          title: 'These Gmail Shortcuts will save you Hours'
      });
  }

  function controlShortcuts(req, res) {
      res.render('resources/control-shortcuts', {
          title: 'These Control Shortcuts will save you Hours'
      });
  }

  function chromebook(req, res) {
      res.render('resources/chromebook', {
          title: 'Win a Chromebook'
      });
  }

  function jqueryExercises(req, res) {
      res.render('resources/jquery-exercises', {
          title: 'jQuery Exercises'
      });
  }

  function livePairProgramming(req, res) {
      res.render('resources/live-pair-programming', {
          title: 'Live Pair Programming'
      });
  }

  function installScreenHero(req, res) {
      res.render('resources/install-screenhero', {
          title: 'Install ScreenHero'
      });
  }

  function javaScriptInYourInbox(req, res) {
      res.render('resources/javascript-in-your-inbox', {
          title: 'JavaScript in your Inbox'
      });
  }

  function gitHubCalls(req, res) {
    var githubHeaders = {
      headers: {
        'User-Agent': [
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2)',
          ' AppleWebKit/537.36 (KHTML,like Gecko)',
          ' Chrome/29.0.1521.3 Safari/537.36'
        ].join('')
      }, port: 80
    };
    client.get(
      [
        'https://api.github.com/repos/freecodecamp/freecodecamp/pulls?',
        'client_id=',
        secrets.github.clientID,
        '&client_secret=',
        secrets.github.clientSecret
      ].join(''),
      githubHeaders,
      function(pulls) {
        pulls = pulls ?
          Object.keys(JSON.parse(pulls)).length : 'Cannot connect to github';
        client.get(
          [
            'https://api.github.com/repos/freecodecamp/freecodecamp/issues?',
            'client_id=',
            secrets.github.clientID,
            '&client_secret=',
            secrets.github.clientSecret
          ].join(''),
          githubHeaders,
          function (issues) {
            issues = ((pulls === parseInt(pulls, 10)) && issues) ?
              Object.keys(JSON.parse(issues)).length - pulls :
              'Cannot connect to GitHub';

            res.send({
              'issues': issues,
              'pulls': pulls
            });
          }
        );
      }
    );
  }

  function trelloCalls(req, res) {
    client.get(
      'https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key,
      function(trello) {
        trello = trello ?
          (JSON.parse(trello)).length :
          'Cannot connect to to Trello';
        res.send({ 'trello': trello });
    });
  }

  function bloggerCalls(req, res) {
    client.get(
      [
        'https://www.googleapis.com/blogger/v3/blogs/',
        '2421288658305323950/posts?key=',
        secrets.blogger.key
      ].join(''),
      function (blog) {
        blog = blog.length > 100 ?
          JSON.parse(blog) :
          {};
        var cantConnect = 'Cannot connect to Blogger';
        var blogUrl = 'http://blog.freecodecamp.com';
        res.send({
          blog1Title: blog ?
            blog['items'][0]['title'] : cantConnect,
          blog1Link: blog ?
            blog['items'][0]['url'] : blogUrl,
          blog2Title: blog ?

            blog['items'][1]['title'] : cantConnect,
          blog2Link: blog ?
            blog['items'][1]['url'] : blogUrl,
          blog3Title: blog ?
            blog['items'][2]['title'] : cantConnect,

          blog3Link: blog ?
            blog['items'][2]['url'] : blogUrl,
          blog4Title: blog ?
            blog['items'][3]['title'] : cantConnect,
          blog4Link: blog ?
            blog['items'][3]['url'] : blogUrl,

          blog5Title: blog ?
            blog['items'][4]['title'] : cantConnect,
          blog5Link: blog ?
            blog['items'][4]['url'] : blogUrl
        });
    });
  }

  function about(req, res, next) {
    var date1 = new Date('10/15/2014');
    var date2 = new Date();

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var announcements = resources.announcements;

    User.count(function (err, totalUsers) {
      if (err) { return next(err); }

      var howManyChallengeGradsQuery = { points: { gt: 53 } };
      User.count(howManyChallengeGradsQuery, function (err, challengeGrads) {
        if (err) { return next(err); }

        res.render('resources/learn-to-code', {
          title: 'About Free Code Camp and Our Team of Volunteers',
          daysRunning: daysRunning,
          totalUsers: generalUtils.numberWithCommas(totalUsers),
          challengeGrads: challengeGrads,
          announcements: announcements
        });
      });
    });
  }

  function getAccountAngular(req, res) {
    res.json({
      user: req.user || {}
    });
  }

  function checkUniqueUsername(req, res, next) {
    User.count(
      { username: req.params.username.toLowerCase() },
      function (err, exists) {
        if (err) { return next(err); }
        return res.send(exists ? true : false);
      }
    );
  }

  function checkExistingUsername(req, res, next) {
    User.count(
      { username: req.params.username.toLowerCase() },
      function (err, exists) {
        if (err) { return next(err); }
        return res.send(exists ? true : false);
      }
    );
  }

  function checkUniqueEmail(req, res, next) {
    User.count(
      {email: decodeURIComponent(req.params.email).toLowerCase() },
      function (err, exists) {
        if (err) { return next(err); }
        return res.send(exists ? true : false);
    });
  }

  app.use(router);
};
