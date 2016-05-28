import errSaga from './err-saga';
import titleSaga from './title-saga';
import localStorageSaga from './local-storage-saga';
import hardGoToSaga from './hard-go-to-saga';
import windowSaga from './window-saga';
import executeChallengeSaga from './execute-challenge-saga';
import frameSaga from './frame-saga';
import codeStorageSaga from './code-storage-saga';

export default [
  errSaga,
  titleSaga,
  localStorageSaga,
  hardGoToSaga,
  windowSaga,
  executeChallengeSaga,
  frameSaga,
  codeStorageSaga
];
