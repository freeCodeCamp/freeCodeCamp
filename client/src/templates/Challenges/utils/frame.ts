// import { toString, flow } from 'lodash-es';
// import { format } from '../../../utils/format';
// import { InitTestFrameArg } from '../../../client/frame-runner';

// import { InitTestFrameArg } from "../../../client/frame-runner";

// import { InitTestFrameArg } from "../../../client/frame-runner";

const { toString, flow } = require('lodash');
const { format } = require('../../../utils/format');
const initTestFrameArg = require('../../../client/frame-runner');

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
const MAIN_PREVIEW_ID = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
const TEST_ID = 'fcc-test-frame';
// the project preview frame demos the finished project
const PROJECT_PREVIEW_ID = 'fcc-project-preview-frame';

const DOCUMENT_NOT_FOUND_ERROR = 'document not found';

// base tag here will force relative links
// within iframe to point to '' instead of
// append to the current challenge url
// this also allows in-page anchors to work properly
// rather than load another instance of the learn

// window.onerror is added here to report any errors thrown during the building
// of the frame.  React dom errors already appear in the console, so onerror
// does not need to pass them on to the default error handler.
const createHeader = (id = MAIN_PREVIEW_ID): string => `
  <base href='' />
  <script type="text/javascript">
    window.__frameId = '${id}';
    window.onerror = function(msg: string): boolean {
      let errorMessage = msg.toLowerCase();
      if (errorMessage.includes('script error')) {
        errorMessage = 'Build error, open your browser console to learn more.';
      }
      console.log(errorMessage);
      return true;
    };
    document.addEventListener('click', function(e: MouseEvent) {
      let element: EventTarget = e.target;
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
    document.addEventListener('submit', function(e: SubmitEvent) {
      const action = e.target.getAttribute('action');
      if (!action || !action.match(/https?:\\/\\//)) {
        e.preventDefault();
      }
    }, false);
  </script>
`;

const runTestInTestFrame = async function (
  document: Document,
  test: string,
  timeout: number
) {
  const { contentDocument: frame } = document.getElementById(
    TEST_ID
  ) as HTMLIFrameElement;

  if (frame) {
    return await Promise.race([
      new Promise((_, reject) => setTimeout(() => reject('timeout'), timeout)),
      frame?.__runTest(test)
    ]);
  }

  return await new Promise((_, reject) =>
    setTimeout(() => reject('timeout'), timeout)
  );
};

interface Context {
  id: string;
  build: string;
  document: Document;
  element: Element;
  sources: InitTestFrameArg['code']['sources'];
  loadEnzyme: InitTestFrameArg['loadEnzyme'];
  window: {
    log: Console['log'];
    console: Console;
  };
}

const createFrame =
  (document: Document, id: string, title: string) => (ctx: Context) => {
    const frame = document.createElement('iframe');
    frame.id = id;
    frame.title = title;
    return {
      ...ctx,
      element: frame
    };
  };

const HIDDEN_FRAME_CLASS_NAME = 'hide-test-frame';
const mountFrame =
  (document: Document, id: string) =>
  ({ element, ...rest }: { element: HTMLIFrameElement; rest: never }) => {
    const oldFrame: HTMLElement | null = document.getElementById(element.id);
    if (oldFrame) {
      element.className = oldFrame.className || HIDDEN_FRAME_CLASS_NAME;
      if (oldFrame.parentNode)
        oldFrame.parentNode.replaceChild(element, oldFrame);
      // only test frames can be added (and hidden) here, other frames must be
      // added by react
    } else if (id === TEST_ID) {
      element.className = HIDDEN_FRAME_CLASS_NAME;
      document.body.appendChild(element);
    }
    return {
      ...rest,
      element,
      document: element.contentDocument,
      window: element.contentWindow
    };
  };

type TProxyLogger = ((message: string) => string) | null;

const buildProxyConsole = (proxyLogger: TProxyLogger) => (ctx: Context) => {
  // window does not exist if the preview is hidden, so we have to check.
  if (proxyLogger && ctx?.window) {
    const oldLog = ctx.window.log.bind(ctx.window.console);
    ctx.window.console.log = function proxyConsole(...args) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      proxyLogger(args.map(arg => format(arg)).join(' '));
      return oldLog(...args);
    };
  }
  return ctx;
};

type TFrameReady = (() => void) | null;
type TInitTestFrame = (frameReady: TFrameReady) => (ctx: Context) => Context;
const initTestFrame = (frameReady: TFrameReady) => (ctx: Context) => {
  waitForFrame(ctx)
    .then(async () => {
      const { sources, loadEnzyme } = ctx;
      // provide the file name and get the original source
      if (sources) {
        const getUserInput = (fileName: string) => toString(sources[fileName]);
        await ctx.document.__initTestFrame({
          code: { sources },
          getUserInput,
          loadEnzyme
        });
        if (frameReady) {
          frameReady();
        }
      }
      throw Error('file sources not found');
    })
    .catch(handleDocumentNotFound);
  return ctx;
};

type TInitMainFrame = (
  _: unknown,
  prxyLogger: TProxyLogger
) => (ctx: Context) => Context;
const initMainFrame =
  (_: unknown, proxyLogger: TProxyLogger) => (ctx: Context) => {
    waitForFrame(ctx)
      .then(() => {
        // Overwriting the onerror added by createHeader to catch any errors thrown
        // after the frame is ready. It has to be overwritten, as proxyLogger cannot
        // be added as part of createHeader.
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ctx.window.onerror = function (msg: string) {
          const errorMessage = msg.toLowerCase();
          if (errorMessage.includes('script error')) {
            msg = 'Error, open your browser console to learn more.';
          }
          if (proxyLogger) {
            proxyLogger(msg);
          }
          // let the error propagate so it appears in the browser console, otherwise
          // an error from a cross origin script just appears as 'Script error.'
          return false;
        };
      })
      .catch(handleDocumentNotFound);
    return ctx;
  };

function handleDocumentNotFound(err: string) {
  if (err !== DOCUMENT_NOT_FOUND_ERROR) {
    console.log(err);
  }
}

type TInitPreviewFrame = () => (ctx: Context) => Context;
const initPreviewFrame: TInitPreviewFrame = () => (ctx: Context) => ctx;

const waitForFrame = (ctx: Context) => {
  return new Promise<void>((resolve, reject) => {
    if (!ctx.document) {
      reject(DOCUMENT_NOT_FOUND_ERROR);
    } else if (ctx.document.readyState === 'loading') {
      ctx.document.addEventListener('DOMContentLoaded', () => resolve());
    } else {
      resolve();
    }
  });
};

function writeToFrame(content: string, frame: Document) {
  // it's possible, if the preview is rapidly opened and closed, for the frame
  // to be null at this point.
  if (frame) {
    frame.open();
    frame.write(content);
    frame.close();
  }
}

const writeContentToFrame = (ctx: Context) => {
  writeToFrame(createHeader(ctx.element.id) + ctx.build, ctx.document);
  return ctx;
};

const createMainPreviewFramer = (
  document: Document,
  proxyLogger: TProxyLogger
) =>
  createFramer(
    document,
    MAIN_PREVIEW_ID,
    initMainFrame,
    proxyLogger,
    null,
    'preview'
  );

const createProjectPreviewFramer = (
  document: Document,
  frameTitle: string
) =>
  createFramer(
    document,
    PROJECT_PREVIEW_ID,
    initPreviewFrame,
    null,
    null,
    frameTitle
  );

export const createTestFramer = (
  document: Document,
  proxyLogger: TProxyLogger,
  frameReady: TFrameReady
) =>
  createFramer(
    document,
    TEST_ID,
    initTestFrame,
    proxyLogger,
    frameReady,
    'test'
  );

const createFramer = (
  document: Document,
  id: string,
  init: TInitMainFrame | TInitPreviewFrame | TInitTestFrame,
  proxyLogger: TProxyLogger,
  frameReady: TFrameReady,
  frameTitle: string
) =>
  flow(
    createFrame(document, id, frameTitle),
    mountFrame(document, id),
    buildProxyConsole(proxyLogger),
    writeContentToFrame,
    init(frameReady, proxyLogger)
  );

module.exports = {
  ['MAIN_PREVIEW_ID']: MAIN_PREVIEW_ID,
  ['PROJECT_PREVIEW_ID']: 'fcc-project-preview-frame',

  runTestInTestFrame,
  createMainPreviewFramer,
  createProjectPreviewFramer
}
