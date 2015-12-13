window.common = (function(global) {
  const {
    CodeMirror,
    document: doc,
    common = { init: [] }
  } = global;

  const { challengeTypes, challengeType = '0' } = common;

  function convertDisplayValue(displayVal) {
    var convertedArray = [];
    if (displayVal instanceof Array) {
       return `["${displayVal.join('", "')}"]`;
    } else if (displayVal !== null && typeof displayVal === 'object') {
      convertedArray = Object.keys(displayVal).map((key) =>
        '' + displayVal[key]
      );
       return `["${convertedArray.join('", "')}"]`;
    }
    return '' + displayVal;
  }

  if (
    !CodeMirror ||
    challengeType !== challengeTypes.JS &&
    challengeType !== challengeTypes.BONFIRE
  ) {
    common.updateOutputDisplay = () => {};
    common.appendToOutputDisplay = () => {};
    return common;
  }

  var codeOutput = CodeMirror.fromTextArea(
    doc.getElementById('codeOutput'),
    {
      lineNumbers: false,
      mode: 'text',
      theme: 'monokai',
      readOnly: 'nocursor',
      lineWrapping: true
    }
  );

  codeOutput.setValue(`/**
  * Your output will go here.
  * Console.log() -type statements
  * will appear in your browser\'s
  * DevTools JavaScript console.
  */`);

  codeOutput.setSize('100%', '100%');

  common.updateOutputDisplay = function updateOutputDisplay(displayVal = '') {
    const convertedDisplayVal = convertDisplayValue(displayVal);
    codeOutput.setValue(convertedDisplayVal);
    return convertedDisplayVal;
  };

  common.appendToOutputDisplay =
    function appendToOutputDisplay(displayVal = '') {
      const convertedDisplayVal = convertDisplayValue(displayVal);
      codeOutput.setValue(codeOutput.getValue() + convertedDisplayVal);
      return convertedDisplayVal;
  };

  return common;
}(window));
