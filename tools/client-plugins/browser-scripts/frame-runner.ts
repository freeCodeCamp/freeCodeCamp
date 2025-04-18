import jQuery from 'jquery';
import * as helpers from '@freecodecamp/curriculum-helpers';

import type { FrameDocument, FrameWindow, InitTestFrameArg } from '.';

(window as FrameWindow).$ = jQuery;

const frameDocument = document as FrameDocument;

frameDocument.__initTestFrame = initTestFrame;

async function initTestFrame(e: InitTestFrameArg = { code: {} }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const code = (e.code.contents || '').slice();

  const editableContents = (e.code.editableContents || '').slice();
  // __testEditable allows test authors to run tests against a transitory dom
  // element built using only the code in the editable region.
  const __testEditable = (cb: () => () => unknown) => {
    const div = frameDocument.createElement('div');
    div.id = 'editable-only';
    div.innerHTML = editableContents;
    frameDocument.body.appendChild(div);
    const out = cb();
    frameDocument.body.removeChild(div);
    return out;
  };

  /* eslint-disable @typescript-eslint/no-unused-vars */
  // Hardcode Deep Freeze dependency
  const DeepFreeze = (o: Record<string, unknown>) => {
    Object.freeze(o);
    Object.getOwnPropertyNames(o).forEach(function (prop) {
      if (
        Object.prototype.hasOwnProperty.call(o, prop) &&
        o[prop] !== null &&
        (typeof o[prop] === 'object' || typeof o[prop] === 'function') &&
        !Object.isFrozen(o[prop])
      ) {
        DeepFreeze(o[prop] as Record<string, unknown>);
      }
    });
    return o;
  };

  const { default: chai } = await import(/* webpackChunkName: "chai" */ 'chai');
  const assert = chai.assert;
  const __helpers = helpers;
  const __checkForBrowserExtensions = true;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  let Enzyme;
  if (e.loadEnzyme) {
    /* eslint-disable prefer-const */
    let Adapter16;

    [{ default: Enzyme }, { default: Adapter16 }] = await Promise.all([
      import(/* webpackChunkName: "enzyme" */ 'enzyme'),
      import(/* webpackChunkName: "enzyme-adapter" */ 'enzyme-adapter-react-16')
    ]);

    Enzyme.configure({ adapter: new Adapter16() });
    /* eslint-enable prefer-const */
  }

  frameDocument.__runTest = async function runTests(testString: string) {
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
        // frameDocument ready:
        $(() => {
          try {
            const test: unknown = eval(testString);
            resolve(test);
          } catch (err) {
            reject(err as Error);
          }
        })
      );
      const test = await testPromise;
      if (typeof test === 'function') {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        await test();
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
