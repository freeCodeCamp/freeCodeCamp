import chai from 'chai';
import '@babel/polyfill';

const oldLog = self.console.log.bind(self.console);
self.console.log = function proxyConsole(...args) {
  self.postMessage({ type: 'LOG', data: String(args) });
  return oldLog(...args);
};

onmessage = async e => {
  const { script: __test, code } = e.data;
  /* eslint-disable no-unused-vars */
  const assert = chai.assert;
  // Fake Deep Equal dependency
  const DeepEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);
  /* eslint-enable no-unused-vars */
  try {
    // eslint-disable-next-line no-eval
    const testResult = eval(__test);
    if (typeof testResult === 'function') {
      await testResult(() => code);
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
