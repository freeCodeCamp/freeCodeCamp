/* eslint-disable require-yield */

import { takeEvery } from 'redux-saga/effects';
import store from 'store';
import { isEmpty } from 'lodash';

const themeKey = 'fcc-theme';
const defaultTheme = 'default';
const nightTheme = 'night';

function setTheme(currentTheme = nightTheme, theme = nightTheme) {
  if (currentTheme !== theme) {
    store.set(themeKey, theme);
  }
  const html = document.getElementById('__fcc-html');
  html.classList.remove(theme === nightTheme ? defaultTheme : nightTheme);
  html.classList.add(theme);
}

function* updateLocalThemeSaga({ payload: { user, theme } }) {
  const currentTheme = store.get(themeKey) || nightTheme;
  if (!isEmpty(user)) {
    const { theme = nightTheme } = user;
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
