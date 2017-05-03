import { Observable } from 'rx';
import debug from 'debug';

import {
  types,

  createErrorObservable,
  delayedRedirect,
  fetchChallengeCompleted,
  fetchChallengesCompleted,

  langSelector
} from './';
import { shapeChallenges } from './utils';
import {
  updateCurrentChallenge,
  challengeSelector
} from '../routes/challenges/redux';

const isDev = debug.enabled('fcc:*');

export function fetchChallengeEpic(actions, { getState }, { services }) {
  return actions.ofType(types.fetchChallenge)
    .flatMap(({ payload: { dashedName, block } }) => {
      const lang = langSelector(getState());
      const options = {
        service: 'map',
        params: { block, dashedName, lang }
      };
      return services.readService$(options)
        .retry(3)
        .map(({ entities, ...rest }) => ({
          entities: shapeChallenges(entities, isDev),
          ...rest
        }))
        .flatMap(({ entities, result, redirect } = {}) => {
          return Observable.of(
            fetchChallengeCompleted(entities, result),
            updateCurrentChallenge(entities.challenge[result.challenge]),
            redirect ? delayedRedirect(redirect) : null
          );
        })
        .catch(createErrorObservable);
    });
}

export default function fetchChallengesSaga(
  actions,
  { getState },
  { services }
) {
  return actions.ofType(types.fetchChallenges)
    .flatMap(() => {
      const lang = langSelector(getState());
      const options = {
        lang,
        service: 'map'
      };
      return services.readService$(options)
        .retry(3)
        .map(({ entities, ...res }) => ({
          entities: shapeChallenges(
            entities,
            isDev
          ),
          ...res
        }))
        .flatMap(({ entities, result } = {}) => {
          return fetchChallengesCompleted(
            entities,
            result
          );
        })
        .catch(createErrorObservable);
    });
}

export function replaceChallengeEpic(actions, { getState }) {
  return actions.ofType(types.replaceChallenge)
    .map(({ payload: { dashedName } = {} }) => {
      const state = getState();
      const { challenge: newChallenge } = challengeSelector({
        ...state,
        challengesApp: {
          ...state.challengesApp,
          challenge: dashedName
        }
      });
      if (state.challengesApp.challenge !== newChallenge.dashedName) {
        return Observable.just(updateCurrentChallenge(newChallenge));
      }
      return Observable.just(null);
    });
}
