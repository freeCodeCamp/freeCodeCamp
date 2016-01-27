import { createAction } from 'redux-actions';

import types from './types';
import { getMouse } from './utils';


// fetchHikes(dashedName?: String) => Action
// used with fetchHikesSaga
export const fetchHikes = createAction(types.fetchHikes);
// fetchHikesCompleted(hikes: Object) => Action
// hikes is a normalized response from server
// called within fetchHikesSaga
export const fetchHikesCompleted = createAction(
  types.fetchHikesCompleted,
  (hikes, currentHike) => ({ hikes, currentHike })
);

export const toggleQuestion = createAction(types.toggleQuestion);

export const grabQuestions = createAction(types.grabQuestions, e => {
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

export const releaseQuestion = createAction(types.releaseQuestions);
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
export const answer = createAction(types.answer);

export const startShake = createAction(types.startShake);
export const endShake = createAction(types.primeNextQuestion);

export const goToNextQuestion = createAction(types.goToNextQuestion);

export const hikeCompleted = createAction(types.hikeCompleted);
export const goToNextHike = createAction(types.goToNextHike);
