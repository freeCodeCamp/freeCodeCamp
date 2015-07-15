import { helpers } from 'rx';
import { Actions } from 'thundercats';
import debugFactory from 'debug';
import Fetchr from 'fetchr';

const debug = debugFactory('freecc:hikes:actions');
const service = new Fetchr({
  xhrPath: '/services'
});

export default Actions({
  // start fetching hikes
  fetchHikes: null,
  // set hikes on store
  setHikes(hikes) {
    return {
      currentHike: hikes[0],
      hikes,
      isPrimed: true
    };
  },

  getHike: null,

  reEmit() {
    return helpers.identity;
  },

  setCurrentHike(currentHike) {
    return { currentHike };
  }
})
  .refs({ displayName: 'HikesActions' })
  .init(({ instance }) => {
    // set up hikes fetching
    instance.fetchHikes.subscribe(
      ({ isPrimed }) => {
        if (isPrimed) {
          debug('already primed');
          return instance.reEmit();
        }
        debug('fetching');
        service.read('hikes', null, null, (err, hikes) => {
          if (err) {
            debug('an error occurred fetching hikes', err);
          }
          instance.setHikes(hikes);
        });
      }
    );

    instance.getHike.subscribe(({ isPrimed, hikes, dashedName }) => {
      if (isPrimed) {
        return instance.reEmit();
      }
      if (hikes && hikes.length) {
        const filterRegex = new RegExp(dashedName, 'i');
        const potentialHike = hikes
          .filter((hike) => {
            return filterRegex.test(hike.dashedName);
          })
          .reduce((sum, hike) => {
            return hike;
          });

        if (potentialHike) {
          return instance.setCurrentHike(potentialHike);
        }
      }
      service.read('hikes', { dashedName }, null, (err, hike) => {
        if (err) {
          debug('error occurred fetching hike', err);
        }
        return instance.setCurrentHike(hike);
      });
    });
  });
