import _ from 'lodash';
import Rx, { Observable, Subject } from 'rx';
import { combineEpics, ofType } from 'redux-epic';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter15 from 'enzyme-adapter-react-15';
import {
  types,

  updateOutput,
  checkChallenge,
  updateTests,

  codeLockedSelector,
  isJSEnabledSelector,
  testsSelector
} from './';

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
// console.log
const mainId = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
const testId = 'fcc-test-frame';

const createHeader = (id = mainId) => `
  <script>
    window.__frameId = '${id}';
    window.onerror = function(msg, url, ln, col, err) {
      window.__err = err;
      return true;
    };
  </script>
`;

const createFrame = (document, getState, id) => ctx => {
  const isJSEnabled = isJSEnabledSelector(getState());
  const frame = document.createElement('iframe');
  frame.id = id;
  if (!isJSEnabled) {
    frame.sandbox = 'allow-same-origin';
  }
  return {
    ...ctx,
    element: frame
  };
};

const hiddenFrameClassname = 'hide-test-frame';
const mountFrame = document => ({ element, ...rest })=> {
  const oldFrame = document.getElementById(element.id);
  if (oldFrame) {
    element.className = oldFrame.className || hiddenFrameClassname;
    oldFrame.parentNode.replaceChild(element, oldFrame);
  } else {
    element.className = hiddenFrameClassname;
    document.body.appendChild(element);
  }
  return {
    ...rest,
    element,
    document: element.contentDocument,
    window: element.contentWindow
  };
};

const addDepsToDocument = ctx => {
  ctx.document.Rx = Rx;

  // using require here prevents nodejs issues as loop-protect
  // is added to the window object by webpack and not available to
  // us server side.
  /* eslint-disable import/no-unresolved */
  ctx.document.loopProtect = require('loop-protect');
  /* eslint-enable import/no-unresolved */
  return ctx;
};

const buildProxyConsole = proxyLogger => ctx => {
  const oldLog = ctx.window.console.log.bind(ctx.window.console);
  ctx.window.__console = {};
  ctx.window.__console.log = function proxyConsole(...args) {
    proxyLogger.onNext(args);
    return oldLog(...args);
  };
  return ctx;
};

const writeTestDepsToDocument = frameReady => ctx => {
  const {
    document: tests,
    sources,
    checkChallengePayload
  } = ctx;
  // add enzyme
  // TODO: do programatically
  // TODO: webpack lazyload this
  tests.Enzyme = {
    shallow: (node, options) => new ShallowWrapper(node, null, {
      ...options,
      adapter: new Adapter15()
    }),
    mount: (node, options) => new ReactWrapper(node, null, {
      ...options,
      adapter: new Adapter15()
    })
  };
  // default for classic challenges
  // should not be used for modern
  tests.__source = sources['index'] || '';
  tests.__getUserInput = key => sources[key];
  tests.__checkChallengePayload = checkChallengePayload;
  tests.__frameReady = frameReady;
  return ctx;
};

function writeToFrame(content, frame) {
  frame.open();
  frame.write(content);
  frame.close();
  return frame;
}

const writeContentToFrame = ctx => {
  writeToFrame(createHeader(ctx.element.id) + ctx.build, ctx.document);
  return ctx;
};

export function mainFrameEpic(actions, { getState }, { document }) {
  return Observable.of(document)
    // if document is not defined then none of this epic will run
    // this prevents issues during SSR
    .filter(Boolean)
    .flatMapLatest(document => {
      // this will proxy console.log calls in the main iframe
      const proxyLogger = new Subject();
      const createAndMountFrame = _.flow(
        createFrame(document, getState, mainId),
        mountFrame(document),
        addDepsToDocument,
        buildProxyConsole(proxyLogger),
        writeContentToFrame,
      );
      const result = actions::ofType(types.frameMain)
      // if isCodeLocked is true do not frame user code
        .filter(() => !codeLockedSelector(getState()))
        .map(({ payload }) => payload)
        .do(createAndMountFrame)
        .ignoreElements();

      return Observable.merge(
        proxyLogger.map(updateOutput),
        result
      );
    });
}

export function testFrameEpic(actions, { getState }, { document }) {
  return Observable.of(document)
    // if document is not defined then none of this epic will run
    // this prevents issues during SSR
    .filter(Boolean)
    .flatMapLatest(document => {
      // frameReady will let us know when the test iframe is ready to run
      const frameReady = new Subject();
      const createAndMountFrame = _.flow(
        createFrame(document, getState, testId),
        mountFrame(document),
        addDepsToDocument,
        writeTestDepsToDocument(frameReady),
        writeContentToFrame,
      );
      const result = actions::ofType(types.frameTests)
      // if isCodeLocked is true do not frame user code
        .filter(() => !codeLockedSelector(getState()))
        .map(({ payload }) => payload)
        .do(createAndMountFrame)
        .ignoreElements();

      return Observable.merge(
        frameReady.flatMap(({ checkChallengePayload }) => {
          const tests = testsSelector(getState());
          const { contentDocument: frame } = document.getElementById(testId);
          const postTests = Observable.of(
            updateOutput('// tests completed'),
            checkChallenge(checkChallengePayload)
          ).delay(250);
          // run the tests within the test iframe
          return frame.__runTests(tests)
            .flatMap(tests => {
              const message = tests
                .map(({ message }) => _.toString(message) ? message : '')
                .join('\n');
              return Observable.of(updateTests(tests))
                .startWith(updateOutput(message));
            })
            .concat(postTests);
        }),
        result
      );
    });
}

export default combineEpics(testFrameEpic, mainFrameEpic);
