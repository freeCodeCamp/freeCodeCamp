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

// window.onerror is added here to catch any errors thrown during the building
// of the frame.
const createHeader = (id = mainId) => `
  <base href='' />
  <script>
    window.__frameId = '${id}';
    window.onerror = function(msg) {
      console.log(msg);
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
  waitForFrame(ctx).then(async () => {
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

const initMainFrame = (frameReady, proxyUpdateConsole) => ctx => {
  waitForFrame(ctx).then(() => {
    // Overwriting the onerror added by createHeader to catch any errors thrown
    // after the frame is ready. It has to be overwritten, as proxyUpdateConsole
    // cannot be added as part of createHeader.
    ctx.window.onerror = function(msg) {
      console.log(msg);
      if (proxyUpdateConsole) {
        proxyUpdateConsole(msg);
      }
      return true;
    };
    frameReady();
  });
  return ctx;
};

const waitForFrame = ctx => {
  return new Promise(resolve => {
    if (ctx.document.readyState === 'loading') {
      ctx.document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve();
    }
  });
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

export const createMainFramer = (document, frameReady, proxy) =>
  createFramer(document, frameReady, proxy, mainId, initMainFrame);

export const createTestFramer = (document, frameReady, proxy) =>
  createFramer(document, frameReady, proxy, testId, initTestFrame);

const createFramer = (
  document,
  frameReady,
  { proxyLogger, proxyUpdateConsole },
  id,
  init
) =>
  flow(
    createFrame(document, id),
    mountFrame(document),
    buildProxyConsole(proxyLogger),
    writeContentToFrame,
    init(frameReady, proxyUpdateConsole)
  );
