import chai from 'chai';
import '@babel/polyfill';
import { toString as __toString } from 'lodash-es';
import * as helpers from '@freecodecamp/curriculum-helpers';
import { format as __format } from '../../utils/format';

const ctx: Worker & typeof globalThis = self as unknown as Worker &
  typeof globalThis;

const __utils = (() => {
  const MAX_LOGS_SIZE = 64 * 1024;

  let logs: string[] = [];

  function flushLogs() {
    if (logs.length) {
      ctx.postMessage({
        type: 'LOG',
        data: logs.join('\n')
      });
      logs = [];
    }
  }

  function pushLogs(logs: string[], args: string[]) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    logs.push(args.map(arg => __format(arg)).join(' '));
    if (logs.join('\n').length > MAX_LOGS_SIZE) {
      flushLogs();
    }
  }

  const oldLog = ctx.console.log.bind(ctx.console);
  function proxyLog(...args: string[]) {
    pushLogs(logs, args);
    return oldLog(...args);
  }

  const oldInfo = ctx.console.info.bind(ctx.console);
  function proxyInfo(...args: string[]) {
    pushLogs(logs, args);
    return oldInfo(...args);
  }

  const oldWarn = ctx.console.warn.bind(ctx.console);
  function proxyWarn(...args: string[]) {
    pushLogs(logs, args);
    return oldWarn(...args);
  }

  const oldError = ctx.console.error.bind(ctx.console);
  function proxyError(...args: string[]) {
    pushLogs(logs, args);
    return oldError(...args);
  }

  // unless data.type is truthy, this sends data out to the testRunner
  function postResult(data: unknown) {
    flushLogs();
    ctx.postMessage(data);
  }

  function log(...msgs: Error[]) {
    if (msgs && msgs[0] && !(msgs[0] instanceof chai.AssertionError)) {
      // discards the stack trace via toString as it only useful to debug the
      // site, not a specific challenge.
      console.log(...msgs.map(msg => msg.toString()));
    }
  }

  const toggleProxyLogger = (on: unknown) => {
    ctx.console.log = on ? proxyLog : oldLog;
    ctx.console.info = on ? proxyInfo : oldInfo;
    ctx.console.warn = on ? proxyWarn : oldWarn;
    ctx.console.error = on ? proxyError : oldError;
  };

  return {
    postResult,
    log,
    toggleProxyLogger,
    flushLogs
  };
})();

interface TestEvaluatorEvent extends MessageEvent {
  data: {
    code: {
      contents: string;
      editableContents: string;
      original: { [id: string]: string };
    };
    removeComments: boolean;
    firstTest: unknown;
    testString: string;
    build: string;
    sources: {
      [fileName: string]: unknown;
    };
  };
}

/* Run the test if there is one.  If not just evaluate the user code */
ctx.onmessage = async (e: TestEvaluatorEvent) => {
  /* eslint-disable @typescript-eslint/no-unused-vars */
  let code = (e.data?.code?.contents || '').slice();
  code = e.data?.removeComments ? helpers.removeJSComments(code) : code;
  let editableContents = (e.data?.code?.editableContents || '').slice();
  editableContents = e.data?.removeComments
    ? helpers.removeJSComments(editableContents)
    : editableContents;

  const assert = chai.assert;
  const __helpers = helpers;
  // Fake Deep Equal dependency
  const DeepEqual = (a: unknown, b: unknown) =>
    JSON.stringify(a) === JSON.stringify(b);

  // Build errors should be reported, but only once:
  __utils.toggleProxyLogger(e.data.firstTest);
  /* eslint-enable @typescript-eslint/no-unused-vars */
  try {
    let testResult;
    // This can be reassigned by the eval inside the try block, so it should be declared as a let
    // eslint-disable-next-line prefer-const
    let __userCodeWasExecuted = false;
    /* eslint-disable no-eval */
    try {
      // Logging is proxyed after the build to catch console.log messages
      // generated during testing.
      testResult = (await eval(`${
        e.data?.removeComments
          ? helpers.removeJSComments(e.data.build)
          : e.data.build
      }
__utils.flushLogs();
__userCodeWasExecuted = true;
__utils.toggleProxyLogger(true);
${e.data.testString}`)) as unknown;
    } catch (err) {
      if (__userCodeWasExecuted) {
        // rethrow error, since test failed.
        throw err;
      }
      // log build errors unless they're related to import/export/require (there
      // are challenges that use them and they should not trigger warnings)
      if (
        (err as Error).name !== 'ReferenceError' ||
        ((err as Error).message !== 'require is not defined' &&
          (err as Error).message !== 'exports is not defined')
      ) {
        __utils.log(err as Error);
      }
      // the tests may not require working code, so they are evaluated even if
      // the user code does not get executed.
      testResult = eval(e.data.testString) as unknown;
    }
    /* eslint-enable no-eval */
    if (typeof testResult === 'function') {
      await testResult((fileName: string) =>
        __toString(e.data.sources[fileName])
      );
    }
    __utils.postResult({
      pass: true
    });
  } catch (err) {
    // Errors from testing go to the browser console only.
    __utils.toggleProxyLogger(false);
    // Report execution errors in case user code has errors that are only
    // uncovered during testing.
    __utils.log(err as Error);
    // postResult flushes the logs and must be called after logging is finished.
    __utils.postResult({
      err: {
        message: (err as Error).message,
        stack: (err as Error).stack
      }
    });
  }
};

ctx.postMessage({ type: 'contentLoaded' });
