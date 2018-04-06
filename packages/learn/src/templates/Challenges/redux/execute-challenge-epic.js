import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  switchMap,
  map,
  filter,
  pluck,
  concat
} from 'rxjs/operators';
import { ofType, combineEpics } from 'redux-observable';
import _ from 'lodash';

import {
  types,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  checkChallenge,
  updateTests
} from './';
import { buildFromFiles } from '../utils/build';
import {
  runTestsInTestFrame,
  createTestFramer,
  createMainFramer
} from '../utils/frame.js';

const executeDebounceTimeout = 750;

function updateMainEpic(actions, { getState }, { document }) {
  return Observable.of(document).pipe(
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
            .catch(err => console.error(err))
        )
      );
      return Observable.merge(
        buildAndFrameMain,
        proxyLogger.map(updateConsole)
      );
    })
  );
}

function executeChallengeEpic(action$, { getState }, { document }) {
  return Observable.of(document).pipe(
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
          const postTests = Observable.of(
            updateConsole('// tests completed'),
            checkChallenge(checkChallengePayload)
          ).delay(250);
          // run the tests within the test iframe
          return runTestsInTestFrame(document, tests)
            .flatMap(tests => {
              return Observable.from(tests).pipe(
                map(({ message }) => message),
                filter(_.overEvery(_.isString, Boolean)),
                map(updateConsole),
                concat(Observable.of(updateTests(tests)))
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
          // const { challengeType } = challengeSelector(state);
          // if (challengeType === backend) {
          //   return buildBackendChallenge(state)
          //     .do(frameTests)
          //     .ignoreElements()
          //     .startWith(initOutput('// running test'))
          //     .catch(createErrorObservable);
          // }
          return buildFromFiles(state, false)
            .do(frameTests)
            .ignoreElements()
            .startWith(initConsole('// running test'))
            .catch(err => console.log(err));
        })
      );
      return Observable.merge(buildAndFrameChallenge, challengeResults);
    })
  );
}

export default combineEpics(updateMainEpic, executeChallengeEpic);
