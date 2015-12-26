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
        state.hikesApp.showQuestions = !state.hikesApp.showQuestions;
        return Object.assign({}, state);
      }
    };
  },

  completedHike(data = {}) {
    return this.postJSON$('/completed-challenge', data)
      .map(() => {
        return {
          transform(state) {
            const { hikes, currentHike: { id } } = state.hikesApp;
            const currentHike = findNextHike(hikes, id);

            // go to next route
            state.route = currentHike && currentHike.dashedName ?
              `/hikes/${ currentHike.dashedName }` :
              '/hikes';

            const hikesApp = { ...state.hikesApp, currentHike };
            return { ...state, hikesApp };
          }
        };
      })
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
