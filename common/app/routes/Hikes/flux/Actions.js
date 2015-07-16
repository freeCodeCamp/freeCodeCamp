import { helpers } from 'rx';
import { Actions } from 'thundercats';
import assign from 'object.assign';
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


  reEmit() {
    return helpers.identity;
  },

  fetchCurrentHike: null,
  setCurrentHike: null
})
  .refs({ displayName: 'HikesActions' })
  .init(({ instance }) => {
    // set up hikes fetching
    instance.fetchHikes.subscribe(
      ({ isPrimed }) => {
        if (isPrimed) {
          return instance.reEmit();
        }
        service.read('hikes', null, null, (err, hikes) => {
          if (err) {
            debug('an error occurred fetching hikes', err);
          }
          instance.setHikes(hikes);
        });
      }
    );

    instance.fetchCurrentHike.subscribe(({ isPrimed, dashedName }) => {
      if (isPrimed) {
        return instance.setCurrentHike({
          transformer: (oldState) => {
            const { hikes } = oldState;
            const filterRegex = new RegExp(dashedName, 'i');
            const potentialHike = hikes
              .filter(({ dashedName }) => {
                return filterRegex.test(dashedName);
              })
              .reduce((throwAway, hike) => {
                return hike;
              });

            // TODO(berks): do something when potential hike does not exist
            return assign({}, oldState, { currentHike: potentialHike });
          }
        });
      }
      service.read('hikes', { dashedName }, null, (err, hikes) => {
        if (err) {
          debug('error occurred fetching hike', err);
        }
        const [currentHike] = hikes;
        return instance.setCurrentHike({ set: { currentHike } });
      });
    });
  });
