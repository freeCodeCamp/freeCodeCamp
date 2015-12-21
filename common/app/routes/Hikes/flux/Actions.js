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
  // start fetching hikes
  fetchHikes: null,
  // set hikes on store
  setHikes: null
})
  .refs({ displayName: 'HikesActions' })
  .init(({ instance: hikeActions, args: [services] }) => {
    // set up hikes fetching
    hikeActions.fetchHikes.subscribe(
      ({ isPrimed, dashedName }) => {
        if (isPrimed) {
          return hikeActions.setHikes({
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
          });
        }

        services.read('hikes', null, null, (err, hikes) => {
          if (err) {
            return console.error(err);
          }

          const hikesApp = {
            hikes,
            currentHike: getCurrentHike(hikes, dashedName)
          };

          hikeActions.setHikes({
            transform(oldState) {
              return Object.assign({}, oldState, { hikesApp });
            }
          });
        });
      }
    );
  });
