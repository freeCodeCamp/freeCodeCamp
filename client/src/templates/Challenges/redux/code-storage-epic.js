import { combineEpics, ofType } from 'redux-observable';
import { of } from 'rxjs';
import { filter, ignoreElements, map, switchMap, tap } from 'rxjs/operators';
import store from 'store';

import { isPoly, setContent } from '../../../../../utils/polyvinyl';
import { createFlashMessage } from '../../../components/Flash/redux';
import { FlashMessages } from '../../../components/Flash/redux/flash-messages';
import { savedChallengesSelector } from '../../../redux/selectors';
import { actionTypes as appTypes } from '../../../redux/action-types';
import { actionTypes } from './action-types';
import { noStoredCodeFound, storedCodeFound } from './actions';
import {
  challengeFilesSelector,
  challengeMetaSelector,
  isCodeLockedSelector
} from './selectors';

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

function legacyToFile(code, challengeFiles, fileKey) {
  if (isFilesAllPoly(challengeFiles)) {
    return {
      ...setContent(
        code,
        challengeFiles.find(x => x.fileKey === fileKey)
      )
    };
  }
  return false;
}

function isFilesAllPoly(challengeFiles) {
  if (Array.isArray(challengeFiles)) {
    return challengeFiles?.every(file => isPoly(file));
  } else {
    // TODO: After sufficient time, remove parsing of old code-storage format
    // This was pushed to production with https://github.com/freeCodeCamp/freeCodeCamp/pull/43023
    return Object.keys(challengeFiles)
      .map(key => challengeFiles[key])
      .every(file => isPoly(file));
  }
}

function clearCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(appTypes.submitComplete, actionTypes.resetChallenge),
    tap(() => {
      const { id } = challengeMetaSelector(state$.value);
      store.remove(id);
    }),
    ignoreElements()
  );
}

function saveCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(actionTypes.executeChallenge, actionTypes.saveEditorContent),
    // do not save challenge if code is locked
    filter(() => !isCodeLockedSelector(state$.value)),
    map(action => {
      const state = state$.value;
      const { id } = challengeMetaSelector(state);
      const challengeFiles = challengeFilesSelector(state);
      try {
        store.set(id, challengeFiles);
        const fileKey = challengeFiles[0].fileKey;
        if (
          store.get(id).find(challengeFile => challengeFile.fileKey === fileKey)
            .contents !==
          challengeFiles.find(challengeFile => challengeFile.fileKey).contents
        ) {
          throw Error('Failed to save to localStorage');
        }
        return action;
      } catch (e) {
        return { ...action, error: true };
      }
    }),
    ofType(actionTypes.saveEditorContent),
    switchMap(({ error }) =>
      of(
        createFlashMessage({
          type: error ? 'warning' : 'success',
          message: error
            ? FlashMessages.LocalCodeSaveError
            : FlashMessages.LocalCodeSaved
        })
      )
    )
  );
}

function loadCodeEpic(action$, state$) {
  return action$.pipe(
    ofType(actionTypes.challengeMounted),
    filter(() => {
      const challengeFiles = challengeFilesSelector(state$.value);
      return challengeFiles?.length > 0;
    }),
    switchMap(({ payload: id }) => {
      let finalFiles;
      const state = state$.value;
      const challenge = challengeMetaSelector(state);
      const challengeFiles = challengeFilesSelector(state);
      const fileKeys = challengeFiles.map(x => x.fileKey);
      const invalidForLegacy = fileKeys.length > 1;
      const { title: legacyKey } = challenge;
      const codeFound = getCode(id);

      // first check if the store (which is syncronized with the db) has saved
      // code
      const savedChallenges = savedChallengesSelector(state);
      const savedChallenge = savedChallenges?.find(saved => {
        return saved.id === challenge.id;
      });

      // if the store is already populated with the saved files, we should not
      // overwrite them with the local storage data
      if (savedChallenge) {
        return of(noStoredCodeFound());
      } else if (codeFound && isFilesAllPoly(codeFound)) {
        finalFiles = challengeFiles.reduce((challengeFiles, challengeFile) => {
          let foundChallengeFile = {};
          // TODO: after sufficient time, say 6 months from this commit, we can
          // assume that the majority of users have revisited any pages with old
          // stored code. At this point we can remove everything related to
          // indexjsCode.
          let indexjsCode = null;
          if (Array.isArray(codeFound)) {
            foundChallengeFile = codeFound.find(
              x => x.fileKey === challengeFile.fileKey
            );
            indexjsCode = codeFound.find(x => x.fileKey === 'indexjs');
          } else {
            // TODO: After sufficient time, remove parsing of old code-storage format
            // This was pushed to production with https://github.com/freeCodeCamp/freeCodeCamp/pull/43023
            foundChallengeFile = codeFound[challengeFile.fileKey];
            indexjsCode = codeFound['indexjs'];
          }
          let isCodeFound;
          // Fix the format of the old file
          if (indexjsCode) {
            indexjsCode.fileKey = 'scriptjs';
            delete indexjsCode.key;
            indexjsCode.history = ['script.js'];
            indexjsCode.name = 'script';
            indexjsCode.path = 'script.js';
          }

          if (foundChallengeFile) {
            isCodeFound = Object.keys(foundChallengeFile).length > 0;
          } else if (indexjsCode) {
            isCodeFound = Object.keys(indexjsCode).length > 0;
            foundChallengeFile = indexjsCode;
            // Repair the store, by replacing old style code with the repaired
            // file
            store.set(id, [indexjsCode]);
          } else {
            // The stored code is neither old code nor new, so we do not know
            // how to handle it.  The safest option is to delete it.
            store.remove(id);
          }
          return [
            ...challengeFiles,
            {
              ...challengeFile,
              ...(isCodeFound ? foundChallengeFile : {})
            }
          ];
        }, []);
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
