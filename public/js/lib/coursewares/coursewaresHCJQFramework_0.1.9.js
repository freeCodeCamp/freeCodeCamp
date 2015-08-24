/**
 * Created by nathanleniz on 2/2/15.
 */

var widgets = [];
var editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
  lineNumbers: true,
  mode: "text/html",
  theme: 'monokai',
  runnable: true,
  matchBrackets: true,
  autoCloseBrackets: true,
  scrollbarStyle: 'null',
  lineWrapping: true,
  gutters: ["CodeMirror-lint-markers"],
  onKeyEvent: doLinting
});

var defaultKeymap = {
  'Cmd-E': 'emmet.expand_abbreviation',
  'Tab': 'emmet.expand_abbreviation_with_tab',
  'Enter': 'emmet.insert_formatted_line_break_only'
};

emmetCodeMirror(editor, defaultKeymap);


// Hijack tab key to insert two spaces instead
editor.setOption("extraKeys", {
  Tab: function(cm) {
    if (cm.somethingSelected()){
      cm.indentSelection("add");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  },
  "Shift-Tab": function(cm) {
    if (cm.somethingSelected()){
      cm.indentSelection("subtract");
    } else {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
  }
});

editor.setSize("100%", "auto");

var libraryIncludes = "<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>" +
  "<script src='/js/lib/chai/chai.js'></script>" +
  "<script src='/js/lib/chai/chai-jquery.js'></script>" +
  "<script src='//cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min.js'></script>" +
  "<link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.0/animate.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'/>" +
  "<link rel='stylesheet' href='//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css'/>" +
  "<style>body { padding: 0px 3px 0px 3px; }</style>" +
  "<script>var expect = chai.expect; var should = chai.should(); var assert = chai.assert;</script>";


var editorValueForIFrame;
var iFrameScript = "<script src='/js/lib/coursewares/iFrameScripts_0.0.4.js'></script>";

var delay;
// Initialize CodeMirror editor with a nice html5 canvas demo.
editor.on("keyup", function () {
  clearTimeout(delay);
  delay = setTimeout(updatePreview, 300);
});

var nodeEnv = prodOrDev === 'production' ? 'http://www.freecodecamp.com' : 'http://localhost:3001';
function updatePreview() {
  editorValueForIFrame = editor.getValue();
  var failedCommentTest = false;
  if(editorValueForIFrame.match(/\<\!\-\-/gi) && editorValueForIFrame.match(/\-\-\>/gi) == null){
    failedCommentTest = true;
  }
  else if(editorValueForIFrame.match(/\<\!\-\-/gi) && editorValueForIFrame.match(/\<\!\-\-/gi).length > editorValueForIFrame.match(/\-\-\>/gi).length){
    failedCommentTest = true;
  }
  if(failedCommentTest){
      editor.setValue(editor.getValue()+ "-->");
      editorValueForIFrame = editorValueForIFrame + "-->";
  }
  goodTests = 0;
  var previewFrame = document.getElementById('preview');
  var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
  preview.open();
  $('#testSuite').empty();
  preview.write(libraryIncludes + editor.getValue() + iFrameScript);
  codeStorage.updateStorage();
  preview.close();

}
setTimeout(updatePreview, 300);

/**
 * "post" methods
 */

var testResults = [];
var postSuccess = function(data) {
  var testDoc = document.createElement("div");
  $(testDoc)
    .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-checkmark-circled big-success-icon'></i></div><div class='col-xs-10 test-output test-vertical-center wrappable'>" + JSON.parse(data) + "</div>");
  $('#testSuite').append(testDoc);
  testSuccess();
};

var postError = function(data) {
  var testDoc = document.createElement("div");
  $(testDoc)
    .html("<div class='row'><div class='col-xs-2 text-center'><i class='ion-close-circled big-error-icon'></i></div><div class='col-xs-10 test-vertical-center test-output wrappable'>" + JSON.parse(data) + "</div>");
  $('#testSuite').append(testDoc);
};
var goodTests = 0;
var testSuccess = function() {
  goodTests++;
  if (goodTests === tests.length) {
    showCompletion();
  }
};

function doLinting () {
  editor.operation(function () {
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
};

//$('#testSuite').empty();
function showCompletion() {
  var time = Math.floor(Date.now()) - started;
  ga('send', 'event',  'Challenge', 'solved', challenge_Name + ', Time: ' + time);
  $('#next-courseware-button').removeAttr('disabled');
  $('#next-courseware-button').addClass('animated tada');
  if (!userLoggedIn) {
    $('#complete-courseware-dialog').modal('show');
  }
  $('body').keydown(function(e) {
    if (e.ctrlKey && e.keyCode == 13) {
      $('#next-courseware-button').click();
      $('#next-courseware-button').unbind('click');
    }
  });
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
};
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

editor.setValue(editorValue.replace((/fccss/gi), '<script>').replace((/fcces/gi), '</script>'));
editor.refresh();

var resetEditor = function resetEditor() {
  editor.setValue(allSeeds.replace((/fccss/gi), '<script>').replace((/fcces/gi), '</script>'));
  updatePreview();
  codeStorage.updateStorage();
};



/*
var challengeSeed = challengeSeed || null;
var allSeeds = '';
(function() {
  challengeSeed.forEach(function(elem) {
    allSeeds += elem.replace(/fccss/g, '<script>').replace(/fcces/g,'</script>') + '\n';
  });
  editor.setValue(allSeeds);
  (function() {
    setTimeout(function() {
      editor.refresh();
    }, 200);
  })();
})();
*/
