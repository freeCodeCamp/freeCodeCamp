import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import debug from 'debug';

import {
  types,

  createErrorObservable,
  delayedRedirect,

  fetchChallengeCompleted,
  fetchChallengesCompleted,
  challengeSelector
} from './';
import { isChallengeLoaded, fullBlocksSelector } from '../entities/index.js';

import { shapeChallenges } from './utils';
import { types as challenge } from '../routes/Challenges/redux';
import { langSelector } from '../Router/redux';

const isDev = debug.enabled('fcc:*');

function fetchChallengeEpic(actions, { getState }, { services }) {
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

export function fetchChallengesForBlockEpic(
  actions,
  { getState },
  { services }
) {
  return actions::ofType(
    types.appMounted,
    types.updateChallenges,
    types.fetchNewBlock.start
  )
    .flatMapLatest(({ type, payload }) => {
      const fetchAnotherBlock = type === types.fetchNewBlock.start;
      const state = getState();
      let { block: blockName } = challengeSelector(state);
      const lang = langSelector(state);

      if (fetchAnotherBlock) {
        const fullBlocks = fullBlocksSelector(state);
        if (fullBlocks.includes(payload)) {
          return Observable.of({ type: 'NULL'});
        }
        blockName = payload;
      }

      const options = {
        params: { lang, blockName },
        service: 'challenges-for-block'
      };
      return services.readService$(options)
        .retry(3)
        .map(fetchChallengesCompleted)
        .startWith({ type: types.fetchChallenges.start })
        .catch(createErrorObservable);
    });
}

export default combineEpics(fetchChallengeEpic, fetchChallengesForBlockEpic);
