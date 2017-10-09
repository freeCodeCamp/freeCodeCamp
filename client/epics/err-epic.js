import { makeToast } from '../../common/app/Toasts/redux';

export default function errorEpic(actions) {
  return actions.filter(({ error }) => !!error)
    .map(({ error }) => error)
    .doOnNext(error => console.error(error))
    .map((error) => {
      // Get data according to normalized ajax error.
      const data = error.xhr.responseText ? JSON.parse(error.xhr.responseText)
      : {};
      return makeToast({
        message: data.message ? data.message :
      'Something went wrong, please try again later'
      });
    });
}
