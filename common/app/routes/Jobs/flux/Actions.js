import { Actions } from 'thundercats';

export default Actions({
  getJob(id) {
    return { id };
  },
  getJobs(params) {
    return { params };
  }
})
  .refs({ displayName: 'JobsActions' });
