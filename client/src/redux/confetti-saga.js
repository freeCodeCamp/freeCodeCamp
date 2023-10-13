import { takeEvery, put, delay, all } from 'redux-saga/effects'; // Import 'all' from 'redux-saga/effects'
import { CONFETTI_ACTION, showConfetti, hideConfetti } from './actions';

function* confettiLogic() {
  yield put(showConfetti());

  yield delay(5000);

  yield put(hideConfetti());
}

function* watchConfettiAction() {
  yield takeEvery(CONFETTI_ACTION, confettiLogic);
}

export default function* confettiSaga() {
  yield all([watchConfettiAction()]);
}

