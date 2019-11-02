import chai from 'chai';
import '@babel/polyfill';
import __toString from 'lodash/toString';

const __utils = (() => {
  const MAX_LOGS_SIZE = 64 * 1024;

  let logs = [];
  function flushLogs() {
    if (logs.length) {
      self.postMessage({
        type: 'LOG',
        data: logs.join('\n')
      });
      logs = [];
    }
  }

  function replacer(key, value) {
    if (Number.isNaN(value)) {
      return 'NaN';
    }
    return value;
  }

  const oldLog = self.console.log.bind(self.console);
  self.console.log = function proxyConsole(...args) {
    logs.push(args.map(arg => '' + JSON.stringify(arg, replacer)).join(' '));
    if (logs.join('\n').length > MAX_LOGS_SIZE) {
      flushLogs();
    }
    return oldLog(...args);
  };

  function postResult(data) {
    flushLogs();
    self.postMessage(data);
  }

  return {
    postResult,
    oldLog
  };
})();

/* Run the test if there is one.  If not just evaluate the user code */
self.onmessage = async e => {
  /* eslint-disable no-unused-vars */
  const { code = '' } = e.data;
  const assert = chai.assert;
  // Fake Deep Equal dependency
  const DeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  /* eslint-enable no-unused-vars */
  try {
    let testResult;
    let __userCodeWasExecuted = false;
    /* eslint-disable no-eval */
    try {
      testResult = eval(`
        ${e.data.build}
        __userCodeWasExecuted = true;
        ${e.data.testString}
      `);
    } catch (err) {
      if (__userCodeWasExecuted) {
        // rethrow error, since test failed.
        throw err;
      } else if (e.data.testString) {
        // report errors to dev console if tests are running (since some
        // challenges should pass with code that throws errors)
        __utils.oldLog(err);
      } else {
        // user is editing code, so both consoles should report errors
        console.log(err.toString());
      }
      testResult = eval(e.data.testString);
    }
    /* eslint-enable no-eval */
    if (typeof testResult === 'function') {
      await testResult(fileName => __toString(e.data.sources[fileName]));
    }
    __utils.postResult({
      pass: true
    });
  } catch (err) {
    __utils.postResult({
      err: {
        message: err.message,
        stack: err.stack
      }
    });
    if (!(err instanceof chai.AssertionError)) {
      console.error(err);
    }
  }
};

self.postMessage({ type: 'contentLoaded' });
