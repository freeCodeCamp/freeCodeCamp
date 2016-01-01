import _ from 'lodash';
import { Observable } from 'rx';
import { Actions } from 'thundercats';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes:actions');

function getCurrentHike(hikes = [{}], dashedName, currentHike) {
  if (!dashedName) {
    debug('no dashedName');
    return hikes[0];
  }

  const filterRegex = new RegExp(dashedName, 'i');
  if (currentHike && filterRegex.test(currentHike.dashedName)) {
    return currentHike;
  }

  debug('setting new hike');
  return hikes
    .filter(({ dashedName }) => {
      return filterRegex.test(dashedName);
    })
    .reduce((throwAway, hike) => {
      return hike;
    }, currentHike || {});
}

function findNextHike(hikes, id) {
  if (!id) {
    debug('find next hike no id provided');
    return hikes[0];
  }
  const currentIndex = _.findIndex(hikes, ({ id: _id }) => _id === id);
  return hikes[currentIndex + 1] || hikes[0];
}

function releaseQuestion(state) {
  const oldHikesApp = state.hikesApp;
  const hikesApp = {
    ...oldHikesApp,
    isPressed: false,
    delta: [0, 0],
    mouse: oldHikesApp.isCorrect ?
      oldHikesApp.mouse :
      [0, 0]
  };

  return { ...state, hikesApp };
}

export default Actions({
  refs: { displayName: 'HikesActions' },
  shouldBindMethods: true,
  fetchHikes({ isPrimed, dashedName }) {
    if (isPrimed) {
      return {
        transform: (state) => {

          const { hikesApp: oldState } = state;
          const currentHike = getCurrentHike(
            oldState.hikes,
            dashedName,
            oldState.currentHike
          );

          const hikesApp = { ...oldState, currentHike };
          return Object.assign({}, state, { hikesApp });
        }
      };
    }

    return this.readService$('hikes', null, null)
      .map(hikes => {
        const currentHike = getCurrentHike(hikes, dashedName);
        return {
          transform(state) {
            const hikesApp = { ...state.hikesApp, currentHike, hikes };
            return { ...state, hikesApp };
          }
        };
      })
      .catch(err => {
        console.error(err);
      });
  },

  toggleQuestions() {
    return {
      transform(state) {
        const hikesApp = { ...state.hikesApp, showQuestions: true };
        return { ...state, hikesApp };
      }
    };
  },

  hideInfo() {
    return {
      transform(state) {
        const hikesApp = { ...state.hikesApp, showInfo: false };
        return { ...state, hikesApp };
      }
    };
  },

  grabQuestion({ pressX, pressY, pageX, pageY }) {
    const dx = pageX - pressX;
    const dy = pageY - pressY;

    const delta = [dx, dy];
    const mouse = [pageX - dx, pageY - dy];

    return {
      transform(state) {
        const hikesApp = { ...state.hikesApp, isPressed: true, delta, mouse };
        return { ...state, hikesApp };
      }
    };
  },

  releaseQuestion() {
    return { transform: releaseQuestion };
  },

  moveQuestion(mouse) {
    return {
      transform(state) {
        const hikesApp = { ...state.hikesApp, mouse };
        return { ...state, hikesApp };
      }
    };
  },

  answer({
    answer,
    userAnswer,
    props: {
      hike: { id, name, tests, challengeType },
      currentQuestion,
      username
    }
  }) {

    // incorrect question
    if (answer !== userAnswer) {
      const startShake = {
        transform(state) {
          const hikesApp = { ...state.hikesApp, showInfo: true, shake: true };
          return { ...state, hikesApp };
        }
      };

      const removeShake = {
        transform(state) {
          const hikesApp = { ...state.hikesApp, shake: false };
          return { ...state, hikesApp };
        }
      };

      return Observable
        .just(removeShake)
        .delay(500)
        .startWith({ transform: releaseQuestion }, startShake);
    }

    // move to next question
    // index 0
    if (tests[currentQuestion]) {

      return Observable.just({
        transform(state) {
          const hikesApp = {
            ...state.hikesApp,
            mouse: [0, 0]
          };
          return { ...state, hikesApp };
        }
      })
        .delay(300)
        .startWith({
          transform(state) {

            const hikesApp = {
              ...state.hikesApp,
              currentQuestion: currentQuestion + 1,
              mouse: [ userAnswer ? 1000 : -1000, 0]
            };

            return { ...state, hikesApp };
          }
        });
    }

    // challenge completed
    const optimisticSave = username ?
      this.post$('/completed-challenge', { id, name, challengeType }) :
      Observable.just(true);

    const correctAnswer = {
      transform(state) {
        const hikesApp = {
          ...state.hikesApp,
          isCorrect: true,
          isPressed: false,
          delta: [0, 0],
          mouse: [ userAnswer ? 1000 : -1000, 0]
        };
        return {
          ...state,
          hikesApp
        };
      }
    };

    return Observable.just({
        transform(state) {
          const { hikes, currentHike: { id } } = state.hikesApp;
          const currentHike = findNextHike(hikes, id);

          // go to next route
          state.location = {
            action: 'PUSH',
            pathname: currentHike && currentHike.dashedName ?
              `/hikes/${ currentHike.dashedName }` :
              '/hikes'
          };

          const hikesApp = {
            ...state.hikesApp,
            currentHike,
            showQuestions: false,
            currentQuestion: 1,
            mouse: [0, 0]
          };

          return {
            ...state,
            points: username ? state.points + 1 : state.points,
            hikesApp
          };
        },
        optimistic: optimisticSave
      })
      .delay(300)
      .startWith(correctAnswer)
      .catch(err => {
        console.error(err);
        return Observable.just({
          set: {
            error: err
          }
        });
      });
  }
});
