import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import debug from 'debug';

import {
  types,

  createErrorObservable,
  delayedRedirect,

  fetchChallengeCompleted,
  fetchChallengesCompleted
} from './';
import { isChallengeLoaded } from '../entities/index.js';

import { shapeChallenges } from './utils';
import { types as challenge } from '../routes/Challenges/redux';
import { langSelector } from '../Router/redux';

const isDev = debug.enabled('fcc:*');

export function fetchChallengeEpic(actions, { getState }, { services }) {
  return actions::ofType(challenge.onRouteChallenges)
    .filter(({ payload }) => !isChallengeLoaded(getState(), payload))
    .flatMapLatest(({ payload: params }) => {
      const options = {
        service: 'map',
        params
      };
      return services.readService$(options)
        .retry(3)
        .map(({ entities, ...rest }) => ({
          entities: shapeChallenges(entities, isDev),
          ...rest
        }))
        .flatMap(({ entities, result, redirect } = {}) => {
          const actions = [
            fetchChallengeCompleted({
              entities,
              currentChallenge: result.challenge,
              challenge: entities.challenge[result.challenge],
              result
            }),
            redirect ? delayedRedirect(redirect) : null
          ];
          return Observable.from(actions).filter(Boolean);
        })
        .catch(createErrorObservable);
    });
}

export function fetchChallengesEpic(
  actions,
  { getState },
  { services }
) {
  return actions::ofType(
    types.appMounted,
    types.updateChallenges
  )
    .flatMapLatest(() => {
      const lang = langSelector(getState());
      const options = {
        params: { lang },
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
        .map(({ entities, result } = {}) => {
          return fetchChallengesCompleted(
            entities,
            result
          );
        })
        .startWith({ type: types.fetchChallenges.start })
        .catch(createErrorObservable);
    });
}

export default combineEpics(fetchChallengeEpic, fetchChallengesEpic);
