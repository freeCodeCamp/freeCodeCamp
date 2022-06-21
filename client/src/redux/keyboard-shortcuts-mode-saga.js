/* eslint-disable require-yield */

import { takeEvery } from 'redux-saga/effects';
import store from 'store';

const shortcutsKey = 'fcc-keyboard-shortcuts';

export function setKeyboardShortcuts(setting) {
  store.set(shortcutsKey, setting);
}

function* updateLocalKeyboardShortcutsSaga({ payload }) {
  const { user, keyboardShortcuts } = payload ?? {};
  if (user) {
    const { keyboardShortcuts = false } = user;
    setKeyboardShortcuts(keyboardShortcuts);
  } else if (typeof keyboardShortcuts !== 'undefined') {
    setKeyboardShortcuts(keyboardShortcuts);
  }
}

export function createKeyboardShortcuts(types) {
  return [
    takeEvery(types.fetchUserComplete, updateLocalKeyboardShortcutsSaga),
    takeEvery(types.updateUserFlagComplete, updateLocalKeyboardShortcutsSaga)
  ];
}
