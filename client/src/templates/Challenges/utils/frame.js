import { toString, flow } from 'lodash';
import { defer, of, from, Observable, throwError, queueScheduler } from 'rxjs';
import {
  tap,
  map,
  toArray,
  delay,
  mergeMap,
  timeout,
  catchError
} from 'rxjs/operators';
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

export const runTestsInTestFrame = (document, tests) =>
  defer(() => {
    const { contentDocument: frame } = document.getElementById(testId);
    // Enable Stateless Functional Component. Otherwise, enzyme-adapter-react-16
    // does not work correctly.
    setConfig({ pureSFC: true });
    return frame
      .__runTests(tests)
      .pipe(tap(() => setConfig({ pureSFC: false })));
  });

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
  ctx.document.__deps__ = {
    rx: {
      of,
      from,
      Observable,
      throwError,
      queueScheduler,
      tap,
      map,
      toArray,
      delay,
      mergeMap,
      timeout,
      catchError
    },
    log: (...things) => console.log('from test frame', ...things)
  };
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
  ctx.window.console.log = function proxyConsole(...args) {
    proxyLogger.next(args);
    return oldLog(...args);
  };
  return ctx;
};

const writeTestDepsToDocument = frameReady => ctx => {
  const { sources, checkChallengePayload } = ctx;
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
  ctx.document.__checkChallengePayload = checkChallengePayload;
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

export const createMainFramer = (document, state$) =>
  flow(
    createFrame(document, state$.value, mainId),
    mountFrame(document),
    addDepsToDocument,
    writeContentToFrame
  );

export const createTestFramer = (document, state$, frameReady, proxyConsole) =>
  flow(
    createFrame(document, state$.value, testId),
    mountFrame(document),
    addDepsToDocument,
    writeTestDepsToDocument(frameReady),
    buildProxyConsole(proxyConsole),
    writeContentToFrame
  );
