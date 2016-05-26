document.addEventListener('DOMContentLoaded', function() {
  var common = parent.__common;
  var frameId = window.__frameId;
  var frameReady = common[frameId + 'Ready$'] || { onNext() {} };
  var Rx = document.Rx;
  var chai = parent.chai;
  var source = document.__source;

  document.__getJsOutput = function getJsOutput() {
    if (window.__err || !common.shouldRun()) {
      return window.__err || 'source disabled';
    }
    let output;
    try {
      /* eslint-disable no-eval */
      output = eval(source);
      /* eslint-enable no-eval */
    } catch (e) {
      output = e.message;
      window.__err = e;
    }
    return output;
  };

  document.__runTests$ = function runTests$(tests = []) {
    /* eslint-disable no-unused-vars */
    const editor = { getValue() { return source; } };
    const code = source;
    /* eslint-enable no-unused-vars */
    if (window.__err) {
      return Rx.Observable.throw(window.__err);
    }

    // Iterate through the test one at a time
    // on new stacks
    return Rx.Observable.from(tests, null, null, Rx.Scheduler.default)
      // add delay here for firefox to catch up
      .delay(200)
      /* eslint-disable no-unused-vars */
      .map(({ text, testString }) => {
        const assert = chai.assert;
      /* eslint-enable no-unused-vars */
        const newTest = { text, testString };
        let test;
        try {
          /* eslint-disable no-eval */
          test = eval(testString);
          /* eslint-enable no-eval */
          if (typeof test === 'function') {
            // maybe sync/promise/observable
            if (test.length === 0) {
              test();
            }
            // callback test
            if (test.length === 1) {
              console.log('callback test');
            }
          }
        } catch (e) {
          newTest.err = e.message + '\n' + e.stack;
        }
        if (!newTest.err) {
          newTest.pass = true;
        }
        return newTest;
      })
      // gather tests back into an array
      .toArray();
  };

  // used when updating preview without running tests
  document.__checkPreview$ = function checkPreview$(args) {
    if (window.__err) {
      return Rx.Observable.throw(window.__err);
    }
    return Rx.Observable.just(args);
  };

  // now that the runPreviewTest$ is defined
  // we set the subject to true
  // this will let the updatePreview
  // script now that we are ready.
  frameReady.onNext(null);
});
