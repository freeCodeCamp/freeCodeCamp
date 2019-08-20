import { of } from 'rxjs';
import { filter, switchMap, tap, ignoreElements } from 'rxjs/operators';
import { combineEpics, ofType } from 'redux-observable';
import store from 'store';

import {
  types,
  storedCodeFound,
  noStoredCodeFound,
  isCodeLockedSelector,
  challengeFilesSelector,
  challengeMetaSelector
} from './';

import { types as appTypes } from '../../../redux';

import { setContent, isPoly } from '../utils/polyvinyl';

const legacyPrefixes = [
  'Bonfire: ',
  'Waypoint: ',
  'Zipline: ',
  'Basejump: ',
  'Checkpoint: '
];
const legacyPostfix = 'Val';

function getCode(id) {
  const code = store.get(id);
  return code ? code : null;
}

function getLegacyCode(legacy) {
  const key = legacy + legacyPostfix;
  let code = null;
  const maybeCode = store.get(key);
  if (maybeCode) {
    code = '' + maybeCode;
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
  if (isFilesAllPoly(files)) {
    return { [key]: setContent(code, files[key]) };
  }
  return false;
}

function isFilesAllPoly(files) {
  return Object.keys(files)
    .map(key => files[key])
    .every(file => isPoly(file));
}

function clearCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(appTypes.submitComplete, types.resetChallenge),
    tap(() => {
      const { id } = challengeMetaSelector(state$.value);
      store.remove(id);
    }),
    ignoreElements()
  );
}

function saveCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(types.executeChallenge),
    // do not save challenge if code is locked
    filter(() => !isCodeLockedSelector(state$.value)),
    tap(() => {
      const state = state$.value;
      const { id } = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      store.set(id, files);
    }),
    ignoreElements()
  );
}

function loadCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(types.challengeMounted),
    filter(() => {
      const files = challengeFilesSelector(state$.value);
      return Object.keys(files).length > 0;
    }),
    switchMap(({ payload: id }) => {
      let finalFiles;
      const state = state$.value;
      const challenge = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      const fileKeys = Object.keys(files);
      const invalidForLegacy = fileKeys.length > 1;
      const { title: legacyKey } = challenge;

      const codeFound = getCode(id);
      if (codeFound && isFilesAllPoly(codeFound)) {
        finalFiles = {
          ...fileKeys
            .map(key => files[key])
            .reduce(
              (files, file) => ({
                ...files,
                [file.key]: {
                  ...file,
                  contents: codeFound[file.key]
                    ? codeFound[file.key].contents
                    : file.contents
                }
              }),
              {}
            )
        };
      } else {
        const legacyCode = getLegacyCode(legacyKey);
        if (legacyCode && !invalidForLegacy) {
          finalFiles = legacyToFile(legacyCode, files, fileKeys[0]);
        }
      }
      if (finalFiles) {
        return of(storedCodeFound(finalFiles));
      }
      return of(noStoredCodeFound());
    })
  );
}

export default combineEpics(saveCodeEpic, loadCodeEpic, clearCodeEpic);
