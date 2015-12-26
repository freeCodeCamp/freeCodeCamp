import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0,
  hikesApp: {
    hikes: [],
    currentHikes: {},
    currentQuestion: 1,
    showQuestion: false
  }
};

export default Store({
  refs: {
    displayName: 'AppStore',
    value: initValue
  },
  init({ instance: appStore, args: [cat] }) {
    const { updateRoute, getUser, setTitle } = cat.getActions('appActions');
    const register = createRegistrar(appStore);
    const { toggleQuestions, fetchHikes } = cat.getActions('hikesActions');

    // app
    register(setter(fromMany(getUser, setTitle, updateRoute)));

    // hikes
    register(fromMany(fetchHikes, toggleQuestions));

    return appStore;
  }
});
