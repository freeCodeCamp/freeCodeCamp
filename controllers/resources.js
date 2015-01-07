var User = require('../models/User'),
    resources = require('./resources.json'),
    questions = resources.questions,
    steps = resources.steps,
    secrets = require('./../config/secrets'),
    Challenge = require('./../models/Challenge'),
    Client = require('node-rest-client').Client,
    client = new Client();

/**
 * GET /
 * Resources.
 */

module.exports = {
  learnToCode: function(req, res) {
    res.render('resources/learn-to-code', {
      title: 'Learn to Code'
    });
  },

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

  javaScriptInYourInbox: function(req, res) {
    res.render('resources/javascript-in-your-inbox', {
      title: 'JavaScript in your Inbox'
    });
  },

  programmerInterviewQuestionsApp: function(req, res) {
    res.render('resources/programmer-interview-questions-app', {
      title: 'Programmer Interview Questions App'
    });
  },

  pairProgramWithTeamViewer: function(req, res) {
    Challenge.find({}, null, { sort: { challengeNumber: 1 } }, function(err, c) {
      if (err) {
        debug('Challenge err: ', err);
        next(err);
      }
      res.render('resources/pair-program-with-team-viewer', {
        title: 'Challenge: Pair Program with Team Viewer',
        name: 'Pair Program with Team Viewer',
        video: '',
        time: 30,
        steps: steps,
        cc: req.user ? req.user.challengesHash : undefined,
        points: req.user ? req.user.points : undefined,
        challenges: c
      });
    });
  },

  about: function(req, res) {
    var date1 = new Date("10/15/2014");
    var date2 = new Date();
    var timeDiff = Math.abs(date2.getTime() - date1.getTime());
    var daysRunning = Math.ceil(timeDiff / (1000 * 3600 * 24));
    client.get('https://trello.com/1/boards/BA3xVpz9/cards?key=' + secrets.trello.key, function(trello, response) {
      var nonprofitProjects = trello.length || 15;
      User.count({'points': {'$gt': 2}}, function(err, c3) { if (err) { debug('User err: ', err); next(err); }
        User.count({'points': {'$gt': 9}}, function(err, c10) { if (err) { debug('User err: ', err); next(err); }
          User.count({'points': {'$gt': 29}}, function(err, c30) { if (err) { debug('User err: ', err); next(err); }
            User.count({'points': {'$gt': 53}}, function(err, all) { if (err) { debug('User err: ', err); next(err); }
              res.render('resources/about', {
                title: 'About Free Code Camp and Our Team of Volunteers',
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

  doneWithFirst100Hours: function(req, res) {
    res.render('resources/done-with-first-100-hours', {
      title:
        'Congratulations on finishing the first 100 hours of Free Code Camp!'
    });
  },

  interviewQuestions: function(req, res) {
    res.json(questions);
  }
};



