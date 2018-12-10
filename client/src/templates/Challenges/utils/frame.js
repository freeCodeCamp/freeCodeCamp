import { toString, flow } from 'lodash';
import { configure, shallow, mount } from 'enzyme';
import Adapter16 from 'enzyme-adapter-react-16';
import { setConfig } from 'react-hot-loader';

import { isJSEnabledSelector } from '../redux';

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

export const runTestInTestFrame = async function(document, test) {
  const { contentDocument: frame } = document.getElementById(testId);
  // Enable Stateless Functional Component. Otherwise, enzyme-adapter-react-16
  // does not work correctly.
  setConfig({ pureSFC: true });
  const result = await frame.__runTest(test);
  setConfig({ pureSFC: false });
  return result;
};

const createFrame = (document, state, id) => ctx => {
  const isJSEnabled = isJSEnabledSelector(state);
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

const hiddenFrameClassName = 'hide-test-frame';
const mountFrame = document => ({ element, ...rest }) => {
  const oldFrame = document.getElementById(element.id);
  if (oldFrame) {
    element.className = oldFrame.className || hiddenFrameClassName;
    oldFrame.parentNode.replaceChild(element, oldFrame);
  } else {
    element.className = hiddenFrameClassName;
    document.body.appendChild(element);
  }
  return {
    ...rest,
    element,
    document: element.contentDocument,
    window: element.contentWindow
  };
};

const buildProxyConsole = proxyLogger => ctx => {
  const oldLog = ctx.window.console.log.bind(ctx.window.console);
  ctx.window.console.log = function proxyConsole(...args) {
    proxyLogger.put(args);
    return oldLog(...args);
  };
  return ctx;
};

const writeTestDepsToDocument = frameReady => ctx => {
  const { sources } = ctx;
  // add enzyme
  // TODO: do programatically
  // TODO: webpack lazyload this
  configure({ adapter: new Adapter16() });
  ctx.document.Enzyme = { shallow, mount };
  // default for classic challenges
  // should not be used for modern
  ctx.document.__source = sources && 'index' in sources ? sources['index'] : '';
  // provide the file name and get the original source
  ctx.document.__getUserInput = fileName => toString(sources[fileName]);
  ctx.document.__frameReady = frameReady;
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

export const createMainFramer = (document, state) =>
  flow(
    createFrame(document, state, mainId),
    mountFrame(document),
    writeContentToFrame
  );

export const createTestFramer = (document, state, frameReady, proxyConsole) =>
  flow(
    createFrame(document, state, testId),
    mountFrame(document),
    writeTestDepsToDocument(frameReady),
    buildProxyConsole(proxyConsole),
    writeContentToFrame
  );
