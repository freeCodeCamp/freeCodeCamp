import { createAction } from 'redux-actions';
import { updateContents } from '../../../../utils/polyvinyl';
import { getMouse, loggerToStr } from '../utils';

import types from './types';

// step
export const stepForward = createAction(types.stepForward);
export const stepBackward = createAction(types.stepBackward);
export const goToStep = createAction(
  types.goToStep,
  (step, isUnlocked) => ({ step, isUnlocked })
);
export const completeAction = createAction(types.completeAction);
export const updateUnlockedSteps = createAction(types.updateUnlockedSteps);
export const openLightBoxImage = createAction(types.openLightBoxImage);
export const closeLightBoxImage = createAction(types.closeLightBoxImage);

// challenges
export const fetchChallenge = createAction(
  types.fetchChallenge,
  (dashedName, block) => ({ dashedName, block })
);
export const fetchChallengeCompleted = createAction(
  types.fetchChallengeCompleted,
  (_, challenge) => challenge,
  entities => ({ entities })
);
export const closeChallengeModal = createAction(types.closeChallengeModal);
export const resetUi = createAction(types.resetUi);
export const updateHint = createAction(types.updateHint);
export const lockUntrustedCode = createAction(types.lockUntrustedCode);
export const unlockUntrustedCode = createAction(
  types.unlockUntrustedCode,
  () => null
);
export const updateSuccessMessage = createAction(types.updateSuccessMessage);
export const fetchChallenges = createAction(types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallengesCompleted,
  (_, superBlocks) => superBlocks,
  entities => ({ entities })
);

export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);
export const resetChallenge = createAction(types.resetChallenge);
// replaceChallenge(dashedname) => Action
export const replaceChallenge = createAction(types.replaceChallenge);

// map
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const initMap = createAction(types.initMap);
export const toggleThisPanel = createAction(types.toggleThisPanel);
export const collapseAll = createAction(types.collapseAll);
export const expandAll = createAction(types.expandAll);

export const clearFilter = createAction(types.clearFilter);

// files
export const updateFile = createAction(
  types.updateFile,
  (content, file) => updateContents(content, file)
);

export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(
  types.executeChallenge,
  () => null
);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const showProjectSubmit = createAction(types.showProjectSubmit);

export const submitChallenge = createAction(types.submitChallenge);
export const moveToNextChallenge = createAction(types.moveToNextChallenge);

// code storage
export const saveCode = createAction(types.saveCode);
export const loadCode = createAction(types.loadCode);
export const savedCodeFound = createAction(
  types.savedCodeFound,
  (files, challenge) => ({ files, challenge })
);
export const clearSavedCode = createAction(types.clearSavedCode);


// video challenges
export const toggleQuestionView = createAction(types.toggleQuestionView);
export const grabQuestion = createAction(types.grabQuestion, e => {
  let { pageX, pageY, touches } = e;
  if (touches) {
    e.preventDefault();
    // these re-assigns the values of pageX, pageY from touches
    ({ pageX, pageY } = touches[0]);
  }
  const delta = [pageX, pageY];
  const mouse = [0, 0];

  return { delta, mouse };
});

export const releaseQuestion = createAction(types.releaseQuestion);
export const moveQuestion = createAction(
  types.moveQuestion,
  ({ e, delta }) => getMouse(e, delta)
);

// answer({
//   e: Event,
//   answer: Boolean,
//   userAnswer: Boolean,
//   info: String,
//   threshold: Number
// }) => Action
export const answerQuestion = createAction(types.answerQuestion);

export const startShake = createAction(types.startShake);
export const endShake = createAction(types.primeNextQuestion);

export const goToNextQuestion = createAction(types.goToNextQuestion);
export const videoCompleted = createAction(types.videoCompleted);

// bug
export const openBugModal = createAction(types.openBugModal);
export const closeBugModal = createAction(types.closeBugModal);
export const openIssueSearch = createAction(types.openIssueSearch);
export const createIssue = createAction(types.createIssue);
