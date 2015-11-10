/* eslint-disable no-undef, no-unused-vars, no-native-reassign */
(function() {
  var expect = chai.expect;
  var tests = parent.tests;
  var editor = parent.editorValueForIFrame;

  setTimeout(function() {
    for (var i = 0; i < tests.length; i++) {
      var thisTest = true;
      try {
        /* eslint-disable no-eval */
        eval(parent.tests[i]);
        /* eslint-enable no-eval */
      } catch (err) {
        allTestsGood = false;
        thisTest = false;
        parent.postError(JSON.stringify(err.message.split(':').shift()));
      } finally {
        if (thisTest) {
          parent.postSuccess(JSON.stringify(tests[i].split(',').pop().replace(
            /\'/g, '').replace(/\)/, '')));
        }
      }
    }
  }, 10);
})();
