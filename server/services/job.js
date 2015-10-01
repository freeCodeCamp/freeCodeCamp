export default function getJobServices(app) {
  const { Job } = app.models;

  return {
    name: 'jobs',
    read: (req, resource, params, config, cb) => {
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
