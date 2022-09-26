import { toString, flow } from 'lodash-es';
import i18next, { i18n } from 'i18next';
import { format } from '../../../utils/format';

const utilsFormat: <T>(x: T) => string = format;

declare global {
  interface Window {
    console: {
      log: () => void;
    };
    i18nContent: i18n;
  }
}

export interface Source {
  index: string;
  contents?: string;
  editableContents: string;
  original: { [key: string]: string };
}

export interface Context {
  window: Window;
  document: Document;
  element: HTMLIFrameElement;
  build: string;
  sources: Source;
  loadEnzyme?: () => void;
}

export interface TestRunnerConfig {
  proxyLogger: ProxyLogger;
  removeComments?: boolean;
}

export type ProxyLogger = (msg: string) => void;

type InitFrame = (
  frameInitiateDocument?: () => unknown,
  frameConsoleLogger?: ProxyLogger
) => (frameContext: Context) => Context;

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
export const mainPreviewId = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
const testId = 'fcc-test-frame';
// the project preview frame demos the finished project
export const projectPreviewId = 'fcc-project-preview-frame';

const DOCUMENT_NOT_FOUND_ERROR = 'misc.document-notfound';

// base tag here will force relative links
// within iframe to point to '' instead of
// append to the current challenge url
// this also allows in-page anchors to work properly
// rather than load another instance of the learn

// window.onerror is added here to report any errors thrown during the building
// of the frame.  React dom errors already appear in the console, so onerror
// does not need to pass them on to the default error handler.

const createHeader = (id = mainPreviewId) => `
  <base href='' />
  <script>
    window.__frameId = '${id}';
    window.onerror = function(msg) {
      const string = msg.toLowerCase();
      if (string.includes('script error')) {
        msg = 'Build error, open your browser console to learn more.';
      }
      console.log(msg);
      return true;
    };
    document.addEventListener('click', function(e) {
      let element = e.target;
      while(element && element.nodeName !== 'A') {
        element = element.parentElement;
      }
      if (element && element.nodeName === 'A' && new URL(element.href).hash === '') {
        e.preventDefault();
        window.parent.window.alert(
          i18nContent.t('misc.iframe-alert', { externalLink: element.href })
        )
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

export const runTestInTestFrame = async function (
  document: Document,
  test: string,
  timeout: number
) {
  const { contentDocument: frame } = document.getElementById(
    testId
  ) as HTMLIFrameElement;
  if (frame !== null) {
    return await Promise.race([
      new Promise<
        { pass: boolean } | { err: { message: string; stack?: string } }
      >((_, reject) => setTimeout(() => reject('timeout'), timeout)),
      frame.__runTest(test)
    ]);
  }
};

const createFrame =
  (document: Document, id: string, title?: string) =>
  (frameContext: Context) => {
    const frame = document.createElement('iframe');
    frame.id = id;
    if (typeof title === 'string') {
      frame.title = i18next.t('misc.iframe-preview', { title });
      frame.lang = 'en';
    }
    return {
      ...frameContext,
      element: frame
    };
  };

const hiddenFrameClassName = 'hide-test-frame';
const mountFrame =
  (document: Document, id: string) => (frameContext: Context) => {
    const { element }: { element: HTMLIFrameElement } = frameContext;
    const oldFrame = document.getElementById(element.id) as HTMLIFrameElement;
    if (oldFrame) {
      element.className = oldFrame.className || hiddenFrameClassName;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      oldFrame.parentNode!.replaceChild(element, oldFrame);
      // only test frames can be added (and hidden) here, other frames must be
      // added by react
    } else if (id === testId) {
      element.className = hiddenFrameClassName;
      document.body.appendChild(element);
    }
    return {
      ...frameContext,
      element,
      document: element.contentDocument,
      window: element.contentWindow
    };
  };

const updateProxyConsole =
  (proxyLogger?: ProxyLogger) => (frameContext: Context) => {
    // window does not exist if the preview is hidden, so we have to check.
    if (proxyLogger && frameContext?.window) {
      const oldLog = frameContext.window.console.log.bind(
        frameContext.window.console
      );
      frameContext.window.console.log = function proxyConsole(
        ...args: string[]
      ) {
        proxyLogger(args.map((arg: string) => utilsFormat(arg)).join(' '));
        return oldLog(...(args as []));
      };
    }

    return frameContext;
  };

const updateWindowI18next = () => (frameContext: Context) => {
  // window does not exist if the preview is hidden, so we have to check.
  if (frameContext?.window) {
    frameContext.window.i18nContent = i18next;
  }
  return frameContext;
};

const initTestFrame = (frameReady?: () => void) => (frameContext: Context) => {
  waitForFrame(frameContext)
    .then(async () => {
      const { sources, loadEnzyme } = frameContext;
      // provide the file name and get the original source
      const getUserInput = (fileName: string) =>
        toString(sources[fileName as keyof typeof sources]);
      await frameContext.document.__initTestFrame({
        code: sources,
        getUserInput,
        loadEnzyme
      });
      if (frameReady) {
        frameReady();
      }
    })
    .catch(handleDocumentNotFound);
  return frameContext;
};

const initMainFrame =
  (_: unknown, proxyLogger?: ProxyLogger) => (frameContext: Context) => {
    waitForFrame(frameContext)
      .then(() => {
        // Overwriting the onerror added by createHeader to catch any errors thrown
        // after the frame is ready. It has to be overwritten, as proxyLogger cannot
        // be added as part of createHeader.

        frameContext.window.onerror = function (msg) {
          if (typeof msg === 'string') {
            const string = msg.toLowerCase();
            if (string.includes('script error')) {
              msg = 'Error, open your browser console to learn more.';
            }
            if (proxyLogger) {
              proxyLogger(msg);
            }
          }
          // let the error propagate so it appears in the browser console, otherwise
          // an error from a cross origin script just appears as 'Script error.'
          return false;
        };
      })
      .catch(handleDocumentNotFound);
    return frameContext;
  };

function handleDocumentNotFound(err: string) {
  if (err !== DOCUMENT_NOT_FOUND_ERROR) {
    console.log(err);
  }
}

const initPreviewFrame = () => (frameContext: Context) => frameContext;

const waitForFrame = (frameContext: Context) => {
  return new Promise((resolve, reject) => {
    if (!frameContext.document) {
      reject(DOCUMENT_NOT_FOUND_ERROR);
    } else if (frameContext.document.readyState === 'loading') {
      frameContext.document.addEventListener('DOMContentLoaded', resolve);
    } else {
      resolve(null);
    }
  });
};

function writeToFrame(content: string, frame: Document | null) {
  // it's possible, if the preview is rapidly opened and closed, for the frame
  // to be null at this point.
  if (frame) {
    frame.open();
    frame.write(content);
    frame.close();
  }
}

const writeContentToFrame = (frameContext: Context) => {
  writeToFrame(
    createHeader(frameContext.element.id) + frameContext.build,
    frameContext.document
  );
  return frameContext;
};

export const createMainPreviewFramer = (
  document: Document,
  proxyLogger: ProxyLogger,
  frameTitle: string
) =>
  createFramer(
    document,
    mainPreviewId,
    initMainFrame,
    proxyLogger,
    undefined,
    frameTitle
  );

export const createProjectPreviewFramer = (
  document: Document,
  frameTitle: string
) =>
  createFramer(
    document,
    projectPreviewId,
    initPreviewFrame,
    undefined,
    undefined,
    frameTitle
  );

export const createTestFramer = (
  document: Document,
  proxyLogger: ProxyLogger,
  frameReady: () => void
) => createFramer(document, testId, initTestFrame, proxyLogger, frameReady);

const createFramer = (
  document: Document,
  id: string,
  init: InitFrame,
  proxyLogger?: ProxyLogger,
  frameReady?: () => void,
  frameTitle?: string
) =>
  flow(
    createFrame(document, id, frameTitle),
    mountFrame(document, id),
    updateProxyConsole(proxyLogger),
    updateWindowI18next(),
    writeContentToFrame,
    init(frameReady, proxyLogger)
  ) as (args: Context) => void;
