import { Observable } from 'rx';
import debug from 'debug';

const log = debug('redux-epic:waitForEpics');

// waitForEpics(epicMiddleware: EpicMiddleware) => Observable[Void]
export default function waitForEpics(epicMiddleware) {
  return Observable.defer(() => {
    log('calling actions onCompleted');
    epicMiddleware.end();
    return Observable.merge(epicMiddleware);
  })
    .last({ defaultValue: null })
    .map(() => epicMiddleware.restart());
}
