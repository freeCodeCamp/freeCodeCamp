window.common = (function({ common = { init: [] }}) {
  common.runTests = function runTests(err, data) {
    var head = common.arrayToNewLineString(common.head);
    var tail = common.arrayToNewLineString(common.tail);
    var userTests = Array.isArray(userTests) ? userTests.slice() : [];

    var editorValue = head + common.editor.getValue() + tail;

    if (err) {
      userTests = [{
        text: 'Program Execution Failure',
        err
      }];
      return userTests;
    }

    // Add blocks to test exploits here!
    if (editorValue.match(/if\s\(null\)\sconsole\.log\(1\);/gi)) {
      userTests = [{
        text: 'Program Execution Failure',
        err: 'Invalid if (null) console.log(1); detected'
      }];

      return userTests;
    }

    return userTests.map(function(test) {
      try {
        if (test) {
          /* eslint-disable no-eval, no-unused-vars */
          var output = eval(common.reassembleTest(test, data));
          /* eslint-enable no-eval, no-unused-vars */
        }
      } catch (e) {
        test.err = e.message;
      }

      return test;
    });
  };

  return common;
}(window));
