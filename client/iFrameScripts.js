/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
window.__$ = parent.$;
window.__$(function() {
  var _ = parent._;
  var Rx = parent.Rx;
  var chai = parent.chai;
  var assert = chai.assert;
  var tests = parent.tests;
  var common = parent.common;
  var editor = common.editor.getValue();
  // change the context of $ so it uses the iFrame for testing
  var $ = __$.proxy(__$.fn.find, __$(document));

  common.runPreviewTests$ =
    function runPreviewTests$({ tests = [], ...rest }) {
      return Rx.Observable.from(tests)
        .map(test => {
          const userTest = {};
          try {
            /* eslint-disable no-eval */
            eval(test);
            /* eslint-enable no-eval */
          } catch (e) {
            userTest.err = e.message.split(':').shift();
          } finally {
            userTest.text = test
              .split(',')
              .pop()
              .replace(/\'/g, '')
              .replace(/\)/, '');
          }
          return userTest;
        })
        .toArray()
        .map(tests => ({ ...rest, tests }));
    };

  // now that the runPreviewTest$ is defined
  // we set the subject to true
  // this will let the updatePreview
  // script now that we are ready.
  common.previewReady$.onNext(true);
});
