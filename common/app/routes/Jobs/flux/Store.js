import { Store } from 'thundercats';

const {
  createRegistrar,
  setter,
  transformer
} = Store;

export default Store({ showModal: false })
  .refs({ displayName: 'JobsStore' })
  .init(({ instance: jobsStore, args: [cat] }) => {
    const {
      setJobs,
      findJob,
      setError,
      openModal,
      closeModal
    } = cat.getActions('JobActions');
    const register = createRegistrar(jobsStore);
    register(setter(setJobs));
    register(transformer(findJob));
    register(setter(setError));
    register(setter(openModal));
    register(setter(closeModal));
  });
