import _ from 'lodash';
import { Observable, Subject } from 'rx';
import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  initOutput,
  updateOutput,
  updateTests,
  checkChallenge,

  codeLockedSelector,
  showPreviewSelector,
  testsSelector,
  disableJSOnError
} from './';
import {
  buildFromFiles,
  buildBackendChallenge
} from '../utils/build.js';
import {
  runTestsInTestFrame,
  createTestFramer,
  createMainFramer
} from '../utils/frame.js';
import {
  createErrorObservable,

  challengeSelector,
  doActionOnError
} from '../../../redux';


const executeDebounceTimeout = 750;
export function updateMainEpic(actions, { getState }, { document }) {
  return Observable.of(document)
    // if document is not defined then none of this epic will run
    // this prevents issues during SSR
    .filter(Boolean)
    .flatMapLatest(() => {
      const proxyLogger = new Subject();
      const frameMain = createMainFramer(document, getState, proxyLogger);
      const buildAndFrameMain = actions::ofType(
        types.unlockUntrustedCode,
        types.modernEditorUpdated,
        types.classicEditorUpdated,
        types.executeChallenge,
        types.challengeUpdated
      )
        .debounce(executeDebounceTimeout)
        // if isCodeLocked do not run challenges
        .filter(() => (
          !codeLockedSelector(getState()) &&
          showPreviewSelector(getState())
        ))
        .flatMapLatest(() => buildFromFiles(getState(), true)
          .map(frameMain)
          .ignoreElements()
          .catch(doActionOnError(() => disableJSOnError()))
        );
      return Observable.merge(buildAndFrameMain, proxyLogger.map(updateOutput));
    });
}

export function executeChallengeEpic(actions, { getState }, { document }) {
  return Observable.of(document)
    // if document is not defined then none of this epic will run
    // this prevents issues during SSR
    .filter(Boolean)
    .flatMapLatest(() => {
      const frameReady = new Subject();
      const frameTests = createTestFramer(document, getState, frameReady);
      const challengeResults = frameReady
        .pluck('checkChallengePayload')
        .map(checkChallengePayload => ({
          checkChallengePayload,
          tests: testsSelector(getState())
        }))
        .flatMap(({ checkChallengePayload, tests }) => {
          const postTests = Observable.of(
            updateOutput('// tests completed'),
            checkChallenge(checkChallengePayload)
          ).delay(250);
          // run the tests within the test iframe
          return runTestsInTestFrame(document, tests)
            .flatMap(tests => {
              return Observable.from(tests)
                .map(({ message }) => message)
                // make sure that the test message is a non empty string
                .filter(_.overEvery(_.isString, Boolean))
                .map(updateOutput)
                .concat(Observable.of(updateTests(tests)));
            })
            .concat(postTests);
        });
      const buildAndFrameChallenge = actions::ofType(types.executeChallenge)
        .debounce(executeDebounceTimeout)
        // if isCodeLocked do not run challenges
        .filter(() => !codeLockedSelector(getState()))
        .flatMapLatest(() => {
          const state = getState();
          const { type: challengeType } = challengeSelector(state);
          if (challengeType === 'backend') {
            return buildBackendChallenge(state)
              .do(frameTests)
              .ignoreElements()
              .startWith(initOutput('// running test'))
              .catch(createErrorObservable);
          }
          return buildFromFiles(state, false)
            .do(frameTests)
            .ignoreElements()
            .startWith(initOutput('// running test'))
            .catch(createErrorObservable);
        });
      return Observable.merge(
        buildAndFrameChallenge,
        challengeResults
      );
    });
}

export default combineEpics(executeChallengeEpic, updateMainEpic);
