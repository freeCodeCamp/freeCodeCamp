import { createAction } from 'redux-actions';
import { updateContents } from '../../../../utils/polyvinyl';
import { getMouse, loggerToStr } from '../utils';

import types from './types';

// step
export const goToStep = createAction(types.goToStep);
export const completeAction = createAction(types.completeAction);

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
export const resetUi = createAction(types.resetUi);

export const fetchChallenges = createAction(types.fetchChallenges);
export const fetchChallengesCompleted = createAction(
  types.fetchChallengesCompleted,
  (_, superBlocks) => superBlocks,
  entities => ({ entities })
);

export const updateCurrentChallenge = createAction(
  types.updateCurrentChallenge
);

// map
export const updateFilter = createAction(
  types.updateFilter,
  e => e.target.value
);

export const clearFilter = createAction(types.clearFilter);

// files
export const updateFile = createAction(
  types.updateFile,
  (content, file) => updateContents(content, file)
);

export const updateFiles = createAction(types.updateFiles);

// rechallenge
export const executeChallenge = createAction(types.executeChallenge);

export const updateMain = createAction(types.updateMain);
export const frameMain = createAction(types.frameMain);
export const frameTests = createAction(types.frameTests);

export const runTests = createAction(types.runTests);
export const updateTests = createAction(types.updateTests);

export const initOutput = createAction(types.initOutput, loggerToStr);
export const updateOutput = createAction(types.updateOutput, loggerToStr);

export const checkChallenge = createAction(types.checkChallenge);

export const showProjectSubmit = createAction(types.showProjectSubmit);
let id = 0;
export const showChallengeComplete = createAction(
  types.showChallengeComplete,
  () => {
    id += 1;
    return id;
  }
);

export const submitChallenge = createAction(types.submitChallenge);
export const moveToNextChallenge = createAction(types.moveToNextChallenge);

// code storage
export const saveCode = createAction(types.saveCode);
export const loadCode = createAction(types.loadCode);
export const savedCodeFound = createAction(types.savedCodeFound);


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
