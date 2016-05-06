import { fetchChallenges } from './types';
import { createErrorObserable, fetchChallengesCompleted } from './actions';

export default function fetchChallengesSaga(action$, getState, { services }) {
  return action$
    .filter(action => action.type === fetchChallenges)
    .flatMap(() => {
      return services.readService$({ service: 'map' })
        .map(({ entities, result } = {}) => {
          return fetchChallengesCompleted(entities, result);
        })
        .catch(createErrorObserable);
    });
}
