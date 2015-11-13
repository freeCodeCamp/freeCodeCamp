window.common = (function(global) {
  const {
    CodeMirror,
    document: doc,
    common = { init: [] }
  } = global;

  const { challengeType = '0' } = common;

  if (!CodeMirror) {
    return {};
  }

  if (
    challengeType === '0' ||
    challengeType === '7'
  ) {
    return {};
  }

  common.codeOutput = CodeMirror.fromTextArea(
    doc.getElementById('codeOutput'),
    {
      lineNumbers: false,
      mode: 'text',
      theme: 'monokai',
      readOnly: 'nocursor',
      lineWrapping: true
    }
  );

  common.codeOutput.setValue(`
    /**
      * Your output will go here.
      * Console.log() -type statements
      * will appear in your browser\'s
      * DevTools JavaScript console.
      */'
  `);

  common.codeOutput.setSize('100%', '100%');

  return common;
}(window));
