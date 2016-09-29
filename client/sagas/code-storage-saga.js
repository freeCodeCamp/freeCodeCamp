import { Observable } from 'rx';
import store from 'store';

import { removeCodeUri, getCodeUri } from '../utils/code-uri';
import { ofType } from '../../common/utils/get-actions-of-type';
import { updateContents } from '../../common/utils/polyvinyl';
import combineSagas from '../../common/utils/combine-sagas';

import { userSelector } from '../../common/app/redux/selectors';
import { makeToast } from '../../common/app/toasts/redux/actions';
import types from '../../common/app/routes/challenges/redux/types';
import {
  savedCodeFound,
  updateMain,
  lockUntrustedCode
} from '../../common/app/routes/challenges/redux/actions';
import {
  challengeSelector
} from '../../common/app/routes/challenges/redux/selectors';

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
  return { [key]: updateContents(code, files[key]) };
}

export function clearCodeSaga(actions, getState) {
  return actions
    ::ofType(types.clearSavedCode)
    .map(() => {
      const { challengesApp: { id = '' } } = getState();
      store.remove(id);
      return null;
    });
}
export function saveCodeSaga(actions, getState) {
  return actions
    ::ofType(types.saveCode)
    // do not save challenge if code is locked
    .filter(() => !getState().challengesApp.isCodeLocked)
    .map(() => {
      const { challengesApp: { id = '', files = {} } } = getState();
      store.set(id, files);
      return null;
    });
}

export function loadCodeSaga(actions, getState, { window, location }) {
  return actions
    ::ofType(types.loadCode)
    .flatMap(() => {
      let finalFiles;
      const state = getState();
      const { user } = userSelector(state);
      const { challenge } = challengeSelector(state);
      const {
        challengesApp: {
          id = '',
          files = {},
          legacyKey = '',
          key
        }
      } = state;
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

export default combineSagas(saveCodeSaga, loadCodeSaga, clearCodeSaga);
