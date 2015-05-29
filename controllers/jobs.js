var moment = require('moment'),
  Job = require('./../models/Job'),
  resources = require('./resources');

exports.jobsDirectory = function(req, res, next) {
  Job.find({}, function(err, jobs) {
    if (err) { return next(err); }

    res.render('jobs/directory', {
      title: 'Junior JavaScript Engineer Jobs',
      jobs: jobs
    });
  });
};
