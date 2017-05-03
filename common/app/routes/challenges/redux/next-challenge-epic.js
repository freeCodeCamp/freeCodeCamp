import debug from 'debug';
import { Observable } from 'rx';
import { push } from 'react-router-redux';

import {
  types,
  resetUi,
  updateCurrentChallenge
} from './';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock
} from '../utils';
import { createErrorObservable } from '../../../redux';
import { makeToast } from '../../../Toasts/redux';

const isDev = debug.enabled('fcc:*');
const { moveToNextChallenge } = types;

export default function nextChallengeEpic(actions, { getState }) {
  return actions.ofType(moveToNextChallenge)
    .flatMap(() => {
      let nextChallenge;
      // let message = '';
      // let isNewBlock = false;
      // let isNewSuperBlock = false;
      try {
        const state = getState();
        const { challenge, superBlocks } = state.challengesApp;
        const { entities } = state;
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
          updateCurrentChallenge(nextChallenge),
          resetUi(),
          makeToast({ message: 'Your next challenge has arrived.' }),
          push(`/challenges/${nextChallenge.block}/${nextChallenge.dashedName}`)
        );
      } catch (err) {
        return createErrorObservable(err);
      }
    });
}
