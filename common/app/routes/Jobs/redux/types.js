import createTypes from '../../../utils/create-types';

export default createTypes([
  'fetchJobs',
  'fetchJobsCompleted',

  'findJob',
  'saveJob',
  'saveForm',

  'saveCompleted',

  'clearForm',

  'loadSavedForm',
  'loadSavedFormCompleted',

  'clearPromo',
  'updatePromo',
  'applyPromo',
  'applyPromoCompleted'
], 'jobs');
