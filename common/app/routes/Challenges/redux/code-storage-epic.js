import { Observable } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import store from 'store';

import {
  types,
  storedCodeFound,
  noStoredCodeFound,
  previousSolutionFound,

  keySelector,
  codeLockedSelector
} from './';
import { removeCodeUri, getCodeUri } from '../utils/code-uri.js';

import {
  types as app,
  challengeSelector,
  previousSolutionSelector
} from '../../../redux';
import { filesSelector } from '../../../files';
import { makeToast } from '../../../Toasts/redux';
import { setContent, isPoly } from '../../../../utils/polyvinyl.js';

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
  if (isPoly(files)) {
    return { [key]: setContent(code, files[key]) };
  }
  return false;
  }

function clearCodeEpic(actions, { getState }) {
  return actions::ofType(
    types.submitChallenge.complete,
    types.clickOnReset
  )
    .do(() => {
      const { id } = challengeSelector(getState());
      store.remove(id);
    })
    .ignoreElements();
}

function saveCodeEpic(actions, { getState }) {
  return actions::ofType(types.executeChallenge)
    // do not save challenge if code is locked
    .filter(() => !codeLockedSelector(getState()))
    .do(() => {
      const { id } = challengeSelector(getState());
      const files = filesSelector(getState());
      store.set(id, files);
    })
    .ignoreElements();
}

function loadCodeEpic(actions, { getState }, { window, location }) {
  return Observable.merge(
      actions::ofType(app.appMounted),
      actions::ofType(types.onRouteChallenges)
        .distinctUntilChanged(({ payload: { dashedName } }) => dashedName)
    )
    // make sure we are not SSR
    .filter(() => !!window)
    .flatMap(() => {
      let finalFiles;
      const state = getState();
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
          makeToast({
            message: 'I found code in the URI. Loading now.'
          }),
          storedCodeFound(challenge, finalFiles)
        );
      }

      const codeFound = getCode(id);
      if (codeFound && isPoly(codeFound)) {
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
          storedCodeFound(challenge, finalFiles)
        );
      }

      if (previousSolutionSelector(getState())) {
        const userChallenge = previousSolutionSelector(getState());
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
            previousSolutionFound(challenge, finalFiles)
          );
        }
      }

      return Observable.of(noStoredCodeFound());
    });
}

function findPreviousSolutionEpic(actions, { getState }) {
  return Observable.combineLatest(
    actions::ofType(types.noStoredCodeFound),
    actions::ofType(app.fetchUser.complete)
  )
    .map(() => previousSolutionSelector(getState()))
    .filter(Boolean)
    .flatMap(userChallenge => {
      const challenge = challengeSelector(getState());
      let finalFiles;
      if (userChallenge.files) {
        finalFiles = userChallenge.files;
      } else if (userChallenge.solution) {
        const files = filesSelector(getState());
        const key = keySelector(getState());
        finalFiles = legacyToFile(userChallenge.solution, files, key);
      }
      if (finalFiles) {
        return Observable.of(
          makeToast({
            message: 'I found a previous solved solution. Loading now.'
          }),
          previousSolutionFound(challenge, finalFiles)
        );
      }
      return Observable.empty();
    });
}


export default combineEpics(
  saveCodeEpic,
  loadCodeEpic,
  clearCodeEpic,
  findPreviousSolutionEpic
);
