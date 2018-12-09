import chai from 'chai';
import '@babel/polyfill';
import jQuery from 'jquery';

window.$ = jQuery;

const testId = 'fcc-test-frame';
if (window.frameElement && window.frameElement.id === testId) {
  document.addEventListener('DOMContentLoaded', initTestFrame);
}

function initTestFrame() {
  // window.__logs = [];
  // const oldLog = window.console.log.bind(window.console);
  // window.console.log = function proxyConsole(...args) {
  //   window.__logs = [...window.__logs, ...args];
  //   return oldLog(...args);
  // };

  const frameReady = document.__frameReady;
  const source = document.__source;
  const __getUserInput = document.__getUserInput || (x => x);

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

  const assert = chai.assert;
  const getUserInput = __getUserInput;

  if (document.Enzyme) {
    window.Enzyme = document.Enzyme;
  }

  document.__runTest = async function runTests(testString) {
    window.__logs = [];
    /* eslint-disable no-unused-vars */
    const code = source.slice(0);
    const editor = {
      getValue() {
        return source;
      }
    };
    /* eslint-disable no-unused-vars */
    // uncomment the following line to inspect
    // the frame-runner as it runs tests
    // make sure the dev tools console is open
    // debugger;
    try {
      /* eslint-disable no-eval */
      // eval test string to actual JavaScript
      // This return can be a function
      // i.e. function() { assert(true, 'happy coding'); }
      const test = eval(testString);
      /* eslint-enable no-eval */
      if (typeof test === 'function') {
        await test(getUserInput);
      }
      return { pass: true, logs: window.__logs.map(String) };
    } catch (err) {
      if (!(err instanceof chai.AssertionError)) {
        console.error(err);
      }
      return {
        err: {
          message: err.message,
          stack: err.stack
        },
        logs: window.__logs.map(String)
      };
    }
  };

  // notify that the window methods are ready to run
  frameReady();
}
