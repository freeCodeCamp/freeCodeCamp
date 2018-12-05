import { put, select, call, takeLatest } from 'redux-saga/effects';

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

import { buildJSFromFiles } from '../utils/build';

import { challengeTypes } from '../../../../utils/challengeTypes';

import WorkerExecutor from '../utils/worker-executor';

const testWorker = new WorkerExecutor('test-evaluator');
const testTimeout = 5000;

function* ExecuteChallengeSaga() {
  const { js, bonfire, backend } = challengeTypes;
  const { challengeType } = yield select(challengeMetaSelector);
  switch (challengeType) {
    case js:
    case bonfire:
      yield* ExecuteJSChallengeSaga();
      break;
    case backend:
      // yield* ExecuteBackendChallengeSaga();
      break;
    default:
    // yield* ExecuteDOMChallengeSaga();
  }
}

function* ExecuteJSChallengeSaga() {
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
        const { message, stack } = err;
        newTest.err = message + '\n' + stack;
        newTest.stack = stack;
        newTest.message = text.replace(/<code>(.*?)<\/code>/g, '$1');
        yield put(updateConsole(newTest.message));
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
  return [takeLatest(types.executeChallenge, ExecuteChallengeSaga)];
}
