var express = require('express');
var Job = require('./../../models/Job');
var router = express.Router();

router.get('/jobs', jobsDirectory);

function jobsDirectory(req, res, next) {
  Job.find({}, function(err, jobs) {
    if (err) { return next(err); }

    res.render('jobs/directory', {
      title: 'Junior JavaScript Engineer Jobs',
      jobs: jobs
    });
  });
}

module.exports = router;
