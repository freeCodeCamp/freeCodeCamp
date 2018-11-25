import { takeEvery, put, select, call } from 'redux-saga/effects';

import {
  challengeMetaSelector,
  challengeTestsSelector,
  initConsole,
  updateConsole,
  initLogs,
  updateLogs,
  logsToConsole,
  checkChallenge,
  updateTests,
  challengeFilesSelector
} from './';

import { buildJSFromFiles } from '../utils/build';

import { challengeTypes } from '../../../../utils/challengeTypes';

import WorkerExecutor from '../utils/worker-executor';

const testWorker = new WorkerExecutor('test-evaluator');
const testTimeout = 5000;

function* ExecuteJSChallengeSaga() {
  const { challengeType } = yield select(challengeMetaSelector);
  const { js, bonfire } = challengeTypes;
  if (challengeType !== js && challengeType !== bonfire) {
    return;
  }
  yield put(initLogs());
  yield put(initConsole('// running tests'));
  try {
    const files = yield select(challengeFilesSelector);
    const { code, solution } = yield call(buildJSFromFiles, files);
    const tests = yield select(challengeTestsSelector);
    const testResults = [];
    for (const { text, testString } of tests) {
      const newTest = { text, testString };
      const { pass, err, logs } = yield call(
        testWorker.execute,
        { script: solution + '\n' + testString, code },
        testTimeout
      );
      if (pass) {
        newTest.pass = true;
      } else {
        const { message, stack, isAssertionError } = err;
        newTest.err = message + '\n' + stack;
        newTest.stack = stack;
        newTest.message = text.replace(/<code>(.*?)<\/code>/g, '$1');
        yield put(updateConsole(newTest.message));
        if (!isAssertionError) {
          console.warn(message);
        }
      }
      testResults.push(newTest);
      for (const log of logs) {
        yield put(updateLogs(log));
      }
      // kill worker for independent tests
      yield call(testWorker.killWorker);
    }
    yield put(updateTests(testResults));
    yield put(updateConsole('// tests completed'));
    yield put(logsToConsole('// console output'));
    yield put(checkChallenge());
  } catch (e) {
    if (e === 'timeout') {
      yield put(updateConsole('Test timed out'));
    } else {
      yield put(updateConsole(e));
    }
  } finally {
    yield call(testWorker.killWorker);
  }
}

export function createExecuteChallengeSaga(types) {
  return [takeEvery(types.executeChallenge, ExecuteJSChallengeSaga)];
}
