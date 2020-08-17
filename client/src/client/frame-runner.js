import '@babel/polyfill';
import jQuery from 'jquery';

window.$ = jQuery;

document.__initTestFrame = initTestFrame;

async function initTestFrame(e = {}) {
  const code = (e.code || '').slice(0);
  if (!e.getUserInput) {
    e.getUserInput = () => code;
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

  // eslint-disable-next-line no-inline-comments
  const { default: chai } = await import(/* webpackChunkName: "chai" */ 'chai');
  const assert = chai.assert;
  /* eslint-enable no-unused-vars */

  let Enzyme;
  if (e.loadEnzyme) {
    let Adapter16;
    /* eslint-disable no-inline-comments */

    [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
      import(/* webpackChunkName: "enzyme" */ 'enzyme'),
      import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
    ]);
    /* eslint-enable no-inline-comments */

    Enzyme.configure({ adapter: new Adapter16() });
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
      const testPromise = new Promise((resolve, reject) =>
        // To avoid race conditions, we have to run the test in a final
        // document ready:
        $(() => {
          try {
            // eslint-disable-next-line no-eval
            const test = eval(testString);
            resolve({ test });
          } catch (err) {
            reject({ err });
          }
        })
      );
      const { test, err } = await testPromise;
      if (err) throw err;

      if (typeof test === 'function') {
        await test(e.getUserInput);
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
}
