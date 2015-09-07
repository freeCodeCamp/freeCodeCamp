/* globals jailed, CodeMirror, challenge_Id, challenge_Name, challengeType */
// codeStorage
var codeStorageFactory = (function($, localStorage) {

  var CodeStorageProps = {
    version: 0.01,
    keyVersion: 'saveVersion',
    keyValue: null,
    updateWait: 2000,
    updateTimeoutId: null
  };

  var CodeStorage = {
    hasSaved: function() {
      return this.updateTimeoutId === null;
    },

    onSave: function(func) {
      this.eventArray.push(func);
    },

    setSaveKey: function(key) {
      this.keyValue = key + 'Val';
    },

    getStoredValue: function() {
      return '' + localStorage.getItem(this.keyValue);
    },

    setEditor: function(editor) {
      this.editor = editor;
    },

    isAlive: function() {
      var val = this.getStoredValue();
      return val !== 'null' &&
        val !== 'undefined' &&
        (val && val.length > 0);
    },

    updateStorage: function() {
      if (typeof localStorage !== 'undefined') {
        var value = this.editor.getValue();
        localStorage.setItem(this.keyValue, value);
      } else {
        console.log('no web storage');
      }
      this.updateTimeoutId = null;
    }
  };

  function codeStorageFactory(editor, challengeName) {
    var codeStorage = Object.create(CodeStorage);
    $.extend(codeStorage, CodeStorageProps);
    codeStorage.setEditor(editor);
    codeStorage.setSaveKey(challengeName);
    return codeStorage;
  }

  var savedVersion = localStorage.getItem(CodeStorageProps.keyVersion);
  if (savedVersion === null) {
    localStorage.setItem(
      CodeStorageProps.keyVersion,
      CodeStorageProps.version
    );
  }

  return codeStorageFactory;
}($, localStorage));

var sandBox = (function() {

  var plugin = null;

  var sandBox = {
  };

  var printCallback;

  // sends the input to the plugin for evaluation
  function submit(code, callback) {
    printCallback = callback;

    // postpone the evaluation until the plugin is initialized
    plugin.whenConnected(function() {
      if (requests === 0) {
        startLoading();
      }

      requests++;
      plugin.remote.run(code);
    });
  }

  // puts the message on the terminal
  var print = function(cls, msg) {
    printCallback(cls, msg);
  };


  // will restart the plugin if it does not respond
  var disconnectTimeout = null;
  var startLoading = function() {
    disconnectTimeout = setTimeout(disconnect, 3000);
  };

  var endLoading = function() {
    clearTimeout(disconnectTimeout);
  };

  var disconnect = function() {
    plugin.disconnect();
  };


  // interface provided to the plugin
  var api = {
    output: function(data) {
      endLoading();
      // print('input', data.input);

      if (data.error) {
        print('Error', data);
        reset();
      } else {
        print(null, data);
        reset();
      }
    }
  };


  // obtaining absolute path of this script
  var scripts = document.getElementsByTagName('script');
  var path = scripts[scripts.length - 1].src
    .split('?')[0]
    .split('/')
    .slice(0, -1)
    .join('/') + '/';

  var requests;

  // (re)initializes the plugin
  var reset = function() {
    requests = 0;
    plugin = new jailed.Plugin(path + 'plugin.js', api);
    plugin.whenDisconnected( function() {
      // give some time to handle the last responce
      setTimeout( function() {
        endLoading();
        console.log('resetting on fatal plugin error');

        if (challengeType === 0) {
          codeOutput.setValue(
            'Sorry, your code is either too slow, has a fatal error, ' +
            'or contains an infinite loop.'
          );
        }
        reset();
      }, 10);
    });
  };
  reset();
  sandBox.submit = submit;
  return sandBox;
}());

function replaceSafeTags(value) {
  return value
    .replace(/fccss/gi, '<script>')
    .replace(/fcces/gi, '</script>');
}

var BDDregex = new RegExp(
  '(expect(\\s+)?\\(.*\\;)|' +
  '(assert(\\s+)?\\(.*\\;)|' +
  '(assert\\.\\w.*\\;)|' +
  '(.*\\.should\\..*\\;)/'
);

var isInitRun = false;
var initPreview = true;
var editor;

editor = CodeMirror.fromTextArea(document.getElementById('codeEditor'), {
  lineNumbers: true,
  mode: 'text',
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ['CodeMirror-lint-markers']
});

var codeStorage = codeStorageFactory(editor, challenge_Name);
var myCodeMirror = editor;

editor.on('keyup', function() {
  clearTimeout(codeStorage.updateTimeoutId);
  codeStorage.updateTimeoutId = setTimeout(
    codeStorage.updateStorage.bind(codeStorage),
    codeStorage.updateWait
  );
});

var editorValue;
var challengeSeed = challengeSeed || null;
var tests = tests || [];
var allSeeds = '';

(function() {
    challengeSeed.forEach(function(elem) {
        allSeeds += elem + '\n';
    });
})();

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
    bonfireExecute(true);
    return false;
  }
});

editor.setSize('100%', 'auto');

var libraryIncludes = "<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>" +
    "<script src='/js/lib/chai/chai.js'></script>" +
    "<script src='/js/lib/chai/chai-jquery.js'></script>" +
    "<script src='//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js'></script>" +
    "<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'/>" +
    "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'/>" +
    "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'/>" +
    '<style>body { padding: 0px 3px 0px 3px; }</style>' +
    '<script>var expect = chai.expect; var should = chai.should(); var assert = chai.assert;</script>';

var editorValueForIFrame;
var iFrameScript = "<script src='/js/iFrameScripts.js'></script>";
var delay;

function workerError(error) {
  var display = $('.runTimeError');
  var housing = $('#testSuite');
  if (display.html() !== error) {
    display.remove();
    housing.prepend(
      '<div class="runTimeError" style="font-size: 18px;"><code>' +
      error.replace(/j\$/gi, '$').replace(/jdocument/gi, 'document').replace(/jjQuery/gi, 'jQuery') +
      '</code></div>'
    );
    display.hide().fadeIn(function() {
      setTimeout(function() {
        display.fadeOut(function() {
          display.remove();
        });
      }, 1000);
    });
  }
}

function scopejQuery(str) {
  return str
    .replace(/\$/gi, 'j$')
    .replace(/document/gi, 'jdocument')
    .replace(/jQuery/gi, 'jjQuery');
}

function safeHTMLRun(test) {
  if (challengeType === '0') {
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    if (editor.getValue().match(/\<script\>/gi) !== null) {
      var s = editor
        .getValue()
        .split(/\<\s?script\s?\>/gi)[1]
        .split(/\<\s?\/\s?script\s?\>/gi)[0];

        // add feuxQuery
      s = "var document = \"\"; var $ = function() {return(new function() {this.add=function() {return(this);};this.addBack=function() {return(this);};this.addClass=function() {return(this);};this.after=function() {return(this);};this.ajaxComplete=function() {return(this);};this.ajaxError=function() {return(this);};this.ajaxSend=function() {return(this);};this.ajaxStart=function() {return(this);};this.ajaxStop=function() {return(this);};this.ajaxSuccess=function() {return(this);};this.andSelf=function() {return(this);};this.animate=function() {return(this);};this.append=function() {return(this);};this.appendTo=function() {return(this);};this.attr=function() {return(this);};this.before=function() {return(this);};this.bind=function() {return(this);};this.blur=function() {return(this);};this.callbacksadd=function() {return(this);};this.callbacksdisable=function() {return(this);};this.callbacksdisabled=function() {return(this);};this.callbacksempty=function() {return(this);};this.callbacksfire=function() {return(this);};this.callbacksfired=function() {return(this);};this.callbacksfireWith=function() {return(this);};this.callbackshas=function() {return(this);};this.callbackslock=function() {return(this);};this.callbackslocked=function() {return(this);};this.callbacksremove=function() {return(this);};this.change=function() {return(this);};this.children=function() {return(this);};this.clearQueue=function() {return(this);};this.click=function() {return(this);};this.clone=function() {return(this);};this.closest=function() {return(this);};this.contents=function() {return(this);};this.context=function() {return(this);};this.css=function() {return(this);};this.data=function() {return(this);};this.dblclick=function() {return(this);};this.delay=function() {return(this);};this.delegate=function() {return(this);};this.dequeue=function() {return(this);};this.detach=function() {return(this);};this.die=function() {return(this);};this.each=function() {return(this);};this.empty=function() {return(this);};this.end=function() {return(this);};this.eq=function() {return(this);};this.error=function() {return(this);};this.fadeIn=function() {return(this);};this.fadeOut=function() {return(this);};this.fadeTo=function() {return(this);};this.fadeToggle=function() {return(this);};this.filter=function() {return(this);};this.find=function() {return(this);};this.finish=function() {return(this);};this.first=function() {return(this);};this.focus=function() {return(this);};this.focusin=function() {return(this);};this.focusout=function() {return(this);};this.get=function() {return(this);};this.has=function() {return(this);};this.hasClass=function() {return(this);};this.height=function() {return(this);};this.hide=function() {return(this);};this.hover=function() {return(this);};this.html=function() {return(this);};this.index=function() {return(this);};this.innerHeight=function() {return(this);};this.innerWidth=function() {return(this);};this.insertAfter=function() {return(this);};this.insertBefore=function() {return(this);};this.is=function() {return(this);};this.jQuery=function() {return(this);};this.jquery=function() {return(this);};this.keydown=function() {return(this);};this.keypress=function() {return(this);};this.keyup=function() {return(this);};this.last=function() {return(this);};this.length=function() {return(this);};this.live=function() {return(this);};this.load=function() {return(this);};this.load=function() {return(this);};this.map=function() {return(this);};this.mousedown=function() {return(this);};this.mouseenter=function() {return(this);};this.mouseleave=function() {return(this);};this.mousemove=function() {return(this);};this.mouseout=function() {return(this);};this.mouseover=function() {return(this);};this.mouseup=function() {return(this);};this.next=function() {return(this);};this.nextAll=function() {return(this);};this.nextUntil=function() {return(this);};this.not=function() {return(this);};this.off=function() {return(this);};this.offset=function() {return(this);};this.offsetParent=function() {return(this);};this.on=function() {return(this);};this.one=function() {return(this);};this.outerHeight=function() {return(this);};this.outerWidth=function() {return(this);};this.parent=function() {return(this);};this.parents=function() {return(this);};this.parentsUntil=function() {return(this);};this.position=function() {return(this);};this.prepend=function() {return(this);};this.prependTo=function() {return(this);};this.prev=function() {return(this);};this.prevAll=function() {return(this);};this.prevUntil=function() {return(this);};this.promise=function() {return(this);};this.prop=function() {return(this);};this.pushStack=function() {return(this);};this.queue=function() {return(this);};this.ready=function() {return(this);};this.remove=function() {return(this);};this.removeAttr=function() {return(this);};this.removeClass=function() {return(this);};this.removeData=function() {return(this);};this.removeProp=function() {return(this);};this.replaceAll=function() {return(this);};this.replaceWith=function() {return(this);};this.resize=function() {return(this);};this.scroll=function() {return(this);};this.scrollLeft=function() {return(this);};this.scrollTop=function() {return(this);};this.select=function() {return(this);};this.selector=function() {return(this);};this.serialize=function() {return(this);};this.serializeArray=function() {return(this);};this.show=function() {return(this);};this.siblings=function() {return(this);};this.size=function() {return(this);};this.slice=function() {return(this);};this.slideDown=function() {return(this);};this.slideToggle=function() {return(this);};this.slideUp=function() {return(this);};this.stop=function() {return(this);};this.submit=function() {return(this);};this.text=function() {return(this);};this.toArray=function() {return(this);};this.toggle=function() {return(this);};this.toggle=function() {return(this);};this.toggleClass=function() {return(this);};this.trigger=function() {return(this);};this.triggerHandler=function() {return(this);};this.unbind=function() {return(this);};this.undelegate=function() {return(this);};this.unload=function() {return(this);};this.unwrap=function() {return(this);};this.val=function() {return(this);};this.width=function() {return(this);};this.wrap=function() {return(this);};this.wrapAll=function() {return(this);};this.wrapInner=function() {return(this);}});};$.ajax=function() {return($);};$.ajaxPrefilter=function() {return($);};$.ajaxSetup=function() {return($);};$.ajaxTransport=function() {return($);};$.boxModel=function() {return($);};$.browser=function() {return($);};$.Callbacks=function() {return($);};$.contains=function() {return($);};$.cssHooks=function() {return($);};$.cssNumber=function() {return($);};$.data=function() {return($);};$.Deferred=function() {return($);};$.dequeue=function() {return($);};$.each=function() {return($);};$.error=function() {return($);};$.extend=function() {return($);};$.fnextend=function() {return($);};$.fxinterval=function() {return($);};$.fxoff=function() {return($);};$.get=function() {return($);};$.getJSON=function() {return($);};$.getScript=function() {return($);};$.globalEval=function() {return($);};$.grep=function() {return($);};$.hasData=function() {return($);};$.holdReady=function() {return($);};$.inArray=function() {return($);};$.isArray=function() {return($);};$.isEmptyObject=function() {return($);};$.isFunction=function() {return($);};$.isNumeric=function() {return($);};$.isPlainObject=function() {return($);};$.isWindow=function() {return($);};$.isXMLDoc=function() {return($);};$.makeArray=function() {return($);};$.map=function() {return($);};$.merge=function() {return($);};$.noConflict=function() {return($);};$.noop=function() {return($);};$.now=function() {return($);};$.param=function() {return($);};$.parseHTML=function() {return($);};$.parseJSON=function() {return($);};$.parseXML=function() {return($);};$.post=function() {return($);};$.proxy=function() {return($);};$.queue=function() {return($);};$.removeData=function() {return($);};$.sub=function() {return($);};$.support=function() {return($);};$.trim=function() {return($);};$.type=function() {return($);};$.unique=function() {return($);};$.when=function() {return($);};$.always=function() {return($);};$.done=function() {return($);};$.fail=function() {return($);};$.isRejected=function() {return($);};$.isResolved=function() {return($);};$.notify=function() {return($);};$.notifyWith=function() {return($);};$.pipe=function() {return($);};$.progress=function() {return($);};$.promise=function() {return($);};$.reject=function() {return($);};$.rejectWith=function() {return($);};$.resolve=function() {return($);};$.resolveWith=function() {return($);};$.state=function() {return($);};$.then=function() {return($);};$.currentTarget=function() {return($);};$.data=function() {return($);};$.delegateTarget=function() {return($);};$.isDefaultPrevented=function() {return($);};$.isImmediatePropagationStopped=function() {return($);};$.isPropagationStopped=function() {return($);};$.metaKey=function() {return($);};$.namespace=function() {return($);};$.pageX=function() {return($);};$.pageY=function() {return($);};$.preventDefault=function() {return($);};$.relatedTarget=function() {return($);};$.result=function() {return($);};$.stopImmediatePropagation=function() {return($);};$.stopPropagation=function() {return($);};$.target=function() {return($);};$.timeStamp=function() {return($);};$.type=function() {return($);};$.which=function() {return($);};" + s;

      sandBox.submit(scopejQuery(s), function(cls, message) {
        if (cls) {
          console.log(message.error);
          workerError(message.error);
        } else if (test) {
          preview.open();
          preview.write(libraryIncludes + editor.getValue() + iFrameScript);
          codeStorage.updateStorage();
          preview.close();
        } else {
          preview.open();
          preview.write(libraryIncludes + editor.getValue());
          codeStorage.updateStorage();
          preview.close();
        }
      });
    } else if (test) {
      preview.open();
      preview.write(libraryIncludes + editor.getValue() + iFrameScript);
      codeStorage.updateStorage();
      preview.close();
    } else {
      preview.open();
      preview.write(libraryIncludes + editor.getValue());
      codeStorage.updateStorage();
      preview.close();
    }
  }
}

function updatePreview() {
  editorValueForIFrame = editor.getValue();
  var failedCommentTest = false;
  if (
    editorValueForIFrame.match(/\<\!\-\-/gi) &&
    editorValueForIFrame.match(/\-\-\>/gi) == null
  ) {
    failedCommentTest = true;
  } else if (
    editorValueForIFrame.match(/\<\!\-\-/gi) &&
    editorValueForIFrame.match(/\<\!\-\-/gi).length > editorValueForIFrame.match(/\-\-\>/gi).length
  ) {
    failedCommentTest = true;
  }

  if (failedCommentTest) {
    editor.setValue(editor.getValue() + '-->');
    editorValueForIFrame = editorValueForIFrame + '-->';
  }

  if (!editor.getValue().match(/\$\s*?\(\s*?\$\s*?\)/gi)) {
    safeHTMLRun(false);
  } else {
    workerError('Unsafe $($)');
  }
}

if (typeof prodOrDev !== 'undefined') {

  var nodeEnv = prodOrDev === 'production' ?
    'http://www.freecodecamp.com' :
    'http://localhost:3001';

  if (challengeType === '0') {
    setTimeout(updatePreview, 300);
  }
}

// Initialize CodeMirror editor with a nice html5 canvas demo.
editor.on('keyup', function() {
  clearTimeout(delay);
  delay = setTimeout(updatePreview, 300);
});

/**
 * "post" methods
 */

var testResults = [];
var postSuccess = function(data) {
  var testDoc = document.createElement('div');
  $(testDoc).html(
    "<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable'>" +
    JSON.parse(data) +
    '</div>'
  );

  $('#testSuite').append(testDoc);
  testSuccess();
};

var postError = function(data) {
  var testDoc = document.createElement('div');

  $(testDoc).html(
    "<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-vertical-center test-output wrappable'>" +
    JSON.parse(data) +
    '</div>'
  );

  $('#testSuite').append(testDoc);
};

var goodTests = 0;
var testSuccess = function() {
  goodTests++;
  if (goodTests === tests.length) {
    showCompletion();
  }
};

function showCompletion() {
  if (isInitRun) {
    isInitRun = false;
    return;
  }
  var time = Math.floor(Date.now()) - started;
  ga(
    'send',
    'event',
    'Challenge',
    'solved',
    challenge_Name + ', Time: ' + time + ', Attempts: ' + attempts
  );
  var bonfireSolution = myCodeMirror.getValue();
  var didCompleteWith = $('#completed-with').val() || null;
  $('#complete-courseware-dialog').modal('show');
  $('#complete-courseware-dialog .modal-header').click();
  $('#submit-challenge').click(function(e) {
    e.preventDefault();

    $('#submit-challenge')
      .attr('disabled', 'true')
      .removeClass('btn-primary')
      .addClass('btn-warning disabled');

    var $checkmarkContainer = $('#checkmark-container');
    $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

    $('#challenge-checkmark')
      .addClass('zoomOutUp')
      // .removeClass('zoomInDown')
      .delay(1000)
      .queue(function(next) {
        $(this).replaceWith(
          '<div id="challenge-spinner" class="animated zoomInUp inner-circles-loader">submitting...</div>'
        );
        next();
      });

    $.post(
      '/completed-bonfire/', {
        challengeInfo: {
          challengeId: challenge_Id,
          challengeName: challenge_Name,
          completedWith: didCompleteWith,
          challengeType: challengeType,
          solution: bonfireSolution
        }
      },
      function(res) {
        if (res) {
          window.location = '/challenges/next-challenge';
        }
      }
    );
  });
}

var resetEditor = function resetEditor() {
  editor.setValue(replaceSafeTags(allSeeds));
  $('#testSuite').empty();
  bonfireExecute(true);
  codeStorage.updateStorage();
};

var attempts = 0;
if (attempts) {
  attempts = 0;
}

if (challengeType !== '0') {
  var codeOutput = CodeMirror.fromTextArea(
    document.getElementById('codeOutput'),
    {
      lineNumbers: false,
      mode: 'text',
      theme: 'monokai',
      readOnly: 'nocursor',
      lineWrapping: true
    }
  );

  codeOutput.setValue('/**\n' +
  ' * Your output will go here.\n' + ' * Console.log() -type statements\n' +
  ' * will appear in your browser\'s\n' + ' * DevTools JavaScript console.\n' +
  ' */');
  codeOutput.setSize('100%', '100%');
}

var info = editor.getScrollInfo();

var after = editor.charCoords({
  line: editor.getCursor().line + 1,
  ch: 0
}, 'local').top;

if (info.top + info.clientHeight < after) {
  editor.scrollTo(null, after - info.clientHeight + 3);
}

var userTests;
var testSalt = Math.random();


var scrapeTests = function(userJavaScript) {

  // insert tests from mongo
  for (var i = 0; i < tests.length; i++) {
    userJavaScript += '\n' + tests[i];
  }

  var counter = 0;
  var match = BDDregex.exec(userJavaScript);

  while (match) {
    var replacement = '//' + counter + testSalt;
    userJavaScript = userJavaScript.substring(0, match.index) +
      replacement +
      userJavaScript.substring(match.index + match[0].length);

    if (!userTests) {
      userTests = [];
    }

    userTests.push({
      'text': match[0],
      'line': counter,
      'err': null
    });

    counter++;
    match = BDDregex.exec(userJavaScript);
  }

  return userJavaScript;
};

function removeComments(userJavaScript) {
    var regex = new RegExp(/(\/\*[^(\*\/)]*\*\/)|\/\/[^\n]*/g);
    return userJavaScript.replace(regex, '');
}

function removeLogs(userJavaScript) {
    return userJavaScript.replace(/(console\.[\w]+\s*\(.*\;)/g, '');
}

var pushed = false;
var createTestDisplay = function() {
  if (pushed) {
    userTests.pop();
  }
  for (var i = 0; i < userTests.length; i++) {
    var test = userTests[i];
    var testDoc = document.createElement('div');

    if (test.err) {
      console.log('Should be displaying bad tests');

      $(testDoc).html(
        "<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-output wrappable test-vertical-center grayed-out-test-output'>" +
        test.text + "</div><div class='col-xs-10 test-output wrappable'>" +
        test.err + "</div></div><div class='ten-pixel-break'/>"
      )
        .appendTo($('#testSuite'));

    } else {

      $(testDoc).html(
        "<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable grayed-out-test-output'>" +
        test.text +
        "</div></div><div class='ten-pixel-break'/>"
      )
        .appendTo($('#testSuite'));
    }
  }
};

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();


var reassembleTest = function(test, data) {
  var lineNum = test.line;
  var regexp = new RegExp('\/\/' + lineNum + testSalt);
  return data.input.replace(regexp, test.text);
};

var runTests = function(err, data) {
  // userTests = userTests ? null : [];
  var allTestsPassed = true;
  pushed = false;
  $('#testSuite').children().remove();
  if (err && userTests.length > 0) {
    userTests = [{
      text: 'Program Execution Failure',
      err: 'No user tests were run.'
    }];
    createTestDisplay();

  // Add blocks to test exploits here!
  } else if (editorValue.match(/if\s\(null\)\sconsole\.log\(1\);/gi)) {
    allTestsPassed = false;
    userTests = [{
      text: 'Program Execution Failure',
      err: 'Invalid if (null) console.log(1); detected'
    }];
    createTestDisplay();
  } else if (userTests) {
    userTests.push(false);
    pushed = true;
    userTests.forEach(function(
      chaiTestFromJSON,
      indexOfTestArray,
      __testArray
    ) {
      try {
        if (chaiTestFromJSON) {
          var output = eval(reassembleTest(chaiTestFromJSON, data));
        }
      } catch (error) {
        allTestsPassed = false;
        __testArray[indexOfTestArray].err = error.message;
      } finally {
        if (!chaiTestFromJSON) {
          createTestDisplay();
        }
      }
    });

    if (allTestsPassed) {
      allTestsPassed = false;
      showCompletion();
    }
    else{
      isInitRun = false;
    }
  }
};

function bonfireExecute(shouldTest) {
  initPreview = false;
  goodTests = 0;
  attempts++;
  ga('send', 'event', 'Challenge', 'ran-code', challenge_Name);
  userTests = null;
  $('#testSuite').empty();

  if (
    challengeType !== '0' &&
    !editor.getValue().match(/\$\s*?\(\s*?\$\s*?\)/gi)
  ) {
    var userJavaScript = myCodeMirror.getValue();
    var failedCommentTest = false;

    // checks if the number of opening comments(/*) matches the number of
    // closing comments(*/)
    if (
      userJavaScript.match(/\/\*/gi) &&
      userJavaScript.match(/\/\*/gi).length > userJavaScript.match(/\*\//gi).length
    ) {
      failedCommentTest = true;
    }

    userJavaScript = removeComments(userJavaScript);
    userJavaScript = scrapeTests(userJavaScript);
    // simple fix in case the user forgets to invoke their function

    if (userJavaScript.match(/function/gi)) {
      if (userJavaScript.match(/function\s*?\(|function\s+\w+\s*?\(/gi)) {
        sandBox.submit(userJavaScript, function(cls, message) {
          if (failedCommentTest) {
            myCodeMirror.setValue(myCodeMirror.getValue() + '*/');
            console.log('Caught Unfinished Comment');
            codeOutput.setValue('Unfinished multi-line comment');
            failedCommentTest = false;
          } else if (cls) {
            codeOutput.setValue(message.error);
            if (shouldTest) {
              runTests('Error', null);
            }
          } else {
            codeOutput.setValue(message.output);
            codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi, ''));
            message.input = removeLogs(message.input);
            if (shouldTest) {
              runTests(null, message);
            }
          }
        });
      } else {
        codeOutput.setValue('Unsafe or unfinished function declaration');
      }
    } else {
      sandBox.submit(userJavaScript, function(cls, message) {

        if (failedCommentTest) {
          myCodeMirror.setValue(myCodeMirror.getValue() + '*/');
          console.log('Caught Unfinished Comment');
          codeOutput.setValue('Unfinished mulit-line comment');
          failedCommentTest = false;
        } else if (cls) {
          codeOutput.setValue(message.error);
          if (shouldTest) {
            runTests('Error', null);
          }
        } else {
          codeOutput.setValue(message.output);
          codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi, ''));
          message.input = removeLogs(message.input);

          if (shouldTest) {
            runTests(null, message);
          }
        }
      });
    }
  } else {

    editorValueForIFrame = editor.getValue();

    if (failedCommentTest) {
      editor.setValue(editor.getValue() + '-->');
      editorValueForIFrame = editorValueForIFrame + '-->';
    }
    if (
      !editor.getValue().match(/\$\s*?\(\s*?\$\s*?\)/gi) &&
      challengeType === '0'
    ) {
      safeHTMLRun(shouldTest);
    } else {
      workerError('Unsafe $($)');
    }
  }
  setTimeout(function() {
    var $marginFix = $('.innerMarginFix');
    $marginFix.css('min-height', $marginFix.height());
  }, 1000);
}

$('#submitButton').on('click', function() {
  bonfireExecute(true);
});

$(document).ready(function() {
  var $preview = $('#preview');
  isInitRun = true;

  editorValue = codeStorage.isAlive() ?
    codeStorage.getStoredValue() :
    allSeeds;

  myCodeMirror.setValue(replaceSafeTags(editorValue));
  if (typeof $preview.html() !== 'undefined') {
    $preview.load(function() {
      if (initPreview) {
        bonfireExecute(true);
      }
    });
  } else {
    bonfireExecute(true);
  }
});
