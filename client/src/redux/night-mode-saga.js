/* eslint-disable require-yield */

import { takeEvery } from 'redux-saga/effects';
import store from 'store';

const themeKey = 'fcc-theme';
const defaultTheme = 'default';
const nightTheme = 'night';

function setTheme(currentTheme = defaultTheme, theme) {
  if (currentTheme !== theme) {
    store.set(themeKey, theme);
  }
  const html = document.getElementById('__fcc-html');
  html.classList.remove(theme === nightTheme ? defaultTheme : nightTheme);
  html.classList.add(theme);
}

function* updateLocalThemeSaga({ payload }) {
  const currentTheme = store.get(themeKey);
  if ('user' in payload) {
    const { theme = defaultTheme } = payload.user;
    return setTheme(currentTheme, theme);
  }
  if ('theme' in payload) {
    return setTheme(currentTheme, payload.theme);
  }
  return setTheme(currentTheme);
}

export function createNightModeSaga(types) {
  return [
    takeEvery(types.fetchUserComplete, updateLocalThemeSaga),
    takeEvery(types.updateUserFlagComplete, updateLocalThemeSaga)
  ];
}
