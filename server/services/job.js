const whereFilt = {
  where: {
    isFilled: false,
    isPaid: true,
    isApproved: true
  },
  order: 'postedOn DESC'
};

export default function getJobServices(app) {
  const { Job } = app.models;

  return {
    name: 'jobs',
    create(req, resource, { job } = {}, body, config, cb) {
      if (!job) {
        return cb(new Error('job creation should get a job object'));
      }

      Object.assign(job, {
        isPaid: false,
        isApproved: false
      });

      Job.create(job, (err, savedJob) => {
        cb(err, savedJob);
      });
    },
    read(req, resource, params, config, cb) {
      const id = params ? params.id : null;
      if (id) {
        return Job.findById(id, cb);
      }
      Job.find(whereFilt, (err, jobs) => {
        cb(err, jobs);
      });
    }
  };
}
