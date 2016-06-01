export actions from './actions';
export reducer from './reducer';
export types from './types';

import fetchChallengesSaga from './fetch-challenges-saga';
import completionSaga from './completion-saga';

export const sagas = [ fetchChallengesSaga, completionSaga ];
