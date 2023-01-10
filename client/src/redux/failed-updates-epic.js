import { ofType } from 'redux-observable';
import { empty, merge } from 'rxjs';
import {
  catchError,
  filter,
  ignoreElements,
  map,
  switchMap,
  tap
} from 'rxjs/operators';
import store from 'store';
import { v4 as uuid } from 'uuid';

import { backEndProject } from '../../utils/challenge-types';
import { isGoodXHRStatus } from '../templates/Challenges/utils';
import postUpdate$ from '../templates/Challenges/utils/post-update';
import { actionTypes } from './action-types';
import { serverStatusChange } from './actions';
import { isServerOnlineSelector, isSignedInSelector } from './selectors';

const key = 'fcc-failed-updates';

function delay(time = 0, fn) {
  return setTimeout(fn, time);
}

// check if backendEndProjects have a solution
const isSubmitable = failure =>
  failure.payload.challengeType !== backEndProject || failure.payload.solution;

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
        return delay(delayTime, () =>
          postUpdate$(update)
            .pipe(
              switchMap(({ response, data }) => {
                if (data?.message || isGoodXHRStatus(response?.status)) {
                  console.info(`${update.id} succeeded`);
                  // the request completed successfully
                  const failures = store.get(key) || [];
                  const newFailures = failures.filter(x => x.id !== update.id);
                  store.set(key, newFailures);
                }
                return empty();
              }),
              catchError(() => empty())
            )
            .toPromise()
        );
      });
      Promise.all(batch)
        .then(() => console.info('progress updates processed where possible'))
        .catch(err =>
          console.warn('unable to process progress updates', err.message)
        );
    }),
    ignoreElements()
  );

  return merge(storeUpdates, flushUpdates);
}

export default failedUpdateEpic;
