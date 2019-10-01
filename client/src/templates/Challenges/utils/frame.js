import { toString, flow } from 'lodash';

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
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
    document.addEventListener('click', function(e) {
      let element = e.target;
      while(element && element.nodeName !== 'A') {
        element = element.parentElement;
      }
      if (element) {
        const href = element.getAttribute('href');
        if (!href || href[0] !== '#' && !href.match(/^https?:\\/\\//)) {
          e.preventDefault();
        }
      }
    }, false);
    document.addEventListener('submit', function(e) {
      const action = e.target.getAttribute('action');
      if (!action || !action.match(/https?:\\/\\//)) {
        e.preventDefault();
      }
    }, false);
  </script>
`;

export const runTestInTestFrame = async function(document, test, timeout) {
  const { contentDocument: frame } = document.getElementById(testId);
  return await Promise.race([
    new Promise((_, reject) => setTimeout(() => reject('timeout'), timeout)),
    frame.__runTest(test)
  ]);
};

const createFrame = (document, id) => ctx => {
  const frame = document.createElement('iframe');
  frame.id = id;
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
    proxyLogger(args.map(arg => '' + JSON.stringify(arg)).join(' '));
    return oldLog(...args);
  };
  return ctx;
};

const initTestFrame = frameReady => ctx => {
  const contentLoaded = new Promise(resolve => {
    if (ctx.document.readyState === 'loading') {
      ctx.document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
  contentLoaded.then(async () => {
    const { sources, loadEnzyme } = ctx;
    // default for classic challenges
    // should not be used for modern
    const code = sources && 'index' in sources ? sources['index'] : '';
    // provide the file name and get the original source
    const getUserInput = fileName => toString(sources[fileName]);
    await ctx.document.__initTestFrame({ code, getUserInput, loadEnzyme });
    frameReady();
  });
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

export const createMainFramer = document =>
  flow(
    createFrame(document, mainId),
    mountFrame(document),
    writeContentToFrame
  );

export const createTestFramer = (document, frameReady, proxyConsole) =>
  flow(
    createFrame(document, testId),
    mountFrame(document),
    writeContentToFrame,
    buildProxyConsole(proxyConsole),
    initTestFrame(frameReady)
  );
