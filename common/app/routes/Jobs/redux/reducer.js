import { handleActions } from 'redux-actions';

import types from './types';

const replaceMethod = ''.replace;
function replace(str) {
  if (!str) { return ''; }
  return replaceMethod.call(str, /[^\d\w\s]/, '');
}

const initialState = {
  currentJob: '',
  newJob: {},
  jobs: {
    entities: {},
    results: []
  }
};

export default handleActions(
  {
    [types.findJob]: (state, { payload: id }) => {
      const currentJob = state.jobs.entities[id];
      return {
        ...state,
        currentJob: currentJob && currentJob.id ?
          currentJob.id :
          state.currentJob
      };
    },
    [types.saveJobCompleted]: (state, { payload: newJob }) => {
      return {
        ...state,
        newJob
      };
    },
    [types.fetchJobsCompleted]: (state, { payload: { jobs, currentJob } }) => ({
      ...state,
      currentJob,
      jobs
    }),
    [types.updatePromoCode]: (state, { payload }) => ({
      ...state,
      promoCode: replace(payload)
    }),
    [types.applyPromo]: (state, { payload: promo }) => {

      const {
        fullPrice: price,
        buttonId,
        discountAmount,
        code: promoCode,
        name: promoName
      } = promo;

      return {
        ...state,
        price,
        buttonId,
        discountAmount,
        promoCode,
        promoApplied: true,
        promoName
      };
    },
    [types.clearPromo]: state => ({
      /* eslint-disable no-undefined */
      ...state,
      price: undefined,
      buttonId: undefined,
      discountAmount: undefined,
      promoCode: undefined,
      promoApplied: false,
      promoName: undefined
      /* eslint-enable no-undefined */
    })
  },
  initialState
);
