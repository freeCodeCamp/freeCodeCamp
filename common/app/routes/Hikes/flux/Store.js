import { Store } from 'thundercats';

const initialValue = {
  hikes: [],
  currentHike: {}
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance: hikeStore, args: [cat] }) => {

    let { setHikes } = cat.getActions('hikesActions');
    hikeStore.register(setHikes);

    return hikeStore;
  });
