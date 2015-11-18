window.common = (function({ common = { init: [] }}) {

  var BDDregex = new RegExp(
    '(expect(\\s+)?\\(.*\\;)|' +
    '(assert(\\s+)?\\(.*\\;)|' +
    '(assert\\.\\w.*\\;)|' +
    '(.*\\.should\\..*\\;)/'
  );

  common.addTestsToString = function(code) {
    const userTests = [];

    // insert tests from mongo
    for (var i = 0; i < common.tests.length; i++) {
      code += '\n' + common.tests[i];
    }

    var counter = 0;
    var match = BDDregex.exec(code);

    while (match) {
      var replacement = '//' + counter + common.salt;
      code = code.substring(0, match.index) +
        replacement +
        code.substring(match.index + match[0].length);

      userTests.push({
        err: null,
        text: match[0],
        line: counter
      });

      counter++;
      match = BDDregex.exec(code);
    }

    return { code, userTests };
  };

  return common;
}(window));
