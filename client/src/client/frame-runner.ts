import type enzyme from 'enzyme';
import type adapter16 from 'enzyme-adapter-react-16';
import '@babel/polyfill';
import jQuery from 'jquery';
import curriculumHelpers from '../utils/curriculum-helpers';

window.$ = jQuery;

document.__initTestFrame = initTestFrame;

type Code = {
  contents?: string;
  editableContents?: string;
};

type TestFrameEvent = {
  code: Code;
  getUserInput?: () => void;
  loadEnzyme?: () => void;
};

async function initTestFrame(e: TestFrameEvent = { code: {} }): Promise<void> {
  const code = (e.code.contents || '').slice();
  const editableContents = (e.code.editableContents || '').slice();
  // __testEditable allows test authors to run tests against a transitory dom
  // element built using only the code in the editable region.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const __testEditable = (cb: () => void) => {
    const div = document.createElement('div');
    div.id = 'editable-only';
    div.innerHTML = editableContents;
    document.body.appendChild(div);
    const out = cb();
    document.body.removeChild(div);
    return out;
  };

  if (!e.getUserInput) {
    e.getUserInput = () => code;
  }

  // Fake Deep Equal dependency
  /* eslint-disable @typescript-eslint/no-unused-vars */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DeepEqual = (a: any, b: any) => JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DeepFreeze = (o: Record<string, any>) => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
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
  const __helpers = curriculumHelpers;
  /* eslint-enable no-unused-vars */

  let Enzyme: typeof enzyme;
  if (e.loadEnzyme) {
    let Adapter16: typeof adapter16;
    /* eslint-disable no-inline-comments */
    /* eslint-disable-next-line prefer-const */
    [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
      import(/* webpackChunkName: "enzyme" */ 'enzyme'),
      import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
    ]);
    /* eslint-enable no-inline-comments */

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        $(() => {
          try {
            // eslint-disable-next-line no-eval, @typescript-eslint/no-unsafe-assignment
            const test = eval(testString);
            resolve(test);
          } catch (err) {
            reject(err);
          }
        })
      );
      const test = await testPromise;
      if (typeof test === 'function') {
        await test(e.getUserInput);
      }
      return { pass: true };
    } catch (err) {
      if (!(err instanceof chai.AssertionError)) {
        console.error(err);
      }
      // to provide useful debugging information when debugging the tests, we
      // have to extract the message and stack before returning
      return {
        err: { message: (err as Error).message, stack: (err as Error).stack }
      };
    }
  };
}
