import { makeToast } from '../../common/app/toasts/redux/actions';

export default function errorSaga(action$) {
  return action$
    .filter(({ error }) => !!error)
    .map(({ error }) => error)
    .doOnNext(error => console.error(error))
    .map(() => makeToast({
      message: 'Something went wrong, please try again later'
    }));
}
