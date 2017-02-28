/**
 * Tests for the parser/tokenizer
 */

"use strict";

var JSHINT  = require("../..").JSHINT;
var fs    = require('fs');
var TestRun = require("../helpers/testhelper").setup.testRun;
var path    = require("path");

exports.unsafe = function (test) {
  var code = [
    "var a\u000a = 'Here is a unsafe character';",
  ];

  TestRun(test)
    .addError(1, "This character may get silently deleted by one or more browsers.")
    .test(code, {es3: true});

  test.done();
};

exports.peekOverDirectives = function (test) {
  var code = fs.readFileSync(__dirname + "/fixtures/peek-over-directives.js", "utf8");

  TestRun(test)
    // Within object literal
    .addError(18, "This character may get silently deleted by one or more browsers.")
    .addError(18, "Unexpected control character in regular expression.")
    .addError(19, "Unexpected escaped character '<' in regular expression.")
    .addError(20, "Line is too long.")
    .addError(21, "Control character in string: <non-printable>.")
    .addError(21, "This character may get silently deleted by one or more browsers.")
    .addError(22, "'Octal integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(23, "'Binary integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "'template literal syntax' is only available in ES6 (use 'esversion: 6').")
    .addError(25, "'Sticky RegExp flag' is only available in ES6 (use 'esversion: 6').")

    // Within array literal:
    .addError(44, "This character may get silently deleted by one or more browsers.")
    .addError(44, "Unexpected control character in regular expression.")
    .addError(45, "Unexpected escaped character '<' in regular expression.")
    .addError(46, "Line is too long.")
    .addError(47, "Control character in string: <non-printable>.")
    .addError(47, "This character may get silently deleted by one or more browsers.")
    .addError(48, "'Octal integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(49, "'Binary integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(50, "'template literal syntax' is only available in ES6 (use 'esversion: 6').")
    .addError(51, "'Sticky RegExp flag' is only available in ES6 (use 'esversion: 6').")

    // Within grouping operator:
    .addError(70, "This character may get silently deleted by one or more browsers.")
    .addError(70, "Unexpected control character in regular expression.")
    .addError(71, "Unexpected escaped character '<' in regular expression.")
    .addError(72, "Line is too long.")
    .addError(73, "Control character in string: <non-printable>.")
    .addError(73, "This character may get silently deleted by one or more browsers.")
    .addError(74, "'Octal integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(75, "'Binary integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(76, "'template literal syntax' is only available in ES6 (use 'esversion: 6').")
    .addError(77, "'Sticky RegExp flag' is only available in ES6 (use 'esversion: 6').")
    .test(code);

  test.done();
};

exports.other = function (test) {
  var code = [
    "\\",
    "!",
  ];

  TestRun(test)
    .addError(1, "Unexpected '\\'.")
    .addError(2, "Unexpected early end of program.")
    .addError(2, "Unrecoverable syntax error. (100% scanned).")
    .test(code, {es3: true});

  // GH-818
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw ')'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("if (product < ) {}", {es3: true});

  // GH-2506
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw ';'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("typeof;");

  TestRun(test)
    .addError(1, "Unrecoverable syntax error. (0% scanned).")
    .test("}");

  test.done();
};

exports.confusingOps = function (test) {
  var code = [
    "var a = 3 - -3;",
    "var b = 3 + +3;",
    "a = a - --a;",
    "a = b + ++b;",
    "a = a-- - 3;", // this is not confusing?!
    "a = a++ + 3;", // this is not confusing?!
  ];

  var run = TestRun(test)
    .addError(1, "Confusing minuses.")
    .addError(2, "Confusing plusses.")
    .addError(3, "Confusing minuses.")
    .addError(4, "Confusing plusses.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.division = function (test) {
  var run;
  var code = [
    'var a=4,b=4,i=2;',
    'a/=b+2;',
    'a/=b/2;',
    'a/=b/i;',
    '/*jshint expr:true*/',
    '/=b/i;' // valid standalone RegExp expression
  ];

  run = TestRun(test);
  run.test(code);

  test.done();
};

exports.plusplus = function (test) {
  var run;
  var code = [
    "var a = ++[2];",
    "var b = --(2);",
  ];

  run = TestRun(test)
    .addError(1, "Unexpected use of '++'.")
    .addError(2, "Unexpected use of '--'.");
  run.test(code, { plusplus: true, es3: true });
  run.test(code, { plusplus: true }); // es5
  run.test(code, { plusplus: true, esnext: true });
  run.test(code, { plusplus: true, moz: true });

  run = TestRun(test)
    .addError(2, "Bad operand.");
  run.test(code, { plusplus: false, es3: true });
  run.test(code, { plusplus: false }); // es5
  run.test(code, { plusplus: false, esnext: true });
  run.test(code, { plusplus: false, moz: true });

  test.done();
};

exports.assignment = function (test) {
  var code = [
    "function test() {",
    "  arguments.length = 2;",
    "  arguments[0] = 3;",
    "  arguments.length &= 2;",
    "  arguments[0] >>= 3;",
    "}",
    "function test2() {",
    "  \"use strict\";",
    "  arguments.length = 2;",
    "  arguments[0] = 3;",
    "  arguments.length &= 2;",
    "  arguments[0] >>= 3;",
    "}",
    "a() = 2;",
  ];

  var run = TestRun(test)
    .addError(2, "Bad assignment.")
    .addError(3, "Bad assignment.")
    .addError(4, "Bad assignment.")
    .addError(5, "Bad assignment.")
    .addError(14, "Bad assignment.");

  run.test(code, { plusplus: true, es3: true });
  run.test(code, { plusplus: true }); // es5
  run.test(code, { plusplus: true, esnext: true });
  run.test(code, { plusplus: true, moz: true });

  test.done();
};

exports.relations = function (test) {
  var code = [
    "var a = 2 === NaN;",
    "var b = NaN == 2;",
    "var c = !2 < 3;",
    "var c = 2 < !3;",
    "var d = (!'x' in obj);",
    "var e = (!a === b);",
    "var f = (a === !'hi');",
    "var g = (!2 === 1);",
    "var h = (![1, 2, 3] === []);",
    "var i = (!([]) instanceof Array);"
  ];

  var run = TestRun(test)
    .addError(1, "Use the isNaN function to compare with NaN.")
    .addError(2, "Use the isNaN function to compare with NaN.")
    .addError(3, "Confusing use of '!'.", {character : 9})
    .addError(4, "Confusing use of '!'.", {character : 13})
    .addError(5, "Confusing use of '!'.", {character : 10})
    .addError(6, "Confusing use of '!'.", {character : 10})
    .addError(7, "Confusing use of '!'.", {character : 16})
    .addError(8, "Confusing use of '!'.", {character : 10})
    .addError(9, "Confusing use of '!'.", {character : 10})
    .addError(10, "Confusing use of '!'.", {character : 10});
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.options = function (test) {
  var code = [
    "/*member a*/",
    "/*members b*/",
    "var x; x.a.b.c();",
    "/*jshint ++ */",
    "/*jslint indent: 0 */",
    "/*jslint indent: -2 */",
    "/*jslint indent: 100.4 */",
    "/*jslint maxlen: 200.4 */",
    "/*jslint maxerr: 300.4 */",
    "/*jslint maxerr: 0 */",
    "/*jslint maxerr: 20 */",
    "/*member c:true */",
    "/*jshint d:no */",
    "/*global xxx*/",
    "xxx = 2;",
    "/*jshint relaxing: true */",
    "/*jshint toString: true */",
  ];

  var run = TestRun(test)
    .addError(3, "Unexpected /*member 'c'.")
    .addError(4, "Bad option: '++'.")
    .addError(5, "Expected a small integer or 'false' and instead saw '0'.")
    .addError(6, "Expected a small integer or 'false' and instead saw '-2'.")
    .addError(7, "Expected a small integer or 'false' and instead saw '100.4'.")
    .addError(8, "Expected a small integer or 'false' and instead saw '200.4'.")
    .addError(9, "Expected a small integer or 'false' and instead saw '300.4'.")
    .addError(10, "Expected a small integer or 'false' and instead saw '0'.")
    .addError(13, "Bad option: 'd'.")
    .addError(15, "Read only.")
    .addError(16, "Bad option: 'relaxing'.")
    .addError(17, "Bad option: 'toString'.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  TestRun(test).test(fs.readFileSync(__dirname + "/fixtures/gh988.js", "utf8"));

  test.done();
};

exports.emptyDirectives = function (test) {
  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* global */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* global : */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* global -: */');

  TestRun(test)
    .test('/* global foo, bar, baz, */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* globals */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* globals : */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* globals -: */');

  TestRun(test)
    .test('/* globals foo, bar, baz, */');

  TestRun(test)
    .addError(1, "Bad option value.")
    .test('/* exported */');

  TestRun(test)
    .test('/* exported foo, bar, baz, */');

  test.done();
};

exports["jshint option comments single line"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-1.js", "utf8");

  TestRun(test).test(src);

  test.done();
};

exports["jshint option comments single line, leading and trailing space"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-2.js", "utf8");

  TestRun(test).test(src);

  test.done();
};

exports["jshint option comments multi line"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-3.js", "utf8");

  TestRun(test).test(src);

  test.done();
};

exports["jshint option comments multi line, leading and trailing space"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-4.js", "utf8");

  TestRun(test)
    .addError(4, "'foo' is not defined.")
    .test(src);

  test.done();
};

exports["jshint option comments multi line/option"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-5.js", "utf8");

  TestRun(test)
    .addError(3, "'foo' is not defined.")
    .test(src);

  test.done();
};

exports["jshint option comments multi line/option, leading and trailing space"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh1768-6.js", "utf8");

  TestRun(test)
    .addError(4, "'foo' is not defined.")
    .test(src);

  test.done();
};

exports.shebang = function (test) {
  var code = [
    "#!test",
    "var a = 'xxx';",
    "#!test"
  ];

  var run = TestRun(test)
    .addError(3, "Expected an identifier and instead saw '#'.")
    .addError(3, "Expected an operator and instead saw '!'.")
    .addError(3, "Expected an assignment or function call and instead saw an expression.")
    .addError(3, "Missing semicolon.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.shebangImpliesNode = function (test) {
  var code = [
    "#!usr/bin/env node",
    "require('module');",
  ];

  TestRun(test).test(code);
  test.done();
};

exports.numbers = function (test) {
  /*jshint maxlen: 300*/

  var code = [
    "var a = 10e307;",
    "var b = 10e308;",
    "var c = 0.03 + 0.3 + 3.0 + 30.00;",
    "var d = 03;",
    "var e = .3;",
    "var f = 0xAAg;",
    "var g = 0033;",
    "var h = 3.;",
    "var i = 3.7.toString();",
    "var j = 1e-10;", // GH-821
    "var k = 0o1234567;",
    "var l = 0b101;",
    "var m = 0x;",
    "var n = 09;",
    "var o = 1e-A;",
    "var p = 1/;",
    "var q = 1x;"
  ];

  TestRun(test)
    .addError(2, "Bad number '10e308'.")
    .addError(5, "A leading decimal point can be confused with a dot: '.3'.")
    .addError(6, "Unexpected '0'.")
    .addError(7, "Expected an identifier and instead saw 'var'.")
    .addError(7, "Missing semicolon.")
    .addError(7, "Don't use extra leading zeros '0033'.")
    .addError(8, "A trailing decimal point can be confused with a dot: '3.'.")
    .addError(9, "A dot following a number can be confused with a decimal point.")
    .addError(11, "'Octal integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(12, "'Binary integer literal' is only available in ES6 (use 'esversion: 6').")
    .addError(13, "Bad number '0x'.")
    .addError(15, "Unexpected '1'.")
    .addError(16, "Expected an identifier and instead saw ';'.")
    .addError(16, "Expected an identifier and instead saw 'var'.")
    .addError(16, "Missing semicolon.")
    .addError(17, "Unexpected '1'.")
    .addError(17, "Unexpected early end of program.")
    .addError(17, "Unrecoverable syntax error. (100% scanned).")
    .test(code, {es3: true});

  // Octals are prohibited in strict mode.
  TestRun(test)
    .addError(3, "Octal literals are not allowed in strict mode.")
    .test([
      "(function () {",
      "'use strict';",
      "return 045;",
      "}());"
    ]);

  // GitHub #751 - an expression containing a number with a leading decimal point should be parsed in its entirety
  TestRun(test)
    .addError(1, "A leading decimal point can be confused with a dot: '.3'.")
    .addError(2, "A leading decimal point can be confused with a dot: '.3'.")
    .test([
      "var a = .3 + 1;",
      "var b = 1 + .3;",
    ]);

  TestRun(test)
    .addError(5, "Missing semicolon.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Missing semicolon.")
    .addError(6, "Expected an assignment or function call and instead saw an expression.")
    .test([
      "var a = 0o1234567;",
      "var b = 0O1234567;",
      "var c = 0b101;",
      "var d = 0B101;",
      "var e = 0o12345678;",
      "var f = 0b1012;",
    ], {esnext: true});

  TestRun(test)
    .test([
      "// jshint esnext: true",
      "var a = 0b0 + 0o0;"
    ]);

  test.done();
};

exports.comments = function (test) {
  var code = [
    "/*",
    "/* nested */",
    "*/",
    "/* unclosed ..",
  ];

  var run = TestRun(test)
    .addError(3, "Unbegun comment.")
    .addError(4, "Unclosed comment.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  var src = "/* this is a comment /* with nested slash-start */";
  TestRun(test).test(src);
  TestRun(test).test(fs.readFileSync(__dirname + "/fixtures/gruntComment.js", "utf8"));

  TestRun(test)
    .addError(1, "Unmatched '{'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("({");

  test.done();
};

exports.regexp = function (test) {
  var code = [
    "var a1 = /\\\x1f/;",
    "var a2 = /[\\\x1f]/;",
    "var b1 = /\\</;", // only \< is unexpected?!
    "var b2 = /[\\<]/;", // only \< is unexpected?!
    "var c = /(?(a)b)/;",
    "var d = /)[--aa-b-cde-]/;",
    "var e = /[]/;",
    "var f = /[^]/;",
    "var g = /[a^[]/;",

    // FIXME: Firefox doesn't handle [a-\\s] well.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=813249
    "", // "var h = /[a-\\s-\\w-\\d\\x10-\\x20--]/;",

    "var i = /[/-a1-/]/;",
    "var j = /[a-<<-3]./;",
    "var k = /]}/;",
    "var l = /?(*)(+)({)/;",
    "var m = /a{b}b{2,c}c{3,2}d{4,?}x{30,40}/;",
    "var n = /a??b+?c*?d{3,4}? a?b+c*d{3,4}/;",
    "var o = /a\\/*  [a-^-22-]/;",
    "var p = /(?:(?=a|(?!b)))/;",
    "var q = /=;/;",
    "var r = /(/;",
    "var s = /(((/;",
    "var t = /x/* 2;",
    "var u = /x/;",
    "var w = v + /s/;",
    "var x = w - /s/;",
    "var y = typeof /[a-z]/;", // GH-657
    "var z = /a/ instanceof /a/.constructor;", // GH-2773
    "var v = /dsdg;"
  ];

  var run = TestRun(test)
    .addError(1, "This character may get silently deleted by one or more browsers.")
    .addError(1, "Unexpected control character in regular expression.")
    .addError(2, "This character may get silently deleted by one or more browsers.")
    .addError(2, "Unexpected control character in regular expression.")
    .addError(3, "Unexpected escaped character '<' in regular expression.")
    .addError(4, "Unexpected escaped character '<' in regular expression.")
    .addError(5, "Invalid regular expression.")
    .addError(6, "Invalid regular expression.")
    .addError(11, "Invalid regular expression.")
    .addError(12, "Invalid regular expression.")
    .addError(14, "Invalid regular expression.")
    .addError(15, "Invalid regular expression.")
    .addError(17, "Invalid regular expression.")
    .addError(20, "Invalid regular expression.")
    .addError(21, "Invalid regular expression.")
    .addError(28, "Unclosed regular expression.")
    .addError(28, "Unrecoverable syntax error. (100% scanned).");

  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  TestRun(test).test("var a = `${/./}${/./}`;", { esversion: 6 });


  // Pre Regular Expression Punctuation
  //  (See: token method, create function in lex.js)
  //
  // "."
  TestRun(test)
    .addError(1, "A trailing decimal point can be confused with a dot: '10.'.")
    .test("var y = 10. / 1;", {es3: true});
  TestRun(test)
    .addError(1, "A trailing decimal point can be confused with a dot: '10.'.")
    .test("var y = 10. / 1;", {}); // es5
  TestRun(test)
    .addError(1, "A trailing decimal point can be confused with a dot: '10.'.")
    .test("var y = 10. / 1;", {esnext: true});
  TestRun(test)
    .addError(1, "A trailing decimal point can be confused with a dot: '10.'.")
    .test("var y = 10. / 1;", {moz: true});

  // ")"
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {es3: true});
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {}); // es5
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {esnext: true});
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {moz: true});

  // "~"
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {es3: true});
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {}); // es5
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {esnext: true});
  TestRun(test).test("var y = Math.sqrt(16) / 180;", {moz: true});


  // "]" (GH-803)
  TestRun(test).test("var x = [1]; var y = x[0] / 180;", {es3: true});
  TestRun(test).test("var x = [1]; var y = x[0] / 180;", {}); // es5
  TestRun(test).test("var x = [1]; var y = x[0] / 180;", {esnext: true});
  TestRun(test).test("var x = [1]; var y = x[0] / 180;", {moz: true});

  // "++" (GH-1787)
  TestRun(test).test("var a = 1; var b = a++ / 10;", {es3: true});
  TestRun(test).test("var a = 1; var b = a++ / 10;", {}); // es5
  TestRun(test).test("var a = 1; var b = a++ / 10;", {esnext: true});
  TestRun(test).test("var a = 1; var b = a++ / 10;", {moz: true});

  // "--" (GH-1787)
  TestRun(test).test("var a = 1; var b = a-- / 10;", {es3: true});
  TestRun(test).test("var a = 1; var b = a-- / 10;", {}); // es5
  TestRun(test).test("var a = 1; var b = a-- / 10;", {esnext: true});
  TestRun(test).test("var a = 1; var b = a-- / 10;", {moz: true});

  test.done();
};

exports.testRegexRegressions = function (test) {
  // GH-536
  TestRun(test).test("str /= 5;", {es3: true}, { str: true });
  TestRun(test).test("str /= 5;", {}, { str: true }); // es5
  TestRun(test).test("str /= 5;", {esnext: true}, { str: true });
  TestRun(test).test("str /= 5;", {moz: true}, { str: true });

  TestRun(test).test("str = str.replace(/=/g, '');",  {es3: true}, { str: true });
  TestRun(test).test("str = str.replace(/=/g, '');", {}, { str: true }); // es5
  TestRun(test).test("str = str.replace(/=/g, '');", {esnext: true}, { str: true });
  TestRun(test).test("str = str.replace(/=/g, '');", {moz: true}, { str: true });

  TestRun(test).test("str = str.replace(/=abc/g, '');", {es3: true}, { str: true });
  TestRun(test).test("str = str.replace(/=abc/g, '');", {}, { str: true }); // es5
  TestRun(test).test("str = str.replace(/=abc/g, '');", {esnext: true}, { str: true });
  TestRun(test).test("str = str.replace(/=abc/g, '');", {moz: true}, { str: true });

  // GH-538
  TestRun(test).test("var exp = /function(.*){/gi;", {es3: true});
  TestRun(test).test("var exp = /function(.*){/gi;", {}); // es5
  TestRun(test).test("var exp = /function(.*){/gi;", {esnext: true});
  TestRun(test).test("var exp = /function(.*){/gi;", {moz: true});

  TestRun(test).test("var exp = /\\[\\]/;", {es3: true});
  TestRun(test).test("var exp = /\\[\\]/;", {}); // es5
  TestRun(test).test("var exp = /\\[\\]/;", {esnext: true});
  TestRun(test).test("var exp = /\\[\\]/;", {moz: true});

  test.done();
};

exports.regexpSticky = function (test) {
 TestRun(test)
   .addError(1, "'Sticky RegExp flag' is only available in ES6 (use 'esversion: 6').")
   .test("var exp = /./y;", { esversion: 5 });

 TestRun(test).test("var exp = /./y;", { esversion: 6 });
 TestRun(test).test("var exp = /./gy;", { esversion: 6 });
 TestRun(test).test("var exp = /./yg;", { esversion: 6 });

 TestRun(test, "Invalid due to repetition")
   .addError(1, "Invalid regular expression.")
   .addError(2, "Invalid regular expression.")
   .test([
      "var exp = /./yy;",
      "var exp = /./ygy;"
      ], { esversion: 6 });

 TestRun(test, "Invalid due to other conditions")
   .addError(1, "Invalid regular expression.")
   .addError(2, "Invalid regular expression.")
   .test([
     "var exp = /./gyg;",
     "var exp = /?/y;"
     ] , { esversion: 6 });

 test.done();
};

exports.strings = function (test) {
  var code = [
    "var a = '\u0012\\r';",
    "var b = \'\\g\';",
    "var c = '\\u0022\\u0070\\u005C';",
    "var d = '\\\\';",
    "var e = '\\x6b..\\x6e';",
    "var f = '\\b\\f\\n\\/';",
    "var g = 'ax",
  ];

  var run = TestRun(test)
    .addError(1, "Control character in string: <non-printable>.", {character: 10})
    .addError(1, "This character may get silently deleted by one or more browsers.")
    .addError(7, "Unclosed string.")
    .addError(7, "Missing semicolon.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.badStrings = function (test) {
  var code = [
    "var a = '\\uNOTHEX';"
  ];

  var run = TestRun(test)
    .addError(1, "Unexpected 'uNOTH'.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.ownProperty = function (test) {
  var code = [
    "var obj = { hasOwnProperty: false };",
    "obj.hasOwnProperty = true;",
    "obj['hasOwnProperty'] = true;",
    "function test() { var hasOwnProperty = {}.hasOwnProperty; }"
  ];

  var run = TestRun(test)
    .addError(1, "'hasOwnProperty' is a really bad name.")
    .addError(2, "'hasOwnProperty' is a really bad name.")
    .addError(3, "'hasOwnProperty' is a really bad name.")
    .addError(3, "['hasOwnProperty'] is better written in dot notation.");
  run.test(code, {es3: true});
  run.test(code, {}); // es5
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  test.done();
};

exports.json = {};
exports.json.dflt = function (test) {
  var code = [
    '{',
    '  a: 2,',
    '  \'b\': "hallo\\"\\v\\x12\\\'world",',
    '  "c\\"\\v\\x12": \'4\',',
    '  "d": "4\\',
    '  ",',
    '  "e": 0x332,',
    '  "x": 0',
    '}',
  ];

  var run = TestRun(test)
    .addError(2, "Expected a string and instead saw a.")
    .addError(3, "Strings must use doublequote.")
    .addError(3, "Avoid \\v.")
    .addError(3, "Avoid \\x-.")
    .addError(3, "Avoid \\'.")
    .addError(4, "Avoid \\v.")
    .addError(4, "Avoid \\x-.")
    .addError(4, "Strings must use doublequote.")
    .addError(5, "Avoid EOL escaping.")
    .addError(7, "Avoid 0x-.");
  run.test(code, {multistr: true, es3: true});
  run.test(code, {multistr: true}); // es5
  run.test(code, {multistr: true, esnext: true});
  run.test(code, {multistr: true, moz: true});

  test.done();
};

exports.json.deep = function (test) {
  var code = [
    '{',
    '  "key" : {',
    '    "deep" : [',
    '      "value",',
    '      { "num" : 123, "array": [] }',
    '    ]',
    '  },',
    '  "single": ["x"],',
    '  "negative": -1.23e2',
    '}'
  ];

  var run = TestRun(test);

  run.test(code, {multistr: true, es3: true});
  run.test(code, {multistr: true}); // es5
  run.test(code, {multistr: true, esnext: true});
  run.test(code, {multistr: true, moz: true});

  test.done();
}

exports.json.errors = function (test) {
  var objTrailingComma = [
    '{ "key" : "value", }',
  ];

  var run1 = TestRun(test)
    .addError(1, "Unexpected comma.");

  run1.test(objTrailingComma, {multistr: true, es3: true});
  run1.test(objTrailingComma, {multistr: true}); // es5
  run1.test(objTrailingComma, {multistr: true, esnext: true});
  run1.test(objTrailingComma, {multistr: true, moz: true});

  var arrayTrailingComma = [
    '{ "key" : [,] }',
  ];

  var run2 = TestRun(test)
    .addError(1, "Illegal comma.")
    .addError(1, "Expected a JSON value.")
    .addError(1, "Unexpected comma.");

  run2.test(arrayTrailingComma, {multistr: true, es3: true});
  run2.test(arrayTrailingComma, {multistr: true}); // es5
  run2.test(arrayTrailingComma, {multistr: true, esnext: true});
  run2.test(arrayTrailingComma, {multistr: true, moz: true});

  var objMissingComma = [
    '{ "k1":"v1" "k2":"v2" }',
  ];

  var run3 = TestRun(test)
    .addError(1, "Expected '}' and instead saw 'k2'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run3.test(objMissingComma, {multistr: true, es3: true});
  run3.test(objMissingComma, {multistr: true}); // es5
  run3.test(objMissingComma, {multistr: true, esnext: true});
  run3.test(objMissingComma, {multistr: true, moz: true});

  var arrayMissingComma = [
    '[ "v1" "v2" ]',
  ];

  var run4 = TestRun(test)
    .addError(1, "Expected ']' and instead saw 'v2'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run4.test(arrayMissingComma, {multistr: true, es3: true});
  run4.test(arrayMissingComma, {multistr: true}); // es5
  run4.test(arrayMissingComma, {multistr: true, esnext: true});
  run4.test(arrayMissingComma, {multistr: true, moz: true});

  var objDoubleComma = [
    '{ "k1":"v1",, "k2":"v2" }',
  ];

  var run5 = TestRun(test)
    .addError(1, "Illegal comma.")
    .addError(1, "Expected ':' and instead saw 'k2'.")
    .addError(1, "Expected a JSON value.")
    .addError(1, "Expected '}' and instead saw ':'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run5.test(objDoubleComma, {multistr: true, es3: true});
  run5.test(objDoubleComma, {multistr: true}); // es5
  run5.test(objDoubleComma, {multistr: true, esnext: true});
  run5.test(objDoubleComma, {multistr: true, moz: true});

  var arrayDoubleComma = [
    '[ "v1",, "v2" ]',
  ];

  var run6 = TestRun(test)
    .addError(1, "Illegal comma.")
    .addError(1, "Expected a JSON value.");

  run6.test(arrayDoubleComma, {multistr: true, es3: true});
  run6.test(arrayDoubleComma, {multistr: true}); // es5
  run6.test(arrayDoubleComma, {multistr: true, esnext: true});
  run6.test(arrayDoubleComma, {multistr: true, moz: true});

  var objUnclosed = [
    '{ "k1":"v1"',
  ];

  var run7 = TestRun(test)
    .addError(1, "Expected '}' and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run7.test(objUnclosed, {multistr: true, es3: true});
  run7.test(objUnclosed, {multistr: true}); // es5
  run7.test(objUnclosed, {multistr: true, esnext: true});
  run7.test(objUnclosed, {multistr: true, moz: true});

  var arrayUnclosed = [
    '[ "v1"',
  ];

  var run8 = TestRun(test)
    .addError(1, "Expected ']' and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run8.test(arrayUnclosed, {multistr: true, es3: true});
  run8.test(arrayUnclosed, {multistr: true}); // es5
  run8.test(arrayUnclosed, {multistr: true, esnext: true});
  run8.test(arrayUnclosed, {multistr: true, moz: true});

  var objUnclosed2 = [
    '{',
  ];

  var run9 = TestRun(test)
    .addError(1, "Missing '}' to match '{' from line 1.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run9.test(objUnclosed2, {multistr: true, es3: true});
  run9.test(objUnclosed2, {multistr: true}); // es5
  run9.test(objUnclosed2, {multistr: true, esnext: true});
  run9.test(objUnclosed2, {multistr: true, moz: true});

  var arrayUnclosed2 = [
    '[',
  ];

  var run10 = TestRun(test)
    .addError(1, "Missing ']' to match '[' from line 1.")
    .addError(1, "Expected a JSON value.")
    .addError(1, "Expected ']' and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run10.test(arrayUnclosed2, {multistr: true, es3: true});
  run10.test(arrayUnclosed2, {multistr: true}); // es5
  run10.test(arrayUnclosed2, {multistr: true, esnext: true});
  run10.test(arrayUnclosed2, {multistr: true, moz: true});

  var objDupKeys = [
    '{ "k1":"v1", "k1":"v1" }',
  ];

  var run11 = TestRun(test)
    .addError(1, "Duplicate key 'k1'.");

  run11.test(objDupKeys, {multistr: true, es3: true});
  run11.test(objDupKeys, {multistr: true}); // es5
  run11.test(objDupKeys, {multistr: true, esnext: true});
  run11.test(objDupKeys, {multistr: true, moz: true});

  var objBadKey = [
    '{ k1:"v1" }',
  ];

  var run12 = TestRun(test)
    .addError(1, "Expected a string and instead saw k1.");

  run12.test(objBadKey, {multistr: true, es3: true});
  run12.test(objBadKey, {multistr: true}); // es5
  run12.test(objBadKey, {multistr: true, esnext: true});
  run12.test(objBadKey, {multistr: true, moz: true});

  var objBadValue = [
    '{ "noRegexpInJSON": /$^/ }',
  ];

  var run13 = TestRun(test)
    .addError(1, "Expected a JSON value.")
    .addError(1, "Expected '}' and instead saw '/$^/'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");

  run13.test(objBadValue, {multistr: true, es3: true});
  run13.test(objBadValue, {multistr: true}); // es5
  run13.test(objBadValue, {multistr: true, esnext: true});
  run13.test(objBadValue, {multistr: true, moz: true});

  test.done();
}

// Regression test for gh-2488
exports.json.semicolon = function (test) {
  TestRun(test)
    .test("{ \"attr\": \";\" }");

  TestRun(test)
    .test("[\";\"]");

  test.done();
};

exports.comma = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/comma.js", "utf8");

  TestRun(test)
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .addError(15, "Expected an assignment or function call and instead saw an expression.")
    .addError(15, "Missing semicolon.")
    .addError(20, "Expected an assignment or function call and instead saw an expression.")
    .addError(30, "Expected an assignment or function call and instead saw an expression.")
    .addError(35, "Expected an assignment or function call and instead saw an expression.")
    .addError(35, "Missing semicolon.")
    .addError(36, "Unexpected 'if'.")
    .addError(43, "Expected an assignment or function call and instead saw an expression.")
    .addError(43, "Missing semicolon.")
    .addError(44, "Unexpected '}'.")
    .test(src, {es3: true});

  // Regression test (GH-56)
  TestRun(test)
    .addError(4, "Expected an assignment or function call and instead saw an expression.")
    .test(fs.readFileSync(__dirname + "/fixtures/gh56.js", "utf8"));

  // Regression test (GH-363)
  TestRun(test)
    .addError(1, "Extra comma. (it breaks older versions of IE)")
    .test("var f = [1,];", {es3: true});

  test.done();
};

exports["gh-2587"] = function (test) {

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .addError(1, "Expected '===' and instead saw '=='.")
    .test([
    "true == if"
  ], {eqeqeq: true, eqnull: true});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .addError(1, "Expected '!==' and instead saw '!='.")
    .test([
    "true != if"
  ], {eqeqeq: true, eqnull: true});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .addError(1, "Use '===' to compare with 'true'.")
    .test([
    "true == if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .addError(1, "Use '!==' to compare with 'true'.")
    .test([
    "true != if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true === if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true !== if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true > if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true < if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true >= if"
  ], {});

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'if'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test([
    "true <= if"
  ], {});

  test.done();
};

exports.badAssignments = function (test) {
  TestRun(test)
    .addError(1, "Bad assignment.")
    .test([
      "a() = 1;"
    ], { });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test([
      "a.a() = 1;"
    ], { });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test([
      "(function(){}) = 1;"
    ], { });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test([
      "a.a() &= 1;"
    ], { });

  test.done();
};

exports.withStatement = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/with.js", "utf8");
  var run;

  run = TestRun(test)
    .addError(5, "Don't use 'with'.")
    .addError(13, "'with' is not allowed in strict mode.");
  run.test(src, {es3: true});
  run.test(src); // es5
  run.test(src, {esnext: true});
  run.test(src, {moz: true});

  run = TestRun(test)
    .addError(13, "'with' is not allowed in strict mode.");
  run.test(src, {withstmt: true, es3: true});
  run.test(src, {withstmt: true}); // es5
  run.test(src, {withstmt: true, esnext: true});
  run.test(src, {withstmt: true, moz: true});

  test.done();
};

exports.blocks = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/blocks.js", "utf8");

  var run = TestRun(test)
    .addError(31, "Unmatched \'{\'.")
    .addError(32, "Unrecoverable syntax error. (100% scanned).");
  run.test(src, {es3: true});
  run.test(src, {}); // es5
  run.test(src, {esnext: true});
  run.test(src, {moz: true});

  test.done();
};

exports.functionCharacterLocation = function (test) {
  var i;
  var src = fs.readFileSync(__dirname + "/fixtures/nestedFunctions.js", "utf8");
  var locations = JSON.parse(
    fs.readFileSync(
      __dirname + "/fixtures/nestedFunctions-locations.js", "utf8"
    )
  );
  JSHINT(src);
  var report = JSHINT.data().functions;

  test.equal(locations.length, report.length);
  for (i = 0; i < locations.length; i += 1) {
    test.equal(locations[i].name, report[i].name);
    test.equal(locations[i].line, report[i].line);
    test.equal(locations[i].character, report[i].character);
    test.equal(locations[i].last, report[i].last);
    test.equal(locations[i].lastcharacter, report[i].lastcharacter);
  }

  test.done();
};

exports.exported = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/exported.js", "utf8");

  var run = TestRun(test)
    .addError(5, "'unused' is defined but never used.")
    .addError(6, "'isDog' is defined but never used.")
    .addError(13, "'unusedDeclaration' is defined but never used.")
    .addError(14, "'unusedExpression' is defined but never used.")
    .addError(17, "'cannotBeExported' is defined but never used.");

  run.test(src, {es3: true, unused: true });
  run.test(src, {unused: true }); // es5
  run.test(src, {esnext: true, unused: true });
  run.test(src, {moz: true, unused: true });
  run.test(src, {unused: true, latedef: true});

  TestRun(test)
    .addError(1, "'unused' is defined but never used.")
    .test("var unused = 1; var used = 2;", {exported: ["used"], unused: true});

  TestRun(test, "exported vars aren't used before definition")
    .test("var a;", {exported:["a"], latedef: true});

  var code = [
    "/* exported a, b */",
    "if (true) {",
    "  /* exported c, d */",
    "  let a, c, e, g;",
    "  const [b, d, f, h] = [];",
    "  /* exported e, f */",
    "}",
    "/* exported g, h */"
  ];
  TestRun(test, "blockscoped variables")
    .addError(4, "'a' is defined but never used.")
    .addError(4, "'c' is defined but never used.")
    .addError(4, "'e' is defined but never used.")
    .addError(4, "'g' is defined but never used.")
    .addError(5, "'b' is defined but never used.")
    .addError(5, "'d' is defined but never used.")
    .addError(5, "'f' is defined but never used.")
    .addError(5, "'h' is defined but never used.")
    .test(code, {esversion: 6, unused: true});

  test.done();
};

exports.testIdentifiers = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/identifiers.js", "utf8");

  TestRun(test).test(src, {es3: true});
  var run = TestRun(test)
    .addError(1, "'ascii' is defined but never used.")
    .addError(2, "'num1' is defined but never used.")
    .addError(3, "'lifé' is defined but never used.")
    .addError(4, "'π' is defined but never used.")
    .addError(5, "'привет' is defined but never used.")
    .addError(6, "'\\u1d44' is defined but never used.")
    .addError(7, "'encoded\\u1d44' is defined but never used.")
    .addError(8, "'\\uFF38' is defined but never used.")
    .addError(9, "'\\uFF58' is defined but never used.")
    .addError(10, "'\\u1FBC' is defined but never used.")
    .addError(11, "'\\uFF70' is defined but never used.")
    .addError(12, "'\\u4DB3' is defined but never used.")
    .addError(13, "'\\u97CA' is defined but never used.")
    .addError(14, "'\\uD7A1' is defined but never used.")
    .addError(15, "'\\uFFDA' is defined but never used.")
    .addError(16, "'\\uA6ED' is defined but never used.")
    .addError(17, "'\\u0024' is defined but never used.")
    .addError(18, "'\\u005F' is defined but never used.")
    .addError(19, "'\\u0024\\uFF38' is defined but never used.")
    .addError(20, "'\\u0024\\uFF58' is defined but never used.")
    .addError(21, "'\\u0024\\u1FBC' is defined but never used.")
    .addError(22, "'\\u0024\\uFF70' is defined but never used.")
    .addError(23, "'\\u0024\\u4DB3' is defined but never used.")
    .addError(24, "'\\u0024\\u97CA' is defined but never used.")
    .addError(25, "'\\u0024\\uD7A1' is defined but never used.")
    .addError(26, "'\\u0024\\uFFDA' is defined but never used.")
    .addError(27, "'\\u0024\\uA6ED' is defined but never used.")
    .addError(28, "'\\u0024\\uFE24' is defined but never used.")
    .addError(29, "'\\u0024\\uABE9' is defined but never used.")
    .addError(30, "'\\u0024\\uFF17' is defined but never used.")
    .addError(31, "'\\u0024\\uFE4E' is defined but never used.")
    .addError(32, "'\\u0024\\u200C' is defined but never used.")
    .addError(33, "'\\u0024\\u200D' is defined but never used.")
    .addError(34, "'\\u0024\\u0024' is defined but never used.")
    .addError(35, "'\\u0024\\u005F' is defined but never used.");
  run.test(src, {es3: true, unused: true });
  run.test(src, {unused: true }); // es5
  run.test(src, {esnext: true, unused: true });
  run.test(src, {moz: true, unused: true });

  test.done();
};

exports.badIdentifiers = function (test) {
  var badUnicode = [
    "var \\uNOTHEX;"
  ];

  var run = TestRun(test)
    .addError(1, "Unexpected '\\'.")
    .addError(1, "Expected an identifier and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");
  run.test(badUnicode, {es3: true});
  run.test(badUnicode, {}); // es5
  run.test(badUnicode, {esnext: true});
  run.test(badUnicode, {moz: true});

  var invalidUnicodeIdent = [
    "var \\u0000;"
  ];

  var run = TestRun(test)
    .addError(1, "Unexpected '\\'.")
    .addError(1, "Expected an identifier and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).");
  run.test(invalidUnicodeIdent, {es3: true});
  run.test(invalidUnicodeIdent, {}); // es5
  run.test(invalidUnicodeIdent, {esnext: true});
  run.test(invalidUnicodeIdent, {moz: true});

  test.done();
};

exports["regression for GH-878"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/gh878.js", "utf8");

  TestRun(test).test(src, {es3: true});

  test.done();
};

exports["regression for GH-910"] = function (test) {
  var src = "(function () { if (true) { foo.bar + } })();";
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw '}'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Expected an identifier and instead saw ')'.")
    .addError(1, "Expected an operator and instead saw '('.")
    .addError(1, "Unmatched '{'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test(src, { es3: true, nonew: true });
  test.done();
};

exports.testHtml = function (test) {
  var html = "<html><body>Hello World</body></html>";
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw '<'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Expected an identifier and instead saw '<'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test(html, {});
  test.done();
};

exports["destructuring var in function scope"] = function (test) {
  var code = [
    "function foobar() {",
    "  var [ a, b, c ] = [ 1, 2, 3 ];",
    "  var [ a ] = [ 1 ];",
    "  var [ a ] = [ z ];",
    "  var [ h, w ] = [ 'hello', 'world' ]; ",
    "  var [ o ] = [ { o : 1 } ];",
    "  var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "  var { foo : bar } = { foo : 1 };",
    "  var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
    "  var [ 1 ] = [ a ];",
    "  var [ a, b; c ] = [ 1, 2, 3 ];",
    "  var [ a, b, c ] = [ 1, 2; 3 ];",
    "}"
  ];

  TestRun(test)
    .addError(1,  "'foobar' is defined but never used.")
    .addError(3,  "'a' is already defined.")
    .addError(4,  "'a' is already defined.")
    .addError(7,  "'a' is already defined.")
    .addError(7,  "'b' is already defined.")
    .addError(7,  "'c' is already defined.")
    .addError(9,  "'a' is already defined.")
    .addError(9,  "'bar' is already defined.")
    .addError(10,  "Expected an identifier and instead saw '1'.")
    .addError(11, "Expected ',' and instead saw ';'.")
    .addError(11, "'a' is already defined.")
    .addError(11, "'b' is already defined.")
    .addError(11, "'c' is already defined.")
    .addError(12, "'a' is already defined.")
    .addError(12, "'b' is already defined.")
    .addError(12, "'c' is already defined.")
    .addError(12, "Expected ']' to match '[' from line 12 and instead saw ';'.")
    .addError(12, "Missing semicolon.")
    .addError(12, "Expected an assignment or function call and instead saw an expression.")
    .addError(12, "Missing semicolon.")
    .addError(12, "Expected an identifier and instead saw ']'.")
    .addError(12, "Expected an assignment or function call and instead saw an expression.")
    .addError(4,  "'z' is not defined.")
    .addError(12, "'b' is defined but never used.")
    .addError(12, "'c' is defined but never used.")
    .addError(5,  "'h' is defined but never used.")
    .addError(5,  "'w' is defined but never used.")
    .addError(6,  "'o' is defined but never used.")
    .addError(7,  "'d' is defined but never used.")
    .addError(9,  "'bar' is defined but never used.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring var as moz"] = function (test) {
  var code = [
    "var [ a, b, c ] = [ 1, 2, 3 ];",
    "var [ a ] = [ 1 ];",
    "var [ a ] = [ z ];",
    "var [ h, w ] = [ 'hello', 'world' ]; ",
    "var [ o ] = [ { o : 1 } ];",
    "var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "var { foo : bar } = { foo : 1 };",
    "var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(3,  "'z' is not defined.")
    .addError(8,  "'a' is defined but never used.")
    .addError(6,  "'b' is defined but never used.")
    .addError(6,  "'c' is defined but never used.")
    .addError(4,  "'h' is defined but never used.")
    .addError(4,  "'w' is defined but never used.")
    .addError(5,  "'o' is defined but never used.")
    .addError(6,  "'d' is defined but never used.")
    .addError(8,  "'bar' is defined but never used.")
    .test(code, {moz: true, unused: true, undef: true});

  test.done();
};

exports["destructuring var as esnext"] = function (test) {
  var code = [
    "var [ a, b, c ] = [ 1, 2, 3 ];",
    "var [ a ] = [ 1 ];",
    "var [ a ] = [ z ];",
    "var [ h, w ] = [ 'hello', 'world' ]; ",
    "var [ o ] = [ { o : 1 } ];",
    "var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "var { foo : bar } = { foo : 1 };",
    "var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(3,  "'z' is not defined.")
    .addError(8,  "'a' is defined but never used.")
    .addError(6,  "'b' is defined but never used.")
    .addError(6,  "'c' is defined but never used.")
    .addError(4,  "'h' is defined but never used.")
    .addError(4,  "'w' is defined but never used.")
    .addError(5,  "'o' is defined but never used.")
    .addError(6,  "'d' is defined but never used.")
    .addError(8,  "'bar' is defined but never used.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring var as es5"] = function (test) {
  var code = [
    "var [ a, b, c ] = [ 1, 2, 3 ];",
    "var [ a ] = [ 1 ];",
    "var [ a ] = [ z ];",
    "var [ h, w ] = [ 'hello', 'world' ]; ",
    "var [ o ] = [ { o : 1 } ];",
    "var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "var { foo : bar } = { foo : 1 };",
    "var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3,  "'z' is not defined.")
    .addError(8,  "'a' is defined but never used.")
    .addError(6,  "'b' is defined but never used.")
    .addError(6,  "'c' is defined but never used.")
    .addError(4,  "'h' is defined but never used.")
    .addError(4,  "'w' is defined but never used.")
    .addError(5,  "'o' is defined but never used.")
    .addError(6,  "'d' is defined but never used.")
    .addError(8,  "'bar' is defined but never used.")
    .test(code, {unused: true, undef: true}); // es5

  test.done();
};

exports["destructuring var as legacy JS"] = function (test) {
  var code = [
    "var [ a, b, c ] = [ 1, 2, 3 ];",
    "var [ a ] = [ 1 ];",
    "var [ a ] = [ z ];",
    "var [ h, w ] = [ 'hello', 'world' ]; ",
    "var [ o ] = [ { o : 1 } ];",
    "var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "var { foo : bar } = { foo : 1 };",
    "var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3,  "'z' is not defined.")
    .addError(8,  "'a' is defined but never used.")
    .addError(6,  "'b' is defined but never used.")
    .addError(6,  "'c' is defined but never used.")
    .addError(4,  "'h' is defined but never used.")
    .addError(4,  "'w' is defined but never used.")
    .addError(5,  "'o' is defined but never used.")
    .addError(6,  "'d' is defined but never used.")
    .addError(8,  "'bar' is defined but never used.")
    .test(code, {es3: true, unused: true, undef: true});

  test.done();
};

exports["destructuring var errors"] = function (test) {
  var code = [
    "var [ a, b, c ] = [ 1, 2, 3 ];",
    "var [ a ] = [ 1 ];",
    "var [ a ] = [ z ];",
    "var [ h, w ] = [ 'hello', 'world' ]; ",
    "var [ o ] = [ { o : 1 } ];",
    "var [ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "var { foo : bar } = { foo : 1 };",
    "var [ a, { foo : bar } ] = [ 2, { foo : 1 } ];",
    "var [ 1 ] = [ a ];",
    "var [ a, b; c ] = [ 1, 2, 3 ];",
    "var [ a, b, c ] = [ 1, 2; 3 ];"
  ];

  TestRun(test)
    .addError(9,  "Expected an identifier and instead saw '1'.")
    .addError(10, "Expected ',' and instead saw ';'.")
    .addError(11, "Expected ']' to match '[' from line 11 and instead saw ';'.")
    .addError(11, "Missing semicolon.")
    .addError(11, "Expected an assignment or function call and instead saw an expression.")
    .addError(11, "Missing semicolon.")
    .addError(11, "Expected an identifier and instead saw ']'.")
    .addError(11, "Expected an assignment or function call and instead saw an expression.")
    .addError(3,  "'z' is not defined.")
    .addError(11, "'b' is defined but never used.")
    .addError(11, "'c' is defined but never used.")
    .addError(4,  "'h' is defined but never used.")
    .addError(4,  "'w' is defined but never used.")
    .addError(5,  "'o' is defined but never used.")
    .addError(6,  "'d' is defined but never used.")
    .addError(8,  "'bar' is defined but never used.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring const as moz"] = function (test) {
  var code = [
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ d ] = [ 1 ];",
    "const [ e ] = [ z ];",
    "const [ hel, wor ] = [ 'hello', 'world' ]; ",
    "const [ o ] = [ { o : 1 } ];",
    "const [ f, [ [ [ g ], h ], i ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "const { foo : bar } = { foo : 1 };",
    "const [ j, { foo : foobar } ] = [ 2, { foo : 1 } ];",
    "const [ aa, bb ] = yield func();"
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'b' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(4, "'hel' is defined but never used.")
    .addError(4, "'wor' is defined but never used.")
    .addError(5, "'o' is defined but never used.")
    .addError(6, "'f' is defined but never used.")
    .addError(6, "'g' is defined but never used.")
    .addError(6, "'h' is defined but never used.")
    .addError(6, "'i' is defined but never used.")
    .addError(7, "'bar' is defined but never used.")
    .addError(8, "'j' is defined but never used.")
    .addError(8, "'foobar' is defined but never used.")
    .addError(9, "'aa' is defined but never used.")
    .addError(9, "'bb' is defined but never used.")
    .addError(3, "'z' is not defined.")
    .addError(9, "'func' is not defined.")
    .test(code, {moz: true, unused: true, undef: true});

  test.done();
};

exports["destructuring const as esnext"] = function (test) {
  var code = [
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ d ] = [ 1 ];",
    "const [ e ] = [ z ];",
    "const [ hel, wor ] = [ 'hello', 'world' ]; ",
    "const [ o ] = [ { o : 1 } ];",
    "const [ f, [ [ [ g ], h ], i ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "const { foo : bar } = { foo : 1 };",
    "const [ j, { foo : foobar } ] = [ 2, { foo : 1 } ];",
    "[j] = [1];",
    "[j.a] = [1];",
    "[j['a']] = [1];",
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'b' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(4, "'hel' is defined but never used.")
    .addError(4, "'wor' is defined but never used.")
    .addError(5, "'o' is defined but never used.")
    .addError(6, "'f' is defined but never used.")
    .addError(6, "'g' is defined but never used.")
    .addError(6, "'h' is defined but never used.")
    .addError(6, "'i' is defined but never used.")
    .addError(7, "'bar' is defined but never used.")
    .addError(8, "'foobar' is defined but never used.")
    .addError(9, "Attempting to override 'j' which is a constant.")
    .addError(11, "['a'] is better written in dot notation.")
    .addError(3, "'z' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring const as es5"] = function (test) {
  var code = [
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ d ] = [ 1 ];",
    "const [ e ] = [ z ];",
    "const [ hel, wor ] = [ 'hello', 'world' ]; ",
    "const [ o ] = [ { o : 1 } ];",
    "const [ f, [ [ [ g ], h ], i ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "const { foo : bar } = { foo : 1 };",
    "const [ j, { foo : foobar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(1, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'b' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(4, "'hel' is defined but never used.")
    .addError(4, "'wor' is defined but never used.")
    .addError(5, "'o' is defined but never used.")
    .addError(6, "'f' is defined but never used.")
    .addError(6, "'g' is defined but never used.")
    .addError(6, "'h' is defined but never used.")
    .addError(6, "'i' is defined but never used.")
    .addError(7, "'bar' is defined but never used.")
    .addError(8, "'j' is defined but never used.")
    .addError(8, "'foobar' is defined but never used.")
    .addError(3, "'z' is not defined.")
    .test(code, {unused: true, undef: true}); // es5

  test.done();
};

exports["destructuring const as legacy JS"] = function (test) {
  var code = [
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ d ] = [ 1 ];",
    "const [ e ] = [ z ];",
    "const [ hel, wor ] = [ 'hello', 'world' ]; ",
    "const [ o ] = [ { o : 1 } ];",
    "const [ f, [ [ [ g ], h ], i ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "const { foo : bar } = { foo : 1 };",
    "const [ j, { foo : foobar } ] = [ 2, { foo : 1 } ];",
  ];

  TestRun(test)
    .addError(1, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'b' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(4, "'hel' is defined but never used.")
    .addError(4, "'wor' is defined but never used.")
    .addError(5, "'o' is defined but never used.")
    .addError(6, "'f' is defined but never used.")
    .addError(6, "'g' is defined but never used.")
    .addError(6, "'h' is defined but never used.")
    .addError(6, "'i' is defined but never used.")
    .addError(7, "'bar' is defined but never used.")
    .addError(8, "'j' is defined but never used.")
    .addError(8, "'foobar' is defined but never used.")
    .addError(3, "'z' is not defined.")
    .test(code, {es3: true, unused: true, undef: true});

  test.done();
};

exports["destructuring const errors"] = function (test) {
  var code = [
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ a, b, c ] = [ 1, 2, 3 ];",
    "const [ 1 ] = [ a ];",
    "const [ k, l; m ] = [ 1, 2, 3 ];",
    "const [ n, o, p ] = [ 1, 2; 3 ];",
    "const q = {};",
    "[q.a] = [1];",
    "({a:q.a} = {a:1});"
  ];

  TestRun(test)
    .addError(2, "'b' is defined but never used.")
    .addError(2, "'c' is defined but never used.")
    .addError(4, "'k' is defined but never used.")
    .addError(4, "'l' is defined but never used.")
    .addError(4, "'m' is defined but never used.")
    .addError(5, "'n' is defined but never used.")
    .addError(5, "'o' is defined but never used.")
    .addError(5, "'p' is defined but never used.")
    .addError(2, "'a' has already been declared.")
    .addError(2, "'b' has already been declared.")
    .addError(2, "'c' has already been declared.")
    .addError(3, "Expected an identifier and instead saw '1'.")
    .addError(4, "Expected ',' and instead saw ';'.")
    .addError(5, "Expected ']' to match '[' from line 5 and instead saw ';'.")
    .addError(5, "Missing semicolon.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .addError(5, "Expected an identifier and instead saw ']'.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring globals as moz"] = function (test) {
  var code = [
    "var a, b, c, d, h, w, o;",
    "[ a, b, c ] = [ 1, 2, 3 ];",
    "[ a ] = [ 1 ];",
    "[ a ] = [ z ];",
    "[ h, w ] = [ 'hello', 'world' ]; ",
    "[ o ] = [ { o : 1 } ];",
    "[ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "[ a, { foo : b } ] = [ 2, { foo : 1 } ];",
    "[ a.b ] = [1];",
    "[ { a: a.b } ] = [{a:1}];",
    "[ { a: a['b'] } ] = [{a:1}];",
    "[a['b']] = [1];",
    "[,...a.b] = [1];"
  ];

  TestRun(test)
    .addError(4,  "'z' is not defined.")
    .addError(11, "['b'] is better written in dot notation.")
    .addError(12, "['b'] is better written in dot notation.")
    .addError(13, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .test(code, {moz: true, unused: true, undef: true});

  test.done();
};

exports["destructuring globals as esnext"] = function (test) {
  var code = [
    "var a, b, c, d, h, i, w, o;",
    "[ a, b, c ] = [ 1, 2, 3 ];",
    "[ a ] = [ 1 ];",
    "[ a ] = [ z ];",
    "[ h, w ] = [ 'hello', 'world' ]; ",
    "[ o ] = [ { o : 1 } ];",
    "[ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "[ a, { foo : b } ] = [ 2, { foo : 1 } ];",
    "[ a.b ] = [1];",
    "[ { a: a.b } ] = [{a:1}];",
    "[ { a: a['b'] } ] = [{a:1}];",
    "[a['b']] = [1];",
    "[,...a.b] = [1];",
    "[...i] = [1];",
    "[notDefined1] = [];",
    "[...notDefined2] = [];",
  ];

  TestRun(test)
    .addError(4,  "'z' is not defined.")
    .addError(11, "['b'] is better written in dot notation.")
    .addError(12, "['b'] is better written in dot notation.")
    .addError(15, "'notDefined1' is not defined.")
    .addError(16, "'notDefined2' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true});

  test.done();
};

exports["destructuring globals as es5"] = function (test) {
  var code = [
    "var a, b, c, d, h, w, o;",
    "[ a, b, c ] = [ 1, 2, 3 ];",
    "[ a ] = [ 1 ];",
    "[ a ] = [ z ];",
    "[ h, w ] = [ 'hello', 'world' ]; ",
    "[ o ] = [ { o : 1 } ];",
    "[ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "[ a, { foo : b } ] = [ 2, { foo : 1 } ];",
    "[ a.b ] = [1];",
    "[ { a: a.b } ] = [{a:1}];",
    "[ { a: a['b'] } ] = [{a:1}];",
    "[a['b']] = [1];",
    "[,...a.b] = [1];"
  ];

  TestRun(test)
    .addError(4,  "'z' is not defined.")
    .addError(2, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "['b'] is better written in dot notation.")
    .addError(11, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(12, "['b'] is better written in dot notation.")
    .addError(12, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .test(code, {unused: true, undef: true}); // es5

  test.done();
};

exports["destructuring globals as legacy JS"] = function (test) {
  var code = [
    "var a, b, c, d, h, w, o;",
    "[ a, b, c ] = [ 1, 2, 3 ];",
    "[ a ] = [ 1 ];",
    "[ a ] = [ z ];",
    "[ h, w ] = [ 'hello', 'world' ]; ",
    "[ o ] = [ { o : 1 } ];",
    "[ a, [ [ [ b ], c ], d ] ] = [ 1, [ [ [ 2 ], 3], 4 ] ];",
    "[ a, { foo : b } ] = [ 2, { foo : 1 } ];",
    "[ a.b ] = [1];",
    "[ { a: a.b } ] = [{a:1}];",
    "[ { a: a['b'] } ] = [{a:1}];",
    "[a['b']] = [1];",
    "[,...a.b] = [1];"
  ];

  TestRun(test)
    .addError(4,  "'z' is not defined.")
    .addError(2, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "['b'] is better written in dot notation.")
    .addError(11, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(12, "['b'] is better written in dot notation.")
    .addError(12, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .test(code, {es3: true, unused: true, undef: true});

  test.done();
};

exports["destructuring globals with syntax error"] = function (test) {
  var code = [
    "var a, b, c;",
    "[ a ] = [ z ];",
    "[ 1 ] = [ a ];",
    "[ a, b; c ] = [ 1, 2, 3 ];",
    "[ a, b, c ] = [ 1, 2; 3 ];",
    "[ a ] += [ 1 ];",
    "[ { a.b } ] = [{a:1}];",
    "[ a() ] = [];",
    "[ { a: a() } ] = [];"
  ];

  TestRun(test)
    .addError(3, "Bad assignment.")
    .addError(4, "Expected ',' and instead saw ';'.")
    .addError(5, "Expected ']' to match '[' from line 5 and instead saw ';'.")
    .addError(5, "Missing semicolon.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .addError(5, "Expected an identifier and instead saw ']'.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Bad assignment.")
    .addError(7, "Expected ',' and instead saw '.'.")
    .addError(8, "Bad assignment.")
    .addError(9, "Bad assignment.")
    .addError(2,  "'z' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true});

  TestRun(test)
    .addError(1, "Expected ',' and instead saw '['.")
    .addError(1, "Expected ':' and instead saw ']'.")
    .addError(1, "Expected an identifier and instead saw '}'.")
    .addError(1, "Expected ',' and instead saw ']'.")
    .addError(1, "Expected an identifier and instead saw '{'.")
    .addError(1, "Expected ',' and instead saw 'a'.")
    .addError(1, "Expected an identifier and instead saw ':'.")
    .addError(1, "Expected ',' and instead saw '1'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Expected an identifier and instead saw '='.")
    .test("[ { a['b'] } ] = [{a:1}];", {esnext: true, unused: true, undef: true});

  TestRun(test)
    .addError(1, "Expected ',' and instead saw '('.")
    .addError(1, "Expected an identifier and instead saw ')'.")
    .test("[ { a() } ] = [];", {esnext: true, unused: true, undef: true});

  TestRun(test)
    .addError(1, "Extending prototype of native object: 'Number'.")
    .addError(3, "Bad assignment.")
    .addError(4, "Bad assignment.")
    .addError(6, "Do not assign to the exception parameter.")
    .addError(7, "Do not assign to the exception parameter.")
    .addError(9, "Bad assignment.")
    .addError(10, "Bad assignment.")
    .test([
      "[ Number.prototype.toString ] = [function(){}];",
      "function a() {",
      "  [ new.target ] = [];",
      "  [ arguments.anything ] = [];",
      "  try{} catch(e) {",
      "    ({e} = {e});",
      "    [e] = [];",
      "  }",
      "  ({ x: null } = {});",
      "  ({ y: [...this] } = {});",
      "  ({ y: [...z] } = {});",
      "}"], {esnext: true, freeze: true});

  test.done();
};

exports["destructuring assign of empty values as moz"] = function (test) {
  var code = [
    "var [ a ] = [ 1, 2 ];",
    "var [ c, d ] = [ 1 ];",
    "var [ e, , f ] = [ 3, , 4 ];"
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(2, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(3, "'f' is defined but never used.")
    .test(code, {moz: true, unused: true, undef: true, laxcomma: true, elision: true});

  test.done();
};

exports["destructuring assign of empty values as esnext"] = function (test) {
  var code = [
    "var [ a ] = [ 1, 2 ];",
    "var [ c, d ] = [ 1 ];",
    "var [ e, , f ] = [ 3, , 4 ];"
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(2, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'e' is defined but never used.")
    .addError(3, "'f' is defined but never used.")
    .test(code, {esnext: true, unused: true, undef: true, elision: true});

  test.done();
};

exports["destructuring assign of empty values as es5"] = function (test) {
  var code = [
    "var [ a ] = [ 1, 2 ];",
    "var [ c, d ] = [ 1 ];",
    "var [ e, , f ] = [ 3, , 4 ];"
  ];

  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'a' is defined but never used.")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'e' is defined but never used.")
    .addError(3, "'f' is defined but never used.")
    .test(code, {unused: true, undef: true, elision: true}); // es5

  test.done();
};

exports["destructuring assign of empty values as JS legacy"] = function (test) {
  var code = [
    "var [ a ] = [ 1, 2 ];",
    "var [ c, d ] = [ 1 ];",
    "var [ e, , f ] = [ 3, , 4 ];"
  ];

  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'a' is defined but never used.")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'e' is defined but never used.")
    .addError(3, "'f' is defined but never used.")
    .addError(3, "Extra comma. (it breaks older versions of IE)")
    .test(code, {es3: true, unused: true, undef: true});

  test.done();
};

exports["destructuring assignment default values"] = function (test) {
  var code = [
    "var [ a = 3, b ] = [];",
    "var [ c, d = 3 ] = [];",
    "var [ [ e ] = [ 3 ] ] = [];",
    "var [ f = , g ] = [];",
    "var { g, h = 3 } = {};",
    "var { i = 3, j } = {};",
    "var { k, l: m = 3 } = {};",
    "var { n: o = 3, p } = {};",
    "var { q: { r } = { r: 3 } } = {};",
    "var { s = , t } = {};",
    "var [ u = undefined ] = [];",
    "var { v = undefined } = {};",
    "var { w: x = undefined } = {};",
    "var [ ...y = 3 ] = [];"
  ];

  TestRun(test)
    .addError(4, "Expected an identifier and instead saw ','.")
    .addError(4, "Expected ',' and instead saw 'g'.")
    .addError(10, "Expected an identifier and instead saw ','.")
    .addError(10, "Expected ',' and instead saw 't'.")
    .addError(11, "It's not necessary to initialize 'u' to 'undefined'.")
    .addError(12, "It's not necessary to initialize 'v' to 'undefined'.")
    .addError(13, "It's not necessary to initialize 'x' to 'undefined'.")
    .addError(14, "Expected ']' and instead saw '='.")
    .test(code, { esnext: true });

  test.done();
};

exports["destructuring assignment of valid simple assignment targets"] = function (test) {
  TestRun(test)
    .test([
      "[ foo().attr ] = [];",
      "[ function() {}.attr ] = [];",
      "[ function() { return {}; }().attr ] = [];",
      "[ new Ctor().attr ] = [];"
    ], { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("[ foo() ] = [];", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("({ x: foo() } = {});", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("[ true ? x : y ] = [];", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("({ x: true ? x : y } = {});", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("[ x || y ] = [];", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("({ x: x || y } = {});", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("[ new Ctor() ] = [];", { esversion: 6 });

  TestRun(test)
    .addError(1, "Bad assignment.")
    .test("({ x: new Ctor() } = {});", { esversion: 6 });

  test.done();
};

exports["non-identifier PropertyNames in object destructuring"] = function (test) {
  var code = [
    "var { ['x' + 2]: a = 3, 0: b } = { x2: 1, 0: 2 };",
    "var { c, '': d, 'x': e } = {};",
    "function fn({ 0: f, 'x': g, ['y']: h}) {}"
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'b' is defined but never used.")
    .addError(2, "'c' is defined but never used.")
    .addError(2, "'d' is defined but never used.")
    .addError(2, "'e' is defined but never used.")
    .addError(3, "'fn' is defined but never used.")
    .addError(3, "'f' is defined but never used.")
    .addError(3, "'g' is defined but never used.")
    .addError(3, "'h' is defined but never used.")
    .test(code, { esnext: true, unused: true });

  test.done();
};

exports["empty destructuring"] = function (test) {
  var code = [
    "var {} = {};",
    "var [] = [];",
    "function a({}, []) {}",
    "var b = ({}) => ([]) => ({});"
  ];

  TestRun(test)
    .addError(1, "Empty destructuring.")
    .addError(2, "Empty destructuring.")
    .addError(3, "Empty destructuring.")
    .addError(3, "Empty destructuring.")
    .addError(4, "Empty destructuring.")
    .addError(4, "Empty destructuring.")
    .test(code, { esnext: true });

  test.done();
};

exports["array element assignment inside array"] = function (test) {
  var code = [
    "var a1 = {};",
    "var a2 = [function f() {a1[0] = 1;}];",
  ];

  TestRun(test)
    .test(code);

  test.done();
};

exports["let statement as moz"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "    print(x + ' ' + y + ' ' + z);",
    "  }",
    "  print(x + ' ' + y);",
    "}",
    "print(x);"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement as esnext"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "    print(x + ' ' + y + ' ' + z);",
    "  }",
    "  print(x + ' ' + y);",
    "}",
    "print(x);"
  ];

  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement as es5"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "    print(x + ' ' + y + ' ' + z);",
    "  }",
    "  print(x + ' ' + y);",
    "}",
    "print(x);"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["let statement as legacy JS"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "    print(x + ' ' + y + ' ' + z);",
    "  }",
    "  print(x + ' ' + y);",
    "}",
    "print(x);"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement out of scope as moz"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "  }",
    "  print(z);",
    "}",
    "print(y);",
  ];

  TestRun(test)
    .addError(1, "'x' is defined but never used.")
    .addError(5, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(7, "'z' is not defined.")
    .addError(9, "'y' is not defined.")
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement out of scope as esnext"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "  }",
    "  print(z);",
    "}",
    "print(y);",
  ];

  TestRun(test)
    .addError(1, "'x' is defined but never used.")
    .addError(5, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(7, "'z' is not defined.")
    .addError(9, "'y' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement out of scope as es5"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "  }",
    "  print(z);",
    "}",
    "print(y);",
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'x' is defined but never used.")
    .addError(5, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(7, "'z' is not defined.")
    .addError(9, "'y' is not defined.")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["let statement out of scope as legacy JS"] = function (test) {
  var code = [
    "let x = 1;",
    "{",
    "  let y = 3 ;",
    "  {",
    "    let z = 2;",
    "  }",
    "  print(z);",
    "}",
    "print(y);",
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'x' is defined but never used.")
    .addError(5, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(7, "'z' is not defined.")
    .addError(9, "'y' is not defined.")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in functions as moz"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  function bar() {",
    "    let z = 2;",
    "    print(x);",
    "    print(z);",
    "  }",
    "  print(y);",
    "  bar();",
    "}",
    "foo();"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in functions as esnext"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  function bar() {",
    "    let z = 2;",
    "    print(x);",
    "    print(z);",
    "  }",
    "  print(y);",
    "  bar();",
    "}",
    "foo();"
  ];

  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in functions as es5"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  function bar() {",
    "    let z = 2;",
    "    print(x);",
    "    print(z);",
    "  }",
    "  print(y);",
    "  bar();",
    "}",
    "foo();"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["let statement in functions as legacy JS"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  function bar() {",
    "    let z = 2;",
    "    print(x);",
    "    print(z);",
    "  }",
    "  print(y);",
    "  bar();",
    "}",
    "foo();"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement not in scope as moz"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  let bar = function () {",
    "    print(x);",
    "    let z = 2;",
    "  };",
    "  print(z);",
    "}",
    "print(y);",
    "bar();",
    "foo();",
  ];

  TestRun(test)
    .addError(6, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(4, "'bar' is defined but never used.")
    .addError(8, "'z' is not defined.")
    .addError(10, "'y' is not defined.")
    .addError(11, "'bar' is not defined.")
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement not in scope as esnext"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  let bar = function () {",
    "    print(x);",
    "    let z = 2;",
    "  };",
    "  print(z);",
    "}",
    "print(y);",
    "bar();",
    "foo();",
  ];

  TestRun(test)
    .addError(6, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(4, "'bar' is defined but never used.")
    .addError(8, "'z' is not defined.")
    .addError(10, "'y' is not defined.")
    .addError(11, "'bar' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement not in scope as es5"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  let bar = function () {",
    "    print(x);",
    "    let z = 2;",
    "  };",
    "  print(z);",
    "}",
    "print(y);",
    "bar();",
    "foo();",
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(4, "'bar' is defined but never used.")
    .addError(8, "'z' is not defined.")
    .addError(10, "'y' is not defined.")
    .addError(11, "'bar' is not defined.")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["let statement not in scope as legacy JS"] = function (test) {
  var code = [
    "let x = 1;",
    "function foo() {",
    "  let y = 3 ;",
    "  let bar = function () {",
    "    print(x);",
    "    let z = 2;",
    "  };",
    "  print(z);",
    "}",
    "print(y);",
    "bar();",
    "foo();",
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'z' is defined but never used.")
    .addError(3, "'y' is defined but never used.")
    .addError(4, "'bar' is defined but never used.")
    .addError(8, "'z' is not defined.")
    .addError(10, "'y' is not defined.")
    .addError(11, "'bar' is not defined.")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in for loop as moz"] = function (test) {
  var code = [
    "var obj={foo: 'bar', bar: 'foo'};",
    "for ( let [n, v] in Iterator(obj) ) {",
    "  print('Name: ' + n + ', Value: ' + v);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}",
    "for (let i=0 ; i < 10 ; i++ ) {",
    "print(i);",
    "}"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["let statement in for loop as esnext"] = function (test) {
  var code = [
    "var obj={foo: 'bar', bar: 'foo'};",
    "for ( let [n, v] in Iterator(obj) ) {",
    "  print('Name: ' + n + ', Value: ' + v);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}",
    "for (let i=0 ; i < 10 ; i++ ) {",
    "print(i);",
    "}"
  ];

  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["let statement in for loop as es5"] = function (test) {
  var code = [
    "var obj={foo: 'bar', bar: 'foo'};",
    "for ( let [n, v] in Iterator(obj) ) {",
    "  print('Name: ' + n + ', Value: ' + v);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}",
    "for (let i=0 ; i < 10 ; i++ ) {",
    "print(i);",
    "}"
  ];

  TestRun(test)
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print", "Iterator"]}); // es5

  test.done();
};

exports["let statement in for loop as legacy JS"] = function (test) {
  var code = [
    "var obj={foo: 'bar', bar: 'foo'};",
    "for ( let [n, v] in Iterator(obj) ) {",
    "  print('Name: ' + n + ', Value: ' + v);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i in [1, 2, 3, 4]) {",
    "  print(i);",
    "}",
    "for (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}",
    "for (let i=0 ; i < 10 ; i++ ) {",
    "print(i);",
    "}"
  ];

  TestRun(test)
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["let statement in destructured for loop as moz"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "var people = [",
    "{",
    "  name: 'Mike Smith',",
    "  family: {",
    "  mother: 'Jane Smith',",
    "  father: 'Harry Smith',",
    "  sister: 'Samantha Smith'",
    "  },",
    "  age: 35",
    "},",
    "{",
    "  name: 'Tom Jones',",
    "  family: {",
    "  mother: 'Norah Jones',",
    "  father: 'Richard Jones',",
    "  brother: 'Howard Jones'",
    "  },",
    "  age: 25",
    "}",
    "];",
    "for (let {name: n, family: { father: f } } in people) {",
    "print('Name: ' + n + ', Father: ' + f);",
    "}"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true,
           undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in destructured for loop as esnext"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "var people = [",
    "{",
    "  name: 'Mike Smith',",
    "  family: {",
    "  mother: 'Jane Smith',",
    "  father: 'Harry Smith',",
    "  sister: 'Samantha Smith'",
    "  },",
    "  age: 35",
    "},",
    "{",
    "  name: 'Tom Jones',",
    "  family: {",
    "  mother: 'Norah Jones',",
    "  father: 'Richard Jones',",
    "  brother: 'Howard Jones'",
    "  },",
    "  age: 25",
    "}",
    "];",
    "for (let {name: n, family: { father: f } } in people) {",
    "print('Name: ' + n + ', Father: ' + f);",
    "}"
  ];

  TestRun(test)
    .test(code, {esnext: true, unused: true,
           undef: true, predef: ["print"]});

  test.done();
};

exports["let statement in destructured for loop as es5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "var people = [",
    "{",
    "  name: 'Mike Smith',",
    "  family: {",
    "  mother: 'Jane Smith',",
    "  father: 'Harry Smith',",
    "  sister: 'Samantha Smith'",
    "  },",
    "  age: 35",
    "},",
    "{",
    "  name: 'Tom Jones',",
    "  family: {",
    "  mother: 'Norah Jones',",
    "  father: 'Richard Jones',",
    "  brother: 'Howard Jones'",
    "  },",
    "  age: 25",
    "}",
    "];",
    "for (let {name: n, family: { father: f } } in people) {",
    "print('Name: ' + n + ', Father: ' + f);",
    "}"
  ];

  TestRun(test)
    .addError(21, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["let statement in destructured for loop as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "var people = [",
    "{",
    "  name: 'Mike Smith',",
    "  family: {",
    "  mother: 'Jane Smith',",
    "  father: 'Harry Smith',",
    "  sister: 'Samantha Smith'",
    "  },",
    "  age: 35",
    "},",
    "{",
    "  name: 'Tom Jones',",
    "  family: {",
    "  mother: 'Norah Jones',",
    "  father: 'Richard Jones',",
    "  brother: 'Howard Jones'",
    "  },",
    "  age: 25",
    "}",
    "];",
    "for (let {name: n, family: { father: f } } in people) {",
    "print('Name: ' + n + ', Father: ' + f);",
    "}"
  ];

  TestRun(test)
    .addError(21, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["let statement (as seen in jetpack)"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "const { Cc, Ci } = require('chrome');",
    "// add a text/unicode flavor (html converted to plain text)",
    "let (str = Cc['@mozilla.org/supports-string;1'].",
    "            createInstance(Ci.nsISupportsString),",
    "    converter = Cc['@mozilla.org/feed-textconstruct;1'].",
    "                createInstance(Ci.nsIFeedTextConstruct))",
    "{",
    "converter.type = 'html';",
    "converter.text = options.data;",
    "str.data = converter.plainText();",
    "xferable.addDataFlavor('text/unicode');",
    "xferable.setTransferData('text/unicode', str, str.data.length * 2);",
    "}"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true,
           predef: ["require", "xferable", "options"]});
  test.done();
};

exports["let statement (as seen in jetpack) as esnext"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "const { Cc, Ci } = require('chrome');",
    "// add a text/unicode flavor (html converted to plain text)",
    "let (str = Cc['@mozilla.org/supports-string;1'].",
    "            createInstance(Ci.nsISupportsString),",
    "    converter = Cc['@mozilla.org/feed-textconstruct;1'].",
    "                createInstance(Ci.nsIFeedTextConstruct))",
    "{",
    "converter.type = 'html';",
    "converter.text = options.data;",
    "str.data = converter.plainText();",
    "xferable.addDataFlavor('text/unicode');",
    "xferable.setTransferData('text/unicode', str, str.data.length * 2);",
    "}"
  ];

  TestRun(test)
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {esnext: true, unused: true, undef: true,
           predef: ["require", "xferable", "options"]});
  test.done();
};

exports["let statement (as seen in jetpack) as es5"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "const { Cc, Ci } = require('chrome');",
    "// add a text/unicode flavor (html converted to plain text)",
    "let (str = Cc['@mozilla.org/supports-string;1'].",
    "            createInstance(Ci.nsISupportsString),",
    "    converter = Cc['@mozilla.org/feed-textconstruct;1'].",
    "                createInstance(Ci.nsIFeedTextConstruct))",
    "{",
    "converter.type = 'html';",
    "converter.text = options.data;",
    "str.data = converter.plainText();",
    "xferable.addDataFlavor('text/unicode');",
    "xferable.setTransferData('text/unicode', str, str.data.length * 2);",
    "}"
  ];

  TestRun(test)
    .addError(1, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {unused: true, undef: true,
           predef: ["require", "xferable", "options"]}); // es5
  test.done();
};

exports["let statement (as seen in jetpack) as legacy JS"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "const { Cc, Ci } = require('chrome');",
    "// add a text/unicode flavor (html converted to plain text)",
    "let (str = Cc['@mozilla.org/supports-string;1'].",
    "            createInstance(Ci.nsISupportsString),",
    "    converter = Cc['@mozilla.org/feed-textconstruct;1'].",
    "                createInstance(Ci.nsIFeedTextConstruct))",
    "{",
    "converter.type = 'html';",
    "converter.text = options.data;",
    "str.data = converter.plainText();",
    "xferable.addDataFlavor('text/unicode');",
    "xferable.setTransferData('text/unicode', str, str.data.length * 2);",
    "}"
  ];

  TestRun(test)
    .addError(1, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, unused: true, undef: true,
           predef: ["require", "xferable", "options"]});
  test.done();
};

exports["let block and let expression"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "let (x=1, y=2, z=3)",
    "{",
    "  let(t=4) print(x, y, z, t);",
    "  print(let(u=4) u,x);",
    "}"
  ];

  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});
  test.done();
};

exports["let block and let expression as esnext"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "let (x=1, y=2, z=3)",
    "{",
    "  let(t=4) print(x, y, z, t);",
    "  print(let(u=4) u,x);",
    "}"
  ];

  TestRun(test)
    .addError(1, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(4, "'let expressions' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});
  test.done();
};

exports["let block and let expression as es5"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "let (x=1, y=2, z=3)",
    "{",
    "  let(t=4) print(x, y, z, t);",
    "  print(let(u=4) u,x);",
    "}"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(4, "'let expressions' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5
  test.done();
};

exports["let block and let expression as legacy JS"] = function (test) {
  // Example taken from jetpack/addons sdk library from Mozilla project
  var code = [
    "let (x=1, y=2, z=3)",
    "{",
    "  let(t=4) print(x, y, z, t);",
    "  print(let(u=4) u,x);",
    "}"
  ];

  TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let block' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(4, "'let expressions' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});
  test.done();
};

exports["make sure let variables are not treated as globals"] = function (test) {
  // This is a regression test for GH-1362
  var code = [
    "function sup() {",
      "if (true) {",
        "let closed = 1;",
        "closed = 2;",
      "}",

      "if (true) {",
        "if (true) {",
          "let closed = 1;",
          "closed = 2;",
        "}",
      "}",
    "}"
  ];

  TestRun(test).test(code, { esnext: true, browser: true });
  test.done();
};

exports["make sure var variables can shadow let variables"] = function (test) {
  // This is a regression test for GH-1394
  var code = [
    "let a = 1;",
    "let b = 2;",
    "var c = 3;",

    "function sup(a) {",
      "var b = 4;",
      "let c = 5;",
      "let d = 6;",
      "if (false) {",
        "var d = 7;",
      "}",
      "return b + c + a + d;",
    "}",

    "sup();"
  ];

  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(2, "'b' is defined but never used.")
    .addError(3, "'c' is defined but never used.")
    .addError(9, "'d' has already been declared.")
    .test(code, { esnext: true, unused: true, undef: true, funcscope: true });

  test.done();
};

exports["make sure let variables in the closure of functions shadow predefined globals"] = function (test) {
  var code = [
    "function x() {",
    "  let foo;",
    "  function y() {",
    "    foo = {};",
    "  }",
    "}"
  ];

  TestRun(test).test(code, { esnext: true, predef: { foo: false } });
  test.done();
};

exports["make sure let variables in the closure of blocks shadow predefined globals"] = function (test) {
  var code = [
    "function x() {",
    "  let foo;",
    "  {",
    "    foo = {};",
    "  }",
    "}"
  ];

  TestRun(test).test(code, { esnext: true, predef: { foo: false } });
  test.done();
};

exports["make sure variables may shadow globals in functions after they are referenced"] = function (test) {
  var code = [
    "var foo;",
    "function x() {",
    "  foo();",
    "  var foo;",
    "}"
  ];

  TestRun(test).test(code);
  test.done();
};

exports["test block scope redefines globals only outside of blocks"] = function (test) {
  var code = [
    "{",
    "  let Map = true;",
    "}",
    "let Map = false;"
  ];

  TestRun(test)
    .addError(4, "Redefinition of 'Map'.")
    .test(code, { esnext: true, browser: true });
  test.done();
};

exports["test destructuring function as moz"] = function (test) {
  // Example from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function userId({id}) {",
    "  return id;",
    "}",
    "function whois({displayName: displayName, fullName: {firstName: name}}) {",
    "  print(displayName + ' is ' + name);",
    "}",
    "var user = {id: 42, displayName: 'jdoe', fullName: {firstName: 'John', lastName: 'Doe'}};",
    "print('userId: ' + userId(user));",
    "whois(user);"
  ];
  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["test destructuring function as esnext"] = function (test) {
  // Example from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function userId({id}) {",
    "  return id;",
    "}",
    "function whois({displayName: displayName, fullName: {firstName: name}}) {",
    "  print(displayName + ' is ' + name);",
    "}",
    "var user = {id: 42, displayName: 'jdoe', fullName: {firstName: 'John', lastName: 'Doe'}};",
    "print('userId: ' + userId(user));",
    "whois(user);"
  ];
  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["test destructuring function as es5"] = function (test) {
  // Example from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function userId({id}) {",
    "  return id;",
    "}",
    "function whois({displayName: displayName, fullName: {firstName: name}}) {",
    "  print(displayName + ' is ' + name);",
    "}",
    "var user = {id: 42, displayName: 'jdoe', fullName: {firstName: 'John', lastName: 'Doe'}};",
    "print('userId: ' + userId(user));",
    "whois(user);"
  ];
  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["test destructuring function as legacy JS"] = function (test) {
  // Example from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function userId({id}) {",
    "  return id;",
    "}",
    "function whois({displayName: displayName, fullName: {firstName: name}}) {",
    "  print(displayName + ' is ' + name);",
    "}",
    "var user = {id: 42, displayName: 'jdoe', fullName: {firstName: 'John', lastName: 'Doe'}};",
    "print('userId: ' + userId(user));",
    "whois(user);"
  ];
  TestRun(test)
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["destructuring function default values"] = function (test) {
  var code = [
    "function a([ b = 2, c = 2 ] = []) {}",
    "function d([ f = 2 ], g, [ e = 2 ] = []) {}",
    "function h({ i = 2 }, { j = 2 } = {}) {}",
    "function k({ l: m = 2, n = 2 }) {}",
    "let o = (p, [ q = 2, r = 2 ]) => {};",
    "let s = ({ t = 2 } = {}, [ u = 2 ] = []) => {};",
    "let v = ({ w: x = 2, y = 2 }) => {};"
  ];

  TestRun(test).test(code, { esnext: true });

  test.done();
};

exports["non var destructuring assignment statement"] = function (test) {
  var codeValid = [
    "let b;",
    "[b] = b;",
    "([b] = b);",
    "({b} = b);",
    "let c = {b} = b;",
    "c = [b] = b;",
    "c = ({b} = b);",
    "c = ([b] = b);"
  ];

  var codeInvalid = [
    "let b;",
    "{b} = b;",
    "({b}) = b;",
    "([b]) = b;",
    "[{constructor(){}}] = b;",
    "([{constructor(){}}] = b);",
    "let c = ({b}) = b;",
    "c = ([b]) = b;"
  ];

  TestRun(test).test(codeValid, { esnext: true });

  TestRun(test)
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .addError(2, "Missing semicolon.")
    .addError(2, "Expected an identifier and instead saw '='.")
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .addError(2, "Missing semicolon.")
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .addError(3, "Bad assignment.")
    .addError(4, "Bad assignment.")
    .addError(5, "Expected ',' and instead saw '('.")
    .addError(5, "Expected an identifier and instead saw ')'.")
    .addError(5, "Expected ',' and instead saw '{'.")
    .addError(5, "Expected ',' and instead saw '}'.")
    .addError(6, "Expected ',' and instead saw '('.")
    .addError(6, "Expected an identifier and instead saw ')'.")
    .addError(6, "Expected ',' and instead saw '{'.")
    .addError(6, "Expected ',' and instead saw '}'.")
    .addError(7, "Bad assignment.")
    .addError(8, "Bad assignment.")
    .test(codeInvalid, { esnext: true });

  test.done();

};

exports["invalid for each"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "for each (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}"
  ];

  TestRun(test)
    .addError(1, "Invalid for each loop.")
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["invalid for each as esnext"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "for each (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}"
  ];

  TestRun(test)
    .addError(1, "Invalid for each loop.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["invalid for each as ES5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "for each (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}"
  ];

  TestRun(test)
    .addError(1, "Invalid for each loop.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["invalid for each as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "for each (let i = 0; i<15; ++i) {",
    "  print(i);",
    "}"
  ];
  TestRun(test)
    .addError(1, "Invalid for each loop.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function* fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",

    "var g = fib();",
    "for (var i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator as moz extension"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function* fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",

    "var g = fib();",
    "for (var i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator as es5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function* fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",

    "var g = fib();",
    "for (var i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["esnext generator as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function* fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",

    "var g = fib();",
    "for (var i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator without yield"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function* fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    [i, j] = [j, i + j];",
    "    return i;",
    "  }",
    "}",

    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(7, "A generator function shall contain a yield statement.")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator without yield and check turned off"] = function (test) {
  var code = [
    "function* emptyGenerator() {}",

    "emptyGenerator();"
  ];
  TestRun(test)
    .test(code, {esnext: true, noyield: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["esnext generator with yield delegation, gh-1544"] = function(test) {
  var code = [
    "function* G() {",
    "  yield* (function*(){})();",
    "}"
  ];

  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "A generator function shall contain a yield statement.")
    .test(code);


  TestRun(test).test(code, {esnext: true, noyield: true});
  TestRun(test).test(code, {esnext: true, noyield: true, moz: true});

  test.done();
};

exports["mozilla generator"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",
    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["mozilla generator as esnext"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",
    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(4,
     "A yield statement shall be within a generator function (with syntax: `function*`)")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  TestRun(test)
    .addError(4,
     "A yield statement shall be within a generator function (with syntax: `function*`)")
    .test(code, {esnext: true, moz: true});

  test.done();
};

exports["yield statement within try-catch"] = function (test) {
  // see issue: https://github.com/jshint/jshint/issues/1505
  var code = [
    "function* fib() {",
    "  try {",
    "    yield 1;",
    "  } catch (err) {",
    "    yield err;",
    "  }",
    "}",
    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["mozilla generator as es5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",
    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(4, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {unused: true, undef: true, predef: ["print", "Iterator"]}); // es5

  test.done();
};

exports["mozilla generator as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function fib() {",
    "  var i = 0, j = 1;",
    "  while (true) {",
    "    yield i;",
    "    [i, j] = [j, i + j];",
    "  }",
    "}",
    "var g = fib();",
    "for (let i = 0; i < 10; i++)",
    "  print(g.next());"
  ];
  TestRun(test)
    .addError(4, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring assignment' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print", "Iterator"]});

  test.done();
};

exports["array comprehension"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function *range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [for (i of range(0, 10)) i * i];",
    "var evens = [for (i of range(0, 21)) if (i % 2 === 0) i];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);",
    "(function() {",
    "  var ten_squares = [for (i of range(0, 10)) i * i];",
    "  print('squares:', ten_squares);",
    "}());"
  ];
  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array comprehension unused and undefined"] = function (test) {
  var code = [
    "var range = [1, 2];",
    "var a = [for (i of range) if (i % 2 === 0) i];",
    "var b = [for (j of range) doesnotexist];"
  ];
  TestRun(test)
    .addError(2, "'a' is defined but never used.")
    .addError(3, "'j' is defined but never used.")
    .addError(3, "'doesnotexist' is not defined.")
    .addError(3, "'b' is defined but never used.")
    .test(code, { esnext: true, unused: true, undef: true });

  var unused = JSHINT.data().unused;
  test.deepEqual([
    { name: 'a', line: 2, character: 5 },
    { name: 'b', line: 3, character: 5 }
    //{ name: 'j', line: 3, character: 15 } // see gh-2440
  ], unused);

  var implieds = JSHINT.data().implieds;
  test.deepEqual([{ name: 'doesnotexist', line: [ 3 ] }], implieds);

  test.done();
};

exports["gh-1856 mistakenly identified as array comprehension"] = function (test) {
  var code = [
    "function main(value) {",
    "  var result = ['{'],",
    "      key;",
    "  for (key in value) {",
    "    result.push(key);",
    "  }",
    "  return result;",
    "}",
    "main({abc:true});"
  ];

  TestRun(test)
    .test(code);

  test.done();
};

exports["gh-1413 wrongly detected as array comprehension"] = function (test) {
  var code = [
    "var a = {};",
    "var b = [ a.for ];"
  ];

  TestRun(test)
    .test(code, { unused: false });

  test.done();
};

exports["moz-style array comprehension"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [i * i for each (i in range(0, 10))];",
    "var evens = [i for each (i in range(0, 21)) if (i % 2 === 0)];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array comprehension with for..of"] = function (test) {
  // example adapted from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function *range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [for (i of range(0, 10)) i * i];",
    "var evens = [for (i of range(0, 21)) if (i % 2 === 0) i];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension with for..of"] = function (test) {
  // example adapted from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [i * i for (i of range(0, 10))];",
    "var evens = [i for (i of range(0, 21)) if (i % 2 === 0)];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array comprehension with unused variables"] = function (test) {
  var code = [
    "var ret = [for (i of unknown) i];",
    "print('ret:', ret);",
  ];
  TestRun(test)
    .addError(1, "'unknown' is not defined.")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension with unused variables"] = function (test) {
  var code = [
    "var ret = [i for (i of unknown)];",
    "print('ret:', ret);",
  ];
  TestRun(test)
    .addError(1, "'unknown' is not defined.")
    .test(code, {moz: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension as esnext"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [i * i for each (i in range(0, 10))];",
    "var evens = [i for each (i in range(0, 21)) if (i % 2 === 0)];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .addError(3, "A yield statement shall be within a generator function (with syntax: " +
      "`function*`)")
    .addError(6, "Expected 'for' and instead saw 'i'.")
    .addError(6, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "Expected 'for' and instead saw 'i'.")
    .addError(7, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {esnext: true, unused: true, undef: true, predef: ["print"]});

  TestRun(test)
    .addError(3, "A yield statement shall be within a generator function (with syntax: " +
      "`function*`)")
    .test(code, {esnext: true, moz: true});

  test.done();
};

exports["array comprehension as es5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function *range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [for (i of range(0, 10)) i * i];",
    "var evens = [for (i of range(0, 21)) if (i % 2 === 0) i];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["moz-style array comprehension as es5"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [i * i for each (i in range(0, 10))];",
    "var evens = [i for each (i in range(0, 21)) if (i % 2 === 0)];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(6, "Expected 'for' and instead saw 'i'.")
    .addError(6, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "Expected 'for' and instead saw 'i'.")
    .addError(7, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {unused: true, undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["array comprehension as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [for (i of range(0, 10)) i * i];",
    "var evens = [for (i of range(0, 21)) if (i % 2 === 0) i];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension as legacy JS"] = function (test) {
  // example taken from https://developer.mozilla.org/en-US/docs/JavaScript/New_in_JavaScript/1.7
  var code = [
    "function range(begin, end) {",
    "  for (let i = begin; i < end; ++i) {",
    "    yield i;",
    "  }",
    "}",
    "var ten_squares = [i * i for each (i in range(0, 10))];",
    "var evens = [i for each (i in range(0, 21)) if (i % 2 === 0)];",
    "print('squares:', ten_squares);",
    "print('evens:', evens);"
  ];
  TestRun(test)
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(6, "Expected 'for' and instead saw 'i'.")
    .addError(6, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(7, "Expected 'for' and instead saw 'i'.")
    .addError(7, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, unused: true, undef: true, predef: ["print"]});

  test.done();
};

exports['array comprehension with dest array at global scope'] = function (test) {
  var code = [
    "[for ([i, j] of [[0,0], [1,1], [2,2]]) [i, j] ];",
    "var destarray_comparray_1 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, [j, j] ]];",
    "var destarray_comparray_2 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, {i: [i, j]} ]];",
  ];
  TestRun(test)
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports['moz-style array comprehension with dest array at global scope'] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_1 = [ [i, [j, j] ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_2 = [ [i, {i: [i, j]} ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
  ];
  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports['moz-style array comprehension with dest array at global scope as esnext'] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_1 = [ [i, [j, j] ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_2 = [ [i, {i: [i, j]} ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
  ];
  TestRun(test)
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "Expected 'for' and instead saw '['.")
    .addError(2, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "Expected 'for' and instead saw '['.")
    .addError(3, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports['array comprehension with dest array at global scope as es5'] = function (test) {
  var code = [
    "[for ([i, j] of [[0,0], [1,1], [2,2]]) [i, j] ];",
    "var destarray_comparray_1 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, [j, j] ] ];",
    "var destarray_comparray_2 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, {i: [i, j]} ] ];",
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports['moz-style array comprehension with dest array at global scope as es5'] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_1 = [ [i, [j, j] ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_2 = [ [i, {i: [i, j]} ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "Expected 'for' and instead saw '['.")
    .addError(2, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "Expected 'for' and instead saw '['.")
    .addError(3, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports['array comprehension with dest array at global scope as JS legacy'] = function (test) {
  var code = [
    "[for ([i, j] of [[0,0], [1,1], [2,2]]) [i, j] ];",
    "var destarray_comparray_1 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, [j, j] ] ];",
    "var destarray_comparray_2 = [for ([i, j] of [[0,0], [1,1], [2,2]]) [i, {i: [i, j]} ] ];",
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports['moz-style array comprehension with dest array at global scope as JS legacy'] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_1 = [ [i, [j, j] ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
    "var destarray_comparray_2 = [ [i, {i: [i, j]} ] for each ([i, j] in [[0,0], [1,1], [2,2]])];",
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(2, "Expected 'for' and instead saw '['.")
    .addError(2, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(3, "Expected 'for' and instead saw '['.")
    .addError(3, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array comprehension imbrication with dest array"] = function (test) {
  var code = [
    "[for ([i, j] of [for ([a, b] of [[2,2], [3,4]]) [a, b] ]) [i, j] ];"
  ];

  TestRun(test)
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension imbrication with dest array"] = function (test) {
  var code = [
    "[ [i, j] for ([i, j] in [[a, b] for each ([a, b] in [[2,2], [3,4]])]) ];"
  ];

  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension imbrication with dest array using for..of"] = function (test) {
  var code = [
    "[ [i, j] for ([i, j] of [[a, b] for ([a, b] of [[2,2], [3,4]])]) ];"
  ];

  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension imbrication with dest array as esnext"] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[a, b] for each ([a, b] in [[2,2], [3,4]])]) ];"
  ];
  TestRun(test)
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array comprehension imbrication with dest array as es5"] = function (test) {
  var code = [
    "[for ([i, j] of [for ([a, b] of [[2,2], [3,4]]) [a, b] ]) [i, j] ];"
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["moz-style array comprehension imbrication with dest array as es5"] = function (test) {
  var code = [
    "[for ([i, j] of [for ([a, b] of [[2,2], [3,4]]) [a, b] ]) [i, j] ];"
  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["array comprehension imbrication with dest array as legacy JS"] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[a, b] for each ([a, b] in [[2,2], [3,4]])]) ];"

  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports["moz-style array comprehension imbrication with dest array as legacy JS"] = function (test) {
  var code = [
    "[ [i, j] for each ([i, j] in [[a, b] for each ([a, b] in [[2,2], [3,4]])]) ];"

  ];
  TestRun(test)
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "'array comprehension' is only available in Mozilla JavaScript extensions (use moz option).")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "Expected 'for' and instead saw '['.")
    .addError(1, "'for each' is only available in Mozilla JavaScript extensions (use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports["no false positive array comprehension"] = function (test) {
  var code = [
    "var foo = []; for (let i in [1,2,3]) { print(i); }"
  ];
  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports["try catch filters"] = function (test) {
  var code = [
    "try {",
    "  throw {name: 'foo', message: 'bar'};",
    "}",
    "catch (e if e.name === 'foo') {",
    "  print (e.message);",
    "}"
  ];
  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports["try catch filters as esnext"] = function (test) {
  var code = [
    "try {",
    "  throw {name: 'foo', message: 'bar'};",
    "}",
    "catch (e if e.name === 'foo') {",
    "  print (e.message);",
    "}"
  ];
  TestRun(test)
    .addError(4, "'catch filter' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["try catch filters as es5"] = function (test) {
  var code = [
    "try {",
    "  throw {name: 'foo', message: 'bar'};",
    "}",
    "catch (e if e.name === 'foo') {",
    "  print (e.message);",
    "}"
  ];
  TestRun(test)
    .addError(4, "'catch filter' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["try catch filters as legacy JS"] = function (test) {
  var code = [
    "try {",
    "  throw {name: 'foo', message: 'bar'};",
    "}",
    "catch (e if e.name === 'foo') {",
    "  print (e.message);",
    "}"
  ];
  TestRun(test)
    .addError(4, "'catch filter' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports["function closure expression"] = function (test) {
  var code = [
    "let (arr = [1,2,3]) {",
    "  arr.every(function (o) o instanceof Object);",
    "}"
  ];
  TestRun(test)
    .test(code, {es3: true, moz: true, undef: true});

  test.done();
};

exports["function closure expression as esnext"] = function (test) {
  var code = [
    "var arr = [1,2,3];",
    "arr.every(function (o) o instanceof Object);",
  ];
  TestRun(test)
    .addError(2, "'function closure expressions' is only available in Mozilla JavaScript " +
      "extensions (use moz option).")
    .test(code, {esnext: true, undef: true});

  test.done();
};

exports["function closure expression as es5"] = function (test) {
  var code = [
    "var arr = [1,2,3];",
    "arr.every(function (o) o instanceof Object);",
  ];
  TestRun(test)
    .addError(2, "'function closure expressions' is only available in Mozilla JavaScript " +
      "extensions (use moz option).")
    .test(code, {undef: true}); // es5

  test.done();
};

exports["function closure expression as legacy JS"] = function (test) {
  var code = [
    "var arr = [1,2,3];",
    "arr.every(function (o) o instanceof Object);",
  ];
  TestRun(test)
    .addError(2, "'function closure expressions' is only available in Mozilla JavaScript " +
      "extensions (use moz option).")
    .test(code, {es3: true, undef: true});

  test.done();
};

exports["for of as esnext"] = function (test) {
  var code = [
    "for (let x of [1,2,3,4]) {",
    "    print(x);",
    "}",
    "for (let x of [1,2,3,4]) print(x);",
    "for (const x of [1,2,3,4]) print(x);",
    "var xg, yg;",
    "for (xg = 1 of [1,2,3,4]) print(xg);",
    "for (xg, yg of [1,2,3,4]) print(xg + yg);",
    "for (xg = 1, yg = 2 of [1,2,3,4]) print(xg + yg);",
    "for (var xv = 1 of [1,2,3,4]) print(xv);",
    "for (var xv, yv of [1,2,3,4]) print(xv + yv);",
    "for (var xv = 1, yv = 2 of [1,2,3,4]) print(xv + yv);",
    "for (let x = 1 of [1,2,3,4]) print(x);",
    "for (let x, y of [1,2,3,4]) print(x + y);",
    "for (let x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (const x = 1 of [1,2,3,4]) print(x);",
    "for (const x, y of [1,2,3,4]) print(x + y);",
    "for (const x = 1, y = 2 of [1,2,3,4]) print(x + y);"
  ];
  TestRun(test)
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(10, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(11, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(12, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(12, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(13, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(14, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(15, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(15, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(16, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(17, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(18, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(18, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["for of as es5"] = function (test) {
  var code = [
    "for (let x of [1,2,3,4]) {",
    "    print(x);",
    "}",
    "for (let x of [1,2,3,4]) print(x);",
    "for (const x of [1,2,3,4]) print(x);",
    "for (x = 1 of [1,2,3,4]) print(x);",
    "for (x, y of [1,2,3,4]) print(x + y);",
    "for (x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (var x = 1 of [1,2,3,4]) print(x);",
    "for (var x, y of [1,2,3,4]) print(x + y);",
    "for (var x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (let x = 1 of [1,2,3,4]) print(x);",
    "for (let x, y of [1,2,3,4]) print(x + y);",
    "for (let x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (const x = 1 of [1,2,3,4]) print(x);",
    "for (const x, y of [1,2,3,4]) print(x + y);",
    "for (const x = 1, y = 2 of [1,2,3,4]) print(x + y);"
  ];
  TestRun(test)
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(10, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(11, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(11, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(12, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(12, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(12, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(13, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(14, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(15, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(15, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(15, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(16, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(17, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(17, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["for of as legacy JS"] = function (test) {
  var code = [
    "for (let x of [1,2,3,4]) {",
    "    print(x);",
    "}",
    "for (let x of [1,2,3,4]) print(x);",
    "for (const x of [1,2,3,4]) print(x);",
    "for (x = 1 of [1,2,3,4]) print(x);",
    "for (x, y of [1,2,3,4]) print(x + y);",
    "for (x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (var x = 1 of [1,2,3,4]) print(x);",
    "for (var x, y of [1,2,3,4]) print(x + y);",
    "for (var x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (let x = 1 of [1,2,3,4]) print(x);",
    "for (let x, y of [1,2,3,4]) print(x + y);",
    "for (let x = 1, y = 2 of [1,2,3,4]) print(x + y);",
    "for (const x = 1 of [1,2,3,4]) print(x);",
    "for (const x, y of [1,2,3,4]) print(x + y);",
    "for (const x = 1, y = 2 of [1,2,3,4]) print(x + y);"
  ];
  TestRun(test)
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(10, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(11, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(11, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(12, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(12, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(12, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(13, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(14, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(15, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(15, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(15, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(16, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(17, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(17, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["array destructuring for of as esnext"] = function (test) {
  var basic = [
    "for ([i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);"
  ];

  TestRun(test, "basic")
    .addError(1, "Creating global 'for' variable. Should be 'for (var i ...'.")
    .addError(1, "Creating global 'for' variable. Should be 'for (var v ...'.")
    .test(basic, {esnext: true, undef: true, predef: ["print"]});

  var bad = [
    "for ([i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];

  TestRun(test, "errors #1")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .test(bad, {esnext: true, undef: true, predef: ["print"]});

  var bad2 = [
    "for (let [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];
  TestRun(test, "errors #2")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .test(bad2, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["array destructuring for of as es5"] = function (test) {
  var basic = [
    "for ([i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);"
  ];

  TestRun(test, "basic")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Creating global 'for' variable. Should be 'for (var i ...'.")
    .addError(1, "Creating global 'for' variable. Should be 'for (var v ...'.")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(basic, {undef: true, predef: ["print"]}); // es5

  var bad = [
    "for ([i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];

  TestRun(test, "errors #1")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad, {undef: true, predef: ["print"]}); // es5

  var bad2 = [
    "for (let [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];
  TestRun(test, "errors #2")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad2, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["array destructuring for of as legacy JS"] = function (test) {
  var basic = [
    "for ([i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);"
  ];

  TestRun(test, "basic")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Creating global 'for' variable. Should be 'for (var i ...'.")
    .addError(1, "Creating global 'for' variable. Should be 'for (var v ...'.")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(basic, {es3: true, undef: true, predef: ["print"]}); // es3

  var bad = [
    "for ([i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for ([i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (var [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];

  TestRun(test, "errors #1")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad, {es3: true, undef: true, predef: ["print"]}); // es3

  var bad2 = [
    "for (let [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (let [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
    "for (const [i, v], [a, b] = [1, 2] of [[0, 1],[1, 2],[2, 3],[3, 4]]) print(i + '=' + v);",
  ];
  TestRun(test, "errors #2")
    .addError(1, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(3, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad2, {es3: true, undef: true, predef: ["print"]}); // es3

  test.done();
};

exports["object destructuring for of as esnext"] = function (test) {
  var basic = [
    "var obj1 = { key: 'a', data: { value: 1 } };",
    "var obj2 = { key: 'b', data: { value: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: { value } } of arr) print(key + '=' + value);",
    "for (var {key, data: { value } } of arr) print(key + '=' + value);",
    "for (let {key, data: { value } } of arr) print(key + '=' + value);",
    "for (const {key, data: { value } } of arr) print(key + '=' + value);"
  ];

  TestRun(test, "basic")
    .addError(4, "Creating global 'for' variable. Should be 'for (var key ...'.")
    .addError(4, "Creating global 'for' variable. Should be 'for (var value ...'.")
    .test(basic, {esnext: true, undef: true, predef: ["print"]});

  var bad = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #1")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .test(bad, {esnext: true, undef: true, predef: ["print"]});

  var bad2 = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for (let {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #2")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .test(bad2, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["object destructuring for of as es5"] = function (test) {
  var basic = [
    "var obj1 = { key: 'a', data: { value: 1 } };",
    "var obj2 = { key: 'b', data: { value: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: { value } } of arr) print(key + '=' + value);",
    "for (var {key, data: { value } } of arr) print(key + '=' + value);",
    "for (let {key, data: { value } } of arr) print(key + '=' + value);",
    "for (const {key, data: { value } } of arr) print(key + '=' + value);"
  ];

  TestRun(test, "basic")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Creating global 'for' variable. Should be 'for (var key ...'.")
    .addError(4, "Creating global 'for' variable. Should be 'for (var value ...'.")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(basic, {undef: true, predef: ["print"]}); // es5

  var bad = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #1")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad, {undef: true, predef: ["print"]}); // es5

  var bad2 = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for (let {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #2")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad2, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["object destructuring for of as legacy JS"] = function (test) {
  var basic = [
    "var obj1 = { key: 'a', data: { value: 1 } };",
    "var obj2 = { key: 'b', data: { value: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: { value } } of arr) print(key + '=' + value);",
    "for (var {key, data: { value } } of arr) print(key + '=' + value);",
    "for (let {key, data: { value } } of arr) print(key + '=' + value);",
    "for (const {key, data: { value } } of arr) print(key + '=' + value);"
  ];

  TestRun(test, "basic")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Creating global 'for' variable. Should be 'for (var key ...'.")
    .addError(4, "Creating global 'for' variable. Should be 'for (var value ...'.")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(basic, {es3: true, undef: true, predef: ["print"]}); // es3

  var bad = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for ({key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for ({key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (var {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #1")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad, {es3: true, undef: true, predef: ["print"]}); // es3

  var bad2 = [
    "var obj1 = { key: 'a', data: { val: 1 } };",
    "var obj2 = { key: 'b', data: { val: 2 } };",
    "var arr = [obj1, obj2];",
    "for (let {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (let {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}} = obj1 of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} of arr) print(key + '=' + val);",
    "for (const {key, data: {val}}, {a, b} = obj1 of arr) print(key + '=' + val);"
  ];

  TestRun(test, "errors #2")
    .addError(4, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(6, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(7, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(8, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'for of' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "Invalid for-of loop left-hand-side: initializer is forbidden.")
    .addError(9, "Invalid for-of loop left-hand-side: more than one ForBinding.")
    .addError(9, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(9, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(bad2, {es3: true, undef: true, predef: ["print"]}); // es3

  test.done();
};

exports["try multi-catch for moz extensions"] = function (test) {
  var code = [
    "try {",
    "    print('X');",
    "} catch (err) {",
    "    print(err);",
    "} catch (err) {",
    "    print(err);",
    "} finally {",
    "    print('Z');",
    "}"
  ];
  TestRun(test)
    .test(code, {moz: true, undef: true, predef: ["print"]});

  test.done();
};

exports["try multi-catch as esnext"] = function (test) {
  var code = [
    "try {",
    "    print('X');",
    "} catch (err) {",
    "    print(err);",
    "} catch (err) {",
    "    print(err);",
    "} finally {",
    "    print('Z');",
    "}"
  ];
  TestRun(test)
    .addError(5, "'multiple catch blocks' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {esnext: true, undef: true, predef: ["print"]});

  test.done();
};

exports["try multi-catch as es5"] = function (test) {
  var code = [
    "try {",
    "    print('X');",
    "} catch (err) {",
    "    print(err);",
    "} catch (err) {",
    "    print(err);",
    "} finally {",
    "    print('Z');",
    "}"
  ];
  TestRun(test)
    .addError(5, "'multiple catch blocks' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {undef: true, predef: ["print"]}); // es5

  test.done();
};

exports["try multi-catch as legacy JS"] = function (test) {
  var code = [
    "try {",
    "    print('X');",
    "} catch (err) {",
    "    print(err);",
    "} catch (err) {",
    "    print(err);",
    "} finally {",
    "    print('Z');",
    "}"
  ];

  TestRun(test)
    .addError(5, "'multiple catch blocks' is only available in Mozilla JavaScript extensions " +
      "(use moz option).")
    .test(code, {es3: true, undef: true, predef: ["print"]});

  test.done();
};

exports["no let not directly within a block"] = function (test) {
  var code = [
    "if (true) let x = 1;",
    "function foo() {",
    "   if (true)",
    "       let x = 1;",
    "}",
    "for (let x = 0; x < 42; ++x) let a = 1;",
    "for (let x in [1, 2, 3, 4] ) let a = 1;",
    "for (let x of [1, 2, 3, 4] ) let a = 1;",
    "while (true) let a = 1;",
    "if (false) let a = 1; else if (true) let a = 1; else let a = 2;",
    "if (true) if (false) let x = 1;",
    "if (true) if (false) { let x = 1; }",
    "if (true) try { let x = 1; } catch (e) { let x = 1; }"
  ];

  var run = TestRun(test)
    .addError(1, "Let declaration not directly within block.")
    .addError(4, "Let declaration not directly within block.")
    .addError(6, "Let declaration not directly within block.")
    .addError(7, "Let declaration not directly within block.")
    .addError(8, "Let declaration not directly within block.")
    .addError(9, "Let declaration not directly within block.")
    .addError(10, "Let declaration not directly within block.")
    .addError(10, "Let declaration not directly within block.")
    .addError(10, "Let declaration not directly within block.")
    .addError(11, "Let declaration not directly within block.");
  run.test(code, {esversion: 6});
  run.test(code, {moz: true});

  // Don't warn about let expressions
  TestRun(test).test("if (true) let (x = 1) print(x);", {moz: true, predef: ["print"]});

  test.done();
};

exports["no const not directly within a block"] = function (test) {
  var code = [
    "if (true) const x = 1;",
    "function foo() {",
    "   if (true)",
    "       const x = 1;",
    "}",
    "for (let x = 0; x < 42; ++x) const a = 1;",
    "while (true) const a = 1;",
    "if (false) const a = 1; else if (true) const a = 1; else const a = 2;",
    "if (true) if (false) { const a = 1; }"
  ];

  TestRun(test)
    .addError(1, "Const declaration not directly within block.")
    .addError(4, "Const declaration not directly within block.")
    .addError(6, "Const declaration not directly within block.")
    .addError(7, "Const declaration not directly within block.")
    .addError(8, "Const declaration not directly within block.")
    .addError(8, "Const declaration not directly within block.")
    .addError(8, "Const declaration not directly within block.")
    .test(code, {predef: ["print"], esnext: true});

  test.done();
};

exports["test: let declared directly within block"] = function (test) {
  var code = [
    "for (let i;;){",
    "  console.log(i);",
    "}"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  code = [
    "for (let i;;)",
    "  console.log(i);"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  test.done();
};

exports["test: let is directly within nested block"] = function (test) {
  var code   = [
    "if(true) {",
    "  for (let i;;)",
    "    console.log(i);",
    "}"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  code   = [
    "if(true)",
    "  for (let i;;)",
    "    console.log(i);"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  code   = [
    "if(true) {",
    "  for (let i;;){",
    "    console.log(i);",
    "  }",
    "}"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  test.done();
};

exports["regression test for crash from GH-964"] = function (test) {
  var code = [
    "function test(a, b) {",
    "  return a[b] || a[b] = new A();",
    "}"
  ];

  TestRun(test)
    .addError(2, "Bad assignment.")
    .addError(2, "Did you mean to return a conditional instead of an assignment?")
    .test(code);

  test.done();
};

exports.ASI = {};
exports.ASI.gh950 = function (test) {
  var code = [
    "var a = b",
    "instanceof c;",

    "var a = { b: 'X' }",
    "delete a.b",

    "var y = true",
    "           && true && false;",

    "function test() {",
    "  return",
    "      { a: 1 }",
    "}",

    "a",
    "++",
    "a",
    "a",
    "--",
    "a",
  ];

  var run = TestRun(test)
    .addError(2, "Misleading line break before 'instanceof'; readers may interpret this as an expression boundary.")
    .addError(6, "Misleading line break before '&&'; readers may interpret this as an expression boundary.")
    .addError(8, "Line breaking error 'return'.")
    .addError(9, "Label 'a' on 1 statement.")
    .addError(9, "Expected an assignment or function call and instead saw an expression.")
    .addError(11, "Expected an assignment or function call and instead saw an expression.")
    .addError(14, "Expected an assignment or function call and instead saw an expression.");

  run.test(code, {es3: true, asi: true});
  run.test(code, {asi: true}); // es5
  run.test(code, {esnext: true, asi: true});
  run.test(code, {moz: true, asi: true});

  run = TestRun(test)
    .addError(2, "Misleading line break before 'instanceof'; readers may interpret this as an expression boundary.")
    .addError(3, "Missing semicolon.")
    .addError(4, "Missing semicolon.")
    .addError(6, "Misleading line break before '&&'; readers may interpret this as an expression boundary.")
    .addError(8, "Line breaking error 'return'.")
    .addError(8, "Missing semicolon.")
    .addError(9, "Label 'a' on 1 statement.")
    .addError(9, "Expected an assignment or function call and instead saw an expression.")
    .addError(9, "Missing semicolon.")
    .addError(11, "Expected an assignment or function call and instead saw an expression.")
    .addError(11, "Missing semicolon.")
    .addError(13, "Missing semicolon.")
    .addError(14, "Expected an assignment or function call and instead saw an expression.")
    .addError(14, "Missing semicolon.")
    .addError(16, "Missing semicolon.");

  run.test(code, {es3: true, asi: false});
  run.test(code, {asi: false}); // es5
  run.test(code, {esnext: true, asi: false});
  run.test(code, {moz: true, asi: false});

  test.done();
};

// gh-3037 - weird behaviour (yield related)
// https://github.com/jshint/jshint/issues/3037
exports.ASI.followingYield = function (test) {
  var code = [
    "function* g() {",
    "  void 0",
    "  yield;",
    "}"
  ];

  TestRun(test)
    .addError(2, "Missing semicolon.")
    .test(code, { esversion: 6 });

  TestRun(test)
    .test(code, { esversion: 6, asi: true });

  test.done();
};

exports.ASI.followingPostfix = function (test) {
  var code = [
    "x++",
    "void 0;",
    "x--",
    "void 0;"
  ];

  TestRun(test)
    .addError(1, "Missing semicolon.")
    .addError(3, "Missing semicolon.")
    .test(code);

  TestRun(test)
    .test(code, { asi: true });

  test.done();
};

exports["fat arrows support"] = function (test) {
  var code = [
    "let empty = () => {};",
    "let identity = x => x;",
    "let square = x => x * x;",
    "let key_maker = val => ({key: val});",
    "let odds = evens.map(v => v + 1);",
    "let fives = []; nats.forEach(v => { if (v % 5 === 0) fives.push(v); });",

    "let block = (x,y, { z: t }) => {",
    "  print(x,y,z);",
    "  print(j, t);",
    "};",

    // using lexical this
    "const obj = {",
    "  method: function () {",
    "    return () => this;",
    "  }",
    "};",

    "let retnObj = () => ({});",
    "let assgnRetnObj = (() => ({}))();",
    "let retnObjLong = () => { return {}; };",
    "let assgnRetnObjLong = (() => { return {}; })();",

    "let objFns = {",
    "  retnObj: () => ({}),",
    "  assgnRetnObj: (() => ({}))(),",
    "  retnObjLong: () => { return {}; },",
    "  assgnRetnObjLong: (() => { return {}; })()",
    "};",

    // GH-2351
    "let immediatelyInvoked = (x => {})(0);"
  ];

  var run = TestRun(test)
    .addError(5, "'evens' is not defined.")
    .addError(6, "'nats' is not defined.")
    .addError(8, "'print' is not defined.")
    .addError(9, "'print' is not defined.")
    .addError(9, "'j' is not defined.")
    .addError(8, "'z' is not defined.");

  run.test(code, { undef: true, esnext: true });

  run = TestRun(test)
    .addError(1, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'evens' is not defined.")
    .addError(6, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'nats' is not defined.")
    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(8, "'print' is not defined.")
    .addError(8, "'z' is not defined.")
    .addError(9, "'print' is not defined.")
    .addError(9, "'j' is not defined.")
    .addError(13, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(16, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(18, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(19, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(21, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(22, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(23, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(26, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').");

  run.test(code, { undef: true, moz: true });

  run = TestRun(test)
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(13, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(16, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "Bad invocation.")
    .addError(18, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(18, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(19, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(19, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(19, "Bad invocation.")
    .addError(20, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(22, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(22, "Bad invocation.")
    .addError(23, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "Bad invocation.")
    .addError(26, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(26, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').");

  run.test(code); // es5
  run.test(code, {es3: true});

  test.done();
};

exports["fat arrow nested function scoping"] = function (test) {
  var code = [
    "(() => {",
    "  for (var i = 0; i < 10; i++) {",
    "    var x;",
    "  }",
    "  var arrow = (x) => {",
    "    return x;",
    "  };",
    "  var arrow2 = (x) => x;",
    "  arrow();",
    "  arrow2();",
    "})();",
    "(function() {",
    "  for (var i = 0; i < 10; i++) {",
    "    var x;",
    "  }",
    "  var arrow = (x) => {",
    "    return x;",
    "  };",
    "  var arrow2 = (x) => x;",
    "  arrow();",
    "  arrow2();",
    "})();"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  test.done();
};

exports["default arguments in fat arrow functions"] = function (test) {
  TestRun(test)
    .test("(x = 0) => { return x; };", { expr: true, unused: true, esnext: true });

  test.done();
};

exports["expressions in place of arrow function parameters"] = function (test) {
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw '1'.")
    .test("(1) => {};", { expr: true, esnext: true });

  test.done();
};

exports["arrow function parameter containing semicolon (gh-3002)"] = function (test) {
  TestRun(test)
    .addError(1, "Unnecessary semicolon.", { character: 19 })
    .addError(1, "Expected an assignment or function call and instead saw an expression.", { character: 27 })
    .test("(x = function() { ; }) => 0;", { esversion: 6 });

  test.done();
};

var conciseMethods = exports.conciseMethods = {};

conciseMethods.basicSupport = function (test) {
  var code = [
    "var foobar = {",
    "  foo () {",
    "    return 'foo';",
    "  },",
    "  *bar () {",
    "    yield 'bar';",
    "  }",
    "};"
  ];

  var run = TestRun(test);
  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  run = TestRun(test)
    .addError(2, "'concise methods' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'generator functions' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'concise methods' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).");

  run.test(code); // es5
  run.test(code, {es3: true});

  test.done();
};

conciseMethods.getAndSet = function (test) {
  var code = [
    "var a = [1, 2, 3, 4, 5];",
    "var strange = {",
    "  get (i) {",
    "    return a[i];",
    "  },",
    "  set () {",
    "    a.forEach(function(v, i, l) { l[i] = v++; });",
    "  }",
    "};"
  ];

  TestRun(test).test(code, {esnext: true});

  test.done();
};

conciseMethods.getWithoutSet = function (test) {
  var code = [
    "var a = [1, 2, 3, 4, 5];",
    "var strange = {",
    "  get () {",
    "    return a;",
    "  }",
    "};"
  ];

  TestRun(test).test(code, {esnext: true});

  test.done();
};

conciseMethods.getWithoutSet = function (test) {
  var code = [
    "var a = [1, 2, 3, 4, 5];",
    "var strange = {",
    "  set (v) {",
    "    a = v;",
    "  }",
    "};"
  ];

  TestRun(test).test(code, {esnext: true});

  test.done();
};

// GH-2022: "Concise method names are colliding with params/variables"
conciseMethods.nameIsNotLocalVar = function (test) {
  var code = [
    "var obj = {",
    "  foo(foo) {},",
    "  bar() { var bar; }",
    "};"
  ];

  TestRun(test).test(code, {esnext: true});

  test.done();
};

exports["object short notation: basic"] = function (test) {
  var code = [
    "var foo = 42;",
    "var bar = {foo};",
    "var baz = {foo, bar};",
    "var biz = {",
    "  foo,",
    "  bar",
    "};"
  ];

  TestRun(test, 1).test(code, {esnext: true});

  TestRun(test, 2)
    .addError(2, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code);

  test.done();
};

exports["object short notation: mixed"] = function (test) {
  var code = [
    "var b = 1, c = 2;",
    "var o1 = {a: 1, b, c};",
    "var o2 = {b, a: 1, c};"
  ].join("\n");

  TestRun(test).test(code, { esnext: true });

  TestRun(test)
    .addError(2, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'object short notation' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
  .test(code);

  test.done();
};

exports["object ComputedPropertyName"] = function (test) {
  var code = [
    "function fn(obj) {}",
    "function p() { return 'key'; }",
    "var vals = [1];",
    "var a = 7;",
    "var o1 = {",
      "[a++]: true,",
      "obj: { [a++ + 1]: true },",
      "[a + 3]() {},",
      "[p()]: true,",
      "[vals[0]]: true,",
      "[(1)]: true,",
    "};",
    "fn({ [a / 7]: true });",
    "var b = { '[': 1 };",
    "var c = { [b]: 1 };",
    "var d = { 0: 1 };",
    "var e = { ['s']: 1 };",
  ];

  TestRun(test).test(code, { esnext: true });

  TestRun(test)
    .addError(6, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(8, "'concise methods' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(9, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(13, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(15, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "'computed property names' is only available in ES6 (use 'esversion: 6').")
  .test(code);

  test.done();
};

exports["spread & rest operator support"] = function (test) {
  var code = [
    // 1
    // Spread Identifier
    "foo(...args);",

    // 2
    // Spread Array Literal
    "foo(...[]);",

    // 3, 4
    // Spread String Literal
    "foo(...'');",
    'foo(..."");',

    // 5
    // Spread Group
    "foo(...([]));",

    // 6, 7, 8
    // Spread Operator
    "let initial = [ 1, 2, 3, 4, 5 ];",
    "let extended = [ ...initial, 6, 7, 8, 9 ];",
    "let nest = [ ...[], 6, 7, 8, 9 ];",

    // 9
    // Rest Operator
    "function foo(...args) {}",

    // 10
    // Rest Operator (Fat Arrow Params)
    "let bar = (...args) => args;",

    // 11
    "foo(...[].entries());",

    // 12
    "foo(...(new Map()).set('a', 1).values());"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  TestRun(test)
    .addError(1, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(8, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(9, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(12, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .test(code, {moz: true});

  TestRun(test)
    .addError(1, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")

    .addError(7, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(8, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(9, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(12, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .test(code);

  test.done();
};

exports["parameter destructuring with rest"] = function (test) {
  var code = [
    // 1
    // parameter destructuring with rest operator, solo
    "let b = ([...args]) => args;",

    // 2
    // ...in function expression
    "let c = function([...args]) { return args; };",

    // 3
    // ...in function declaration
    "function d([...args]) { return args; }",

    // 4
    // default destructuring with rest operator, with leading param
    "let e = ([first, ...args]) => args;",

    // 5
    // ...in function expression
    "let f = function([first, ...args]) { return args; };",

    // 6
    // ...in function declaration
    "function g([first, ...args]) { return args; }",

    // 7
    // Just rest
    "let h = (...args) => args;",

    // 8
    // ...in function expression
    "let i = function(...args) { return args; };",

    // 9
    // ...in function declaration
    "function j(...args) { return args; }"
  ];

  var run = TestRun(test);
  run.test(code, {esnext: true});

  run = TestRun(test)
    .addError(1, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(1, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(1, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(1, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(8, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")
    .addError(9, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').");

  run.test(code, {moz: true});

  run = TestRun(test)
    .addError(1, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(1, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(1, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(2, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(2, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(3, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(8, "'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').")

    .addError(9, "'spread/rest operator' is only available in ES6 (use 'esversion: 6').");


  run.test(code);

  test.done();
};

exports["test for GH-1010"] = function (test) {
  var code = [
    "var x = 20, y, z; if(x < 30) y=7, z=2; else y=5;"
  ];

  var run = TestRun(test);
  run.test(code, {expr: true, es3: true});
  run.test(code, {expr: true}); // es5
  run.test(code, {expr: true, esnext: true});
  run.test(code, {expr: true, moz: true});

  test.done();
};

exports.classes = function (test) {
  var cdecl = "// cdecl";
  var cexpr = "// cexpr";
  var cdeclAssn = "// cdeclAssn";
  var cexprAssn = "// cexprAssn";
  var code = [
    "var Bar;",

    // class declarations
    cdecl,
    "class Foo0 {}",
    "class Foo1 extends Bar {}",
    "class protected {",
    "  constructor(package) {}",
    "}",
    "class Foo3 extends interface {",
    "  constructor() {}",
    "}",
    "class Foo4 extends Bar {",
    "  constructor() {",
    "    super();",
    "  }",
    "}",
    "class Foo5 {",
    "  constructor() {",
    "  }",
    "  static create() {",
    "  }",
    "}",
    "class Foo6 extends Bar {",
    "  constructor() {",
    "    super();",
    "  }",
    "  static create() {",
    "  }",
    "}",

    // class expressions
    cexpr,
    "var Foo7 = class {};",
    "let Foo8 = class extends Bar {};",
    "var static = class protected {",
    "  constructor(package) {}",
    "};",
    "var Foo10 = class extends interface {",
    "  constructor() {}",
    "};",
    "var Foo11 = class extends Bar {",
    "  constructor() {",
    "    super();",
    "  }",
    "};",
    "var Foo12 = class {",
    "  constructor() {",
    "  }",
    "  static create() {",
    "  }",
    "};",
    "let Foo13 = class extends Bar {",
    "  constructor() {",
    "    super();",
    "  }",
    "  static create() {",
    "  }",
    "};",

    // mark these as used
    "void (Foo1, Foo3, Foo4, Foo5, Foo6);",
    "void (Foo8, Foo10, Foo11, Foo12, Foo13);",

    // class declarations: extends AssignmentExpression
    cdeclAssn,
    "class Foo14 extends Bar[42] {}",
    "class Foo15 extends { a: function() { return 42; } } {}",
    "class Foo16 extends class Foo15 extends Bar {} {}",
    "class Foo17 extends Foo15 = class Foo16 extends Bar {} {}",
    "class Foo18 extends function () {} {}",
    "class Foo19 extends class extends function () {} {} {}",
    "class Foo20 extends Foo18 = class extends Foo17 = function () {} {} {}",

    // class expressions: extends AssignmentExpression
    cexprAssn,
    "let Foo21 = class extends Bar[42] {};",
    "let Foo22 = class extends { a() { return 42; } } {};",
    "let Foo23 = class extends class Foo15 extends Bar {} {};",
    "let Foo24 = class extends Foo15 = class Foo16 extends Bar {} {};",
    "let Foo25 = class extends function () {} {};",
    "let Foo26 = class extends class extends function () {} {} {};",
    "let Foo27 = class extends Foo18 = class extends Foo17 = function () {} {} {};",

    // mark these as used
    "void (Foo14, Foo15, Foo16, Foo17, Foo18, Foo19, Foo20);",
    "void (Foo21, Foo22, Foo23, Foo24, Foo25, Foo26, Foo27);"
  ];

  cdecl = code.indexOf(cdecl) + 1;
  cexpr = code.indexOf(cexpr) + 1;
  cdeclAssn = code.indexOf(cdeclAssn) + 1;
  cexprAssn = code.indexOf(cexprAssn) + 1;

  var run = TestRun(test)
    .addError(cdecl + 4, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(cexpr + 4, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(cdeclAssn + 4, "Reassignment of 'Foo15', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cdeclAssn + 7, "Reassignment of 'Foo18', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cdeclAssn + 7, "Reassignment of 'Foo17', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 4, "Reassignment of 'Foo15', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 7, "Reassignment of 'Foo18', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 7, "Reassignment of 'Foo17', which is is a class. Use 'var' or 'let' to declare bindings that may change.");

  run.test(code, {esnext: true});
  run.test(code, {moz: true});

  run
    .addError(cdecl + 1, "'Foo0' is defined but never used.")
    .addError(cdecl + 3, "Expected an identifier and instead saw 'protected' (a reserved word).")
    .addError(cdecl + 3, "'protected' is defined but never used.")
    .addError(cdecl + 4, "'package' is defined but never used.");
  run
    .addError(cexpr + 1, "'Foo7' is defined but never used.")
    .addError(cexpr + 3, "Expected an identifier and instead saw 'static' (a reserved word).")
    .addError(cexpr + 3, "'static' is defined but never used.")
    .addError(cexpr + 3, "Expected an identifier and instead saw 'protected' (a reserved word).")
    .addError(cexpr + 4, "'package' is defined but never used.");

  run
    .addError(cdeclAssn + 4, "Reassignment of 'Foo15', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cdeclAssn + 7, "Reassignment of 'Foo18', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cdeclAssn + 7, "Reassignment of 'Foo17', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 4, "Reassignment of 'Foo15', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 7, "Reassignment of 'Foo18', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(cexprAssn + 7, "Reassignment of 'Foo17', which is is a class. Use 'var' or 'let' to declare bindings that may change.");

  code[0] = "'use strict';" + code[0];
  run.test(code, {unused: true, globalstrict: true, esnext: true});
  run.test(code, {unused: true, globalstrict: true, moz: true});

  test.done();
};

exports["class and method naming"] = function (test) {
  var code = [
    "class eval {}",
    "class arguments {}",
    "class C {",
    "  get constructor() {}",
    "  set constructor(x) {}",
    "  prototype() {}",
    "  an extra identifier 'in' methodName() {}",
    "  get foo extraIdent1() {}",
    "  set foo extraIdent2() {}",
    "  static some extraIdent3() {}",
    "  static get an extraIdent4() {}",
    "  static set an extraIdent5() {}",
    "  get dupgetter() {}",
    "  get dupgetter() {}",
    "  set dupsetter() {}",
    "  set dupsetter() {}",
    "  static get dupgetter() {}",
    "  static get dupgetter() {}",
    "  static set dupsetter() {}",
    "  static set dupsetter() {}",
    "  dupmethod() {}",
    "  dupmethod() {}",
    "  static dupmethod() {}",
    "  static dupmethod() {}",
    "  ['computed method']() {}",
    "  static ['computed static']() {}",
    "  get ['computed getter']() {}",
    "  set ['computed setter']() {}",
    "  (typo() {}",
    "  set lonely() {}",
    "  set lonel2",
    "            () {}",
    "  *validGenerator() { yield; }",
    "  static *validStaticGenerator() { yield; }",
    "  *[1]() { yield; }",
    "  static *[1]() { yield; }",
    "  * ['*']() { yield; }",
    "  static *['*']() { yield; }",
    "  * [('*')]() { yield; }",
    "  static *[('*')]() { yield; }",
    "}"
  ];
  var run = TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'eval' (a reserved word).")
    .addError(2, "Expected an identifier and instead saw 'arguments' (a reserved word).")
    .addError(4, "A class getter method cannot be named 'constructor'.")
    .addError(5, "A class setter method cannot be named 'constructor'.")
    .addError(6, "A class method cannot be named 'prototype'.")
    .addError(7, "Class properties must be methods. Expected '(' but instead saw 'extra'.")
    .addError(8, "Class properties must be methods. Expected '(' but instead saw 'extraIdent1'.")
    .addError(9, "Class properties must be methods. Expected '(' but instead saw 'extraIdent2'.")
    .addError(10, "Class properties must be methods. Expected '(' but instead saw 'extraIdent3'.")
    .addError(11, "Class properties must be methods. Expected '(' but instead saw 'extraIdent4'.")
    .addError(12, "Class properties must be methods. Expected '(' but instead saw 'extraIdent5'.")
    .addError(14, "Duplicate getter method 'dupgetter'.")
    .addError(16, "Duplicate setter method 'dupsetter'.")
    .addError(16, "Setter is defined without getter.")
    .addError(18, "Duplicate static getter method 'dupgetter'.")
    .addError(20, "Duplicate static setter method 'dupsetter'.")
    .addError(22, "Duplicate class method 'dupmethod'.")
    .addError(24, "Duplicate static class method 'dupmethod'.")
    .addError(29, "Unexpected '('.")
    .addError(30, "Setter is defined without getter.")
    .addError(31, "Setter is defined without getter.");

  run.test(code, {esnext: true});

  test.done();
};

exports["computed class methods aren't duplicate"] = function (test) {
  var code = [
    "const obj = {};",
    "class A {",
    "  [Symbol()]() {}",
    "  [Symbol()]() {}",
    "  [obj.property]() {}",
    "  [obj.property]() {}",
    "  [obj[0]]() {}",
    "  [obj[0]]() {}",
    "  [`template`]() {}",
    "  [`template2`]() {}",
    "}"
  ];

  // JSHint shouldn't throw a "Duplicate class method" warning with computed method names
  // GH-2350
  TestRun(test).test(code, { esnext: true });

  test.done();
};

exports["class method this"] = function (test) {
  var code = [
  "class C {",
  "  constructor(x) {",
  "    this._x = x;",
  "  }",
  "  x() { return this._x; }",
  "  static makeC(x) { return new this(x); }",
  "  0() { return this._x + 0; }",
  "  ['foo']() { return this._x + 6; }",
  "  'test'() { return this._x + 'test'; }",
  "  bar() { function notCtor() { return this; } notCtor(); }",
  "}"
  ];

  TestRun(test)
    .addError(10, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(code, {esnext: true});

  test.done();
};

exports.classNewcap = function (test) {
  var code = [
    "class C {",
    "  m() {",
    "    var ctor = function() {};",
    "    var Ctor = function() {};",
    "    var c1 = new ctor();",
    "    var c2 = Ctor();",
    "  }",
    "}"
  ];

  TestRun(test, "The `newcap` option is not automatically enabled within class bodies.")
    .test(code, { esversion: 6 });

  test.done();
};

exports.classExpression = function (test) {
  var code = [
    "void class MyClass {",
    "  constructor() { MyClass = null; }",
    "  method() { MyClass = null; }",
    "  static method() { MyClass = null; }",
    "  get accessor() { MyClass = null; }",
    "  set accessor() { MyClass = null; }",
    "  method2() { MyClass &= null; }",
    "};",
    "void MyClass;"
  ];

  TestRun(test)
    .addError(2, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(3, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(4, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(5, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(6, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(7, "Reassignment of 'MyClass', which is is a class. Use 'var' or 'let' to declare bindings that may change.")
    .addError(9, "'MyClass' is not defined.")
    .test(code, { esnext: true, undef: true });

  test.done();
};

exports.functionReassignment = function (test) {
  var src = [
    "function f() {}",
    "f = null;",
    "f ^= null;",
    "function g() {",
    "  g = null;",
    "  g &= null;",
    "}",
    "(function h() {",
    "  h = null;",
    "  h |= null;",
    "}());"
  ];

  TestRun(test)
    .addError(2, "Reassignment of 'f', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(3, "Reassignment of 'f', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(5, "Reassignment of 'g', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(6, "Reassignment of 'g', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(9, "Reassignment of 'h', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(10, "Reassignment of 'h', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .test(src);

  test.done();
};

exports.functionNotOverwritten = function (test) {
  var code = [
    "function x() {",
    "  x = 1;",
    "  var x;",
    "}"
  ];

  TestRun(test)
    .test(code, { shadow: true });

  test.done();
};

exports.classExpressionThis = function (test) {
  var code = [
    "void class MyClass {",
    "  constructor() { return this; }",
    "  method() { return this; }",
    "  static method() { return this; }",
    "  get accessor() { return this; }",
    "  set accessor() { return this; }",
    "};"
  ];

  TestRun(test)
    .test(code, { esnext: true });

  test.done();
};

exports.classElementEmpty = function (test) {
  var code = [
    "class A {",
    "  ;",
    "  method() {}",
    "  ;",
    "  *methodB() { yield; }",
    "  ;;",
    "  methodC() {}",
    "  ;",
    "}",
  ];

  TestRun(test)
    .addError(2, "Unnecessary semicolon.")
    .addError(4, "Unnecessary semicolon.")
    .addError(6, "Unnecessary semicolon.")
    .addError(6, "Unnecessary semicolon.")
    .addError(8, "Unnecessary semicolon.")
    .test(code, { esnext: true });

  test.done();
};

exports.invalidClasses = function (test) {
  // Regression test for GH-2324
  TestRun(test)
    .addError(1, "Class properties must be methods. Expected '(' but instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("class a { b", { esnext: true });

  // Regression test for GH-2339
  TestRun(test)
    .addError(2, "Class properties must be methods. Expected '(' but instead saw ':'.")
    .addError(3, "Expected '(' and instead saw '}'.")
    .addError(4, "Expected an identifier and instead saw '}'.")
    .addError(4, "Unrecoverable syntax error. (100% scanned).")
    .test([
        "class Test {",
        "  constructor: {",
        "  }",
        "}"
      ], { esnext: true });

  test.done();
};

exports["test for GH-1018"] = function (test) {
  var code = [
    "if (a = 42) {}",
    "else if (a = 42) {}",
    "while (a = 42) {}",
    "for (a = 42; a = 42; a += 42) {}",
    "do {} while (a = 42);",
    "switch (a = 42) {}"
  ];

  var run = TestRun(test);
  run.test(code, {boss: true});

  for (var i = 0; i < code.length; i++) {
    run.addError(i + 1, "Expected a conditional expression and instead saw an assignment.");
  }

  run.test(code);

  test.done();
};

exports["test warnings for assignments in conditionals"] = function (test) {
  var code = [
    "if (a = b) { }",
    "if ((a = b)) { }",
    "if (a = b, a) { }",
    "if (a = b, b = c) { }",
    "if ((a = b, b = c)) { }",
    "if (a = b, (b = c)) { }"
  ];

  var run = TestRun(test)
    .addError(1, "Expected a conditional expression and instead saw an assignment.")
    .addError(4, "Expected a conditional expression and instead saw an assignment.");

  run.test(code); // es5

  test.done();
};

exports["test for GH-1089"] = function (test) {
  var code = [
    "function foo() {",
    "    'use strict';",
    "    Object.defineProperty(foo, 'property', {",
    "        get: function() foo,",
    "        set: function(value) {},",
    "        enumerable: true",
    "    });",
    "}",
    "foo;"
  ];

  var run = TestRun(test)
    .addError(9, "Expected an assignment or function call and instead saw an expression.");

  run.test(code, {moz: true});

  run
    .addError(4, "'function closure expressions' is only available in Mozilla JavaScript " +
        "extensions (use moz option).");
  run.test(code);

  test.done();
};

exports["test for GH-1105"] = function (test) {
  var code = [
    "while (true) {",
    "    if (true) { break }",
    "}"
  ];

  var run = TestRun(test)
    .addError(2, "Missing semicolon.");

  run.test(code);
  test.done();
};

exports["test for crash with invalid condition"] = function (test) {
  var code = [
    "do {} while ();",
    "do {} while (,);",
    "do {} while (a,);",
    "do {} while (,b);",
    "do {} while (());",
    "do {} while ((,));",
    "do {} while ((a,));",
    "do {} while ((,b));"
  ];

  // As long as jshint doesn't crash, it doesn't matter what these errors
  // are. Feel free to adjust these if they don't match the output.
  var run = TestRun(test)
    .addError(1, "Expected an identifier and instead saw ')'.")
    .addError(1, "Expected ')' to match '(' from line 1 and instead saw ';'.")
    .addError(2, "Expected an identifier and instead saw ','.")
    .addError(3, "Unexpected ')'.")
    .addError(4, "Expected an identifier and instead saw ','.")
    .addError(4, "Expected ')' to match '(' from line 4 and instead saw 'b'.")
    .addError(4, "Expected an identifier and instead saw ')'.")
    .addError(4, "Missing semicolon.")
    .addError(6, "Expected an identifier and instead saw ','.")
    .addError(7, "Unexpected ')'.")
    .addError(7, "Expected an identifier and instead saw ')'.")
    .addError(7, "Expected ')' to match '(' from line 7 and instead saw ';'.")
    .addError(8, "Expected an identifier and instead saw ','.")
    .addError(8, "Expected ')' to match '(' from line 8 and instead saw 'b'.")
    .addError(8, "Expected an identifier and instead saw ')'.")
    .addError(8, "Missing semicolon.");

  run.test(code, {asi: true, expr: true});
  test.done();
};

exports["test 'yield' in compound expressions."] = function (test) {
  var code = fs.readFileSync(path.join(__dirname, "./fixtures/yield-expressions.js"), "utf8");

  var run = TestRun(test);

  run
    .addError(22, "Did you mean to return a conditional instead of an assignment?")
    .addError(23, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 22 })
    .addError(31, "Did you mean to return a conditional instead of an assignment?")
    .addError(32, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 20 })
    .addError(32, "Bad operand.", { character: 17 })
    .addError(51, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 10 })
    .addError(53, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 10 })
    .addError(54, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 16 })
    .addError(57, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 10 })
    .addError(58, "Bad operand.", { character: 11 })
    .addError(59, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 10 })
    .addError(59, "Bad operand.", { character: 16 })
    .addError(60, "Bad operand.", { character: 11 })
    .addError(60, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 14 })
    .addError(64, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 6 })
    .addError(65, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 7 })
    .addError(66, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 6 })
    .addError(67, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 7 })
    .addError(70, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 6 })
    .addError(71, "Invalid position for 'yield' expression (consider wrapping in parenthesis).", { character: 7 })
    .addError(77, "Bad operand.", { character: 11 })
    .addError(78, "Bad operand.", { character: 11 })
    .addError(78, "Bad operand.", { character: 19 })
    .addError(79, "Bad operand.", { character: 11 })
    .addError(79, "Bad operand.", { character: 19 })
    .addError(79, "Bad operand.", { character: 47 })
    .addError(82, "Bad operand.", { character: 11 })
    .addError(83, "Bad operand.", { character: 11 })
    .addError(83, "Bad operand.", { character: 19 })
    .addError(84, "Bad operand.", { character: 11 })
    .addError(84, "Bad operand.", { character: 19 })
    .addError(84, "Bad operand.", { character: 43 })
    .test(code, {maxerr: 1000, expr: true, esnext: true});

  run = TestRun(test)
    .addError(22, "Did you mean to return a conditional instead of an assignment?")
    .addError(31, "Did you mean to return a conditional instead of an assignment?");

  // These are line-column pairs for the Mozilla paren errors.
  var needparen = [
    // comma
    [ 5,  5], [ 6,  8], [ 7,  5], [11,  5], [12,  8], [13,  5],
    // yield in yield
    [18, 11], [19, 17], [19, 11], [20, 11], [20,  5], [21, 11], [21,  5], [21, 26], [22, 22],
    [23, 22], [23, 11], [27, 11], [28, 17], [28, 11], [29, 11], [29,  5], [30, 11], [30,  5],
    [30, 24], [31, 22], [32, 11], [32, 20],
    // infix
    [51, 10], [53, 10], [54, 16], [57, 10], [58,  5], [59, 10], [60,  5], [60, 14],
    // prefix
    [64,  6], [65,  7], [66,  6], [67,  7], [70,  6], [71,  7],
    // ternary
    [77,  5], [78,  5], [78, 13], [79,  5], [79, 13], [79, 41], [82,  5], [83,  5], [83, 13],
    [84,  5], [84, 13], [84, 37]
  ];

  needparen.forEach(function (lc) {
    run.addError(lc[0], "Mozilla requires the yield expression to be parenthesized here.",
                 {character: lc[1]});
  });

  run
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(74, "'function*' is only available in ES6 (use 'esversion: 6').");

  run.test(code, {maxerr: 1000, expr: true, moz: true});

  test.done();
};

exports["test 'yield' in invalid positions"] = function (test) {
  var testRun = TestRun(test, "as an invalid operand")
    .addError(1, "Invalid position for 'yield' expression (consider wrapping in parenthesis).");

  testRun.test("function* g() { null || yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { null || yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { null || yield* g(); }", { esversion: 6, expr: true });
  testRun.test("function* g() { null && yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { null && yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { null && yield* g(); }", { esversion: 6, expr: true });
  testRun.test("function* g() { !yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { !yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { !yield* g(); }", { esversion: 6, expr: true });
  testRun.test("function* g() { !!yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { !!yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { !!yield* g(); }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 + yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 + yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 + yield* g(); }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 - yield; }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 - yield null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { 1 - yield* g(); }", { esversion: 6, expr: true });

  testRun = TestRun(test, "with an invalid operand")
    .addError(1, "Bad operand.");

  testRun.test("function* g() { yield.x; }", { esversion: 6, expr: true });
  testRun.test("function* g() { yield*.x; }", { esversion: 6, expr: true });
  testRun.test("function* g() { yield ? null : null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { yield* ? null : null; }", { esversion: 6, expr: true });
  testRun.test("function* g() { (yield ? 1 : 1); }", { esversion: 6, expr: true });
  testRun.test("function* g() { (yield* ? 1 : 1); }", { esversion: 6, expr: true });
  TestRun(test)
    .addError(1, "Unclosed regular expression.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("function* g() { yield* / 1; }", { esversion: 6, expr: true });

  TestRun(test, 'as a valid operand')
    .test([
      "function* g() {",
      "  (yield);",
      "  var x = yield;",
      "  x = yield;",
      "  x = (yield, null);",
      "  x = (null, yield);",
      "  x = (null, yield, null);",
      "  x += yield;",
      "  x -= yield;",
      "  x *= yield;",
      "  x /= yield;",
      "  x %= yield;",
      "  x <<= yield;",
      "  x >>= yield;",
      "  x >>>= yield;",
      "  x &= yield;",
      "  x ^= yield;",
      "  x |= yield;",
      "  x = (yield) ? 0 : 0;",
      "  x = yield 0 ? 0 : 0;",
      "  x = 0 ? yield : 0;",
      "  x = 0 ? 0 : yield;",
      "  x = 0 ? yield : yield;",
      "  yield yield;",
      "}"
    ], { esversion: 6 });

  TestRun(test, "with a valid operand")
    .test([
      "function *g() {",
      "  yield g;",
      "  yield{};",
      // Misleading cases; potential future warning.
      "  yield + 1;",
      "  yield - 1;",
      "  yield[0];",
      "}"
    ], { esversion: 6 });

  var code = [
    "function* g() {",
    "  var x;",
    "  x++",
    "  yield;",
    "  x--",
    "  yield;",
    "}"
  ];

  TestRun(test, "asi")
    .addError(3, "Missing semicolon.")
    .addError(5, "Missing semicolon.")
    .test(code, { esversion: 6, expr: true });

  TestRun(test, "asi (ignoring warnings)")
    .test(code, { esversion: 6, expr: true, asi: true });

  test.done();
};

exports["test for GH-387"] = function (test) {
  var code = [
    "var foo = a",
    "delete foo.a;"
  ];

  var run = TestRun(test)
    .addError(1, "Missing semicolon.");

  run.test(code); // es5

  test.done();
};

exports["test for line breaks with 'yield'"] = function (test) {
  var code = [
    "function* F() {",
    "    a = b + (yield",
    "    c",
    "    );",
    "    d = yield",
    "    + e;",
    "    f = (yield",
    "    , g);",
    "    h = yield",
    "    ? i : j;",
    "    k = l ? yield",
    "    : m;",
    "    n = o ? p : yield",
    "    + r;",
    "}"
  ];

  var run = TestRun(test)
    .addError(3, "Expected ')' to match '(' from line 2 and instead saw 'c'.")
    .addError(3, "Missing semicolon.")
    .addError(4, "Expected an identifier and instead saw ')'.")
    .addError(4, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .addError(6, "Expected an assignment or function call and instead saw an expression.")
    .addError(7, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(8, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(9, "Missing semicolon.")
    .addError(10, "Expected an identifier and instead saw '?'.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(10, "Missing semicolon.")
    .addError(10, "Label 'i' on j statement.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(13, "Missing semicolon.")
    .addError(14, "Expected an assignment or function call and instead saw an expression.");

  run.test(code, {esnext: true});

  // Mozilla assumes the statement has ended if there is a line break
  // following a `yield`. This naturally causes havoc with the subsequent
  // parse.
  //
  // Note: there is one exception to the line-breaking rule:
  // ```js
  // a ? yield
  // : b;
  // ```
  run = TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(3, "Expected ')' to match '(' from line 2 and instead saw 'c'.")
    .addError(4, "Expected an identifier and instead saw ')'.")
    .addError(4, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Expected an assignment or function call and instead saw an expression.")
    .addError(8, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(7, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(10, "Expected an identifier and instead saw '?'.")
    .addError(10, "Missing semicolon.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(10, "Label 'i' on j statement.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(14, "Expected an assignment or function call and instead saw an expression.");

  run.test(code, {moz: true, asi: true});

  run
    .addError(2, "Line breaking error 'yield'.")
    .addError(3, "Missing semicolon.")
    .addError(5, "Line breaking error 'yield'.")
    .addError(5, "Missing semicolon.")
    .addError(7, "Line breaking error 'yield'.")
    .addError(9, "Line breaking error 'yield'.")
    .addError(9, "Missing semicolon.")
    .addError(11, "Line breaking error 'yield'.")
    .addError(13, "Line breaking error 'yield'.")
    .addError(13, "Missing semicolon.");

  run.test(code, {moz: true});

  var code2 = [
    "function* gen() {",
    "  yield",
    "  fn();",
    "  yield*",
    "  fn();",
    "}"
  ];

  TestRun(test, "gh-2530 (asi: true)")
    .addError(5, "Misleading line break before 'fn'; readers may interpret this as an expression boundary.")
    .test(code2, { esnext: true, undef: false, asi: true });

  TestRun(test, "gh-2530 (asi: false)")
    .addError(2, "Missing semicolon.")
    .addError(5, "Misleading line break before 'fn'; readers may interpret this as an expression boundary.")
    .test(code2, { esnext: true, undef: false });

  test.done();
};

// Regression test for gh-2956
exports.yieldRegExp = function (test) {
  var code = [
    "function* g() {",
    "  yield /./;",
    "  yield/./;",
    "  yield",
    "  /./;",
    "  yield /* comment */;",
    "  yield /* comment *//./;",
    "  yield 1 / 1;",
    "}"
  ];

  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "Missing semicolon.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(8, "'yield' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(code);

  TestRun(test)
    .addError(4, "Missing semicolon.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .test(code, { esversion: 6 });

  code = [
    "function* g() {",
    "  yield / 2;",
    "}"
  ];

  TestRun(test)
    .addError(1, "'function*' is only available in ES6 (use 'esversion: 6').")
    .addError(2, "Unclosed regular expression.")
    .addError(2, "Unrecoverable syntax error. (66% scanned).")
    .test(code);

  TestRun(test)
    .addError(2, "Unclosed regular expression.")
    .addError(2, "Unrecoverable syntax error. (66% scanned).")
    .test(code, { esversion: 6 });

  test.done();
};

exports.unreachable = {
  "regression for GH-1227": function (test) {
    var src = fs.readFileSync(__dirname + "/fixtures/gh1227.js", "utf8");

    TestRun(test)
      .addError(14, "Unreachable 'return' after 'return'.")
      .test(src);

    test.done();
  },
  break: function (test) {
    var src = [
      "var i = 0;",
      "foo: while (i) {",
      "  break foo;",
      "  i--;",
      "}"
    ];

    TestRun(test)
      .addError(4, "Unreachable 'i' after 'break'.")
      .test(src);

    test.done();
  },
  continue: function (test) {
    var src = [
      "var i = 0;",
      "while (i) {",
      "  continue;",
      "  i--;",
      "}"
    ];

    TestRun(test)
      .addError(4, "Unreachable 'i' after 'continue'.")
      .test(src);

    test.done();
  },
  return: function (test) {
    var src = [
      "(function() {",
      "  var x = 0;",
      "  return;",
      "  x++;",
      "}());"
    ];

    TestRun(test)
      .addError(4, "Unreachable 'x' after 'return'.")
      .test(src);

    test.done();
  },
  throw: function (test) {
    var src = [
      "throw new Error();",
      "var x;"
    ];

    TestRun(test)
      .addError(2, "Unreachable 'var' after 'throw'.")
      .test(src);

    test.done();
  },
  braceless: function (test) {
    var src = [
      "(function() {",
      "  var x;",
      "  if (x)",
      "    return;",
      "  return;",
      "}());"
    ];

    TestRun(test)
      .test(src);

    test.done();
  },
  // Regression test for GH-1387 "false positive: Unreachable 'x' after 'return'"
  nestedBraceless: function (test) {
    var src = [
      "(function() {",
      "  var x;",
      "  if (!x)",
      "    return function() {",
      "      if (!x) x = 0;",
      "      return;",
      "    };",
      "  return;",
      "}());"
    ];

    TestRun(test)
      .test(src);

    test.done();
  }
};

exports["test for 'break' in switch case + curly braces"] = function (test) {
  var code = [
    "switch (foo) {",
    "  case 1: { break; }",
    "  case 2: { return; }",
    "  case 3: { throw 'Error'; }",
    "  case 11: {",
    "    while (true) {",
    "      break;",
    "    }",
    "  }",
    "  default: break;",
    "}"
  ];

  // No error for case 1, 2, 3.
  var run = TestRun(test)
    .addError(9, "Expected a 'break' statement before 'default'.")
    .test(code);

  test.done();
};

exports["test for 'break' in switch case in loop + curly braces"] = function (test) {
  var code = [
    "while (true) {",
    "  switch (foo) {",
    "    case 1: { break; }",
    "    case 2: { return; }",
    "    case 3: { throw 'Error'; }",
    "    case 4: { continue; }",
    "    case 11: {",
    "      while (true) {",
    "        break;",
    "      }",
    "    }",
    "    default: break;",
    "  }",
    "}"
  ];

  // No error for case 1, 2, 3, 4.
  var run = TestRun(test)
    .addError(11, "Expected a 'break' statement before 'default'.")
    .test(code);

  test.done();
};

exports["allow expression with a comma in switch case condition"] = function (test) {
  var code = [
    "switch (false) {",
    "  case x = 1, y = x: { break; }",
    "}"
  ]

  var run = TestRun(test).test(code);
  test.done();
};

exports.ignoreDirective = {};

exports.ignoreDirective["should be a good option and only accept start, end or line as values"] = function (test) {
  var code = [
    "/*jshint ignore:start*/",
    "/*jshint ignore:end*/",
    "/*jshint ignore:line*/",
    "/*jshint ignore:badvalue*/"
  ];

  TestRun(test)
    .addError(4, "Bad option value.")
    .test(code);

  test.done();
};

exports.ignoreDirective["should allow the linter to skip blocked-out lines to continue finding errors in the rest of the code"] = function (test) {
  var code = fs.readFileSync(__dirname + "/fixtures/gh826.js", "utf8");

  TestRun(test)
    .addError(34, "Use '===' to compare with '0'.")
    .test(code);

  test.done();
};

exports.ignoreDirective["should ignore lines that appear to end with multiline comment endings (GH-1691)"] = function(test) {
  var code = [
    "/*jshint ignore: start*/",
    "var a = {",
    // The following line ends in a sequence of characters that, if parsed
    // naively, could be interpreted as an "end multiline comment" token.
    "  a: /\s*/",
    "};",
    "/*jshint ignore: end*/"
  ];

  TestRun(test)
    .test(code);

  test.done();
};

exports.ignoreDirective["should ignore lines that end with a multi-line comment (GH-1396)"] = function(test) {
  var code = [
    "/*jshint ignore:start */",
    "var a; /* following comment */",
    "/*jshint ignore:end */"
  ];

  TestRun(test)
    .test(code, { unused: true });

  test.done();
};

exports.ignoreDirective["should ignore multi-line comments"] = function(test) {
  var code = [
    "/*jshint ignore:start */",
    "/*",
    "following comment",
    "*/",
    "var a;",
    "/*jshint ignore:end */"
  ];

  TestRun(test)
    .test(code, { unused: true });

  test.done();
};

exports.ignoreDirective["should be detected even with leading and/or trailing whitespace"] = function (test) {
  var code = [
    "  /*jshint ignore:start */",     // leading whitespace
    "   if (true) { alert('sup') }", // should be ignored
    "  /*jshint ignore:end */  ",     // leading and trailing whitespace
    "   if (true) { alert('sup') }", // should not be ignored
    "  /*jshint ignore:start */   ",  // leading and trailing whitespace
    "   if (true) { alert('sup') }", // should be ignored
    "  /*jshint ignore:end */   "     // leading and trailing whitespace
  ];

  TestRun(test)
    .addError(4, "Missing semicolon.")
    .test(code);

  test.done();
};

// gh-2411 /* jshint ignore:start */ stopped working.
exports.ignoreDirective["should apply to lines lexed during lookahead operations"] = function (test) {
  var code = [
    "void [function () {",
    "  /* jshint ignore:start */",
    "  ?",
    "  /* jshint ignore:end */",
    "}];"
  ];

  TestRun(test)
    .test(code);

  code = [
    "(function () {",
    "  /* jshint ignore:start */",
    "  ?",
    "  /* jshint ignore:end */",
    "}());"
  ];

  TestRun(test)
    .test(code);

  test.done();
};

exports["should be able to ignore a single line with a trailing comment: // jshint:ignore"] = function (test) {
  var code = fs.readFileSync(__dirname + "/fixtures/gh870.js", "utf8");
  TestRun(test).test(code, { unused: true });
  test.done();
};

exports["regression test for GH-1431"] = function (test) {
  // The code is invalid but it should not crash JSHint.
  TestRun(test)
    .addError(1, "Use '!==' to compare with 'null'.")
    .addError(1, "Expected ';' and instead saw ')'.")
    .addError(1, "Expected ')' and instead saw ';'.")
    .addError(1, "Expected an identifier and instead saw ';'.")
    .addError(1, "Expected ')' to match '(' from line 1 and instead saw 'i'.")
    .addError(1, "Expected an identifier and instead saw ')'.")
    .test("for (i=0; (arr[i])!=null); i++);");

  test.done();
};

exports["jshint ignore:start/end should be detected using single line comments"] = function (test) {
  var code = [
    "// jshint ignore:start",
    "var a;",
    "// jshint ignore:end",
    "var b;"
  ];

  TestRun(test)
    .addError(4, "'b' is defined but never used.")
    .test(code, { unused: true });

  test.done();
};

exports["test destructuring function parameters as es5"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/destparam.js", "utf8");
  TestRun(test)
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(14, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(15, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(15, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(16, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(18, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(18, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(22, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(22, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(22, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(23, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(23, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(23, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(24, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(24, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(27, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(27, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(27, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(28, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(28, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(28, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(29, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(29, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(29, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(30, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(30, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(30, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(31, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(31, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(31, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
  .test(src, {unused: true, undef: true, maxerr: 100});

  test.done();
};

exports["test destructuring function parameters as legacy JS"] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/destparam.js", "utf8");
  TestRun(test)
    .addError(4, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(4, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(5, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(5, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(6, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(7, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(10, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(10, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(11, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(11, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(14, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(14, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(15, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(15, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(16, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(16, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(17, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(17, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(18, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(18, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(21, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(22, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(22, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(22, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(23, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(23, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(23, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(24, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(24, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(24, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(27, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(27, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(27, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(28, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(28, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(28, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(29, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(29, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(29, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(30, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(30, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(30, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .addError(31, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(31, "'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(31, "'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').")
    .test(src, {es3: true, unused: true, undef: true, maxerr: 100});

  test.done();
};

exports["test for parentheses in odd-numbered token"] = function (test) {
  var code = [
    "let f, b;",
    "let a = x => ({ f: f(x) });",
    "b = x => x;"
  ];

  TestRun(test)
    .test(code, {esnext: true});

  test.done();
};

exports["regression crash from GH-1573"] = function (test) {
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'var'.")
    .addError(1, "Expected ']' to match '[' from line 1 and instead saw 'foo'.")
    .addError(1, "Expected an identifier and instead saw ']'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Bad assignment.")
    .test("[var foo = 1;]");
  test.done();
};

exports["make sure we don't throw errors on removed options"] = function (test) {
  TestRun(test).test("a();", { nomen: true, onevar: true, passfail: true, white: true });
  test.done();
};

exports["'for of' shouldn't be subject to 'for in' rules"] = function (test) {
  TestRun(test)
    .test("for (let x of [1, 2, 3]) { console.log(x); }", { forin: true, esnext: true });
  test.done();
};

exports["Ignore strings containing braces within array literal declarations"] = function (test) {
  TestRun(test).test("var a = [ '[' ];");
  test.done();
};

exports["gh-1016: don't issue W088 if identifier is outside of blockscope"] = function (test) {
  var code = [
    "var globalKey;",
    "function x() {",
    "  var key;",
    "  var foo = function () {",
    "      alert(key);",
    "  };",
    "  for (key in {}) {",
    "      foo();",
    "  }",
    "  function y() {",
    "    for (key in {}) {",
    "      foo();",
    "    }",
    "    for (globalKey in {}) {",
    "      foo();",
    "    }",
    "    for (nonKey in {}) {",
    "      foo();",
    "    }",
    "  }",
    "}"
  ];

  TestRun(test)
    .addError(17, "Creating global 'for' variable. Should be 'for (var nonKey ...'.")
    .test(code);

  test.done();
};

exports.testES6UnusedExports = function (test) {
  var code = [
    "export {",
    "  varDefinedLater,",
    "  letDefinedLater,",
    "  constDefinedLater",
    "};",
    "var unusedGlobalVar = 41;",
    "let unusedGlobalLet = 41;",
    "const unusedGlobalConst = 41;",
    "function unusedGlobalFunc() {}",
    "class unusedGlobalClass {}",
    "export let globalExportLet = 42;",
    "export var globalExportVar = 43;",
    "export const globalExportConst = 44;",
    "export function unusedFn() {}",
    "export class unusedClass {}",
    "export {",
    "  unusedGlobalVar,",
    "  unusedGlobalLet,",
    "  unusedGlobalConst,",
    "  unusedGlobalFunc,",
    "  unusedGlobalClass",
    "};",
    "var varDefinedLater = 60;",
    "let letDefinedLater = 61;",
    "const constDefinedLater = 62;"
  ];

  TestRun(test)
    .addError(24, "'letDefinedLater' was used before it was declared, which is illegal for 'let' variables.")
    .addError(25, "'constDefinedLater' was used before it was declared, which is illegal for 'const' variables.")
    .test(code, { esnext: true, unused: true });

  test.done();
};

exports.testES6BlockExports = function (test) {
  var code = [
    "var broken = true;",
    "var broken2 = false;",
    "function funcScope() {",
    "  export let exportLet = 42;",
    "  export var exportVar = 43;",
    "  export const exportConst = 44;",
    "  export function exportedFn() {}",
    "  export {",
    "    broken,",
    "    broken2",
    "  };",
    "}",
    "if (true) {",
    "  export let conditionalExportLet = 42;",
    "  export var conditionalExportVar = 43;",
    "  export const conditionalExportConst = 44;",
    "  export function conditionalExportedFn() {}",
    "  export {",
    "    broken,",
    "    broken2",
    "  };",
    "}",
    "funcScope();"
  ];

  TestRun(test)
    .addError(1, "'broken' is defined but never used.")
    .addError(2, "'broken2' is defined but never used.")
    .addError(4, "Export declarations are only allowed at the top level of module scope.")
    .addError(5, "Export declarations are only allowed at the top level of module scope.")
    .addError(6, "Export declarations are only allowed at the top level of module scope.")
    .addError(7, "Export declarations are only allowed at the top level of module scope.")
    .addError(8, "Export declarations are only allowed at the top level of module scope.")
    .addError(14, "Export declarations are only allowed at the top level of module scope.")
    .addError(15, "Export declarations are only allowed at the top level of module scope.")
    .addError(16, "Export declarations are only allowed at the top level of module scope.")
    .addError(17, "Export declarations are only allowed at the top level of module scope.")
    .addError(17, "Function declarations should not be placed in blocks. Use a function expression or move the statement to the top of the outer function.")
    .addError(18, "Export declarations are only allowed at the top level of module scope.")
    .test(code, { esnext: true, unused: true });

  test.done();
};

exports.testES6BlockImports = function (test) {
  var code = [
    "{",
    " import x from './m.js';",
    "}",
    "function limitScope(){",
    " import {x} from './m.js';",
    "}",
    "(function(){",
    " import './m.js';",
    "}());",
    "{",
    " import {x as y} from './m.js';",
    "}",
    "limitScope();"
  ];

  TestRun(test)
    .addError(2, "Import declarations are only allowed at the top level of module scope.")
    .addError(5, "Import declarations are only allowed at the top level of module scope.")
    .addError(8, "Import declarations are only allowed at the top level of module scope.")
    .addError(11, "Import declarations are only allowed at the top level of module scope.")
    .test(code, { esversion: 6, module: true });

  test.done();
};

exports.testStrictDirectiveASI = function (test) {
  var options = { strict: true, asi: true, globalstrict: true, predef: ["x"] };

  TestRun(test, 1)
    .test("'use strict'\nfunction fn() {}\nfn();", options);

  TestRun(test, 2)
    .test("'use strict'\n;function fn() {}\nfn();", options);

  TestRun(test, 3)
    .test("'use strict';function fn() {} fn();", options);

  TestRun(test, 4)
    .addError(2, "Bad invocation.")
    .addError(2, "Missing \"use strict\" statement.")
    .test("'use strict'\n(function fn() {})();", options);

  TestRun(test, 5)
    .addError(2, "Missing \"use strict\" statement.")
    .test("'use strict'\n[0] = '6';", options);

  TestRun(test, 6)
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(2, "Missing \"use strict\" statement.")
    .test("'use strict',function fn() {}\nfn();", options);

  TestRun(test, 7)
    .addError(1, "Missing \"use strict\" statement.")
    .test("'use strict'.split(' ');", options);

  TestRun(test, 8)
    .addError(1, "Missing \"use strict\" statement.")
    .test("(function() { var x; \"use strict\"; return x; }());", { strict: true, expr: true });

  TestRun(test, 9)
    .addError(1, "Missing \"use strict\" statement.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .test("'use strict', 'use strict';", options);

  TestRun(test, 10)
    .addError(1, "Missing \"use strict\" statement.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .test("'use strict' * 'use strict';", options);

  TestRun(test, 11)
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .test("'use strict'\n!x;", options);

  TestRun(test, 12)
    .addError(2, "Misleading line break before '+'; readers may interpret this as an expression boundary.")
    .addError(2, "Missing \"use strict\" statement.")
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .test("'use strict'\n+x;", options);

  TestRun(test, 13)
    .test("'use strict'\n++x;", options);

  TestRun(test, 14)
    .addError(1, "Bad operand.")
    .addError(2, "Missing \"use strict\" statement.")
    .addError(2, "Missing \"use strict\" statement.")
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .test("'use strict'++\nx;", options);

  TestRun(test, 15)
    .addError(1, "Bad operand.")
    .addError(1, "Missing \"use strict\" statement.")
    .test("'use strict'++;", options);

  test.done();
};

exports.dereferenceDelete = function (test) {
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw '.'.")
    .addError(1, "Missing semicolon.")
    .test("delete.foo();");

  test.done();
};

exports.trailingCommaInObjectBindingPattern = function (test) {
  var code = [
    'function fn(O) {',
    '  var {a, b, c,} = O;',
    '}',
    'fn({ a: 1, b: 2, c: 3 });'
  ];

  TestRun(test)
    .test(code, { esnext: true });

  test.done();
};


exports.trailingCommaInObjectBindingPatternParameters = function (test) {
  var code = [
    'function fn({a, b, c,}) { }',
    'fn({ a: 1, b: 2, c: 3 });'
  ];

  TestRun(test)
    .test(code, { esnext: true });

  test.done();
};


exports.trailingCommaInArrayBindingPattern = function (test) {
  var code = [
    'function fn(O) {',
    '  var [a, b, c,] = O;',
    '}',
    'fn([1, 2, 3]);'
  ];

  TestRun(test)
    .test(code, { esnext: true });

  test.done();
};


exports.trailingCommaInArrayBindingPatternParameters = function (test) {
  var code = [
    'function fn([a, b, c,]) { }',
    'fn([1, 2, 3]);'
  ];

  TestRun(test)
    .test(code, { esnext: true });

  test.done();
};

exports.testGH1879 = function (test) {
  var code = [
    "function Foo() {",
    "  return;",
    "  // jshint ignore:start",
    "  return [];",
    "  // jshint ignore:end",
    "}"
  ];

  TestRun(test)
    .test(code);

  test.done();
};

exports.commaAfterRestElementInArrayBindingPattern = function (test) {
  var code = [
    'function fn(O) {',
    '  var [a, b, ...c,] = O;',
    '  var [...d,] = O;',
    '}',
    'fn([1, 2, 3]);'
  ];

  TestRun(test)
    .addError(2, "Invalid element after rest element.")
    .addError(3, "Invalid element after rest element.")
    .test(code, { esnext: true });

  test.done();
};


exports.commaAfterRestElementInArrayBindingPatternParameters = function (test) {
  var code = [
    'function fn([a, b, ...c,]) { }',
    'function fn2([...c,]) { }',
    'fn([1, 2, 3]);',
    'fn2([1,2,3]);'
  ];

  TestRun(test)
    .addError(1, "Invalid element after rest element.")
    .addError(2, "Invalid element after rest element.")
    .test(code, { esnext: true });

  test.done();
};


exports.commaAfterRestParameter = function (test) {
  var code = [
    'function fn(a, b, ...c, d) { }',
    'function fn2(...a, b) { }',
    'fn(1, 2, 3);',
    'fn2(1, 2, 3);'
  ];

  TestRun(test)
    .addError(1, "Invalid parameter after rest parameter.")
    .addError(2, "Invalid parameter after rest parameter.")
    .test(code, { esnext: true });

  test.done();
};


exports.extraRestOperator = function (test) {
  var code = [
    'function fn([a, b, ......c]) { }',
    'function fn2([......c]) { }',
    'function fn3(a, b, ......) { }',
    'function fn4(......) { }',
    'var [......a] = [1, 2, 3];',
    'var [a, b, ... ...c] = [1, 2, 3];',
    'var arrow = (......a) => a;',
    'var arrow2 = (a, b, ......c) => c;',
    'var arrow3 = ([......a]) => a;',
    'var arrow4 = ([a, b, ......c]) => c;',
    'fn([1, 2, 3]);',
    'fn2([1, 2, 3]);',
    'fn3(1, 2, 3);',
    'fn4(1, 2, 3);',
    'arrow(1, 2, 3);',
    'arrow2(1, 2, 3);',
    'arrow3([1, 2, 3]);',
    'arrow4([1, 2, 3]);',
  ];

  TestRun(test)
    .addError(1, "Unexpected '...'.")
    .addError(2, "Unexpected '...'.")
    .addError(3, "Unexpected '...'.")
    .addError(3, "Unexpected ')'.")
    .addError(4, "Unexpected '...'.")
    .addError(4, "Unexpected ')'.")
    .addError(5, "Unexpected '...'.")
    .addError(6, "Unexpected '...'.")
    .addError(7, "Unexpected '...'.")
    .addError(8, "Unexpected '...'.")
    .addError(9, "Unexpected '...'.")
    .addError(10, "Unexpected '...'.")
    .test(code, { esnext: true });

  test.done();
};


exports.restOperatorWithoutIdentifier = function (test) {
  var code = [
    'function fn([a, b, ...]) { }',
    'function fn2([...]) { }',
    'function fn3(a, b, ...) { }',
    'function fn4(...) { }',
    'var [...] = [1, 2, 3];',
    'var [a, b, ...] = [1, 2, 3];',
    'var arrow = (...) => void 0;',
    'var arrow2 = (a, b, ...) => a;',
    'var arrow3 = ([...]) => void 0;',
    'var arrow4 = ([a, b, ...]) => a;',
    'fn([1, 2, 3]);',
    'fn2([1, 2, 3]);',
    'fn3(1, 2, 3);',
    'fn3(1, 2, 3);',
    'arrow(1, 2, 3);',
    'arrow2(1, 2, 3);',
    'arrow3([1, 2, 3]);',
    'arrow4([1, 2, 3]);'
  ];

  TestRun(test)
    .addError(1, "Unexpected ']'.")
    .addError(2, "Unexpected ']'.")
    .addError(3, "Unexpected ')'.")
    .addError(4, "Unexpected ')'.")
    .addError(5, "Unexpected ']'.")
    .addError(6, "Unexpected ']'.")
    .addError(7, "Unexpected ')'.")
    .addError(8, "Unexpected ')'.")
    .addError(9, "Unexpected ']'.")
    .addError(10, "Unexpected ']'.")
    .test(code, { esnext: true });

  test.done();
};

exports.getAsIdentifierProp = function (test) {
  TestRun(test)
    .test('var get; var obj = { get };', { esnext: true });

  TestRun(test)
    .test('var set; var obj = { set };', { esnext: true });

  TestRun(test)
    .test('var get, set; var obj = { get, set };', { esnext: true });

  TestRun(test)
    .test('var get, set; var obj = { set, get };', { esnext: true });

  TestRun(test)
    .test('var get; var obj = { a: null, get };', { esnext: true });

  TestRun(test)
    .test('var get; var obj = { a: null, get, b: null };', { esnext: true });

  TestRun(test)
    .test('var get; var obj = { get, b: null };', { esnext: true });

  TestRun(test)
    .test('var get; var obj = { get, get a() {} };', { esnext: true });

  TestRun(test)
    .test([
      'var set;',
      'var obj = { set, get a() {}, set a(_) {} };'
    ], { esnext: true });

  test.done();
};

exports.invalidParams = function (test) {
  TestRun(test)
    .addError(1, "Expected an identifier and instead saw '!'.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("(function(!", { esnext: true });

  test.done();
};

// Regression test for gh-2362
exports.functionKeyword = function (test) {
  TestRun(test)
    .addError(1, "Missing name in function declaration.")
    .addError(1, "Expected '(' and instead saw ''.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("function");

  test.done();
};

exports.nonGeneratorAfterGenerator = function (test) {
  var run;
  var code = [
    'var obj = {',
    '  *gen() {',
    '    yield 1;',
    '  },',
    // non_gen shouldn't be parsed as a generator method here, and parser
    // shouldn't report an error about a generator without a yield expression.
    '  non_gen() {',
    '  }',
    '};'
  ];

  run = TestRun(test);
  run.test(code, { esnext: true });

  test.done();
};

exports["new.target"] = function (test) {
  var code = [
    "class A {",
    "  constructor() {",
    "    return new.target;",
    "  }",
    "}"
  ];

  TestRun(test, "only in ES6")
    .addError(1, "'class' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .addError(3, "'new.target' is only available in ES6 (use 'esversion: 6').")
    .test(code);

  TestRun(test, "only in ES6").test(code, { esnext: true });

  var code2 = [
    "var a = new.target;",
    "var b = () => {",
    "  var c = () => {",
    "    return new.target;",
    "  };",
    "  return new.target;",
    "};",
    "var d = function() {",
    "  return new.target;",
    "};",
    "function e() {",
    "  var f = () => {",
    "    return new.target;",
    "  };",
    "  return new.target;",
    "}",
    "class g {",
    "  constructor() {",
    "    return new.target;",
    "  }",
    "}"
  ];

  TestRun(test, "must be in function scope")
    .addError(1, "'new.target' must be in function scope.")
    .addError(4, "'new.target' must be in function scope.")
    .addError(6, "'new.target' must be in function scope.")
    .test(code2, { esnext: true });

  var code3 = [
    "var x = new.meta;"
  ];

  TestRun(test, "invalid meta property")
    .addError(1, "Invalid meta property: 'new.meta'.")
    .test(code3);

  var code4 = [
    "class A {",
    "  constructor() {",
    "    new.target = 2;",
    "    new.target += 2;",
    "    new.target &= 2;",
    "    new.target++;",
    "    ++new.target;",
    "  }",
    "}"
  ];

  TestRun(test, "can't assign to new.target")
    .addError(3, "Bad assignment.")
    .addError(4, "Bad assignment.")
    .addError(5, "Bad assignment.")
    .addError(6, "Bad assignment.")
    .addError(7, "Bad assignment.")
    .test(code4, { esnext: true });

  test.done();
};

// gh2656: "[Regression] 2.9.0 warns about proto deprecated even if proto:true"
exports.lazyIdentifierChecks = function (test) {
  var src = [
    "var o = [",
    "  function() {",
    "    // jshint proto: true",
    "    o.__proto__ = null;",
    "  }",
    "];",
    "o.__proto__ = null;"
  ];

  TestRun(test)
    .addError(7, "The '__proto__' property is deprecated.")
    .test(src);

  src = [
    "var o = {",
    "  p: function() {",
    "    // jshint proto: true, iterator: true",
    "    o.__proto__ = null;",
    "    o.__iterator__ = null;",
    "  }",
    "};",
    "o.__proto__ = null;",
    "o.__iterator__ = null;"
  ];

  TestRun(test)
    .addError(8, "The '__proto__' property is deprecated.")
    .addError(9, "The '__iterator__' property is deprecated.")
    .test(src);

  test.done();
};

exports.parsingCommas = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/parsingCommas.js', 'utf8');

  TestRun(test)
    .addError(2, "Unexpected ','.")
    .addError(2, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(1, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(2, "Expected an identifier and instead saw ';'.")
    .addError(2, "Expected an identifier and instead saw ')'.")
    .addError(2, "Expected ';' and instead saw '{'.")
    .addError(2, "Expected an identifier and instead saw '}'.")
    .addError(5, "Expected ')' to match '(' from line 1 and instead saw 'for'.")
    .addError(5, "Expected an identifier and instead saw ';'.")
    .addError(5, "Expected ')' to match '(' from line 5 and instead saw ';'.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .addError(6, "Unexpected ','.")
    .addError(5, "Expected an assignment or function call and instead saw an expression.")
    .addError(5, "Missing semicolon.")
    .addError(6, "Expected an identifier and instead saw ','.")
    .addError(6, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Missing semicolon.")
    .addError(6, "Expected an identifier and instead saw ')'.")
    .addError(6, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Missing semicolon.")
    .test(src);

  test.done();
};

exports.instanceOfLiterals = function (test) {
  var code = [
    "var x;",
    "var y = [x];",

    // okay
    "function Y() {}",
    "function template() { return Y; }",
    "var a = x instanceof Y;",
    "a = new X() instanceof function() { return X; }();",
    "a = x instanceof template``;",
    "a = x instanceof /./.constructor;",
    "a = x instanceof \"\".constructor;",
    "a = x instanceof [y][0];",
    "a = x instanceof {}[constructor];",
    "function Z() {",
    "  let undefined = function() {};",
    "  a = x instanceof undefined;",
    "}",

    // error: literals and unary operators cannot be used
    "a = x instanceof +x;",
    "a = x instanceof -x;",
    "a = x instanceof 0;",
    "a = x instanceof '';",
    "a = x instanceof null;",
    "a = x instanceof undefined;",
    "a = x instanceof {};",
    "a = x instanceof [];",
    "a = x instanceof /./;",
    "a = x instanceof ``;",
    "a = x instanceof `${x}`;",

    // warning: functions declarations should not be used
    "a = x instanceof function() {};",
    "a = x instanceof function MyUnusableFunction() {};",
  ];

  var errorMessage = "Non-callable values cannot be used as the second operand to instanceof.";
  var warningMessage = "Function expressions should not be used as the second operand to instanceof.";

  var run = TestRun(test)
    .addError(13, "Expected an identifier and instead saw 'undefined' (a reserved word).")
    .addError(16, errorMessage)
    .addError(17, errorMessage)
    .addError(18, errorMessage)
    .addError(19, errorMessage)
    .addError(20, errorMessage)
    .addError(21, errorMessage)
    .addError(22, errorMessage)
    .addError(23, errorMessage)
    .addError(24, errorMessage)
    .addError(25, errorMessage)
    .addError(26, errorMessage)
    .addError(27, warningMessage)
    .addError(28, warningMessage);

  run.test(code, { esversion: 6 });

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw ';'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .test('0 instanceof;');

  test.done();
};

exports.forInExpr = function (test) {
  TestRun(test)
    .test([
      "for (var x in [], []) {}"
    ]);

  TestRun(test)
    .addError(2, "Expected ')' to match '(' from line 2 and instead saw ','.")
    .addError(2, "Expected an identifier and instead saw ')'.")
    .addError(2, "Expected an assignment or function call and instead saw an expression.")
    .addError(2, "Missing semicolon.")
    .test([
      "for (var x in [], []) {}",
      "for (var x of {}, {}) {}"
    ], { esversion: 6 });

  test.done();
};
