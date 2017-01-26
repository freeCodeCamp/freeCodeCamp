import analyticsSaga from './analytics-saga.js';
import codeStorageSaga from './code-storage-saga.js';
import errSaga from './err-saga.js';
import executeChallengeSaga from './build-challenge-epic.js';
import frameEpic from './frame-epic.js';
import hardGoToSaga from './hard-go-to-saga.js';
import mouseTrapSaga from './mouse-trap-saga.js';
import nightModeSaga from './night-mode-saga.js';
import titleSaga from './title-saga.js';
import windowSaga from './window-saga.js';

export default [
  analyticsSaga,
  codeStorageSaga,
  errSaga,
  executeChallengeSaga,
  frameEpic,
  hardGoToSaga,
  mouseTrapSaga,
  nightModeSaga,
  titleSaga,
  windowSaga
];
