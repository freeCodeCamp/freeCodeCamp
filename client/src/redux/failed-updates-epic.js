import { ofType } from 'redux-observable';
import { empty, merge, from } from 'rxjs';
import {
  catchError,
  filter,
  ignoreElements,
  map,
  switchMap,
  tap,
  concatMap
} from 'rxjs/operators';
import store from 'store';
import { v4 as uuid } from 'uuid';

import { challengeTypes } from '../../../shared/config/challenge-types';
import { isGoodXHRStatus } from '../templates/Challenges/utils';
import postUpdate$ from '../templates/Challenges/utils/post-update';
import { actionTypes } from './action-types';
import { serverStatusChange } from './actions';
import { isServerOnlineSelector, isSignedInSelector } from './selectors';

const key = 'fcc-failed-updates';

// Function to save update payload to store with a unique ID
function saveUpdateToStore(payload) {
  if ('endpoint' in payload && 'payload' in payload) {
    const failures = store.get(key) || [];
    payload.id = uuid(); // Assign a unique ID to the payload
    store.set(key, [...failures, payload]); // Save the updated payload to the store
  }
}

// Function to determine if a failure is submitable based on challenge type and solution presence
function isSubmitable(failure) {
  return (
    failure.payload.challengeType !== challengeTypes.backEndProject ||
    failure.payload.solution
  );
}

// Function to process update, handle success, and error scenarios
function processUpdate(update) {
  return postUpdate$(update).pipe(
    switchMap(({ response, data }) => {
      if (data?.message || isGoodXHRStatus(response?.status)) {
        console.info(`${update.id} succeeded`); // Log successful update
        const failures = store.get(key) || [];
        const newFailures = failures.filter(x => x.id !== update.id);
        store.set(key, newFailures); // Remove successfully processed update from store
      }
      return empty();
    }),
    catchError(() => empty())
  );
}

// Epic to handle failed updates
function failedUpdateEpic(action$, state$) {
  // Handle store updates
  const storeUpdates = action$.pipe(
    ofType(actionTypes.updateFailed),
    tap(({ payload = {} }) => saveUpdateToStore(payload)), // Save failed update to store
    map(() => serverStatusChange(false)) // Dispatch server status change action
  );

  // Handle flushing updates
  const flushUpdates = action$.pipe(
    ofType(actionTypes.fetchUserComplete, actionTypes.updateComplete),
    filter(() => isSignedInSelector(state$.value)),
    filter(() => isServerOnlineSelector(state$.value)),
    filter(() => store.get(key)), // Filter only when there are updates in store
    tap(() => {
      const failures = store.get(key) || [];
      const submitableFailures = failures.filter(isSubmitable); // Filter submitable failures

      store.set(key, submitableFailures); // Update store with submitable failures

      const batch$ = from(submitableFailures).pipe(
        concatMap(update =>
          processUpdate(update)
            .pipe
            // Add delay here if needed
            ()
        )
      );

      batch$.subscribe({
        complete: () =>
          console.info('progress updates processed where possible'), // Log completion
        error: err =>
          console.warn('unable to process progress updates', err.message) // Log error if any
      });
    }),
    ignoreElements() // Ignore non-observable output
  );

  return merge(storeUpdates, flushUpdates); // Merge both epics
}

export default failedUpdateEpic;
