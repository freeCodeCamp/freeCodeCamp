import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import store from 'store';

import { removeCodeUri, getCodeUri } from '../utils/code-uri';

import { setContent } from '../../common/utils/polyvinyl';

import {
  userSelector,
  challengeSelector
} from '../../common/app/redux';
import { makeToast } from '../../common/app/Toasts/redux';
import {
  types,
  savedCodeFound,
  updateMain,
  lockUntrustedCode,

  keySelector,
  filesSelector,
  codeLockedSelector
} from '../../common/app/routes/challenges/redux';

const legacyPrefixes = [
  'Bonfire: ',
  'Waypoint: ',
  'Zipline: ',
  'Basejump: ',
  'Checkpoint: '
];
const legacyPostfix = 'Val';

function getCode(id) {
  if (store.has(id)) {
    return store.get(id);
  }
  return null;
}

function getLegacyCode(legacy) {
  const key = legacy + legacyPostfix;
  let code = null;
  if (store.has(key)) {
    code = '' + store.get(key);
    store.remove(key);
    return code;
  }
  return legacyPrefixes.reduce((code, prefix) => {
    if (code) {
      return code;
    }
    return store.get(prefix + key);
  }, null);
}

function legacyToFile(code, files, key) {
  return { [key]: setContent(code, files[key]) };
}

export function clearCodeEpic(actions, { getState }) {
  return actions::ofType(types.clearSavedCode)
    .map(() => {
      const { id } = challengeSelector(getState());
      store.remove(id);
    })
    .ignoreElements();
}
export function saveCodeEpic(actions, { getState }) {
  return actions::ofType(types.saveCode)
    // do not save challenge if code is locked
    .filter(() => !codeLockedSelector(getState()))
    .map(() => {
      const { id } = challengeSelector(getState());
      const files = filesSelector(getState());
      store.set(id, files);
    })
    .ignoreElements();
}

export function loadCodeEpic(actions, { getState }, { window, location }) {
  return actions::ofType(types.loadCode)
    .flatMap(() => {
      let finalFiles;
      const state = getState();
      const user = userSelector(state);
      const challenge = challengeSelector(state);
      const key = keySelector(state);
      const files = filesSelector(state);
      const {
        id,
        name: legacyKey
      } = challenge;
      const codeUriFound = getCodeUri(
        location,
        window.decodeURIComponent
      );
      if (codeUriFound) {
        finalFiles = legacyToFile(codeUriFound, files, key);
        removeCodeUri(location, window.history);
        return Observable.of(
          lockUntrustedCode(),
          makeToast({
            message: 'I found code in the URI. Loading now.'
          }),
          savedCodeFound(finalFiles, challenge)
        );
      }

      const codeFound = getCode(id);
      if (codeFound) {
        finalFiles = codeFound;
      } else {
        const legacyCode = getLegacyCode(legacyKey);
        if (legacyCode) {
          finalFiles = legacyToFile(legacyCode, files, key);
        }
      }

      if (finalFiles) {
        return Observable.of(
          makeToast({
            message: 'I found some saved work. Loading now.'
          }),
          savedCodeFound(finalFiles, challenge),
          updateMain()
        );
      }

      if (user.challengeMap && user.challengeMap[id]) {
        const userChallenge = user.challengeMap[id];
        if (userChallenge.files) {
          finalFiles = userChallenge.files;
        } else if (userChallenge.solution) {
          finalFiles = legacyToFile(userChallenge.solution, files, key);
        }
        if (finalFiles) {
          return Observable.of(
            makeToast({
              message: 'I found a previous solved solution. Loading now.'
            }),
            savedCodeFound(finalFiles, challenge),
            updateMain()
          );
        }
      }

      return Observable.empty();
    });
}

export default combineEpics(saveCodeEpic, loadCodeEpic, clearCodeEpic);
