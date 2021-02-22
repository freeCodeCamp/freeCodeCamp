import { Observable, helpers } from 'rx';

export default function castToObservable(maybe) {
  if (Observable.isObservable(maybe)) {
    return maybe;
  }
  if (helpers.isPromise(maybe)) {
    return Observable.fromPromise(maybe);
  }
  return Observable.of(maybe);
}
