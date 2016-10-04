document.addEventListener('DOMContentLoaded', function() {
  var common = parent.__common;
  var frameId = window.__frameId;
  var frameReady = common[frameId + 'Ready$'] || { onNext() {} };
  var Rx = document.Rx;
  var helpers = Rx.helpers;
  var chai = parent.chai;
  var source = document.__source;

  document.__getJsOutput = function getJsOutput() {
    if (window.__err || !common.shouldRun()) {
      return window.__err || 'source disabled';
    }
    let output;
    try {
      /* eslint-disable no-eval */
      output = eval(source);
      /* eslint-enable no-eval */
    } catch (e) {
      output = e.message + '\n' + e.stack;
      window.__err = e;
    }
    return output;
  };

  document.__runTests$ = function runTests$(tests = []) {
    /* eslint-disable no-unused-vars */
    const editor = { getValue() { return source; } };
    const code = source;
    /* eslint-enable no-unused-vars */
    if (window.__err) {
      return Rx.Observable.throw(window.__err);
    }

    // Iterate through the test one at a time
    // on new stacks
    return Rx.Observable.from(tests, null, null, Rx.Scheduler.default)
      // add delay here for firefox to catch up
      .delay(200)
      /* eslint-disable no-unused-vars */
      .flatMap(({ text, testString }) => {
        const assert = chai.assert;
      /* eslint-enable no-unused-vars */
        const newTest = { text, testString };
        let test;
        let __result;
        try {
          /* eslint-disable no-eval */
          // eval test string to actual JavaScript
          // This return can be a function
          // i.e. function() { assert(true, 'happy coding'); }
          test = eval(testString);
          /* eslint-enable no-eval */
          if (typeof test === 'function') {

            // we know that the test eval'ed to a function
            // the function could expect a callback
            // or it could return a promise/observable
            // or it could still be sync
            if (test.length === 0) {
              // a function with length 0 means it expects 0 args
              // We call it and store the result
              // This result may be a promise or an observable or undefined
              __result = test();
            } else {
              // if function takes arguments
              // we expect it to be of the form
              // function(cb) { /* ... */ }
              // and callback has the following signature
              // function(err) { /* ... */ }
              __result = Rx.Observable.fromNodeCallback(test)();
            }

            if (helpers.isPromise(__result)) {
              // turn promise into an observable
              __result = Rx.Observable.fromPromise(__result);
            }
          } else {
            // test is not a function
            // fill result with for compatibility
            __result = Rx.Observable.of(null);
          }
        } catch (e) {
          // something threw an uncaught error
          // we catch here and wrap it in an observable
          __result = Rx.Observable.throw(e);
        }
        return __result
          .map(() => {
            // we don't need the result of a promise/observable/cb here
            // all data asserts should happen further up the chain
            // mark test as passing
            newTest.pass = true;
            return newTest;
          })
          .catch(err => {
            // we catch the error here to prevent the error from bubbling up
            // and collapsing the pipe
            newTest.err = err.message + '\n' + err.stack;
            // RxJS catch expects an observable as a return
            return Rx.Observable.of(newTest);
          });
      })
      // gather tests back into an array
      .toArray();
  };

  // notify that the window methods are ready to run
  frameReady.onNext(null);
});
