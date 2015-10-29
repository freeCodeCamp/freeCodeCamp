import { Store } from 'thundercats';

const initialValue = {
  hikes: [],
  currentHike: {}
};

export default Store({
  refs: {
    displayName: 'HikesStore',
    value: initialValue
  },
  init({ instance: hikeStore, args: [cat] }) {

    let { setHikes } = cat.getActions('hikesActions');
    hikeStore.register(setHikes);

    return hikeStore;
  }
});
