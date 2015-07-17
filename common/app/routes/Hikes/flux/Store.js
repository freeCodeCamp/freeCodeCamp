import { Store } from 'thundercats';

const { fromMany } = Store;
const initialValue = {
  hikes: [],
  currentHike: {}
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance, args }) => {
    const [cat] = args;
    let {
      setHikes,
      setCurrentHike
    } = cat.getActions('hikesActions');
    instance.register(fromMany(setHikes, setCurrentHike));

    return instance;
  });
