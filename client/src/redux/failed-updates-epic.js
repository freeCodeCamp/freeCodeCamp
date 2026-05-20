import { ofType } from 'redux-observable';
import { EMPTY, from } from 'rxjs';
import {
  catchError,
  filter,
  ignoreElements,
  map,
  mergeAll,
  switchMap,
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

function delay(fn, time = 0) {
  return setTimeout(fn, time);
}

// check if backendEndProjects have a solution
const isSubmitable = failure =>
  failure.payload.challengeType !== challengeTypes.backEndProject ||
  failure.payload.solution;

function handleUpdateSuccess(update) {
  console.info(`${update.id} succeeded`);
  const failures = store.get(key) || [];
  const newFailures = failures.filter(x => x.id !== update.id);
  store.set(key, newFailures);
}

function runUpdate(update) {
  return new Promise((resolve, reject) => {
    postUpdate$(update)
      .pipe(
        switchMap(({ response, data }) => {
          if (data?.message || isGoodXHRStatus(response?.status)) {
            handleUpdateSuccess(update);
          }
          return EMPTY;
        }),
        catchError(() => EMPTY)
      )
      .subscribe({
        complete: resolve,
        error: reject
      });
  });
}

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
    tap(() => {
      let failures = store.get(key);
      failures = Array.isArray(failures) ? failures : [];

      let submitableFailures = failures.filter(isSubmitable);

      // delete unsubmitable failed challenges
      store.set(key, submitableFailures);
      failures = submitableFailures;

      let delayTime = 100;
      const batch = failures.map((update, i) => {
        // we stagger the updates here so we don't hammer the server
        // *********************************************************
        // progressively increase additional delay by the amount of updates
        // 1st: 100ms delay
        // 2nd: 200ms delay
        // 3rd: 400ms delay
        // 4th: 700ms delay
        // 5th: 1100ms delay
        // 6th: 1600ms delay
        // and so-on
        delayTime += 100 * i;
        return delay(() => runUpdate(update), delayTime);
      });
      Promise.all(batch)
        .then(() => console.info('progress updates processed where possible'))
        .catch(err =>
          console.warn('unable to process progress updates', err.message)
        );
    }),
    ignoreElements()
  );

  return from([storeUpdates, flushUpdates]).pipe(mergeAll());
}

export default failedUpdateEpic;
