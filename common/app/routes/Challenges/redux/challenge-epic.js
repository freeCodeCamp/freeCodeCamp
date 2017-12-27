import _ from 'lodash';
import debug from 'debug';
import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  challengeUpdated,
  onRouteChallenges,
  onRouteCurrentChallenge
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
import { langSelector } from '../../../Router/redux';
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
    // send the challenge to update UI and trigger main iframe to update
    // use unary to prevent index from being passed to func
    .map(_.unary(challengeUpdated));
}

// used to reset users code on request
export function resetChallengeEpic(actions, { getState }) {
  return actions::ofType(types.clickOnReset)
    .map(_.flow(getState, challengeSelector, challengeUpdated));
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
        const lang = langSelector(state);
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
        /* // TODO(berks): get this to work
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
          // normally we wouldn't need to add the lang as
          // addLangToRoutesEnhancer should add langs for us, but the way
          // enhancers/middlewares and RFR orders things this action will not
          // see addLangToRoutesEnhancer and cause RFR to render NotFound
          onRouteChallenges({ lang, ...nextChallenge }),
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
