var Rx = require('rx'),
    Twit = require('twit'),
    async = require('async'),
    moment = require('moment'),
    request = require('request'),
    debug = require('debug')('freecc:cntr:resources'),
    constantStrings = require('../utils/constantStrings.json'),
    bootcampJson = require('../utils/bootcamps.json'),
    secrets = require('../../config/secrets');

module.exports = function(app) {
  var router = app.loopback.Router();
  var User = app.models.User;
  var Challenge = app.models.Challenge;
  var Story = app.models.Story;
  var FieldGuide = app.models.FieldGuide;
  var Nonprofit = app.models.Nonprofit;

  router.get('/api/github', githubCalls);
  router.get('/api/blogger', bloggerCalls);
  router.get('/api/trello', trelloCalls);
  router.get('/api/codepen/twitter/:screenName', twitter);
  router.get('/sitemap.xml', sitemap);
  router.get('/chat', chat);
  router.get('/coding-bootcamp-cost-calculator', bootcampCalculator);
  router.get('/coding-bootcamp-cost-calculator.json', bootcampCalculatorJson);
  router.get('/twitch', twitch);
  router.get('/pmi-acp-agile-project-managers', agileProjectManagers);
  router.get('/pmi-acp-agile-project-managers-form', agileProjectManagersForm);
  router.get('/nonprofits', nonprofits);
  router.get('/nonprofits-form', nonprofitsForm);
  router.get('/our-sponsors', sponsors);
  router.get('/jobs-form', jobsForm);
  router.get('/submit-cat-photo', catPhotoSubmit);
  router.get('/unsubscribe/:email', unsubscribe);
  router.get('/unsubscribed', unsubscribed);
  router.get('/cats.json', getCats);
  router.get('/randQoutes.json', randQoutes);

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

        challenges: function (callback) {
          Challenge.find(
            { fields: { name: true } },
            function (err, challenges) {
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
        stories: function (callback) {
          Story.find(
            { field: { link: true } },
            function (err, stories) {
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
        nonprofits: function (callback) {
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
        },
        fieldGuides: function(callback) {
          FieldGuide.find(
            { field: { name: true } },
            function(err, fieldGuides) {
              if (err) {
                debug('User err: ', err);
                callback(err);
              } else {
                Rx.Observable.from(
                  fieldGuides,
                  null,
                  null,
                  Rx.Scheduler.default
                )
                  .map(function(fieldGuide) {
                    return fieldGuide.name;
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
            nonprofits: results.nonprofits,
            fieldGuides: results.fieldGuides
          });
        });
      }
    );
  }

  function chat(req, res) {
    res.redirect('//gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function bootcampCalculator(req, res) {
    res.render('resources/calculator', {
      title: 'Coding Bootcamp Cost Calculator',
      bootcampJson: bootcampJson
    });
  }

  function bootcampCalculatorJson(req, res) {
    res.send(bootcampJson);
  }

  function chat(req, res) {
    res.redirect('https://gitter.im/FreeCodeCamp/FreeCodeCamp');
  }

  function jobsForm(req, res) {
    res.render('resources/jobs-form', {
      title: 'Employer Partnership Form for Job Postings,' +
        ' Recruitment and Corporate Sponsorships'
    });
  }

  function catPhotoSubmit(req, res) {
    res.send(
      'Success! You have submitted your cat photo. Return to your website ' +
      'by typing any letter into your code editor.'
    );
  }

  function sponsors(req, res) {
    res.render('sponsors/sponsors', {
      title: 'The Sponsors who make Free Code Camp Possible'
    });
  }

  function nonprofits(req, res) {
    res.render('resources/nonprofits', {
      title: 'A guide to our Nonprofit Projects'
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
      title: 'Enter Free Code Camp\'s Chat Rooms'
    });
  }

  function unsubscribe(req, res, next) {
    User.findOne({ where: { email: req.params.email } }, function(err, user) {
      if (user) {
        if (err) {
          return next(err);
        }
        user.sendMonthlyEmail = false;
        user.save(function () {
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
          function (err, status2, issues) {
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
      function (err, status, blog) {
        if (err) { return next(err); }

        blog = (status && status.statusCode === 200) ?
          JSON.parse(blog) :
          'Can\'t connect to Blogger';
        res.end(JSON.stringify(blog));
      }
    );
  }
  function randQoutes(req, res){
    //NOTE FOR ADDING QUOTES: Please follow the structure set below for quotes to avoid creating difficulty for people attempting the zipline. A real API would enforce a standard data format anyway. All credit to AdventureBear for compiling the original quotes
    var quoteArr = [
        {quote: "There are two types of people in this world.  Those that enter a room and say 'Here I am!' and those that enter a room and say 'There you are!'", source: "Unknown"},
        {quote: "Because it's there.", source: "@George Mallory on climbing mountains"},
        {quote: "Footsteps always follow us, whenever it is snowing.  They always show us where we've been, but never where we're going.", source: "@Winnie the Pooh's A-Z"},
        {quote: "For I know the plans that I have for you.", source: "@The Lord, Jer 29:11"},
        {quote: "The only way to climb properly is to realize that just getting up a route is nothing, the way it is done is everything.", source: "@Royal Robbins"},
        {quote: "Small minds discuss people.  Average minds discuss events.  Great minds discuss ideas.", source: "@Unkown"},
        {quote: "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.", source: "@Albert Einstein"},
        {quote: "We must not cease from exploration and the end of all our exploring will be to arrive where we began and to know the place for the first time.", source: "@T S Eliot"},
        {quote: "One man asked another on the death of a mutual friend, 'How much did he leave?' His friend responded, 'He left it all.'", source: "@Proverb"},
        {quote: "It is more noble to give yourself completely to one individual than to labor diligently for the salvation of the masses.", source: "@Dag Hammarskjold, Sec. Gen. of the UN"},
        {quote: "Maps are a way of organizing wonder.", source: "@Edward Tufte"},
        {quote: "I have decided to make my life my argument.", source: "@Albert Schweitzer"},
        {quote: "Now it's a sqirt mecca for mystery artist, but back then it was just magic.", source: "@Jim Snyder on Kayaking"},
        {quote: "Knowledge keeps about as well as fish.", source: "@Alfred North Whitehead"},
        {quote: "It all began, I said, when I decided that some experts don't really know enough to make a pronouncement of doom on a human being.  And I said I hoped they would be careful about what they said to others; they might be believed and that could be the beginning of the end.", source: "@Norman Cousins, Anatomy of an Illness"},
        {quote: "Do not go gentle into that good night.  Rage, rage against the dying of the light.",source: "@Dylan Thomas"},
        {quote: "For you will look smart and feel ignorant and the patient will not know which day it is for you and you will pretend to be smart out of ignorance.", source: "@John Stone, Gaudeamus Igitur"}
    ];
    res.send(quoteArr[Math.floor(Math.random() * (quoteArr.length-1 - 0 + 1)) + 0]);
  }

  function getCats(req, res) {
    res.send(
      [
        {
          'name': 'cute',
          'imageLink': 'https://encrypted-tbn3.gstatic.com/images' +
            '?q=tbn:ANd9GcRaP1ecF2jerISkdhjr4R9yM9-8ClUy-TA36MnDiFBukd5IvEME0g'
        },
        {
          'name': 'grumpy',
          'imageLink': 'http://cdn.grumpycats.com/wp-content/uploads/' +
            '2012/09/GC-Gravatar-copy.png'
        },
        {
          'name': 'mischievous',
          'imageLink': 'http://www.kittenspet.com/wp-content' +
            '/uploads/2012/08/cat_with_funny_face_3-200x200.jpg'
        }
      ]
    );
  }
};
