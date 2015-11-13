window.common = (function(global) {
  const {
    ga,
    common = { init: [] }
  } = global;

  let attempts = 0;
  common.executeChallenge = function executeChallenge(shouldTest) {
    const editorValue = common.editor.getValue();
    const head = common.arrayToNewLineString(common.head);
    const tail = common.arrayToNewLineString(common.tail);
    const codeOutput = common.codeOutput;

    attempts++;
    ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);
    $('#testSuite').empty();

    const openingComments = editorValue.match(/\/\*/gi);

    // checks if the number of opening comments(/*) matches the number of
    // closing comments(*/)
    if (
      editorValue.match(/\$\s*?\(\s*?\$\s*?\)/gi) &&
      openingComments &&
      openingComments.length > editorValue.match(/\*\//gi).length
    ) {

      common.editor.setValue(common.editor.getValue() + '*/');
      codeOutput.setValue('Unfinished multi-line comment');
      return null;
    }

    if (common.challengeType !== '0') {
      let userJavaScript = head + common.editor.getValue() + tail;

      userJavaScript = common.removeComments(userJavaScript);
      userJavaScript = common.addTests(userJavaScript);
      // simple fix in case the user forgets to invoke their function

      if (userJavaScript.match(/function/gi)) {
        if (userJavaScript.match(/function\s*?\(|function\s+\w+\s*?\(/gi)) {
          common.runInSand(userJavaScript, function(err, message) {
            if (err) {
              codeOutput.setValue(err);
              if (shouldTest) {
                common.runTests('Error', null);
              }
            } else {
              codeOutput.setValue(message.output);
              codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi, ''));
              message.input = common.removeLogs(message.input);
              if (shouldTest) {
                common.runTests(null, message);
              }
            }
          });
        } else {
          codeOutput.setValue('Unsafe or unfinished function declaration');
        }
      } else {
        common.runInSand(userJavaScript, function(cls, message) {

          if (cls) {
            codeOutput.setValue(message.error);
            if (shouldTest) {
              common.runTests('Error', null);
            }
          } else {
            codeOutput.setValue(message.output);
            codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi, ''));
            message.input = common.removeLogs(message.input);

            if (shouldTest) {
              common.runTests(null, message);
            }
          }
        });
      }
    } else if (
      !editorValue.match(/\$\s*?\(\s*?\$\s*?\)/gi) &&
      common.challengeType === '0'
    ) {
      common.safeHTMLRun(shouldTest);
    } else {
      common.workerError('Unsafe $($)');
    }

    setTimeout(function() {
      var $marginFix = $('.innerMarginFix');
      $marginFix.css('min-height', $marginFix.height());
    }, 1000);
  };
  return common;
}(window));
