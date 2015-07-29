export default function getJobServices(app) {
  const { Job } = app.models;

  return {
    name: 'job',
    read: (req, resource, params, config, cb) => {
      Job.find({}, (err, jobs) => {
        cb(err, jobs);
      });
    }
  };
}
