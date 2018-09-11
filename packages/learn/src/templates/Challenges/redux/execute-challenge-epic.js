import { Subject } from 'rxjs';
import { merge } from 'rxjs/observable/merge';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';

import {
  debounceTime,
  switchMap,
  map,
  filter,
  pluck,
  concat,
  tap,
  catchError,
  ignoreElements,
  startWith,
  delay
} from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { overEvery, isString } from 'lodash';

import {
  types,
  challengeMetaSelector,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  initLogs,
  logsToConsole,
  checkChallenge,
  updateTests,
  disableJSOnError,
  isJSEnabledSelector
} from './';
import { buildFromFiles, buildBackendChallenge } from '../utils/build';
import {
  runTestsInTestFrame,
  createTestFramer,
  createMainFramer
} from '../utils/frame.js';

import { backend } from '../../../../utils/challengeTypes';

const executeDebounceTimeout = 750;

function updateMainEpic(actions, { getState }, { document }) {
  return of(document).pipe(
    filter(Boolean),
    switchMap(() => {
      const proxyLogger = new Subject();
      const frameMain = createMainFramer(document, getState, proxyLogger);
      const buildAndFrameMain = actions.pipe(
        ofType(types.updateFile, types.challengeMounted),
        debounceTime(executeDebounceTimeout),
        switchMap(() =>
          buildFromFiles(getState(), true).pipe(
            map(frameMain),
            ignoreElements(),
            startWith(initConsole('')),
            catchError(err => of(disableJSOnError(err)))
          )
        )
      );
      return merge(buildAndFrameMain, proxyLogger.map(updateConsole));
    })
  );
}

function executeChallengeEpic(action$, { getState }, { document }) {
  return of(document).pipe(
    filter(Boolean),
    switchMap(() => {
      const frameReady = new Subject();
      // Removed for investigation into freeCodeCamp/Learn#291
      // const proxyLogger = new Subject();
      const frameTests = createTestFramer(
        document,
        getState,
        frameReady
        // proxyLogger
      );
      const challengeResults = frameReady.pipe(
        pluck('checkChallengePayload'),
        map(checkChallengePayload => ({
          checkChallengePayload,
          tests: challengeTestsSelector(getState())
        })),
        switchMap(({ checkChallengePayload, tests }) => {
          const postTests = of(
            updateConsole('// tests completed'),
            logsToConsole('// console output'),
            checkChallenge(checkChallengePayload)
          ).pipe(delay(250));
          return runTestsInTestFrame(document, tests).pipe(
            switchMap(tests => {
              return from(tests).pipe(
                map(({ message }) => message),
                filter(overEvery(isString, Boolean)),
                map(updateConsole),
                concat(of(updateTests(tests)))
              );
            }),
            concat(postTests)
          );
        })
      );
      const buildAndFrameChallenge = action$.pipe(
        ofType(types.executeChallenge),
        debounceTime(executeDebounceTimeout),
        filter(() => isJSEnabledSelector(getState())),
        switchMap(() => {
          const state = getState();
          const { challengeType } = challengeMetaSelector(state);
          const build =
            challengeType === backend
              ? buildBackendChallenge(state)
              : buildFromFiles(state, false);
          return build.pipe(
            tap(frameTests),
            ignoreElements(),
            startWith(initLogs()),
            startWith(initConsole('// running tests')),
            catchError(err => of(disableJSOnError(err)))
          );
        })
      );
      return merge(buildAndFrameChallenge, challengeResults);
    })
  );
}

export default combineEpics(updateMainEpic, executeChallengeEpic);
