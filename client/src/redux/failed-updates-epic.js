import { ofType } from 'redux-observable';
import { merge, from, EMPTY } from 'rxjs';
import {
  catchError,
  concatMap,
  delay,
  exhaustMap,
  filter,
  ignoreElements,
  map,
  tap
} from 'rxjs/operators';
import store from 'store';
import { v4 as uuid } from 'uuid';

import { challengeTypes } from '@freecodecamp/shared/config/challenge-types';
import { isGoodXHRStatus } from '../templates/Challenges/utils';
import postUpdate$ from '../templates/Challenges/utils/post-update';
import { actionTypes } from './action-types';
import { serverStatusChange } from './actions';
import { isServerOnlineSelector, isSignedInSelector } from './selectors';

const key = 'fcc-failed-updates';
const UPDATE_DELAY = 100; // 100 ms delay to avoid spamming the server

function getFailedUpdates() {
  let failures = store.get(key);
  failures = Array.isArray(failures) ? failures : [];

  let submitableFailures = failures.filter(isSubmitable);

  // delete unsubmittable failed challenges
  store.set(key, submitableFailures);
  return submitableFailures;
}

function handleUpdateResponse({ data, response }, update) {
  if (data?.message || isGoodXHRStatus(response?.status)) {
    console.info(`${update.id} succeeded`);
    // the request completed successfully
    const failures = store.get(key) || [];
    const newFailures = failures.filter(x => x.id !== update.id);
    store.set(key, newFailures);
  }
}

// check if backendEndProjects have a solution
const isSubmitable = failure =>
  failure.payload.challengeType !== challengeTypes.backEndProject ||
  failure.payload.solution;

function failedUpdateEpic(action$, state$) {
  const storeUpdates = action$.pipe(
    ofType(actionTypes.updateFailed),
    tap(({ payload = {} }) => {
      if ('endpoint' in payload && 'payload' in payload) {
        const failures = store.get(key) || [];
        payload.id = uuid();
        store.set(key, [...failures, payload]);
      }
    }),
    map(() => serverStatusChange(false))
  );

  const flushUpdates = action$.pipe(
    ofType(actionTypes.fetchUserComplete, actionTypes.updateComplete),
    filter(() => isSignedInSelector(state$.value)),
    filter(() => store.get(key)),
    filter(() => isServerOnlineSelector(state$.value)),
    exhaustMap(() =>
      from(getFailedUpdates()).pipe(
        concatMap(update =>
          postUpdate$(update).pipe(
            tap(payload => {
              handleUpdateResponse(payload, update);
            }),
            catchError(err => {
              console.warn('unable to process progress update', err.message);
              return EMPTY;
            }),
            delay(UPDATE_DELAY)
          )
        )
      )
    ),
    ignoreElements()
  );

  return merge(storeUpdates, flushUpdates);
}

export default failedUpdateEpic;
