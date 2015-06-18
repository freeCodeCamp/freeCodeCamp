import { Actions } from 'thundercats';

export default class JobsActions extends Actions {
  constructor() {
    super();
  }
  static displayName = 'JobsActions'

  getJob(id) {
    return { id };
  }
  getJobs(params) {
    return { params };
  }
}
