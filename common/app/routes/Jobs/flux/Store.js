import { Store } from 'thundercats';

export default Store()
  .refs({ displayName: 'JobsStore' })
  .init(({ instane: jobsStore, args: [cat] }) => {
    let jobsActions = cat.getActions('JobsActions');
    jobsStore.register(jobsActions);
  });
