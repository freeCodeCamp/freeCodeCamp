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

import createWorker from '../utils/worker-executor';
import {
  createMainFramer,
  createTestFramer,
  runTestInTestFrame
} from '../utils/frame.js';

export function* executeChallengeSaga() {
  const consoleProxy = yield channel();
  try {
    const { js, bonfire, backend } = challengeTypes;
    const { challengeType } = yield select(challengeMetaSelector);

    yield put(initLogs());
    yield put(initConsole('// running tests'));
    yield fork(logToConsole, consoleProxy);
    const proxyLogger = args => consoleProxy.put(args);

    const state = yield select();

    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield executeJSChallengeSaga(state, proxyLogger);
        break;
      case backend:
        testResults = yield executeBackendChallengeSaga(state, proxyLogger);
        break;
      default:
        testResults = yield executeDOMChallengeSaga(state, proxyLogger);
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

function* executeJSChallengeSaga(state, proxyLogger) {
  const { build, sources } = yield call(buildJSChallenge, state);
  const code = sources && 'index' in sources ? sources['index'] : '';

  const testWorker = createWorker('test-evaluator');
  testWorker.on('LOG', proxyLogger);

  try {
    return yield call(executeTests, async(testString, testTimeout) => {
      try {
        return await testWorker.execute(
          { script: build + '\n' + testString, code, sources },
          testTimeout
        );
      } finally {
        testWorker.killWorker();
      }
    });
  } finally {
    testWorker.remove('LOG', proxyLogger);
  }
}

function createTestFrame(ctx, proxyLogger) {
  return new Promise(resolve =>
    createTestFramer(document, resolve, proxyLogger)(ctx)
  );
}

function* executeDOMChallengeSaga(state, proxyLogger) {
  const ctx = yield call(buildDOMChallenge, state);
  yield call(createTestFrame, ctx, proxyLogger);
  // wait for a code execution on a "ready" event in jQuery challenges
  yield delay(100);

  return yield call(executeTests, (testString, testTimeout) =>
    runTestInTestFrame(document, testString, testTimeout)
  );
}

// TODO: use a web worker
function* executeBackendChallengeSaga(state, proxyLogger) {
  const ctx = yield call(buildBackendChallenge, state);
  yield call(createTestFrame, ctx, proxyLogger);

  return yield call(executeTests, (testString, testTimeout) =>
    runTestInTestFrame(document, testString, testTimeout)
  );
}

function* executeTests(testRunner) {
  const tests = yield select(challengeTestsSelector);
  const testTimeout = 5000;
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
    const ctx = yield call(buildDOMChallenge, state);
    const frameMain = yield call(createMainFramer, document);
    yield call(frameMain, ctx);
  } catch (err) {
    console.error(err);
  }
}

export function createExecuteChallengeSaga(types) {
  return [
    takeLatest(types.executeChallenge, executeChallengeSaga),
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
