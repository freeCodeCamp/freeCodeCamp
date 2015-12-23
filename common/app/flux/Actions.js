import { Actions } from 'thundercats';
import debugFactory from 'debug';

const debug = debugFactory('freecc:app:actions');

export default Actions({
  shouldBindMethods: true,
  refs: { displayName: 'AppActions' },

  setTitle(title = 'Learn To Code') {
    return { title: title + ' | Free Code Camp' };
  },

  getUser({ isPrimed }) {
    if (isPrimed) {
      return null;
    }

    debug('fetching user data');
    return this.readService$('user', null, null)
      .map(function({
        username,
        picture,
        progressTimestamps = [],
        isFrontEndCert,
        isFullStackCert
      }) {
        return {
          username,
          picture,
          points: progressTimestamps.length,
          isFrontEndCert,
          isFullStackCert
        };
      })
      .catch(err => {
        console.error(err);
      });
  },

  updateRoute(route) {
    return { route };
  },
  goBack: null
});
