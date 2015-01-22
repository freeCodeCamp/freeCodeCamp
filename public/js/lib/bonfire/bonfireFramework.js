var widgets = [];
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "javascript",
    theme: 'monokai',
    runnable: true,
    lint: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    cursorHeight: 0.85,
    scrollbarStyle: 'null',
    lineWrapping: true,
    gutters: ["CodeMirror-lint-markers"],
    onKeyEvent: doLinting,
    extraKeys : {
        "Ctrl-Enter" : function() {
            bonfireExecute();
            return false;
        }
    }
});
var editor = myCodeMirror;
myCodeMirror.setValue('/*Welcome to Bonfire, Free Code Camp\'s future CoderByte replacement.\n' +
'Please feel free to use Bonfire as an in-browser playground and linting tool.\n' +
'Note that you can also write tests using Chai.js by using the keywords assert and expect */\n\n' +
'function test() {\n' +
'  assert(2 !== 3, "2 is not equal to 3");\n' +
'  return [1,2,3].map(function(elem) {\n' +
'    return elem * elem;\n' +
'  });\n' +
'}\n' +
'expect(test()).to.be.a("array");\n\n' +
'assert.deepEqual(test(), [1,4,9]);\n\n' +
'test();');
//myCodeMirror.setSize("100%", "100%");

var codeOutput = CodeMirror.fromTextArea(document.getElementById("codeOutput"), {
    lineNumbers: false,
    mode: "text",
    theme: 'monokai',
    readOnly: 'nocursor',
    lineWrapping: true
});
codeOutput.setValue('/**\n' +
                    ' * Your output will go here. Console.log() -type statements\n' +
                    ' * will appear in your browser\'s javascript console.\n' +
                    ' */');
codeOutput.setSize("100%", "100%");
var info = editor.getScrollInfo();
var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, "local").top;
if (info.top + info.clientHeight < after)
    editor.scrollTo(null, after - info.clientHeight + 3);
var doLinting = function () {
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

var replaceQuotesInTests = function() {
    tests.forEach(function(elt, ix, arr) {
        arr[ix].text = arr[ix].text.replace(/\"/g,'\'');
    });
};

var tests;
var testSalt = Math.random();

var scrapeTests = function(userJavaScript) {
    var counter = 0;
    var regex = new RegExp(/(expect(\s+)?\(.*\;)|(assert(\s+)?\(.*\;)|(assert\.\w.*\;)/);
    var match = regex.exec(userJavaScript);
    while (match != null) {
        var replacement = '//' + counter + testSalt;
        userJavaScript = userJavaScript.substring(0, match.index)
                + replacement
                + userJavaScript.substring(match.index + match[0].length);

        if (!tests) tests = [];
        tests.push({"text": match[0], "line": counter, "err": null});
        counter++;
        match = regex.exec(userJavaScript);
    }
    if (tests) replaceQuotesInTests();
    return userJavaScript;
};

function removeComments(userJavaScript) {
    var regex = new RegExp(/(\/\*[^(\*\/)]*\*\/)|\/\/[^\n]*/g);
    return userJavaScript.replace(regex, '');
}

function removeLogs(userJavaScript) {
    return userJavaScript.replace(/(console\.[\w]+\s*\(.*\;)/g, '');
}

$('#submitButton').on('click', function () {
    bonfireExecute();
});

function bonfireExecute() {
    tests = null;
    $('#codeOutput').empty();
    var userJavaScript = myCodeMirror.getValue();
    userJavaScript = removeComments(userJavaScript);
    userJavaScript = scrapeTests(userJavaScript);
    submit(userJavaScript, function(cls, message) {
        if (cls) {
            codeOutput.setValue(message.error);
            runTests('Error', null);
        } else {
            codeOutput.setValue(message.output);
            message.input = removeLogs(message.input);
            runTests(null, message);
        }
    });
}

var pushed = false;
var createTestDisplay = function() {
    if (pushed) {
        tests.pop();
    }
    for (var i = 0; i < tests.length;i++) {
        var test = tests[i];
        var testDoc = document.createElement("li");
        $(testDoc)
            .addClass('list-group-item')
            .addClass('well img-rounded')
            .addClass('well-sm')
        if (test.err != null) {
            $(testDoc)
                .html(test.text + "\n" + test.err)
                .css("background-color", 'rgba(255,0,0,.2)')
                .prependTo($('#testSuite'));
        } else {
            $(testDoc)
                .html(test.text)
                .css('background-color', 'rgba(0,255,0,.2)')
                .appendTo($('#testSuite'));
        }
    };
};
var assert = chai.assert;
var expect = chai.expect;
var reassembleTest = function(test, data) {
    var lineNum = test.line;
    var regexp = new RegExp("\/\/" + lineNum + testSalt);
    return data.input.replace(regexp, test.text);
};
var runTests = function(err, data) {
    pushed = false;
    $('#testSuite').children().remove();
    if (err && tests) {
        tests = [{text:"Program Execution Failure", err: "No tests were run."}];
        createTestDisplay();
    } else if (tests) {
        tests.push(false);
        pushed = true;
        tests.forEach(function(test, ix, arr){
            try {
                if (test) {
                    var output = eval(reassembleTest(test, data));
                }
            } catch(error) {
                console.log(error);
                arr[ix].err = error.name + ":" + error.message;
                console.log(arr);
           } finally {
                if (!test) {
                    //window.setTimeout(function() {createTestDisplay()},2000);
                    createTestDisplay();
                }
            }
        });
    }
};