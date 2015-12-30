import { Cat } from 'thundercats';
import stamp from 'stampit';
import { Disposable, Observable } from 'rx';

import { post$, postJSON$ } from '../utils/ajax-stream.js';
import { AppActions, AppStore } from './flux';
import { HikesActions } from './routes/Hikes/flux';
import { JobActions, JobsStore} from './routes/Jobs/flux';

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
              observer.onError(err);
              return observer.onCompleted();
            }

            observer.onNext(res);
            observer.onCompleted();
          });

          return Disposable.create(function() {
            observer.onCompleted();
          });
        });
      }
    }
  });

  cat.register(HikesActions.compose(serviceStamp, ajaxStamp), null, services);
  cat.register(AppActions.compose(serviceStamp), null, services);
  cat.register(AppStore, null, cat);


  cat.register(JobActions, null, cat, services);
  cat.register(JobsStore.compose(serviceStamp), null, cat);
});
