import { Observable } from 'rx';
import types from './types';
import { getMouse } from '../utils';

import { submitChallenge, videoCompleted } from './actions';
import { createErrorObservable } from '../../../redux/actions';
import { makeToast } from '../../../toasts/redux/actions';
import { challengeSelector } from './selectors';

export default function answerSaga(action$, getState) {
  return action$
    .filter(action => action.type === types.answerQuestion)
    .flatMap(({
      payload: {
        e,
        answer,
        userAnswer,
        info,
        threshold
      }
    }) => {
      const state = getState();
      const {
        challenge: { tests }
      } = challengeSelector(state);
      const {
        challengesApp: {
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
            message: info,
            timeout: 5000
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


      return Observable.just(submitChallenge())
        .delay(300)
        // moves question to the appropriate side of the screen
        .startWith(videoCompleted(finalAnswer))
        // end with action so we know it is ok to transition
        .concat(Observable.just({ type: types.transitionHike }))
        .catch(createErrorObservable);
    });
}
