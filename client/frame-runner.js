document.addEventListener('DOMContentLoaded', function() {
  var testTimeout = 5000;
  var common = parent.__common;
  var frameId = window.__frameId;
  var frameReady = common[frameId + 'Ready'] || { onNext() {} };
  var Rx = document.Rx;
  var helpers = Rx.helpers;
  var chai = parent.chai;
  var source = document.__source;
  var __getUserInput = document.__getUserInput || (x => x);
  var checkChallengePayload = document.__checkChallengePayload;

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

  document.__runTests = function runTests(tests = []) {
    /* eslint-disable no-unused-vars */
    const editor = { getValue() { return source; } };
    const code = source;
    /* eslint-enable no-unused-vars */
    if (window.__err) {
      return Rx.Observable.from(tests)
        .map(test => {
          return {
            ...test,
            err: window.__err.message + '\n' + window.__err.stack,
            message: window.__err.message,
            stack: window.__err.stack
          };
        })
        .toArray()
        .do(() => { window.__err = null; });
    }

    // Iterate through the test one at a time
    // on new stacks
    return Rx.Observable.from(tests, null, null, Rx.Scheduler.default)
      // add delay here for firefox to catch up
      .delay(200)
      /* eslint-disable no-unused-vars */
      .flatMap(({ text, testString }) => {
        const assert = chai.assert;
        const getUserInput = __getUserInput;
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
            if (test.length === 1) {
              // a function with length 0 means it expects 0 args
              // We call it and store the result
              // This result may be a promise or an observable or undefined
              __result = test(getUserInput);
            } else {
              // if function takes arguments
              // we expect it to be of the form
              // function(cb) { /* ... */ }
              // and callback has the following signature
              // function(err) { /* ... */ }
              __result = Rx.Observable.fromNodeCallback(test)(getUserInput);
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
          .timeout(testTimeout)
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
            let message = (err.message || '');
            const assertIndex = message.indexOf(': expected');
            if (assertIndex !== -1) {
              message = message.slice(0, assertIndex);
            }
            message = message.replace(/<code>(.*)<\/code>/, '$1');
            newTest.err = err.message + '\n' + err.stack;
            newTest.stack = err.stack;
            newTest.message = message;
            // RxJS catch expects an observable as a return
            return Rx.Observable.of(newTest);
          });
      })
      // gather tests back into an array
      .toArray();
  };

  // notify that the window methods are ready to run
  frameReady.onNext({ checkChallengePayload });
});
