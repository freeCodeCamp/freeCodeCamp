import { Store } from 'thundercats';

const initialValue = {
  hikes: [],
  currentHike: {}
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance, args }) => {
    const [cat] = args;

    let { setHikes } = cat.getActions('hikesActions');
    instance.register(setHikes);

    return instance;
  });
