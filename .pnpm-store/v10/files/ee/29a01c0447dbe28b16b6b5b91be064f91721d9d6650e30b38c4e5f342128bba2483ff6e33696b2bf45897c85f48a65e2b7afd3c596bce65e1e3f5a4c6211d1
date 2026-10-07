import { __assign } from './_virtual/_tslib.js';

var defaultWaitForOptions = {
  timeout: 10000 // 10 seconds

};
/**
 * Subscribes to an actor ref and waits for its emitted value to satisfy
 * a predicate, and then resolves with that value.
 * Will throw if the desired state is not reached after a timeout
 * (defaults to 10 seconds).
 *
 * @example
 * ```js
 * const state = await waitFor(someService, state => {
 *   return state.hasTag('loaded');
 * });
 *
 * state.hasTag('loaded'); // true
 * ```
 *
 * @param actorRef The actor ref to subscribe to
 * @param predicate Determines if a value matches the condition to wait for
 * @param options
 * @returns A promise that eventually resolves to the emitted value
 * that matches the condition
 */

function waitFor(actorRef, predicate, options) {
  var resolvedOptions = __assign(__assign({}, defaultWaitForOptions), options);

  return new Promise(function (res, rej) {
    var done = false;

    if (process.env.NODE_ENV !== 'production' && resolvedOptions.timeout < 0) {
      console.error('`timeout` passed to `waitFor` is negative and it will reject its internal promise immediately.');
    }

    var handle = resolvedOptions.timeout === Infinity ? undefined : setTimeout(function () {
      sub.unsubscribe();
      rej(new Error("Timeout of ".concat(resolvedOptions.timeout, " ms exceeded")));
    }, resolvedOptions.timeout);

    var dispose = function () {
      clearTimeout(handle);
      done = true;
      sub === null || sub === void 0 ? void 0 : sub.unsubscribe();
    };

    var sub = actorRef.subscribe({
      next: function (emitted) {
        if (predicate(emitted)) {
          dispose();
          res(emitted);
        }
      },
      error: function (err) {
        dispose();
        rej(err);
      },
      complete: function () {
        dispose();
        rej(new Error("Actor terminated without satisfying predicate"));
      }
    });

    if (done) {
      sub.unsubscribe();
    }
  });
}

export { waitFor };
