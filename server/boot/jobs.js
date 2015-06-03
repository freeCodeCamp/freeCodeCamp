module.exports = function(app) {
  var Job = app.models.Job;
  var router = app.loopback.Router();

  router.get('/jobs', jobsDirectory);
  app.use(router);

  function jobsDirectory(req, res, next) {
    Job.find({}, function(err, jobs) {
      if (err) { return next(err); }

      res.render('jobs/directory', {
        title: 'Junior JavaScript Engineer Jobs',
        jobs: jobs
      });
    });
  }
};
