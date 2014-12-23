var User = require('../models/User'),
    resources = require('./resources.json'),
    questions = resources.questions,
    steps = resources.steps;

//NOTE(BERKS): Async, total users may not available before it is used.
var totalUsers = 0;
User.count({}, function(err, count) {
  totalUsers = count;
});

/**
 * GET /
 * Resources.
 */
//TODO: Stats view
module.exports = {
  learnToCode: function(req, res) {
    res.render('learn-to-code', {
      title: 'Learn to Code'
    });
  },

  privacy: function privacy(req, res) {
    res.render('privacy', {
      title: 'Privacy'
    });
  },

  statistics: function statistics(req, res) {
    res.render('statistics', {
      title: 'Code Camper Statistics'
      //totalUsers: totalUsers,
      //usersOverTenChallenges: usersOverTenChallenges
    });
  },

  chromebook: function chromebook(req, res) {
    res.render('chromebook', {
      title: 'Win a Chromebook'
    });
  },

  jqueryExercises: function jqueryExercises(req, res) {
    res.render('jquery-exercises', {
      title: 'jQuery Exercises'
    });
  },

  livePairProgramming: function(req, res) {
    res.render('live-pair-programming', {
      title: 'Live Pair Programming'
    });
  },

  javaScriptInYourInbox: function(req, res) {
    res.render('javascript-in-your-inbox', {
      title: 'JavaScript in your Inbox'
    });
  },

  programmerInterviewQuestionsApp: function(req, res) {
    res.render('programmer-interview-questions-app', {
      title: 'Programmer Interview Questions App'
    });
  },

  pairProgramWithTeamViewer: function(req, res) {
    res.render('pair-program-with-team-viewer', {
      title: 'Challenge: Pair Program with Team Viewer',
      name: 'Pair Program with Team Viewer',
      video: '',
      time: 30,
      steps: steps,
      cc: req.user.challengesHash
    });
  },

  about: function(req, res) {
    res.render('about', {
      title: 'About Free Code Camp and Our Team of Volunteers'
    });
  },

  doneWithFirst100Hours: function(req, res) {
    res.render('done-with-first-100-hours', {
      title:
        'Congratulations on finishing the first 100 hours of Free Code Camp!'
    });
  },

  interviewQuestions: function(req, res) {
    res.json(questions);
  }
};



