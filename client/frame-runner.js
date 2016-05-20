document.addEventListener('DOMContentLoaded', function() {
  var common = parent.__common;
  var Rx = parent.Rx;

  common.getJsOutput = function evalJs(source = '') {
    if (window.__err || !common.shouldRun()) {
      return window.__err || 'source disabled';
    }
    let output;
    try {
      /* eslint-disable no-eval */
      output = eval(source);
      /* eslint-enable no-eval */
    } catch (e) {
      window.__err = e;
    }
    return output;
  };

  common.runTests$ = function runTests$({ tests = [], source }) {
    const editor = { getValue() { return source; } };
    if (window.__err) {
      return Rx.Observable.throw(window.__err);
    }

    // Iterate through the test one at a time
    // on new stacks
    return Rx.Observable.from(tests, null, null, Rx.Scheduler.default)
      // add delay here for firefox to catch up
      .delay(100)
      .map(({ text, testString }) => {
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
          newTest.err = e.message.split(':').shift();
        }
        return newTest;
      })
      // gather tests back into an array
      .toArray();
  };

  // used when updating preview without running tests
  common.checkPreview$ = function checkPreview$(args) {
    if (window.__err) {
      return Rx.Observable.throw(window.__err);
    }
    return Rx.Observable.just(args);
  };

  // now that the runPreviewTest$ is defined
  // we set the subject to true
  // this will let the updatePreview
  // script now that we are ready.
  common.testFrameReady$.onNext(true);
});
