var editor;
var widgets = [];
editor = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "text",
    theme: 'monokai',
    runnable: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    scrollbarStyle: 'null',
    lineWrapping: true,
    gutters: ["CodeMirror-lint-markers"],
    onKeyEvent: doLinting
});

var myCodeMirror = editor;

var codeStorage = {
    version: 0.01,
    keyVersion:"saveVersion",
    keyValue: null,//where the value of the editor is saved
    updateWait: 2000,// 2 seconds
    updateTimeoutId: null,
    eventArray: []//for firing saves
};
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
    var val = this.getEditorValue();
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

/*var defaultKeymap = {
 'Cmd-E': 'emmet.expand_abbreviation',
 'Tab': 'emmet.expand_abbreviation_with_tab',
 'Enter': 'emmet.insert_formatted_line_break_only'
 };

 emmetCodeMirror(editor, defaultKeymap);*/

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
    },
    "Ctrl-Enter": function() {
        bonfireExecute();
        return false;
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

function workerError(error){
    var display = $('.runTimeError');
    var housing = $('#testSuite');
    if(display.html() != error){
        display.remove();
        housing.prepend("<div class = \"runTimeError\" style= \"font-size: 18px;\"><code>" + error + "</code></div>");
        display.hide().fadeIn(function(){
            setTimeout(function(){
                display.fadeOut(function(){
                    display.remove();
                });
            }, 1000)
        });
    }
}

function safeHTMLRun(test){
    var previewFrame = document.getElementById('preview');
    var preview = previewFrame.contentDocument || previewFrame.contentWindow.document;
    if(editor.getValue().match(/\<script\>/gi) !== null) {
        var s = editor.getValue().split(/\<\s?script\s?\>/gi)[1].split(/\<\s?\/\s?script\s?\>/gi)[0];
        s = "var $ = function(){return(new function(){this.add=function(){return(null);};this.addBack=function(){return(null);};this.addClass=function(){return(null);};this.after=function(){return(null);};this.ajaxComplete=function(){return(null);};this.ajaxError=function(){return(null);};this.ajaxSend=function(){return(null);};this.ajaxStart=function(){return(null);};this.ajaxStop=function(){return(null);};this.ajaxSuccess=function(){return(null);};this.andSelf=function(){return(null);};this.animate=function(){return(null);};this.append=function(){return(null);};this.appendTo=function(){return(null);};this.attr=function(){return(null);};this.before=function(){return(null);};this.bind=function(){return(null);};this.blur=function(){return(null);};this.callbacksadd=function(){return(null);};this.callbacksdisable=function(){return(null);};this.callbacksdisabled=function(){return(null);};this.callbacksempty=function(){return(null);};this.callbacksfire=function(){return(null);};this.callbacksfired=function(){return(null);};this.callbacksfireWith=function(){return(null);};this.callbackshas=function(){return(null);};this.callbackslock=function(){return(null);};this.callbackslocked=function(){return(null);};this.callbacksremove=function(){return(null);};this.change=function(){return(null);};this.children=function(){return(null);};this.clearQueue=function(){return(null);};this.click=function(){return(null);};this.clone=function(){return(null);};this.closest=function(){return(null);};this.contents=function(){return(null);};this.context=function(){return(null);};this.css=function(){return(null);};this.data=function(){return(null);};this.dblclick=function(){return(null);};this.deferredalways=function(){return(null);};this.deferreddone=function(){return(null);};this.deferredfail=function(){return(null);};this.deferredisRejected=function(){return(null);};this.deferredisResolved=function(){return(null);};this.deferrednotify=function(){return(null);};this.deferrednotifyWith=function(){return(null);};this.deferredpipe=function(){return(null);};this.deferredprogress=function(){return(null);};this.deferredpromise=function(){return(null);};this.deferredreject=function(){return(null);};this.deferredrejectWith=function(){return(null);};this.deferredresolve=function(){return(null);};this.deferredresolveWith=function(){return(null);};this.deferredstate=function(){return(null);};this.deferredthen=function(){return(null);};this.delay=function(){return(null);};this.delegate=function(){return(null);};this.dequeue=function(){return(null);};this.detach=function(){return(null);};this.die=function(){return(null);};this.each=function(){return(null);};this.empty=function(){return(null);};this.end=function(){return(null);};this.eq=function(){return(null);};this.error=function(){return(null);};this.eventcurrentTarget=function(){return(null);};this.eventdata=function(){return(null);};this.eventdelegateTarget=function(){return(null);};this.eventisDefaultPrevented=function(){return(null);};this.eventisImmediatePropagationStopped=function(){return(null);};this.eventisPropagationStopped=function(){return(null);};this.eventmetaKey=function(){return(null);};this.eventnamespace=function(){return(null);};this.eventpageX=function(){return(null);};this.eventpageY=function(){return(null);};this.eventpreventDefault=function(){return(null);};this.eventrelatedTarget=function(){return(null);};this.eventresult=function(){return(null);};this.eventstopImmediatePropagation=function(){return(null);};this.eventstopPropagation=function(){return(null);};this.eventtarget=function(){return(null);};this.eventtimeStamp=function(){return(null);};this.eventtype=function(){return(null);};this.eventwhich=function(){return(null);};this.fadeIn=function(){return(null);};this.fadeOut=function(){return(null);};this.fadeTo=function(){return(null);};this.fadeToggle=function(){return(null);};this.filter=function(){return(null);};this.find=function(){return(null);};this.finish=function(){return(null);};this.first=function(){return(null);};this.focus=function(){return(null);};this.focusin=function(){return(null);};this.focusout=function(){return(null);};this.get=function(){return(null);};this.has=function(){return(null);};this.hasClass=function(){return(null);};this.height=function(){return(null);};this.hide=function(){return(null);};this.hover=function(){return(null);};this.html=function(){return(null);};this.index=function(){return(null);};this.innerHeight=function(){return(null);};this.innerWidth=function(){return(null);};this.insertAfter=function(){return(null);};this.insertBefore=function(){return(null);};this.is=function(){return(null);};this.jQuery=function(){return(null);};this.jquery=function(){return(null);};this.jQueryajax=function(){return(null);};this.jQueryajaxPrefilter=function(){return(null);};this.jQueryajaxSetup=function(){return(null);};this.jQueryajaxTransport=function(){return(null);};this.jQueryboxModel=function(){return(null);};this.jQuerybrowser=function(){return(null);};this.jQueryCallbacks=function(){return(null);};this.jQuerycontains=function(){return(null);};this.jQuerycssHooks=function(){return(null);};this.jQuerycssNumber=function(){return(null);};this.jQuerydata=function(){return(null);};this.jQueryDeferred=function(){return(null);};this.jQuerydequeue=function(){return(null);};this.jQueryeach=function(){return(null);};this.jQueryerror=function(){return(null);};this.jQueryextend=function(){return(null);};this.jQueryfnextend=function(){return(null);};this.jQueryfxinterval=function(){return(null);};this.jQueryfxoff=function(){return(null);};this.jQueryget=function(){return(null);};this.jQuerygetJSON=function(){return(null);};this.jQuerygetScript=function(){return(null);};this.jQueryglobalEval=function(){return(null);};this.jQuerygrep=function(){return(null);};this.jQueryhasData=function(){return(null);};this.jQueryholdReady=function(){return(null);};this.jQueryinArray=function(){return(null);};this.jQueryisArray=function(){return(null);};this.jQueryisEmptyObject=function(){return(null);};this.jQueryisFunction=function(){return(null);};this.jQueryisNumeric=function(){return(null);};this.jQueryisPlainObject=function(){return(null);};this.jQueryisWindow=function(){return(null);};this.jQueryisXMLDoc=function(){return(null);};this.jQuerymakeArray=function(){return(null);};this.jQuerymap=function(){return(null);};this.jQuerymerge=function(){return(null);};this.jQuerynoConflict=function(){return(null);};this.jQuerynoop=function(){return(null);};this.jQuerynow=function(){return(null);};this.jQueryparam=function(){return(null);};this.jQueryparseHTML=function(){return(null);};this.jQueryparseJSON=function(){return(null);};this.jQueryparseXML=function(){return(null);};this.jQuerypost=function(){return(null);};this.jQueryproxy=function(){return(null);};this.jQueryqueue=function(){return(null);};this.jQueryremoveData=function(){return(null);};this.jQuerysub=function(){return(null);};this.jQuerysupport=function(){return(null);};this.jQuerytrim=function(){return(null);};this.jQuerytype=function(){return(null);};this.jQueryunique=function(){return(null);};this.jQuerywhen=function(){return(null);};this.keydown=function(){return(null);};this.keypress=function(){return(null);};this.keyup=function(){return(null);};this.last=function(){return(null);};this.length=function(){return(null);};this.live=function(){return(null);};this.load=function(){return(null);};this.load=function(){return(null);};this.map=function(){return(null);};this.mousedown=function(){return(null);};this.mouseenter=function(){return(null);};this.mouseleave=function(){return(null);};this.mousemove=function(){return(null);};this.mouseout=function(){return(null);};this.mouseover=function(){return(null);};this.mouseup=function(){return(null);};this.next=function(){return(null);};this.nextAll=function(){return(null);};this.nextUntil=function(){return(null);};this.not=function(){return(null);};this.off=function(){return(null);};this.offset=function(){return(null);};this.offsetParent=function(){return(null);};this.on=function(){return(null);};this.one=function(){return(null);};this.outerHeight=function(){return(null);};this.outerWidth=function(){return(null);};this.parent=function(){return(null);};this.parents=function(){return(null);};this.parentsUntil=function(){return(null);};this.position=function(){return(null);};this.prepend=function(){return(null);};this.prependTo=function(){return(null);};this.prev=function(){return(null);};this.prevAll=function(){return(null);};this.prevUntil=function(){return(null);};this.promise=function(){return(null);};this.prop=function(){return(null);};this.pushStack=function(){return(null);};this.queue=function(){return(null);};this.ready=function(){return(null);};this.remove=function(){return(null);};this.removeAttr=function(){return(null);};this.removeClass=function(){return(null);};this.removeData=function(){return(null);};this.removeProp=function(){return(null);};this.replaceAll=function(){return(null);};this.replaceWith=function(){return(null);};this.resize=function(){return(null);};this.scroll=function(){return(null);};this.scrollLeft=function(){return(null);};this.scrollTop=function(){return(null);};this.select=function(){return(null);};this.selector=function(){return(null);};this.serialize=function(){return(null);};this.serializeArray=function(){return(null);};this.show=function(){return(null);};this.siblings=function(){return(null);};this.size=function(){return(null);};this.slice=function(){return(null);};this.slideDown=function(){return(null);};this.slideToggle=function(){return(null);};this.slideUp=function(){return(null);};this.stop=function(){return(null);};this.submit=function(){return(null);};this.text=function(){return(null);};this.toArray=function(){return(null);};this.toggle=function(){return(null);};this.toggle=function(){return(null);};this.toggleClass=function(){return(null);};this.trigger=function(){return(null);};this.triggerHandler=function(){return(null);};this.unbind=function(){return(null);};this.undelegate=function(){return(null);};this.unload=function(){return(null);};this.unwrap=function(){return(null);};this.val=function(){return(null);};this.width=function(){return(null);};this.wrap=function(){return(null);};this.wrapAll=function(){return(null);};this.wrapInner=function(){return(null);}});};"+s;
        submit(
            s, function (cls, message) {
                if (cls) {
                    console.log(message.error);
                    workerError(message.error);
                } else {
                    if(test){
                        preview.open();
                        preview.write(libraryIncludes + editor.getValue() + iFrameScript);
                        codeStorage.updateStorage();
                        preview.close();
                    }
                    else{
                        preview.open();
                        preview.write(libraryIncludes + editor.getValue());
                        codeStorage.updateStorage();
                        preview.close();
                    }
                }
            }
        );

    }
    else {
        if(test){
            preview.open();
            preview.write(libraryIncludes + editor.getValue() +iFrameScript);
            codeStorage.updateStorage();
            preview.close();
        }
        else{
            preview.open();
            preview.write(libraryIncludes + editor.getValue());
            codeStorage.updateStorage();
            preview.close();
        }
    }
}

if(typeof prodOrDev !== 'undefined') {
    var nodeEnv = prodOrDev === 'production' ? 'http://www.freecodecamp.com' : 'http://localhost:3001';
    if(challengeType === "0")
    {
        function updatePreview() {
            editorValueForIFrame = editor.getValue();
            var failedCommentTest = false;
            if (editorValueForIFrame.match(/\<\!\-\-/gi) && editorValueForIFrame.match(/\-\-\>/gi) == null) {
                failedCommentTest = true;
            }
            else if (editorValueForIFrame.match(/\<\!\-\-/gi) && editorValueForIFrame.match(/\<\!\-\-/gi).length > editorValueForIFrame.match(/\-\-\>/gi).length) {
                failedCommentTest = true;
            }
            if (failedCommentTest) {
                editor.setValue(editor.getValue() + "-->");
                editorValueForIFrame = editorValueForIFrame + "-->";
            }
            if(!editor.getValue().match(/\$\(\$\)/gi)) {
                safeHTMLRun(false);
            }
        }

        setTimeout(updatePreview, 300);
    }
}
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

var resetEditor = function resetEditor() {
    editor.setValue(allSeeds.replace((/fccss/gi), '<script>').replace((/fcces/gi), '</script>'));
    updatePreview();
    codeStorage.updateStorage();
};

var attempts = 0;
if (attempts) {
    attempts = 0;
}

if(challengeType !== "0") {
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
}
var info = editor.getScrollInfo();
var after = editor.charCoords({
    line: editor.getCursor().line + 1,
    ch: 0
}, "local").top;
if (info.top + info.clientHeight < after)
    editor.scrollTo(null, after - info.clientHeight + 3);

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
    //userTests = userTests ? null : [];
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

function bonfireExecute() {
    attempts++;
    ga('send', 'event', 'Challenge', 'ran-code', challenge_Name);
    userTests = null;
    $('#testSuite').empty();
    if(challengeType !== "0"){
        var userJavaScript = myCodeMirror.getValue();
        var failedCommentTest = false;
        if (userJavaScript.match(/\/\*/gi) && userJavaScript.match(/\*\//gi) == null) {
            failedCommentTest = true;
        }
        else if (!failedCommentTest && userJavaScript.match(/\/\*/gi) && userJavaScript.match(/\/\*/gi).length > userJavaScript.match(/\*\//gi).length) {
            failedCommentTest = true;
        }
        userJavaScript = removeComments(userJavaScript);
        userJavaScript = scrapeTests(userJavaScript);
        // simple fix in case the user forgets to invoke their function

        if(userJavaScript.match(/function/gi)){
            if(userJavaScript.match(/function\s+?\(|function\s+\w+\s+?\(/gi)){
                submit(userJavaScript, function (cls, message) {
                    if (failedCommentTest) {
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
                        codeOutput.setValue(codeOutput.getValue().replace(/\\\"/gi, ''));
                        message.input = removeLogs(message.input);
                        runTests(null, message);
                    }
                });
            }
            else{
                codeOutput.setValue("Unsafe or Unfinished function declaration");
            }
        }
    }
    else {
        editorValueForIFrame = editor.getValue();
        if (failedCommentTest) {
            editor.setValue(editor.getValue() + "-->");
            editorValueForIFrame = editorValueForIFrame + "-->";
        }
        if(!editor.getValue().match(/\$\(\$\)/gi)) {
            safeHTMLRun(true);
        }
    }
}

$('#submitButton').on('click', function() {
    bonfireExecute();
});

$(document).ready(function(){
    editorValue = (codeStorage.isAlive())? codeStorage.getEditorValue() : allSeeds;
    myCodeMirror.setValue(editorValue);
    bonfireExecute();
});
