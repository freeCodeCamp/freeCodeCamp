import { Observable } from 'rx';
import { fetchChallenges } from './types';
import { fetchChallengesCompleted } from './actions';

import { handleError } from '../../../redux/types';

export default ({ services }) => ({ dispatch }) => next => {
  return function fetchChallengesSaga(action) {
    const result = next(action);
    if (action.type !== fetchChallenges) {
      return result;
    }

    return services.readService$({ service: 'map' })
      .map(({ entities, result } = {}) => {
        return fetchChallengesCompleted(entities, result);
      })
      .catch(error => {
        return Observable.just({
          type: handleError,
          error
        });
      })
      .doOnNext(dispatch);
  };
};
