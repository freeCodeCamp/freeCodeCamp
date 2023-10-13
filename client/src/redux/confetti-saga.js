import { takeEvery, put } from 'redux-saga/effects';
import { CONFETTI_ACTION, showConfetti, hideConfetti } from './actions'; // Import relevant actions

function* confettiLogic() {
  // Add the logic to show the confetti here, for example:
  yield put(showConfetti());

  // Simulate confetti for a few seconds
  yield delay(5000); // You might need to import 'delay' from 'redux-saga/effects' or implement it differently

  // Hide the confetti after a certain duration
  yield put(hideConfetti());
}

function* watchConfettiAction() {
  yield takeEvery(CONFETTI_ACTION, confettiLogic);
}

export default function* confettiSaga() {
  yield all([watchConfettiAction()]);
}
