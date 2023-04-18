import { takeEvery, put } from 'redux-saga/effects';
import { unlockCode } from './actions';

function* codeLockSaga(action) {
  yield put(unlockCode(action));
}

export function* watchCodeLock(types) {
  yield takeEvery(types.updateFile, codeLockSaga);
}
