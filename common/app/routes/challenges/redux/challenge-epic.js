import debug from 'debug';
import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import { push } from 'react-router-redux';

import {
  types,

  updateMain,
  challengeUpdated
} from './';
import { getNS as entitiesSelector } from '../../../entities';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock
} from '../utils';
import {
  types as app,

  createErrorObservable,
  updateCurrentChallenge,

  currentChallengeSelector,
  challengeSelector,
  superBlocksSelector
} from '../../../redux';
import { makeToast } from '../../../Toasts/redux';

const isDev = debug.enabled('fcc:*');

export function challengeUpdatedEpic(actions, { getState }) {
  return actions::ofType(app.updateCurrentChallenge)
    .flatMap(() => {
      const challenge = challengeSelector(getState());
      return Observable.of(
        challengeUpdated(challenge),
        push(`/challenges/${challenge.block}/${challenge.dashedName}`)
      );
    });
}

// used to reset users code on request
export function resetChallengeEpic(actions, { getState }) {
  return actions::ofType(types.resetChallenge)
    .flatMap(() => {
      const currentChallenge = currentChallengeSelector(getState());
      return Observable.of(
        updateCurrentChallenge(currentChallenge),
        updateMain()
      );
    });
}

export function nextChallengeEpic(actions, { getState }) {
  return actions::ofType(types.moveToNextChallenge)
    .flatMap(() => {
      let nextChallenge;
      // let message = '';
      // let isNewBlock = false;
      // let isNewSuperBlock = false;
      try {
        const state = getState();
        const superBlocks = superBlocksSelector(state);
        const challenge = currentChallengeSelector(state);
        const entities = entitiesSelector(state);
        nextChallenge = getNextChallenge(challenge, entities, { isDev });
        // block completed.
        if (!nextChallenge) {
          // isNewBlock = true;
          nextChallenge = getFirstChallengeOfNextBlock(
            challenge,
            entities,
            { isDev }
          );
        }
        // superBlock completed
        if (!nextChallenge) {
          // isNewSuperBlock = true;
          nextChallenge = getFirstChallengeOfNextSuperBlock(
            challenge,
            entities,
            superBlocks,
            { isDev }
          );
        }
        /* this requires user data not available yet
        if (isNewSuperBlock || isNewBlock) {
          const getName = isNewSuperBlock ?
            getCurrentSuperBlockName :
            getCurrentBlockName;
          const blockType = isNewSuperBlock ? 'SuperBlock' : 'Block';
          message =
            `You've competed the ${getName(challenge, entities)} ${blockType}!`;
        }
        message += ' Your next challenge has arrived.';
        const toast = {
          // title: isNewSuperBlock || isNewBlock ? randomVerb() : null,
          message
        };
        */
        if (nextChallenge.isLocked) {
          return Observable.of(
            makeToast({
              message: 'The next challenge has not been unlocked. ' +
              'Please revisit the required (*) challenges ' +
              'that have not been passed yet. ',
              timeout: 15000
            }),
            push('/map')
          );
        }
        return Observable.of(
          updateCurrentChallenge(nextChallenge.dashedName),
          makeToast({ message: 'Your next challenge has arrived.' })
        );
      } catch (err) {
        return createErrorObservable(err);
      }
    });
}

export default combineEpics(
  challengeUpdatedEpic,
  nextChallengeEpic,
  resetChallengeEpic
);
