/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
window.__$ = parent.$;
window.__$(function() {
  var _ = parent._;
  var Rx = parent.Rx;
  var chai = parent.chai;
  var assert = chai.assert;
  var tests = parent.tests;
  var common = parent.common;
  var code = common.editor.getValue();
  var editor = common.editor;
  // grab the iframe body element
  var body = document.getElementsByTagName('body');
  // change the context of $ so it uses the iFrame for testing
  var $ = __$.proxy(__$.fn.find, __$(body));

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

});
