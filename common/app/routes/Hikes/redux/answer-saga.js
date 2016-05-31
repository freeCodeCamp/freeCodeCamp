import { Observable } from 'rx';
import { push } from 'react-router-redux';

import types from './types';
import { getMouse } from './utils';

import {
  createErrorObservable,
  makeToast,
  updatePoints
} from '../../../redux/actions';
import { hikeCompleted, goToNextHike } from './actions';
import { postJSON$ } from '../../../../utils/ajax-stream';
import { getCurrentHike } from './selectors';

function handleAnswer(action, getState) {
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
    app: { isSignedIn, csrfToken },
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
      return Observable.just(null);
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
    let infoAction;
    if (info) {
      infoAction = makeToast({
        title: 'Hint',
        message: info,
        type: 'info'
      });
    }

    return Observable
      .just({ type: types.endShake })
      .delay(500)
      .startWith(infoAction, { type: types.startShake });
  }

  if (tests[currentQuestion]) {
    return Observable
      .just({ type: types.goToNextQuestion })
      .delay(300)
      .startWith({ type: types.primeNextQuestion });
  }

  let updateUser$;
  if (isSignedIn) {
    const body = { id, name, challengeType: +challengeType, _csrf: csrfToken };
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
      .catch(createErrorObservable);
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
    .catch(createErrorObservable)
    // end with action so we know it is ok to transition
    .concat(Observable.just({ type: types.transitionHike }));
}

export default function answerSaga(action$, getState) {
  return action$
    .filter(action => {
      return action.type === types.answerQuestion ||
        action.type === types.transitionHike;
    })
    .flatMap(action => {
      if (action.type === types.answerQuestion) {
        return handleAnswer(action, getState);
      }

      const { hikesApp: { currentHike } } = getState();
      // if no next hike currentHike will equal '' which is falsy
      if (currentHike) {
        return Observable.just(push(`/videos/${currentHike}`));
      }
      return Observable.just(push('/map'));
    });
}
