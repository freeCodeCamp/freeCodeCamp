import { Store } from 'thundercats';

const {
  createRegistrar,
  setter,
  transformer
} = Store;

export default Store()
  .refs({ displayName: 'JobsStore' })
  .init(({ instance: jobsStore, args: [cat] }) => {
    const { setJobs, findJob, setError } = cat.getActions('JobActions');
    const register = createRegistrar(jobsStore);
    register(setter(setJobs));
    register(transformer(findJob));
    register(setter(setError));
  });
