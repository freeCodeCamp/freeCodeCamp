/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
window.$ = parent.$;
window.$(function() {
  var _ = parent._;
  var chai = parent.chai;
  var expect = chai.expect;
  var tests = parent.tests;
  var common = parent.common;
  var editorValue = common.editor.getValue();
  var editor = common.editor;

  var userTests = common.tests.map(test => {
    var userTest = {};
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
  });
});
