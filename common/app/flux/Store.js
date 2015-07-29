import { Store } from 'thundercats';

const { createRegistrar, setter } = Store;
const initValue = {
  username: null,
  picture: null,
  points: 0
};

export default Store(initValue)
  .refs({ displayName: 'AppStore' })
  .init(({ instance: appStore, args: [cat] }) => {
    const { setUser } = cat.getActions('appActions');
    const register = createRegistrar(appStore);
    register(setter(setUser));

    return appStore;
  });
