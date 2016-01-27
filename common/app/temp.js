import stamp from 'stampit';
import { post$, postJSON$ } from '../utils/ajax-stream.js';

  const serviceStamp = stamp({
    methods: {
      readService$(resource, params, config) {

        return Observable.create(function(observer) {
          services.read(resource, params, config, (err, res) => {
            if (err) {
              return observer.onError(err);
            }

            observer.onNext(res);
            observer.onCompleted();
          });

          return Disposable.create(function() {
            observer.dispose();
          });
        });
      },
      createService$(resource, params, body, config) {
        return Observable.create(function(observer) {
          services.create(resource, params, body, config, (err, res) => {
            if (err) {
              return observer.onError(err);
            }

            observer.onNext(res);
            observer.onCompleted();
          });

          return Disposable.create(function() {
            observer.dispose();
          });
        });
      }
    }
  });
