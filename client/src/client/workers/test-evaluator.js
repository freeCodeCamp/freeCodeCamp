import chai from 'chai';
import '@babel/polyfill';
import __toString from 'lodash/toString';

const oldLog = self.console.log.bind(self.console);
self.console.log = function proxyConsole(...args) {
  self.postMessage({ type: 'LOG', data: String(args) });
  return oldLog(...args);
};

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
        throw err;
      }
      testResult = eval(e.data.testString);
    }
    /* eslint-enable no-eval */
    if (typeof testResult === 'function') {
      await testResult(fileName => __toString(e.data.sources[fileName]));
    }
    self.postMessage({ pass: true });
  } catch (err) {
    self.postMessage({
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
