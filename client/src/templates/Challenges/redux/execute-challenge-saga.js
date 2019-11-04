import {
  all,
  delay,
  put,
  select,
  call,
  takeLatest,
  takeEvery,
  fork,
  getContext
} from 'redux-saga/effects';
import { channel } from 'redux-saga';
import escape from 'lodash/escape';

import {
  challengeDataSelector,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  initLogs,
  updateLogs,
  logsToConsole,
  updateTests,
  isBuildEnabledSelector,
  disableBuildOnError
} from './';

import {
  buildChallenge,
  getTestRunner,
  challengeHasPreview,
  updatePreview,
  isJavaScriptChallenge
} from '../utils/build';

export function* executeChallengeSaga() {
  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const consoleProxy = yield channel();

  try {
    yield put(initLogs());
    yield put(initConsole('// running tests'));
    // reset tests to initial state
    const tests = (yield select(challengeTestsSelector)).map(
      ({ text, testString }) => ({ text, testString })
    );
    yield put(updateTests(tests));

    yield fork(logToConsole, consoleProxy);
    const proxyLogger = args => consoleProxy.put(args);

    const challengeData = yield select(challengeDataSelector);
    const buildData = yield buildChallengeData(challengeData);
    const document = yield getContext('document');
    const testRunner = yield call(
      getTestRunner,
      buildData,
      proxyLogger,
      document
    );
    const testResults = yield executeTests(testRunner, tests);

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
    yield put(updateLogs(escape(args)));
  });
}

function* buildChallengeData(challengeData) {
  try {
    return yield call(buildChallenge, challengeData);
  } catch (e) {
    yield put(disableBuildOnError(e));
    // eslint-disable-next-line no-throw-literal
    throw 'Build failed';
  }
}

function* executeTests(testRunner, tests, testTimeout = 5000) {
  const testResults = [];
  for (let i = 0; i < tests.length; i++) {
    const { text, testString } = tests[i];
    const newTest = { text, testString };
    // only the last test outputs console.logs to avoid log duplication.
    const firstTest = i === 1;
    try {
      const { pass, err } = yield call(
        testRunner,
        testString,
        testTimeout,
        firstTest
      );
      if (pass) {
        newTest.pass = true;
      } else {
        throw err;
      }
    } catch (err) {
      newTest.message = text;
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

// updates preview frame and the fcc console.
function* previewChallengeSaga() {
  yield delay(700);

  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const consoleProxy = yield channel();

  try {
    yield put(initLogs());
    yield fork(logToConsole, consoleProxy);
    const proxyLogger = args => consoleProxy.put(args);
    const challengeData = yield select(challengeDataSelector);

    const buildData = yield buildChallengeData(challengeData);
    // evaluate the user code in the preview frame or in the worker
    if (challengeHasPreview(challengeData)) {
      const document = yield getContext('document');
      yield call(updatePreview, buildData, document, proxyLogger);
    } else if (isJavaScriptChallenge(challengeData)) {
      const runUserCode = getTestRunner(buildData, proxyLogger);
      // without a testString the testRunner just evaluates the user's code
      yield call(runUserCode, null, 5000);
    }
    // To avoid seeing the default console, initialise and output in one call.
    yield all([put(initConsole('')), put(logsToConsole('// console output'))]);
  } catch (err) {
    console.error(err);
  } finally {
    consoleProxy.close();
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
      previewChallengeSaga
    )
  ];
}
