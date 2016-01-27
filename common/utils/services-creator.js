import{ Observable, Disposable } from 'rx';
import Fetchr from 'fetchr';
import stampit from 'stampit';

function callbackObserver(observer) {
  return (err, res) => {
    if (err) {
      return observer.onError(err);
    }

    observer.onNext(res);
    observer.onCompleted();
  };
}


export default stampit({
  init({ args: [ options ] }) {
    this.services = new Fetchr(options);
  },
  methods: {
    readService$({ service: resource, params, config }) {
      return Observable.create(observer => {
        this.services.read(
          resource,
          params,
          config,
          callbackObserver(observer)
        );

        return Disposable.create(() => observer.dispose());
      });
    },
    createService$({ service: resource, params, body, config }) {
      return Observable.create(function(observer) {
        this.services.create(
          resource,
          params,
          body,
          config,
          callbackObserver(observer)
        );

        return Disposable.create(() => observer.dispose());
      });
    }
  }
});
