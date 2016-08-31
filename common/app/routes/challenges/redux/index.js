import fetchChallengesSaga from './fetch-challenges-saga';
import completionSaga from './completion-saga';
import nextChallengeSaga from './next-challenge-saga';
import answerSaga from './answer-saga';
import resetChallengeSaga from './reset-challenge-saga';
import bugSaga from './bug-saga';
import mapUiSaga from './map-ui-saga';
import stepChallengeEpic from './step-challenge-epic';

export * as actions from './actions';
export reducer from './reducer';
export types from './types';

export projectNormalizer from './project-normalizer';

export const sagas = [
  fetchChallengesSaga,
  completionSaga,
  nextChallengeSaga,
  answerSaga,
  resetChallengeSaga,
  bugSaga,
  mapUiSaga,
  stepChallengeEpic
];
