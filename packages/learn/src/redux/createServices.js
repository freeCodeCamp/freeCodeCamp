import { Observable } from 'rxjs';
import Fetchr from 'fetchr';

function callbackObserver(observer) {
  return (err, res) => {
    if (err) {
      return observer.error(err);
    }

    observer.next(res);
    return observer.complete();
  };
}

export default function servicesCreator(options) {
  const services = new Fetchr(options);

  return {
    readService$({ service: resource, params = {} }) {
      return Observable.create(observer =>
        services
          .read(resource)
          .params(params)
          .end(callbackObserver(observer))
      );
    }
  };
}

//  createService$({ service: resource, params, body, config }) {
//    return Observable.create(observer => {
//      services.create(
//        resource,
//        params,
//        body,
//        config,
//        callbackObserver(observer)
//      );
//      return Subscription.create(() => observer.dispose());
//    });
//  }
