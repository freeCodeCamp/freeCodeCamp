/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
window.$ = parent.$;
window.$(function() {
  var _ = parent._;
  var chai = parent.chai;
  var expect = chai.expect;
  var tests = parent.tests;
  var common = parent.common;
  var editorValue = common.editor.getValue();

  common.tests.forEach(test => {
    try {
      /* eslint-disable no-eval */
      eval(test);
      /* eslint-enable no-eval */
    } catch (e) {
      parent.postError(JSON.stringify(e.message.split(':').shift()));
    } finally {
      parent.postSuccess(
        JSON.stringify(
          test.split(',').pop().replace(/\'/g, '').replace(/\)/, '')
        )
      );
    }
  });
});
