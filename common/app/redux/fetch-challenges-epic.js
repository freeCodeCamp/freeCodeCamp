import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import debug from 'debug';

import {
  types,

  createErrorObservable,
  delayedRedirect,

  fetchChallengeCompleted,
  fetchChallengesCompleted,
  fetchNewBlock,
  challengeSelector,
  nextChallengeSelector
} from './';
import {
  isChallengeLoaded,
  fullBlocksSelector
} from '../entities';

import { shapeChallenges } from './utils';
import { types as challenge } from '../routes/Challenges/redux';
import { langSelector } from '../Router/redux';

const isDev = debug.enabled('fcc:*');

function fetchChallengeEpic(actions, { getState }, { services }) {
  return actions::ofType(challenge.onRouteChallenges)
    .filter(({ payload }) => !isChallengeLoaded(getState(), payload))
    .flatMapLatest(({ payload: params }) => {
      const options = {
        service: 'challenge',
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
          return Observable.of(null);
        }
        blockName = payload;
      }

      const options = {
        params: { lang, blockName },
        service: 'challenge'
      };
      return services.readService$(options)
        .retry(3)
        .map(fetchChallengesCompleted)
        .startWith({ type: types.fetchChallenges.start })
        .catch(createErrorObservable);
    })
    .filter(Boolean);
}

function fetchChallengesForNextBlockEpic(action$, { getState }) {
  return action$::ofType(challenge.checkForNextBlock)
    .map(() => {
      const {
        nextChallenge,
        isNewBlock,
        isNewSuperBlock
      } = nextChallengeSelector(getState());
      const isNewBlockRequired = (
        (isNewBlock || isNewSuperBlock) &&
        nextChallenge &&
        !nextChallenge.description
      );
      return isNewBlockRequired ?
        fetchNewBlock(nextChallenge.block) :
        null;
    })
    .filter(Boolean);
}

export default combineEpics(
  fetchChallengeEpic,
  fetchChallengesForBlockEpic,
  fetchChallengesForNextBlockEpic
);
