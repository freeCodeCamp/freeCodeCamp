import { Observable } from 'rx';
import store from 'store';

import { ofType } from '../../common/utils/get-actions-of-type';
import { updateContents } from '../../common/utils/polyvinyl';
import combineSagas from '../../common/utils/combine-sagas';

import { makeToast } from '../../common/app/toasts/redux/actions';
import types from '../../common/app/routes/challenges/redux/types';
import {
  savedCodeFound,
  updateMain
} from '../../common/app/routes/challenges/redux/actions';

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

export function saveCodeSaga(actions, getState) {
  return actions
    ::ofType(types.saveCode)
    .map(() => {
      const { challengesApp: { id = '', files = {} } } = getState();
      store.set(id, files);
      return null;
    });
}

export function loadCodeSaga(actions$, getState) {
  return actions$
    ::ofType(types.loadCode)
    .flatMap(() => {
      let finalFiles;
      const {
        challengesApp: {
          id = '',
          files = {},
          legacyKey = '',
          key
        }
      } = getState();

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
            message: 'I found some saved work. Loading now'
          }),
          savedCodeFound(finalFiles),
          updateMain()
        );
      }
      return Observable.empty();
    });
}

export default combineSagas(saveCodeSaga, loadCodeSaga);
