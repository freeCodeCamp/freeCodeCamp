import { makeToast } from '../../common/app/Toasts/redux';

export default function errorSaga(actions) {
  return actions.filter(({ error }) => !!error)
    .map(({ error }) => error)
    .doOnNext(error => console.error(error))
    .map(() => makeToast({
      message: 'Something went wrong, please try again later'
    }));
}
