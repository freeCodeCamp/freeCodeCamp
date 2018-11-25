/* global chai, importScripts */
importScripts('https://cdnjs.cloudflare.com/ajax/libs/chai/4.2.0/chai.min.js');

const oldLog = self.console.log.bind(self.console);
self.console.log = function proxyConsole(...args) {
  self.__logs = [...self.__logs, ...args];
  return oldLog(...args);
};

onmessage = async e => {
  self.__logs = [];
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
    self.postMessage({ pass: true, logs: self.__logs.map(String) });
  } catch (err) {
    self.postMessage({
      err: {
        message: err.message,
        stack: err.stack,
        isAssertionError: err instanceof chai.AssertionError
      },
      logs: self.__logs.map(String)
    });
  }
};
