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

import { challengeTypes } from '../../../../../shared/config/challenge-types';
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
  updatePreview,
  updateProjectPreview
} from '../utils/build';
import {
  interruptCodeExecution,
  runPythonCode
} from '../utils/python-worker-handler';
import { fireConfetti } from '../../../utils/fire-confetti';
import callGA from '../../../analytics/call-ga';
import { actionTypes } from './action-types';
import {
  disableBuildOnError,
  executeChallengeComplete,
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
  isExecutingSelector,
  portalDocumentSelector,
  isBlockNewlyCompletedSelector
} from './selectors';

// How long before bailing out of a preview.
const previewTimeout = 2500;

// when 'run tests' is clicked, do this first
function* executeCancellableChallengeSaga(payload) {
  const { challengeType, id } = yield select(challengeMetaSelector);
  const { challengeFiles } = yield select(challengeDataSelector);

  // if multifileCertProject, see if body/code size is submittable
  if (
    challengeType === challengeTypes.multifileCertProject ||
    challengeType === challengeTypes.multifilePythonCertProject
  ) {
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

export function* executeChallengeSaga({ payload }) {
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
    // The buildData is used even if there are build errors, so that lessons
    // with syntax errors can be tested.
    const buildData = yield buildChallengeData(challengeData, {
      preview: false,
      disableLoopProtectTests: challengeMeta.disableLoopProtectTests,
      disableLoopProtectPreview: challengeMeta.disableLoopProtectPreview,
      usesTestRunner: true
    });
    const document = yield getContext('document');
    const testRunner = yield call(
      getTestRunner,
      buildData,
      { proxyLogger },
      document
    );
    const testResults = yield executeTests(testRunner, tests);
    yield put(updateTests(testResults));

    const challengeComplete = testResults.every(test => test.pass && !test.err);
    const isBlockCompleted = yield select(isBlockNewlyCompletedSelector);
    if (challengeComplete) {
      playTone('tests-completed');
      if (isBlockCompleted) {
        fireConfetti();
      }
    } else {
      playTone('tests-failed');
      if (challengeMeta.certification === 'responsive-web-design') {
        yield call(callGA, {
          event: 'challenge_failed',
          challenge_id: challengeMeta.id,
          challenge_path: window?.location?.pathname,
          challenge_files: challengeData.challengeFiles
        });
      }
    }

    if (challengeComplete && payload?.showCompletionModal) {
      yield put(openModal('completion'));
    }
    yield put(updateConsole(i18next.t('learn.tests-completed')));
    yield put(logsToConsole(i18next.t('learn.console-output')));
  } catch (e) {
    yield put(updateConsole(e));
  } finally {
    yield put(executeChallengeComplete());
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
      const { actual, expected, errorType } = err;

      newTest.message = text
        .replace('--fcc-expected--', expected)
        .replace('--fcc-actual--', actual);
      if (err === 'timeout') {
        newTest.err = 'Test timed out';
        newTest.message = `${newTest.message} (${newTest.err})`;
      } else if (errorType) {
        const msgKey =
          errorType === 'indentation'
            ? 'learn.indentation-error'
            : 'learn.syntax-error';
        newTest.message = `<p>${i18next.t(msgKey)}</p>`;
      } else {
        const { message, stack } = err;
        newTest.err = message + '\n' + stack;
        newTest.stack = stack;
      }

      const withIndex = newTest.message.replace(/<p>/, `<p>${i + 1}. `);
      yield put(updateConsole(withIndex));
    } finally {
      testResults.push(newTest);
    }
  }
  return testResults;
}

// updates preview frame and the fcc console.
export function* previewChallengeSaga(action) {
  const flushLogs = action?.type !== actionTypes.previewMounted;
  const isBuildEnabled = yield select(isBuildEnabledSelector);
  if (!isBuildEnabled) {
    return;
  }

  const isExecuting = yield select(isExecutingSelector);
  // executeChallengeSaga flushes the logs, so there's no need to if that's
  // just happened.
  if (flushLogs && !isExecuting) {
    yield put(initLogs());
    yield put(initConsole(''));
  }
  yield delay(700);

  const logProxy = yield channel();
  const proxyLogger = args => logProxy.put(args);

  try {
    yield fork(takeEveryConsole, logProxy);

    const challengeData = yield select(challengeDataSelector);

    if (canBuildChallenge(challengeData)) {
      const challengeMeta = yield select(challengeMetaSelector);
      const buildData = yield buildChallengeData(challengeData, {
        preview: true,
        disableLoopProtectTests: challengeMeta.disableLoopProtectTests,
        disableLoopProtectPreview: challengeMeta.disableLoopProtectPreview
      });
      // If there's an error building the challenge then throwing it here will
      // let the user know there's a problem.
      if (buildData.error) throw buildData.error;

      // evaluate the user code in the preview frame or in the worker
      if (challengeHasPreview(challengeData)) {
        const document = yield getContext('document');
        const portalDocument = yield select(portalDocumentSelector);
        const finalDocument = portalDocument || document;

        // Python challenges do not use the preview frame, they use a web worker
        // to run the code. The UI is handled by the xterm component, so there
        // is no need to update the preview frame.
        if (
          challengeData.challengeType === challengeTypes.python ||
          challengeData.challengeType ===
            challengeTypes.multifilePythonCertProject
        ) {
          yield updatePython(challengeData);
        } else {
          yield call(updatePreview, buildData, finalDocument, proxyLogger);
        }
      } else if (isJavaScriptChallenge(challengeData)) {
        const runUserCode = getTestRunner(buildData, {
          proxyLogger
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
    // If the preview fails, the most useful thing to do is to show the learner
    // what the error is. As such, we replace whatever is in the console with
    // the error message.
    yield put(initConsole(escape(err)));
  }
}

// TODO: refactor this so that we can use a single saga for all challenge
// updates (then they can all go in the same `takeLatest` call and be cancelled
// appropriately)
function* updatePreviewSaga(action) {
  const challengeData = yield select(challengeDataSelector);
  if (
    challengeData.challengeType === challengeTypes.python ||
    challengeData.challengeType === challengeTypes.multifilePythonCertProject
  ) {
    yield updatePython(challengeData);
  } else {
    // all other challenges have to recreate the preview
    yield previewChallengeSaga(action);
  }
}

function* updatePython(challengeData) {
  // TODO: refactor the build pipeline so that we have discrete, composable
  // functions to handle transforming code, embedding it and building the
  // final html. Then we can just use the transformation function here.
  const buildData = yield buildChallengeData(challengeData);
  interruptCodeExecution();
  const code = {
    contents: buildData.sources.index,
    editableContents: buildData.sources.editableContents,
    original: buildData.sources.original
  };

  runPythonCode(code);
  // TODO: proxy errors to the console
}

function* previewProjectSolutionSaga({ payload }) {
  if (!payload?.challengeData) return;
  const { challengeData } = payload;

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
    takeLatest(types.updateFile, updatePreviewSaga),
    takeLatest(
      [types.challengeMounted, types.resetChallenge, types.previewMounted],
      previewChallengeSaga
    ),
    takeLatest(types.projectPreviewMounted, previewProjectSolutionSaga)
  ];
}
