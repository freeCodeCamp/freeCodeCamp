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

  common.executeChallenge$ = function executeChallenge$() {
    const code = common.editor.getValue();
    const head = common.arrayToNewLineString(common.head);
    const tail = common.arrayToNewLineString(common.tail);

    attempts++;

    ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);

    // run checks for unsafe code
    return common.detectUnsafeCode$(code)
      // add head and tail and detect loops
      .map(code => head + code + tail)
      .flatMap(code => {
        if (common.challengeType === common.challengeTypes.HTML) {

          if (common.hasJs(code)) {
            // html has a script code
            // add faux code and test in webworker
            return common.addFaux$(code)
              .flatMap(code => common.detectLoops$(code))
              .flatMap(({ err }) => {
                if (err) {
                  return Observable.throw(err);
                }
                return common.updatePreview$(code)
                  .flatMap(() => common.runPreviewTests$({
                    code,
                    tests: common.tests.slice()
                  }));
              });
          }

          // no script code detected in html code
          // Update preview and run tests in iframe
          return common.updatePreview$(code)
            .flatMap(code => common.runPreviewTests$({
              code,
              tests: common.tests.slice()
            }));
        }

        // js challenge
        // remove comments and add tests to string
        return Observable.just(common.addTestsToString(Object.assign(
          {
            code: common.removeComments(code),
            tests: common.tests.slice()
          }
        )))
        .flatMap(common.detectLoops$)
        .flatMap(({ err, code, data, userTests }) => {
            if (err) {
              return Observable.throw(err);
            }

            // run tests
            // for now these are running in the browser
            return common.runTests$({
              data,
              code,
              userTests,
              output: data.output.replace(/\\\"/gi, '')
            });
        });
      });
  };

  return common;
}(window));
