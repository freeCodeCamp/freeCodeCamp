import { Actions } from 'thundercats';
import assign from 'object.assign';
import debugFactory from 'debug';

const debug = debugFactory('freecc:hikes:actions');

function getCurrentHike(hikes =[{}], dashedName, currentHike) {
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
  .init(({ instance, args: [services] }) => {
    // set up hikes fetching
    instance.fetchHikes.subscribe(
      ({ isPrimed, dashedName }) => {
        if (isPrimed) {
          return instance.setHikes({
            transform: (oldState) => {
              const { hikes } = oldState;
              const currentHike = getCurrentHike(
                hikes,
                dashedName,
                oldState.currentHike
              );
              return assign({}, oldState, { currentHike });
            }
          });
        }
        services.read('hikes', null, null, (err, hikes) => {
          if (err) {
            debug('an error occurred fetching hikes', err);
          }
          instance.setHikes({
            set: {
              hikes: hikes,
              currentHike: getCurrentHike(hikes, dashedName)
            }
          });
        });
      }
    );
  });
