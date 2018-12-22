import chai from 'chai';
import '@babel/polyfill';
import jQuery from 'jquery';

window.$ = jQuery;

const testId = 'fcc-test-frame';
if (window.frameElement && window.frameElement.id === testId) {
  document.addEventListener('DOMContentLoaded', initTestFrame);
}

function initTestFrame() {
  const code = (document.__source || '').slice(0);
  if (!document.__getUserInput) {
    document.__getUserInput = () => code;
  }

  /* eslint-disable no-unused-vars */
  // Fake Deep Equal dependency
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
  /* eslint-enable no-unused-vars */

  if (document.Enzyme) {
    window.Enzyme = document.Enzyme;
  }

  document.__runTest = async function runTests(testString) {
    // uncomment the following line to inspect
    // the frame-runner as it runs tests
    // make sure the dev tools console is open
    // debugger;
    try {
      // eval test string to actual JavaScript
      // This return can be a function
      // i.e. function() { assert(true, 'happy coding'); }
      // eslint-disable-next-line no-eval
      const test = eval(testString);
      if (typeof test === 'function') {
        await test(document.__getUserInput);
      }
      return { pass: true };
    } catch (err) {
      if (!(err instanceof chai.AssertionError)) {
        console.error(err);
      }
      return {
        err: {
          message: err.message,
          stack: err.stack
        }
      };
    }
  };

  // notify that the window methods are ready to run
  document.__frameReady();
}
