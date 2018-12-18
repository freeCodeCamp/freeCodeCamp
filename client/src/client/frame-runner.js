import chai from 'chai';
import '@babel/polyfill';
import jQuery from 'jquery';

window.$ = jQuery;

document.addEventListener('DOMContentLoaded', function() {
  const {
    timeout,
    catchError,
    map,
    toArray,
    mergeMap,
    of,
    from,
    throwError
  } = document.__deps__.rx;
  const frameReady = document.__frameReady;
  const source = document.__source;
  const __getUserInput = document.__getUserInput || (x => x);
  const checkChallengePayload = document.__checkChallengePayload;

  const fiveSeconds = 5000;

  function isPromise(value) {
    return (
      value &&
      typeof value.subscribe !== 'function' &&
      typeof value.then === 'function'
    );
  }
  // Fake Deep Equal dependency
  /* eslint-disable no-unused-vars */
  const DeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  const DeepFreeze = o => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function(prop) {
      if (
        o.hasOwnProperty(prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };

  if (document.Enzyme) {
    window.Enzyme = document.Enzyme;
  }

  document.__runTests = function runTests(tests = []) {
    /* eslint-disable no-unused-vars */
    const code = source.slice(0);
    const editor = {
      getValue() {
        return source;
      }
    };
    const assert = chai.assert;
    const getUserInput = __getUserInput;
    // Iterate through the test one at a time
    // on new stacks
    const results = from(tests).pipe(
      mergeMap(function runOneTest({ text, testString }) {
        const newTest = { text, testString };
        let test;
        let __result;
        // uncomment the following line to inspect
        // the frame-runner as it runs tests
        // make sure the dev tools console is open
        // debugger;
        try {
          /* eslint-disable no-eval */
          // eval test string to actual JavaScript
          // This return can be a function
          // i.e. function() { assert(true, 'happy coding'); }
          test = eval(testString);
          /* eslint-enable no-eval */
          if (typeof test === 'function') {
            // all async tests must return a promise or observable
            // sync tests can return Any type
            __result = test(getUserInput);
            if (isPromise(__result)) {
              // resolve the promise before continuing
              __result = from(__result);
            }
          }

          if (!__result || typeof __result.subscribe !== 'function') {
            // make sure result is an observable
            __result = of(null);
          }
        } catch (e) {
          __result = throwError(e);
        }
        return __result.pipe(
          timeout(fiveSeconds),
          map(() => {
            // if we are here, then the assert passed
            // mark test as passing
            newTest.pass = true;
            return newTest;
          }),
          catchError(err => {
            const { message, stack } = err;
            // we catch the error here to prevent the error from bubbling up
            // and collapsing the pipe
            newTest.err = message + '\n' + stack;
            newTest.stack = stack;
            newTest.message = text.replace(/<code>(.*?)<\/code>/g, '$1');
            if (!(err instanceof chai.AssertionError)) {
              console.error(err);
            }
            // RxJS catch expects an observable as a return
            return of(newTest);
          })
        );
      }),
      toArray()
    );
    return results;
  };

  // notify that the window methods are ready to run
  frameReady.next({ checkChallengePayload });
});
