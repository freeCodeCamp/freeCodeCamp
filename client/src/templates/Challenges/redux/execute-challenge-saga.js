import i18next from 'i18next';
import { escape } from 'lodash-es';
import { channel } from 'redux-saga';
import {
  call,
  cancel,
  delay,
  fork,
  getContext,
  put,
  select,
  take,
  takeEvery,
  takeLatest
} from 'redux-saga/effects';

import { challengeTypes } from '../../../../utils/challenge-types';
import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import {
  bodySizeFits,
  getStringSizeInBytes,
  MAX_BODY_SIZE,
  standardizeRequestBody
} from '../../../utils/challenge-request-helpers';
import { playTone } from '../../../utils/tone';
import {
  buildChallenge,
  canBuildChallenge,
  challengeHasPreview,
  getTestRunner,
  isJavaScriptChallenge,
  isLoopProtected,
  updatePreview,
  updateProjectPreview
} from '../utils/build';
import { actionTypes } from './action-types';
import {
  disableBuildOnError,
  initConsole,
  initLogs,
  logsToConsole,
  openModal,
  updateConsole,
  updateLogs,
  updateTests
} from './actions';
import {
  challengeDataSelector,
  challengeMetaSelector,
  challengeTestsSelector,
  isBuildEnabledSelector,
  portalDocumentSelector
} from './selectors';

// How long before bailing out of a preview.
const previewTimeout = 2500;

// when 'run tests' is clicked, do this first
function* executeCancellableChallengeSaga(payload) {
  const { challengeType, id } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  // if multifileCertProject, see if body/code size is submittable
  if (challengeType === challengeTypes.multifileCertProject) {
    const body = standardizeRequestBody({ id, challengeFiles, challengeType });
    const bodySizeInBytes = getStringSizeInBytes(body);

    if (!bodySizeFits(bodySizeInBytes)) {
      return yield put(
        createFlashMessage({
          type: 'danger',
          message: FlashMessages.ChallengeSubmitTooBig,
          variables: { 'max-size': MAX_BODY_SIZE, 'user-size': bodySizeInBytes }
        })
      );
    }
  }

  // executeChallenge with payload containing {showCompletionModal}
  const task = yield fork(executeChallengeSaga, payload);

  yield take(actionTypes.cancelTests);
  yield cancel(task);
}

function* executeChallengeSaga({ payload }) {
  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const consoleProxy = yield channel();

  try {
    yield put(initLogs());
    yield put(initConsole(i18next.t('learn.running-tests')));
    // reset tests to initial state
    const tests = (yield select(challengeTestsSelector)).map(
      ({ text, testString }) => ({ text, testString })
    );
    yield put(updateTests(tests));

    yield fork(takeEveryLog, consoleProxy);
    const proxyLogger = args => consoleProxy.put(args);

    const challengeData = yield select(challengeDataSelector);
    const challengeMeta = yield select(challengeMetaSelector);
    const protect = isLoopProtected(challengeMeta);
    const buildData = yield buildChallengeData(challengeData, {
      preview: false,
      protect,
      usesTestRunner: true
    });
    const document = yield getContext('document');
    const testRunner = yield call(
      getTestRunner,
      buildData,
      { proxyLogger, removeComments: challengeMeta.removeComments },
      document
    );
    const testResults = yield executeTests(testRunner, tests);
    yield put(updateTests(testResults));

    const challengeComplete = testResults.every(test => test.pass && !test.err);
    if (challengeComplete) {
      playTone('tests-completed');
    } else {
      playTone('tests-failed');
    }
    if (challengeComplete && payload?.showCompletionModal) {
      yield put(openModal('completion'));
    }
    yield put(updateConsole(i18next.t('learn.tests-completed')));
    yield put(logsToConsole(i18next.t('learn.console-output')));
  } catch (e) {
    yield put(updateConsole(e));
  } finally {
    consoleProxy.close();
  }
}

function* takeEveryLog(channel) {
  // TODO: move all stringifying and escaping into the reducer so there is a
  // single place responsible for formatting the logs.
  yield takeEvery(channel, function* (args) {
    yield put(updateLogs(escape(args)));
  });
}

function* takeEveryConsole(channel) {
  // TODO: move all stringifying and escaping into the reducer so there is a
  // single place responsible for formatting the console output.
  yield takeEvery(channel, function* (args) {
    yield put(updateConsole(escape(args)));
  });
}

function* buildChallengeData(challengeData, options) {
  try {
    return yield call(buildChallenge, challengeData, options);
  } catch (e) {
    yield put(disableBuildOnError());
    throw e;
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
      const { actual, expected } = err;

      newTest.message = text
        .replace('--fcc-expected--', expected)
        .replace('--fcc-actual--', actual);
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
function* previewChallengeSaga({ flushLogs = true } = {}) {
  yield delay(700);

  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const logProxy = yield channel();
  const proxyLogger = args => logProxy.put(args);

  try {
    if (flushLogs) {
      yield put(initLogs());
      yield put(initConsole(''));
    }
    yield fork(takeEveryConsole, logProxy);

    const challengeData = yield select(challengeDataSelector);

    if (canBuildChallenge(challengeData)) {
      const challengeMeta = yield select(challengeMetaSelector);
      const protect = isLoopProtected(challengeMeta);
      const buildData = yield buildChallengeData(challengeData, {
        preview: true,
        protect
      });
      // evaluate the user code in the preview frame or in the worker
      if (challengeHasPreview(challengeData)) {
        const document = yield getContext('document');
        const portalDocument = yield select(portalDocumentSelector);
        const finalDocument = portalDocument || document;

        yield call(updatePreview, buildData, finalDocument, proxyLogger);
      } else if (isJavaScriptChallenge(challengeData)) {
        const runUserCode = getTestRunner(buildData, {
          proxyLogger,
          removeComments: challengeMeta.removeComments
        });
        // without a testString the testRunner just evaluates the user's code
        yield call(runUserCode, null, previewTimeout);
      }
    }
  } catch (err) {
    if (err[0] === 'timeout') {
      // TODO: translate the error
      // eslint-disable-next-line no-ex-assign
      err[0] = `The code you have written is taking longer than the ${previewTimeout}ms our challenges allow. You may have created an infinite loop or need to write a more efficient algorithm`;
    }
    console.log(err);
    yield put(updateConsole(escape(err)));
  }
}

function* previewProjectSolutionSaga({ payload }) {
  if (!payload) return;
  const { showProjectPreview, challengeData } = payload;
  if (!showProjectPreview) return;

  try {
    if (canBuildChallenge(challengeData)) {
      const buildData = yield buildChallengeData(challengeData);
      if (challengeHasPreview(challengeData)) {
        const document = yield getContext('document');
        yield call(updateProjectPreview, buildData, document);
      }
    }
  } catch (err) {
    console.log(err);
  }
}

export function createExecuteChallengeSaga(types) {
  return [
    takeLatest(types.executeChallenge, executeCancellableChallengeSaga),
    takeLatest(
      [types.updateFile, types.challengeMounted, types.resetChallenge],
      previewChallengeSaga
    ),
    takeLatest(types.previewMounted, previewChallengeSaga, {
      flushLogs: false
    }),
    takeLatest(types.projectPreviewMounted, previewProjectSolutionSaga)
  ];
}
