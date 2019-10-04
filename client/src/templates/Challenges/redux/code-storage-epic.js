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

import { createFlashMessage } from '../../../components/Flash/redux';

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
  let saveSuccessful;
  return action$.pipe(
    ofType(types.executeChallenge, types.saveEditorContent),
    // do not save challenge if code is locked
    filter(() => !isCodeLockedSelector(state$.value)),
    tap(() => {
      const state = state$.value;
      const { id } = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      try {
        store.set(id, files);
        // Possible fileType values: indexhtml indexjs indexjsx
        // The files Object always has one of these as the first/only attribute
        const fileType = Object.keys(files)[0];
        if (store.get(id)[fileType].contents !== files[fileType].contents) {
          throw Error('Failed to save to localStorage');
        }
        saveSuccessful = true;
      } catch (e) {
        saveSuccessful = false;
      }
    }),
    ofType(types.saveEditorContent),
    switchMap(() =>
      of(
        createFlashMessage({
          type: saveSuccessful ? 'success' : 'warning',
          message: saveSuccessful
            ? 'Saved! Your code was saved to localStorage'
            : 'Oops, your code did not save, localStorage may be full'
        })
      )
    )
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
