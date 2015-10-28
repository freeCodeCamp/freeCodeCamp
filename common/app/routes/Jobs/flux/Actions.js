import { Actions } from 'thundercats';
import store from 'store';
import debugFactory from 'debug';
import { jsonp$ } from '../../../../utils/jsonp$';
import { postJSON$ } from '../../../../utils/ajax-stream';

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
  saveJobToDb: null,
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
  clearSavedForm: null,
  setForm(form) {
    return { form };
  },
  getFollowers: null,
  setFollowersCount(numOfFollowers) {
    return { numOfFollowers };
  },
  setPromoCode({ target: { value = '' }} = {}) {
    return { promoCode: value.replace(/[^\d\w\s]/, '') };
  },
  applyCode: null,
  clearPromo(foo, undef) {
    return {
      price: undef,
      buttonId: undef,
      discountAmount: undef,
      promoCode: undef,
      promoApplied: false,
      promoName: undef
    };
  },
  applyPromo({
    fullPrice: price,
    buttonId,
    discountAmount,
    code: promoCode,
    name: promoName
  } = {}) {
    return {
      price,
      buttonId,
      discountAmount,
      promoCode,
      promoApplied: true,
      promoName
    };
  }
})
  .refs({ displayName: 'JobActions' })
  .init(({ instance: jobActions, args: [cat, services] }) => {
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

    jobActions.clearSavedForm.subscribe(() => {
      store.remove('newJob');
    });

    jobActions.saveJobToDb.subscribe(({ goTo, job }) => {
      const appActions = cat.getActions('appActions');
      services.create('jobs', { job }, null, (err, job) => {
        if (err) {
          debug('job services experienced an issue', err);
          return jobActions.setError(err);
        }
        jobActions.setJobs({ job });
        appActions.updateRoute(goTo);
      });
    });

    jobActions.getFollowers.subscribe(() => {
      const url = 'https://cdn.syndication.twimg.com/widgets/followbutton/' +
        'info.json?lang=en&screen_names=CamperJobs' +
        '&callback=JSONPCallback';

      jsonp$(url)
        .map(({ response }) => {
          return response[0]['followers_count'];
        })
        .subscribe(
          count => jobActions.setFollowersCount(count),
          err => jobActions.setError(err)
        );
    });

    jobActions.applyCode.subscribe(({ code = '', type = null}) => {
      const body = { code: code.replace(/[^\d\w\s]/, '') };
      if (type) {
        body.type = type;
      }
      postJSON$('/api/promos/getButton', body)
        .pluck('response')
        .subscribe(
          ({ promo }) => {
            if (promo && promo.buttonId) {
              jobActions.applyPromo(promo);
            }
            jobActions.setError(new Error('no promo found'));
          },
          jobActions.setError
        );
    });

    return jobActions;
    });
