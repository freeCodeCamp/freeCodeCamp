import { Store } from 'thundercats';

const { fromMany, setter, transformer } = Store;
const initialValue = {
  hikes: [],
  isPrimed: false
};

export default Store(initialValue)
  .refs({ displayName: 'HikesStore'})
  .init(({ instance, args }) => {
    const [cat] = args;
    let {
      setHikes,
      reEmit
      // getHike
    } = cat.getActions('hikesActions');
    instance.register(
      fromMany(
        setter(setHikes),
        transformer(reEmit)
      )
    );
    return instance;
  });
