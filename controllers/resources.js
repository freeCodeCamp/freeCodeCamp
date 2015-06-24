var async = require('async'),
  path = require('path'),
  moment = require('moment'),
  Twit = require('twit'),
  debug = require('debug')('freecc:cntr:resources'),
  cheerio = require('cheerio'),
  request = require('request'),
  R = require('ramda'),
  _ = require('lodash'),
  fs = require('fs'),
  bootcampJson = require('./bootcamps.json'),
  constantStrings = require('./constantStrings.json'),
  User = require('../models/User'),
  Challenge = require('./../models/Challenge'),
  Story = require('./../models/Story'),
  FieldGuide = require('./../models/FieldGuide'),
  Nonprofit = require('./../models/Nonprofit'),
  Comment = require('./../models/Comment'),
  resources = require('./resources.json'),
  secrets = require('./../config/secrets'),
  nonprofits = require('../seed_data/nonprofits.json'),
  fieldGuides = require('../seed_data/field-guides.json'),
  Slack = require('node-slack'),
  slack = new Slack(secrets.slackHook);

/**
 * Cached values
 */
var allFieldGuideIds, allFieldGuideNames, allNonprofitNames,
  challengeMap, challengeMapForDisplay, challengeMapWithIds,
  challengeMapWithNames, allChallengeIds, allChallenges;

/**
 * GET /
 * Resources.
 */

Array.zip = function(left, right, combinerFunction) {
  var counter,
    results = [];

  for (counter = 0; counter < Math.min(left.length, right.length); counter++) {
    results.push(combinerFunction(left[counter], right[counter]));
  }

  return results;
};

(function() {
  if (!challengeMap) {
    var localChallengeMap = {};
    var files = fs.readdirSync(
      path.join(__dirname, '/../seed_data/challenges')
    );
    var keyCounter = 0;
    files = files.map(function (file) {
      return require(
        path.join(__dirname, '/../seed_data/challenges/' + file)
      );
    });
    files = files.sort(function (a, b) {
      return a.order - b.order;
    });
    files.forEach(function (file) {
      localChallengeMap[keyCounter++] = file;
    });
    challengeMap = _.cloneDeep(localChallengeMap);
  }
})();


module.exports = {

  getChallengeMapForDisplay: function(completedChallengeList) {
    if (!challengeMapForDisplay) {
      challengeMapForDisplay = {};
      Object.keys(challengeMap).forEach(function(key) {
        //TODO get ratio of completed to uncompleted for each section
        //challengeMap[key].challenges.forEach(function(challenge){
        //
        //}
        challengeMapForDisplay[key] = {
          name: challengeMap[key].name,
          dashedName: challengeMap[key].name.replace(/\s/g, '-'),
          challenges: challengeMap[key].challenges,
          completedCount: challengeMap[key].challenges //ToDo count number of uncompleted challenges
        }
      });
    }
    return challengeMapForDisplay;
  },

  getChallengeMapWithIds: function() {
    if (!challengeMapWithIds) {
      challengeMapWithIds = {};
      Object.keys(challengeMap).forEach(function (key) {
        var onlyIds = challengeMap[key].challenges.map(function (elem) {
          return elem._id;
        });
        challengeMapWithIds[key] = onlyIds;
      });
    }
    return challengeMapWithIds;
  },

  allChallengeIds: function() {

    if (!allChallengeIds) {
      allChallengeIds = [];
      Object.keys(this.getChallengeMapWithIds()).forEach(function(key) {
        allChallengeIds.push(challengeMapWithIds[key]);
      });
      allChallengeIds = R.flatten(allChallengeIds);
    }
    return allChallengeIds;
  },

  allChallenges: function() {
    if (!allChallenges) {
      allChallenges = [];
      Object.keys(this.getChallengeMapWithNames()).forEach(function(key) {
        allChallenges.push(challengeMap[key].challenges);
      });
      allChallenges = R.flatten(allChallenges);
    }
    return allChallenges;
  },

  getChallengeMapWithNames: function() {
    if (!challengeMapWithNames) {
      challengeMapWithNames = {};
      Object.keys(challengeMap).
        forEach(function (key) {
          var onlyNames = challengeMap[key].challenges.map(function (elem) {
            return elem.name;
          });
          challengeMapWithNames[key] = onlyNames;
        });
    }
    return challengeMapWithNames;
  },

  sitemap: function sitemap(req, res, next) {
    var appUrl = 'http://www.freecodecamp.com';
    var now = moment(new Date()).format('YYYY-MM-DD');


    async.parallel({
        users: function(callback) {
          User.aggregate()
            .group({_id: 1, usernames: { $addToSet: '$profile.username'}})
            .match({'profile.username': { $ne: ''}})
            .exec(function(err, users) {
              if (err) {
                debug('User err: ', err);
                callback(err);
              } else {
                callback(null, users[0].usernames);
              }
            });
        },

        challenges: function (callback) {
          Challenge.aggregate()
            .group({_id: 1, names: { $addToSet: '$name'}})
            .exec(function (err, challenges) {
              if (err) {
                debug('Challenge err: ', err);
                callback(err);
              } else {
                callback(null, challenges[0].names);
              }
            });
        },
        stories: function (callback) {
          Story.aggregate()
            .group({_id: 1, links: {$addToSet: '$link'}})
          .exec(function (err, stories) {
            if (err) {
              debug('Story err: ', err);
              callback(err);
            } else {
              callback(null, stories[0].links);
            }
          });
        },
        nonprofits: function (callback) {
          Nonprofit.aggregate()
            .group({_id: 1, names: { $addToSet: '$name'}})
            .exec(function (err, nonprofits) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, nonprofits[0].names);
            }
          });
        },
        fieldGuides: function (callback) {
          FieldGuide.aggregate()
            .group({_id: 1, names: { $addToSet: '$name'}})
            .exec(function (err, fieldGuides) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, fieldGuides[0].names);
            }
          });
        }
      }, function (err, results) {
        if (err) {
          return next(err);
        } else {
          setTimeout(function() {
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
          }, 0);
        }
      }
    );
  },

  chat: function chat(req, res) {
    res.redirect('//gitter.im/FreeCodeCamp/FreeCodeCamp');
  },

  jobsForm: function jobsForm(req, res) {
    res.render('resources/jobs-form', {
      title: 'Employer Partnership Form for Job Postings, Recruitment and Corporate Sponsorships'
    });
  },

  catPhotoSubmit: function catPhotoSubmit(req, res) {
    res.send(
      'Success! You have submitted your cat photo. Return to your website ' +
      'by typing any letter into your code editor.'
    );
  },



  nonprofits: function nonprofits(req, res) {
    res.render('resources/nonprofits', {
      title: 'A guide to our Nonprofit Projects'
    });
  },

  nonprofitsForm: function nonprofitsForm(req, res) {
    res.render('resources/nonprofits-form', {
      title: 'Nonprofit Projects Proposal Form'
    });
  },

  agileProjectManagers: function agileProjectManagers(req, res) {
    res.render('resources/pmi-acp-agile-project-managers', {
      title: 'Get Agile Project Management Experience for the PMI-ACP'
    });
  },

  agileProjectManagersForm: function agileProjectManagersForm(req, res) {
    res.render('resources/pmi-acp-agile-project-managers-form', {
      title: 'Agile Project Management Program Application Form'
    });
  },

  twitch: function twitch(req, res) {
    res.render('resources/twitch', {
      title: "Enter Free Code Camp's Chat Rooms"
    });
  },

  bootcampCalculator: function bootcampCalculator(req, res) {
    res.render('resources/calculator', {
      title: 'Coding Bootcamp Cost Calculator',
      bootcampJson: bootcampJson
    });
  },

  bootcampCalculatorJson: function bootcampCalculatorJson(req, res) {
    res.send(bootcampJson);
  },

  unsubscribe: function unsubscribe(req, res, next) {
    User.findOne({ email: req.params.email }, function(err, user) {
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
  },

  unsubscribed: function unsubscribed(req, res) {
    res.render('resources/unsubscribed', {
      title: 'You have been unsubscribed'
    });
  },

  githubCalls: function(req, res, next) {
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
          "Can't connect to github";

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
  },

  trelloCalls: function(req, res, next) {
    request(
      'https://trello.com/1/boards/BA3xVpz9/cards?key=' +
      secrets.trello.key,
      function(err, status, trello) {
        if (err) { return next(err); }
        trello = (status && status.statusCode === 200) ?
          (JSON.parse(trello)) :
          "Can't connect to to Trello";

        res.end(JSON.stringify(trello));
      });
  },

  bloggerCalls: function(req, res, next) {
    request(
      'https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/' +
      'posts?key=' +
        secrets.blogger.key,
      function (err, status, blog) {
        if (err) { return next(err); }

        blog = (status && status.statusCode === 200) ?
          JSON.parse(blog) :
          "Can't connect to Blogger";
        res.end(JSON.stringify(blog));
      }
    );
  },

  about: function(req, res, next) {
    if (req.user) {
      if (
        !req.user.profile.picture ||
        req.user.profile.picture.indexOf('apple-touch-icon-180x180.png') !== -1
      ) {
        req.user.profile.picture =
          'https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png';
        // TODO(berks): unhandled callback
        req.user.save();
      }
    }
    var date1 = new Date('10/15/2014');
    var date2 = new Date();

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var announcements = resources.announcements;
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    User.count({}, function (err, c3) {
      if (err) {
        debug('User err: ', err);
        return next(err);
      }

      res.render('resources/learn-to-code', {
        title: 'About Free Code Camp',
        daysRunning: daysRunning,
        c3: numberWithCommas(c3),
        announcements: announcements
      });
    });
  },

  randomPhrase: function() {
    return resources.phrases[
      Math.floor(Math.random() * resources.phrases.length)
    ];
  },

  randomVerb: function() {
    return resources.verbs[
      Math.floor(Math.random() * resources.verbs.length)
    ];
  },

  randomCompliment: function() {
    return resources.compliments[
      Math.floor(Math.random() * resources.compliments.length)
    ];
  },

  allFieldGuideIds: function() {
    if (allFieldGuideIds) {
      return allFieldGuideIds;
    } else {
      allFieldGuideIds = fieldGuides.map(function (elem) {
        return elem._id;
      });
      return allFieldGuideIds;
    }
  },

  allFieldGuideNamesAndIds: function() {
    if (allFieldGuideNames) {
      return allFieldGuideNames;
    } else {
      allFieldGuideNames = fieldGuides.map(function (elem) {
        return {
          name: elem.name,
          dashedName: elem.dashedName,
          id: elem._id };
      });
      return allFieldGuideNames;
    }
  },

  allNonprofitNames: function() {
    if (allNonprofitNames) {
      return allNonprofitNames;
    } else {
      allNonprofitNames = nonprofits.map(function (elem) {
        return { name: elem.name };
      });
      return allNonprofitNames;
    }
  },

  whichEnvironment: function() {
    return process.env.NODE_ENV;
  },

  getURLTitle: function(url, callback) {
    (function () {
      var result = {title: '', image: '', url: '', description: ''};
      request(url, function (error, response, body) {
        if (!error && response.statusCode === 200) {
          var $ = cheerio.load(body);
          var metaDescription = $("meta[name='description']");
          var metaImage = $("meta[property='og:image']");
          var urlImage = metaImage.attr('content') ?
            metaImage.attr('content') :
            '';

          var metaTitle = $('title');
          var description = metaDescription.attr('content') ?
            metaDescription.attr('content') :
            '';

          result.title = metaTitle.text().length < 90 ?
            metaTitle.text() :
            metaTitle.text().slice(0, 87) + '...';

          result.image = urlImage;
          result.description = description;
          callback(null, result);
        } else {
          callback(new Error('failed'));
        }
      });
    })();
  },

  updateUserStoryPictures: function(userId, picture, username, cb) {

    var counter = 0,
      foundStories,
      foundComments;

    Story.find({'author.userId': userId}, function(err, stories) {
      if (err) {
        return cb(err);
      }
      foundStories = stories;
      counter++;
      saveStoriesAndComments();
    });
    Comment.find({'author.userId': userId}, function(err, comments) {
      if (err) {
        return cb(err);
      }
      foundComments = comments;
      counter++;
      saveStoriesAndComments();
    });

    function saveStoriesAndComments() {
      if (counter !== 2) {
        return;
      }
      var tasks = [];
      R.forEach(function(comment) {
        comment.author.picture = picture;
        comment.author.username = username;
        comment.markModified('author');
        tasks.push(function(cb) {
          comment.save(cb);
        });
      }, foundComments);

      R.forEach(function(story) {
        story.author.picture = picture;
        story.author.username = username;
        story.markModified('author');
        tasks.push(function(cb) {
          story.save(cb);
        });
      }, foundStories);
      async.parallel(tasks, function(err) {
        if (err) {
          return cb(err);
        }
        cb();
      });
    }
  },
  codepenResources: {
    twitter: function(req, res, next) {
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
    },
    twitterFCCStream: function() {
      // sends out a tweet stream from FCC's account
    },
    twitch: function() {
      // exports information from the twitch account
    },
    slack: function() {

    }
  },

  getHelp: function(req, res, next) {
    var userName = req.user.profile.username;
    var code = req.body.payload.code ? '\n```\n' +
      req.body.payload.code + '\n```\n'
      : '';
    var challenge = req.body.payload.challenge;

    slack.send({
      text: "*@" + userName + "* wants help with " + challenge + ". " +
        code +  "Hey, *@" + userName + "*, if no one helps you right " +
        "away, try typing out your problem in detail to me. Like this: " +
        "http://en.wikipedia.org/wiki/Rubber_duck_debugging",
      channel: '#help',
      username: "Debuggy the Rubber Duck",
      icon_url: "https://pbs.twimg.com/profile_images/3609875545/569237541c920fa78d78902069615caf.jpeg"
    });
    return res.sendStatus(200);
  },

  getPair: function(req, res, next) {
    var userName = req.user.profile.username;
    var challenge = req.body.payload.challenge;
    slack.send({
      text: "Anyone want to pair with *@" + userName + "* on " + challenge +
      "?\nMake sure you install Screen Hero here: " +
      "http://freecodecamp.com/field-guide/how-do-i-install-screenhero\n" +
      "Then start your pair program session with *@" + userName +
      "* by typing \"/hero @" + userName + "\" into Slack.\n And *@"+ userName +
      "*, be sure to launch Screen Hero, then keep coding. " +
      "Another camper may pair with you soon.",
      channel: '#letspair',
      username: "Companion Cube",
      icon_url: "https://lh3.googleusercontent.com/-f6xDPDV2rPE/AAAAAAAAAAI/AAAAAAAAAAA/mdlESXQu11Q/photo.jpg"
    });
    return res.sendStatus(200);
  }
};
