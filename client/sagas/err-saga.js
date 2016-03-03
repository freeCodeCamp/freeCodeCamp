//   () =>
//     (store: Store) =>
//     (next: (action: Action) => Object) =>
//     errSaga(action: Action) => Object|Void
export default () => ({ dispatch }) => next => {
  return function errorSaga(action) {
    const result = next(action);
    if (!action.error) { return result; }

    console.error(action.error);
    return dispatch({
      type: 'app.makeToast',
      payload: {
        type: 'error',
        title: 'Oops, something went wrong',
        message: 'Something went wrong, please try again later'
      }
    });
  };
};
