//   () =>
//     (store: Store) =>
//     (next: (action: Action) => Object) =>
//     errSaga(action: Action) => Object|Void
export default () => ({ dispatch }) => next => {
  return function errorSaga(action) {
    if (!action.error) { return next(action); }

    console.error(action.error);
    dispatch({
      type: 'app.makeToast',
      payload: {
        type: 'error',
        title: 'Oops, something went wrong',
        message: `Something went wrong, please try again later`
      }
    });
  };
};
