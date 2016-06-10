import { Observable } from 'rx';
import { push } from 'react-router-redux';
import { moveToNextChallenge } from './types';
import { resetUi, updateCurrentChallenge } from './actions';
import { createErrorObservable, makeToast } from '../../../redux/actions';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock
} from '../utils';
import { getRandomVerb } from '../../../utils/get-words';

export default function nextChallengeSaga(actions$, getState) {
  return actions$
    .filter(({ type }) => type === moveToNextChallenge)
    .flatMap(() => {
      let nextChallenge;
      // let message = '';
      // let isNewBlock = false;
      // let isNewSuperBlock = false;
      try {
        const state = getState();
        const { challenge, superBlocks } = state.challengesApp;
        const { entities } = state;
        nextChallenge = getNextChallenge(challenge, entities);
        // block completed.
        if (!nextChallenge) {
          // isNewBlock = true;
          nextChallenge = getFirstChallengeOfNextBlock(challenge, entities);
        }
        // superBlock completed
        if (!nextChallenge) {
          // isNewSuperBlock = true;
          nextChallenge = getFirstChallengeOfNextSuperBlock(
            challenge,
            entities,
            superBlocks
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
          // title: isNewSuperBlock || isNewBlock ? getRandomVerb() : null,
          message
        };
        */
        return Observable.of(
          updateCurrentChallenge(nextChallenge),
          resetUi(),
          makeToast({
            title: getRandomVerb(),
            message: 'Your next challenge has arrived.'
          }),
          push(`/challenges/${nextChallenge.block}/${nextChallenge.dashedName}`)
        );
      } catch (err) {
        return createErrorObservable(err);
      }
    });
}
