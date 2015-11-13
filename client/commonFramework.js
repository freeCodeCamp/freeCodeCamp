var common = window.common || { init: [] };


var BDDregex = new RegExp(
  '(expect(\\s+)?\\(.*\\;)|' +
  '(assert(\\s+)?\\(.*\\;)|' +
  '(assert\\.\\w.*\\;)|' +
  '(.*\\.should\\..*\\;)/'
);

var libraryIncludes =
  "<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/" +
  "libs/animate.css/3.2.0/animate.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/" +
  "bootstrap/3.3.1/css/bootstrap.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/" +
  "font-awesome/4.2.0/css/font-awesome.min.css'/>" +
  '<style>body { padding: 0px 3px 0px 3px; }</style>';

var iFrameScript = "<script src='/js/iFrameScripts.js'></script>";

function workerError(error) {
  var display = $('.runTimeError');
  var housing = $('#testSuite');

  if (display.html() === error) {
    return null;
  }

  display.remove();

  housing.prepend(`
    <div class="runTimeError" style="font-size: 18px;">
      <code>
        ${common.unScopeJQuery(error)}
      </code>
    </div>
  `);

  display.hide().fadeIn(function() {
    setTimeout(function() {
      display.fadeOut(function() {
        display.remove();
      });
    }, 1000);
  });
}

common.safeHTMLRun = function safeHTMLRun(shouldTest) {
  const codeStorage = common.codeStorage;
  if (common.challengeType !== '0') {
    return null;
  }

  const editorValue = common.editor.getValue();
  const previewFrame = document.getElementById('preview');
  const preview = previewFrame.contentDocument ||
    previewFrame.contentWindow.document;

  if (!editorValue.match(/\<script\>/gi)) {
    preview.open();
    preview.write(
      libraryIncludes + editorValue + (shouldTest ? iFrameScript : '')
    );
    codeStorage.updateStorage();
    preview.close();
    return null;
  }

  // grab user javaScript
  var s = editorValue
    .split(/\<\s?script\s?\>/gi)[1]
    .split(/\<\s?\/\s?script\s?\>/gi)[0];

  // need to add jQuery here
  s = `
    document = {};
    var navigator = function() {
      this.geolocation = function() {
        this.getCurrentPosition = function() {
          this.coords = {latitude: "", longitude: ""};
          return this;
        };
        return this;
      };
      return this;
    };
    ${s}
  `;

  return common.detectLoop(s, function(cls, message) {
    if (cls) {
      console.log(message.error);
      workerError(message.error);
    }

    preview.open();
    preview.write(
      libraryIncludes + editorValue + (shouldTest ? iFrameScript : '')
    );
    codeStorage.updateStorage();
    preview.close();
  });
};

common.updatePreview = function updatePreview() {
  var editorValue = common.editor.getValue();
  var openingComments = editorValue.match(/\<\!\-\-/gi);
  var closingComments = editorValue.match(/\-\-\>/gi);
  if (
    openingComments &&
    (
      !closingComments ||
      openingComments.length > closingComments.length
    )
  ) {
    common.editor.setValue(editorValue + '-->');
    editorValue = editorValue + '-->';
  }


  if (!editorValue.match(/\$\s*?\(\s*?\$\s*?\)/gi)) {
    common.safeHTMLRun(false);
  } else {
    workerError('Unsafe $($)');
  }
};

common.init.push(() => {
  if (common.challengeType === '0') {
    common.updatePreview(false);
  }
});


/* eslint-disable no-unused-vars */
var testResults = [];
var postSuccess = function(data) {
/* eslint-enable no-unused-vars */

  var testDoc = document.createElement('div');
  $(testDoc).html(`
    <div class='row'>
      <div class='col-xs-2 text-center'>
      <i class='ion-checkmark-circled big-success-icon'></i>
    </div>
    <div class='col-xs-10 test-output test-vertical-center wrappable'>
      ${JSON.parse(data)}
    </div>
  `);

  $('#testSuite').append(testDoc);

  testSuccess();
};

/* eslint-disable no-unused-vars */
var postError = function(data) {
/* eslint-enable no-unused-vars */
  var testDoc = document.createElement('div');

  $(testDoc).html(`
    <div class='row'>
      <div class='col-xs-2 text-center'>
      <i class='ion-close-circled big-error-icon'></i>
    </div>
    <div class='col-xs-10 test-vertical-center test-output wrappable'>
      ${JSON.parse(data)}
    </div>
  `);

  $('#testSuite').append(testDoc);
};

var goodTests = 0;
var testSuccess = function() {
  goodTests++;
  // test successful run show completion
  if (goodTests === common.tests.length) {
    return showCompletion();
  }
};

function ctrlEnterClickHandler(e) {
  // ctrl + enter or cmd + enter
  if (
    e.metaKey && e.keyCode === 13 ||
    e.ctrlKey && e.keyCode === 13
  ) {
    $('#complete-courseware-dialog').off('keydown', ctrlEnterClickHandler);
    if ($('#submit-challenge').length > 0) {
      $('#submit-challenge').click();
    } else {
      window.location = '/challenges/next-challenge?id=' + common.challengeId;
    }
  }
}

function showCompletion() {
  var time = Math.floor(Date.now()) - window.started;

  window.ga(
    'send',
    'event',
    'Challenge',
    'solved',
    common.challengeName + ', Time: ' + time + ', Attempts: ' + 0
  );

  var bonfireSolution = common.editor.getValue();
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
          '<div id="challenge-spinner" ' +
          'class="animated zoomInUp inner-circles-loader">' +
          'submitting...</div>'
        );
        next();
      });

    $.post(
      '/completed-bonfire/', {
        challengeInfo: {
          challengeId: common.challengeId,
          challengeName: common.challengeName,
          completedWith: didCompleteWith,
          challengeType: common.challengeType,
          solution: bonfireSolution
        }
      },
      function(res) {
        if (res) {
          window.location =
            '/challenges/next-challenge?id=' + common.challengeId;
        }
      }
    );
  });
}

common.resetEditor = function resetEditor() {
  common.editor.setValue(common.replaceSafeTags(common.seed));
  $('#testSuite').empty();
  common.executeChallenge(true);
  common.codeStorage.updateStorage();
};


common.addTestsToString = function(userJavaScript, userTests = []) {

  // insert tests from mongo
  for (var i = 0; i < common.tests.length; i++) {
    userJavaScript += '\n' + common.tests[i];
  }

  var counter = 0;
  var match = BDDregex.exec(userJavaScript);

  while (match) {
    var replacement = '//' + counter + common.salt;
    userJavaScript = userJavaScript.substring(0, match.index) +
      replacement +
      userJavaScript.substring(match.index + match[0].length);

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
    var regex = new RegExp(/(\/\*[^(\*\/)]*\*\/)|([ \n]\/\/[^\n]*)/g);
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
    var didTestPass = !userTests[i].err;
    var testText = userTests[i].text
      .split('message: ')
      .pop()
      .replace(/\'\);/g, '');

    var testDoc = document.createElement('div');

    var iconClass = didTestPass ?
      '"ion-checkmark-circled big-success-icon"' :
      '"ion-close-circled big-error-icon"';

    $(testDoc).html(
      "<div class='row'><div class='col-xs-2 text-center'><i class=" +
      iconClass +
      "></i></div><div class='col-xs-10 test-output wrappable'>" +
      testText +
      "</div><div class='ten-pixel-break'/>"
    )
      .appendTo($('#testSuite'));
  }
};

(function(win, chai) {
  if (!chai) {
    return;
  }
  win.expect = chai.expect;
  win.assert = chai.assert;
  win.should = chai.should();

}(window, window.chai));


var reassembleTest = function(test, data) {
  var lineNum = test.line;
  var regexp = new RegExp('\/\/' + lineNum + testSalt);
  return data.input.replace(regexp, test.text);
};

var runTests = function(err, data) {
  var head = common.arrayToNewLineString(common.head);
  var tail = common.arrayToNewLineString(common.tail);

  var editorValue = head + editor.getValue() + tail;
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
          /* eslint-disable no-eval, no-unused-vars */
          var output = eval(reassembleTest(chaiTestFromJSON, data));
          /* eslint-enable no-eval, no-unused-vars */
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
    } else {
      isInitRun = false;
    }
  }
};

// step challenge
common.init.push((function() {
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
    $challengeSteps.each(function(index) {
      var $step = $(this);
      if (
        !$step.hasClass('hidden')
      ) {
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
    $challengeSteps.each(function(index) {
      var $step = $(this);
      if (
        !$step.hasClass('hidden') &&
        index + 1 !== length
      ) {
        nextStepIndex = index + 1;
      }
    });

    $nextStep = $challengeSteps[nextStepIndex];

    return $nextStep;
  }

  function handlePrevStepClick(e) {
    e.preventDefault();
    var prevStep = getPreviousStep($(stepClass));
    $(this)
      .parent().parent()
      .removeClass('slideInLeft slideInRight')
      .addClass('animated fadeOutRight fast-animation')
      .delay(250)
      .queue(function(prev) {
        $(this).addClass('hidden');
        if (prevStep) {
          $(prevStep)
            .removeClass('hidden')
            .removeClass('fadeOutLeft fadeOutRight')
            .addClass('animated slideInLeft fast-animation')
            .delay(500)
            .queue(function(prev) {
              prev();
            });
        }
        prev();
      });
  }

  function handleNextStepClick(e) {
    e.preventDefault();
    var nextStep = getNextStep($(stepClass));
    $(this)
      .parent().parent()
      .removeClass('slideInRight slideInLeft')
      .addClass('animated fadeOutLeft fast-animation')
      .delay(250)
      .queue(function(next) {
        $(this).addClass('hidden');
        if (nextStep) {
          $(nextStep)
            .removeClass('hidden')
            .removeClass('fadeOutRight fadeOutLeft')
            .addClass('animated slideInRight fast-animation')
            .delay(500)
            .queue(function(next) {
              next();
            });
        }
        next();
      });
  }

  function handleActionClick(e) {
    var props = common.challengeSeed[0] ||
      { stepIndex: [] };

    var $el = $(this);
    var index = +$el.attr('id');
    var propIndex = props.stepIndex.indexOf(index);

    if (propIndex === -1) {
      return $el
        .parent()
        .find('.disabled')
        .removeClass('disabled');
    }

    // an API action
    // prevent link from opening
    e.preventDefault();
    var prop = props.properties[propIndex];
    var api = props.apis[propIndex];
    if (common[prop]) {
      return $el
        .parent()
        .find('.disabled')
        .removeClass('disabled');
    }
    $
      .post(api)
      .done(function(data) {
        // assume a boolean indicates passing
        if (typeof data === 'boolean') {
          return $el
            .parent()
            .find('.disabled')
            .removeClass('disabled');
        }
        // assume api returns string when fails
        $el
          .parent()
          .find('.disabled')
          .replaceWith('<p>' + data + '</p>');
      })
      .fail(function() {
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

    $('#submit-challenge')
      .attr('disabled', 'true')
      .removeClass('btn-primary')
      .addClass('btn-warning disabled');

    var $checkmarkContainer = $('#checkmark-container');
    $checkmarkContainer.css({ height: $checkmarkContainer.innerHeight() });

    $('#challenge-checkmark')
      .addClass('zoomOutUp')
      .delay(1000)
      .queue(function(next) {
        $(this).replaceWith(
          '<div id="challenge-spinner" ' +
          'class="animated zoomInUp inner-circles-loader">' +
          'submitting...</div>'
        );
        next();
      });

    $.post(
      '/completed-bonfire/', {
        challengeInfo: {
          challengeId: common.challengeId,
          challengeName: common.challengeName,
          challengeType: common.challengeType
        }
      },
      function(res) {
        if (res) {
          window.location =
            '/challenges/next-challenge?id=' + common.challengeId;
        }
      }
    );
  }

  return function($) {
    $(prevBtnClass).click(handlePrevStepClick);
    $(nextBtnClass).click(handleNextStepClick);
    $(actionBtnClass).click(handleActionClick);
    $(finishBtnClass).click(handleFinishClick);
  };
}(window.$)));

function bonfireExecute(shouldTest) {
  var head = common.arrayToNewLineString(common.head);
  var tail = common.arrayToNewLineString(common.tail);
  var codeOutput = common.codeOutput;
  initPreview = false;
  goodTests = 0;
  attempts++;
  ga('send', 'event', 'Challenge', 'ran-code', common.challengeName);
  userTests = null;
  $('#testSuite').empty();

  if (
    common.challengeType !== '0' &&
    !editor.getValue().match(/\$\s*?\(\s*?\$\s*?\)/gi)
  ) {
    var userJavaScript = head + editor.getValue() + tail;
    var failedCommentTest = false;

    var openingComments = userJavaScript.match(/\/\*/gi);
    // checks if the number of opening comments(/*) matches the number of
    // closing comments(*/)
    if (
      openingComments &&
      openingComments.length > userJavaScript.match(/\*\//gi).length
    ) {
      failedCommentTest = true;
    }

    userJavaScript = removeComments(userJavaScript);
    userJavaScript = scrapeTests(userJavaScript);
    // simple fix in case the user forgets to invoke their function

    if (userJavaScript.match(/function/gi)) {
      if (userJavaScript.match(/function\s*?\(|function\s+\w+\s*?\(/gi)) {
        common.sandBox.submit(userJavaScript, function(cls, message) {
          if (failedCommentTest) {
            editor.setValue(editor.getValue() + '*/');
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
      common.sandBox.submit(userJavaScript, function(cls, message) {

        if (failedCommentTest) {
          editor.setValue(editor.getValue() + '*/');
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
      common.challengeType === '0'
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

common.init($ => {
  $('#submitButton').on('click', function() {
    common.executeChallenge(true);
  });
});

$(document).ready(function() {

  common.init.forEach(function(init) {
    init($);
  });

  // init modal keybindings on open
  $('#complete-courseware-dialog').on('shown.bs.modal', function() {
    $('#complete-courseware-dialog').keydown(ctrlEnterClickHandler);
  });

  // remove modal keybinds on close
  $('#complete-courseware-dialog').on('hidden.bs.modal', function() {
    $('#complete-courseware-dialog').off('keydown', ctrlEnterClickHandler);
  });

  var $preview = $('#preview');
  if (typeof $preview.html() !== 'undefined') {
    $preview.load(function() {
      common.executeChallenge(true);
    });
  } else if (
    common.challengeType !== '2' &&
    common.challengeType !== '3' &&
    common.challengeType !== '4' &&
    common.challengeType !== '7'
  ) {
    common.executeChallenge(true);
  }

});
