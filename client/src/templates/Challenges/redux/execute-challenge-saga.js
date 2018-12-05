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
  try {
    const { js, bonfire, backend } = challengeTypes;
    const { challengeType } = yield select(challengeMetaSelector);

    // TODO: ExecuteBackendChallengeSaga and ExecuteDOMChallengeSaga
    if (challengeType !== js && challengeType !== bonfire) {
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
      // yield ExecuteDOMChallengeSaga();
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

export function createExecuteChallengeSaga(types) {
  return [takeLatest(types.executeChallenge, ExecuteChallengeSaga)];
}
