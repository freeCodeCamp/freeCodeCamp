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

import { buildChallenge, getTestRunner } from '../utils/build';

import { challengeTypes } from '../../../../utils/challengeTypes';

import { createMainFramer } from '../utils/frame.js';

export function* executeChallengeSaga() {
  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const consoleProxy = yield channel();
  try {
    yield put(initLogs());
    yield put(initConsole('// running tests'));
    yield fork(logToConsole, consoleProxy);
    const proxyLogger = args => consoleProxy.put(args);

    const buildData = yield buildChallengeData();
    const document = yield getContext('document');
    const testRunner = yield call(
      getTestRunner,
      buildData,
      proxyLogger,
      document
    );
    const testResults = yield executeTests(testRunner);

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

function* buildChallengeData() {
  const challengeData = yield select(challengeDataSelector);
  try {
    return yield call(buildChallenge, challengeData);
  } catch (e) {
    yield put(disableBuildOnError(e));
    throw ['Build failed'];
  }
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

function* updateMainSaga() {
  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  yield delay(700);
  try {
    yield put(initConsole(''));
    const { html, modern } = challengeTypes;
    const { challengeType } = yield select(challengeDataSelector);
    if (challengeType !== html && challengeType !== modern) {
      return;
    }
    const ctx = yield buildChallengeData();
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
