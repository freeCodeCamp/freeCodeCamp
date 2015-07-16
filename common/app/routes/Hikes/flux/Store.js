import { Store } from 'thundercats';

const { fromMany, setter, transformer } = Store;
const initialValue = {
  hikes: [],
  isPrimed: false,
  currentHike: {}
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance, args }) => {
    const [cat] = args;
    let {
      setHikes,
      setCurrentHike,
      reEmit
    } = cat.getActions('hikesActions');
    instance.register(
      fromMany(
        setter(setHikes),
        setCurrentHike,
        transformer(reEmit)
      )
    );
    return instance;
  });
