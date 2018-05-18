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
  concat
} from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import { overEvery, isString } from 'lodash';

import {
  types,
  challengeMetaSelector,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  checkChallenge,
  updateTests,
  disableJSOnError
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
        ofType(types.updateFile, types.executeChallenge),
        debounceTime(executeDebounceTimeout),
        switchMap(() =>
          buildFromFiles(getState(), true)
            .map(frameMain)
            .ignoreElements()
            .catch(() => of({ type: 'NULL' }))
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
      const frameTests = createTestFramer(document, getState, frameReady);
      const challengeResults = frameReady.pipe(
        pluck('checkChallengePayload'),
        map(checkChallengePayload => ({
          checkChallengePayload,
          tests: challengeTestsSelector(getState())
        })),
        switchMap(({ checkChallengePayload, tests }) => {
          const postTests = of(
            updateConsole('// tests completed'),
            checkChallenge(checkChallengePayload)
          ).delay(250);
          // run the tests within the test iframe
          return runTestsInTestFrame(document, tests)
            .flatMap(tests => {
              return from(tests).pipe(
                map(({ message }) => message),
                filter(overEvery(isString, Boolean)),
                map(updateConsole),
                concat(of(updateTests(tests)))
              );
            })
            .concat(postTests);
        })
      );
      const buildAndFrameChallenge = action$.pipe(
        ofType(types.executeChallenge),
        debounceTime(executeDebounceTimeout),
        // if isCodeLocked do not run challenges
        // .filter(() => !codeLockedSelector(getState()))
        switchMap(() => {
          const state = getState();
          const { challengeType } = challengeMetaSelector(state);
          if (challengeType === backend) {
            return buildBackendChallenge(state)
              .do(frameTests)
              .ignoreElements()
              .startWith(initConsole('// running test'))
              .catch(err => disableJSOnError(err));
          }
          return buildFromFiles(state, false)
            .do(frameTests)
            .ignoreElements()
            .startWith(initConsole('// running test'))
            .catch(err => disableJSOnError(err));
        })
      );
      return merge(buildAndFrameChallenge, challengeResults);
    })
  );
}

export default combineEpics(updateMainEpic, executeChallengeEpic);
