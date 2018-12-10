import {
  put,
  select,
  call,
  takeLatest,
  takeEvery,
  race,
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

    const tests = yield select(challengeTestsSelector);
    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield ExecuteJSChallengeSaga(tests);
        break;
      case backend:
        // yield ExecuteBackendChallengeSaga();
        break;
      default:
        testResults = yield ExecuteDOMChallengeSaga(tests);
    }

    yield put(updateTests(testResults));
    yield put(updateConsole('// tests completed'));
    yield put(logsToConsole('// console output'));
  } catch (e) {
    yield put(updateConsole(e));
  }
}

function* ExecuteJSChallengeSaga(tests) {
  const testResults = [];
  const files = yield select(challengeFilesSelector);
  const { code, solution } = yield call(buildJSFromFiles, files);

  for (const { text, testString } of tests) {
    const newTest = { text, testString };
    try {
      const { pass, err, logs } = yield call(
        testWorker.execute,
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
      yield call(testWorker.killWorker);
    }
  }
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

function* ExecuteDOMChallengeSaga(tests) {
  const testResults = [];
  const state = yield select();
  const ctx = yield call(buildFromFiles, state);
  const consoleProxy = yield channel();
  yield fork(logToConsole, consoleProxy);

  yield call(createTestFrame, state, ctx, consoleProxy);

  for (const { text, testString } of tests) {
    const newTest = { text, testString };
    try {
      const [{ pass, err }, timeout] = yield race([
        call(runTestInTestFrame, document, testString),
        delay(testTimeout, 'timeout')
      ]);
      if (timeout) {
        throw timeout;
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
      console.error(err);
      yield put(updateConsole(newTest.message));
    } finally {
      testResults.push(newTest);
    }
  }
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
