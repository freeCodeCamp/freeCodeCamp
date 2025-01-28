import { put, takeEvery, select, take } from 'redux-saga/effects';
import { createFlashMessage } from '../components/Flash/redux';
import { setTheme } from './actions';
import { actionTypes } from './action-types';
import { userThemeSelector } from './selectors';

function* toggleThemeSaga() {
  const data = { type: 'success', message: 'flash.updated-themes' };
  const currentTheme = localStorage.getItem('theme');
  const invertedTheme = currentTheme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('theme', invertedTheme);
  yield put(setTheme(invertedTheme));
  yield put(createFlashMessage({ ...data }));
}

function* initializeThemeSaga() {
  // Wait for the fetch userComplete action
  yield take(actionTypes.fetchUserComplete);

  const userTheme = yield select(userThemeSelector);
  const localStorageTheme = localStorage.getItem('theme');
  const isSysThemeDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  let selectTheme = 'light';

  if (localStorageTheme !== null) {
    selectTheme = localStorageTheme === 'dark' ? 'dark' : 'light';
  } else if (userTheme) {
    selectTheme = userTheme === 'night' ? 'dark' : 'light';
  } else if (isSysThemeDark) {
    selectTheme = 'dark';
  }

  localStorage.setItem('theme', selectTheme);
  yield put(setTheme(selectTheme));
}

export function createThemeSaga(types) {
  return [
    takeEvery(types.toggleTheme, toggleThemeSaga),
    takeEvery(types.initializeTheme, initializeThemeSaga)
  ];
}
