import { Observable } from 'rx';
import { push } from 'react-router-redux';

import types from './types';
import { getMouse } from './utils';

import { makeToast, updatePoints } from '../../../redux/actions';
import { hikeCompleted, goToNextHike } from './actions';
import { postJSON$ } from '../../../../utils/ajax-stream';
import { getCurrentHike } from './selectors';

function handleAnswer(getState, dispatch, next, action) {
  const {
    e,
    answer,
    userAnswer,
    info,
    threshold
  } = action.payload;

  const state = getState();
  const { id, name, challengeType, tests } = getCurrentHike(state);
  const {
    app: { isSignedIn },
    hikesApp: {
      currentQuestion,
      delta = [ 0, 0 ]
    }
  } = state;

  let finalAnswer;
  // drag answer, compute response
  if (typeof userAnswer === 'undefined') {
    const [positionX] = getMouse(e, delta);

    // question released under threshold
    if (Math.abs(positionX) < threshold) {
      return next(action);
    }

    if (positionX >= threshold) {
      finalAnswer = true;
    }

    if (positionX <= -threshold) {
      finalAnswer = false;
    }
  } else {
    finalAnswer = userAnswer;
  }

  // incorrect question
  if (answer !== finalAnswer) {
    if (info) {
      dispatch(makeToast({
        title: 'Hint',
        message: info,
        type: 'info'
      }));
    }

    return Observable
      .just({ type: types.endShake })
      .delay(500)
      .startWith({ type: types.startShake })
      .doOnNext(dispatch);
  }

  if (tests[currentQuestion]) {
    return Observable
      .just({ type: types.goToNextQuestion })
      .delay(300)
      .startWith({ type: types.primeNextQuestion })
      .doOnNext(dispatch);
  }

  let updateUser$;
  if (isSignedIn) {
    const body = { id, name, challengeType: +challengeType };
    updateUser$ = postJSON$('/completed-challenge', body)
      // if post fails, will retry once
      .retry(3)
      .flatMap(({ alreadyCompleted, points }) => {
        return Observable.of(
          makeToast({
              message:
                'Challenge saved.' +
                (alreadyCompleted ? '' : ' First time Completed!'),
              title: 'Saved',
              type: 'info'
          }),
          updatePoints(points),
        );
      })
      .catch(error => {
        return Observable.just({
          type: 'app.error',
          error
        });
      });
  } else {
    updateUser$ = Observable.empty();
  }

  const challengeCompleted$ = Observable.of(
    goToNextHike(),
    makeToast({
      title: 'Congratulations!',
      message: 'Hike completed.' + (isSignedIn ? ' Saving...' : ''),
      type: 'success'
    })
  );

  return Observable.merge(challengeCompleted$, updateUser$)
    .delay(300)
    .startWith(hikeCompleted(finalAnswer))
    .catch(error => Observable.just({
      type: 'error',
      error
    }))
    // end with action so we know it is ok to transition
    .doOnCompleted(() => dispatch({ type: types.transitionHike }))
    .doOnNext(dispatch);
}

export default () => ({ getState, dispatch }) => next => {
  return function answerSaga(action) {
    if (action.type === types.answerQuestion) {
      return handleAnswer(getState, dispatch, next, action);
    }

    // let goToNextQuestion hit reducers first
    const result = next(action);
    if (action.type === types.transitionHike) {
      const { hikesApp: { currentHike } } = getState();
      // if no next hike currentHike will equal '' which is falsy
      if (currentHike) {
        dispatch(push(`/videos/${currentHike}`));
      } else {
        dispatch(push('/map'));
      }
    }

    return result;
  };
};
