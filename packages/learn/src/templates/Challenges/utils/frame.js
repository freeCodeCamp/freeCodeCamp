import { toString, flow } from 'lodash';
import Rx, { Observable } from 'rxjs';
import { ShallowWrapper, ReactWrapper } from 'enzyme';
import Adapter16 from 'enzyme-adapter-react-16';
import { isJSEnabledSelector } from '../redux';
import 'chai';

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
// console.log
const mainId = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
const testId = 'fcc-test-frame';

// base tag here will force relative links
// within iframe to point to '' instead of
// append to the current challenge url
// this also allows in-page anchors to work properly
// rather than load another instance of the learn
//
// if an error occurs during initialization
// the __err prop will be set
// This is then picked up in client/frame-runner.js during
// runTestsInTestFrame below
const createHeader = (id = mainId) => `
  <base href='' />
  <script>
    window.__frameId = '${id}';
    window.onerror = function(msg, url, ln, col, err) {
      window.__err = err;
      return true;
    };
  </script>
`;

export const runTestsInTestFrame = (document, tests) =>
  Observable.defer(() => {
    const { contentDocument: frame } = document.getElementById(testId);
    return frame.__runTests(tests);
  });

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
const mountFrame = document => ({ element, ...rest }) => {
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
    proxyLogger.next(args);
    return oldLog(...args);
  };
  return ctx;
};

const writeTestDepsToDocument = frameReady => ctx => {
  const { document: tests, sources, checkChallengePayload } = ctx;
  // add enzyme
  // TODO: do programatically
  // TODO: webpack lazyload this
  tests.Enzyme = {
    shallow: (node, options) =>
      new ShallowWrapper(node, null, {
        ...options,
        adapter: new Adapter16()
      }),
    mount: (node, options) =>
      new ReactWrapper(node, null, {
        ...options,
        adapter: new Adapter16()
      })
  };
  // default for classic challenges
  // should not be used for modern
  tests.__source = sources && 'index' in sources ? sources['index'] : '';
  // provide the file name and get the original source
  tests.__getUserInput = fileName => toString(sources[fileName]);
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

export const createMainFramer = (document, getState, proxyLogger) =>
  flow(
    createFrame(document, getState, mainId),
    mountFrame(document),
    addDepsToDocument,
    buildProxyConsole(proxyLogger),
    writeContentToFrame
  );

export const createTestFramer = (document, getState, frameReady) =>
  flow(
    createFrame(document, getState, testId),
    mountFrame(document),
    addDepsToDocument,
    writeTestDepsToDocument(frameReady),
    writeContentToFrame
  );
