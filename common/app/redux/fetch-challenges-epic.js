import { Observable } from 'rx';
import { ofType } from 'redux-epic';
import _ from 'lodash';

import {
  types,

  createErrorObservable,
  fetchNewBlockComplete,
  challengeSelector,
  nextChallengeSelector
} from './';
import {
  fullBlocksSelector
} from '../entities';

import { types as challenge } from '../routes/Challenges/redux';
import { paramsSelector } from '../Router/redux';

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
      const options = {
        params: { blockName },
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


export default fetchChallengesForBlockEpic;
