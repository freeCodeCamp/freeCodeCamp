import { Store } from 'thundercats';

const { createRegistrar, setter, fromMany } = Store;
const initValue = {
  title: 'Learn To Code | Free Code Camp',
  username: null,
  picture: null,
  points: 0,
  hikesApp: {
    hikes: [],
    // lecture state
    currentHike: {},
    showQuestions: false
  },
  jobsApp: {
    showModal: false
  }
};

export default Store({
  refs: {
    displayName: 'AppStore',
    value: initValue
  },
  init({ instance: store, args: [cat] }) {
    const register = createRegistrar(store);
    // app
    const {
      updateLocation,
      getUser,
      setTitle,
      toast
    } = cat.getActions('appActions');

    register(
      fromMany(
        setter(
          fromMany(
            getUser,
            setTitle
          )
        ),
        updateLocation,
        toast
      )
    );

    // hikes
    const {
      toggleQuestions,
      fetchHikes,
      resetHike,
      grabQuestion,
      releaseQuestion,
      moveQuestion,
      answer
    } = cat.getActions('hikesActions');

    register(
      fromMany(
        toggleQuestions,
        fetchHikes,
        resetHike,
        grabQuestion,
        releaseQuestion,
        moveQuestion,
        answer
      )
    );


    // jobs
    const {
      findJob,
      saveJobToDb,
      getJob,
      getJobs,
      openModal,
      closeModal,
      handleForm,
      getSavedForm,
      setPromoCode,
      applyCode,
      clearPromo
    } = cat.getActions('JobActions');

    register(
      fromMany(
        findJob,
        saveJobToDb,
        getJob,
        getJobs,
        openModal,
        closeModal,
        handleForm,
        getSavedForm,
        setPromoCode,
        applyCode,
        clearPromo
      )
    );
  }
});
