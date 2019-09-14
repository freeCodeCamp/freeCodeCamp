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

function* updateLocalThemeSaga({ payload: { user, theme } }) {
  const currentTheme = store.get(themeKey) || defaultTheme;
  if (user) {
    const { theme = defaultTheme } = user;
    return setTheme(currentTheme, theme);
  }
  if (theme) {
    return setTheme(currentTheme, theme);
  }
  return setTheme(currentTheme);
}

export function createNightModeSaga(types) {
  return [
    takeEvery(types.fetchUserComplete, updateLocalThemeSaga),
    takeEvery(types.updateUserFlagComplete, updateLocalThemeSaga)
  ];
}
