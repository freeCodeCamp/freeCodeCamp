window.common = (function(global) {
  const {
    CodeMirror,
    emmetCodeMirror,
    common = { init: [] }
  } = global;

  const { challengeType = '0' } = common;

  if (
    !CodeMirror ||
    challengeType === '0' ||
    challengeType === '7'
  ) {
    common.editor = {};
    return common;
  }

  var delay;
  var codeStorageFactory = common.codeStorageFactory;

  var editor = CodeMirror.fromTextArea(
    document.getElementById('codeEditor'),
    {
      lint: true,
      lineNumbers: true,
      mode: 'javascript',
      theme: 'monokai',
      runnable: true,
      matchBrackets: true,
      autoCloseBrackets: true,
      scrollbarStyle: 'null',
      lineWrapping: true,
      gutters: ['CodeMirror-lint-markers']
    }
  );

  editor.setSize('100%', 'auto');

  var codeStorage = common.codeStorage =
    codeStorageFactory(editor, common.challengeName);

  editor.on('keyup', function() {
    clearTimeout(codeStorage.updateTimeoutId);
    codeStorage.updateTimeoutId = setTimeout(
      codeStorage.updateStorage.bind(codeStorage),
      codeStorage.updateWait
    );
  });

  // Initialize CodeMirror editor with a nice html5 canvas demo.
  editor.on('keyup', function() {
    clearTimeout(delay);
    delay = setTimeout(common.updatePreview, 300);
  });

  editor.setOption('extraKeys', {
    Tab: function(cm) {
      if (cm.somethingSelected()) {
        cm.indentSelection('add');
      } else {
        var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    },
    'Shift-Tab': function(cm) {
      if (cm.somethingSelected()) {
        cm.indentSelection('subtract');
      } else {
        var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    },
    'Ctrl-Enter': function() {
      common.executeChallenge(true);
      return false;
    },
    'Cmd-Enter': function() {
      common.executeChallenge(true);
      return false;
    }
  });


  var info = editor.getScrollInfo();

  var after = editor.charCoords({
    line: editor.getCursor().line + 1,
    ch: 0
  }, 'local').top;

  if (info.top + info.clientHeight < after) {
    editor.scrollTo(null, after - info.clientHeight + 3);
  }

  if (emmetCodeMirror) {
    emmetCodeMirror(
      editor,
      {
        'Cmd-E': 'emmet.expand_abbreviation',
        Tab: 'emmet.expand_abbreviation_with_tab',
        Enter: 'emmet.insert_formatted_line_break_only'
      }
    );
  }
  common.init.push(function() {
    var editorValue;
    if (common.codeUri.isAlive()) {
      editorValue = common.codeUri.parse();
    } else {
      editorValue = codeStorage.isAlive() ?
        codeStorage.getStoredValue() :
        common.seed;
    }

    editor.setValue(common.replaceSafeTags(editorValue));
    editor.refresh();
  });

  common.editor = editor;

  return common;
}(window));
