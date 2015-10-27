import { Store } from 'thundercats';

const {
  createRegistrar,
  setter,
  transformer
} = Store;

export default Store({
  refs: {
    displayName: 'JobsStore',
    value: { showModal: false }
  },
  init({ instance: jobsStore, args: [cat] }) {
    const {
      setJobs,
      findJob,
      setError,
      openModal,
      closeModal,
      handleForm,
      setForm,
      setFollowersCount,
      setPromoCode,
      applyPromo
    } = cat.getActions('JobActions');
    const register = createRegistrar(jobsStore);
    register(setter(setJobs));
    register(setter(setError));
    register(setter(openModal));
    register(setter(closeModal));
    register(setter(setForm));
    register(setter(setPromoCode));
    register(setter(applyPromo));
    register(setter(setFollowersCount));

    register(transformer(findJob));
    register(handleForm);
  }
});
