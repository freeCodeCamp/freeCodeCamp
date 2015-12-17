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

  let attempts = "NaN";
  let attempts_val = 0;
  let attempts_ranges = function(attempts){
	if (attempts == 0){
		return "0";
	}
	else if (attempts > 0 && attempts <= 5){
		return "1-5";
	}
	else if (attempts > 5 && attempts <= 10){
		return "6-10";
	}
	else if (attempts > 10 && attempts <= 20){
		return "11-20";
	}
	else if (attempts > 20 && attempts <= 30){
		return "21-30";
	}
	else if (attempts > 30 && attempts <= 50){
		return "31-50";
	}
	else{
		return "51+";
	} 
  }
  
  common.executeChallenge$ = function executeChallenge$() {
    const code = common.editor.getValue();
    const originalCode = code;
    const head = common.arrayToNewLineString(common.head);
    const tail = common.arrayToNewLineString(common.tail);
    const combinedCode = head + code + tail;

    attempts_val++;
	attempts = attempts_ranges(attempts_val);
	

    ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);

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
