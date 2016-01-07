import { Actions } from 'thundercats';
import { Observable } from 'rx';


export default Actions({
  shouldBindMethods: true,
  refs: { displayName: 'AppActions' },

  setTitle(title = 'Learn To Code') {
    return { title: title + ' | Free Code Camp' };
  },

  getUser() {
    return this.readService$('user', null, null)
      .map(({
        username,
        picture,
        progressTimestamps = [],
        isFrontEndCert,
        isBackEndCert,
        isFullStackCert
      }) => {
        return {
          username,
          picture,
          points: progressTimestamps.length,
          isFrontEndCert,
          isBackEndCert,
          isFullStackCert
        };
      })
      .catch(err => Observable.just({ err }));
  },

  // routing
  goTo: null,
  goBack: null,
  updateLocation(location) {
    return {
      transform(state) {
        return { ...state, location };
      }
    };
  }
});
