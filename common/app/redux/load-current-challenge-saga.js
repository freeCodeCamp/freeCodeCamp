import { Observable } from 'rx';
import debug from 'debug';
import { push } from 'react-router-redux';

import types from './types';
import {
  updateMyCurrentChallenge,
  createErrorObservable
} from './actions';
import {
  userSelector,
  firstChallengeSelector
} from './selectors';
import { updateCurrentChallenge } from '../routes/challenges/redux/actions';
import getActionsOfType from '../../utils/get-actions-of-type';
import combineSagas from '../../utils/combine-sagas';
import { postJSON$ } from '../../utils/ajax-stream';

const log = debug('fcc:app/redux/load-current-challenge-saga');
export function updateMyCurrentChallengeSaga(actions, getState) {
  const updateChallenge$ = getActionsOfType(
    actions,
    updateCurrentChallenge.toString()
  )
    .map(({ payload: { id } }) => id)
    .filter(() => {
      const { app: { user: username } } = getState();
      return !!username;
    })
    .distinctUntilChanged();
  const optimistic = updateChallenge$.map(id => {
    const { app: { user: username } } = getState();
    return updateMyCurrentChallenge(username, id);
  });
  const ajaxUpdate = updateChallenge$
    .debounce(250)
    .flatMapLatest(currentChallengeId => {
      const { app: { csrfToken: _csrf } } = getState();
      return postJSON$(
        '/update-my-current-challenge',
        { _csrf, currentChallengeId }
      )
        .map(({ message }) => log(message))
        .catch(createErrorObservable);
    });
  return Observable.merge(optimistic, ajaxUpdate);
}

export function loadCurrentChallengeSaga(actions, getState) {
  return getActionsOfType(actions, types.loadCurrentChallenge)
    .flatMap(() => {
      let finalChallenge;
      const state = getState();
      const {
        entities: { challenge: challengeMap, challengeIdToName },
        challengesApp: { id: currentlyLoadedChallengeId },
        locationBeforeTransition: { pathname } = {}
      } = state;
      const firstChallenge = firstChallengeSelector(state);
      const { user: { currentChallengeId } } = userSelector(state);
      const isOnAChallenge = (/^\/[^\/]{2,6}\/challenges/).test(pathname);

      if (!currentChallengeId) {
        finalChallenge = firstChallenge;
      } else {
        finalChallenge = challengeMap[
          challengeIdToName[ currentChallengeId ]
        ];
      }
      if (
        // data might not be there yet, ignore for now
        !finalChallenge ||
        // are we already on that challenge?
        (isOnAChallenge && finalChallenge.id === currentlyLoadedChallengeId)
      ) {
        // don't reload if the challenge is already loaded.
        // This may change to toast to avoid user confusion
        return Observable.empty();
      }
      return Observable.of(
        updateCurrentChallenge(finalChallenge),
        push(
          `/challenges/${finalChallenge.block}/${finalChallenge.dashedName}`
        )
      );
    });
}

export default combineSagas(
  updateMyCurrentChallengeSaga,
  loadCurrentChallengeSaga
);
