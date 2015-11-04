var Rx = require('rx'),
    Twit = require('twit'),
    async = require('async'),
    moment = require('moment'),
    request = require('request'),
    debug = require('debug')('freecc:cntr:resources'),
    constantStrings = require('../utils/constantStrings.json'),
    labs = require('../resources/labs.json'),
    testimonials = require('../resources/testimonials.json'),
    secrets = require('../../config/secrets');

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
  var Challenge = app.models.Challenge;
  var Story = app.models.Story;
  var Nonprofit = app.models.Nonprofit;

  router.get('/api/github', githubCalls);
  router.get('/api/blogger', bloggerCalls);
  router.get('/api/trello', trelloCalls);
  router.get('/api/codepen/twitter/:screenName', twitter);
  router.get('/sitemap.xml', sitemap);
  router.get('/chat', chat);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);
  router.get('/twitch', twitch);
  router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
  router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
  router.get('/nonprofits', nonprofits);
  router.get('/nonprofits-form', nonprofitsForm);
  router.get('/unsubscribe/:email', unsubscribe);
  router.get('/unsubscribed', unsubscribed);
  router.get('/get-started', getStarted);
  router.get('/submit-cat-photo', submitCatPhoto);
  router.get('/labs', showLabs);
  router.get('/stories', showTestimonials);
  router.get('/all-stories', showAllTestimonials);

  app.use(router);

  function twitter(req, res, next) {
    // sends out random tweets about javascript
    var T = new Twit({
      'consumer_key': secrets.twitter.consumerKey,
      'consumer_secret': secrets.twitter.consumerSecret,
      'access_token': secrets.twitter.token,
      'access_token_secret': secrets.twitter.tokenSecret
    });

    var screenName;
    if (req.params.screenName) {
      screenName = req.params.screenName;
    } else {
      screenName = 'freecodecamp';
    }

    T.get(
      'statuses/user_timeline',
      {
        'screen_name': screenName,
        count: 10
      },
      function(err, data) {
        if (err) { return next(err); }
        return res.json(data);
      }
    );
  }

  function sitemap(req, res, next) {
    var appUrl = 'http://www.freecodecamp.com';
    var now = moment(new Date()).format('YYYY-MM-DD');

    // TODO(berks): refactor async to rx
    async.parallel({
        users: function(callback) {
          User.find(
            {
              where: { username: { nlike: '' } },
              fields: { username: true }
            },
            function(err, users) {
              if (err) {
                debug('User err: ', err);
                callback(err);
              } else {
                Rx.Observable.from(users, null, null, Rx.Scheduler.default)
                  .map(function(user) {
                    return user.username;
                  })
                  .toArray()
                  .subscribe(
                    function(usernames) {
                      callback(null, usernames);
                    },
                    callback
                  );
              }
            });
        },

        challenges: function(callback) {
          Challenge.find(
            { fields: { name: true } },
            function(err, challenges) {
              if (err) {
                debug('Challenge err: ', err);
                callback(err);
              } else {
                Rx.Observable.from(challenges, null, null, Rx.Scheduler.default)
                  .map(function(challenge) {
                    return challenge.name;
                  })
                  .toArray()
                  .subscribe(
                    callback.bind(callback, null),
                    callback
                  );
              }
            });
        },
        stories: function(callback) {
          Story.find(
            { field: { link: true } },
            function(err, stories) {
              if (err) {
                debug('Story err: ', err);
                callback(err);
              } else {
                Rx.Observable.from(stories, null, null, Rx.Scheduler.default)
                  .map(function(story) {
                    return story.link;
                  })
                  .toArray()
                  .subscribe(
                    callback.bind(callback, null),
                    callback
                  );
              }
            }
          );
        },
        nonprofits: function(callback) {
          Nonprofit.find(
            { field: { name: true } },
            function(err, nonprofits) {
              if (err) {
                debug('User err: ', err);
                callback(err);
              } else {
                Rx.Observable.from(nonprofits, null, null, Rx.Scheduler.default)
                  .map(function(nonprofit) {
                    return nonprofit.name;
                  })
                  .toArray()
                  .subscribe(
                    callback.bind(callback, null),
                    callback
                  );
              }
            });
        }
      }, function(err, results) {
        if (err) {
          return next(err);
        }
        process.nextTick(function() {
          res.header('Content-Type', 'application/xml');
          res.render('resources/sitemap', {
            appUrl: appUrl,
            now: now,
            users: results.users,
            challenges: results.challenges,
            stories: results.stories,
            nonprofits: results.nonprofits
          });
        });
      }
    );
  }

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function showLabs(req, res) {
    res.render('resources/labs', {
      title: 'Projects Built by Free Code Camp Software Engineers',
      projects: labs
    });
  }

  function showTestimonials(req, res) {
    res.render('resources/stories', {
      title: 'Testimonials from Happy Free Code Camp Students who got Software Engineer Jobs',
      stories: testimonials.slice(0, 72),
      moreStories: true
    });
  }

  function showAllTestimonials(req, res) {
    res.render('resources/stories', {
      title: 'Testimonials from Happy Free Code Camp Students who got Software Engineer Jobs',
      stories: testimonials,
      moreStories: false
    });
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
    res.render('resources/twitch', {
      title: 'Watch us code on Twitch.tv and LiveCoding.tv'
    });
  }

  function unsubscribe(req, res, next) {
    User.findOne({ where: { email: req.params.email } }, function(err, user) {
      if (user) {
        if (err) {
          return next(err);
        }
        user.sendMonthlyEmail = false;
        user.save(function() {
          if (err) {
            return next(err);
          }
          res.redirect('/unsubscribed');
        });
      } else {
        res.redirect('/unsubscribed');
      }
    });
  }

  function unsubscribed(req, res) {
    res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed'
    });
  }

  function getStarted(req, res) {
    res.render('resources/get-started', {
      title: 'How to get started with Free Code Camp'
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
        secrets.github.clientID,
        '&client_secret=',
        secrets.github.clientSecret
      ].join(''),
      githubHeaders,
      function(err, status1, pulls) {
        if (err) { return next(err); }
        pulls = pulls ?
          Object.keys(JSON.parse(pulls)).length :
          'Can\'t connect to github';

        request(
          [
            'https://api.github.com/repos/freecodecamp/',
            'freecodecamp/issues?client_id=',
            secrets.github.clientID,
            '&client_secret=',
            secrets.github.clientSecret
          ].join(''),
          githubHeaders,
          function(err, status2, issues) {
            if (err) { return next(err); }
            issues = ((pulls === parseInt(pulls, 10)) && issues) ?
            Object.keys(JSON.parse(issues)).length - pulls :
              "Can't connect to GitHub";
            res.send({
              issues: issues,
              pulls: pulls
            });
          }
        );
      }
    );
  }

  function trelloCalls(req, res, next) {
    request(
      'https://trello.com/1/boards/BA3xVpz9/cards?key=' +
      secrets.trello.key,
      function(err, status, trello) {
        if (err) { return next(err); }
        trello = (status && status.statusCode === 200) ?
          (JSON.parse(trello)) :
          'Can\'t connect to to Trello';

        res.end(JSON.stringify(trello));
      });
  }

  function bloggerCalls(req, res, next) {
    request(
      'https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/' +
        'posts?key=' +
      secrets.blogger.key,
      function(err, status, blog) {
        if (err) { return next(err); }

        blog = (status && status.statusCode === 200) ?
          JSON.parse(blog) :
          'Can\'t connect to Blogger';
        res.end(JSON.stringify(blog));
      }
    );
  }
};
