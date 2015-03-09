var User = require('../models/User'),
    Challenge = require('./../models/Challenge'),
    Bonfire = require('./../models/Bonfire'),
    Story = require('./../models/Story'),
    Comment = require('./../models/Comment'),
    resources = require('./resources.json'),
    questions = resources.questions,
    steps = resources.steps,
    secrets = require('./../config/secrets'),
    bonfires = require('../seed_data/bonfires.json'),
    coursewares = require('../seed_data/coursewares.json'),
    moment = require('moment'),
    https = require('https'),
    debug = require('debug')('freecc:cntr:resources'),
    cheerio = require('cheerio'),
    request = require('request'),
    R = require('ramda');

/**
 * GET /
 * Resources.
 */

module.exports = {
    privacy: function privacy(req, res) {
        res.render('resources/privacy', {
            title: 'Privacy'
        });
    },

    sitemap: function sitemap(req, res, next) {
        var appUrl = 'http://www.freecodecamp.com';
        var now = moment(new Date).format('YYYY-MM-DD');

        errors = {};
        User.find({'profile.username': {'$ne': '' }}, function(err, users) {
            if (err) {
                debug('User err: ', err);
                next(err);
            }
            Challenge.find({}, function (err, challenges) {
                if (err) {
                    debug('User err: ', err);
                    next(err);
                }
                Bonfire.find({}, function (err, bonfires) {
                    if (err) {
                        debug('User err: ', err);
                        next(err);
                    }
                    res.header('Content-Type', 'application/xml');
                    res.render('resources/sitemap', {
                        appUrl: appUrl,
                        now: now,
                        users: users,
                        challenges: challenges,
                        bonfires: bonfires
                    });
                });
            });
        });
    },

    deployAWebsite: function deployAWebsite(req, res) {
        res.render('resources/deploy-a-website', {
            title: 'Deploy a Dynamic Website in 7 Minutes'
        });
    },

    chat: function chat(req, res) {
        res.render('resources/chat', {
            title: "Enter Free Code Camp's Chat Rooms"
        });
    },

    nonprofitProjectInstructions: function nonprofitProjectInstructions(req, res) {
        res.render('resources/nonprofit-project-instructions', {
            title: 'Nonprofit Project Instructions'
        });
    },

    gmailShortcuts: function gmailShortcuts(req, res) {
        res.render('resources/gmail-shortcuts', {
            title: 'These Gmail Shortcuts will save you Hours'
        });
    },

    guideToOurNonprofitProjects: function guideToOurNonprofitProjects(req, res) {
        res.render('resources/guide-to-our-nonprofit-projects', {
            title: 'A guide to our Nonprofit Projects'
        });
    },

    controlShortcuts: function controlShortcuts(req, res) {
        res.render('resources/control-shortcuts', {
            title: 'These Control Shortcuts will save you Hours'
        });
    },

    chromebook: function chromebook(req, res) {
        res.render('resources/chromebook', {
            title: 'Win a Chromebook'
        });
    },

    jqueryExercises: function jqueryExercises(req, res) {
        res.render('resources/jquery-exercises', {
            title: 'jQuery Exercises'
        });
    },

    livePairProgramming: function(req, res) {
        res.render('resources/live-pair-programming', {
            title: 'Live Pair Programming'
        });
    },

    installScreenHero: function(req, res) {
        res.render('resources/install-screenhero', {
            title: 'Install ScreenHero'
        });
    },

    javaScriptInYourInbox: function(req, res) {
        res.render('resources/javascript-in-your-inbox', {
            title: 'JavaScript in your Inbox'
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



    trelloCalls: function(req, res) {
        request('https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key, function(err, status, trello) {
            trello = trello ? (JSON.parse(trello)).length : "Can't connect to to Trello";
            res.send({"trello": trello});
        });
    },
    bloggerCalls: function(req, res) {
        request('https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/posts?key=' + secrets.blogger.key, function (err, status, blog) {
            var blog = blog.length > 100 ? JSON.parse(blog) : "";
            res.send({
                blog1Title: blog ? blog["items"][0]["title"] : "Can't connect to Blogger",
                blog1Link: blog ? blog["items"][0]["url"] : "http://blog.freecodecamp.com",
                blog2Title: blog ? blog["items"][1]["title"] : "Can't connect to Blogger",
                blog2Link: blog ? blog["items"][1]["url"] : "http://blog.freecodecamp.com",
                blog3Title: blog ? blog["items"][2]["title"] : "Can't connect to Blogger",
                blog3Link: blog ? blog["items"][2]["url"] : "http://blog.freecodecamp.com",
                blog4Title: blog ? blog["items"][3]["title"] : "Can't connect to Blogger",
                blog4Link: blog ? blog["items"][3]["url"] : "http://blog.freecodecamp.com",
                blog5Title: blog ? blog["items"][4]["title"] : "Can't connect to Blogger",
                blog5Link: blog ? blog["items"][4]["url"] : "http://blog.freecodecamp.com"
            });
        });
    },

    about: function(req, res) {
        if (req.user) {
        if (!req.user.picture) {

                req.user.picture = "https://s3.amazonaws.com/freecodecamp/favicons/apple-touch-icon-180x180.png";
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
                next(err);
            }
            User.count({'points': {'$gt': 53}}, function (err, all) {
                if (err) {
                    debug('User err: ', err);
                    next(err);
                }

                res.render('resources/learn-to-code', {
                    title: 'About Free Code Camp and Our Team of Volunteers',
                    daysRunning: daysRunning,
                    c3: numberWithCommas(c3),
                    all: all,
                    announcements: announcements
                });
            });
        });
    },

    randomPhrase: function() {
        var phrases = resources.phrases;
        return phrases[Math.floor(Math.random() * phrases.length)];
    },

    randomVerb: function() {
        var verbs = resources.verbs;
        return verbs[Math.floor(Math.random() * verbs.length)];
    },

    randomCompliment: function() {
        var compliments = resources.compliments;
        return compliments[Math.floor(Math.random() * compliments.length)];
    },

    numberOfBonfires: function() {
        return bonfires.length - 1;
    },

    allBonfireIds: function() {
        return bonfires.map(function(elem) {
            return {
                _id: elem._id,
                difficulty: elem.difficulty
            }
        })
        .sort(function(a, b) {
            return a.difficulty - b.difficulty;
        })
        .map(function(elem) {
            return elem._id;
        });
    },
    allBonfireNames: function() {
        return bonfires.map(function(elem) {
            return {
                name: elem.name,
                difficulty: elem.difficulty
            }
        })
        .sort(function(a, b) {
            return a.difficulty - b.difficulty;
        })
        .map(function(elem) {
            return elem.name;
        });
    },

    allCoursewareIds: function() {
        return coursewares.map(function(elem) {
            return {
                _id: elem._id,
                difficulty: elem.difficulty
            };
        })
            .sort(function(a, b) {
                return a.difficulty - b.difficulty;
            })
            .map(function(elem) {
                return elem._id;
            });
    },
    allCoursewareNames: function() {
        return coursewares.map(function(elem) {
            return {
                name: elem.name,
                difficulty: elem.difficulty
            };
        })
            .sort(function(a, b) {
                return a.difficulty - b.difficulty;
            })
            .map(function(elem) {
                return elem.name;
            });
    },
    whichEnvironment: function() {
        return process.env.NODE_ENV;
    },
    getURLTitle: function(url, callback) {
        debug('got url in meta scraping function', url);
        (function () {
            var result = {title: '', image: '', url: ''};
            request(url, function (error, response, body) {
                if (!error && response.statusCode === 200) {
                    var $ = cheerio.load(body);
                    var urlImage = $("meta[property='og:image']").attr('content') ? $("meta[property='og:image']").attr('content') : '';
                    var title = $('title').text();
                    result.title = title;
                    result.image = urlImage;
                    callback(null, result);
                } else {
                    callback('failed');
                }
            });
        })();
    },
    updateUserStoryPictures: function(userId, picture, username) {

        var counter = 0,
            foundStories,
            foundComments;

        Story.find({'author.userId': userId}, function(err, stories) {
            if (err) {
                throw err;
            }
            foundStories = stories;
            counter++;
            saveStoriesAndComments();
        });
        Comment.find({'author.userId': userId}, function(err, comments) {
            if (err) {
                throw err;
            }
            foundComments = comments;
            counter++;
            saveStoriesAndComments();
        });

        function saveStoriesAndComments() {
            if (counter !== 2) {
                return;
            }
            R.forEach(function(comment) {
                comment.author.picture = picture;
                comment.author.username = username;
                comment.markModified('author');
                comment.save();
            }, foundComments);

            R.forEach(function(story) {
                story.author.picture = picture;
                story.author.username = username;
                story.markModified('author');
                story.save();
            }, foundStories);
        }
    }
};
