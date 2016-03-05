export actions from './actions';
export reducer from './reducer';
export types from './types';

import answerSaga from './answer-saga';
import fetchHikesSaga from './fetch-hikes-saga';

export const sagas = [ answerSaga, fetchHikesSaga ];
