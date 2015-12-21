import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0,
  hikesApp: {
    hikes: [],
    currentHikes: {}
  }
};

export default Store({
  refs: {
    displayName: 'AppStore',
    value: initValue
  },
  init({ instance: appStore, args: [cat] }) {
    const { updateRoute, setUser, setTitle } = cat.getActions('appActions');
    const register = createRegistrar(appStore);
    let { setHikes } = cat.getActions('hikesActions');

    // app
    register(setter(fromMany(setUser, setTitle, updateRoute)));

    // hikes
    register(setHikes);

    return appStore;
  }
});
