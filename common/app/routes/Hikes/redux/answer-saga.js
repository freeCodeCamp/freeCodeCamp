import { Observable } from 'rx';
// import { routeActions } from 'react-simple-router';

import types from './types';
import { getMouse } from './utils';

import { makeToast, updatePoints } from '../../../redux/actions';
import { hikeCompleted, goToNextHike } from './actions';
import { postJSON$ } from '../../../../utils/ajax-stream';

export default () => ({ getState, dispatch }) => next => {
  return function answerSaga(action) {
    if (types.answer !== action.type) {
      return next(action);
    }

    const {
      e,
      answer,
      userAnswer,
      info,
      threshold
    } = action.payload;

    const {
      app: { isSignedIn },
      hikesApp: {
        currentQuestion,
        currentHike: { id, name, challengeType },
        tests = [],
        delta = [ 0, 0 ]
      }
    } = getState();

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
        dispatch({
          type: 'makeToast',
          payload: {
            title: 'Hint',
            message: info,
            type: 'info'
          }
        });
      }

      return Observable
        .just({ type: types.removeShake })
        .delay(500)
        .startWith({ type: types.startShake })
        .doOnNext(dispatch);
    }

    if (tests[currentQuestion]) {
      return Observable
        .just({ type: types.goToNextQuestion })
        .delay(300)
        .startWith({ type: types.primeNextQuestion });
    }

    let updateUser$;
    if (isSignedIn) {
      const body = { id, name, challengeType };
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
            type: 'error',
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
      }));
  };
};
