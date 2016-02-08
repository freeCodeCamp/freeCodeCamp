import { Actions } from 'thundercats';
import store from 'store';
import { Observable } from 'rx';

import { nameSpacedTransformer } from '../../../../utils';

const assign = Object.assign;
const jobsTranformer = nameSpacedTransformer('jobsApp');
const noOper = { transform: () => {} };

export default Actions({
  refs: { displayName: 'JobActions' },
  shouldBindMethods: true,
  // findJob assumes that the job is already in the list of jobs
  findJob(id) {
    return {
      transform: jobsTranformer(oldState => {
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
      })
    };
  },
  saveJobToDb({ goTo, job }) {
    return this.createService$('jobs', { job })
      .map(job => ({
        transform(state) {
          state.location = {
            action: 'PUSH',
            pathname: goTo
          };
          return {
            ...state,
            jobsApp: {
              ...state.jobs,
              currentJob: job
            }
          };
        }
      }))
      .catch(err => Observable.just({
        transform(state) {
          return { ...state, err };
        }
      }));
  },
  getJob(id) {
    return this.readService$('jobs', { id })
      .map(job => ({
        transform: jobsTranformer(state => {
          return { ...state, currentJob: job };
        })
      }))
      .catch(err => Observable.just({
        transform(state) {
          return { ...state, err };
        }
      }));
  },
  getJobs() {
    return this.readService$('jobs')
      .map(jobs => ({
        transform: jobsTranformer(state => {
          return { ...state, jobs };
        })
      }))
      .catch(err => Observable.just({
        transform(state) {
          return { ...state, err };
        }
      }));
  },
  openModal() {
    return {
      transform: jobsTranformer(state => ({ ...state, showModal: true }))
    };
  },
  closeModal() {
    return {
      transform: jobsTranformer(state => ({ ...state, showModal: false }))
    };
  },
  handleForm(value) {
    return {
      transform: jobsTranformer(oldState => {
        const { form } = oldState;
        const newState = assign({}, oldState);
        newState.form = assign(
          {},
          form,
          value
        );
        return newState;
      })
    };
  },
  saveForm: null,
  clearSavedForm: null,
  getSavedForm() {
    const form = store.get('newJob');
    if (form && !Array.isArray(form) && typeof form === 'object') {
      return {
        transform: jobsTranformer(state => {
          return { ...state, form };
        })
      };
    }
    return noOper;
  },
  setPromoCode({ target: { value = '' }} = {}) {
    return {
      transform: jobsTranformer(state => ({
        ...state,
        promoCode: value.replace(/[^\d\w\s]/, '')
      }))
    };
  },
  applyCode({ id, code = '', type = null}) {
    const body = {
      id,
      code: code.replace(/[^\d\w\s]/, '')
    };
    if (type) {
      body.type = type;
    }
    return this.postJSON$('/api/promos/getButton', body)
      .map(({ promo }) => {
        if (!promo || !promo.buttonId) {
          return noOper;
        }
        const {
          fullPrice: price,
          buttonId,
          discountAmount,
          code: promoCode,
          name: promoName
        } = promo;

        return {
          transform: jobsTranformer(state => ({
            ...state,
            price,
            buttonId,
            discountAmount,
            promoCode,
            promoApplied: true,
            promoName
          }))
        };
      })
      .catch(err => Observable.just({
        transform(state) {
          return { ...state, err };
        }
      }));
  },
  clearPromo() {
    return {
      /* eslint-disable no-undefined */
      transform: jobsTranformer(state => ({
        ...state,
        price: undefined,
        buttonId: undefined,
        discountAmount: undefined,
        promoCode: undefined,
        promoApplied: false,
        promoName: undefined
      }))
      /* eslint-enable no-undefined */
    };
  },
  init({ instance: jobActions }) {
    jobActions.saveForm.subscribe((form) => {
      store.set('newJob', form);
    });

    jobActions.clearSavedForm.subscribe(() => {
      store.remove('newJob');
    });

    return jobActions;
  }
});
