import {
  put,
  select,
  call,
  takeLatest,
  takeEvery,
  fork
} from 'redux-saga/effects';
import { channel } from 'redux-saga';

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

import { buildJSFromFiles, buildFromFiles } from '../utils/build';

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

    // TODO: ExecuteBackendChallengeSaga
    if (challengeType === backend) {
      return;
    }

    yield put(initLogs());
    yield put(initConsole('// running tests'));

    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield ExecuteJSChallengeSaga();
        break;
      case backend:
        // yield ExecuteBackendChallengeSaga();
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

function* ExecuteJSChallengeSaga() {
  const files = yield select(challengeFilesSelector);
  const { code, solution } = yield call(buildJSFromFiles, files);

  const testResults = yield call(executeTests, {
    testRunner: testWorker,
    code,
    solution
  });
  return testResults;
}

function createTestFrame(state, ctx, proxyLogger) {
  return new Promise(resolve => {
    const frameTest = createTestFramer(document, state, resolve, proxyLogger);
    frameTest(ctx);
  }).then(() => console.log('Frame ready'));
}

function* logToConsole(channel) {
  yield takeEvery(channel, function*(args) {
    yield put(updateLogs(args));
  });
}

function* ExecuteDOMChallengeSaga() {
  const state = yield select();
  const ctx = yield call(buildFromFiles, state);
  const consoleProxy = yield channel();
  yield fork(logToConsole, consoleProxy);

  yield call(createTestFrame, state, ctx, consoleProxy);

  const testResults = yield call(executeTests, {
    testRunner: {
      execute({ script }, testTimeout) {
        return Promise.race([
          runTestInTestFrame(document, script),
          new Promise((_, reject) =>
            setTimeout(() => reject('timeout'), testTimeout)
          )
        ]);
      },
      killWorker() {}
    }
  });

  consoleProxy.close();
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
    const ctx = yield call(buildFromFiles, state);
    yield call(frameMain, ctx);
  } catch (err) {
    console.error(err);
  }
}

function* executeTests({ testRunner, code = '', solution = '' }) {
  const tests = yield select(challengeTestsSelector);
  const testResults = [];
  for (const { text, testString } of tests) {
    const newTest = { text, testString };
    try {
      const { pass, err, logs = [] } = yield call(
        testRunner.execute,
        { script: solution + '\n' + testString, code },
        testTimeout
      );
      for (const log of logs) {
        yield put(updateLogs(log));
      }
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
      yield call(testRunner.killWorker);
    }
  }
  return testResults;
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
