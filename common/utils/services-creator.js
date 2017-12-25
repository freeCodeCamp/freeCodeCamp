import { Observable, Disposable } from 'rx';
import Fetchr from 'fetchr';

function callbackObserver(observer) {
  return (err, res) => {
    if (err) {
      return observer.onError(err);
    }

    observer.onNext(res);
    return observer.onCompleted();
  };
}

export default function servicesCreator(options) {
  const services = new Fetchr(options);
  function readService$({ service: resource, params, config }) {
    return Observable.create(observer => {
      services.read(
        resource,
        params,
        config,
        callbackObserver(observer)
      );
      return Disposable.create(() => observer.dispose());
    });
  }
  function createService$({ service: resource, params, body, config }) {
    return Observable.create(observer => {
      services.create(
        resource,
        params,
        body,
        config,
        callbackObserver(observer)
      );
      return Disposable.create(() => observer.dispose());
    });
  }
  return {
    readService$,
    createService$
  };
}
