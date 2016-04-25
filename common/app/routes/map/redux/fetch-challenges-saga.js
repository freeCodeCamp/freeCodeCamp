import { Observable } from 'rx';
import { fetchChallenges } from './types';
import { fetchChallengesCompleted } from './actions';

import { handleError } from '../../../redux/types';

export default function fetchChallengesSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === fetchChallenges)
    .flatMap(() => {
      return services.readService$({ service: 'map' })
        .map(({ entities, result } = {}) => {
          return fetchChallengesCompleted(entities, result);
        })
        .catch(error => Observable.just({ type: handleError, error }));
    });
}
