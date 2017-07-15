import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
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

const isDev = debug.enabled('fcc:*');

export function fetchChallengeEpic(actions, { getState }, { services }) {
  return actions::ofType('' + types.fetchChallenge)
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
      // async type
      '' + types.fetchChallenges,
      types.appMounted
    )
    .flatMapLatest(() => {
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
