var Job = require('./../../models/Job');

exports.jobsDirectory = function(req, res, next) {
  Job.find({}, function(err, jobs) {
    if (err) { return next(err); }

    res.render('jobs/directory', {
      title: 'Junior JavaScript Engineer Jobs',
      jobs: jobs
    });
  });
};
