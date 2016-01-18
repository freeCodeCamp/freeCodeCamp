window.common = (function(global) {
  const {
    Rx: { Subject, Observable },
    CodeMirror,
    emmetCodeMirror,
    Clipboard,
    common = { init: [] }
  } = global;

  const { challengeType = '0', challengeTypes } = common;

  if (
    !CodeMirror ||
    challengeType === challengeTypes.BASEJUMP ||
    challengeType === challengeTypes.ZIPLINE ||
    challengeType === challengeTypes.VIDEO ||
    challengeType === challengeTypes.STEP ||
    challengeType === challengeTypes.HIKES
  ) {
    common.editor = {};
    return common;
  }

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

  var clipboard = new Clipboard('.copy-btn', {
    text: function(trigger) {
      var type;
      switch (common.challengeType) {
        case common.challengeTypes.HTML:
          type = 'html';
          break;
        case common.challengeTypes.JS:
        case common.challengeTypes.BONFIRE:
          type = 'js';
          break;
        default:
          type = '';
      }

      var returnValue = '';
      switch (trigger.id) {
        case 'markdown':
          returnValue = '```' + type + '\n' + editor.getSelection() + '\n```';
          editor.replaceSelection(editor.getSelection());
          return returnValue;
        case 'plain':
          returnValue = editor.getSelection();
          editor.replaceSelection(editor.getSelection());
          return returnValue;
        case 'link':
        default:
          editor.replaceSelection(editor.getSelection());
          return '[Challenge - ' + common.challengeName +
          (common.username ? ' (' + common.username + '\'s solution)' : '')
          + '](' + String(window.location).replace(/\)/g, '%29') + ')';
      }
    }
  });

  common.clipboard = clipboard;

  var copyButton = `<a id="copy-btn-parent" href="/" data-toggle="popover" \
data-trigger="manual" data-content="<a class='copy-btn' id='link' href='/' \
data-toggle='popover' data-trigger='manual' \
title='Copy the link to this challenge'>Copy Link</a><br><a class='copy-btn' \
id='markdown' href='/' data-toggle='popover'\ data-trigger='manual' \
title='Copy the contents of code editor with Markdown syntax \
highlighting'>Copy as Pretty Code</a><br><a class='copy-btn' id='plain' \
href='/' data-toggle='popover' data-trigger='manual' title='Copy the \
contents of code editor'>Copy as Plain Code</a>"></a>`;

  var left = -5, top = -5;
  $(document).mousemove(function(event) {
    left = event.pageX;
    top = event.pageY;
  });

  function debounce(func, wait, immediate) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) {
          func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        func.apply(context, args);
      }
    };
  }

  var showPopover = debounce(function() {
    if (editor.somethingSelected()) {
      $('#copy-btn-parent').popover('show');
      var editorOffset = $('#mainEditorPanel > form.code').offset(),
      editorHeight = $('#mainEditorPanel > form.code').height(),
      editorWidth = $('#mainEditorPanel > form.code').width(),
      theHeight = $('.popover').height(),
      theWidth = $('.popover').width();
      if ((left < editorOffset.left
      || left > editorOffset.left + editorWidth - theWidth) || left === -5) {
        left = (editorOffset.left + editorWidth) / 2;
      }
      if ((top < editorOffset.top
      || top > editorOffset.top + editorHeight - theHeight) || top === -5) {
        top = (editorOffset.top + editorHeight) / 2;
      }
      $('.popover').css('left', (left + 10) + 'px');
      $('.popover').css('top', (top - (theHeight / 2) - 7) + 'px');
    }
  }, 250);

  if (
    challengeType === challengeTypes.HTML ||
    challengeType === challengeTypes.JS ||
    challengeType === challengeTypes.BONFIRE
  ) {

    $('body').append(copyButton);
    $('#copy-btn-parent').popover({html: true});

    CodeMirror.on(document, 'mousedown', function() {
      $('#copy-btn-parent').popover('hide');
    });

    CodeMirror.on(document, 'mouseup', showPopover);

    $(document).on('click', '.copy-btn', function(e) {
      e.preventDefault();
      $('#copy-btn-parent').popover('hide');
    });
  }

  editor.setSize('100%', 'auto');

  common.editorExecute$ = new Subject();
  common.editorKeyUp$ = Observable.fromEventPattern(
    (handler) => editor.on('keyup', handler),
    (handler) => editor.off('keyup', handler)
  );

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
      common.editorExecute$.onNext();
      return false;
    },
    'Cmd-Enter': function() {
      common.editorExecute$.onNext();
      return false;
    },
    'Ctrl-A': function(cm) {
      cm.execCommand('selectAll');
      showPopover();
    },
    'Cmd-A': function(cm) {
      cm.execCommand('selectAll');
      showPopover();
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
    let editorValue;
    if (common.codeUri.isAlive()) {
      editorValue = common.codeUri.parse();
    } else {
      editorValue = common.codeStorage.isAlive(common.challengeName) ?
        common.codeStorage.getStoredValue(common.challengeName) :
        common.seed;
    }

    editor.setValue(common.replaceSafeTags(editorValue));
    editor.refresh();
  });

  common.editor = editor;

  return common;
}(window));
