import '@babel/polyfill';
import jQuery from 'jquery';
import * as helpers from '@freecodecamp/curriculum-helpers';

declare global {
  interface Window {
    $: JQueryStatic;
  }
  interface Document {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __initTestFrame: (e: InitTestFrameArg) => Promise<void>;
    // eslint-disable-next-line @typescript-eslint/naming-convention
    __runTest: (
      testString: string
    ) => Promise<
      { pass: boolean } | { err: { message: string; stack?: string } }
    >;
  }
}

window.$ = jQuery;

document.__initTestFrame = initTestFrame;

export interface InitTestFrameArg {
  code: {
    contents?: string;
    editableContents?: string;
    original?: { [id: string]: string };
  };
  getUserInput?: (fileName: string) => string;
  loadEnzyme?: () => void;
}

async function initTestFrame(e: InitTestFrameArg = { code: {} }) {
  const code = (e.code.contents || '').slice();
  const __file = (id?: string) => {
    if (id && e.code.original) {
      return e.code.original[id];
    } else {
      return code;
    }
  };
  const editableContents = (e.code.editableContents || '').slice();
  // __testEditable allows test authors to run tests against a transitory dom
  // element built using only the code in the editable region.
  const __testEditable = (cb: () => () => unknown) => {
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

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // Fake Deep Equal dependency
  const DeepEqual = (a: Record<string, unknown>, b: Record<string, unknown>) =>
    JSON.stringify(a) === JSON.stringify(b);

  // Hardcode Deep Freeze dependency
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const DeepFreeze = (o: Record<string, any>) => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (
        Object.prototype.hasOwnProperty.call(o, prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        DeepFreeze(o[prop]);
      }
    });
    return o;
  };

  const { default: chai } = await import(/* webpackChunkName: "chai" */ 'chai');
  const assert = chai.assert;
  const __helpers = helpers;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  let Enzyme;
  if (e.loadEnzyme) {
    /* eslint-disable prefer-const */
    let Adapter16;

    [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
      import(/* webpackChunkName: "enzyme" */ 'enzyme'),
      import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
    ]);
    /* eslint-enable no-inline-comments */

    Enzyme.configure({ adapter: new Adapter16() });
    /* eslint-enable prefer-const */
  }

  document.__runTest = async function runTests(testString: string) {
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
            const test: unknown = eval(testString);
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
      // have to extract the message, stack and, if they exist, expected and
      // actual before returning
      return {
        err: {
          message: (err as Error).message,
          stack: (err as Error).stack,
          expected: (err as { expected?: string }).expected,
          actual: (err as { actual?: string }).actual
        }
      };
    }
  };
}
