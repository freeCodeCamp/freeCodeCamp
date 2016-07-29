export default function errorSaga(action$) {
  return action$
    .filter(({ error }) => !!error)
    .map(({ error }) => error)
    .doOnNext(error => console.error(error))
    .map(() => ({
      type: 'app.makeToast',
      payload: {
        type: 'error',
        title: 'Oops, something went wrong',
        message: 'Something went wrong, please try again later'
      }
    }));
}
