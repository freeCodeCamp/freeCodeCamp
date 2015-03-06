var User = require('../models/User'),
    resources = require('./resources.json'),
    questions = resources.questions,
    steps = resources.steps,
    secrets = require('./../config/secrets'),
    Challenge = require('./../models/Challenge'),
    bonfires = require('../seed_data/bonfires.json');
    coursewares = require('../seed_data/coursewares.json');
    Client = require('node-rest-client').Client,
    client = new Client(),
    debug = require('debug')('freecc:cntr:bonfires'),
    cheerio = require('cheerio');

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

    stats: function stats(req, res) {
        var date1 = new Date("10/15/2014");
        var date2 = new Date();
        var timeDiff = Math.abs(date2.getTime() - date1.getTime());
        var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));
        client.get('https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key, function(trello, response) {
            var nonprofitProjects = (trello && trello.length) || 15;
            User.count({'points': {'$gt': 2}}, function(err, c3) { if (err) { debug('User err: ', err); next(err); }
                User.count({'points': {'$gt': 9}}, function(err, c10) { if (err) { debug('User err: ', err); next(err); }
                    User.count({'points': {'$gt': 29}}, function(err, c30) { if (err) { debug('User err: ', err); next(err); }
                        User.count({'points': {'$gt': 53}}, function(err, all) { if (err) { debug('User err: ', err); next(err); }
                            res.render('resources/stats', {
                                title: 'Free Code Camp Stats:',
                                daysRunning: daysRunning,
                                nonprofitProjects: nonprofitProjects,
                                c3: c3,
                                c10: c10,
                                c30: c30,
                                all: all
                            });
                        });
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
        client.get('https://api.github.com/repos/freecodecamp/freecodecamp/pulls?client_id=' + secrets.github.clientID + '&client_secret=' + secrets.github.clientSecret, githubHeaders, function(pulls, res3) {
            pulls = pulls ? Object.keys(JSON.parse(pulls)).length : "Can't connect to github";
            client.get('https://api.github.com/repos/freecodecamp/freecodecamp/issues?client_id=' + secrets.github.clientID + '&client_secret=' + secrets.github.clientSecret, githubHeaders, function (issues, res4) {
                issues = ((pulls === parseInt(pulls)) && issues) ? Object.keys(JSON.parse(issues)).length - pulls : "Can't connect to GitHub";
                res.send({"issues": issues, "pulls" : pulls});
            });
        });
    },
    trelloCalls: function(req, res) {
        client.get('https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key, function(trello) {
            trello = trello ? (JSON.parse(trello)).length : "Can't connect to to Trello";
            res.send({"trello": trello});
        });
    },
    bloggerCalls: function(req, res) {
        client.get('https://www.googleapis.com/blogger/v3/blogs/2421288658305323950/posts?key=' + secrets.blogger.key, function (blog) {
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
            }
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
            }
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
    getMetaData: function(req, res, next) {
        var url = req.body.data.url;
        var result = {};

        client.get(url, function(siteInfo) {
            var $ = cheerio.load(siteInfo);

            var meta = $('meta');
            $(meta, this).each(function () {
                var prop = $(this).attr("property"), key, value;
                if (prop && prop.substring(0, ns.length) === ns) {
                    key = prop.substring(ns.length);
                    value = $(this).attr("content");
                    console.log("Found OGP data %s=%s", key, value);
                    result[key] = result[key] || [];
                    result[key].push(value);
                }
            });

            res.json(JSON.stringify(result));

        });
    }
};



