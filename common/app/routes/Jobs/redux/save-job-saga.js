import { push } from 'react-router-redux';
import { Observable } from 'rx';

import { saveCompleted } from './actions';
import { saveJob } from './types';

import { handleError } from '../../../redux/types';

export default function saveJobSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === saveJob)
    .flatMap(action => {
      const { payload: job } = action;
      return services.createService$({ service: 'jobs', params: { job } })
        .retry(3)
        .flatMap(job => Observable.of(
          saveCompleted(job),
          push('/jobs/new/check-out')
        ))
        .catch(error => Observable.just({
          type: handleError,
          error
        }));
    });
}
