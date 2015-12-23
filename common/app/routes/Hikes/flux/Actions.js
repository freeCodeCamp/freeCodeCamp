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
        const hikesApp = {
          hikes,
          currentHike: getCurrentHike(hikes, dashedName)
        };

        return {
          transform(oldState) {
            return Object.assign({}, oldState, { hikesApp });
          }
        };
      })
      .catch(err => {
        console.error(err);
      });
  }
});
