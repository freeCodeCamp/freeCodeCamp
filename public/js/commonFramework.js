'use strict';

window.common = (function (global) {
  // common namespace
  // all classes should be stored here
  // called at the beginning of dom ready
  var _global$Rx = global.Rx;
  var Disposable = _global$Rx.Disposable;
  var Observable = _global$Rx.Observable;
  var config = _global$Rx.config;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  config.longStackSupport = true;
  common.head = common.head || [];
  common.tail = common.tail || [];
  common.salt = Math.random();

  common.challengeTypes = {
    HTML: '0',
    JS: '1',
    VIDEO: '2',
    ZIPLINE: '3',
    BASEJUMP: '4',
    BONFIRE: '5',
    HIKES: '6',
    STEP: '7'
  };

  common.arrayToNewLineString = function arrayToNewLineString(seedData) {
    seedData = Array.isArray(seedData) ? seedData : [seedData];
    return seedData.reduce(function (seed, line) {
      return '' + seed + line + '\n';
    }, '');
  };

  common.seed = common.arrayToNewLineString(common.challengeSeed);

  common.replaceScriptTags = function replaceScriptTags(value) {
    return value.replace(/<script>/gi, 'fccss').replace(/<\/script>/gi, 'fcces');
  };

  common.replaceSafeTags = function replaceSafeTags(value) {
    return value.replace(/fccss/gi, '<script>').replace(/fcces/gi, '</script>');
  };

  common.replaceFormActionAttr = function replaceFormAction(value) {
    return value.replace(/<form[^>]*>/, function (val) {
      return val.replace(/action(\s*?)=/, 'fccfaa$1=');
    });
  };

  common.replaceFccfaaAttr = function replaceFccfaaAttr(value) {
    return value.replace(/<form[^>]*>/, function (val) {
      return val.replace(/fccfaa(\s*?)=/, 'action$1=');
    });
  };

  common.scopejQuery = function scopejQuery(str) {
    return str.replace(/\$/gi, 'j$').replace(/document/gi, 'jdocument').replace(/jQuery/gi, 'jjQuery');
  };

  common.unScopeJQuery = function unScopeJQuery(str) {
    return str.replace(/j\$/gi, '$').replace(/jdocument/gi, 'document').replace(/jjQuery/gi, 'jQuery');
  };

  var commentRegex = /(\/\*[^(\*\/)]*\*\/)|([ \n]\/\/[^\n]*)/g;
  common.removeComments = function removeComments(str) {
    return str.replace(commentRegex, '');
  };

  var logRegex = /(console\.[\w]+\s*\(.*\;)/g;
  common.removeLogs = function removeLogs(str) {
    return str.replace(logRegex, '');
  };

  common.reassembleTest = function reassembleTest(code, _ref) {
    if (code === undefined) code = '';
    var line = _ref.line;
    var text = _ref.text;

    var regexp = new RegExp('//' + line + common.salt);
    return code.replace(regexp, text);
  };

  common.getScriptContent$ = function getScriptContent$(script) {
    return Observable.create(function (observer) {
      var jqXHR = $.get(script, null, null, 'text').success(function (data) {
        observer.onNext(data);
        observer.onCompleted();
      }).fail(function (e) {
        return observer.onError(e);
      }).always(function () {
        return observer.onCompleted();
      });

      return new Disposable(function () {
        jqXHR.abort();
      });
    });
  };

  var openScript = /\<\s?script\s?\>/gi;
  var closingScript = /\<\s?\/\s?script\s?\>/gi;

  // detects if there is JavaScript in the first script tag
  common.hasJs = function hasJs(code) {
    return !!common.getJsFromHtml(code);
  };

  // grabs the content from the first script tag in the code
  common.getJsFromHtml = function getJsFromHtml(code) {
    // grab user javaScript
    return (code.split(openScript)[1] || '').split(closingScript)[0] || '';
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var $ = global.$;
  var Observable = global.Rx.Observable;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  common.ctrlEnterClickHandler = function ctrlEnterClickHandler(e) {
    // ctrl + enter or cmd + enter
    if (e.keyCode === 13 && (e.metaKey || e.ctrlKey)) {
      $('#complete-courseware-dialog').off('keydown', ctrlEnterClickHandler);
      if ($('#submit-challenge').length > 0) {
        $('#submit-challenge').click();
      } else {
        window.location = '/challenges/next-challenge?id=' + common.challengeId;
      }
    }
  };

  common.init.push(function ($) {

    var $marginFix = $('.innerMarginFix');
    $marginFix.css('min-height', $marginFix.height());

    common.submitBtn$ = Observable.fromEvent($('#submitButton'), 'click');

    common.resetBtn$ = Observable.fromEvent($('#reset-button'), 'click');

    // init modal keybindings on open
    $('#complete-courseware-dialog').on('shown.bs.modal', function () {
      $('#complete-courseware-dialog').keydown(common.ctrlEnterClickHandler);
    });

    // remove modal keybinds on close
    $('#complete-courseware-dialog').on('hidden.bs.modal', function () {
      $('#complete-courseware-dialog').off('keydown', common.ctrlEnterClickHandler);
    });

    // video checklist binding
    $('.challenge-list-checkbox').on('change', function () {
      var checkboxId = $(this).parent().parent().attr('id');
      if ($(this).is(':checked')) {
        $(this).parent().siblings().children().addClass('faded');
        if (!localStorage || !localStorage[checkboxId]) {
          localStorage[checkboxId] = true;
        }
      }

      if (!$(this).is(':checked')) {
        $(this).parent().siblings().children().removeClass('faded');
        if (localStorage[checkboxId]) {
          localStorage.removeItem(checkboxId);
        }
      }
    });

    $('.checklist-element').each(function () {
      var checklistElementId = $(this).attr('id');
      if (localStorage[checklistElementId]) {
        $(this).children().children('li').addClass('faded');
        $(this).children().children('input').trigger('click');
      }
    });

    // video challenge submit
    $('#next-courseware-button').on('click', function () {
      $('#next-courseware-button').unbind('click');
      if ($('.signup-btn-nav').length < 1) {
        var data;
        var completedWith = $('#completed-with').val() || null;
        var publicURL = $('#public-url').val() || null;
        var githubURL = $('#github-url').val() || null;
        switch (common.challengeType) {
          case common.challengeTypes.VIDEO:
            data = {
              id: common.challengeId,
              name: common.challengeName
            };
            $.post('/completed-challenge/', data).success(function (res) {
              if (!res) {
                return;
              }
              window.location.href = '/challenges/next-challenge?id=' + common.challengeId;
            }).fail(function () {
              window.location.href = '/challenges';
            });

            break;
          case common.challengeTypes.BASEJUMP:
          case common.challengeTypes.ZIPLINE:
            data = {
              challengeInfo: {
                challengeId: common.challengeId,
                challengeName: common.challengeName,
                completedWith: completedWith,
                publicURL: publicURL,
                githubURL: githubURL,
                challengeType: common.challengeType,
                verified: false
              }
            };

            $.post('/completed-zipline-or-basejump/', data).success(function () {
              window.location.href = '/challenges/next-challenge?id=' + common.challengeId;
            }).fail(function () {
              window.location.replace(window.location.href);
            });
            break;

          case common.challengeTypes.BONFIRE:
            window.location.href = '/challenges/next-challenge?id=' + common.challengeId;
            break;

          default:
            console.log('Happy Coding!');
            break;
        }
      }
    });

    if (common.challengeName) {
      window.ga('send', 'event', 'Challenge', 'load', common.challengeName);
    }

    $('#complete-courseware-dialog').on('hidden.bs.modal', function () {
      if (common.editor.focus) {
        common.editor.focus();
      }
    });

    $('#trigger-issue-modal').on('click', function () {
      $('#issue-modal').modal('show');
    });

    $('#trigger-help-modal').on('click', function () {
      $('#help-modal').modal('show');
    });

    $('#trigger-reset-modal').on('click', function () {
      $('#reset-modal').modal('show');
    });

    $('#trigger-next-challenge').on('click', function () {
      window.location.href = '/challenges/next-challenge?id=' + common.challengeId;
    });

    $('#trigger-prev-challenge').on('click', function () {
      window.location.href = '/challenges/prev-challenge?id=' + common.challengeId;
    });

    $('#trigger-pair-modal').on('click', function () {
      $('#pair-modal').modal('show');
    });

    $('#completed-courseware').on('click', function () {
      $('#complete-courseware-dialog').modal('show');
    });

    $('#help-ive-found-a-bug-wiki-article').on('click', function () {
      window.open('https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/' + "Help-I've-Found-a-Bug", '_blank');
    });

    $('#search-issue').on('click', function () {
      var queryIssue = window.location.href.toString().split('?')[0].replace(/(#*)$/, '');
      window.open('https://github.com/FreeCodeCamp/FreeCodeCamp/issues?q=' + 'is:issue is:all ' + common.challengeName + ' OR ' + queryIssue.substr(queryIssue.lastIndexOf('challenges/') + 11).replace('/', ''), '_blank');
    });
  });

  return common;
})(window);
// depends on: codeUri
'use strict';

window.common = (function (global) {
  var localStorage = global.localStorage;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  var codeStorage = {
    getStoredValue: function getStoredValue(key) {
      if (!localStorage || typeof localStorage.getItem !== 'function' || !key || typeof key !== 'string') {
        console.log('unable to read from storage');
        return '';
      }
      return '' + localStorage.getItem(key + 'Val');
    },

    isAlive: function isAlive(key) {
      var val = this.getStoredValue(key);
      return val !== 'null' && val !== 'undefined' && val && val.length > 0;
    },

    updateStorage: function updateStorage(key, code) {
      if (!localStorage || typeof localStorage.setItem !== 'function' || !key || typeof key !== 'string') {
        console.log('unable to save to storage');
        return code;
      }
      localStorage.setItem(key + 'Val', code);
      return code;
    }
  };

  common.codeStorage = codeStorage;

  return common;
})(window, window.common);
// store code in the URL
'use strict';

window.common = (function (global) {
  var _encode = global.encodeURIComponent;
  var _decode = global.decodeURIComponent;
  var location = global.location;
  var history = global.history;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;
  var replaceScriptTags = common.replaceScriptTags;
  var replaceSafeTags = common.replaceSafeTags;
  var replaceFormActionAttr = common.replaceFormActionAttr;
  var replaceFccfaaAttr = common.replaceFccfaaAttr;

  var queryRegex = /^(\?|#\?)/;
  function encodeFcc(val) {
    return replaceScriptTags(replaceFormActionAttr(val));
  }

  function decodeFcc(val) {
    return replaceSafeTags(replaceFccfaaAttr(val));
  }

  var codeUri = {
    encode: function encode(code) {
      return _encode(code);
    },
    decode: function decode(code) {
      try {
        return _decode(code);
      } catch (ignore) {
        return null;
      }
    },
    isInQuery: function isInQuery(query) {
      var decoded = codeUri.decode(query);
      if (!decoded || typeof decoded.split !== 'function') {
        return false;
      }
      return decoded.replace(queryRegex, '').split('&').reduce(function (found, param) {
        var key = param.split('=')[0];
        if (key === 'solution') {
          return true;
        }
        return found;
      }, false);
    },
    isAlive: function isAlive() {
      return codeUri.enabled && codeUri.isInQuery(location.search) || codeUri.isInQuery(location.hash);
    },
    getKeyInQuery: function getKeyInQuery(query) {
      var keyToFind = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

      return query.split('&').reduce(function (oldValue, param) {
        var key = param.split('=')[0];
        var value = param.split('=').slice(1).join('=');

        if (key === keyToFind) {
          return value;
        }
        return oldValue;
      }, null);
    },
    getSolutionFromQuery: function getSolutionFromQuery() {
      var query = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

      return decodeFcc(codeUri.decode(codeUri.getKeyInQuery(query, 'solution')));
    },
    parse: function parse() {
      if (!codeUri.enabled) {
        return null;
      }
      var query;
      if (location.search && codeUri.isInQuery(location.search)) {
        query = location.search.replace(/^\?/, '');

        if (history && typeof history.replaceState === 'function') {
          history.replaceState(history.state, null, location.href.split('?')[0]);
          location.hash = '#?' + encodeFcc(query);
        }
      } else {
        query = location.hash.replace(/^\#\?/, '');
      }

      if (!query) {
        return null;
      }

      return this.getSolutionFromQuery(query);
    },
    querify: function querify(solution) {
      if (!codeUri.enabled) {
        return null;
      }
      if (history && typeof history.replaceState === 'function') {
        // grab the url up to the query
        // destroy any hash symbols still clinging to life
        var url = location.href.split('?')[0].replace(/(#*)$/, '');
        history.replaceState(history.state, null, url + '#?' + (codeUri.shouldRun() ? '' : 'run=disabled&') + 'solution=' + codeUri.encode(encodeFcc(solution)));
      } else {
        location.hash = '?solution=' + codeUri.encode(encodeFcc(solution));
      }

      return solution;
    },
    enabled: true,
    shouldRun: function shouldRun() {
      return !this.getKeyInQuery((location.search || location.hash).replace(queryRegex, ''), 'run');
    }
  };

  common.init.push(function () {
    codeUri.parse();
  });

  common.codeUri = codeUri;
  common.shouldRun = function () {
    return codeUri.shouldRun();
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var loopProtect = global.loopProtect;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  loopProtect.hit = function hit(line) {
    var err = 'Error: Exiting potential infinite loop at line ' + line + '. To disable loop protection, write: \n\\/\\/ noprotect\nas the first' + 'line. Beware that if you do have an infinite loop in your code' + 'this will crash your browser.';
    console.error(err);
  };

  common.addLoopProtect = function addLoopProtect() {
    var code = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    return loopProtect(code);
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;
  var doc = global.document;

  common.getIframe = function getIframe() {
    var id = arguments.length <= 0 || arguments[0] === undefined ? 'preview' : arguments[0];

    var previewFrame = doc.getElementById(id);

    // create and append a hidden preview frame
    if (!previewFrame) {
      previewFrame = doc.createElement('iframe');
      previewFrame.id = id;
      previewFrame.setAttribute('style', 'display: none');
      doc.body.appendChild(previewFrame);
    }

    return previewFrame.contentDocument || previewFrame.contentWindow.document;
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var _global$Rx = global.Rx;
  var BehaviorSubject = _global$Rx.BehaviorSubject;
  var Observable = _global$Rx.Observable;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  // the first script tag here is to proxy jQuery
  // We use the same jQuery on the main window but we change the
  // context to that of the iframe.
  var libraryIncludes = '\n<script>\n  window.loopProtect = parent.loopProtect;\n  window.__err = null;\n  window.loopProtect.hit = function(line) {\n    window.__err = new Error(\n      \'Potential infinite loop at line \' +\n      line +\n      \'. To disable loop protection, write:\' +\n      \' \\n\\/\\/ noprotect\\nas the first\' +\n      \' line. Beware that if you do have an infinite loop in your code\' +\n      \' this will crash your browser.\'\n    );\n  };\n</script>\n<link\n  rel=\'stylesheet\'\n  href=\'//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css\'\n  />\n<link\n  rel=\'stylesheet\'\n  href=\'//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css\'\n  />\n\n<link\n  rel=\'stylesheet\'\n  href=\'//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\'\n  />\n<style>\n  body { padding: 0px 3px 0px 3px; }\n</style>\n  ';
  var codeDisabledError = '\n    <script>\n      window.__err = new Error(\'code has been disabled\');\n    </script>\n  ';

  var iFrameScript$ = common.getScriptContent$('/js/iFrameScripts-508a33de77.js').shareReplay();
  var jQueryScript$ = common.getScriptContent$('/bower_components/jquery/dist/jquery.js').shareReplay();

  // behavior subject allways remembers the last value
  // we use this to determine if runPreviewTest$ is defined
  // and prime it with false
  common.previewReady$ = new BehaviorSubject(false);

  // These should be set up in the preview window
  // if this error is seen it is because the function tried to run
  // before the iframe has completely loaded
  common.runPreviewTests$ = common.checkPreview$ = function () {
    return Observable['throw'](new Error('Preview not fully loaded'));
  };

  common.updatePreview$ = function updatePreview$() {
    var code = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    var preview = common.getIframe('preview');

    return Observable.combineLatest(iFrameScript$, jQueryScript$, function (iframe, jQuery) {
      return {
        iframeScript: '<script>' + iframe + '</script>',
        jQuery: '<script>' + jQuery + '</script>'
      };
    }).first().flatMap(function (_ref) {
      var iframeScript = _ref.iframeScript;
      var jQuery = _ref.jQuery;

      // we make sure to override the last value in the
      // subject to false here.
      common.previewReady$.onNext(false);
      preview.open();
      preview.write(libraryIncludes + jQuery + (common.shouldRun() ? code : codeDisabledError) + '<!-- -->' + iframeScript);
      preview.close();
      // now we filter false values and wait for the first true
      return common.previewReady$.filter(function (ready) {
        return ready;
      }).first()
      // the delay here is to give code within the iframe
      // control to run
      .delay(400);
    }).map(function () {
      return code;
    });
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var _global$Rx = global.Rx;
  var Subject = _global$Rx.Subject;
  var Observable = _global$Rx.Observable;
  var CodeMirror = global.CodeMirror;
  var emmetCodeMirror = global.emmetCodeMirror;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;
  var _common$challengeType = common.challengeType;
  var challengeType = _common$challengeType === undefined ? '0' : _common$challengeType;
  var challengeTypes = common.challengeTypes;

  if (!CodeMirror || challengeType === challengeTypes.BASEJUMP || challengeType === challengeTypes.ZIPLINE || challengeType === challengeTypes.VIDEO || challengeType === challengeTypes.STEP || challengeType === challengeTypes.HIKES) {
    common.editor = {};
    return common;
  }

  var editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
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
  });

  editor.setSize('100%', 'auto');

  common.editorExecute$ = new Subject();
  common.editorKeyUp$ = Observable.fromEventPattern(function (handler) {
    return editor.on('keyup', handler);
  }, function (handler) {
    return editor.off('keyup', handler);
  });

  editor.setOption('extraKeys', {
    Tab: function Tab(cm) {
      if (cm.somethingSelected()) {
        cm.indentSelection('add');
      } else {
        var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    },
    'Shift-Tab': function ShiftTab(cm) {
      if (cm.somethingSelected()) {
        cm.indentSelection('subtract');
      } else {
        var spaces = Array(cm.getOption('indentUnit') + 1).join(' ');
        cm.replaceSelection(spaces);
      }
    },
    'Ctrl-Enter': function CtrlEnter() {
      common.editorExecute$.onNext();
      return false;
    },
    'Cmd-Enter': function CmdEnter() {
      common.editorExecute$.onNext();
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
    emmetCodeMirror(editor, {
      'Cmd-E': 'emmet.expand_abbreviation',
      Tab: 'emmet.expand_abbreviation_with_tab',
      Enter: 'emmet.insert_formatted_line_break_only'
    });
  }
  common.init.push(function () {
    var editorValue = undefined;
    if (common.codeUri.isAlive()) {
      editorValue = common.codeUri.parse();
    } else {
      editorValue = common.codeStorage.isAlive(common.challengeName) ? common.codeStorage.getStoredValue(common.challengeName) : common.seed;
    }

    editor.setValue(common.replaceSafeTags(editorValue));
    editor.refresh();
  });

  common.editor = editor;

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var Observable = global.Rx.Observable;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  var detectFunctionCall = /function\s*?\(|function\s+\w+\s*?\(/gi;
  var detectUnsafeJQ = /\$\s*?\(\s*?\$\s*?\)/gi;
  var detectUnsafeConsoleCall = /if\s\(null\)\sconsole\.log\(1\);/gi;

  common.detectUnsafeCode$ = function detectUnsafeCode$(code) {
    var openingComments = code.match(/\/\*/gi);
    var closingComments = code.match(/\*\//gi);

    // checks if the number of opening comments(/*) matches the number of
    // closing comments(*/)
    if (openingComments && (!closingComments || openingComments.length > closingComments.length)) {

      return Observable['throw'](new Error('SyntaxError: Unfinished multi-line comment'));
    }

    if (code.match(detectUnsafeJQ)) {
      return Observable['throw'](new Error('Unsafe $($)'));
    }

    if (code.match(/function/g) && !code.match(detectFunctionCall)) {
      return Observable['throw'](new Error('SyntaxError: Unsafe or unfinished function declaration'));
    }

    if (code.match(detectUnsafeConsoleCall)) {
      return Observable['throw'](new Error('Invalid if (null) console.log(1); detected'));
    }

    return Observable.just(code);
  };

  return common;
})(window);
'use strict';

window.common = (function (_ref) {
  var $ = _ref.$;
  var _ref$common = _ref.common;
  var common = _ref$common === undefined ? { init: [] } : _ref$common;

  common.displayTestResults = function displayTestResults() {
    var data = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    $('#testSuite').children().remove();
    data.forEach(function (_ref2) {
      var _ref2$err = _ref2.err;
      var err = _ref2$err === undefined ? false : _ref2$err;
      var _ref2$text = _ref2.text;
      var text = _ref2$text === undefined ? '' : _ref2$text;

      var iconClass = err ? '"ion-close-circled big-error-icon"' : '"ion-checkmark-circled big-success-icon"';

      $('<div></div>').html('\n        <div class=\'row\'>\n          <div class=\'col-xs-2 text-center\'>\n            <i class=' + iconClass + '></i>\n          </div>\n          <div class=\'col-xs-10 test-output\'>\n            ' + text.split('message: ').pop().replace(/\'\);/g, '') + '\n          </div>\n          <div class=\'ten-pixel-break\'/>\n        </div>\n      ').appendTo($('#testSuite'));
    });

    return data;
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var ga = global.ga;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;
  var addLoopProtect = common.addLoopProtect;
  var getJsFromHtml = common.getJsFromHtml;
  var detectUnsafeCode$ = common.detectUnsafeCode$;
  var updatePreview$ = common.updatePreview$;
  var challengeType = common.challengeType;
  var challengeTypes = common.challengeTypes;

  common.executeChallenge$ = function executeChallenge$() {
    var code = common.editor.getValue();
    var originalCode = code;
    var head = common.arrayToNewLineString(common.head);
    var tail = common.arrayToNewLineString(common.tail);
    var combinedCode = head + code + tail;

    ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);

    // run checks for unsafe code
    return detectUnsafeCode$(code)
    // add head and tail and detect loops
    .map(function () {
      if (challengeType !== challengeTypes.HTML) {
        return '<script>;' + addLoopProtect(combinedCode) + '/**/</script>';
      }

      return addLoopProtect(combinedCode);
    }).flatMap(function (code) {
      return updatePreview$(code);
    }).flatMap(function (code) {
      var output = undefined;

      if (challengeType === challengeTypes.HTML && common.hasJs(code)) {
        output = common.getJsOutput(getJsFromHtml(code));
      } else if (challengeType !== challengeTypes.HTML) {
        output = common.getJsOutput(addLoopProtect(combinedCode));
      }

      return common.runPreviewTests$({
        tests: common.tests.slice(),
        originalCode: originalCode,
        output: output
      });
    });
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var CodeMirror = global.CodeMirror;
  var doc = global.document;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;
  var challengeTypes = common.challengeTypes;
  var _common$challengeType = common.challengeType;
  var challengeType = _common$challengeType === undefined ? '0' : _common$challengeType;

  if (!CodeMirror || challengeType !== challengeTypes.JS && challengeType !== challengeTypes.BONFIRE) {
    common.updateOutputDisplay = function () {};
    common.appendToOutputDisplay = function () {};
    return common;
  }

  var codeOutput = CodeMirror.fromTextArea(doc.getElementById('codeOutput'), {
    lineNumbers: false,
    mode: 'text',
    theme: 'monokai',
    readOnly: 'nocursor',
    lineWrapping: true
  });

  codeOutput.setValue('/**\n  * Your output will go here.\n  * Console.log() -type statements\n  * will appear in your browser\'s\n  * DevTools JavaScript console.\n  */');

  codeOutput.setSize('100%', '100%');

  common.updateOutputDisplay = function updateOutputDisplay() {
    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    codeOutput.setValue(str);
    return str;
  };

  common.appendToOutputDisplay = function appendToOutputDisplay() {
    var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

    codeOutput.setValue(codeOutput.getValue() + str);
    return str;
  };

  return common;
})(window);
'use strict';

window.common = (function (_ref) {
  var _ref$common = _ref.common;
  var common = _ref$common === undefined ? { init: [] } : _ref$common;

  common.lockTop = function lockTop() {
    var magiVal;

    if ($(window).width() >= 990) {
      if ($('.editorScrollDiv').html()) {

        magiVal = $(window).height() - $('.navbar').height();

        if (magiVal < 0) {
          magiVal = 0;
        }
        $('.editorScrollDiv').css('height', magiVal - 50 + 'px');
      }

      magiVal = $(window).height() - $('.navbar').height();

      if (magiVal < 0) {
        magiVal = 0;
      }

      $('.scroll-locker').css('min-height', $('.editorScrollDiv').height()).css('height', magiVal - 50);
    } else {
      $('.editorScrollDiv').css('max-height', 500 + 'px');

      $('.scroll-locker').css('position', 'inherit').css('top', 'inherit').css('width', '100%').css('max-height', '100%');
    }
  };

  common.init.push(function ($) {
    // fakeiphone positioning hotfix
    if ($('.iphone-position').html() || $('.iphone').html()) {
      var startIphonePosition = parseInt($('.iphone-position').css('top').replace('px', ''), 10);

      var startIphone = parseInt($('.iphone').css('top').replace('px', ''), 10);

      $(window).on('scroll', function () {
        var courseHeight = $('.courseware-height').height();
        var courseTop = $('.courseware-height').offset().top;
        var windowScrollTop = $(window).scrollTop();
        var phoneHeight = $('.iphone-position').height();

        if (courseHeight + courseTop - windowScrollTop - phoneHeight <= 0) {
          $('.iphone-position').css('top', startIphonePosition + courseHeight + courseTop - windowScrollTop - phoneHeight);

          $('.iphone').css('top', startIphonePosition + courseHeight + courseTop - windowScrollTop - phoneHeight + 120);
        } else {
          $('.iphone-position').css('top', startIphonePosition);
          $('.iphone').css('top', startIphone);
        }
      });
    }

    if ($('.scroll-locker').html()) {

      if ($('.scroll-locker').html()) {
        common.lockTop();
        $(window).on('resize', function () {
          common.lockTop();
        });
        $(window).on('scroll', function () {
          common.lockTop();
        });
      }

      var execInProgress = false;

      // why is this not $???
      document.getElementById('scroll-locker').addEventListener('previewUpdateSpy', function (e) {
        if (execInProgress) {
          return null;
        }
        execInProgress = true;
        setTimeout(function () {
          if ($($('.scroll-locker').children()[0]).height() - 800 > e.detail) {
            $('.scroll-locker').scrollTop(e.detail);
          } else {
            var scrollTop = $($('.scroll-locker').children()[0]).height();

            $('.scroll-locker').animate({ scrollTop: scrollTop }, 175);
          }
          execInProgress = false;
        }, 750);
      }, false);
    }
  });

  return common;
})(window);
'use strict';

window.common = (function (_ref) {
  var _ref$common = _ref.common;
  var common = _ref$common === undefined ? { init: [] } : _ref$common;

  common.init.push(function ($) {
    $('#report-issue').on('click', function () {
      var textMessage = ['Challenge [', common.challengeName || window.location.pathname, '](', window.location.href, ') has an issue.\n', 'User Agent is: <code>', navigator.userAgent, '</code>.\n', 'Please describe how to reproduce this issue, and include ', 'links to screenshots if possible.\n\n'].join('');

      if (common.editor && typeof common.editor.getValue === 'function' && common.editor.getValue().trim()) {
        var type;
        switch (common.challengeType) {
          case common.challengeTypes.HTML:
            type = 'html';
            break;
          case common.challengeTypes.JS:
          case common.challengeTypes.BONFIRE:
            type = 'javascript';
            break;
          default:
            type = '';
        }

        textMessage += ['My code:\n```', type, '\n', common.editor.getValue(), '\n```\n\n'].join('');
      }

      textMessage = encodeURIComponent(textMessage);

      $('#issue-modal').modal('hide');
      window.open('https://github.com/freecodecamp/freecodecamp/issues/new?&body=' + textMessage, '_blank');
    });
  });

  return common;
})(window);
"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

window.common = (function (global) {
  var Observable = global.Rx.Observable;
  var chai = global.chai;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  common.runTests$ = function runTests$(_ref) {
    var code = _ref.code;
    var originalCode = _ref.originalCode;
    var userTests = _ref.userTests;

    var rest = _objectWithoutProperties(_ref, ["code", "originalCode", "userTests"]);

    return Observable.from(userTests).map(function (test) {

      /* eslint-disable no-unused-vars */
      var assert = chai.assert;
      var editor = { getValue: function getValue() {
          return originalCode;
        } };
      /* eslint-enable no-unused-vars */

      try {
        if (test) {
          /* eslint-disable no-eval  */
          eval(common.reassembleTest(code, test));
          /* eslint-enable no-eval */
        }
      } catch (e) {
        test.err = e.message;
      }

      return test;
    }).toArray().map(function (tests) {
      return _extends({}, rest, { tests: tests });
    });
  };

  return common;
})(window);
'use strict';

window.common = (function (global) {
  var $ = global.$;
  var _global$ga = global.ga;
  var ga = _global$ga === undefined ? function () {} : _global$ga;
  var _global$common = global.common;
  var common = _global$common === undefined ? { init: [] } : _global$common;

  common.showCompletion = function showCompletion() {

    ga('send', 'event', 'Challenge', 'solved', common.challengeName, true);

    var solution = common.editor.getValue();
    var didCompleteWith = $('#completed-with').val() || null;

    $('#complete-courseware-dialog').modal('show');
    $('#complete-courseware-dialog .modal-header').click();

    $('#submit-challenge').click(function (e) {
      e.preventDefault();

      $('#submit-challenge').attr('disabled', 'true').removeClass('btn-primary').addClass('btn-warning disabled');

      var $checkmarkContainer = $('#checkmark-container');
      $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

      $('#challenge-checkmark').addClass('zoomOutUp')
      // .removeClass('zoomInDown')
      .delay(1000).queue(function (next) {
        $(this).replaceWith('<div id="challenge-spinner" ' + 'class="animated zoomInUp inner-circles-loader">' + 'submitting...</div>');
        next();
      });

      var data = {
        id: common.challengeId,
        name: common.challengeName,
        completedWith: didCompleteWith,
        challengeType: common.challengeType,
        solution: solution
      };

      $.post('/completed-challenge/', data, function (res) {
        if (res) {
          window.location = '/challenges/next-challenge?id=' + common.challengeId;
        }
      });
    });
  };

  return common;
})(window);
'use strict';

window.common = (function (_ref) {
  var $ = _ref.$;
  var _ref$common = _ref.common;
  var common = _ref$common === undefined ? { init: [] } : _ref$common;

  var stepClass = '.challenge-step';
  var prevBtnClass = '.challenge-step-btn-prev';
  var nextBtnClass = '.challenge-step-btn-next';
  var actionBtnClass = '.challenge-step-btn-action';
  var finishBtnClass = '.challenge-step-btn-finish';
  var submitBtnId = '#challenge-step-btn-submit';
  var submitModalId = '#challenge-step-modal';

  function getPreviousStep($challengeSteps) {
    var $prevStep = false;
    var prevStepIndex = 0;
    $challengeSteps.each(function (index) {
      var $step = $(this);
      if (!$step.hasClass('hidden')) {
        prevStepIndex = index - 1;
      }
    });

    $prevStep = $challengeSteps[prevStepIndex];

    return $prevStep;
  }

  function getNextStep($challengeSteps) {
    var length = $challengeSteps.length;
    var $nextStep = false;
    var nextStepIndex = 0;
    $challengeSteps.each(function (index) {
      var $step = $(this);
      if (!$step.hasClass('hidden') && index + 1 !== length) {
        nextStepIndex = index + 1;
      }
    });

    $nextStep = $challengeSteps[nextStepIndex];

    return $nextStep;
  }

  function handlePrevStepClick(e) {
    e.preventDefault();
    var prevStep = getPreviousStep($(stepClass));
    $(this).parent().parent().removeClass('slideInLeft slideInRight').addClass('animated fadeOutRight fast-animation').delay(250).queue(function (prev) {
      $(this).addClass('hidden');
      if (prevStep) {
        $(prevStep).removeClass('hidden').removeClass('fadeOutLeft fadeOutRight').addClass('animated slideInLeft fast-animation').delay(500).queue(function (prev) {
          prev();
        });
      }
      prev();
    });
  }

  function handleNextStepClick(e) {
    e.preventDefault();
    var nextStep = getNextStep($(stepClass));
    $(this).parent().parent().removeClass('slideInRight slideInLeft').addClass('animated fadeOutLeft fast-animation').delay(250).queue(function (next) {
      $(this).addClass('hidden');
      if (nextStep) {
        $(nextStep).removeClass('hidden').removeClass('fadeOutRight fadeOutLeft').addClass('animated slideInRight fast-animation').delay(500).queue(function (next) {
          next();
        });
      }
      next();
    });
  }

  function handleActionClick(e) {
    var props = common.challengeSeed[0] || { stepIndex: [] };

    var $el = $(this);
    var index = +$el.attr('id');
    var propIndex = props.stepIndex.indexOf(index);

    if (propIndex === -1) {
      return $el.parent().find('.disabled').removeClass('disabled');
    }

    // an API action
    // prevent link from opening
    e.preventDefault();
    var prop = props.properties[propIndex];
    var api = props.apis[propIndex];
    if (common[prop]) {
      return $el.parent().find('.disabled').removeClass('disabled');
    }
    $.post(api).done(function (data) {
      // assume a boolean indicates passing
      if (typeof data === 'boolean') {
        return $el.parent().find('.disabled').removeClass('disabled');
      }
      // assume api returns string when fails
      $el.parent().find('.disabled').replaceWith('<p>' + data + '</p>');
    }).fail(function () {
      console.log('failed');
    });
  }

  function handleFinishClick(e) {
    e.preventDefault();
    $(submitModalId).modal('show');
    $(submitModalId + '.modal-header').click();
    $(submitBtnId).click(handleSubmitClick);
  }

  function handleSubmitClick(e) {
    e.preventDefault();

    $('#submit-challenge').attr('disabled', 'true').removeClass('btn-primary').addClass('btn-warning disabled');

    var $checkmarkContainer = $('#checkmark-container');
    $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

    $('#challenge-checkmark').addClass('zoomOutUp').delay(1000).queue(function (next) {
      $(this).replaceWith('<div id="challenge-spinner" ' + 'class="animated zoomInUp inner-circles-loader">' + 'submitting...</div>');
      next();
    });

    $.post('/completed-challenge/', {
      id: common.challengeId,
      name: common.challengeName,
      challengeType: common.challengeType
    }, function (res) {
      if (res) {
        window.location = '/challenges/next-challenge?id=' + common.challengeId;
      }
    });
  }

  common.init.push(function ($) {
    if (common.challengeType !== '7') {
      return null;
    }

    $(prevBtnClass).click(handlePrevStepClick);
    $(nextBtnClass).click(handleNextStepClick);
    $(actionBtnClass).click(handleActionClick);
    $(finishBtnClass).click(handleFinishClick);
  });

  return common;
})(window);
'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

$(document).ready(function () {
  var common = window.common;
  var Observable = window.Rx.Observable;
  var addLoopProtect = common.addLoopProtect;
  var challengeName = common.challengeName;
  var challengeType = common.challengeType;
  var challengeTypes = common.challengeTypes;

  common.init.forEach(function (init) {
    init($);
  });

  // only run if editor present
  if (common.editor.getValue) {
    var code$ = common.editorKeyUp$.debounce(750).map(function () {
      return common.editor.getValue();
    }).distinctUntilChanged().shareReplay();

    // update storage
    code$.subscribe(function (code) {
      common.codeStorage.updateStorage(common.challengeName, code);
      common.codeUri.querify(code);
    }, function (err) {
      return console.error(err);
    });

    code$
    // only run for HTML
    .filter(function () {
      return common.challengeType === challengeTypes.HTML;
    }).flatMap(function (code) {
      return common.detectUnsafeCode$(code).map(function () {
        var combinedCode = common.head + code + common.tail;

        return addLoopProtect(combinedCode);
      }).flatMap(function (code) {
        return common.updatePreview$(code);
      }).flatMap(function () {
        return common.checkPreview$({ code: code });
      })['catch'](function (err) {
        return Observable.just({ err: err });
      });
    }).subscribe(function (_ref) {
      var err = _ref.err;

      if (err) {
        console.error(err);
        return common.updatePreview$('\n              <h1>' + err + '</h1>\n            ').subscribe(function () {});
      }
    }, function (err) {
      return console.error(err);
    });
  }

  common.resetBtn$.doOnNext(function () {
    common.editor.setValue(common.replaceSafeTags(common.seed));
  }).flatMap(function () {
    return common.executeChallenge$()['catch'](function (err) {
      return Observable.just({ err: err });
    });
  }).subscribe(function (_ref2) {
    var err = _ref2.err;
    var output = _ref2.output;
    var originalCode = _ref2.originalCode;

    if (err) {
      console.error(err);
      return common.updateOutputDisplay('' + err);
    }
    common.codeStorage.updateStorage(challengeName, originalCode);
    common.codeUri.querify(originalCode);
    common.updateOutputDisplay('' + output);
  }, function (err) {
    if (err) {
      console.error(err);
    }
    common.updateOutputDisplay('' + err);
  });

  Observable.merge(common.editorExecute$, common.submitBtn$).flatMap(function () {
    common.appendToOutputDisplay('\n// testing challenge...');
    return common.executeChallenge$().map(function (_ref3) {
      var tests = _ref3.tests;

      var rest = _objectWithoutProperties(_ref3, ['tests']);

      var solved = tests.every(function (test) {
        return !test.err;
      });
      return _extends({}, rest, { tests: tests, solved: solved });
    })['catch'](function (err) {
      return Observable.just({ err: err });
    });
  }).subscribe(function (_ref4) {
    var err = _ref4.err;
    var solved = _ref4.solved;
    var output = _ref4.output;
    var tests = _ref4.tests;

    if (err) {
      console.error(err);
      if (common.challengeType === common.challengeTypes.HTML) {
        return common.updatePreview$('\n              <h1>' + err + '</h1>\n            ').first().subscribe(function () {});
      }
      return common.updateOutputDisplay('' + err);
    }
    common.updateOutputDisplay('' + output);
    common.displayTestResults(tests);
    if (solved) {
      common.showCompletion();
    }
  }, function (_ref5) {
    var err = _ref5.err;

    console.error(err);
    common.updateOutputDisplay('' + err);
  });

  // initial challenge run to populate tests
  if (challengeType === challengeTypes.HTML) {
    var $preview = $('#preview');
    return Observable.fromCallback($preview.ready, $preview)().delay(500).flatMap(function () {
      return common.executeChallenge$();
    })['catch'](function (err) {
      return Observable.just({ err: err });
    }).subscribe(function (_ref6) {
      var err = _ref6.err;
      var tests = _ref6.tests;

      if (err) {
        console.error(err);
        if (common.challengeType === common.challengeTypes.HTML) {
          return common.updatePreview$('\n                <h1>' + err + '</h1>\n              ').subscribe(function () {});
        }
        return common.updateOutputDisplay('' + err);
      }
      common.displayTestResults(tests);
    }, function (_ref7) {
      var err = _ref7.err;

      console.error(err);
    });
  }

  if (challengeType === challengeTypes.BONFIRE || challengeType === challengeTypes.JS) {
    Observable.just({}).delay(500).flatMap(function () {
      return common.executeChallenge$();
    })['catch'](function (err) {
      return Observable.just({ err: err });
    }).subscribe(function (_ref8) {
      var err = _ref8.err;
      var originalCode = _ref8.originalCode;
      var tests = _ref8.tests;

      if (err) {
        console.error(err);
        return common.updateOutputDisplay('' + err);
      }
      common.codeStorage.updateStorage(challengeName, originalCode);
      common.displayTestResults(tests);
    }, function (err) {
      console.error(err);
      common.updateOutputDisplay('' + err);
    });
  }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiLCJiaW5kaW5ncy5qcyIsImNvZGUtc3RvcmFnZS5qcyIsImNvZGUtdXJpLmpzIiwiYWRkLWxvb3AtcHJvdGVjdC5qcyIsImdldC1pZnJhbWUuanMiLCJ1cGRhdGUtcHJldmlldy5qcyIsImNyZWF0ZS1lZGl0b3IuanMiLCJkZXRlY3QtdW5zYWZlLWNvZGUtc3RyZWFtLmpzIiwiZGlzcGxheS10ZXN0LXJlc3VsdHMuanMiLCJleGVjdXRlLWNoYWxsZW5nZS1zdHJlYW0uanMiLCJvdXRwdXQtZGlzcGxheS5qcyIsInBob25lLXNjcm9sbC1sb2NrLmpzIiwicmVwb3J0LWlzc3VlLmpzIiwicnVuLXRlc3RzLXN0cmVhbS5qcyIsInNob3ctY29tcGxldGlvbi5qcyIsInN0ZXAtY2hhbGxlbmdlLmpzIiwiZW5kLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDN0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImNvbW1vbkZyYW1ld29yay5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIC8vIGNvbW1vbiBuYW1lc3BhY2VcbiAgLy8gYWxsIGNsYXNzZXMgc2hvdWxkIGJlIHN0b3JlZCBoZXJlXG4gIC8vIGNhbGxlZCBhdCB0aGUgYmVnaW5uaW5nIG9mIGRvbSByZWFkeVxuICB2YXIgX2dsb2JhbCRSeCA9IGdsb2JhbC5SeDtcbiAgdmFyIERpc3Bvc2FibGUgPSBfZ2xvYmFsJFJ4LkRpc3Bvc2FibGU7XG4gIHZhciBPYnNlcnZhYmxlID0gX2dsb2JhbCRSeC5PYnNlcnZhYmxlO1xuICB2YXIgY29uZmlnID0gX2dsb2JhbCRSeC5jb25maWc7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG5cbiAgY29uZmlnLmxvbmdTdGFja1N1cHBvcnQgPSB0cnVlO1xuICBjb21tb24uaGVhZCA9IGNvbW1vbi5oZWFkIHx8IFtdO1xuICBjb21tb24udGFpbCA9IGNvbW1vbi50YWlsIHx8IFtdO1xuICBjb21tb24uc2FsdCA9IE1hdGgucmFuZG9tKCk7XG5cbiAgY29tbW9uLmNoYWxsZW5nZVR5cGVzID0ge1xuICAgIEhUTUw6ICcwJyxcbiAgICBKUzogJzEnLFxuICAgIFZJREVPOiAnMicsXG4gICAgWklQTElORTogJzMnLFxuICAgIEJBU0VKVU1QOiAnNCcsXG4gICAgQk9ORklSRTogJzUnLFxuICAgIEhJS0VTOiAnNicsXG4gICAgU1RFUDogJzcnXG4gIH07XG5cbiAgY29tbW9uLmFycmF5VG9OZXdMaW5lU3RyaW5nID0gZnVuY3Rpb24gYXJyYXlUb05ld0xpbmVTdHJpbmcoc2VlZERhdGEpIHtcbiAgICBzZWVkRGF0YSA9IEFycmF5LmlzQXJyYXkoc2VlZERhdGEpID8gc2VlZERhdGEgOiBbc2VlZERhdGFdO1xuICAgIHJldHVybiBzZWVkRGF0YS5yZWR1Y2UoZnVuY3Rpb24gKHNlZWQsIGxpbmUpIHtcbiAgICAgIHJldHVybiAnJyArIHNlZWQgKyBsaW5lICsgJ1xcbic7XG4gICAgfSwgJycpO1xuICB9O1xuXG4gIGNvbW1vbi5zZWVkID0gY29tbW9uLmFycmF5VG9OZXdMaW5lU3RyaW5nKGNvbW1vbi5jaGFsbGVuZ2VTZWVkKTtcblxuICBjb21tb24ucmVwbGFjZVNjcmlwdFRhZ3MgPSBmdW5jdGlvbiByZXBsYWNlU2NyaXB0VGFncyh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88c2NyaXB0Pi9naSwgJ2ZjY3NzJykucmVwbGFjZSgvPFxcL3NjcmlwdD4vZ2ksICdmY2NlcycpO1xuICB9O1xuXG4gIGNvbW1vbi5yZXBsYWNlU2FmZVRhZ3MgPSBmdW5jdGlvbiByZXBsYWNlU2FmZVRhZ3ModmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvZmNjc3MvZ2ksICc8c2NyaXB0PicpLnJlcGxhY2UoL2ZjY2VzL2dpLCAnPC9zY3JpcHQ+Jyk7XG4gIH07XG5cbiAgY29tbW9uLnJlcGxhY2VGb3JtQWN0aW9uQXR0ciA9IGZ1bmN0aW9uIHJlcGxhY2VGb3JtQWN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoLzxmb3JtW14+XSo+LywgZnVuY3Rpb24gKHZhbCkge1xuICAgICAgcmV0dXJuIHZhbC5yZXBsYWNlKC9hY3Rpb24oXFxzKj8pPS8sICdmY2NmYWEkMT0nKTtcbiAgICB9KTtcbiAgfTtcblxuICBjb21tb24ucmVwbGFjZUZjY2ZhYUF0dHIgPSBmdW5jdGlvbiByZXBsYWNlRmNjZmFhQXR0cih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC88Zm9ybVtePl0qPi8sIGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIHJldHVybiB2YWwucmVwbGFjZSgvZmNjZmFhKFxccyo/KT0vLCAnYWN0aW9uJDE9Jyk7XG4gICAgfSk7XG4gIH07XG5cbiAgY29tbW9uLnNjb3BlalF1ZXJ5ID0gZnVuY3Rpb24gc2NvcGVqUXVlcnkoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXCQvZ2ksICdqJCcpLnJlcGxhY2UoL2RvY3VtZW50L2dpLCAnamRvY3VtZW50JykucmVwbGFjZSgvalF1ZXJ5L2dpLCAnampRdWVyeScpO1xuICB9O1xuXG4gIGNvbW1vbi51blNjb3BlSlF1ZXJ5ID0gZnVuY3Rpb24gdW5TY29wZUpRdWVyeShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL2pcXCQvZ2ksICckJykucmVwbGFjZSgvamRvY3VtZW50L2dpLCAnZG9jdW1lbnQnKS5yZXBsYWNlKC9qalF1ZXJ5L2dpLCAnalF1ZXJ5Jyk7XG4gIH07XG5cbiAgdmFyIGNvbW1lbnRSZWdleCA9IC8oXFwvXFwqW14oXFwqXFwvKV0qXFwqXFwvKXwoWyBcXG5dXFwvXFwvW15cXG5dKikvZztcbiAgY29tbW9uLnJlbW92ZUNvbW1lbnRzID0gZnVuY3Rpb24gcmVtb3ZlQ29tbWVudHMoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKGNvbW1lbnRSZWdleCwgJycpO1xuICB9O1xuXG4gIHZhciBsb2dSZWdleCA9IC8oY29uc29sZVxcLltcXHddK1xccypcXCguKlxcOykvZztcbiAgY29tbW9uLnJlbW92ZUxvZ3MgPSBmdW5jdGlvbiByZW1vdmVMb2dzKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZShsb2dSZWdleCwgJycpO1xuICB9O1xuXG4gIGNvbW1vbi5yZWFzc2VtYmxlVGVzdCA9IGZ1bmN0aW9uIHJlYXNzZW1ibGVUZXN0KGNvZGUsIF9yZWYpIHtcbiAgICBpZiAoY29kZSA9PT0gdW5kZWZpbmVkKSBjb2RlID0gJyc7XG4gICAgdmFyIGxpbmUgPSBfcmVmLmxpbmU7XG4gICAgdmFyIHRleHQgPSBfcmVmLnRleHQ7XG5cbiAgICB2YXIgcmVnZXhwID0gbmV3IFJlZ0V4cCgnLy8nICsgbGluZSArIGNvbW1vbi5zYWx0KTtcbiAgICByZXR1cm4gY29kZS5yZXBsYWNlKHJlZ2V4cCwgdGV4dCk7XG4gIH07XG5cbiAgY29tbW9uLmdldFNjcmlwdENvbnRlbnQkID0gZnVuY3Rpb24gZ2V0U2NyaXB0Q29udGVudCQoc2NyaXB0KSB7XG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKGZ1bmN0aW9uIChvYnNlcnZlcikge1xuICAgICAgdmFyIGpxWEhSID0gJC5nZXQoc2NyaXB0LCBudWxsLCBudWxsLCAndGV4dCcpLnN1Y2Nlc3MoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgb2JzZXJ2ZXIub25OZXh0KGRhdGEpO1xuICAgICAgICBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgfSkuZmFpbChmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4gb2JzZXJ2ZXIub25FcnJvcihlKTtcbiAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvYnNlcnZlci5vbkNvbXBsZXRlZCgpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBuZXcgRGlzcG9zYWJsZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGpxWEhSLmFib3J0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICB2YXIgb3BlblNjcmlwdCA9IC9cXDxcXHM/c2NyaXB0XFxzP1xcPi9naTtcbiAgdmFyIGNsb3NpbmdTY3JpcHQgPSAvXFw8XFxzP1xcL1xccz9zY3JpcHRcXHM/XFw+L2dpO1xuXG4gIC8vIGRldGVjdHMgaWYgdGhlcmUgaXMgSmF2YVNjcmlwdCBpbiB0aGUgZmlyc3Qgc2NyaXB0IHRhZ1xuICBjb21tb24uaGFzSnMgPSBmdW5jdGlvbiBoYXNKcyhjb2RlKSB7XG4gICAgcmV0dXJuICEhY29tbW9uLmdldEpzRnJvbUh0bWwoY29kZSk7XG4gIH07XG5cbiAgLy8gZ3JhYnMgdGhlIGNvbnRlbnQgZnJvbSB0aGUgZmlyc3Qgc2NyaXB0IHRhZyBpbiB0aGUgY29kZVxuICBjb21tb24uZ2V0SnNGcm9tSHRtbCA9IGZ1bmN0aW9uIGdldEpzRnJvbUh0bWwoY29kZSkge1xuICAgIC8vIGdyYWIgdXNlciBqYXZhU2NyaXB0XG4gICAgcmV0dXJuIChjb2RlLnNwbGl0KG9wZW5TY3JpcHQpWzFdIHx8ICcnKS5zcGxpdChjbG9zaW5nU2NyaXB0KVswXSB8fCAnJztcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgJCA9IGdsb2JhbC4kO1xuICB2YXIgT2JzZXJ2YWJsZSA9IGdsb2JhbC5SeC5PYnNlcnZhYmxlO1xuICB2YXIgX2dsb2JhbCRjb21tb24gPSBnbG9iYWwuY29tbW9uO1xuICB2YXIgY29tbW9uID0gX2dsb2JhbCRjb21tb24gPT09IHVuZGVmaW5lZCA/IHsgaW5pdDogW10gfSA6IF9nbG9iYWwkY29tbW9uO1xuXG4gIGNvbW1vbi5jdHJsRW50ZXJDbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBjdHJsRW50ZXJDbGlja0hhbmRsZXIoZSkge1xuICAgIC8vIGN0cmwgKyBlbnRlciBvciBjbWQgKyBlbnRlclxuICAgIGlmIChlLmtleUNvZGUgPT09IDEzICYmIChlLm1ldGFLZXkgfHwgZS5jdHJsS2V5KSkge1xuICAgICAgJCgnI2NvbXBsZXRlLWNvdXJzZXdhcmUtZGlhbG9nJykub2ZmKCdrZXlkb3duJywgY3RybEVudGVyQ2xpY2tIYW5kbGVyKTtcbiAgICAgIGlmICgkKCcjc3VibWl0LWNoYWxsZW5nZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgJCgnI3N1Ym1pdC1jaGFsbGVuZ2UnKS5jbGljaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jaGFsbGVuZ2VzL25leHQtY2hhbGxlbmdlP2lkPScgKyBjb21tb24uY2hhbGxlbmdlSWQ7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbW1vbi5pbml0LnB1c2goZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciAkbWFyZ2luRml4ID0gJCgnLmlubmVyTWFyZ2luRml4Jyk7XG4gICAgJG1hcmdpbkZpeC5jc3MoJ21pbi1oZWlnaHQnLCAkbWFyZ2luRml4LmhlaWdodCgpKTtcblxuICAgIGNvbW1vbi5zdWJtaXRCdG4kID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnQoJCgnI3N1Ym1pdEJ1dHRvbicpLCAnY2xpY2snKTtcblxuICAgIGNvbW1vbi5yZXNldEJ0biQgPSBPYnNlcnZhYmxlLmZyb21FdmVudCgkKCcjcmVzZXQtYnV0dG9uJyksICdjbGljaycpO1xuXG4gICAgLy8gaW5pdCBtb2RhbCBrZXliaW5kaW5ncyBvbiBvcGVuXG4gICAgJCgnI2NvbXBsZXRlLWNvdXJzZXdhcmUtZGlhbG9nJykub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI2NvbXBsZXRlLWNvdXJzZXdhcmUtZGlhbG9nJykua2V5ZG93bihjb21tb24uY3RybEVudGVyQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIC8vIHJlbW92ZSBtb2RhbCBrZXliaW5kcyBvbiBjbG9zZVxuICAgICQoJyNjb21wbGV0ZS1jb3Vyc2V3YXJlLWRpYWxvZycpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjY29tcGxldGUtY291cnNld2FyZS1kaWFsb2cnKS5vZmYoJ2tleWRvd24nLCBjb21tb24uY3RybEVudGVyQ2xpY2tIYW5kbGVyKTtcbiAgICB9KTtcblxuICAgIC8vIHZpZGVvIGNoZWNrbGlzdCBiaW5kaW5nXG4gICAgJCgnLmNoYWxsZW5nZS1saXN0LWNoZWNrYm94Jykub24oJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjaGVja2JveElkID0gJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5hdHRyKCdpZCcpO1xuICAgICAgaWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2ZhZGVkJyk7XG4gICAgICAgIGlmICghbG9jYWxTdG9yYWdlIHx8ICFsb2NhbFN0b3JhZ2VbY2hlY2tib3hJZF0pIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2VbY2hlY2tib3hJZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xuICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnZmFkZWQnKTtcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZVtjaGVja2JveElkXSkge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGNoZWNrYm94SWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuY2hlY2tsaXN0LWVsZW1lbnQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBjaGVja2xpc3RFbGVtZW50SWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICBpZiAobG9jYWxTdG9yYWdlW2NoZWNrbGlzdEVsZW1lbnRJZF0pIHtcbiAgICAgICAgJCh0aGlzKS5jaGlsZHJlbigpLmNoaWxkcmVuKCdsaScpLmFkZENsYXNzKCdmYWRlZCcpO1xuICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCkuY2hpbGRyZW4oJ2lucHV0JykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHZpZGVvIGNoYWxsZW5nZSBzdWJtaXRcbiAgICAkKCcjbmV4dC1jb3Vyc2V3YXJlLWJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNuZXh0LWNvdXJzZXdhcmUtYnV0dG9uJykudW5iaW5kKCdjbGljaycpO1xuICAgICAgaWYgKCQoJy5zaWdudXAtYnRuLW5hdicpLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIHZhciBjb21wbGV0ZWRXaXRoID0gJCgnI2NvbXBsZXRlZC13aXRoJykudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgdmFyIHB1YmxpY1VSTCA9ICQoJyNwdWJsaWMtdXJsJykudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgdmFyIGdpdGh1YlVSTCA9ICQoJyNnaXRodWItdXJsJykudmFsKCkgfHwgbnVsbDtcbiAgICAgICAgc3dpdGNoIChjb21tb24uY2hhbGxlbmdlVHlwZSkge1xuICAgICAgICAgIGNhc2UgY29tbW9uLmNoYWxsZW5nZVR5cGVzLlZJREVPOlxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgaWQ6IGNvbW1vbi5jaGFsbGVuZ2VJZCxcbiAgICAgICAgICAgICAgbmFtZTogY29tbW9uLmNoYWxsZW5nZU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAkLnBvc3QoJy9jb21wbGV0ZWQtY2hhbGxlbmdlLycsIGRhdGEpLnN1Y2Nlc3MoZnVuY3Rpb24gKHJlcykge1xuICAgICAgICAgICAgICBpZiAoIXJlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2hhbGxlbmdlcy9uZXh0LWNoYWxsZW5nZT9pZD0nICsgY29tbW9uLmNoYWxsZW5nZUlkO1xuICAgICAgICAgICAgfSkuZmFpbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGFsbGVuZ2VzJztcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGNvbW1vbi5jaGFsbGVuZ2VUeXBlcy5CQVNFSlVNUDpcbiAgICAgICAgICBjYXNlIGNvbW1vbi5jaGFsbGVuZ2VUeXBlcy5aSVBMSU5FOlxuICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgY2hhbGxlbmdlSW5mbzoge1xuICAgICAgICAgICAgICAgIGNoYWxsZW5nZUlkOiBjb21tb24uY2hhbGxlbmdlSWQsXG4gICAgICAgICAgICAgICAgY2hhbGxlbmdlTmFtZTogY29tbW9uLmNoYWxsZW5nZU5hbWUsXG4gICAgICAgICAgICAgICAgY29tcGxldGVkV2l0aDogY29tcGxldGVkV2l0aCxcbiAgICAgICAgICAgICAgICBwdWJsaWNVUkw6IHB1YmxpY1VSTCxcbiAgICAgICAgICAgICAgICBnaXRodWJVUkw6IGdpdGh1YlVSTCxcbiAgICAgICAgICAgICAgICBjaGFsbGVuZ2VUeXBlOiBjb21tb24uY2hhbGxlbmdlVHlwZSxcbiAgICAgICAgICAgICAgICB2ZXJpZmllZDogZmFsc2VcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJC5wb3N0KCcvY29tcGxldGVkLXppcGxpbmUtb3ItYmFzZWp1bXAvJywgZGF0YSkuc3VjY2VzcyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9jaGFsbGVuZ2VzL25leHQtY2hhbGxlbmdlP2lkPScgKyBjb21tb24uY2hhbGxlbmdlSWQ7XG4gICAgICAgICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgY29tbW9uLmNoYWxsZW5nZVR5cGVzLkJPTkZJUkU6XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvY2hhbGxlbmdlcy9uZXh0LWNoYWxsZW5nZT9pZD0nICsgY29tbW9uLmNoYWxsZW5nZUlkO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY29uc29sZS5sb2coJ0hhcHB5IENvZGluZyEnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoY29tbW9uLmNoYWxsZW5nZU5hbWUpIHtcbiAgICAgIHdpbmRvdy5nYSgnc2VuZCcsICdldmVudCcsICdDaGFsbGVuZ2UnLCAnbG9hZCcsIGNvbW1vbi5jaGFsbGVuZ2VOYW1lKTtcbiAgICB9XG5cbiAgICAkKCcjY29tcGxldGUtY291cnNld2FyZS1kaWFsb2cnKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKGNvbW1vbi5lZGl0b3IuZm9jdXMpIHtcbiAgICAgICAgY29tbW9uLmVkaXRvci5mb2N1cygpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnI3RyaWdnZXItaXNzdWUtbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjaXNzdWUtbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuXG4gICAgJCgnI3RyaWdnZXItaGVscC1tb2RhbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICQoJyNoZWxwLW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgICQoJyN0cmlnZ2VyLXJlc2V0LW1vZGFsJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgJCgnI3Jlc2V0LW1vZGFsJykubW9kYWwoJ3Nob3cnKTtcbiAgICB9KTtcblxuICAgICQoJyN0cmlnZ2VyLW5leHQtY2hhbGxlbmdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYWxsZW5nZXMvbmV4dC1jaGFsbGVuZ2U/aWQ9JyArIGNvbW1vbi5jaGFsbGVuZ2VJZDtcbiAgICB9KTtcblxuICAgICQoJyN0cmlnZ2VyLXByZXYtY2hhbGxlbmdlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYWxsZW5nZXMvcHJldi1jaGFsbGVuZ2U/aWQ9JyArIGNvbW1vbi5jaGFsbGVuZ2VJZDtcbiAgICB9KTtcblxuICAgICQoJyN0cmlnZ2VyLXBhaXItbW9kYWwnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjcGFpci1tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XG4gICAgfSk7XG5cbiAgICAkKCcjY29tcGxldGVkLWNvdXJzZXdhcmUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAkKCcjY29tcGxldGUtY291cnNld2FyZS1kaWFsb2cnKS5tb2RhbCgnc2hvdycpO1xuICAgIH0pO1xuXG4gICAgJCgnI2hlbHAtaXZlLWZvdW5kLWEtYnVnLXdpa2ktYXJ0aWNsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vRnJlZUNvZGVDYW1wL0ZyZWVDb2RlQ2FtcC93aWtpLycgKyBcIkhlbHAtSSd2ZS1Gb3VuZC1hLUJ1Z1wiLCAnX2JsYW5rJyk7XG4gICAgfSk7XG5cbiAgICAkKCcjc2VhcmNoLWlzc3VlJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHF1ZXJ5SXNzdWUgPSB3aW5kb3cubG9jYXRpb24uaHJlZi50b1N0cmluZygpLnNwbGl0KCc/JylbMF0ucmVwbGFjZSgvKCMqKSQvLCAnJyk7XG4gICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL0ZyZWVDb2RlQ2FtcC9GcmVlQ29kZUNhbXAvaXNzdWVzP3E9JyArICdpczppc3N1ZSBpczphbGwgJyArIGNvbW1vbi5jaGFsbGVuZ2VOYW1lICsgJyBPUiAnICsgcXVlcnlJc3N1ZS5zdWJzdHIocXVlcnlJc3N1ZS5sYXN0SW5kZXhPZignY2hhbGxlbmdlcy8nKSArIDExKS5yZXBsYWNlKCcvJywgJycpLCAnX2JsYW5rJyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIi8vIGRlcGVuZHMgb246IGNvZGVVcmlcbid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBsb2NhbFN0b3JhZ2UgPSBnbG9iYWwubG9jYWxTdG9yYWdlO1xuICB2YXIgX2dsb2JhbCRjb21tb24gPSBnbG9iYWwuY29tbW9uO1xuICB2YXIgY29tbW9uID0gX2dsb2JhbCRjb21tb24gPT09IHVuZGVmaW5lZCA/IHsgaW5pdDogW10gfSA6IF9nbG9iYWwkY29tbW9uO1xuXG4gIHZhciBjb2RlU3RvcmFnZSA9IHtcbiAgICBnZXRTdG9yZWRWYWx1ZTogZnVuY3Rpb24gZ2V0U3RvcmVkVmFsdWUoa2V5KSB7XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCB0eXBlb2YgbG9jYWxTdG9yYWdlLmdldEl0ZW0gIT09ICdmdW5jdGlvbicgfHwgIWtleSB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIHJlYWQgZnJvbSBzdG9yYWdlJyk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiAnJyArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSArICdWYWwnKTtcbiAgICB9LFxuXG4gICAgaXNBbGl2ZTogZnVuY3Rpb24gaXNBbGl2ZShrZXkpIHtcbiAgICAgIHZhciB2YWwgPSB0aGlzLmdldFN0b3JlZFZhbHVlKGtleSk7XG4gICAgICByZXR1cm4gdmFsICE9PSAnbnVsbCcgJiYgdmFsICE9PSAndW5kZWZpbmVkJyAmJiB2YWwgJiYgdmFsLmxlbmd0aCA+IDA7XG4gICAgfSxcblxuICAgIHVwZGF0ZVN0b3JhZ2U6IGZ1bmN0aW9uIHVwZGF0ZVN0b3JhZ2Uoa2V5LCBjb2RlKSB7XG4gICAgICBpZiAoIWxvY2FsU3RvcmFnZSB8fCB0eXBlb2YgbG9jYWxTdG9yYWdlLnNldEl0ZW0gIT09ICdmdW5jdGlvbicgfHwgIWtleSB8fCB0eXBlb2Yga2V5ICE9PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zb2xlLmxvZygndW5hYmxlIHRvIHNhdmUgdG8gc3RvcmFnZScpO1xuICAgICAgICByZXR1cm4gY29kZTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSArICdWYWwnLCBjb2RlKTtcbiAgICAgIHJldHVybiBjb2RlO1xuICAgIH1cbiAgfTtcblxuICBjb21tb24uY29kZVN0b3JhZ2UgPSBjb2RlU3RvcmFnZTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93LCB3aW5kb3cuY29tbW9uKTsiLCIvLyBzdG9yZSBjb2RlIGluIHRoZSBVUkxcbid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBfZW5jb2RlID0gZ2xvYmFsLmVuY29kZVVSSUNvbXBvbmVudDtcbiAgdmFyIF9kZWNvZGUgPSBnbG9iYWwuZGVjb2RlVVJJQ29tcG9uZW50O1xuICB2YXIgbG9jYXRpb24gPSBnbG9iYWwubG9jYXRpb247XG4gIHZhciBoaXN0b3J5ID0gZ2xvYmFsLmhpc3Rvcnk7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG4gIHZhciByZXBsYWNlU2NyaXB0VGFncyA9IGNvbW1vbi5yZXBsYWNlU2NyaXB0VGFncztcbiAgdmFyIHJlcGxhY2VTYWZlVGFncyA9IGNvbW1vbi5yZXBsYWNlU2FmZVRhZ3M7XG4gIHZhciByZXBsYWNlRm9ybUFjdGlvbkF0dHIgPSBjb21tb24ucmVwbGFjZUZvcm1BY3Rpb25BdHRyO1xuICB2YXIgcmVwbGFjZUZjY2ZhYUF0dHIgPSBjb21tb24ucmVwbGFjZUZjY2ZhYUF0dHI7XG5cbiAgdmFyIHF1ZXJ5UmVnZXggPSAvXihcXD98I1xcPykvO1xuICBmdW5jdGlvbiBlbmNvZGVGY2ModmFsKSB7XG4gICAgcmV0dXJuIHJlcGxhY2VTY3JpcHRUYWdzKHJlcGxhY2VGb3JtQWN0aW9uQXR0cih2YWwpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlY29kZUZjYyh2YWwpIHtcbiAgICByZXR1cm4gcmVwbGFjZVNhZmVUYWdzKHJlcGxhY2VGY2NmYWFBdHRyKHZhbCkpO1xuICB9XG5cbiAgdmFyIGNvZGVVcmkgPSB7XG4gICAgZW5jb2RlOiBmdW5jdGlvbiBlbmNvZGUoY29kZSkge1xuICAgICAgcmV0dXJuIF9lbmNvZGUoY29kZSk7XG4gICAgfSxcbiAgICBkZWNvZGU6IGZ1bmN0aW9uIGRlY29kZShjb2RlKSB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gX2RlY29kZShjb2RlKTtcbiAgICAgIH0gY2F0Y2ggKGlnbm9yZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGlzSW5RdWVyeTogZnVuY3Rpb24gaXNJblF1ZXJ5KHF1ZXJ5KSB7XG4gICAgICB2YXIgZGVjb2RlZCA9IGNvZGVVcmkuZGVjb2RlKHF1ZXJ5KTtcbiAgICAgIGlmICghZGVjb2RlZCB8fCB0eXBlb2YgZGVjb2RlZC5zcGxpdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gZGVjb2RlZC5yZXBsYWNlKHF1ZXJ5UmVnZXgsICcnKS5zcGxpdCgnJicpLnJlZHVjZShmdW5jdGlvbiAoZm91bmQsIHBhcmFtKSB7XG4gICAgICAgIHZhciBrZXkgPSBwYXJhbS5zcGxpdCgnPScpWzBdO1xuICAgICAgICBpZiAoa2V5ID09PSAnc29sdXRpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgICAgfSwgZmFsc2UpO1xuICAgIH0sXG4gICAgaXNBbGl2ZTogZnVuY3Rpb24gaXNBbGl2ZSgpIHtcbiAgICAgIHJldHVybiBjb2RlVXJpLmVuYWJsZWQgJiYgY29kZVVyaS5pc0luUXVlcnkobG9jYXRpb24uc2VhcmNoKSB8fCBjb2RlVXJpLmlzSW5RdWVyeShsb2NhdGlvbi5oYXNoKTtcbiAgICB9LFxuICAgIGdldEtleUluUXVlcnk6IGZ1bmN0aW9uIGdldEtleUluUXVlcnkocXVlcnkpIHtcbiAgICAgIHZhciBrZXlUb0ZpbmQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyAnJyA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgcmV0dXJuIHF1ZXJ5LnNwbGl0KCcmJykucmVkdWNlKGZ1bmN0aW9uIChvbGRWYWx1ZSwgcGFyYW0pIHtcbiAgICAgICAgdmFyIGtleSA9IHBhcmFtLnNwbGl0KCc9JylbMF07XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcmFtLnNwbGl0KCc9Jykuc2xpY2UoMSkuam9pbignPScpO1xuXG4gICAgICAgIGlmIChrZXkgPT09IGtleVRvRmluZCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2xkVmFsdWU7XG4gICAgICB9LCBudWxsKTtcbiAgICB9LFxuICAgIGdldFNvbHV0aW9uRnJvbVF1ZXJ5OiBmdW5jdGlvbiBnZXRTb2x1dGlvbkZyb21RdWVyeSgpIHtcbiAgICAgIHZhciBxdWVyeSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICByZXR1cm4gZGVjb2RlRmNjKGNvZGVVcmkuZGVjb2RlKGNvZGVVcmkuZ2V0S2V5SW5RdWVyeShxdWVyeSwgJ3NvbHV0aW9uJykpKTtcbiAgICB9LFxuICAgIHBhcnNlOiBmdW5jdGlvbiBwYXJzZSgpIHtcbiAgICAgIGlmICghY29kZVVyaS5lbmFibGVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgdmFyIHF1ZXJ5O1xuICAgICAgaWYgKGxvY2F0aW9uLnNlYXJjaCAmJiBjb2RlVXJpLmlzSW5RdWVyeShsb2NhdGlvbi5zZWFyY2gpKSB7XG4gICAgICAgIHF1ZXJ5ID0gbG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoL15cXD8vLCAnJyk7XG5cbiAgICAgICAgaWYgKGhpc3RvcnkgJiYgdHlwZW9mIGhpc3RvcnkucmVwbGFjZVN0YXRlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUoaGlzdG9yeS5zdGF0ZSwgbnVsbCwgbG9jYXRpb24uaHJlZi5zcGxpdCgnPycpWzBdKTtcbiAgICAgICAgICBsb2NhdGlvbi5oYXNoID0gJyM/JyArIGVuY29kZUZjYyhxdWVyeSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXJ5ID0gbG9jYXRpb24uaGFzaC5yZXBsYWNlKC9eXFwjXFw/LywgJycpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZXRTb2x1dGlvbkZyb21RdWVyeShxdWVyeSk7XG4gICAgfSxcbiAgICBxdWVyaWZ5OiBmdW5jdGlvbiBxdWVyaWZ5KHNvbHV0aW9uKSB7XG4gICAgICBpZiAoIWNvZGVVcmkuZW5hYmxlZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICAgIGlmIChoaXN0b3J5ICYmIHR5cGVvZiBoaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBncmFiIHRoZSB1cmwgdXAgdG8gdGhlIHF1ZXJ5XG4gICAgICAgIC8vIGRlc3Ryb3kgYW55IGhhc2ggc3ltYm9scyBzdGlsbCBjbGluZ2luZyB0byBsaWZlXG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5ocmVmLnNwbGl0KCc/JylbMF0ucmVwbGFjZSgvKCMqKSQvLCAnJyk7XG4gICAgICAgIGhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3Rvcnkuc3RhdGUsIG51bGwsIHVybCArICcjPycgKyAoY29kZVVyaS5zaG91bGRSdW4oKSA/ICcnIDogJ3J1bj1kaXNhYmxlZCYnKSArICdzb2x1dGlvbj0nICsgY29kZVVyaS5lbmNvZGUoZW5jb2RlRmNjKHNvbHV0aW9uKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYXRpb24uaGFzaCA9ICc/c29sdXRpb249JyArIGNvZGVVcmkuZW5jb2RlKGVuY29kZUZjYyhzb2x1dGlvbikpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc29sdXRpb247XG4gICAgfSxcbiAgICBlbmFibGVkOiB0cnVlLFxuICAgIHNob3VsZFJ1bjogZnVuY3Rpb24gc2hvdWxkUnVuKCkge1xuICAgICAgcmV0dXJuICF0aGlzLmdldEtleUluUXVlcnkoKGxvY2F0aW9uLnNlYXJjaCB8fCBsb2NhdGlvbi5oYXNoKS5yZXBsYWNlKHF1ZXJ5UmVnZXgsICcnKSwgJ3J1bicpO1xuICAgIH1cbiAgfTtcblxuICBjb21tb24uaW5pdC5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICBjb2RlVXJpLnBhcnNlKCk7XG4gIH0pO1xuXG4gIGNvbW1vbi5jb2RlVXJpID0gY29kZVVyaTtcbiAgY29tbW9uLnNob3VsZFJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY29kZVVyaS5zaG91bGRSdW4oKTtcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgbG9vcFByb3RlY3QgPSBnbG9iYWwubG9vcFByb3RlY3Q7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG5cbiAgbG9vcFByb3RlY3QuaGl0ID0gZnVuY3Rpb24gaGl0KGxpbmUpIHtcbiAgICB2YXIgZXJyID0gJ0Vycm9yOiBFeGl0aW5nIHBvdGVudGlhbCBpbmZpbml0ZSBsb29wIGF0IGxpbmUgJyArIGxpbmUgKyAnLiBUbyBkaXNhYmxlIGxvb3AgcHJvdGVjdGlvbiwgd3JpdGU6IFxcblxcXFwvXFxcXC8gbm9wcm90ZWN0XFxuYXMgdGhlIGZpcnN0JyArICdsaW5lLiBCZXdhcmUgdGhhdCBpZiB5b3UgZG8gaGF2ZSBhbiBpbmZpbml0ZSBsb29wIGluIHlvdXIgY29kZScgKyAndGhpcyB3aWxsIGNyYXNoIHlvdXIgYnJvd3Nlci4nO1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgfTtcblxuICBjb21tb24uYWRkTG9vcFByb3RlY3QgPSBmdW5jdGlvbiBhZGRMb29wUHJvdGVjdCgpIHtcbiAgICB2YXIgY29kZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgcmV0dXJuIGxvb3BQcm90ZWN0KGNvZGUpO1xuICB9O1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG4gIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG5cbiAgY29tbW9uLmdldElmcmFtZSA9IGZ1bmN0aW9uIGdldElmcmFtZSgpIHtcbiAgICB2YXIgaWQgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAncHJldmlldycgOiBhcmd1bWVudHNbMF07XG5cbiAgICB2YXIgcHJldmlld0ZyYW1lID0gZG9jLmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgIC8vIGNyZWF0ZSBhbmQgYXBwZW5kIGEgaGlkZGVuIHByZXZpZXcgZnJhbWVcbiAgICBpZiAoIXByZXZpZXdGcmFtZSkge1xuICAgICAgcHJldmlld0ZyYW1lID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xuICAgICAgcHJldmlld0ZyYW1lLmlkID0gaWQ7XG4gICAgICBwcmV2aWV3RnJhbWUuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lJyk7XG4gICAgICBkb2MuYm9keS5hcHBlbmRDaGlsZChwcmV2aWV3RnJhbWUpO1xuICAgIH1cblxuICAgIHJldHVybiBwcmV2aWV3RnJhbWUuY29udGVudERvY3VtZW50IHx8IHByZXZpZXdGcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICB9O1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBfZ2xvYmFsJFJ4ID0gZ2xvYmFsLlJ4O1xuICB2YXIgQmVoYXZpb3JTdWJqZWN0ID0gX2dsb2JhbCRSeC5CZWhhdmlvclN1YmplY3Q7XG4gIHZhciBPYnNlcnZhYmxlID0gX2dsb2JhbCRSeC5PYnNlcnZhYmxlO1xuICB2YXIgX2dsb2JhbCRjb21tb24gPSBnbG9iYWwuY29tbW9uO1xuICB2YXIgY29tbW9uID0gX2dsb2JhbCRjb21tb24gPT09IHVuZGVmaW5lZCA/IHsgaW5pdDogW10gfSA6IF9nbG9iYWwkY29tbW9uO1xuXG4gIC8vIHRoZSBmaXJzdCBzY3JpcHQgdGFnIGhlcmUgaXMgdG8gcHJveHkgalF1ZXJ5XG4gIC8vIFdlIHVzZSB0aGUgc2FtZSBqUXVlcnkgb24gdGhlIG1haW4gd2luZG93IGJ1dCB3ZSBjaGFuZ2UgdGhlXG4gIC8vIGNvbnRleHQgdG8gdGhhdCBvZiB0aGUgaWZyYW1lLlxuICB2YXIgbGlicmFyeUluY2x1ZGVzID0gJ1xcbjxzY3JpcHQ+XFxuICB3aW5kb3cubG9vcFByb3RlY3QgPSBwYXJlbnQubG9vcFByb3RlY3Q7XFxuICB3aW5kb3cuX19lcnIgPSBudWxsO1xcbiAgd2luZG93Lmxvb3BQcm90ZWN0LmhpdCA9IGZ1bmN0aW9uKGxpbmUpIHtcXG4gICAgd2luZG93Ll9fZXJyID0gbmV3IEVycm9yKFxcbiAgICAgIFxcJ1BvdGVudGlhbCBpbmZpbml0ZSBsb29wIGF0IGxpbmUgXFwnICtcXG4gICAgICBsaW5lICtcXG4gICAgICBcXCcuIFRvIGRpc2FibGUgbG9vcCBwcm90ZWN0aW9uLCB3cml0ZTpcXCcgK1xcbiAgICAgIFxcJyBcXFxcblxcXFwvXFxcXC8gbm9wcm90ZWN0XFxcXG5hcyB0aGUgZmlyc3RcXCcgK1xcbiAgICAgIFxcJyBsaW5lLiBCZXdhcmUgdGhhdCBpZiB5b3UgZG8gaGF2ZSBhbiBpbmZpbml0ZSBsb29wIGluIHlvdXIgY29kZVxcJyArXFxuICAgICAgXFwnIHRoaXMgd2lsbCBjcmFzaCB5b3VyIGJyb3dzZXIuXFwnXFxuICAgICk7XFxuICB9O1xcbjwvc2NyaXB0PlxcbjxsaW5rXFxuICByZWw9XFwnc3R5bGVzaGVldFxcJ1xcbiAgaHJlZj1cXCcvL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9hbmltYXRlLmNzcy8zLjIuMC9hbmltYXRlLm1pbi5jc3NcXCdcXG4gIC8+XFxuPGxpbmtcXG4gIHJlbD1cXCdzdHlsZXNoZWV0XFwnXFxuICBocmVmPVxcJy8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzMuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1xcJ1xcbiAgLz5cXG5cXG48bGlua1xcbiAgcmVsPVxcJ3N0eWxlc2hlZXRcXCdcXG4gIGhyZWY9XFwnLy9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC4yLjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzXFwnXFxuICAvPlxcbjxzdHlsZT5cXG4gIGJvZHkgeyBwYWRkaW5nOiAwcHggM3B4IDBweCAzcHg7IH1cXG48L3N0eWxlPlxcbiAgJztcbiAgdmFyIGNvZGVEaXNhYmxlZEVycm9yID0gJ1xcbiAgICA8c2NyaXB0PlxcbiAgICAgIHdpbmRvdy5fX2VyciA9IG5ldyBFcnJvcihcXCdjb2RlIGhhcyBiZWVuIGRpc2FibGVkXFwnKTtcXG4gICAgPC9zY3JpcHQ+XFxuICAnO1xuXG4gIHZhciBpRnJhbWVTY3JpcHQkID0gY29tbW9uLmdldFNjcmlwdENvbnRlbnQkKCcvanMvaUZyYW1lU2NyaXB0cy5qcycpLnNoYXJlUmVwbGF5KCk7XG4gIHZhciBqUXVlcnlTY3JpcHQkID0gY29tbW9uLmdldFNjcmlwdENvbnRlbnQkKCcvYm93ZXJfY29tcG9uZW50cy9qcXVlcnkvZGlzdC9qcXVlcnkuanMnKS5zaGFyZVJlcGxheSgpO1xuXG4gIC8vIGJlaGF2aW9yIHN1YmplY3QgYWxsd2F5cyByZW1lbWJlcnMgdGhlIGxhc3QgdmFsdWVcbiAgLy8gd2UgdXNlIHRoaXMgdG8gZGV0ZXJtaW5lIGlmIHJ1blByZXZpZXdUZXN0JCBpcyBkZWZpbmVkXG4gIC8vIGFuZCBwcmltZSBpdCB3aXRoIGZhbHNlXG4gIGNvbW1vbi5wcmV2aWV3UmVhZHkkID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLy8gVGhlc2Ugc2hvdWxkIGJlIHNldCB1cCBpbiB0aGUgcHJldmlldyB3aW5kb3dcbiAgLy8gaWYgdGhpcyBlcnJvciBpcyBzZWVuIGl0IGlzIGJlY2F1c2UgdGhlIGZ1bmN0aW9uIHRyaWVkIHRvIHJ1blxuICAvLyBiZWZvcmUgdGhlIGlmcmFtZSBoYXMgY29tcGxldGVseSBsb2FkZWRcbiAgY29tbW9uLnJ1blByZXZpZXdUZXN0cyQgPSBjb21tb24uY2hlY2tQcmV2aWV3JCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZVsndGhyb3cnXShuZXcgRXJyb3IoJ1ByZXZpZXcgbm90IGZ1bGx5IGxvYWRlZCcpKTtcbiAgfTtcblxuICBjb21tb24udXBkYXRlUHJldmlldyQgPSBmdW5jdGlvbiB1cGRhdGVQcmV2aWV3JCgpIHtcbiAgICB2YXIgY29kZSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgdmFyIHByZXZpZXcgPSBjb21tb24uZ2V0SWZyYW1lKCdwcmV2aWV3Jyk7XG5cbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KGlGcmFtZVNjcmlwdCQsIGpRdWVyeVNjcmlwdCQsIGZ1bmN0aW9uIChpZnJhbWUsIGpRdWVyeSkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWZyYW1lU2NyaXB0OiAnPHNjcmlwdD4nICsgaWZyYW1lICsgJzwvc2NyaXB0PicsXG4gICAgICAgIGpRdWVyeTogJzxzY3JpcHQ+JyArIGpRdWVyeSArICc8L3NjcmlwdD4nXG4gICAgICB9O1xuICAgIH0pLmZpcnN0KCkuZmxhdE1hcChmdW5jdGlvbiAoX3JlZikge1xuICAgICAgdmFyIGlmcmFtZVNjcmlwdCA9IF9yZWYuaWZyYW1lU2NyaXB0O1xuICAgICAgdmFyIGpRdWVyeSA9IF9yZWYualF1ZXJ5O1xuXG4gICAgICAvLyB3ZSBtYWtlIHN1cmUgdG8gb3ZlcnJpZGUgdGhlIGxhc3QgdmFsdWUgaW4gdGhlXG4gICAgICAvLyBzdWJqZWN0IHRvIGZhbHNlIGhlcmUuXG4gICAgICBjb21tb24ucHJldmlld1JlYWR5JC5vbk5leHQoZmFsc2UpO1xuICAgICAgcHJldmlldy5vcGVuKCk7XG4gICAgICBwcmV2aWV3LndyaXRlKGxpYnJhcnlJbmNsdWRlcyArIGpRdWVyeSArIChjb21tb24uc2hvdWxkUnVuKCkgPyBjb2RlIDogY29kZURpc2FibGVkRXJyb3IpICsgJzwhLS0gLS0+JyArIGlmcmFtZVNjcmlwdCk7XG4gICAgICBwcmV2aWV3LmNsb3NlKCk7XG4gICAgICAvLyBub3cgd2UgZmlsdGVyIGZhbHNlIHZhbHVlcyBhbmQgd2FpdCBmb3IgdGhlIGZpcnN0IHRydWVcbiAgICAgIHJldHVybiBjb21tb24ucHJldmlld1JlYWR5JC5maWx0ZXIoZnVuY3Rpb24gKHJlYWR5KSB7XG4gICAgICAgIHJldHVybiByZWFkeTtcbiAgICAgIH0pLmZpcnN0KClcbiAgICAgIC8vIHRoZSBkZWxheSBoZXJlIGlzIHRvIGdpdmUgY29kZSB3aXRoaW4gdGhlIGlmcmFtZVxuICAgICAgLy8gY29udHJvbCB0byBydW5cbiAgICAgIC5kZWxheSg0MDApO1xuICAgIH0pLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY29kZTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgX2dsb2JhbCRSeCA9IGdsb2JhbC5SeDtcbiAgdmFyIFN1YmplY3QgPSBfZ2xvYmFsJFJ4LlN1YmplY3Q7XG4gIHZhciBPYnNlcnZhYmxlID0gX2dsb2JhbCRSeC5PYnNlcnZhYmxlO1xuICB2YXIgQ29kZU1pcnJvciA9IGdsb2JhbC5Db2RlTWlycm9yO1xuICB2YXIgZW1tZXRDb2RlTWlycm9yID0gZ2xvYmFsLmVtbWV0Q29kZU1pcnJvcjtcbiAgdmFyIF9nbG9iYWwkY29tbW9uID0gZ2xvYmFsLmNvbW1vbjtcbiAgdmFyIGNvbW1vbiA9IF9nbG9iYWwkY29tbW9uID09PSB1bmRlZmluZWQgPyB7IGluaXQ6IFtdIH0gOiBfZ2xvYmFsJGNvbW1vbjtcbiAgdmFyIF9jb21tb24kY2hhbGxlbmdlVHlwZSA9IGNvbW1vbi5jaGFsbGVuZ2VUeXBlO1xuICB2YXIgY2hhbGxlbmdlVHlwZSA9IF9jb21tb24kY2hhbGxlbmdlVHlwZSA9PT0gdW5kZWZpbmVkID8gJzAnIDogX2NvbW1vbiRjaGFsbGVuZ2VUeXBlO1xuICB2YXIgY2hhbGxlbmdlVHlwZXMgPSBjb21tb24uY2hhbGxlbmdlVHlwZXM7XG5cbiAgaWYgKCFDb2RlTWlycm9yIHx8IGNoYWxsZW5nZVR5cGUgPT09IGNoYWxsZW5nZVR5cGVzLkJBU0VKVU1QIHx8IGNoYWxsZW5nZVR5cGUgPT09IGNoYWxsZW5nZVR5cGVzLlpJUExJTkUgfHwgY2hhbGxlbmdlVHlwZSA9PT0gY2hhbGxlbmdlVHlwZXMuVklERU8gfHwgY2hhbGxlbmdlVHlwZSA9PT0gY2hhbGxlbmdlVHlwZXMuU1RFUCB8fCBjaGFsbGVuZ2VUeXBlID09PSBjaGFsbGVuZ2VUeXBlcy5ISUtFUykge1xuICAgIGNvbW1vbi5lZGl0b3IgPSB7fTtcbiAgICByZXR1cm4gY29tbW9uO1xuICB9XG5cbiAgdmFyIGVkaXRvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb2RlRWRpdG9yJyksIHtcbiAgICBsaW50OiB0cnVlLFxuICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgIG1vZGU6ICdqYXZhc2NyaXB0JyxcbiAgICB0aGVtZTogJ21vbm9rYWknLFxuICAgIHJ1bm5hYmxlOiB0cnVlLFxuICAgIG1hdGNoQnJhY2tldHM6IHRydWUsXG4gICAgYXV0b0Nsb3NlQnJhY2tldHM6IHRydWUsXG4gICAgc2Nyb2xsYmFyU3R5bGU6ICdudWxsJyxcbiAgICBsaW5lV3JhcHBpbmc6IHRydWUsXG4gICAgZ3V0dGVyczogWydDb2RlTWlycm9yLWxpbnQtbWFya2VycyddXG4gIH0pO1xuXG4gIGVkaXRvci5zZXRTaXplKCcxMDAlJywgJ2F1dG8nKTtcblxuICBjb21tb24uZWRpdG9yRXhlY3V0ZSQgPSBuZXcgU3ViamVjdCgpO1xuICBjb21tb24uZWRpdG9yS2V5VXAkID0gT2JzZXJ2YWJsZS5mcm9tRXZlbnRQYXR0ZXJuKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgcmV0dXJuIGVkaXRvci5vbigna2V5dXAnLCBoYW5kbGVyKTtcbiAgfSwgZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gZWRpdG9yLm9mZigna2V5dXAnLCBoYW5kbGVyKTtcbiAgfSk7XG5cbiAgZWRpdG9yLnNldE9wdGlvbignZXh0cmFLZXlzJywge1xuICAgIFRhYjogZnVuY3Rpb24gVGFiKGNtKSB7XG4gICAgICBpZiAoY20uc29tZXRoaW5nU2VsZWN0ZWQoKSkge1xuICAgICAgICBjbS5pbmRlbnRTZWxlY3Rpb24oJ2FkZCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNwYWNlcyA9IEFycmF5KGNtLmdldE9wdGlvbignaW5kZW50VW5pdCcpICsgMSkuam9pbignICcpO1xuICAgICAgICBjbS5yZXBsYWNlU2VsZWN0aW9uKHNwYWNlcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICAnU2hpZnQtVGFiJzogZnVuY3Rpb24gU2hpZnRUYWIoY20pIHtcbiAgICAgIGlmIChjbS5zb21ldGhpbmdTZWxlY3RlZCgpKSB7XG4gICAgICAgIGNtLmluZGVudFNlbGVjdGlvbignc3VidHJhY3QnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBzcGFjZXMgPSBBcnJheShjbS5nZXRPcHRpb24oJ2luZGVudFVuaXQnKSArIDEpLmpvaW4oJyAnKTtcbiAgICAgICAgY20ucmVwbGFjZVNlbGVjdGlvbihzcGFjZXMpO1xuICAgICAgfVxuICAgIH0sXG4gICAgJ0N0cmwtRW50ZXInOiBmdW5jdGlvbiBDdHJsRW50ZXIoKSB7XG4gICAgICBjb21tb24uZWRpdG9yRXhlY3V0ZSQub25OZXh0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbiAgICAnQ21kLUVudGVyJzogZnVuY3Rpb24gQ21kRW50ZXIoKSB7XG4gICAgICBjb21tb24uZWRpdG9yRXhlY3V0ZSQub25OZXh0KCk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICB2YXIgaW5mbyA9IGVkaXRvci5nZXRTY3JvbGxJbmZvKCk7XG5cbiAgdmFyIGFmdGVyID0gZWRpdG9yLmNoYXJDb29yZHMoe1xuICAgIGxpbmU6IGVkaXRvci5nZXRDdXJzb3IoKS5saW5lICsgMSxcbiAgICBjaDogMFxuICB9LCAnbG9jYWwnKS50b3A7XG5cbiAgaWYgKGluZm8udG9wICsgaW5mby5jbGllbnRIZWlnaHQgPCBhZnRlcikge1xuICAgIGVkaXRvci5zY3JvbGxUbyhudWxsLCBhZnRlciAtIGluZm8uY2xpZW50SGVpZ2h0ICsgMyk7XG4gIH1cblxuICBpZiAoZW1tZXRDb2RlTWlycm9yKSB7XG4gICAgZW1tZXRDb2RlTWlycm9yKGVkaXRvciwge1xuICAgICAgJ0NtZC1FJzogJ2VtbWV0LmV4cGFuZF9hYmJyZXZpYXRpb24nLFxuICAgICAgVGFiOiAnZW1tZXQuZXhwYW5kX2FiYnJldmlhdGlvbl93aXRoX3RhYicsXG4gICAgICBFbnRlcjogJ2VtbWV0Lmluc2VydF9mb3JtYXR0ZWRfbGluZV9icmVha19vbmx5J1xuICAgIH0pO1xuICB9XG4gIGNvbW1vbi5pbml0LnB1c2goZnVuY3Rpb24gKCkge1xuICAgIHZhciBlZGl0b3JWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBpZiAoY29tbW9uLmNvZGVVcmkuaXNBbGl2ZSgpKSB7XG4gICAgICBlZGl0b3JWYWx1ZSA9IGNvbW1vbi5jb2RlVXJpLnBhcnNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVkaXRvclZhbHVlID0gY29tbW9uLmNvZGVTdG9yYWdlLmlzQWxpdmUoY29tbW9uLmNoYWxsZW5nZU5hbWUpID8gY29tbW9uLmNvZGVTdG9yYWdlLmdldFN0b3JlZFZhbHVlKGNvbW1vbi5jaGFsbGVuZ2VOYW1lKSA6IGNvbW1vbi5zZWVkO1xuICAgIH1cblxuICAgIGVkaXRvci5zZXRWYWx1ZShjb21tb24ucmVwbGFjZVNhZmVUYWdzKGVkaXRvclZhbHVlKSk7XG4gICAgZWRpdG9yLnJlZnJlc2goKTtcbiAgfSk7XG5cbiAgY29tbW9uLmVkaXRvciA9IGVkaXRvcjtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgT2JzZXJ2YWJsZSA9IGdsb2JhbC5SeC5PYnNlcnZhYmxlO1xuICB2YXIgX2dsb2JhbCRjb21tb24gPSBnbG9iYWwuY29tbW9uO1xuICB2YXIgY29tbW9uID0gX2dsb2JhbCRjb21tb24gPT09IHVuZGVmaW5lZCA/IHsgaW5pdDogW10gfSA6IF9nbG9iYWwkY29tbW9uO1xuXG4gIHZhciBkZXRlY3RGdW5jdGlvbkNhbGwgPSAvZnVuY3Rpb25cXHMqP1xcKHxmdW5jdGlvblxccytcXHcrXFxzKj9cXCgvZ2k7XG4gIHZhciBkZXRlY3RVbnNhZmVKUSA9IC9cXCRcXHMqP1xcKFxccyo/XFwkXFxzKj9cXCkvZ2k7XG4gIHZhciBkZXRlY3RVbnNhZmVDb25zb2xlQ2FsbCA9IC9pZlxcc1xcKG51bGxcXClcXHNjb25zb2xlXFwubG9nXFwoMVxcKTsvZ2k7XG5cbiAgY29tbW9uLmRldGVjdFVuc2FmZUNvZGUkID0gZnVuY3Rpb24gZGV0ZWN0VW5zYWZlQ29kZSQoY29kZSkge1xuICAgIHZhciBvcGVuaW5nQ29tbWVudHMgPSBjb2RlLm1hdGNoKC9cXC9cXCovZ2kpO1xuICAgIHZhciBjbG9zaW5nQ29tbWVudHMgPSBjb2RlLm1hdGNoKC9cXCpcXC8vZ2kpO1xuXG4gICAgLy8gY2hlY2tzIGlmIHRoZSBudW1iZXIgb2Ygb3BlbmluZyBjb21tZW50cygvKikgbWF0Y2hlcyB0aGUgbnVtYmVyIG9mXG4gICAgLy8gY2xvc2luZyBjb21tZW50cygqLylcbiAgICBpZiAob3BlbmluZ0NvbW1lbnRzICYmICghY2xvc2luZ0NvbW1lbnRzIHx8IG9wZW5pbmdDb21tZW50cy5sZW5ndGggPiBjbG9zaW5nQ29tbWVudHMubGVuZ3RoKSkge1xuXG4gICAgICByZXR1cm4gT2JzZXJ2YWJsZVsndGhyb3cnXShuZXcgRXJyb3IoJ1N5bnRheEVycm9yOiBVbmZpbmlzaGVkIG11bHRpLWxpbmUgY29tbWVudCcpKTtcbiAgICB9XG5cbiAgICBpZiAoY29kZS5tYXRjaChkZXRlY3RVbnNhZmVKUSkpIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlWyd0aHJvdyddKG5ldyBFcnJvcignVW5zYWZlICQoJCknKSk7XG4gICAgfVxuXG4gICAgaWYgKGNvZGUubWF0Y2goL2Z1bmN0aW9uL2cpICYmICFjb2RlLm1hdGNoKGRldGVjdEZ1bmN0aW9uQ2FsbCkpIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlWyd0aHJvdyddKG5ldyBFcnJvcignU3ludGF4RXJyb3I6IFVuc2FmZSBvciB1bmZpbmlzaGVkIGZ1bmN0aW9uIGRlY2xhcmF0aW9uJykpO1xuICAgIH1cblxuICAgIGlmIChjb2RlLm1hdGNoKGRldGVjdFVuc2FmZUNvbnNvbGVDYWxsKSkge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGVbJ3Rocm93J10obmV3IEVycm9yKCdJbnZhbGlkIGlmIChudWxsKSBjb25zb2xlLmxvZygxKTsgZGV0ZWN0ZWQnKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuanVzdChjb2RlKTtcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyICQgPSBfcmVmLiQ7XG4gIHZhciBfcmVmJGNvbW1vbiA9IF9yZWYuY29tbW9uO1xuICB2YXIgY29tbW9uID0gX3JlZiRjb21tb24gPT09IHVuZGVmaW5lZCA/IHsgaW5pdDogW10gfSA6IF9yZWYkY29tbW9uO1xuXG4gIGNvbW1vbi5kaXNwbGF5VGVzdFJlc3VsdHMgPSBmdW5jdGlvbiBkaXNwbGF5VGVzdFJlc3VsdHMoKSB7XG4gICAgdmFyIGRhdGEgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyBbXSA6IGFyZ3VtZW50c1swXTtcblxuICAgICQoJyN0ZXN0U3VpdGUnKS5jaGlsZHJlbigpLnJlbW92ZSgpO1xuICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgIHZhciBfcmVmMiRlcnIgPSBfcmVmMi5lcnI7XG4gICAgICB2YXIgZXJyID0gX3JlZjIkZXJyID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYyJGVycjtcbiAgICAgIHZhciBfcmVmMiR0ZXh0ID0gX3JlZjIudGV4dDtcbiAgICAgIHZhciB0ZXh0ID0gX3JlZjIkdGV4dCA9PT0gdW5kZWZpbmVkID8gJycgOiBfcmVmMiR0ZXh0O1xuXG4gICAgICB2YXIgaWNvbkNsYXNzID0gZXJyID8gJ1wiaW9uLWNsb3NlLWNpcmNsZWQgYmlnLWVycm9yLWljb25cIicgOiAnXCJpb24tY2hlY2ttYXJrLWNpcmNsZWQgYmlnLXN1Y2Nlc3MtaWNvblwiJztcblxuICAgICAgJCgnPGRpdj48L2Rpdj4nKS5odG1sKCdcXG4gICAgICAgIDxkaXYgY2xhc3M9XFwncm93XFwnPlxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcJ2NvbC14cy0yIHRleHQtY2VudGVyXFwnPlxcbiAgICAgICAgICAgIDxpIGNsYXNzPScgKyBpY29uQ2xhc3MgKyAnPjwvaT5cXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFwnY29sLXhzLTEwIHRlc3Qtb3V0cHV0XFwnPlxcbiAgICAgICAgICAgICcgKyB0ZXh0LnNwbGl0KCdtZXNzYWdlOiAnKS5wb3AoKS5yZXBsYWNlKC9cXCdcXCk7L2csICcnKSArICdcXG4gICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFwndGVuLXBpeGVsLWJyZWFrXFwnLz5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICcpLmFwcGVuZFRvKCQoJyN0ZXN0U3VpdGUnKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgZ2EgPSBnbG9iYWwuZ2E7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG4gIHZhciBhZGRMb29wUHJvdGVjdCA9IGNvbW1vbi5hZGRMb29wUHJvdGVjdDtcbiAgdmFyIGdldEpzRnJvbUh0bWwgPSBjb21tb24uZ2V0SnNGcm9tSHRtbDtcbiAgdmFyIGRldGVjdFVuc2FmZUNvZGUkID0gY29tbW9uLmRldGVjdFVuc2FmZUNvZGUkO1xuICB2YXIgdXBkYXRlUHJldmlldyQgPSBjb21tb24udXBkYXRlUHJldmlldyQ7XG4gIHZhciBjaGFsbGVuZ2VUeXBlID0gY29tbW9uLmNoYWxsZW5nZVR5cGU7XG4gIHZhciBjaGFsbGVuZ2VUeXBlcyA9IGNvbW1vbi5jaGFsbGVuZ2VUeXBlcztcblxuICBjb21tb24uZXhlY3V0ZUNoYWxsZW5nZSQgPSBmdW5jdGlvbiBleGVjdXRlQ2hhbGxlbmdlJCgpIHtcbiAgICB2YXIgY29kZSA9IGNvbW1vbi5lZGl0b3IuZ2V0VmFsdWUoKTtcbiAgICB2YXIgb3JpZ2luYWxDb2RlID0gY29kZTtcbiAgICB2YXIgaGVhZCA9IGNvbW1vbi5hcnJheVRvTmV3TGluZVN0cmluZyhjb21tb24uaGVhZCk7XG4gICAgdmFyIHRhaWwgPSBjb21tb24uYXJyYXlUb05ld0xpbmVTdHJpbmcoY29tbW9uLnRhaWwpO1xuICAgIHZhciBjb21iaW5lZENvZGUgPSBoZWFkICsgY29kZSArIHRhaWw7XG5cbiAgICBnYSgnc2VuZCcsICdldmVudCcsICdDaGFsbGVuZ2UnLCAncmFuLWNvZGUnLCBjb21tb24uY2hhbGxlbmdlTmFtZSk7XG5cbiAgICAvLyBydW4gY2hlY2tzIGZvciB1bnNhZmUgY29kZVxuICAgIHJldHVybiBkZXRlY3RVbnNhZmVDb2RlJChjb2RlKVxuICAgIC8vIGFkZCBoZWFkIGFuZCB0YWlsIGFuZCBkZXRlY3QgbG9vcHNcbiAgICAubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChjaGFsbGVuZ2VUeXBlICE9PSBjaGFsbGVuZ2VUeXBlcy5IVE1MKSB7XG4gICAgICAgIHJldHVybiAnPHNjcmlwdD47JyArIGFkZExvb3BQcm90ZWN0KGNvbWJpbmVkQ29kZSkgKyAnLyoqLzwvc2NyaXB0Pic7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhZGRMb29wUHJvdGVjdChjb21iaW5lZENvZGUpO1xuICAgIH0pLmZsYXRNYXAoZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIHJldHVybiB1cGRhdGVQcmV2aWV3JChjb2RlKTtcbiAgICB9KS5mbGF0TWFwKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICB2YXIgb3V0cHV0ID0gdW5kZWZpbmVkO1xuXG4gICAgICBpZiAoY2hhbGxlbmdlVHlwZSA9PT0gY2hhbGxlbmdlVHlwZXMuSFRNTCAmJiBjb21tb24uaGFzSnMoY29kZSkpIHtcbiAgICAgICAgb3V0cHV0ID0gY29tbW9uLmdldEpzT3V0cHV0KGdldEpzRnJvbUh0bWwoY29kZSkpO1xuICAgICAgfSBlbHNlIGlmIChjaGFsbGVuZ2VUeXBlICE9PSBjaGFsbGVuZ2VUeXBlcy5IVE1MKSB7XG4gICAgICAgIG91dHB1dCA9IGNvbW1vbi5nZXRKc091dHB1dChhZGRMb29wUHJvdGVjdChjb21iaW5lZENvZGUpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbW1vbi5ydW5QcmV2aWV3VGVzdHMkKHtcbiAgICAgICAgdGVzdHM6IGNvbW1vbi50ZXN0cy5zbGljZSgpLFxuICAgICAgICBvcmlnaW5hbENvZGU6IG9yaWdpbmFsQ29kZSxcbiAgICAgICAgb3V0cHV0OiBvdXRwdXRcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBDb2RlTWlycm9yID0gZ2xvYmFsLkNvZGVNaXJyb3I7XG4gIHZhciBkb2MgPSBnbG9iYWwuZG9jdW1lbnQ7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG4gIHZhciBjaGFsbGVuZ2VUeXBlcyA9IGNvbW1vbi5jaGFsbGVuZ2VUeXBlcztcbiAgdmFyIF9jb21tb24kY2hhbGxlbmdlVHlwZSA9IGNvbW1vbi5jaGFsbGVuZ2VUeXBlO1xuICB2YXIgY2hhbGxlbmdlVHlwZSA9IF9jb21tb24kY2hhbGxlbmdlVHlwZSA9PT0gdW5kZWZpbmVkID8gJzAnIDogX2NvbW1vbiRjaGFsbGVuZ2VUeXBlO1xuXG4gIGlmICghQ29kZU1pcnJvciB8fCBjaGFsbGVuZ2VUeXBlICE9PSBjaGFsbGVuZ2VUeXBlcy5KUyAmJiBjaGFsbGVuZ2VUeXBlICE9PSBjaGFsbGVuZ2VUeXBlcy5CT05GSVJFKSB7XG4gICAgY29tbW9uLnVwZGF0ZU91dHB1dERpc3BsYXkgPSBmdW5jdGlvbiAoKSB7fTtcbiAgICBjb21tb24uYXBwZW5kVG9PdXRwdXREaXNwbGF5ID0gZnVuY3Rpb24gKCkge307XG4gICAgcmV0dXJuIGNvbW1vbjtcbiAgfVxuXG4gIHZhciBjb2RlT3V0cHV0ID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoZG9jLmdldEVsZW1lbnRCeUlkKCdjb2RlT3V0cHV0JyksIHtcbiAgICBsaW5lTnVtYmVyczogZmFsc2UsXG4gICAgbW9kZTogJ3RleHQnLFxuICAgIHRoZW1lOiAnbW9ub2thaScsXG4gICAgcmVhZE9ubHk6ICdub2N1cnNvcicsXG4gICAgbGluZVdyYXBwaW5nOiB0cnVlXG4gIH0pO1xuXG4gIGNvZGVPdXRwdXQuc2V0VmFsdWUoJy8qKlxcbiAgKiBZb3VyIG91dHB1dCB3aWxsIGdvIGhlcmUuXFxuICAqIENvbnNvbGUubG9nKCkgLXR5cGUgc3RhdGVtZW50c1xcbiAgKiB3aWxsIGFwcGVhciBpbiB5b3VyIGJyb3dzZXJcXCdzXFxuICAqIERldlRvb2xzIEphdmFTY3JpcHQgY29uc29sZS5cXG4gICovJyk7XG5cbiAgY29kZU91dHB1dC5zZXRTaXplKCcxMDAlJywgJzEwMCUnKTtcblxuICBjb21tb24udXBkYXRlT3V0cHV0RGlzcGxheSA9IGZ1bmN0aW9uIHVwZGF0ZU91dHB1dERpc3BsYXkoKSB7XG4gICAgdmFyIHN0ciA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/ICcnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgY29kZU91dHB1dC5zZXRWYWx1ZShzdHIpO1xuICAgIHJldHVybiBzdHI7XG4gIH07XG5cbiAgY29tbW9uLmFwcGVuZFRvT3V0cHV0RGlzcGxheSA9IGZ1bmN0aW9uIGFwcGVuZFRvT3V0cHV0RGlzcGxheSgpIHtcbiAgICB2YXIgc3RyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJycgOiBhcmd1bWVudHNbMF07XG5cbiAgICBjb2RlT3V0cHV0LnNldFZhbHVlKGNvZGVPdXRwdXQuZ2V0VmFsdWUoKSArIHN0cik7XG4gICAgcmV0dXJuIHN0cjtcbiAgfTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkY29tbW9uID0gX3JlZi5jb21tb247XG4gIHZhciBjb21tb24gPSBfcmVmJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX3JlZiRjb21tb247XG5cbiAgY29tbW9uLmxvY2tUb3AgPSBmdW5jdGlvbiBsb2NrVG9wKCkge1xuICAgIHZhciBtYWdpVmFsO1xuXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpID49IDk5MCkge1xuICAgICAgaWYgKCQoJy5lZGl0b3JTY3JvbGxEaXYnKS5odG1sKCkpIHtcblxuICAgICAgICBtYWdpVmFsID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJCgnLm5hdmJhcicpLmhlaWdodCgpO1xuXG4gICAgICAgIGlmIChtYWdpVmFsIDwgMCkge1xuICAgICAgICAgIG1hZ2lWYWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgICQoJy5lZGl0b3JTY3JvbGxEaXYnKS5jc3MoJ2hlaWdodCcsIG1hZ2lWYWwgLSA1MCArICdweCcpO1xuICAgICAgfVxuXG4gICAgICBtYWdpVmFsID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gJCgnLm5hdmJhcicpLmhlaWdodCgpO1xuXG4gICAgICBpZiAobWFnaVZhbCA8IDApIHtcbiAgICAgICAgbWFnaVZhbCA9IDA7XG4gICAgICB9XG5cbiAgICAgICQoJy5zY3JvbGwtbG9ja2VyJykuY3NzKCdtaW4taGVpZ2h0JywgJCgnLmVkaXRvclNjcm9sbERpdicpLmhlaWdodCgpKS5jc3MoJ2hlaWdodCcsIG1hZ2lWYWwgLSA1MCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoJy5lZGl0b3JTY3JvbGxEaXYnKS5jc3MoJ21heC1oZWlnaHQnLCA1MDAgKyAncHgnKTtcblxuICAgICAgJCgnLnNjcm9sbC1sb2NrZXInKS5jc3MoJ3Bvc2l0aW9uJywgJ2luaGVyaXQnKS5jc3MoJ3RvcCcsICdpbmhlcml0JykuY3NzKCd3aWR0aCcsICcxMDAlJykuY3NzKCdtYXgtaGVpZ2h0JywgJzEwMCUnKTtcbiAgICB9XG4gIH07XG5cbiAgY29tbW9uLmluaXQucHVzaChmdW5jdGlvbiAoJCkge1xuICAgIC8vIGZha2VpcGhvbmUgcG9zaXRpb25pbmcgaG90Zml4XG4gICAgaWYgKCQoJy5pcGhvbmUtcG9zaXRpb24nKS5odG1sKCkgfHwgJCgnLmlwaG9uZScpLmh0bWwoKSkge1xuICAgICAgdmFyIHN0YXJ0SXBob25lUG9zaXRpb24gPSBwYXJzZUludCgkKCcuaXBob25lLXBvc2l0aW9uJykuY3NzKCd0b3AnKS5yZXBsYWNlKCdweCcsICcnKSwgMTApO1xuXG4gICAgICB2YXIgc3RhcnRJcGhvbmUgPSBwYXJzZUludCgkKCcuaXBob25lJykuY3NzKCd0b3AnKS5yZXBsYWNlKCdweCcsICcnKSwgMTApO1xuXG4gICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvdXJzZUhlaWdodCA9ICQoJy5jb3Vyc2V3YXJlLWhlaWdodCcpLmhlaWdodCgpO1xuICAgICAgICB2YXIgY291cnNlVG9wID0gJCgnLmNvdXJzZXdhcmUtaGVpZ2h0Jykub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgd2luZG93U2Nyb2xsVG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICB2YXIgcGhvbmVIZWlnaHQgPSAkKCcuaXBob25lLXBvc2l0aW9uJykuaGVpZ2h0KCk7XG5cbiAgICAgICAgaWYgKGNvdXJzZUhlaWdodCArIGNvdXJzZVRvcCAtIHdpbmRvd1Njcm9sbFRvcCAtIHBob25lSGVpZ2h0IDw9IDApIHtcbiAgICAgICAgICAkKCcuaXBob25lLXBvc2l0aW9uJykuY3NzKCd0b3AnLCBzdGFydElwaG9uZVBvc2l0aW9uICsgY291cnNlSGVpZ2h0ICsgY291cnNlVG9wIC0gd2luZG93U2Nyb2xsVG9wIC0gcGhvbmVIZWlnaHQpO1xuXG4gICAgICAgICAgJCgnLmlwaG9uZScpLmNzcygndG9wJywgc3RhcnRJcGhvbmVQb3NpdGlvbiArIGNvdXJzZUhlaWdodCArIGNvdXJzZVRvcCAtIHdpbmRvd1Njcm9sbFRvcCAtIHBob25lSGVpZ2h0ICsgMTIwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAkKCcuaXBob25lLXBvc2l0aW9uJykuY3NzKCd0b3AnLCBzdGFydElwaG9uZVBvc2l0aW9uKTtcbiAgICAgICAgICAkKCcuaXBob25lJykuY3NzKCd0b3AnLCBzdGFydElwaG9uZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuc2Nyb2xsLWxvY2tlcicpLmh0bWwoKSkge1xuXG4gICAgICBpZiAoJCgnLnNjcm9sbC1sb2NrZXInKS5odG1sKCkpIHtcbiAgICAgICAgY29tbW9uLmxvY2tUb3AoKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY29tbW9uLmxvY2tUb3AoKTtcbiAgICAgICAgfSk7XG4gICAgICAgICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNvbW1vbi5sb2NrVG9wKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB2YXIgZXhlY0luUHJvZ3Jlc3MgPSBmYWxzZTtcblxuICAgICAgLy8gd2h5IGlzIHRoaXMgbm90ICQ/Pz9cbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY3JvbGwtbG9ja2VyJykuYWRkRXZlbnRMaXN0ZW5lcigncHJldmlld1VwZGF0ZVNweScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChleGVjSW5Qcm9ncmVzcykge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGV4ZWNJblByb2dyZXNzID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKCQoJCgnLnNjcm9sbC1sb2NrZXInKS5jaGlsZHJlbigpWzBdKS5oZWlnaHQoKSAtIDgwMCA+IGUuZGV0YWlsKSB7XG4gICAgICAgICAgICAkKCcuc2Nyb2xsLWxvY2tlcicpLnNjcm9sbFRvcChlLmRldGFpbCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxUb3AgPSAkKCQoJy5zY3JvbGwtbG9ja2VyJykuY2hpbGRyZW4oKVswXSkuaGVpZ2h0KCk7XG5cbiAgICAgICAgICAgICQoJy5zY3JvbGwtbG9ja2VyJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogc2Nyb2xsVG9wIH0sIDE3NSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4ZWNJblByb2dyZXNzID0gZmFsc2U7XG4gICAgICAgIH0sIDc1MCk7XG4gICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gY29tbW9uO1xufSkod2luZG93KTsiLCIndXNlIHN0cmljdCc7XG5cbndpbmRvdy5jb21tb24gPSAoZnVuY3Rpb24gKF9yZWYpIHtcbiAgdmFyIF9yZWYkY29tbW9uID0gX3JlZi5jb21tb247XG4gIHZhciBjb21tb24gPSBfcmVmJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX3JlZiRjb21tb247XG5cbiAgY29tbW9uLmluaXQucHVzaChmdW5jdGlvbiAoJCkge1xuICAgICQoJyNyZXBvcnQtaXNzdWUnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGV4dE1lc3NhZ2UgPSBbJ0NoYWxsZW5nZSBbJywgY29tbW9uLmNoYWxsZW5nZU5hbWUgfHwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLCAnXSgnLCB3aW5kb3cubG9jYXRpb24uaHJlZiwgJykgaGFzIGFuIGlzc3VlLlxcbicsICdVc2VyIEFnZW50IGlzOiA8Y29kZT4nLCBuYXZpZ2F0b3IudXNlckFnZW50LCAnPC9jb2RlPi5cXG4nLCAnUGxlYXNlIGRlc2NyaWJlIGhvdyB0byByZXByb2R1Y2UgdGhpcyBpc3N1ZSwgYW5kIGluY2x1ZGUgJywgJ2xpbmtzIHRvIHNjcmVlbnNob3RzIGlmIHBvc3NpYmxlLlxcblxcbiddLmpvaW4oJycpO1xuXG4gICAgICBpZiAoY29tbW9uLmVkaXRvciAmJiB0eXBlb2YgY29tbW9uLmVkaXRvci5nZXRWYWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiBjb21tb24uZWRpdG9yLmdldFZhbHVlKCkudHJpbSgpKSB7XG4gICAgICAgIHZhciB0eXBlO1xuICAgICAgICBzd2l0Y2ggKGNvbW1vbi5jaGFsbGVuZ2VUeXBlKSB7XG4gICAgICAgICAgY2FzZSBjb21tb24uY2hhbGxlbmdlVHlwZXMuSFRNTDpcbiAgICAgICAgICAgIHR5cGUgPSAnaHRtbCc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIGNvbW1vbi5jaGFsbGVuZ2VUeXBlcy5KUzpcbiAgICAgICAgICBjYXNlIGNvbW1vbi5jaGFsbGVuZ2VUeXBlcy5CT05GSVJFOlxuICAgICAgICAgICAgdHlwZSA9ICdqYXZhc2NyaXB0JztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0eXBlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0ZXh0TWVzc2FnZSArPSBbJ015IGNvZGU6XFxuYGBgJywgdHlwZSwgJ1xcbicsIGNvbW1vbi5lZGl0b3IuZ2V0VmFsdWUoKSwgJ1xcbmBgYFxcblxcbiddLmpvaW4oJycpO1xuICAgICAgfVxuXG4gICAgICB0ZXh0TWVzc2FnZSA9IGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0TWVzc2FnZSk7XG5cbiAgICAgICQoJyNpc3N1ZS1tb2RhbCcpLm1vZGFsKCdoaWRlJyk7XG4gICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tL2ZyZWVjb2RlY2FtcC9mcmVlY29kZWNhbXAvaXNzdWVzL25ldz8mYm9keT0nICsgdGV4dE1lc3NhZ2UsICdfYmxhbmsnKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIGNvbW1vbjtcbn0pKHdpbmRvdyk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhvYmosIGtleXMpIHsgdmFyIHRhcmdldCA9IHt9OyBmb3IgKHZhciBpIGluIG9iaikgeyBpZiAoa2V5cy5pbmRleE9mKGkpID49IDApIGNvbnRpbnVlOyBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGkpKSBjb250aW51ZTsgdGFyZ2V0W2ldID0gb2JqW2ldOyB9IHJldHVybiB0YXJnZXQ7IH1cblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gIHZhciBPYnNlcnZhYmxlID0gZ2xvYmFsLlJ4Lk9ic2VydmFibGU7XG4gIHZhciBjaGFpID0gZ2xvYmFsLmNoYWk7XG4gIHZhciBfZ2xvYmFsJGNvbW1vbiA9IGdsb2JhbC5jb21tb247XG4gIHZhciBjb21tb24gPSBfZ2xvYmFsJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX2dsb2JhbCRjb21tb247XG5cbiAgY29tbW9uLnJ1blRlc3RzJCA9IGZ1bmN0aW9uIHJ1blRlc3RzJChfcmVmKSB7XG4gICAgdmFyIGNvZGUgPSBfcmVmLmNvZGU7XG4gICAgdmFyIG9yaWdpbmFsQ29kZSA9IF9yZWYub3JpZ2luYWxDb2RlO1xuICAgIHZhciB1c2VyVGVzdHMgPSBfcmVmLnVzZXJUZXN0cztcblxuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtcImNvZGVcIiwgXCJvcmlnaW5hbENvZGVcIiwgXCJ1c2VyVGVzdHNcIl0pO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuZnJvbSh1c2VyVGVzdHMpLm1hcChmdW5jdGlvbiAodGVzdCkge1xuXG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuICAgICAgdmFyIGFzc2VydCA9IGNoYWkuYXNzZXJ0O1xuICAgICAgdmFyIGVkaXRvciA9IHsgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgICAgIHJldHVybiBvcmlnaW5hbENvZGU7XG4gICAgICAgIH0gfTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tdW51c2VkLXZhcnMgKi9cblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRlc3QpIHtcbiAgICAgICAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1ldmFsICAqL1xuICAgICAgICAgIGV2YWwoY29tbW9uLnJlYXNzZW1ibGVUZXN0KGNvZGUsIHRlc3QpKTtcbiAgICAgICAgICAvKiBlc2xpbnQtZW5hYmxlIG5vLWV2YWwgKi9cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0ZXN0LmVyciA9IGUubWVzc2FnZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfSkudG9BcnJheSgpLm1hcChmdW5jdGlvbiAodGVzdHMpIHtcbiAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVzdCwgeyB0ZXN0czogdGVzdHMgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNvbW1vbjtcbn0pKHdpbmRvdyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG53aW5kb3cuY29tbW9uID0gKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgdmFyICQgPSBnbG9iYWwuJDtcbiAgdmFyIF9nbG9iYWwkZ2EgPSBnbG9iYWwuZ2E7XG4gIHZhciBnYSA9IF9nbG9iYWwkZ2EgPT09IHVuZGVmaW5lZCA/IGZ1bmN0aW9uICgpIHt9IDogX2dsb2JhbCRnYTtcbiAgdmFyIF9nbG9iYWwkY29tbW9uID0gZ2xvYmFsLmNvbW1vbjtcbiAgdmFyIGNvbW1vbiA9IF9nbG9iYWwkY29tbW9uID09PSB1bmRlZmluZWQgPyB7IGluaXQ6IFtdIH0gOiBfZ2xvYmFsJGNvbW1vbjtcblxuICBjb21tb24uc2hvd0NvbXBsZXRpb24gPSBmdW5jdGlvbiBzaG93Q29tcGxldGlvbigpIHtcblxuICAgIGdhKCdzZW5kJywgJ2V2ZW50JywgJ0NoYWxsZW5nZScsICdzb2x2ZWQnLCBjb21tb24uY2hhbGxlbmdlTmFtZSwgdHJ1ZSk7XG5cbiAgICB2YXIgc29sdXRpb24gPSBjb21tb24uZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgdmFyIGRpZENvbXBsZXRlV2l0aCA9ICQoJyNjb21wbGV0ZWQtd2l0aCcpLnZhbCgpIHx8IG51bGw7XG5cbiAgICAkKCcjY29tcGxldGUtY291cnNld2FyZS1kaWFsb2cnKS5tb2RhbCgnc2hvdycpO1xuICAgICQoJyNjb21wbGV0ZS1jb3Vyc2V3YXJlLWRpYWxvZyAubW9kYWwtaGVhZGVyJykuY2xpY2soKTtcblxuICAgICQoJyNzdWJtaXQtY2hhbGxlbmdlJykuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgJCgnI3N1Ym1pdC1jaGFsbGVuZ2UnKS5hdHRyKCdkaXNhYmxlZCcsICd0cnVlJykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYWRkQ2xhc3MoJ2J0bi13YXJuaW5nIGRpc2FibGVkJyk7XG5cbiAgICAgIHZhciAkY2hlY2ttYXJrQ29udGFpbmVyID0gJCgnI2NoZWNrbWFyay1jb250YWluZXInKTtcbiAgICAgICRjaGVja21hcmtDb250YWluZXIuY3NzKHsgaGVpZ2h0OiAkY2hlY2ttYXJrQ29udGFpbmVyLmlubmVySGVpZ2h0KCkgfSk7XG5cbiAgICAgICQoJyNjaGFsbGVuZ2UtY2hlY2ttYXJrJykuYWRkQ2xhc3MoJ3pvb21PdXRVcCcpXG4gICAgICAvLyAucmVtb3ZlQ2xhc3MoJ3pvb21JbkRvd24nKVxuICAgICAgLmRlbGF5KDEwMDApLnF1ZXVlKGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICQodGhpcykucmVwbGFjZVdpdGgoJzxkaXYgaWQ9XCJjaGFsbGVuZ2Utc3Bpbm5lclwiICcgKyAnY2xhc3M9XCJhbmltYXRlZCB6b29tSW5VcCBpbm5lci1jaXJjbGVzLWxvYWRlclwiPicgKyAnc3VibWl0dGluZy4uLjwvZGl2PicpO1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIGRhdGEgPSB7XG4gICAgICAgIGlkOiBjb21tb24uY2hhbGxlbmdlSWQsXG4gICAgICAgIG5hbWU6IGNvbW1vbi5jaGFsbGVuZ2VOYW1lLFxuICAgICAgICBjb21wbGV0ZWRXaXRoOiBkaWRDb21wbGV0ZVdpdGgsXG4gICAgICAgIGNoYWxsZW5nZVR5cGU6IGNvbW1vbi5jaGFsbGVuZ2VUeXBlLFxuICAgICAgICBzb2x1dGlvbjogc29sdXRpb25cbiAgICAgIH07XG5cbiAgICAgICQucG9zdCgnL2NvbXBsZXRlZC1jaGFsbGVuZ2UvJywgZGF0YSwgZnVuY3Rpb24gKHJlcykge1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9jaGFsbGVuZ2VzL25leHQtY2hhbGxlbmdlP2lkPScgKyBjb21tb24uY2hhbGxlbmdlSWQ7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0Jztcblxud2luZG93LmNvbW1vbiA9IChmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgJCA9IF9yZWYuJDtcbiAgdmFyIF9yZWYkY29tbW9uID0gX3JlZi5jb21tb247XG4gIHZhciBjb21tb24gPSBfcmVmJGNvbW1vbiA9PT0gdW5kZWZpbmVkID8geyBpbml0OiBbXSB9IDogX3JlZiRjb21tb247XG5cbiAgdmFyIHN0ZXBDbGFzcyA9ICcuY2hhbGxlbmdlLXN0ZXAnO1xuICB2YXIgcHJldkJ0bkNsYXNzID0gJy5jaGFsbGVuZ2Utc3RlcC1idG4tcHJldic7XG4gIHZhciBuZXh0QnRuQ2xhc3MgPSAnLmNoYWxsZW5nZS1zdGVwLWJ0bi1uZXh0JztcbiAgdmFyIGFjdGlvbkJ0bkNsYXNzID0gJy5jaGFsbGVuZ2Utc3RlcC1idG4tYWN0aW9uJztcbiAgdmFyIGZpbmlzaEJ0bkNsYXNzID0gJy5jaGFsbGVuZ2Utc3RlcC1idG4tZmluaXNoJztcbiAgdmFyIHN1Ym1pdEJ0bklkID0gJyNjaGFsbGVuZ2Utc3RlcC1idG4tc3VibWl0JztcbiAgdmFyIHN1Ym1pdE1vZGFsSWQgPSAnI2NoYWxsZW5nZS1zdGVwLW1vZGFsJztcblxuICBmdW5jdGlvbiBnZXRQcmV2aW91c1N0ZXAoJGNoYWxsZW5nZVN0ZXBzKSB7XG4gICAgdmFyICRwcmV2U3RlcCA9IGZhbHNlO1xuICAgIHZhciBwcmV2U3RlcEluZGV4ID0gMDtcbiAgICAkY2hhbGxlbmdlU3RlcHMuZWFjaChmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICAgIHZhciAkc3RlcCA9ICQodGhpcyk7XG4gICAgICBpZiAoISRzdGVwLmhhc0NsYXNzKCdoaWRkZW4nKSkge1xuICAgICAgICBwcmV2U3RlcEluZGV4ID0gaW5kZXggLSAxO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgJHByZXZTdGVwID0gJGNoYWxsZW5nZVN0ZXBzW3ByZXZTdGVwSW5kZXhdO1xuXG4gICAgcmV0dXJuICRwcmV2U3RlcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldE5leHRTdGVwKCRjaGFsbGVuZ2VTdGVwcykge1xuICAgIHZhciBsZW5ndGggPSAkY2hhbGxlbmdlU3RlcHMubGVuZ3RoO1xuICAgIHZhciAkbmV4dFN0ZXAgPSBmYWxzZTtcbiAgICB2YXIgbmV4dFN0ZXBJbmRleCA9IDA7XG4gICAgJGNoYWxsZW5nZVN0ZXBzLmVhY2goZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICB2YXIgJHN0ZXAgPSAkKHRoaXMpO1xuICAgICAgaWYgKCEkc3RlcC5oYXNDbGFzcygnaGlkZGVuJykgJiYgaW5kZXggKyAxICE9PSBsZW5ndGgpIHtcbiAgICAgICAgbmV4dFN0ZXBJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICRuZXh0U3RlcCA9ICRjaGFsbGVuZ2VTdGVwc1tuZXh0U3RlcEluZGV4XTtcblxuICAgIHJldHVybiAkbmV4dFN0ZXA7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVQcmV2U3RlcENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHByZXZTdGVwID0gZ2V0UHJldmlvdXNTdGVwKCQoc3RlcENsYXNzKSk7XG4gICAgJCh0aGlzKS5wYXJlbnQoKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnc2xpZGVJbkxlZnQgc2xpZGVJblJpZ2h0JykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZhZGVPdXRSaWdodCBmYXN0LWFuaW1hdGlvbicpLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKHByZXYpIHtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgaWYgKHByZXZTdGVwKSB7XG4gICAgICAgICQocHJldlN0ZXApLnJlbW92ZUNsYXNzKCdoaWRkZW4nKS5yZW1vdmVDbGFzcygnZmFkZU91dExlZnQgZmFkZU91dFJpZ2h0JykuYWRkQ2xhc3MoJ2FuaW1hdGVkIHNsaWRlSW5MZWZ0IGZhc3QtYW5pbWF0aW9uJykuZGVsYXkoNTAwKS5xdWV1ZShmdW5jdGlvbiAocHJldikge1xuICAgICAgICAgIHByZXYoKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBwcmV2KCk7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVOZXh0U3RlcENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIG5leHRTdGVwID0gZ2V0TmV4dFN0ZXAoJChzdGVwQ2xhc3MpKTtcbiAgICAkKHRoaXMpLnBhcmVudCgpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdzbGlkZUluUmlnaHQgc2xpZGVJbkxlZnQnKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmFkZU91dExlZnQgZmFzdC1hbmltYXRpb24nKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIGlmIChuZXh0U3RlcCkge1xuICAgICAgICAkKG5leHRTdGVwKS5yZW1vdmVDbGFzcygnaGlkZGVuJykucmVtb3ZlQ2xhc3MoJ2ZhZGVPdXRSaWdodCBmYWRlT3V0TGVmdCcpLmFkZENsYXNzKCdhbmltYXRlZCBzbGlkZUluUmlnaHQgZmFzdC1hbmltYXRpb24nKS5kZWxheSg1MDApLnF1ZXVlKGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIG5leHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUFjdGlvbkNsaWNrKGUpIHtcbiAgICB2YXIgcHJvcHMgPSBjb21tb24uY2hhbGxlbmdlU2VlZFswXSB8fCB7IHN0ZXBJbmRleDogW10gfTtcblxuICAgIHZhciAkZWwgPSAkKHRoaXMpO1xuICAgIHZhciBpbmRleCA9ICskZWwuYXR0cignaWQnKTtcbiAgICB2YXIgcHJvcEluZGV4ID0gcHJvcHMuc3RlcEluZGV4LmluZGV4T2YoaW5kZXgpO1xuXG4gICAgaWYgKHByb3BJbmRleCA9PT0gLTEpIHtcbiAgICAgIHJldHVybiAkZWwucGFyZW50KCkuZmluZCgnLmRpc2FibGVkJykucmVtb3ZlQ2xhc3MoJ2Rpc2FibGVkJyk7XG4gICAgfVxuXG4gICAgLy8gYW4gQVBJIGFjdGlvblxuICAgIC8vIHByZXZlbnQgbGluayBmcm9tIG9wZW5pbmdcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdmFyIHByb3AgPSBwcm9wcy5wcm9wZXJ0aWVzW3Byb3BJbmRleF07XG4gICAgdmFyIGFwaSA9IHByb3BzLmFwaXNbcHJvcEluZGV4XTtcbiAgICBpZiAoY29tbW9uW3Byb3BdKSB7XG4gICAgICByZXR1cm4gJGVsLnBhcmVudCgpLmZpbmQoJy5kaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgIH1cbiAgICAkLnBvc3QoYXBpKS5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAvLyBhc3N1bWUgYSBib29sZWFuIGluZGljYXRlcyBwYXNzaW5nXG4gICAgICBpZiAodHlwZW9mIGRhdGEgPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gJGVsLnBhcmVudCgpLmZpbmQoJy5kaXNhYmxlZCcpLnJlbW92ZUNsYXNzKCdkaXNhYmxlZCcpO1xuICAgICAgfVxuICAgICAgLy8gYXNzdW1lIGFwaSByZXR1cm5zIHN0cmluZyB3aGVuIGZhaWxzXG4gICAgICAkZWwucGFyZW50KCkuZmluZCgnLmRpc2FibGVkJykucmVwbGFjZVdpdGgoJzxwPicgKyBkYXRhICsgJzwvcD4nKTtcbiAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdmYWlsZWQnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUZpbmlzaENsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgJChzdWJtaXRNb2RhbElkKS5tb2RhbCgnc2hvdycpO1xuICAgICQoc3VibWl0TW9kYWxJZCArICcubW9kYWwtaGVhZGVyJykuY2xpY2soKTtcbiAgICAkKHN1Ym1pdEJ0bklkKS5jbGljayhoYW5kbGVTdWJtaXRDbGljayk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXRDbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgJCgnI3N1Ym1pdC1jaGFsbGVuZ2UnKS5hdHRyKCdkaXNhYmxlZCcsICd0cnVlJykucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5JykuYWRkQ2xhc3MoJ2J0bi13YXJuaW5nIGRpc2FibGVkJyk7XG5cbiAgICB2YXIgJGNoZWNrbWFya0NvbnRhaW5lciA9ICQoJyNjaGVja21hcmstY29udGFpbmVyJyk7XG4gICAgJGNoZWNrbWFya0NvbnRhaW5lci5jc3MoeyBoZWlnaHQ6ICRjaGVja21hcmtDb250YWluZXIuaW5uZXJIZWlnaHQoKSB9KTtcblxuICAgICQoJyNjaGFsbGVuZ2UtY2hlY2ttYXJrJykuYWRkQ2xhc3MoJ3pvb21PdXRVcCcpLmRlbGF5KDEwMDApLnF1ZXVlKGZ1bmN0aW9uIChuZXh0KSB7XG4gICAgICAkKHRoaXMpLnJlcGxhY2VXaXRoKCc8ZGl2IGlkPVwiY2hhbGxlbmdlLXNwaW5uZXJcIiAnICsgJ2NsYXNzPVwiYW5pbWF0ZWQgem9vbUluVXAgaW5uZXItY2lyY2xlcy1sb2FkZXJcIj4nICsgJ3N1Ym1pdHRpbmcuLi48L2Rpdj4nKTtcbiAgICAgIG5leHQoKTtcbiAgICB9KTtcblxuICAgICQucG9zdCgnL2NvbXBsZXRlZC1jaGFsbGVuZ2UvJywge1xuICAgICAgaWQ6IGNvbW1vbi5jaGFsbGVuZ2VJZCxcbiAgICAgIG5hbWU6IGNvbW1vbi5jaGFsbGVuZ2VOYW1lLFxuICAgICAgY2hhbGxlbmdlVHlwZTogY29tbW9uLmNoYWxsZW5nZVR5cGVcbiAgICB9LCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICBpZiAocmVzKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbiA9ICcvY2hhbGxlbmdlcy9uZXh0LWNoYWxsZW5nZT9pZD0nICsgY29tbW9uLmNoYWxsZW5nZUlkO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29tbW9uLmluaXQucHVzaChmdW5jdGlvbiAoJCkge1xuICAgIGlmIChjb21tb24uY2hhbGxlbmdlVHlwZSAhPT0gJzcnKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAkKHByZXZCdG5DbGFzcykuY2xpY2soaGFuZGxlUHJldlN0ZXBDbGljayk7XG4gICAgJChuZXh0QnRuQ2xhc3MpLmNsaWNrKGhhbmRsZU5leHRTdGVwQ2xpY2spO1xuICAgICQoYWN0aW9uQnRuQ2xhc3MpLmNsaWNrKGhhbmRsZUFjdGlvbkNsaWNrKTtcbiAgICAkKGZpbmlzaEJ0bkNsYXNzKS5jbGljayhoYW5kbGVGaW5pc2hDbGljayk7XG4gIH0pO1xuXG4gIHJldHVybiBjb21tb247XG59KSh3aW5kb3cpOyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKG9iaiwga2V5cykgeyB2YXIgdGFyZ2V0ID0ge307IGZvciAodmFyIGkgaW4gb2JqKSB7IGlmIChrZXlzLmluZGV4T2YoaSkgPj0gMCkgY29udGludWU7IGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgaSkpIGNvbnRpbnVlOyB0YXJnZXRbaV0gPSBvYmpbaV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG4gIHZhciBjb21tb24gPSB3aW5kb3cuY29tbW9uO1xuICB2YXIgT2JzZXJ2YWJsZSA9IHdpbmRvdy5SeC5PYnNlcnZhYmxlO1xuICB2YXIgYWRkTG9vcFByb3RlY3QgPSBjb21tb24uYWRkTG9vcFByb3RlY3Q7XG4gIHZhciBjaGFsbGVuZ2VOYW1lID0gY29tbW9uLmNoYWxsZW5nZU5hbWU7XG4gIHZhciBjaGFsbGVuZ2VUeXBlID0gY29tbW9uLmNoYWxsZW5nZVR5cGU7XG4gIHZhciBjaGFsbGVuZ2VUeXBlcyA9IGNvbW1vbi5jaGFsbGVuZ2VUeXBlcztcblxuICBjb21tb24uaW5pdC5mb3JFYWNoKGZ1bmN0aW9uIChpbml0KSB7XG4gICAgaW5pdCgkKTtcbiAgfSk7XG5cbiAgLy8gb25seSBydW4gaWYgZWRpdG9yIHByZXNlbnRcbiAgaWYgKGNvbW1vbi5lZGl0b3IuZ2V0VmFsdWUpIHtcbiAgICB2YXIgY29kZSQgPSBjb21tb24uZWRpdG9yS2V5VXAkLmRlYm91bmNlKDc1MCkubWFwKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjb21tb24uZWRpdG9yLmdldFZhbHVlKCk7XG4gICAgfSkuZGlzdGluY3RVbnRpbENoYW5nZWQoKS5zaGFyZVJlcGxheSgpO1xuXG4gICAgLy8gdXBkYXRlIHN0b3JhZ2VcbiAgICBjb2RlJC5zdWJzY3JpYmUoZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgIGNvbW1vbi5jb2RlU3RvcmFnZS51cGRhdGVTdG9yYWdlKGNvbW1vbi5jaGFsbGVuZ2VOYW1lLCBjb2RlKTtcbiAgICAgIGNvbW1vbi5jb2RlVXJpLnF1ZXJpZnkoY29kZSk7XG4gICAgfSwgZnVuY3Rpb24gKGVycikge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9KTtcblxuICAgIGNvZGUkXG4gICAgLy8gb25seSBydW4gZm9yIEhUTUxcbiAgICAuZmlsdGVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBjb21tb24uY2hhbGxlbmdlVHlwZSA9PT0gY2hhbGxlbmdlVHlwZXMuSFRNTDtcbiAgICB9KS5mbGF0TWFwKGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICByZXR1cm4gY29tbW9uLmRldGVjdFVuc2FmZUNvZGUkKGNvZGUpLm1hcChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb21iaW5lZENvZGUgPSBjb21tb24uaGVhZCArIGNvZGUgKyBjb21tb24udGFpbDtcblxuICAgICAgICByZXR1cm4gYWRkTG9vcFByb3RlY3QoY29tYmluZWRDb2RlKTtcbiAgICAgIH0pLmZsYXRNYXAoZnVuY3Rpb24gKGNvZGUpIHtcbiAgICAgICAgcmV0dXJuIGNvbW1vbi51cGRhdGVQcmV2aWV3JChjb2RlKTtcbiAgICAgIH0pLmZsYXRNYXAoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gY29tbW9uLmNoZWNrUHJldmlldyQoeyBjb2RlOiBjb2RlIH0pO1xuICAgICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycikge1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5qdXN0KHsgZXJyOiBlcnIgfSk7XG4gICAgICB9KTtcbiAgICB9KS5zdWJzY3JpYmUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgIHZhciBlcnIgPSBfcmVmLmVycjtcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIHJldHVybiBjb21tb24udXBkYXRlUHJldmlldyQoJ1xcbiAgICAgICAgICAgICAgPGgxPicgKyBlcnIgKyAnPC9oMT5cXG4gICAgICAgICAgICAnKS5zdWJzY3JpYmUoZnVuY3Rpb24gKCkge30pO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfSk7XG4gIH1cblxuICBjb21tb24ucmVzZXRCdG4kLmRvT25OZXh0KGZ1bmN0aW9uICgpIHtcbiAgICBjb21tb24uZWRpdG9yLnNldFZhbHVlKGNvbW1vbi5yZXBsYWNlU2FmZVRhZ3MoY29tbW9uLnNlZWQpKTtcbiAgfSkuZmxhdE1hcChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbW1vbi5leGVjdXRlQ2hhbGxlbmdlJCgpWydjYXRjaCddKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIHJldHVybiBPYnNlcnZhYmxlLmp1c3QoeyBlcnI6IGVyciB9KTtcbiAgICB9KTtcbiAgfSkuc3Vic2NyaWJlKGZ1bmN0aW9uIChfcmVmMikge1xuICAgIHZhciBlcnIgPSBfcmVmMi5lcnI7XG4gICAgdmFyIG91dHB1dCA9IF9yZWYyLm91dHB1dDtcbiAgICB2YXIgb3JpZ2luYWxDb2RlID0gX3JlZjIub3JpZ2luYWxDb2RlO1xuXG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgcmV0dXJuIGNvbW1vbi51cGRhdGVPdXRwdXREaXNwbGF5KCcnICsgZXJyKTtcbiAgICB9XG4gICAgY29tbW9uLmNvZGVTdG9yYWdlLnVwZGF0ZVN0b3JhZ2UoY2hhbGxlbmdlTmFtZSwgb3JpZ2luYWxDb2RlKTtcbiAgICBjb21tb24uY29kZVVyaS5xdWVyaWZ5KG9yaWdpbmFsQ29kZSk7XG4gICAgY29tbW9uLnVwZGF0ZU91dHB1dERpc3BsYXkoJycgKyBvdXRwdXQpO1xuICB9LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgICBjb21tb24udXBkYXRlT3V0cHV0RGlzcGxheSgnJyArIGVycik7XG4gIH0pO1xuXG4gIE9ic2VydmFibGUubWVyZ2UoY29tbW9uLmVkaXRvckV4ZWN1dGUkLCBjb21tb24uc3VibWl0QnRuJCkuZmxhdE1hcChmdW5jdGlvbiAoKSB7XG4gICAgY29tbW9uLmFwcGVuZFRvT3V0cHV0RGlzcGxheSgnXFxuLy8gdGVzdGluZyBjaGFsbGVuZ2UuLi4nKTtcbiAgICByZXR1cm4gY29tbW9uLmV4ZWN1dGVDaGFsbGVuZ2UkKCkubWFwKGZ1bmN0aW9uIChfcmVmMykge1xuICAgICAgdmFyIHRlc3RzID0gX3JlZjMudGVzdHM7XG5cbiAgICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYzLCBbJ3Rlc3RzJ10pO1xuXG4gICAgICB2YXIgc29sdmVkID0gdGVzdHMuZXZlcnkoZnVuY3Rpb24gKHRlc3QpIHtcbiAgICAgICAgcmV0dXJuICF0ZXN0LmVycjtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCByZXN0LCB7IHRlc3RzOiB0ZXN0cywgc29sdmVkOiBzb2x2ZWQgfSk7XG4gICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycikge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuanVzdCh7IGVycjogZXJyIH0pO1xuICAgIH0pO1xuICB9KS5zdWJzY3JpYmUoZnVuY3Rpb24gKF9yZWY0KSB7XG4gICAgdmFyIGVyciA9IF9yZWY0LmVycjtcbiAgICB2YXIgc29sdmVkID0gX3JlZjQuc29sdmVkO1xuICAgIHZhciBvdXRwdXQgPSBfcmVmNC5vdXRwdXQ7XG4gICAgdmFyIHRlc3RzID0gX3JlZjQudGVzdHM7XG5cbiAgICBpZiAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICBpZiAoY29tbW9uLmNoYWxsZW5nZVR5cGUgPT09IGNvbW1vbi5jaGFsbGVuZ2VUeXBlcy5IVE1MKSB7XG4gICAgICAgIHJldHVybiBjb21tb24udXBkYXRlUHJldmlldyQoJ1xcbiAgICAgICAgICAgICAgPGgxPicgKyBlcnIgKyAnPC9oMT5cXG4gICAgICAgICAgICAnKS5maXJzdCgpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29tbW9uLnVwZGF0ZU91dHB1dERpc3BsYXkoJycgKyBlcnIpO1xuICAgIH1cbiAgICBjb21tb24udXBkYXRlT3V0cHV0RGlzcGxheSgnJyArIG91dHB1dCk7XG4gICAgY29tbW9uLmRpc3BsYXlUZXN0UmVzdWx0cyh0ZXN0cyk7XG4gICAgaWYgKHNvbHZlZCkge1xuICAgICAgY29tbW9uLnNob3dDb21wbGV0aW9uKCk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAoX3JlZjUpIHtcbiAgICB2YXIgZXJyID0gX3JlZjUuZXJyO1xuXG4gICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIGNvbW1vbi51cGRhdGVPdXRwdXREaXNwbGF5KCcnICsgZXJyKTtcbiAgfSk7XG5cbiAgLy8gaW5pdGlhbCBjaGFsbGVuZ2UgcnVuIHRvIHBvcHVsYXRlIHRlc3RzXG4gIGlmIChjaGFsbGVuZ2VUeXBlID09PSBjaGFsbGVuZ2VUeXBlcy5IVE1MKSB7XG4gICAgdmFyICRwcmV2aWV3ID0gJCgnI3ByZXZpZXcnKTtcbiAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tQ2FsbGJhY2soJHByZXZpZXcucmVhZHksICRwcmV2aWV3KSgpLmRlbGF5KDUwMCkuZmxhdE1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY29tbW9uLmV4ZWN1dGVDaGFsbGVuZ2UkKCk7XG4gICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycikge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuanVzdCh7IGVycjogZXJyIH0pO1xuICAgIH0pLnN1YnNjcmliZShmdW5jdGlvbiAoX3JlZjYpIHtcbiAgICAgIHZhciBlcnIgPSBfcmVmNi5lcnI7XG4gICAgICB2YXIgdGVzdHMgPSBfcmVmNi50ZXN0cztcblxuICAgICAgaWYgKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgIGlmIChjb21tb24uY2hhbGxlbmdlVHlwZSA9PT0gY29tbW9uLmNoYWxsZW5nZVR5cGVzLkhUTUwpIHtcbiAgICAgICAgICByZXR1cm4gY29tbW9uLnVwZGF0ZVByZXZpZXckKCdcXG4gICAgICAgICAgICAgICAgPGgxPicgKyBlcnIgKyAnPC9oMT5cXG4gICAgICAgICAgICAgICcpLnN1YnNjcmliZShmdW5jdGlvbiAoKSB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbW1vbi51cGRhdGVPdXRwdXREaXNwbGF5KCcnICsgZXJyKTtcbiAgICAgIH1cbiAgICAgIGNvbW1vbi5kaXNwbGF5VGVzdFJlc3VsdHModGVzdHMpO1xuICAgIH0sIGZ1bmN0aW9uIChfcmVmNykge1xuICAgICAgdmFyIGVyciA9IF9yZWY3LmVycjtcblxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNoYWxsZW5nZVR5cGUgPT09IGNoYWxsZW5nZVR5cGVzLkJPTkZJUkUgfHwgY2hhbGxlbmdlVHlwZSA9PT0gY2hhbGxlbmdlVHlwZXMuSlMpIHtcbiAgICBPYnNlcnZhYmxlLmp1c3Qoe30pLmRlbGF5KDUwMCkuZmxhdE1hcChmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gY29tbW9uLmV4ZWN1dGVDaGFsbGVuZ2UkKCk7XG4gICAgfSlbJ2NhdGNoJ10oZnVuY3Rpb24gKGVycikge1xuICAgICAgcmV0dXJuIE9ic2VydmFibGUuanVzdCh7IGVycjogZXJyIH0pO1xuICAgIH0pLnN1YnNjcmliZShmdW5jdGlvbiAoX3JlZjgpIHtcbiAgICAgIHZhciBlcnIgPSBfcmVmOC5lcnI7XG4gICAgICB2YXIgb3JpZ2luYWxDb2RlID0gX3JlZjgub3JpZ2luYWxDb2RlO1xuICAgICAgdmFyIHRlc3RzID0gX3JlZjgudGVzdHM7XG5cbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICByZXR1cm4gY29tbW9uLnVwZGF0ZU91dHB1dERpc3BsYXkoJycgKyBlcnIpO1xuICAgICAgfVxuICAgICAgY29tbW9uLmNvZGVTdG9yYWdlLnVwZGF0ZVN0b3JhZ2UoY2hhbGxlbmdlTmFtZSwgb3JpZ2luYWxDb2RlKTtcbiAgICAgIGNvbW1vbi5kaXNwbGF5VGVzdFJlc3VsdHModGVzdHMpO1xuICAgIH0sIGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIGNvbW1vbi51cGRhdGVPdXRwdXREaXNwbGF5KCcnICsgZXJyKTtcbiAgICB9KTtcbiAgfVxufSk7Il0sInNvdXJjZVJvb3QiOiIvY29tbW9uRnJhbWV3b3JrIn0=
