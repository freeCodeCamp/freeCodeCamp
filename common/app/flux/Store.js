import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0
};

export default Store({
  refs: {
    displayName: 'AppStore',
    value: initValue
  },
  init({ instance: appStore, args: [cat] }) {
    const { goTo, setUser, setTitle } = cat.getActions('appActions');
    const register = createRegistrar(appStore);

    register(setter(fromMany(setUser, setTitle, goTo)));

    return appStore;
  }
});
