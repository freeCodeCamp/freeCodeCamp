import debug from 'debug';
import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  challengeUpdated,
  onRouteChallenges,
  onRouteCurrentChallenge,
  updateMain
} from './';
import { getNS as entitiesSelector } from '../../../entities';
import {
  getNextChallenge,
  getFirstChallengeOfNextBlock,
  getFirstChallengeOfNextSuperBlock
} from '../utils';
import {
  createErrorObservable,
  currentChallengeSelector,
  challengeSelector,
  superBlocksSelector
} from '../../../redux';
import { makeToast } from '../../../Toasts/redux';

const isDev = debug.enabled('fcc:*');

// When we change challenge, update the current challenge
// UI data.
export function challengeUpdatedEpic(actions, { getState }) {
  return actions::ofType(types.onRouteChallenges)
    // prevent subsequent onRouteChallenges to cause UI to refresh
    .distinctUntilChanged(({ payload: { dashedName }}) => dashedName)
    .map(() => challengeSelector(getState()))
    //  if the challenge isn't loaded in the current state,
    //  this will be an empty object
    //  We wait instead for the fetchChallenge.complete to complete the UI state
    .filter(({ dashedName }) => !!dashedName)
    .flatMap(challenge =>
      // send the challenge to update UI and update main iframe with inital
      // challenge
      Observable.of(challengeUpdated(challenge), updateMain())
    );
}

// used to reset users code on request
export function resetChallengeEpic(actions, { getState }) {
  return actions::ofType(types.clickOnReset)
    .flatMap(() =>
      Observable.of(
        challengeUpdated(challengeSelector(getState())),
        updateMain()
      ));
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
            onRouteCurrentChallenge()
          );
        }
        return Observable.of(
          onRouteChallenges(nextChallenge),
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
