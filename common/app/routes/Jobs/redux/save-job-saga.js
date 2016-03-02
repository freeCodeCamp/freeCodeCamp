import { Observable } from 'rx';
import { push } from 'react-router-redux';

import { saveJobCompleted } from './actions';
import { saveJob } from './types';

import { handleError } from '../../../redux/types';

export default ({ services }) => ({ dispatch }) => next => {
  return function saveJobSaga(action) {
    if (action.type !== saveJob) {
      return next(action);
    }
    const { payload: job } = action;

    return services.createService$({
      service: 'jobs',
      params: { job }
    })
    .retry(3)
    .flatMap(job => Observable.of(
      saveJobCompleted(job),
      push('/jobs/new/preview')
    ))
    .catch(error => Observable.just({
      type: handleError,
      error
    }))
    .doOnNext(dispatch);
  };
};
