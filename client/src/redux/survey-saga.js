import { call, put, takeEvery } from 'redux-saga/effects';

import { createFlashMessage } from '../components/Flash/redux';
import { FlashMessages } from '../components/Flash/redux/flash-messages';
import { postSubmitSurvey } from '../utils/ajax';
import { closeModal } from '../templates/Challenges/redux/actions';
import { submitSurveyComplete, setIsProcessing } from './actions';

const submitSurveyErr = {
  type: 'danger',
  message: FlashMessages.SurveyErr3
};

function* submitSurveySaga({ payload }) {
  const surveyResults = payload;

  try {
    const { data } = yield call(postSubmitSurvey, { surveyResults });
    const { type } = data;

    if (type === 'success') {
      yield put(submitSurveyComplete({ surveyResults }));
      yield put(createFlashMessage(data));
      yield put(closeModal('survey'));
      yield put(setIsProcessing(false));
    } else {
      yield put(createFlashMessage(data));
      yield put(closeModal('survey'));
      yield put(setIsProcessing(false));
    }
  } catch {
    yield put(createFlashMessage(submitSurveyErr));
    yield put(closeModal('survey'));
    yield put(setIsProcessing(false));
  }
}

export function createSurveySaga(types) {
  return [takeEvery(types.submitSurvey, submitSurveySaga)];
}
