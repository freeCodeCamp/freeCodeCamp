import { toString, flow } from 'lodash-es';
import i18next, { type i18n } from 'i18next';

import { format } from '../../../utils/format';
import type {
  FrameDocument,
  PythonDocument
} from '../../../../../tools/client-plugins/browser-scripts';

const utilsFormat: <T>(x: T) => string = format;

export interface Source {
  index: string;
  contents?: string;
  editableContents: string;
  original: { [key: string]: string | null };
}

interface Hooks {
  beforeAll?: string;
}

export interface Context {
  window?: Window &
    typeof globalThis & {
      i18nContent?: i18n;
      __pyodide: unknown;
      document: FrameDocument | PythonDocument;
    };
  element: HTMLIFrameElement;
  build: string;
  sources: Source;
  hooks?: Hooks;
  loadEnzyme?: () => void;
}

export interface TestRunnerConfig {
  proxyLogger: ProxyLogger;
}

export type ProxyLogger = (msg: string) => void;

type InitFrame = (
  frameInitiateDocument?: () => unknown,
  frameConsoleLogger?: ProxyLogger
) => (frameContext: Context) => Context;

class ScrollManager {
  #previewScrollPosition = 0;

  getPreviewScrollPosition = () => {
    return this.#previewScrollPosition;
  };

  setPreviewScrollPosition = (position: number) => {
    this.#previewScrollPosition = position;
  };

  registerScrollEventListener = (iframe: HTMLIFrameElement) => {
    iframe.contentDocument?.addEventListener('scroll', event => {
      const currentTarget = event.currentTarget as Document | null;
      if (currentTarget?.body.scrollTop) {
        this.setPreviewScrollPosition(currentTarget?.body.scrollTop);
      }
    });
  };

  restorePreviewScrollPosition = (iframe: HTMLIFrameElement) => {
    if (iframe.contentDocument?.body) {
      iframe.contentDocument.body.scrollTop = this.#previewScrollPosition;
    }
  };
}

export const scrollManager = new ScrollManager();

// we use two different frames to make them all essentially pure functions
// main iframe is responsible rendering the preview and is where we proxy the
export const mainPreviewId = 'fcc-main-frame';
// the test frame is responsible for running the assert tests
export const testId = 'fcc-test-frame';
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

// The "fcc-hide-header" class on line 95 is added to ensure that the CSSHelper class ignores this style element
// during tests, preventing CSS-related test failures.

const createHeader = (id = mainPreviewId) =>
  `
  <base href='' />
  <style class="fcc-hide-header">
    head *, title, meta, link, script {
      display: none !important;
    }
  </style>
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
      e.preventDefault();
      if (action && action.match(/https?:\\/\\//)) {
        window.parent.window.alert(
          i18nContent.t('misc.iframe-form-submit-alert', { externalLink: action  })
        )
      }
    }, false);
  </script>
`;

const createBeforeAllScript = (beforeAll?: string) => {
  if (!beforeAll) return '';

  return `<script>
  ${beforeAll};
</script>`;
};

type TestResult =
  | { pass: boolean }
  | { err: { message: string; stack?: string } };

function getContentDocument<T extends Document = FrameDocument>(
  document: Document,
  id: string
) {
  const frame = document.getElementById(id);
  if (!frame) return null;
  const frameDocument = (frame as HTMLIFrameElement).contentDocument;
  return frameDocument as T;
}

export const runTestInTestFrame = async function (
  document: Document,
  test: string,
  timeout: number
): Promise<TestResult | undefined> {
  const contentDocument = getContentDocument(document, testId);
  if (contentDocument) {
    return await Promise.race([
      new Promise<
        { pass: boolean } | { err: { message: string; stack?: string } }
        // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      >((_, reject) => setTimeout(() => reject('timeout'), timeout)),
      contentDocument.__runTest(test)
    ]);
  }
};

export const runPythonInFrame = function (
  document: Document,
  code: string,
  previewId: string
): void {
  const contentDocument = getContentDocument<PythonDocument>(
    document,
    previewId
  );
  void contentDocument?.__runPython(code);
};

const createFrame =
  (document: Document, id: string, title?: string) =>
  (frameContext: Context) => {
    const frame = document.createElement('iframe');
    frame.srcdoc = createContent(id, frameContext);
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
      window: element.contentWindow
    };
  };

// Tests should not use functions that directly interact with the user, so
// they're overridden. If tests need to spy on these functions, they can supply
// the spy themselves.
const overrideUserInteractions = (frameContext: Context) => {
  if (frameContext.window) {
    frameContext.window.prompt = () => null;
    frameContext.window.alert = () => {};
    frameContext.window.confirm = () => false;
  }
  return frameContext;
};

const noop = <T>(x: T) => x;

const actRE = new RegExp(/act\(\.\.\.\) is not supported in production builds/);

const updateProxyConsole =
  (proxyLogger?: ProxyLogger) => (frameContext: Context) => {
    // window does not exist if the preview is hidden, so we have to check.
    if (proxyLogger && frameContext?.window) {
      const oldLog = frameContext.window.console.log.bind(
        frameContext.window.console
      );
      const oldInfo = frameContext.window.console.info.bind(
        frameContext.window.console
      );

      const oldWarn = frameContext.window.console.warn.bind(
        frameContext.window.console
      );

      const oldError = frameContext.window.console.error.bind(
        frameContext.window.console
      );

      frameContext.window.console.log = function proxyConsole(
        ...args: string[]
      ) {
        proxyLogger(args.map((arg: string) => utilsFormat(arg)).join(' '));
        return oldLog(...(args as []));
      };

      frameContext.window.console.info = function proxyInfo(...args: string[]) {
        proxyLogger(args.map((arg: string) => utilsFormat(arg)).join(' '));
        return oldInfo(...(args as []));
      };

      frameContext.window.console.warn = function proxyWarn(...args: string[]) {
        proxyLogger(args.map((arg: string) => utilsFormat(arg)).join(' '));
        return oldWarn(...(args as []));
      };

      frameContext.window.console.error = function proxyWarn(
        ...args: string[]
      ) {
        if (args.every(arg => !actRE.test(arg))) {
          proxyLogger(args.map((arg: string) => utilsFormat(arg)).join(' '));
        }
        return oldError(...(args as []));
      };
    }

    return frameContext;
  };

const updateWindowI18next = (frameContext: Context) => {
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
      await frameContext.window?.document?.__initTestFrame({
        code: sources,
        getUserInput,
        loadEnzyme
      });

      if (frameReady) frameReady();
    })
    .catch(handleDocumentNotFound);
  return frameContext;
};

const initMainFrame =
  (frameReady?: () => void, proxyLogger?: ProxyLogger) =>
  (frameContext: Context) => {
    waitForFrame(frameContext)
      .then(async () => {
        // Overwriting the onerror added by createHeader to catch any errors thrown
        // after the frame is ready. It has to be overwritten, as proxyLogger cannot
        // be added as part of createHeader.

        if (frameContext.window) {
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
        }

        const document = frameContext.window?.document;
        if (document && '__initPythonFrame' in document) {
          await document.__initPythonFrame();
        }
        if (frameReady) frameReady();
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
  return new Promise<void>((resolve, reject) => {
    const rejectId = setTimeout(() => {
      // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
      reject(DOCUMENT_NOT_FOUND_ERROR);
    }, 10000);

    // We have to add the listener to the frame, not its contentWindow, because
    // the the latter does not receive the load event in Safari. It does not
    // matter which we use for Chrome and Firefox.
    frameContext.element?.addEventListener('load', () => {
      clearTimeout(rejectId);
      resolve();
    });
  });
};

export const createContent = (
  id: string,
  { build, sources, hooks }: { build: string; sources: Source; hooks?: Hooks }
) => {
  // DOCTYPE should be the first thing written to the frame, so if the user code
  // includes a DOCTYPE declaration, we need to find it and write it first.
  const doctype = sources.contents?.match(/^<!DOCTYPE html>/i)?.[0] || '';
  return (
    doctype + createBeforeAllScript(hooks?.beforeAll) + createHeader(id) + build
  );
};

const restoreScrollPosition = (frameContext: Context) => {
  scrollManager.registerScrollEventListener(frameContext.element);

  if (scrollManager.getPreviewScrollPosition()) {
    scrollManager.restorePreviewScrollPosition(frameContext.element);
  }
  return frameContext;
};

export const createMainPreviewFramer = (
  document: Document,
  proxyLogger: ProxyLogger,
  frameTitle: string,
  frameReady?: () => void
): ((args: Context) => void) =>
  createFramer({
    document,
    id: mainPreviewId,
    init: initMainFrame,
    proxyLogger,
    frameReady,
    frameTitle
  });

export const createProjectPreviewFramer = (
  document: Document,
  frameTitle: string
): ((args: Context) => void) =>
  createFramer({
    document,
    id: projectPreviewId,
    init: initPreviewFrame,
    frameTitle
  });

export const createTestFramer = (
  document: Document,
  proxyLogger: ProxyLogger,
  frameReady: () => void
): ((args: Context) => void) =>
  createFramer({
    document,
    id: testId,
    init: initTestFrame,
    proxyLogger,
    frameReady,
    updateWindowFunctions: overrideUserInteractions
  });

const createFramer = ({
  document,
  id,
  init,
  proxyLogger,
  frameReady,
  frameTitle,
  updateWindowFunctions
}: {
  document: Document;
  id: string;
  init: InitFrame;
  proxyLogger?: ProxyLogger;
  frameReady?: () => void;
  frameTitle?: string;
  updateWindowFunctions?: (frameContext: Context) => Context;
}) =>
  flow(
    createFrame(document, id, frameTitle),
    mountFrame(document, id),
    updateWindowFunctions ?? noop,
    updateProxyConsole(proxyLogger),
    updateWindowI18next,
    restoreScrollPosition,
    init(frameReady, proxyLogger)
  ) as (args: Context) => void;
