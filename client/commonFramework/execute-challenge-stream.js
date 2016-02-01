window.common = (function(global) {
  const {
    ga,
    common = { init: [] }
  } = global;

  const {
    addLoopProtect,
    getJsFromHtml,
    detectUnsafeCode$,
    updatePreview$,
    challengeType,
    challengeTypes
  } = common;

  common.executeChallenge$ = function executeChallenge$() {
    const code = common.editor.getValue();
    const originalCode = code;
    const head = common.arrayToNewLineString(common.head);
    const tail = common.arrayToNewLineString(common.tail);
    const combinedCode = head + code + tail;

    ga('send', 'event', 'Challenge', 'ran-code', common.gaName);

    // run checks for unsafe code
    return detectUnsafeCode$(code)
      // add head and tail and detect loops
      .map(() => {
        if (challengeType !== challengeTypes.HTML) {
          return `<script>;${addLoopProtect(combinedCode)}/**/</script>`;
        }

        return addLoopProtect(combinedCode);
      })
      .flatMap(code => updatePreview$(code))
      .flatMap(code => {
        let output;

        if (
          challengeType === challengeTypes.HTML &&
          common.hasJs(code)
        ) {
          output = common.getJsOutput(getJsFromHtml(code));
        } else if (challengeType !== challengeTypes.HTML) {
          output = common.getJsOutput(addLoopProtect(combinedCode));
        }

        return common.runPreviewTests$({
          tests: common.tests.slice(),
          originalCode,
          output
        });
      });
  };

  return common;
}(window));
