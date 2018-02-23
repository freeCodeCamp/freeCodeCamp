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
  superBlocksSelector,
  currentChallengeSelector
} from './';
import {
  isChallengeLoaded,
  fullBlocksSelector,
  entitiesSelector
} from '../entities';

import { shapeChallenges } from './utils';
import { types as challenge } from '../routes/Challenges/redux';
import {
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock,
  getNextChallenge
} from '../routes/Challenges/utils';
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
          return Observable.of({ type: 'NULL'});
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
    });
}

function fetchChallengesForNextBlockEpic(action$, { getState }) {
  return action$::ofType(challenge.checkForNextBlock)
    .map(() => {
      let nextChallenge = {};
      let isNewBlock = false;
      let isNewSuperBlock = false;
      const state = getState();
      const challenge = currentChallengeSelector(state);
      const superBlocks = superBlocksSelector(state);
      const entities = entitiesSelector(state);
      nextChallenge = getNextChallenge(challenge, entities, { isDev });
      // block completed.
      if (!nextChallenge) {
        isNewBlock = true;
        nextChallenge = getFirstChallengeOfNextBlock(
          challenge,
          entities,
          { isDev }
        );
      }
      // superBlock completed
      if (!nextChallenge) {
        isNewSuperBlock = true;
        nextChallenge = getFirstChallengeOfNextSuperBlock(
          challenge,
          entities,
          superBlocks,
          { isDev }
        );
      }
      const isNewBlockRequired = (
        (isNewBlock || isNewSuperBlock) &&
        !nextChallenge.description
      );
      return isNewBlockRequired ?
        fetchNewBlock(nextChallenge.block) :
        { type: 'NULL' };
    });
}

export default combineEpics(
  fetchChallengeEpic,
  fetchChallengesForBlockEpic,
  fetchChallengesForNextBlockEpic
);
