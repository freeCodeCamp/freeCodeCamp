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
  setHikes: null,

  getHike(id) {
    return { id };
  }
})
  .refs({ displayName: 'HikesActions' })
  .init(({ instance }) => {
    // set up hikes fetching
    // TODO(berks): check if store is already primed
    instance.fetchHikes.subscribe(
      () => {
        service.read('hikes', null, null, (err, hikes) => {
          if (err) {
            debug('an error occured fetching hikes', err);
          }
          instance.setHikes({ hikes });
        });
      }
    );
  });
