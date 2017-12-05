import { combineEpics, ofType } from 'redux-epic';

import {
  types,

  frameMain,
  frameTests,
  initOutput,

  codeLockedSelector,
  showPreviewSelector
} from './';
import {
  buildFromFiles,
  buildBackendChallenge
} from '../utils/build.js';
import {
  createErrorObservable,

  challengeSelector
} from '../../../redux';

import { filesSelector } from '../../../files';

const executeDebounceTimeout = 750;
export function updateMainEpic(actions, { getState }) {
  return actions::ofType(types.executeChallenge, types.updateMain)
    // if isCodeLocked do not run challenges
    .filter(() => (
      !codeLockedSelector(getState()) &&
      showPreviewSelector(getState())
    ))
    .debounce(executeDebounceTimeout)
    .map(() => getState())
    .flatMapLatest(state => {
      const files = filesSelector(state);
      const { required = [] } = challengeSelector(state);
      return buildFromFiles(files, required, true)
        .map(frameMain)
        .catch(createErrorObservable);
    });
}

export function executeChallengeEpic(actions, { getState }) {
  return actions::ofType(types.executeChallenge)
    // if isCodeLocked do not run challenges
    .filter(() => !codeLockedSelector(getState()))
    .debounce(executeDebounceTimeout)
    .flatMapLatest(() => {
      const state = getState();
      const files = filesSelector(state);
      const {
        required = [],
        type: challengeType
      } = challengeSelector(state);
      if (challengeType === 'backend') {
        return buildBackendChallenge(state)
          .map(frameTests)
          .startWith(initOutput('// running test'));
      }
      return buildFromFiles(files, required, false)
        .map(frameTests)
        .startWith(initOutput('// running test'))
        .catch(createErrorObservable);
    });
}

export default combineEpics(executeChallengeEpic, updateMainEpic);
