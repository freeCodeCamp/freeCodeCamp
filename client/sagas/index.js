import errSaga from './err-saga';
import titleSaga from './title-saga';
import localStorageSaga from './local-storage-saga';
import hardGoToSaga from './hard-go-to-saga';
import windowSaga from './window-saga';

export default [
  errSaga,
  titleSaga,
  localStorageSaga,
  hardGoToSaga,
  windowSaga
];
