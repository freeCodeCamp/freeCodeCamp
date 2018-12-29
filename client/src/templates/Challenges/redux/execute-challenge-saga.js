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
  updateTests
} from './';

import {
  buildJSChallenge,
  buildDOMChallenge,
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
  const consoleProxy = yield channel();
  try {
    const { js, bonfire, backend } = challengeTypes;
    const { challengeType } = yield select(challengeMetaSelector);

    yield put(initLogs());
    yield put(initConsole('// running tests'));
    yield fork(logToConsole, consoleProxy);

    const state = yield select();

    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield ExecuteJSChallengeSaga(state, consoleProxy);
        break;
      case backend:
        testResults = yield ExecuteBackendChallengeSaga(state, consoleProxy);
        break;
      default:
        testResults = yield ExecuteDOMChallengeSaga(state, consoleProxy);
    }

    yield put(updateTests(testResults));
    yield put(updateConsole('// tests completed'));
    yield put(logsToConsole('// console output'));
  } catch (e) {
    yield put(updateConsole(e));
  } finally {
    consoleProxy.close();
  }
}

function* logToConsole(channel) {
  yield takeEvery(channel, function*(args) {
    yield put(updateLogs(args));
  });
}

function* ExecuteJSChallengeSaga(state, proxyLogger) {
  const { build, sources } = yield call(buildJSChallenge, state);
  const code = sources && 'index' in sources ? sources['index'] : '';

  const log = args => proxyLogger.put(args);
  testWorker.on('LOG', log);

  try {
    return yield call(executeTests, (testString, testTimeout) =>
      testWorker
        .execute(
          { script: build + '\n' + testString, code, sources },
          testTimeout
        )
        .then(result => {
          testWorker.killWorker();
          return result;
        })
    );
  } finally {
    testWorker.remove('LOG', log);
  }
}

function createTestFrame(state, ctx, proxyLogger) {
  return new Promise(resolve => {
    const frameTest = createTestFramer(document, state, resolve, proxyLogger);
    frameTest(ctx);
  });
}

function* ExecuteDOMChallengeSaga(state, proxyLogger) {
  const ctx = yield call(buildDOMChallenge, state);

  yield call(createTestFrame, state, ctx, proxyLogger);
  // wait for a code execution on a "ready" event in jQuery challenges
  yield delay(100);

  return yield call(executeTests, (testString, testTimeout) =>
    Promise.race([
      runTestInTestFrame(document, testString),
      new Promise((_, reject) =>
        setTimeout(() => reject('timeout'), testTimeout)
      )
    ])
  );
}

// TODO: use a web worker
function* ExecuteBackendChallengeSaga(state, proxyLogger) {
  const ctx = yield call(buildBackendChallenge, state);

  yield call(createTestFrame, state, ctx, proxyLogger);

  return yield call(executeTests, (testString, testTimeout) =>
    Promise.race([
      runTestInTestFrame(document, testString),
      new Promise((_, reject) =>
        setTimeout(() => reject('timeout'), testTimeout)
      )
    ])
  );
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
    const ctx = yield call(buildDOMChallenge, state);
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
