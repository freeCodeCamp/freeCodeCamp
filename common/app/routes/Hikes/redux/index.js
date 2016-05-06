export * from './actions';
export * from './reducer';
export * from './types';

import answerSaga from './answer-saga';
import fetchHikesSaga from './fetch-hikes-saga';

export const sagas = [ answerSaga, fetchHikesSaga ];
