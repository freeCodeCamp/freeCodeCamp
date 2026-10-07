// @flow strict-local

import invariant from 'assert';

export type Deferred<T> = {|
  resolve(T): void,
  reject(mixed): void,
|};

export function makeDeferredWithPromise<T>(): {|
  deferred: Deferred<T>,
  promise: Promise<T>,
|} {
  let deferred: ?Deferred<T>;
  let promise = new Promise<T>((resolve, reject) => {
    deferred = {resolve, reject};
  });

  // Promise constructor callback executes synchronously, so this is defined
  invariant(deferred != null);

  return {deferred, promise};
}
