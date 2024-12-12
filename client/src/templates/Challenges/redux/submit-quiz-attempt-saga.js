import { put, takeEvery, select, call } from 'redux-saga/effects';

import { isSignedInSelector } from '../../../redux/selectors';
import { postQuizAttempt } from '../../../utils/ajax';
import { createFlashMessage } from '../../../components/Flash/redux';
import { standardErrorMessage } from '../../../utils/error-messages';
import { submitQuizAttemptComplete, submitQuizAttemptError } from './actions';

function* submitQuizAttemptSaga({ payload: { challengeId, quizId } }) {
  const isSignedIn = yield select(isSignedInSelector);

  if (!isSignedIn) return;

  try {
    const { response, data } = yield call(postQuizAttempt, {
      challengeId,
      quizId
    });

    if (response.status === 200) {
      yield put(submitQuizAttemptComplete({ challengeId, quizId }));
    } else {
      yield put(createFlashMessage(data));
      yield put(submitQuizAttemptError());
    }
  } catch (e) {
    yield put(createFlashMessage(standardErrorMessage));
    yield put(submitQuizAttemptError());
  }
}

export function createSubmitQuizAttemptSaga(types) {
  return [takeEvery(types.submitQuizAttempt, submitQuizAttemptSaga)];
}
