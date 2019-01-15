import {
  put,
  select,
  call,
  takeLatest,
  takeEvery,
  fork,
  getContext
} from 'redux-saga/effects';
import { delay, channel } from 'redux-saga';

import {
  backendFormValuesSelector,
  challengeFilesSelector,
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

    let testResults;
    switch (challengeType) {
      case js:
      case bonfire:
        testResults = yield executeJSChallengeSaga(proxyLogger);
        break;
      case backend:
        testResults = yield executeBackendChallengeSaga(proxyLogger);
        break;
      default:
        testResults = yield executeDOMChallengeSaga(proxyLogger);
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

function* executeJSChallengeSaga(proxyLogger) {
  const files = yield select(challengeFilesSelector);
  const { build, sources } = yield call(buildJSChallenge, files);
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

function createTestFrame(document, ctx, proxyLogger) {
  return new Promise(resolve =>
    createTestFramer(document, resolve, proxyLogger)(ctx)
  );
}

function* executeDOMChallengeSaga(proxyLogger) {
  const files = yield select(challengeFilesSelector);
  const meta = yield select(challengeMetaSelector);
  const document = yield getContext('document');
  const ctx = yield call(buildDOMChallenge, files, meta);
  yield call(createTestFrame, document, ctx, proxyLogger);
  // wait for a code execution on a "ready" event in jQuery challenges
  yield delay(100);

  return yield call(executeTests, (testString, testTimeout) =>
    runTestInTestFrame(document, testString, testTimeout)
  );
}

// TODO: use a web worker
function* executeBackendChallengeSaga(proxyLogger) {
  const formValues = yield select(backendFormValuesSelector);
  const document = yield getContext('document');
  const ctx = yield call(buildBackendChallenge, formValues);
  yield call(createTestFrame, document, ctx, proxyLogger);

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
  yield delay(500);
  try {
    const { html, modern } = challengeTypes;
    const meta = yield select(challengeMetaSelector);
    const { challengeType } = meta;
    if (challengeType !== html && challengeType !== modern) {
      return;
    }
    const files = yield select(challengeFilesSelector);
    const ctx = yield call(buildDOMChallenge, files, meta);
    const document = yield getContext('document');
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
