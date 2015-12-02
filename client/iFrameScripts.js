/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
// the $ on the iframe window object is the same
// as the one used on the main site, but
// uses the iframe document as the context
window.$(document).ready(function() {
  var _ = parent._;
  var Rx = parent.Rx;
  var chai = parent.chai;
  var assert = chai.assert;
  var tests = parent.tests;
  var common = parent.common;

  window.loopProtect.hit = function(line) {
    window.__err = new Error(
      'Potential infinite loop at line ' + line
    );
  };

  common.getJsOutput = function evalJs(code = '') {
    let output;
    try {
      /* eslint-disable no-eval */
      output = eval(code);
      /* eslint-enable no-eval */
    } catch (e) {
      window.__err = e;
    }
    return output;
  };

  common.runPreviewTests$ =
    function runPreviewTests$({
    tests = [],
    originalCode,
    ...rest
  }) {
      const code = originalCode;
      const editor = { getValue() { return originalCode; } };
      if (window.__err) {
        return Rx.Observable.throw(window.__err);
      }

      return Rx.Observable.from(tests)
        .map(test => {
          const userTest = {};
          common.appendToOutputDisplay('');
          try {
            /* eslint-disable no-eval */
            eval(test);
            /* eslint-enable no-eval */
          } catch (e) {
            userTest.err = e.message.split(':').shift();
          } finally {
            if (!test.match(/message: /g)) {
              userTest.text = 'message: ' + test
                .split(',')
                .pop()
                .replace(/\'/g, '')
                .replace(/\)/, '');
            } else {
              userTest.text = test;
            }
          }
          return userTest;
        })
        .toArray()
        .map(tests => ({ ...rest, tests, originalCode }));
    };

  // now that the runPreviewTest$ is defined
  // we set the subject to true
  // this will let the updatePreview
  // script now that we are ready.
  common.previewReady$.onNext(true);
});
