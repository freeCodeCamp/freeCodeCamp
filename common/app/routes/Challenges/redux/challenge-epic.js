import _ from 'lodash';
import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  challengeUpdated,
  onRouteChallenges,
  onRouteCurrentChallenge
} from './';

import {
  createErrorObservable,
  challengeSelector,
  nextChallengeSelector
} from '../../../redux';
import { langSelector } from '../../../Router/redux';
import { makeToast } from '../../../Toasts/redux';

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
      const state = getState();
      const lang = langSelector(state);
      const { nextChallenge } = nextChallengeSelector(state);
      if (!nextChallenge) {
        return createErrorObservable(
            new Error('Next Challenge could not be found')
          );
      }
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
    });
}

export default combineEpics(
  challengeUpdatedEpic,
  nextChallengeEpic,
  resetChallengeEpic
);
