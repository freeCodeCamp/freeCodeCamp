import { Actions } from 'thundercats';
import store from 'store';
import debugFactory from 'debug';

const debug = debugFactory('freecc:jobs:actions');
const assign = Object.assign;

export default Actions({
  setJobs: null,
  // findJob assumes that the job is already in the list of jobs
  findJob(id) {
    return oldState => {
      const { currentJob = {}, jobs = [] } = oldState;
      // currentJob already set
      // do nothing
      if (currentJob.id === id) {
        return null;
      }
      const foundJob = jobs.reduce((newJob, job) => {
        if (job.id === id) {
          return job;
        }
        return newJob;
      }, null);

      // if no job found this will be null which is a op noop
      return foundJob ?
        assign({}, oldState, { currentJob: foundJob }) :
        null;
    };
  },
  setError: null,
  getJob: null,
  getJobs(params) {
    return { params };
  },
  openModal() {
    return { showModal: true };
  },
  closeModal() {
    return { showModal: false };
  },
  handleForm(value) {
    return {
      transform(oldState) {
        const { form } = oldState;
        const newState = assign({}, oldState);
        newState.form = assign(
          {},
          form,
          value
        );
        return newState;
      }
    };
  },
  saveForm: null,
  getSavedForm: null,
  setForm(form) {
    return { form };
  }
})
  .refs({ displayName: 'JobActions' })
  .init(({ instance: jobActions, args: [services] }) => {
    jobActions.getJobs.subscribe(() => {
      services.read('jobs', null, null, (err, jobs) => {
        if (err) {
          debug('job services experienced an issue', err);
          return jobActions.setError({ err });
        }
        jobActions.setJobs({ jobs });
      });
    });

    jobActions.getJob.subscribe(({ id, isPrimed }) => {
      // job is already set, do nothing.
      if (isPrimed) {
        debug('job is primed');
        return;
      }
      services.read('jobs', { id }, null, (err, job) => {
        if (err) {
          debug('job services experienced an issue', err);
          return jobActions.setError({ err });
        }
        if (job) {
          jobActions.setJobs({ currentJob: job });
        }
        jobActions.setJobs({});
      });
    });

    jobActions.saveForm.subscribe((form) => {
      store.set('newJob', form);
    });

    jobActions.getSavedForm.subscribe(() => {
      const job = store.get('newJob');
      if (job && !Array.isArray(job) && typeof job === 'object') {
        jobActions.setForm(job);
      }
    });
    return jobActions;
  });
