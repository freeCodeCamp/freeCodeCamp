import { Actions } from 'thundercats';
import debugFactory from 'debug';

const debug = debugFactory('freecc:app:actions');

export default Actions({
  setTitle(title = 'Learn To Code') {
    return { title: title + '| Free Code Camp' };
  },

  setUser({ username, picture, progressTimestamps = [] }) {
    return {
      username,
      picture,
      points: progressTimestamps.length
    };
  },

  getUser: null,
  goTo(route) {
    return { route };
  },
  goBack: null
})
  .refs({ displayName: 'AppActions' })
  .init(({ instance: appActions, args: [services] }) => {
    appActions.getUser.subscribe(({ isPrimed }) => {
      if (isPrimed) {
        debug('isPrimed');
        return;
      }
      services.read('user', null, null, (err, user) => {
        if (err) {
          return debug('user service error');
        }
        debug('user service returned successful');
        return appActions.setUser(user);
      });
    });
    return appActions;
  });
