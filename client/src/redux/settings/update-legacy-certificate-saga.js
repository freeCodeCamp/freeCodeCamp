import { takeEvery } from 'redux-saga/effects';

// import {
//   updateLegacyCertificateComplete,
//   updateLegacyCertificateError
// } from './';
// import { createFlashMessage } from '../../components/Flash/redux';

// import { putUserUpdateEmail } from '../../utils/ajax';
// import reallyWeirdErrorMessage from '../../utils/reallyWeirdErrorMessage';

function* updateLegacyCertificateSaga(values) {
  console.log(values);
  /* if (!email || !isEmail(email)) {
    yield put(createFlashMessage(reallyWeirdErrorMessage));
    return;
  }
  try {
    const { data: response } = yield call(putUserUpdateEmail, email);
    yield put(
      updateMyEmailComplete({
        ...response,
        payload: { email, isEmailVerified: false }
      })
    );
    yield put(createFlashMessage(response));
  } catch (e) {
    yield put(updateMyEmailError(e));
  }*/
}

export function createUpdateLegacyCertificateSaga(types) {
  return [
    takeEvery(types.updateLegacyCertificate, updateLegacyCertificateSaga)
  ];
}
