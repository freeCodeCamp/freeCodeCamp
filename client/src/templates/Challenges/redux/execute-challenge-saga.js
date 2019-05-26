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
  updatePreview
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
    yield put(updateLogs(args));
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
      newTest.message = text
        .replace(/<code>(.*?)<\/code>/g, '$1')
        .replace(/<wbr>/g, '');
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

function* previewChallengeSaga() {
  yield delay(700);

  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }
  const challengeData = yield select(challengeDataSelector);
  if (!challengeHasPreview(challengeData)) {
    return;
  }

  try {
    yield put(initConsole(''));
    const ctx = yield buildChallengeData(challengeData);
    const document = yield getContext('document');
    yield call(updatePreview, ctx, document);
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
      previewChallengeSaga
    )
  ];
}
