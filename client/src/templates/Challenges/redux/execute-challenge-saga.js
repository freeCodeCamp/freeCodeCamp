import {
  put,
  select,
  call,
  takeLatest,
  takeEvery,
  fork
} from 'redux-saga/effects';
import { delay, channel } from 'redux-saga';

import {
  challengeMetaSelector,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  initLogs,
  updateLogs,
  logsToConsole,
  updateTests,
  challengeFilesSelector
} from './';

import {
  buildJSFromFiles,
  buildHtmlFromFiles,
  buildBackendChallenge
} from '../utils/build';

import { challengeTypes } from '../../../../utils/challengeTypes';

import WorkerExecutor from '../utils/worker-executor';
import {
  createMainFramer,
  createTestFramer,
  runTestInTestFrame
} from '../utils/frame.js';

const testWorker = new WorkerExecutor('test-evaluator');
const testTimeout = 5000;

function* ExecuteChallengeSaga() {
  try {
    const { js, bonfire, backend } = challengeTypes;
    const { challengeType } = yield select(challengeMetaSelector);

    yield put(initLogs());
    yield put(initConsole('// running tests'));

    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield ExecuteJSChallengeSaga();
        break;
      case backend:
        testResults = yield ExecuteBackendChallengeSaga();
        break;
      default:
        testResults = yield ExecuteDOMChallengeSaga();
    }

    yield put(updateTests(testResults));
    yield put(updateConsole('// tests completed'));
    yield put(logsToConsole('// console output'));
  } catch (e) {
    yield put(updateConsole(e));
  }
}

function* logToConsole(channel) {
  yield takeEvery(channel, function*(args) {
    yield put(updateLogs(args));
  });
}

function* ExecuteJSChallengeSaga() {
  const files = yield select(challengeFilesSelector);
  const { code, solution } = yield call(buildJSFromFiles, files);

  const consoleProxy = yield channel();
  yield fork(logToConsole, consoleProxy);
  const log = args => consoleProxy.put(args);
  testWorker.on('LOG', log);

  const testResults = yield call(executeTests, (testString, testTimeout) =>
    testWorker
      .execute({ script: solution + '\n' + testString, code }, testTimeout)
      .then(result => {
        testWorker.killWorker();
        return result;
      })
  );

  testWorker.remove('LOG', log);
  consoleProxy.close();
  return testResults;
}

function createTestFrame(state, ctx, proxyLogger) {
  return new Promise(resolve => {
    const frameTest = createTestFramer(document, state, resolve, proxyLogger);
    frameTest(ctx);
  });
}

function* ExecuteDOMChallengeSaga() {
  const state = yield select();
  const ctx = yield call(buildHtmlFromFiles, state);
  const consoleProxy = yield channel();
  yield fork(logToConsole, consoleProxy);

  yield call(createTestFrame, state, ctx, consoleProxy);
  // wait for a code execution on a "ready" event in jQuery challenges
  yield delay(100);

  const testResults = yield call(executeTests, (testString, testTimeout) =>
    Promise.race([
      runTestInTestFrame(document, testString),
      new Promise((_, reject) =>
        setTimeout(() => reject('timeout'), testTimeout)
      )
    ])
  );

  consoleProxy.close();
  return testResults;
}

// TODO: use a web worker
function* ExecuteBackendChallengeSaga() {
  const state = yield select();
  const ctx = yield call(buildBackendChallenge, state);
  const consoleProxy = yield channel();

  yield call(createTestFrame, state, ctx, consoleProxy);

  const testResults = yield call(executeTests, (testString, testTimeout) =>
    Promise.race([
      runTestInTestFrame(document, testString),
      new Promise((_, reject) =>
        setTimeout(() => reject('timeout'), testTimeout)
      )
    ])
  );

  consoleProxy.close();
  return testResults;
}

function* executeTests(testRunner) {
  const tests = yield select(challengeTestsSelector);
  const testResults = [];
  for (const { text, testString } of tests) {
    const newTest = { text, testString };
    try {
      const { pass, err } = yield call(testRunner, testString, testTimeout);
      if (pass) {
        newTest.pass = true;
      } else {
        throw err;
      }
    } catch (err) {
      newTest.message = text.replace(/<code>(.*?)<\/code>/g, '$1');
      if (err === 'timeout') {
        newTest.err = 'Test timed out';
        newTest.message = `${newTest.message} (${newTest.err})`;
      } else {
        const { message, stack } = err;
        newTest.err = message + '\n' + stack;
        newTest.stack = stack;
      }
      yield put(updateConsole(newTest.message));
    } finally {
      testResults.push(newTest);
    }
  }
  return testResults;
}

function* updateMainSaga() {
  try {
    const { html, modern } = challengeTypes;
    const { challengeType } = yield select(challengeMetaSelector);
    if (challengeType !== html && challengeType !== modern) {
      return;
    }
    const state = yield select();
    const frameMain = yield call(createMainFramer, document, state);
    const ctx = yield call(buildHtmlFromFiles, state);
    yield call(frameMain, ctx);
  } catch (err) {
    console.error(err);
  }
}

export function createExecuteChallengeSaga(types) {
  return [
    takeLatest(types.executeChallenge, ExecuteChallengeSaga),
    takeLatest(
      [
        types.updateFile,
        types.previewMounted,
        types.challengeMounted,
        types.resetChallenge
      ],
      updateMainSaga
    )
  ];
}
