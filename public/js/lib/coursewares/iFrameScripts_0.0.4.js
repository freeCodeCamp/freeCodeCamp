(function() {
  var expect = chai.expect;
  var tests = parent.tests;
  var editor = parent.editorValueForIFrame;

  setTimeout(function() {
    for (var i = 0; i < tests.length; i++) {
      var thisTest = true;
      try {
        eval(parent.tests[i]);
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
