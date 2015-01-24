var widgets = [];
var myCodeMirror = CodeMirror.fromTextArea(document.getElementById("codeEditor"), {
    lineNumbers: true,
    mode: "javascript",
    theme: 'monokai',
    runnable: true,
    lint: true,
    matchBrackets: true,
    autoCloseBrackets: true,
    cursorHeight: 1,
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


// Default value for editor if one isn't provided in (i.e. a challenge)
var nonChallengeValue = '/*Welcome to Bonfire, Free Code Camp\'s future CoderByte replacement.\n' +
    'Please feel free to use Bonfire as an in-browser playground and linting tool.\n' +
    'Note that you can also write tests using Chai.js\n' +
    ' by using the keywords assert and expect */\n\n' +
    'function test() {\n' +
    '  assert(2 !== 3, "2 is not equal to 3");\n' +
    '  return [1,2,3].map(function(elem) {\n' +
    '    return elem * elem;\n' +
    '  });\n' +
    '}\n' +
    'expect(test()).to.be.a("array");\n\n' +
    'assert.deepEqual(test(), [1,4,9]);\n\n' +
    'var foo = test();\n' +
    'foo.should.be.a("array");\n\n' +
    'test();';

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

var editorValue;


var challengeSeed = challengeSeed || null;
var tests = tests || [];
var challengeEntryPoint = challengeEntryPoint || null;


if (challengeSeed !== null) {
    editorValue = challengeSeed + '\n\n' + challengeEntryPoint;
} else {
    editorValue = nonChallengeValue;
}


myCodeMirror.setValue(editorValue);

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

$('#submitButton').on('click', function () {
    bonfireExecute();
});

function bonfireExecute() {
    userTests= null;
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

var replaceQuotesInTests = function() {
    userTests.forEach(function(elt, ix, arr) {
        arr[ix].text = arr[ix].text.replace(/\"/g,'\'');
    });
};

var userTests;
var testSalt = Math.random();


var scrapeTests = function(userJavaScript) {

    // insert tests from mongo
    for (var i = 0; i < tests.length; i++) {
        userJavaScript += '\n' + tests[i];
    }

    var counter = 0;
    var regex = new RegExp(/(expect(\s+)?\(.*\;)|(assert(\s+)?\(.*\;)|(assert\.\w.*\;)|(.*\.should\..*\;)/);
    var match = regex.exec(userJavaScript);
    while (match != null) {
        var replacement = '//' + counter + testSalt;
        userJavaScript = userJavaScript.substring(0, match.index)
        + replacement
        + userJavaScript.substring(match.index + match[0].length);

        if (!userTests) {
            userTests= [];
        }
        userTests.push({"text": match[0], "line": counter, "err": null});
        counter++;
        match = regex.exec(userJavaScript);
    }

    if (userTests)  {
        replaceQuotesInTests();
    }
    return userJavaScript;
};

function removeComments(userJavaScript) {
    var regex = new RegExp(/(\/\*[^(\*\/)]*\*\/)|\/\/[^\n]*/g);
    return userJavaScript.replace(regex, '');
}

function removeLogs(userJavaScript) {
    return userJavaScript.replace(/(console\.[\w]+\s*\(.*\;)/g, '');
    return userJavaScript;
}

var pushed = false;
var createTestDisplay = function() {
    if (pushed) {
        userTests.pop();
    }
    for (var i = 0; i < userTests.length;i++) {
        var test = userTests[i];
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
        userTests= [{text:"Program Execution Failure", err: "NouserTestswere run."}];
        createTestDisplay();
    } else if (userTests) {

        userTests.push(false);
        pushed = true;
        userTests.forEach(function(test, ix, arr){
            try {
                if (test) {
                    var output = eval(reassembleTest(test, data));
                }
            } catch(error) {
                allTestsPassed = false;
                arr[ix].err = error.name + ":" + error.message;
            } finally {
                if (!test) {
                    createTestDisplay();
                }
            }
        });
    }
    if (allTestsPassed) {
        allTestsPassed = false;
        showCompletion();
    }
};

function showCompletion() {
    $('#complete-bonfire-dialog').modal('show');
}