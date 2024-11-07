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

function* initalizeThemeSaga() {
  // Wait for the fetch userComplete action
  yield take(actionTypes.fetchUserComplete);

  let selectTheme;
  const isUserThemeDark = (yield select(userThemeSelector)) === 'night';
  const isLocalStorageThemeDark = localStorage.getItem('theme') === 'dark';
  const isSysThemeDark = window.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches;

  // the order matters here
  if (isLocalStorageThemeDark || isUserThemeDark || isSysThemeDark) {
    selectTheme = 'dark';
  } else {
    selectTheme = 'light';
  }
  localStorage.setItem('theme', selectTheme);
  yield put(setTheme(selectTheme));
}

export function createThemeSaga(types) {
  return [
    takeEvery(types.toggleTheme, toggleThemeSaga),
    takeEvery(types.initializeTheme, initalizeThemeSaga)
  ];
}
