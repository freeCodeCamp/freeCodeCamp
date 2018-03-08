import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import _ from 'lodash';
import debug from 'debug';

import {
  types,

  createErrorObservable,
  delayedRedirect,

  fetchChallengeCompleted,
  fetchNewBlockComplete,
  challengeSelector,
  nextChallengeSelector
} from './';
import {
  isChallengeLoaded,
  fullBlocksSelector
} from '../entities';

import { shapeChallenges } from './utils';
import { types as challenge } from '../routes/Challenges/redux';
import { langSelector, paramsSelector } from '../Router/redux';

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
  const onAppMount = actions::ofType(types.appMounted)
    .map(() => {
      const {
        block = 'basic-html-and-html5'
      } = challengeSelector(getState());
      return block;
    });
  const onNewChallenge = actions::ofType(challenge.moveToNextChallenge)
    .map(() => {
      const {
        isNewBlock,
        isNewSuperBlock,
        nextChallenge
      } = nextChallengeSelector(getState());
      const isNewBlockRequired = isNewBlock || isNewSuperBlock && nextChallenge;
      return isNewBlockRequired ? nextChallenge.block : null;
    });
  const onBlockSelect = actions::ofType(types.fetchNewBlock.start)
    .map(({ payload }) => payload);

  return Observable.merge(onAppMount, onNewChallenge, onBlockSelect)
    .filter(block => {
      const fullBlocks = fullBlocksSelector(getState());
      return block && !fullBlocks.includes(block);
    })
    .flatMapLatest(blockName => {
      const lang = langSelector(getState());
      const options = {
        params: { lang, blockName },
        service: 'challenge'
      };
      return services.readService$(options)
        .retry(3)
        .map(newBlockData => {
          const { dashedName } = paramsSelector(getState());
          const { entities: { challenge } } = newBlockData;
          const currentChallengeInNewBlock = _.pickBy(
            challenge,
            newChallenge => newChallenge.dashedName === dashedName
          );
          return fetchNewBlockComplete({
            ...newBlockData,
            meta: {
              challenge: currentChallengeInNewBlock
            }
          });
        })
        .catch(createErrorObservable);
    });
 }


export default combineEpics(
  fetchChallengeEpic,
  fetchChallengesForBlockEpic
);
