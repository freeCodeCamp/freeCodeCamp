export default function getJobServices(app) {
  const { Job } = app.models;

  return {
    name: 'jobs',
    create(req, resource, { job } = {}, body, config, cb) {
      if (!job) {
        return cb(new Error('job creation should get a job object'));
      }
      Job.create(job, (err, savedJob) => {
        cb(err, savedJob);
      });
    },
    read(req, resource, params, config, cb) {
      const id = params ? params.id : null;
      if (id) {
        return Job.findById(id, cb);
      }
      Job.find({}, (err, jobs) => {
        cb(err, jobs);
      });
    }
  };
}
