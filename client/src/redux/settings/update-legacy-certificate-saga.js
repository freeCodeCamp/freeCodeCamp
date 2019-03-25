import { takeEvery, select, call } from 'redux-saga/effects';

import { putUpdateLegacyCertificate } from '../../utils/ajax';
// import { completedChallengesSelector } from './';

// import {
//   updateLegacyCertificateComplete,
//   updateLegacyCertificateError
// } from './';
// import { createFlashMessage } from '../../components/Flash/redux';

// import { putUserUpdateEmail } from '../../utils/ajax';
// import reallyWeirdErrorMessage from '../../utils/reallyWeirdErrorMessage';

const getProject = state => state;

// completedChallengesSelector(state);

function* updateLegacyCertificateSaga(values) {
  console.log(values);
  let project = yield select(getProject);
  console.log(project);

  const info = {
    projects: {
      'legacy-front-end': {
        bd7158d8c242eddfaeb5bd13: 'https://gigi.io/freeCodeCamp/pe/MJjp',
        bd7158d8c442eddfaeb5bd17: 'https://gigi.io/freeCodeCamp/pe/MJjp',
        bd7158d8c442eddfaeb5bd18: 'https://gigi.io/freeCodeCamp/pe/MJjp',
        bd7158d8c442eedfaeb5bd1c: 'https://gigi.io/freeCodeCamp/pe/MJjp'
      }
    }
  };

  const response = yield call(putUpdateLegacyCertificate, info);

  console.log(response);

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
