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
      hikes,
      isPrimed: true
    };
  },

  getHike(id) {
    return { id };
  },

  reEmit() {
    return helpers.identity;
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
  });
