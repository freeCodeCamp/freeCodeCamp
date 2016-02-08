import { Cat } from 'thundercats';
import stamp from 'stampit';
import { Disposable, Observable } from 'rx';

import { post$, postJSON$ } from '../utils/ajax-stream.js';
import { AppActions, AppStore } from './flux';
import HikesActions from './routes/Hikes/flux';
import JobActions from './routes/Jobs/flux';

const ajaxStamp = stamp({
  methods: {
    postJSON$,
    post$
  }
});

export default Cat().init(({ instance: cat, args: [services] }) => {
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

  cat.register(HikesActions.compose(serviceStamp, ajaxStamp), null, services);
  cat.register(AppActions.compose(serviceStamp), null, services);
  cat.register(
    JobActions.compose(serviceStamp, ajaxStamp),
    null,
    cat,
    services
  );
  cat.register(AppStore, null, cat);
});
