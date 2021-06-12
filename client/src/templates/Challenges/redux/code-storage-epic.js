import { of } from 'rxjs';
import { filter, switchMap, map, tap, ignoreElements } from 'rxjs/operators';
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

import { setContent, isPoly } from '../../../../../utils/polyvinyl';

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

function legacyToFile(code, challengeFiles, key) {
  if (isFilesAllPoly(challengeFiles)) {
    return { [key]: setContent(code, challengeFiles[key]) };
  }
  return false;
}

function isFilesAllPoly(challengeFiles) {
  return Object.keys(challengeFiles)
    .map(key => challengeFiles[key])
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
    ofType(types.executeChallenge, types.saveEditorContent),
    // do not save challenge if code is locked
    filter(() => !isCodeLockedSelector(state$.value)),
    map(action => {
      const state = state$.value;
      const { id } = challengeMetaSelector(state);
      const challengeFiles = challengeFilesSelector(state);
      try {
        store.set(id, challengeFiles);
        // Possible fileType values: indexhtml indexjs indexjsx
        // The files Object always has one of these as the first/only attribute
        const fileType = Object.keys(challengeFiles)[0];
        if (
          store.get(id)[fileType].contents !== challengeFiles[fileType].contents
        ) {
          throw Error('Failed to save to localStorage');
        }
        return action;
      } catch (e) {
        return { ...action, error: true };
      }
    }),
    ofType(types.saveEditorContent),
    switchMap(({ error }) =>
      of(
        createFlashMessage({
          type: error ? 'warning' : 'success',
          message: error
            ? // eslint-disable-next-line max-len
              "Oops, your code did not save, your browser's local storage may be full."
            : "Saved! Your code was saved to your browser's local storage."
        })
      )
    )
  );
}

function loadCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(types.challengeMounted),
    filter(() => {
      const challengeFiles = challengeFilesSelector(state$.value);
      return Object.keys(challengeFiles).length > 0;
    }),
    switchMap(({ payload: id }) => {
      let finalFiles;
      const state = state$.value;
      const challenge = challengeMetaSelector(state);
      const challengeFiles = challengeFilesSelector(state);
      const fileKeys = Object.keys(challengeFiles);
      const invalidForLegacy = fileKeys.length > 1;
      const { title: legacyKey } = challenge;

      const codeFound = getCode(id);
      if (codeFound && isFilesAllPoly(codeFound)) {
        finalFiles = {
          ...fileKeys
            .map(key => challengeFiles[key])
            .reduce(
              (challengeFiles, challengeFile) => ({
                ...challengeFiles,
                [challengeFile.key]: {
                  ...challengeFile,
                  contents: codeFound[challengeFile.key]
                    ? codeFound[challengeFile.key].contents
                    : challengeFile.contents,
                  editableContents: codeFound[challengeFile.key]
                    ? codeFound[challengeFile.key].editableContents
                    : challengeFile.editableContents,
                  editableRegionBoundaries: codeFound[challengeFile.key]
                    ? codeFound[challengeFile.key].editableRegionBoundaries
                    : challengeFile.editableRegionBoundaries
                }
              }),
              {}
            )
        };
      } else {
        const legacyCode = getLegacyCode(legacyKey);
        if (legacyCode && !invalidForLegacy) {
          finalFiles = legacyToFile(legacyCode, challengeFiles, fileKeys[0]);
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
