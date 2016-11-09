import errSaga from './err-saga';
import titleSaga from './title-saga';
import hardGoToSaga from './hard-go-to-saga';
import windowSaga from './window-saga';
import executeChallengeSaga from './execute-challenge-saga';
import frameSaga from './frame-saga';
import codeStorageSaga from './code-storage-saga';
import mouseTrapSaga from './mouse-trap-saga';
import analyticsSaga from './analytics-saga';
import nightModeSaga from './night-mode-saga';

export default [
  errSaga,
  titleSaga,
  hardGoToSaga,
  windowSaga,
  executeChallengeSaga,
  frameSaga,
  codeStorageSaga,
  mouseTrapSaga,
  analyticsSaga,
  nightModeSaga
];
