var widgets = [];
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
  lineNumbers: true,
  mode: "javascript",
  theme: 'monokai',
  runnable: true,
  lint: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ["CodeMirror-lint-markers"],
  onKeyEvent: doLinting
});
var editor = myCodeMirror;
editor.setSize("100%", "auto");

// Hijack tab key to enter two spaces intead
editor.setOption("extraKeys", {
  Tab: function(cm) {
    if (cm.somethingSelected()) {
      cm.indentSelection("add");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  },
  "Shift-Tab": function(cm) {
    if (cm.somethingSelected()) {
      cm.indentSelection("subtract");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  },
  "Ctrl-Enter": function() {
    bonfireExecute();
    return false;
  }
});


var attempts = 0;
if (attempts) {
  attempts = 0;
}


var codeOutput = CodeMirror.fromTextArea(document.getElementById("codeOutput"), {
  lineNumbers: false,
  mode: "text",
  theme: 'monokai',
  readOnly: 'nocursor',
  lineWrapping: true
});

codeOutput.setValue('/**\n' +
  ' * Your output will go here.\n' + ' * Console.log() -type statements\n' +
  ' * will appear in your browser\'s\n' + ' * DevTools JavaScript console.\n' +
  ' */');
codeOutput.setSize("100%", "100%");
var info = editor.getScrollInfo();
var after = editor.charCoords({
  line: editor.getCursor().line + 1,
  ch: 0
}, "local").top;
if (info.top + info.clientHeight < after)
  editor.scrollTo(null, after - info.clientHeight + 3);

function doLinting() {
  editor.operation(function() {
    for (var i = 0; i < widgets.length; ++i)
      editor.removeLineWidget(widgets[i]);
    widgets.length = 0;
    JSHINT(editor.getValue());
    for (var i = 0; i < JSHINT.errors.length; ++i) {
      var err = JSHINT.errors[i];
      if (!err) continue;
      var msg = document.createElement("div");
      var icon = msg.appendChild(document.createElement("span"));
      icon.innerHTML = "!!";
      icon.className = "lint-error-icon";
      msg.appendChild(document.createTextNode(err.reason));
      msg.className = "lint-error";
      widgets.push(editor.addLineWidget(err.line - 1, msg, {
        coverGutter: false,
        noHScroll: true
      }));
    }
  });
}

$('#submitButton').on('click', function() {
  bonfireExecute();
});

function bonfireExecute() {
  attempts++;
  ga('send', 'event', 'Challenge', 'ran-code', challenge_Name);
  userTests = null;
  $('#codeOutput').empty();
  var userJavaScript = myCodeMirror.getValue();
  var failedCommentTest = false;
  if(userJavaScript.match(/\/\*/gi) && userJavaScript.match(/\*\//gi) == null){
      failedCommentTest = true;
  }
  else if(!failedCommentTest && userJavaScript.match(/\/\*/gi) && userJavaScript.match(/\/\*/gi).length > userJavaScript.match(/\*\//gi).length){
      failedCommentTest = true;
  }
  userJavaScript = removeComments(userJavaScript);
  userJavaScript = scrapeTests(userJavaScript);
  // simple fix in case the user forgets to invoke their function

  submit(userJavaScript, function(cls, message) {
    if(failedCommentTest){
      myCodeMirror.setValue(myCodeMirror.getValue() + "*/");
      console.log('Caught Unfinished Comment');
      codeOutput.setValue("Unfinished mulit-line comment");
      failedCommentTest = false;
    }
    else if (cls) {
      codeOutput.setValue(message.error);
      runTests('Error', null);
    } else {
      codeOutput.setValue(message.output);
      codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi,''));
      message.input = removeLogs(message.input);
      runTests(null, message);
    }
  });
}


var userTests;
var testSalt = Math.random();


var scrapeTests = function(userJavaScript) {

  // insert tests from mongo
  for (var i = 0; i < tests.length; i++) {
    userJavaScript += '\n' + tests[i];
  }

  var counter = 0;
  var regex = new RegExp(
    /(expect(\s+)?\(.*\;)|(assert(\s+)?\(.*\;)|(assert\.\w.*\;)|(.*\.should\..*\;)/
  );
  var match = regex.exec(userJavaScript);
  while (match != null) {
    var replacement = '//' + counter + testSalt;
    userJavaScript = userJavaScript.substring(0, match.index) + replacement +
      userJavaScript.substring(match.index + match[0].length);

    if (!userTests) {
      userTests = [];
    }
    userTests.push({
      "text": match[0],
      "line": counter,
      "err": null
    });
    counter++;
    match = regex.exec(userJavaScript);
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
    var testDoc = document.createElement("div");
    if (test.err != null) {
      console.log('Should be displaying bad tests');
      $(testDoc)
        .html(
          "<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-output wrappable test-vertical-center grayed-out-test-output'>" +
          test.text + "</div><div class='col-xs-10 test-output wrappable'>" +
          test.err + "</div></div><div class='ten-pixel-break'/>")
        .appendTo($('#testSuite'));
    } else {
      $(testDoc)
        .html(
          "<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable grayed-out-test-output'>" +
          test.text + "</div></div><div class='ten-pixel-break'/>")
        .appendTo($('#testSuite'));
    }
  };
};

var expect = chai.expect;
var assert = chai.assert;
var should = chai.should();


var reassembleTest = function(test, data) {
  var lineNum = test.line;
  var regexp = new RegExp("\/\/" + lineNum + testSalt);
  return data.input.replace(regexp, test.text);
};

var runTests = function(err, data) {
  var allTestsPassed = true;
  pushed = false;
  $('#testSuite').children().remove();
  if (err && userTests.length > 0) {
    userTests = [{
      text: "Program Execution Failure",
      err: "No user tests were run."
    }];
    createTestDisplay();
  }
  //Add blocks to test exploits here!
  else if(editorValue.match(/if\s\(null\)\sconsole\.log\(1\);/gi)){
      allTestsPassed = false;
      userTests = [{
          text: "Program Execution Failure",
          err: "Invalid if (null) console.log(1); detected"
      }];
      createTestDisplay();
  }
  else if (userTests) {
    userTests.push(false);
    pushed = true;
    userTests.forEach(function(chaiTestFromJSON, indexOfTestArray,
      __testArray) {
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

  }
};

function showCompletion() {
  var time = Math.floor(Date.now()) - started;
  ga('send', 'event', 'Challenge', 'solved', challenge_Name + ', Time: ' + time +
    ', Attempts: ' + attempts);
  var bonfireSolution = myCodeMirror.getValue();
  var didCompleteWith = $('#completed-with').val() || null;
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
        $('#complete-courseware-dialog').modal('show');
        $('#complete-courseware-dialog').keydown(function(e) {
          if (e.ctrlKey && e.keyCode == 13) {
            $('#next-courseware-button').click();
          }
        });
      }
    }
  );

}


/*
 Local Storage Update System By Andrew Cay(Resto)
 codeStorage: singleton object that contains properties and methods related to
 dealing with the localStorage system.
 The keys work off of the variable challenge_name to make unique identifiers per bonfire

 Two extra functionalities:
 Added anonymous version checking system incase of future updates to the system
 Added keyup listener to editor(myCodeMirror) so the last update has been saved to storage
 */
var codeStorage = {
  version: 0.01,
  keyVersion:"saveVersion",
  keyValue: null,//where the value of the editor is saved
  updateWait: 2000,// 2 seconds
  updateTimeoutId: null,
  eventArray: []//for firing saves
};
// Returns true if the editor code was saved since last key press (use this if you want to make a "saved" notification somewhere")
codeStorage.hasSaved = function(){
  return ( updateTimeoutId === null );
};
codeStorage.onSave = function(func){
  codeStorage.eventArray.push(func);
};
codeStorage.setSaveKey = function(key){
  codeStorage.keyValue = key + 'Val';
};
codeStorage.getEditorValue = function(){
  return ('' + localStorage.getItem(codeStorage.keyValue));
};

codeStorage.isAlive = function() {
  var val = this.getEditorValue()
  return val !== 'null' &&
    val !== 'undefined' &&
    (val && val.length > 0);
}
codeStorage.updateStorage = function(){
  if(typeof(Storage) !== undefined) {
    var value = editor.getValue();
    localStorage.setItem(codeStorage.keyValue, value);
  } else {
    var debugging = false;
    if( debugging ){
      console.log('no web storage');
    }
  }
  codeStorage.updateTimeoutId = null;
  codeStorage.eventArray.forEach(function(func){
    func();
  });
};
//Update Version
(function(){
  var savedVersion = localStorage.getItem('saveVersion');
  if( savedVersion === null ){
    localStorage.setItem(codeStorage.keyVersion, codeStorage.version);//just write current version
  }else{
    if( savedVersion !== codeStorage.version ){
      //Update version
    }
  }
})();



///Set everything up one page
/// Update local save when editor has changed
codeStorage.setSaveKey(challenge_Name);
editor.on('keyup', function(){
  window.clearTimeout(codeStorage.updateTimeoutId);
  codeStorage.updateTimeoutId = window.setTimeout(codeStorage.updateStorage, codeStorage.updateWait);
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

editorValue = (codeStorage.isAlive())? codeStorage.getEditorValue() : allSeeds;

myCodeMirror.setValue(editorValue);

var resetEditor = function resetEditor() {
  editor.setValue(allSeeds);
  codeStorage.updateStorage();
};

$(document).ready(function(){
    bonfireExecute();
});
