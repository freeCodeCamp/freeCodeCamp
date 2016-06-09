import { Observable } from 'rx';
import { fetchChallenge, fetchChallenges } from './types';
import {
  delayedRedirect,
  createErrorObserable
} from '../../../redux/actions';
import {
  fetchChallengeCompleted,
  fetchChallengesCompleted,
  updateCurrentChallenge
} from './actions';

export default function fetchChallengesSaga(action$, getState, { services }) {
  return action$
    .filter(({ type }) => (
      type === fetchChallenges ||
      type === fetchChallenge
    ))
    .flatMap(({ type, payload: { dashedName, block } = {} }) => {
      const options = { service: 'map' };
      if (type === fetchChallenge) {
        options.params = { dashedName, block };
      }
      return services.readService$(options)
        .flatMap(({ entities, result, redirect } = {}) => {
          if (type === fetchChallenge) {
            return Observable.of(
              fetchChallengeCompleted(entities, result),
              updateCurrentChallenge(entities.challenge[result.challenge]),
              redirect ? delayedRedirect(redirect) : null
            );
          }
          return Observable.just(fetchChallengesCompleted(entities, result));
        })
        .catch(createErrorObserable);
    });
}
