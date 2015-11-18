// what are the executeChallenge functions?
// Should be responsible for starting after a submit action
// Should not be responsible for displaying results
// Should return results
// should grab editor value
// depends on main editor
window.common = (function(global) {
  const {
    ga,
    Rx: { Observable },
    common = { init: [] }
  } = global;

  let attempts = 0;
  const detectFunctionCall = /function\s*?\(|function\s+\w+\s*?\(/gi;
  const detectUnsafeJQ = /\$\s*?\(\s*?\$\s*?\)/gi;
  const detectUnsafeConsoleCall = /if\s\(null\)\sconsole\.log\(1\);/gi;

  common.executeChallenge$ = function executeChallenge$() {
    const code = common.editor.getValue();
    const head = common.arrayToNewLineString(common.head);
    const tail = common.arrayToNewLineString(common.tail);

    attempts++;

    ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);

    let openingComments = code.match(/\/\*/gi);

    // checks if the number of opening comments(/*) matches the number of
    // closing comments(*/)
    Observable.just({ code })
      .flatMap(code => {
        if (
          code.match(/\$\s*?\(\s*?\$\s*?\)/gi) &&
          openingComments &&
          openingComments.length > code.match(/\*\//gi).length
        ) {

          return Observable.just({
            err: 'SyntaxError: Unfinished multi-line comment',
            code: code
          });
        }

        if (code.match(detectUnsafeJQ)) {
          return Observable.just({
            err: 'Unsafe $($)',
            output: 'Unsafe $($)',
            code: code
          });
        }

        if (
          code.match(/function/g) &&
          !code.match(detectFunctionCall)
        ) {
          return Observable.just({
            err: 'SyntaxError: Unsafe or unfinished function declaration',
            code: code
          });
        }

        if (common.challengeType === '0') {
          let openingComments = code.match(/\<\!\-\-/gi);
          let closingComments = code.match(/\-\-\>/gi) || [];
          if (
            openingComments &&
            openingComments.length > closingComments.length
          ) {
            return Observable.just({
              err: 'SyntaxError: Unfinished HTML comment',
              code: code
            });
          }
        }

        if (code.match(detectUnsafeConsoleCall)) {
          return Observable.just({
            err: 'Invalid if (null) console.log(1); detected',
            code: code
          });
        }

        // add head and tail and detect loops
        return Observable.just({ code: head + code + tail })
          .map(code => {
            if (common.challengeType === common.challengeTypes.HTML) {
              return common.getScriptCode(code);
            }

            return common.addTestsToString(
              common.removeComments(code),
              common.tests.slice()
            );
          })
          .flatMap(common.detectLoops)
          .flatMap(({ err, code, data, userTests }) => {
              if (err) {
                return Observable.just({
                  err,
                  code,
                  data
                });
              }

              return common.runTests$({
                output: data.output.replace(/\\\"/gi, ''),
                data,
                code,
                userTests
              });
          });

      });
  };

  return common;
}(window));
