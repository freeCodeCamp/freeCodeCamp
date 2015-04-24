var async = require('async'),
  User = require('../models/User'),
  Challenge = require('./../models/Challenge'),
  Courseware = require('./../models/Courseware'),
  Bonfire = require('./../models/Bonfire'),
  Story = require('./../models/Story'),
  FieldGuide = require('./../models/FieldGuide'),
  Nonprofit = require('./../models/Nonprofit'),
  Comment = require('./../models/Comment'),
  resources = require('./resources.json'),
  steps = resources.steps,
  secrets = require('./../config/secrets'),
  bonfires = require('../seed_data/bonfires.json'),
  nonprofits = require('../seed_data/nonprofits.json'),
  coursewares = require('../seed_data/coursewares.json'),
  fieldGuides = require('../seed_data/field-guides.json'),
  moment = require('moment'),
  https = require('https'),
  debug = require('debug')('freecc:cntr:resources'),
  cheerio = require('cheerio'),
  request = require('request'),
  R = require('ramda');

/**
 * Cached values
 */
var allBonfireIds, allBonfireNames, allCoursewareIds, allCoursewareNames,
  allFieldGuideIds, allFieldGuideNames, allNonprofitNames;

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

module.exports = {
  privacy: function privacy(req, res) {
    res.render('resources/privacy', {
      title: 'Privacy'
    });
  },

  sitemap: function sitemap(req, res, next) {
    var appUrl = 'http://www.freecodecamp.com';
    var now = moment(new Date()).format('YYYY-MM-DD');


    async.parallel({
        challenges: function (callback) {
          Courseware.find({}, function (err, challenges) {
            if (err) {
              debug('Courseware err: ', err);
              callback(err);
            } else {
              callback(null, challenges);
            }
          });
        },
        bonfires: function (callback) {
          Bonfire.find({}, function (err, bonfires) {
            if (err) {
              debug('Bonfire err: ', err);
              callback(err);
            } else {
              callback(null, bonfires);
            }
          });
        },
        stories: function (callback) {
          Story.find({}, function (err, stories) {
            if (err) {
              debug('Story err: ', err);
              callback(err);
            } else {
              callback(null, stories);
            }
          });
        },
        nonprofits: function (callback) {
          Nonprofit.find({}, function (err, nonprofits) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, nonprofits);
            }
          });
        },
        fieldGuides: function (callback) {
          FieldGuide.find({}, function (err, fieldGuides) {
            if (err) {
              debug('User err: ', err);
              callback(err);
            } else {
              callback(null, fieldGuides);
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
              challenges: results.challenges,
              bonfires: results.bonfires,
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
    if (req.user && req.user.progressTimestamps.length > 5) {
      res.redirect('http://freecode.slack.com');
    } else {
      res.render('resources/chat', {
        title: "Watch us code live on Twitch.tv"
      });
    }
  },

  twitch: function twitch(req, res) {
    res.render('resources/twitch', {
      title: "Enter Free Code Camp's Chat Rooms"
    });
  },

  githubCalls: function(req, res) {
    var githubHeaders = {headers: {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/29.0.1521.3 Safari/537.36'}, port:80 };
    request('https://api.github.com/repos/freecodecamp/freecodecamp/pulls?client_id=' + secrets.github.clientID + '&client_secret=' + secrets.github.clientSecret, githubHeaders, function(err, status1, pulls) {
      pulls = pulls ? Object.keys(JSON.parse(pulls)).length : "Can't connect to github";
      request('https://api.github.com/repos/freecodecamp/freecodecamp/issues?client_id=' + secrets.github.clientID + '&client_secret=' + secrets.github.clientSecret, githubHeaders, function (err, status2, issues) {
        issues = ((pulls === parseInt(pulls)) && issues) ? Object.keys(JSON.parse(issues)).length - pulls : "Can't connect to GitHub";
        res.send({"issues": issues, "pulls" : pulls});
      });
    });
  },

  trelloCalls: function(req, res, next) {
    request('https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key, function(err, status, trello) {
      if (err) { return next(err); }
      trello = (status && status.statusCode === 200) ? (JSON.parse(trello)) : "Can't connect to to Trello";
      res.end(JSON.stringify(trello));
    });
  },

  bloggerCalls: function(req, res, next) {
    request('https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/posts?key=' + secrets.blogger.key, function (err, status, blog) {
      if (err) { return next(err); }
      blog = (status && status.statusCode === 200) ? JSON.parse(blog) : "Can't connect to Blogger";
      res.end(JSON.stringify(blog));
    });
  },

  about: function(req, res, next) {
    if (req.user) {
      if (!req.user.profile.picture || req.user.profile.picture === "https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-180x180.png") {
        req.user.profile.picture = "https://s3.amazonaws.com/freecodecamp/camper-image-placeholder.png";
        req.user.save();
      }
    }
    var date1 = new Date("10/15/2014");
    var date2 = new Date();

    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));
    var announcements = resources.announcements;
    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    User.count({}, function (err, c3) {
      if (err) {
        debug('User err: ', err);
        return next(err);
      }

      // todo is this necessary anymore?
      User.count({'points': {'$gt': 53}}, function (err, all) {
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
    });
  },

  randomPhrase: function() {
    return resources.phrases[Math.floor(
      Math.random() * resources.phrases.length)];
  },

  randomVerb: function() {
    return resources.verbs[Math.floor(
      Math.random() * resources.verbs.length)];
  },

  randomCompliment: function() {
    return resources.compliments[Math.floor(
      Math.random() * resources.compliments.length)];
  },

  allBonfireIds: function() {
    if (allBonfireIds) {
      return allBonfireIds;
    } else {
      allBonfireIds = bonfires.
        map(function (elem) {
          return {
            _id: elem._id,
            difficulty: elem.difficulty
          };
        }).
        sort(function (a, b) {
          return a.difficulty - b.difficulty;
        }).
        map(function (elem) {
          return elem._id;
        });
      return allBonfireIds;
    }
  },

  allFieldGuideIds: function() {
    if (allFieldGuideIds) {
      return allFieldGuideIds;
    } else {
      allFieldGuideIds = fieldGuides.
        map(function (elem) {
          return {
            _id: elem._id
          };
        });
      return allFieldGuideIds;
    }
  },

  allBonfireNames: function() {
    if (allBonfireNames) {
      return allBonfireNames;
    } else {
      allBonfireNames = bonfires.
        map(function (elem) {
          return {
            name: elem.name,
            difficulty: elem.difficulty,
            _id: elem._id
          };
        }).
        sort(function (a, b) {
          return a.difficulty - b.difficulty;
        }).
        map(function (elem) {
          return {
            name: elem.name,
            _id: elem._id
          };
        });
      return allBonfireNames;
    }
  },

  allFieldGuideNames: function() {
    if (allFieldGuideNames) {
      return allFieldGuideNames;
    } else {
      allFieldGuideNames = fieldGuides.
        map(function (elem) {
          return {
            name: elem.name
          };
        });
      return allFieldGuideNames;
    }
  },

  allNonprofitNames: function() {
    if (allNonprofitNames) {
      return allNonprofitNames;
    } else {
      allNonprofitNames = nonprofits.
        map(function (elem) {
          return {
            name: elem.name
          };
        });
      return allNonprofitNames;
    }
  },

  allCoursewareIds: function() {
    if (allCoursewareIds) {
      return allCoursewareIds;
    } else {
      allCoursewareIds = coursewares.
        map(function (elem) {
          return {
            _id: elem._id,
            difficulty: elem.difficulty
          };
        }).
        sort(function (a, b) {
          return a.difficulty - b.difficulty;
        }).
        map(function (elem) {
          return elem._id;
        });
      return allCoursewareIds;
    }
  },

  allCoursewareNames: function() {
    if (allCoursewareNames) {
      return allCoursewareNames;
    } else {
      allCoursewareNames = coursewares.
        map(function (elem) {
          return {
            name: elem.name,
            difficulty: elem.difficulty,
            challengeType: elem.challengeType,
            _id: elem._id
          };
        }).
        sort(function (a, b) {
          return a.difficulty - b.difficulty;
        }).
        map(function (elem) {
        return {
          name: elem.name,
          challengeType: elem.challengeType,
          _id: elem._id
        };
      });
      return allCoursewareNames;
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
          var metaImage =  $("meta[property='og:image']");
          var urlImage = metaImage.attr('content') ? metaImage.attr('content') : '';
          var metaTitle = $('title');
          var description = metaDescription.attr('content') ? metaDescription.attr('content') : '';
          result.title = metaTitle.text().length < 141 ? metaTitle.text() : metaTitle.text().slice(0, 137) + " ...";
          result.image = urlImage;
          result.description = description;
          callback(null, result);
        } else {
          callback('failed');
        }
      });
    })();
  },

  // todo analyze this function in detail
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
  }
};
