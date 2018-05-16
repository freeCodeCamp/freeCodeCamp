import { of } from 'rxjs/observable/of';
import { filter } from 'rxjs/operators/filter';
import { switchMap } from 'rxjs/operators/switchMap';
import { tap } from 'rxjs/operators/tap';
import { ignoreElements } from 'rxjs/operators/ignoreElements';
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

function clearCodeEpic(action$, { getState }) {
  return action$.pipe(
    ofType(types.submitComplete, types.resetChallenge),
    tap(() => {
      const { id } = challengeMetaSelector(getState());
      store.remove(id);
    }),
    ignoreElements()
  );
}

function saveCodeEpic(action$, { getState }) {
  return action$.pipe(
    ofType(types.executeChallenge),
    // do not save challenge if code is locked
    filter(() => !isCodeLockedSelector(getState())),
    tap(() => {
      const state = getState();
      const { id } = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      store.set(id, files);
    }),
    ignoreElements()
  );
}

function loadCodeEpic(action$, { getState }) {
  return action$.pipe(
    ofType(types.challengeMounted),
    switchMap(({ payload: id }) => {
      let finalFiles;
      const state = getState();
      const challenge = challengeMetaSelector(state);
      const files = challengeFilesSelector(state);
      const fileKeys = Object.keys(files);
      const invalidForLegacy = fileKeys.length > 1;
      const { title: legacyKey } = challenge;

      const codeFound = getCode(id);
      if (codeFound && isFilesAllPoly(codeFound)) {
        finalFiles = codeFound;
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
