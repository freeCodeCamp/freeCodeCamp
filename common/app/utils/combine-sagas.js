import { Observable } from 'rx';

export default function combineSagas(...sagas) {
  return (actions$, getState, deps) => {
    return Observable.merge(
      sagas.map(saga => saga(actions$, getState, deps))
    );
  };
}
