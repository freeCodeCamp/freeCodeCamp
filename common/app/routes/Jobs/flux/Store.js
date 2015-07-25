import { Store } from 'thundercats';

const { setter } = Store;

export default Store()
  .refs({ displayName: 'JobsStore' })
  .init(({ instance: jobsStore, args: [cat] }) => {
    let jobActions = cat.getActions('JobActions');
    jobsStore.register(setter(jobActions.setJobs));
  });
