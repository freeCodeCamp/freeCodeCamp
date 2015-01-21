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
'Please feel free to use Bonfire as an in-browser playground and linting tool.*/\n\n\n' +
'function test() {\n' +
'  assert(2 === 3, "hello");\n' +
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
                    ' * Your output will go here. Console statements\n' +
                    ' * will appear in your developer console!\n' +
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
var testWords = ["expect", "assert"];
var testSalt = Math.random();

var scrapeTests = function(js) {
    var counter = 0;
    for (var i = 0; i < testWords.length; i++) {
        var regex = new RegExp(testWords[i] + "[^;]+;",'g');
        var match = regex.exec(js);
        while (match != null) {
            var replacement = '//' + counter + testSalt;
            js = js.substring(0, match.index) 
                    + replacement 
                    + js.substring(match.index + match[0].length);

            if (!tests) tests = [];
            tests.push({"text": match[0], "line": counter, "err": null});
            counter++;
            match = regex.exec(js);
        }
    }
    replaceQuotesInTests();
    return js;
};

$('#submitButton').on('click', function () {
    bonfireExecute();
});

function bonfireExecute() {
    tests = undefined;
    $('#codeOutput').empty();
    var js = myCodeMirror.getValue();
    js = scrapeTests(js);
    console.log(js);
    submit(js, function(cls, message) {
        if (cls) {
            codeOutput.setValue(message.error);
            runTests('Error', null);
        } else {
            codeOutput.setValue(message.output);
            runTests(null, message);
        }
    });
}

var pushed = false;
var createTestDisplay = function() {
    if (pushed) {
        tests.pop();
    }
    console.log(tests);
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


// var assert = chai.assert;
// var testResults = [];
// $('#runTests').on('click', function () {
//     clearTestOutput();
//     var testCaseList = [],
//         jsCode = myCodeMirror.getValue();
//     getTestSuite().each(function () {
//         testCaseList.push([$(this).data("input"), $(this).data("output"), $(this)]);
//     });
//     testCaseList.forEach(function (input) {
//         var testCode = jsCode + "\n\n" + input[0] + ";";
//         //TODO use plugin for this with the rest as a callback?
//         var output = eval(testCode);
//         testEquality(output, input);
//     });
//     // some timeout here?
//     if (testResults.length === testCaseList.length) {
//         var sum = testResults.reduce(function (a, b) {
//             return a + b
//         });
//         prependTestOutput("======Testing========\n" + Math.round(100 * sum / testResults.length) + "% tests passed\n");
//     }
// });
// var testEquality = function (output, input) {
//     try {
//         switch (typeof output) {
//             case 'object':
//                 assert.deepEqual(output, input[1]);
//                 break;
//             case 'string':
//                 assert(output.localeCompare(input[1]));
//                 break
//             default:
//                 assert.equal(output, input[1]);
//         }
//         appendTestOutput("\n" + createTestString(input[0], input[1]) + "\nTest passed!\n");
//         input[2].css("background-color", "rgba(0,255,0,.2)");
//         testResults.push(1);
//     } catch (err) {
//         input[2].css("background-color", "rgba(255,0,0,.2)");
//         appendTestOutput(createTestString(input[0], input[1]));
//         appendTestOutput("Test failed: \nOutput was: " + output + "\nType of output was: " + (typeof output));
//         testResults.push(0);
//     }
// };
//$('#sideBySide').on('click', function () {
//    var main = $('#mainEditorPanel');
//    if (main.hasClass('col-md-12')) {
//        replaceColClz(main, 'md', 12, 6);
//        replaceColClz(main, 'sm', 12, 6);
//        $(this).text("Original Layout")
//    } else {
//        replaceColClz(main, 'md', 6, 12);
//        replaceColClz(main, 'sm', 6, 12);
//        $(this).text("Tests side by side")
//    }
//});
//var replaceColClz = function (elt, size, oldVal, newVal) {
//    elt.removeClass('col-' + size + '-' + oldVal);
//    elt.addClass('col-' + size + '-' + newVal);
//};
//var getTestSuite = function () {
//    return $('#testSuite').find('li');
//};
//var clearTestOutput = function () {
//    testOutput.setValue("");
//};
var appendTestOutput = function (msg) {
    writeToTest(msg, CodeMirror.Pos(editor.lastLine()));
};
var prependTestOutput = function (msg) {
    writeToTest(msg, CodeMirror.Pos(editor.firstLine()));
};
var writeToTest = function (msg, location) {
    testOutput.replaceRange("\n" + msg, location);
};
//$('#addTest').on('click', function () {
//    var functionName = $('#testFunctionName option:selected').text();
//    var inputs = [];
//    var output;
//    $('#testInputs').find('input').each(function () {
//        if ($(this).val() != null && $(this).val().length !== 0) {
//            inputs.push($(this).val());
//        } else {
//            //var keepGoing = prompt("You have submitted a test with empty input.  Enter yes to continue.");
//            if (/yes/.test(keepGoing.toLowerCase())) {
//                inputs.push($(this).val());
//            } else {
//                return;
//            }
//        }
//    });
//    output = $('#testOutputs').find('input').val();
//    var functionCall = functionName + "(" + inputs.join(",") + ")";
//    var test = document.createElement("li");
//    $(test)
//        .addClass('list-group-item')
//        .addClass('well')
//        .addClass('well-sm')
//        .attr({"data-input": functionCall, "data-output": output})
//        .html(createTestString(functionCall, output))
//        .appendTo($('#testSuite'));
//    var closeLink = document.createElement('i');
//    var closeSpan = document.createElement('span');
//    $(closeSpan)
//        .addClass("glyphicon glyphicon-remove-sign")
//        //.css("float", "right")
//        .click(function () {
//            //var input = prompt("This will remove the test permanently.\n If you want to do this, type delete");
//            if (/delete/.test(input.toLowerCase())) {
//                $(this).parent().remove();
//            }
//        }).appendTo($(test));
//    //blank out the form
//    $("#testCreateForm").find("input[type=text]").val("");
//});
//var createTestString = function (inputs, output) {
//    return "Input: " + inputs + "\nExpect:" + output;
//};
//var testOutput = CodeMirror.fromTextArea(document.getElementById("testOutput"), {
//    lineNumbers: false,
//    mode: "javascript",
//    theme: 'monokai',
//    readOnly: 'nocursor'
//});
//testOutput.setSize("100%", 200);
//var createOptions = function (re, code) {
//    var m = re.exec(code);
//    while (m != null) {
//        var functionName = m[1];
//        if (functionName !== undefined) {
//            var option = document.createElement('option');
//            $(option)
//                .html(functionName)
//                .attr({"data-args": m[2]})
//                .appendTo($('#testFunctionName'));
//        }
//        m = re.exec(code);
//    }
//};
// $('#testFunctionName').on('change', function () {
//     $('#testInputs').children().remove();
//     $('#testOutputs').children().remove();
//     var args = $('#testFunctionName option:selected').data("args");
//     var argArray = args.split(",");
//     argArray.forEach(function (arg) {
//         if (arg.length > 0) {
//             createInputField('#testInputs', arg);
//         }
//     });
//     createInputField('#testOutputs', 'Expected output');
// });
// var createInputField = function (className, arg) {
//     var inputDiv = document.createElement('div');
//     $(inputDiv)
//         .addClass("control-group")
//         .appendTo($(className));
//     var inputLabel = document.createElement('label');
//     $(inputLabel)
//         .attr("for", "inputs")
//         .html(arg)
//         .addClass("col-xs-4 control-label")
//         .appendTo($(inputDiv));
//     var textDiv = document.createElement('div');
//     $(textDiv)
//         .addClass("col-xs-8 controls")
//         .appendTo($(inputDiv));
//     var inputArea = document.createElement('input');
//     $(inputArea)
//         .attr("type", "text")
//         .addClass("form-control")
//         .appendTo($(inputDiv));
//     $(document.createElement("br")).appendTo($(textDiv));
// };
// $('#testFunctionName').on('focus', function () {
//     $('#testFunctionName').children().remove();
//     var blankOpt = document.createElement("option");
//     $(blankOpt).addClass("selected").appendTo($('#testFunctionName'));
//     var re = /function\s+(\w+)\s*\(([\w\s,]*)\)/g;
//     var code = myCodeMirror.getValue();
//     createOptions(re, code);
//     re = /var (\w+)\s*=\s*function\s*\(([\s\w,]*)\)/g;
//     createOptions(re, code);
// });
// $('#hideTestCreate').on('click', function () {
//     var testForm = $("#testCreateForm");
//     if (testForm.is(":visible")) {
//         testForm.hide();
//         $(this).text("Create more tests");
//     } else {
//         testForm.show();
//         $(this).text("Hide test creation dialogue")
//     }
// });