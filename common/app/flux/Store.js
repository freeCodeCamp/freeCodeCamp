import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0,
  hikesApp: {
    hikes: [],
    // lecture state
    currentHike: {},
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
    const {
      toggleQuestions,
      fetchHikes,
      hideInfo,
      grabQuestion,
      releaseQuestion,
      moveQuestion,
      answer
    } = cat.getActions('hikesActions');

    // app
    register(setter(fromMany(getUser, setTitle, updateRoute)));

    // hikes
    register(
      fromMany(
        toggleQuestions,
        fetchHikes,
        hideInfo,
        grabQuestion,
        releaseQuestion,
        moveQuestion,
        answer
      )
    );

    return appStore;
  }
});
