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
    return Observable.just({ code })
      .flatMap(({ code }) => {
        if (
          code.match(/\$\s*?\(\s*?\$\s*?\)/gi) &&
          openingComments &&
          openingComments.length > code.match(/\*\//gi).length
        ) {

          return Observable.throw({
            err: 'SyntaxError: Unfinished multi-line comment',
            code
          });
        }

        if (code.match(detectUnsafeJQ)) {
          return Observable.throw({
            err: 'Unsafe $($)',
            code
          });
        }

        if (
          code.match(/function/g) &&
          !code.match(detectFunctionCall)
        ) {
          return Observable.throw({
            err: 'SyntaxError: Unsafe or unfinished function declaration',
            code
          });
        }

        if (code.match(detectUnsafeConsoleCall)) {
          return Observable.throw({
            err: 'Invalid if (null) console.log(1); detected',
            code
          });
        }

        // add head and tail and detect loops
        return Observable.just({ code: head + code + tail, original: code });
      })
      .flatMap(data => {
        if (common.challengeType === common.challengeTypes.HTML) {

          if (common.hasJs(code)) {
            return common.addFaux$(data)
              .flatMap(code => common.detectLoops$(code))
              .flatMap(({ err }) => {
                if (err) {
                  return Observable.throw({ err });
                }
                return common.runPreviewTests$({
                  code: data.code,
                  tests: common.tests.slice()
                });
              });
          }

          return common.updatePreview$(data.code)
            .flatMap(code => common.runPreviewTests$({
              code,
              tests: common.tests.slice()
            }));
        }

        return common.addTestsToString(Object.assign(
          data,
          {
            code: common.removeComments(code),
            tests: common.tests.slice()
          }
        ))
        .flatMap(common.detectLoops$)
        .flatMap(({ err, code, data, userTests, original }) => {
            if (err) {
              return Observable.throw({ err });
            }

            return common.runTests$({
              data,
              code,
              userTests,
              original,
              output: data.output.replace(/\\\"/gi, '')
            });
        });
      })
      .catch(e => {
        return e && e.err ?
          Observable.throw(e) :
          Observable.throw({ err: e });
      });
  };

  return common;
}(window));
