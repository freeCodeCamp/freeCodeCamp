import { Store } from 'thundercats';

const initialValue = {
  hikes: [],
  isPrimed: false
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance, args }) => {
    const [cat] = args;
    let {
      setHikes
      // getHike
    } = cat.getActions('hikesActions');
    instance.register(Store.setter(setHikes));

    return instance;
  });
