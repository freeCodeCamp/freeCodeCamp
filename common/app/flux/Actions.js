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
  // goTo(path: String) => path
  goTo: null,

  // goBack(arg?) => arg?
  goBack: null,

  // toast(args: { type?: String, message: String, title: String }) => args
  toast(args) {
    return {
      transform(state) {
        const id = state.toast && state.toast.id ? state.toast.id : 0;
        const toast = { ...args, id: id + 1 };
        return { ...state, toast };
      }
    };
  },

  // updateLocation(location: { pathname: String }) => location
  updateLocation(location) {
    return {
      transform(state) {
        return { ...state, location };
      }
    };
  }
});
