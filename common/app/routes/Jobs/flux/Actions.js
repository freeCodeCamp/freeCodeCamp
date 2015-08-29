import { Actions } from 'thundercats';
import debugFactory from 'debug';

const debug = debugFactory('freecc:jobs:actions');

export default Actions({
  setJobs: null,
  getJob: null,
  getJobs(params) {
    return { params };
  }
})
  .refs({ displayName: 'JobActions' })
  .init(({ instance: jobActions, args: [services] }) => {
    jobActions.getJobs.subscribe(() => {
      services.read('job', null, null, (err, jobs) => {
        if (err) {
          debug('job services experienced an issue', err);
          jobActions.setJobs({ jobs: [] });
        }
        jobActions.setJobs({ jobs });
      });
    });
    return jobActions;
  });
