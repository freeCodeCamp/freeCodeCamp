import { Observable } from 'rx';
import { fetchChallenge, fetchChallenges } from './types';
import {
  createErrorObserable,
  fetchChallengeCompleted,
  fetchChallengesCompleted,
  setChallenge
} from './actions';

export default function fetchChallengesSaga(action$, getState, { services }) {
  return action$
    .filter(
      ({ type }) => type === fetchChallenges || type === fetchChallenge
    )
    .flatMap(({ type, payload })=> {
      const options = { service: 'map' };
      if (type === fetchChallenge) {
        options.params = { dashedName: payload };
      }
      return services.readService$(options)
        .flatMap(({ entities, result } = {}) => {
          if (type === fetchChallenge) {
            return Observable.of(
              fetchChallengeCompleted(entities, result),
              setChallenge(entities.challenge[result])
            );
          }
          return Observable.just(fetchChallengesCompleted(entities, result));
        })
        .catch(createErrorObserable);
    });
}
