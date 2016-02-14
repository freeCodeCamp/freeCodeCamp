import { Disposable, Observable } from 'rx';

export function location$(history) {
  return Observable.create(function(observer) {
    const dispose = history.listen(function(location) {
      observer.onNext(location);
    });

    return Disposable.create(() => {
      dispose();
    });
  });
}

const emptyLocation = {
  pathname: '',
  search: '',
  hash: ''
};

let prevKey;
let isSyncing = false;
export default function historySaga(
  history,
  updateLocation,
  goTo,
  goBack,
  routerState$
) {
  routerState$.subscribe(
    location => {

      if (!location) {
        return null;
      }

      // store location has changed, update history
      if (!location.key || location.key !== prevKey) {
        isSyncing = true;
        history.transitionTo({ ...emptyLocation, ...location });
        isSyncing = false;
      }
    }
  );

  location$(history)
    .doOnNext(location => {
      prevKey = location.key;

      if (isSyncing) {
        return null;
      }

      return updateLocation(location);
    })
    .subscribe(() => {});

  goTo
    .doOnNext((route = '/') => {
      history.push(route);
    })
    .subscribe(() => {});

  goBack
    .doOnNext(() => {
      history.goBack();
    })
    .subscribe(() => {});
}
