/**
 * Tests for all non-environmental options. Non-environmental options are
 * options that change how JSHint behaves instead of just pre-defining a set
 * of global variables.
 */

"use strict";

var JSHINT = require("../..").JSHINT;
var fs = require('fs');
var TestRun = require('../helpers/testhelper').setup.testRun;
var fixture = require('../helpers/fixture').fixture;

/**
 * Option `shadow` allows you to re-define variables later in code.
 *
 * E.g.:
 *   var a = 1;
 *   if (cond == true)
 *     var a = 2; // Variable a has been already defined on line 1.
 *
 * More often than not it is a typo, but sometimes people use it.
 */
exports.shadow = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/redef.js", "utf8");

  // Do not tolerate variable shadowing by default
  TestRun(test)
    .addError(5, "'a' is already defined.")
    .addError(10, "'foo' is already defined.")
    .test(src, {es3: true});

  TestRun(test)
    .addError(5, "'a' is already defined.")
    .addError(10, "'foo' is already defined.")
    .test(src, {es3: true, shadow: false });

  TestRun(test)
    .addError(5, "'a' is already defined.")
    .addError(10, "'foo' is already defined.")
    .test(src, {es3: true, shadow: "inner" });

  // Allow variable shadowing when shadow is true
  TestRun(test)
    .test(src, { es3: true, shadow: true });

  test.done();
};

/**
 * Option `shadow:outer` allows you to re-define variables later in inner scopes.
 *
 *  E.g.:
 *    var a = 1;
 *    function foo() {
 *        var a = 2;
 *    }
 */
exports.shadowouter = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/scope-redef.js", "utf8");

  // Do not tolarate inner scope variable shadowing by default
  TestRun(test)
    .addError(5, "'a' is already defined in outer scope.")
    .addError(12, "'b' is already defined in outer scope.")
    .addError(20, "'bar' is already defined in outer scope.")
    .addError(26, "'foo' is already defined.")
    .test(src, { es3: true, shadow: "outer" });

  test.done();
};

exports.shadowInline = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/shadow-inline.js", "utf8");

  TestRun(test)
    .addError(6, "'a' is already defined in outer scope.")
    .addError(7, "'a' is already defined.")
    .addError(7, "'a' is already defined in outer scope.")
    .addError(17, "'a' is already defined.")
    .addError(27, "'a' is already defined.")
    .addError(42, "Bad option value.")
    .addError(47, "'a' is already defined.")
    .test(src);

  test.done();
};

exports.shadowEs6 = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/redef-es6.js", "utf8");

  var commonErrors = [
    [2, "'ga' has already been declared."],
    [5, "'gb' has already been declared."],
    [14, "'gd' has already been declared."],
    [24, "'gf' has already been declared."],
    [110, "'gx' has already been declared."],
    [113, "'gy' has already been declared."],
    [116, "'gz' has already been declared."],
    [119, "'gza' has already been declared."],
    [122, "'gzb' has already been declared."],
    [132, "'gzd' has already been declared."],
    [147, "'gzf' has already been declared."],
    [156, "'a' has already been declared."],
    [159, "'b' has already been declared."],
    [168, "'d' has already been declared."],
    [178, "'f' has already been declared."],
    [264, "'x' has already been declared."],
    [267, "'y' has already been declared."],
    [270, "'z' has already been declared."],
    [273, "'za' has already been declared."],
    [276, "'zb' has already been declared."],
    [286, "'zd' has already been declared."],
    [301, "'zf' has already been declared."],
    [317, "'zi' has already been declared."],
    [344, "'zzi' has already been declared."],
    [345, "'zzj' has already been declared."],
    [349, "'zzl' has already been declared."],
    [349, "'zzl' was used before it was declared, which is illegal for 'const' variables."],
    [350, "'zzm' has already been declared."],
    [350, "'zzm' was used before it was declared, which is illegal for 'let' variables."],
    [364, "'zj' has already been declared."]
  ];

  var innerErrors = [
    [343, "'zzh' is already defined."],
    [348, "'zzk' is already defined."]
  ];

  var outerErrors = [
    /* block scope variables shadowing out of scope */
    [9, "'gc' is already defined."],
    [19, "'ge' is already defined."],
    [28, "'gg' is already defined in outer scope."],
    [32, "'gh' is already defined in outer scope."],
    [36, "'gi' is already defined in outer scope."],
    [40, "'gj' is already defined."],
    [44, "'gk' is already defined."],
    [48, "'gl' is already defined."],
    [53, "'gm' is already defined."],
    [59, "'gn' is already defined."],
    [65, "'go' is already defined."],
    [71, "'gp' is already defined."],
    [76, "'gq' is already defined."],
    [81, "'gr' is already defined."],
    [86, "'gs' is already defined."],
    [163, "'c' is already defined."],
    [173, "'e' is already defined."],
    [182, "'g' is already defined in outer scope."],
    [186, "'h' is already defined in outer scope."],
    [190, "'i' is already defined in outer scope."],
    [194, "'j' is already defined."],
    [198, "'k' is already defined."],
    [202, "'l' is already defined."],
    [207, "'m' is already defined."],
    [213, "'n' is already defined."],
    [219, "'o' is already defined."],
    [225, "'p' is already defined."],
    [230, "'q' is already defined."],
    [235, "'r' is already defined."],
    [240, "'s' is already defined."],
    /* variables shadowing outside of function scope */
    [91, "'gt' is already defined in outer scope."],
    [96, "'gu' is already defined in outer scope."],
    [101, "'gv' is already defined in outer scope."],
    [106, "'gw' is already defined in outer scope."],
    [245, "'t' is already defined in outer scope."],
    [250, "'u' is already defined in outer scope."],
    [255, "'v' is already defined in outer scope."],
    [260, "'w' is already defined in outer scope."],
    /* variables shadowing outside multiple function scopes */
    [332, "'zza' is already defined in outer scope."],
    [333, "'zzb' is already defined in outer scope."],
    [334, "'zzc' is already defined in outer scope."],
    [335, "'zzd' is already defined in outer scope."],
    [336, "'zze' is already defined in outer scope."],
    [337, "'zzf' is already defined in outer scope."],
    [358, "'zzn' is already defined in outer scope."]
  ];

  var testRun = TestRun(test);
  commonErrors.forEach(function(error) { testRun.addError.apply(testRun, error); });
  testRun.test(src, {esnext: true, shadow: true});

  var testRun = TestRun(test);
  commonErrors.concat(innerErrors).forEach(function(error) { testRun.addError.apply(testRun, error); });
  testRun.test(src, {esnext: true, shadow: "inner", maxerr: 100 });

  var testRun = TestRun(test);
  commonErrors.concat(innerErrors, outerErrors).forEach(function(error) { testRun.addError.apply(testRun, error); });
  testRun.test(src, {esnext: true, shadow: "outer", maxerr: 100});

  test.done();
};

/**
 * Option `latedef` allows you to prohibit the use of variable before their
 * definitions.
 *
 * E.g.:
 *   fn(); // fn will be defined later in code
 *   function fn() {};
 *
 * Since JavaScript has function-scope only, you can define variables and
 * functions wherever you want. But if you want to be more strict, use
 * this option.
 */
exports.latedef = function (test) {
  var src  = fs.readFileSync(__dirname + '/fixtures/latedef.js', 'utf8'),
    src1 = fs.readFileSync(__dirname + '/fixtures/redef.js', 'utf8'),
    esnextSrc = fs.readFileSync(__dirname + '/fixtures/latedef-esnext.js', 'utf8');

  // By default, tolerate the use of variable before its definition
  TestRun(test)
    .test(src, {es3: true, funcscope: true});

  TestRun(test)
      .addError(10, "'i' was used before it was declared, which is illegal for 'let' variables.")
      .test(esnextSrc, {esnext: true});

  // However, JSHint must complain if variable is actually missing
  TestRun(test)
    .addError(1, "'fn' is not defined.")
    .test('fn();', { es3: true, undef: true });

  // And it also must complain about the redefinition (see option `shadow`)
  TestRun(test)
    .addError(5, "'a' is already defined.")
    .addError(10, "'foo' is already defined.")
    .test(src1, { es3: true });

  // When latedef is true, JSHint must not tolerate the use before definition
  TestRun(test)
    .addError(10, "'vr' was used before it was defined.")
    .test(src, { es3: true, latedef: "nofunc" });

  // when latedef is true, jshint must not warn if variable is defined.
  TestRun(test)
    .test([
      "if(true) { var a; }",
      "if (a) { a(); }",
      "var a;"], { es3: true, latedef: true});

  // When latedef_func is true, JSHint must not tolerate the use before definition for functions
  TestRun(test)
    .addError(2, "'fn' was used before it was defined.")
    .addError(6, "'fn1' was used before it was defined.")
    .addError(10, "'vr' was used before it was defined.")
    .addError(18, "'bar' was used before it was defined.")
    .addError(18, "Inner functions should be listed at the top of the outer function.")
    .test(src, { es3: true, latedef: true });

  TestRun(test)
      .addError(4, "'c' was used before it was defined.")
      .addError(6, "'e' was used before it was defined.")
      .addError(8, "'h' was used before it was defined.")
      .addError(10, "'i' was used before it was declared, which is illegal for 'let' variables.")
      .addError(15, "'ai' was used before it was defined.")
      .addError(20, "'ai' was used before it was defined.")
      .addError(31, "'bi' was used before it was defined.")
      .addError(48, "'ci' was used before it was defined.")
      .test(esnextSrc, {esnext: true, latedef: true});

  TestRun(test, "shouldn't warn when marking a var as exported")
    .test("var a;", { exported: ["a"], latedef: true });

  test.done();
};

exports.latedefInline = function (test) {
  var src  = fs.readFileSync(__dirname + '/fixtures/latedef-inline.js', 'utf8');

  TestRun(test)
    .addError(4, "'foo' was used before it was defined.")
    .addError(6, "'a' was used before it was defined.")
    .addError(22, "'a' was used before it was defined.")
    .addError(26, "Bad option value.")
    .test(src);

  TestRun(test, "shouldn't warn when marking a var as exported")
    .test("/*exported a*/var a;", { latedef: true });

  test.done();
};

exports.notypeof = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/typeofcomp.js', 'utf8');

  TestRun(test)
    .addError(1, "Invalid typeof value 'funtion'")
    .addError(2, "Invalid typeof value 'double'")
    .addError(3, "Invalid typeof value 'bool'")
    .addError(4, "Invalid typeof value 'obj'")
    .addError(13, "Invalid typeof value 'symbol'")
    .test(src);

  TestRun(test)
    .addError(1, "Invalid typeof value 'funtion'")
    .addError(2, "Invalid typeof value 'double'")
    .addError(3, "Invalid typeof value 'bool'")
    .addError(4, "Invalid typeof value 'obj'")
    .test(src, { esnext: true });

  TestRun(test)
    .test(src, { notypeof: true });

  TestRun(test)
    .test(src, { notypeof: true, esnext: true });

  test.done();
}

exports['combination of latedef and undef'] = function (test) {
  var src = fixture('latedefundef.js');

  // Assures that when `undef` is set to true, it'll report undefined variables
  // and late definitions won't be reported as `latedef` is set to false.
  TestRun(test)
    .addError(29, "'hello' is not defined.")
    .addError(35, "'world' is not defined.")
    .test(src, { es3: true, latedef: false, undef: true });

  // When we suppress `latedef` and `undef` then we get no warnings.
  TestRun(test)
    .test(src, { es3: true, latedef: false, undef: false });

  // If we warn on `latedef` but suppress `undef` we only get the
  // late definition warnings.
  TestRun(test)
    .addError(5, "'func2' was used before it was defined.")
    .addError(12, "'foo' was used before it was defined.")
    .addError(18, "'fn1' was used before it was defined.")
    .addError(26, "'baz' was used before it was defined.")
    .addError(34, "'fn' was used before it was defined.")
    .addError(41, "'q' was used before it was defined.")
    .addError(46, "'h' was used before it was defined.")
    .test(src, { es3: true, latedef: true, undef: false });

  // But we get all the functions warning if we disable latedef func
  TestRun(test)
    .addError(41, "'q' was used before it was defined.")
    .addError(46, "'h' was used before it was defined.")
    .test(src, { es3: true, latedef: "nofunc", undef: false });

  // If we warn on both options we get all the warnings.
  TestRun(test)
    .addError(5, "'func2' was used before it was defined.")
    .addError(12, "'foo' was used before it was defined.")
    .addError(18, "'fn1' was used before it was defined.")
    .addError(26, "'baz' was used before it was defined.")
    .addError(29, "'hello' is not defined.")
    .addError(34, "'fn' was used before it was defined.")
    .addError(35, "'world' is not defined.")
    .addError(41, "'q' was used before it was defined.")
    .addError(46, "'h' was used before it was defined.")
    .test(src, { es3: true, latedef: true, undef: true });

  // If we remove latedef_func, we don't get the functions warning
  TestRun(test)
    .addError(29, "'hello' is not defined.")
    .addError(35, "'world' is not defined.")
    .addError(41, "'q' was used before it was defined.")
    .addError(46, "'h' was used before it was defined.")
    .test(src, { es3: true, latedef: "nofunc", undef: true });

  test.done();
};

exports.undefwstrict = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/undefstrict.js', 'utf8');
  TestRun(test).test(src, { es3: true, undef: false });

  test.done();
};

// Regression test for GH-431
exports["implied and unused should respect hoisting"] = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/gh431.js', 'utf8');
  TestRun(test)
    .addError(14, "'fun4' is not defined.")
    .test(src, { undef: true }); // es5

  JSHINT.flag = true;
  JSHINT(src, { undef: true });
  var report = JSHINT.data();

  test.equal(report.implieds.length, 1);
  test.equal(report.implieds[0].name, 'fun4');
  test.deepEqual(report.implieds[0].line, [14]);

  test.equal(report.unused.length, 3);

  test.done();
};

/**
 * The `proto` and `iterator` options allow you to prohibit the use of the
 * special `__proto__` and `__iterator__` properties, respectively.
 */
exports.testProtoAndIterator = function (test) {
  var source = fs.readFileSync(__dirname + '/fixtures/protoiterator.js', 'utf8');
  var json = '{"__proto__": true, "__iterator__": false, "_identifier": null, "property": 123}';

  // JSHint should not allow the `__proto__` and
  // `__iterator__` properties by default
  TestRun(test)
    .addError(7, "The '__proto__' property is deprecated.")
    .addError(8, "The '__proto__' property is deprecated.")
    .addError(10, "The '__proto__' property is deprecated.")
    .addError(27, "The '__iterator__' property is deprecated.")
    .addError(33, "The '__proto__' property is deprecated.")
    .addError(37, "The '__proto__' property is deprecated.")
    .test(source, {es3: true});

  TestRun(test)
    .addError(1, "The '__proto__' key may produce unexpected results.")
    .addError(1, "The '__iterator__' key may produce unexpected results.")
    .test(json, {es3: true});

  // Should not report any errors when proto and iterator
  // options are on
  TestRun("source").test(source, { es3: true, proto: true, iterator: true });
  TestRun("json").test(json, { es3: true, proto: true, iterator: true });

  test.done();
};

/**
 * The `camelcase` option allows you to enforce use of the camel case convention.
 */
exports.testCamelcase = function (test) {
  var source = fs.readFileSync(__dirname + '/fixtures/camelcase.js', 'utf8');

  // By default, tolerate arbitrary identifiers
  TestRun(test)
    .test(source, {es3: true});

  // Require identifiers in camel case if camelcase is true
  TestRun(test)
    .addError(5, "Identifier 'Foo_bar' is not in camel case.", {character: 17})
    .addError(5, "Identifier 'test_me' is not in camel case.", {character: 25})
    .addError(6, "Identifier 'test_me' is not in camel case.", {character: 15})
    .addError(6, "Identifier 'test_me' is not in camel case.", {character: 25})
    .addError(13, "Identifier 'test_1' is not in camel case.", {character: 26})
    .test(source, { es3: true, camelcase: true });


  test.done();
};

/**
 * Option `curly` allows you to enforce the use of curly braces around
 * control blocks. JavaScript allows one-line blocks to go without curly
 * braces but some people like to always use curly bracse. This option is
 * for them.
 *
 * E.g.:
 *   if (cond) return;
 *     vs.
 *   if (cond) { return; }
 */
exports.curly = function (test) {
  var src  = fs.readFileSync(__dirname + '/fixtures/curly.js', 'utf8'),
    src1 = fs.readFileSync(__dirname + '/fixtures/curly2.js', 'utf8');

  // By default, tolerate one-line blocks since they are valid JavaScript
  TestRun(test).test(src, {es3: true});
  TestRun(test).test(src1, {es3: true});

  // Require all blocks to be wrapped with curly braces if curly is true
  TestRun(test)
    .addError(2, "Expected '{' and instead saw 'return'.")
    .addError(5, "Expected '{' and instead saw 'doSomething'.")
    .addError(8, "Expected '{' and instead saw 'doSomething'.")
    .addError(11, "Expected '{' and instead saw 'doSomething'.")
    .test(src, { es3: true, curly: true });

  TestRun(test).test(src1, { es3: true, curly: true });

  test.done();
};

/** Option `noempty` prohibits the use of empty blocks. */
exports.noempty = function (test) {
  var code = [
    "for (;;) {}",
    "if (true) {",
    "}",
    "foo();"
  ];

  // By default, tolerate empty blocks since they are valid JavaScript
  TestRun(test).test(code, { es3: true });

  // Do not tolerate, when noempty is true
  TestRun(test)
    .addError(1, "Empty block.")
    .addError(2, "Empty block.")
    .test(code, { es3: true, noempty: true });

  test.done();
};

/**
 * Option `noarg` prohibits the use of arguments.callee and arguments.caller.
 * JSHint allows them by default but you have to know what you are doing since:
 *  - They are not supported by all JavaScript implementations
 *  - They might prevent an interpreter from doing some optimization tricks
 *  - They are prohibited in the strict mode
 */
exports.noarg = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/noarg.js', 'utf8');

  // By default, tolerate both arguments.callee and arguments.caller
  TestRun(test).test(src, { es3: true });

  // Do not tolerate both .callee and .caller when noarg is true
  TestRun(test)
    .addError(2, 'Avoid arguments.callee.')
    .addError(6, 'Avoid arguments.caller.')
    .test(src, { es3: true, noarg: true });

  test.done();
};

/** Option `nonew` prohibits the use of constructors for side-effects */
exports.nonew = function (test) {
  var code  = "new Thing();",
    code1 = "var obj = new Thing();";

  TestRun(test).test(code, { es3: true });
  TestRun(test).test(code1, { es3: true });

  TestRun(test)
    .addError(1, "Do not use 'new' for side effects.", {
      character: 1
    })
    .test(code, { es3: true, nonew: true });

  test.done();
};

exports.shelljs = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/shelljs.js', 'utf8');

  TestRun(test, 1)
    .addError(1, "'target' is not defined.")
    .addError(3, "'echo' is not defined.")
    .addError(4, "'exit' is not defined.")
    .addError(5, "'cd' is not defined.")
    .addError(6, "'pwd' is not defined.")
    .addError(7, "'ls' is not defined.")
    .addError(8, "'find' is not defined.")
    .addError(9, "'cp' is not defined.")
    .addError(10, "'rm' is not defined.")
    .addError(11, "'mv' is not defined.")
    .addError(12, "'mkdir' is not defined.")
    .addError(13, "'test' is not defined.")
    .addError(14, "'cat' is not defined.")
    .addError(15, "'sed' is not defined.")
    .addError(16, "'grep' is not defined.")
    .addError(17, "'which' is not defined.")
    .addError(18, "'dirs' is not defined.")
    .addError(19, "'pushd' is not defined.")
    .addError(20, "'popd' is not defined.")
    .addError(21, "'env' is not defined.")
    .addError(22, "'exec' is not defined.")
    .addError(23, "'chmod' is not defined.")
    .addError(24, "'config' is not defined.")
    .addError(25, "'error' is not defined.")
    .addError(26, "'tempdir' is not defined.")
    .addError(29, "'require' is not defined.")
    .addError(30, "'module' is not defined.")
    .addError(31, "'process' is not defined.")
    .test(src, { undef: true });

  TestRun(test, 2)
    .test(src, { undef: true, shelljs: true });

  test.done();
};

// Option `asi` allows you to use automatic-semicolon insertion
exports.asi = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/asi.js', 'utf8');

  TestRun(test, 1)
    .addError(2, "Missing semicolon.")
    .addError(4, "Missing semicolon.")
    .addError(5, "Missing semicolon.")
    .addError(9, "Line breaking error 'continue'.")
    .addError(9, "Missing semicolon.")
    .addError(10, "Missing semicolon.")
    .addError(11, "Line breaking error 'break'.")
    .addError(11, "Missing semicolon.")
    .addError(12, "Missing semicolon.")
    .addError(16, "Missing semicolon.")
    .addError(17, "Missing semicolon.")
    .addError(19, "Line breaking error 'break'.")
    .addError(19, "Missing semicolon.")
    .addError(21, "Line breaking error 'break'.")
    .addError(21, "Missing semicolon.")
    .addError(25, "Missing semicolon.")
    .addError(26, "Missing semicolon.", { character: 10 })
    .addError(27, "Missing semicolon.", { character: 12 })
    .addError(28, "Missing semicolon.", { character: 12 })
    .test(src, { es3: true });

  TestRun(test, 2)
    .test(src, { es3: true, asi: true });

  var code = [
    "function a() { 'code' }",
    "function b() { 'code'; 'code' }",
    "function c() { 'code', 'code' }",
    "function d() {",
    "  'code' }",
    "function e() { 'code' 'code' }"
  ];

  TestRun(test, "gh-2714")
    .addError(2, "Unnecessary directive \"code\".")
    .addError(3, "Expected an assignment or function call and instead saw an expression.")
    .addError(6, "Missing semicolon.", { code: "E058" })
    .addError(6, "Expected an assignment or function call and instead saw an expression.", { character: 16 })
    .addError(6, "Expected an assignment or function call and instead saw an expression.", { character: 23 })
    .test(code, { asi: true });

  test.done();
};

// Option `asi` extended for safety -- warn in scenarios that would be unsafe when using asi.
exports.safeasi = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/safeasi.js', 'utf8');

  TestRun(test, 1)
    // TOOD consider setting an option to suppress these errors so that
    // the tests don't become tightly interdependent
    .addError(10, "Misleading line break before '/'; readers may interpret this as an expression boundary.")
    .addError(10, "Expected an identifier and instead saw '.'.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(10, "Missing semicolon.")
    .addError(10, "Missing semicolon.")
    .addError(11, "Missing semicolon.")
    .addError(21, "Missing semicolon.")
    .test(src, {});

  TestRun(test, 2)
    .addError(5, "Misleading line break before '('; readers may interpret this as an expression boundary.")
    .addError(8, "Misleading line break before '('; readers may interpret this as an expression boundary.")
    .addError(10, "Misleading line break before '/'; readers may interpret this as an expression boundary.")
    .addError(10, "Misleading line break before '/'; readers may interpret this as an expression boundary.")
    .addError(10, "Expected an identifier and instead saw '.'.")
    .addError(10, "Expected an assignment or function call and instead saw an expression.")
    .addError(10, "Missing semicolon.")
    .test(src, { asi: true });

  test.done();
};

exports["missing semicolons not influenced by asi"] = function (test) {
  // These tests are taken from
  // http://www.ecma-international.org/ecma-262/6.0/index.html#sec-11.9.2

  var code = [
    "void 0;", // Not JSON
    "{ 1 2 } 3"
  ];

  TestRun(test)
    .addError(2, "Missing semicolon.", { character: 4, code: "E058" })
    .test(code, { expr: true, asi: true });

  code = [
    "void 0;",
    "{ 1",
    "2 } 3"
  ];

  TestRun(test).test(code, { expr: true, asi: true });

  test.done();
};

/** Option `lastsemic` allows you to skip the semicolon after last statement in a block,
  * if that statement is followed by the closing brace on the same line. */
exports.lastsemic = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/lastsemic.js', 'utf8');

  // without lastsemic
  TestRun(test)
    .addError(2, "Missing semicolon.") // missing semicolon in the middle of a block
    .addError(4, "Missing semicolon.") // missing semicolon in a one-liner function
    .addError(5, "Missing semicolon.") // missing semicolon at the end of a block
    .test(src, {es3: true});

  // with lastsemic
  TestRun(test)
    .addError(2, "Missing semicolon.")
    .addError(5, "Missing semicolon.")
    .test(src, { es3: true, lastsemic: true });
  // this line is valid now: [1, 2, 3].forEach(function(i) { print(i) });
  // line 5 isn't, because the block doesn't close on the same line

  test.done();
};

/**
 * Option `expr` allows you to use ExpressionStatement as a Program code.
 *
 * Even though ExpressionStatement as a Program (i.e. without assingment
 * of its result) is a valid JavaScript, more often than not it is a typo.
 * That's why by default JSHint complains about it. But if you know what
 * are you doing, there is nothing wrong with it.
 */
exports.expr = function (test) {
  var exps = [
    "obj && obj.method && obj.method();",
    "myvar && func(myvar);",
    "1;",
    "true;",
    "+function (test) {};"
  ];

  for (var i = 0, exp; exp = exps[i]; i += 1) {
    TestRun(test)
      .addError(1, 'Expected an assignment or function call and instead saw an expression.')
      .test(exp, { es3: true });
  }

  for (i = 0, exp = null; exp = exps[i]; i += 1) {
    TestRun(test).test(exp, { es3: true, expr: true });
  }

  test.done();
};

// Option `undef` requires you to always define variables you use.
exports.undef = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/undef.js', 'utf8');

  // Make sure there are no other errors
  TestRun(test).test(src, { es3: true });

  // Make sure it fails when undef is true
  TestRun(test)
    .addError(1, "'undef' is not defined.")
    .addError(5, "'undef' is not defined.")
    .addError(6, "'undef' is not defined.")
    .addError(8, "'undef' is not defined.")
    .addError(9, "'undef' is not defined.")
    .addError(13, "'localUndef' is not defined.")
    .addError(18, "'localUndef' is not defined.")
    .addError(19, "'localUndef' is not defined.")
    .addError(21, "'localUndef' is not defined.")
    .addError(22, "'localUndef' is not defined.")
    .addError(32, "'undef' is not defined.")
    .addError(33, "'undef' is not defined.")
    .addError(34, "'undef' is not defined.")
    .test(src, { es3: true, undef: true });

  // block scope cannot use themselves in the declaration
  TestRun(test)
    .addError(1, "'a' was used before it was declared, which is illegal for 'let' variables.")
    .addError(2, "'b' was used before it was declared, which is illegal for 'const' variables.")
    .addError(5, "'e' is already defined.")
    .test([
      'let a = a;',
      'const b = b;',
      'var c = c;',
      'function f(e) {',
      '  var e;',         // the var does not overwrite the param, the param is used
      '  e = e || 2;',
      '  return e;',
      '}'
    ], { esnext: true, undef: true });

  // Regression test for GH-668.
  src = fs.readFileSync(__dirname + "/fixtures/gh668.js", "utf8");
  test.ok(JSHINT(src, { undef: true }));
  test.ok(!JSHINT.data().implieds);

  test.ok(JSHINT(src));
  test.ok(!JSHINT.data().implieds);

  JSHINT("if (typeof foobar) {}", { undef: true });

  test.strictEqual(JSHINT.data().implieds, undefined);

  test.done();
};

exports.undefToOpMethods = function (test) {
  TestRun(test)
    .addError(2, "'undef' is not defined.")
    .addError(3, "'undef' is not defined.")
    .test([
      "var obj;",
      "obj.delete(undef);",
      "obj.typeof(undef);"
    ], { undef: true });

  test.done();
};

/**
 * In strict mode, the `delete` operator does not accept unresolvable
 * references:
 *
 * http://es5.github.io/#x11.4.1
 *
 * This will only be apparent in cases where the user has suppressed warnings
 * about deleting variables.
 */
exports.undefDeleteStrict = function (test) {
  TestRun(test)
    .addError(3, "'aNullReference' is not defined.")
    .test([
      "(function() {",
      "  'use strict';",
      "  delete aNullReference;",
      "}());"
    ], { undef: true, "-W051": false });

  test.done();
};

exports.unused = {};
exports.unused.basic = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/unused.js', 'utf8');

  var allErrors = [
    [22, "'i' is defined but never used."],
    [101, "'inTry2' used out of scope."],
    [117, "'inTry9' was used before it was declared, which is illegal for 'let' variables."],
    [118, "'inTry10' was used before it was declared, which is illegal for 'const' variables."]
  ];

  var testRun = TestRun(test);
  allErrors.forEach(function (e) {
    testRun.addError.apply(testRun, e);
  });
  testRun.test(src, { esnext: true });

  var var_errors = allErrors.concat([
    [1, "'a' is defined but never used."],
    [7, "'c' is defined but never used."],
    [15, "'foo' is defined but never used."],
    [20, "'bar' is defined but never used."],
    [36, "'cc' is defined but never used."],
    [39, "'dd' is defined but never used."],
    [58, "'constUsed' is defined but never used."],
    [62, "'letUsed' is defined but never used."],
    [63, "'anotherUnused' is defined but never used."],
    [63, "'anotherUnused' is defined but never used."],
    [91, "'inTry6' is defined but never used."],
    [94, "'inTry9' is defined but never used."],
    [95, "'inTry10' is defined but never used."],
    [99, "'inTry4' is defined but never used."],
    [122, "'unusedRecurringFunc' is defined but never used."]
  ]);

  var last_param_errors = [
    [6, "'f' is defined but never used."],
    [28, "'a' is defined but never used."],
    [28, "'b' is defined but never used."],
    [28, "'c' is defined but never used."],
    [68, "'y' is defined but never used."],
    [69, "'y' is defined but never used."],
    [70, "'z' is defined but never used."]
  ];

  var all_param_errors = [
    [15, "'err' is defined but never used."],
    [28, "'a' is defined but never used."],
    [28, "'b' is defined but never used."],
    [28, "'c' is defined but never used."],
    [71, "'y' is defined but never used."]
  ];

  var true_run = TestRun(test, {esnext: true});

  var_errors.concat(last_param_errors).forEach(function (e) {
    true_run.addError.apply(true_run, e);
  });

  true_run.test(src, { esnext: true, unused: true });
  test.ok(!JSHINT(src, { esnext: true, unused: true }));

  // Test checking all function params via unused="strict"
  var all_run = TestRun(test);
  var_errors.concat(last_param_errors, all_param_errors).forEach(function (e) {
    all_run.addError.apply(true_run, e);
  });

  all_run.test(src, { esnext: true, unused: "strict"});

  // Test checking everything except function params
  var vars_run = TestRun(test);
  var_errors.forEach(function (e) { vars_run.addError.apply(vars_run, e); });
  vars_run.test(src, { esnext: true, unused: "vars"});

  var unused = JSHINT.data().unused;
  test.equal(24, unused.length);
  test.ok(unused.some(function (err) { return err.line === 1 && err.character == 5 && err.name === "a"; }));
  test.ok(unused.some(function (err) { return err.line === 6 && err.character == 18 && err.name === "f"; }));
  test.ok(unused.some(function (err) { return err.line === 7 && err.character == 9 && err.name === "c"; }));
  test.ok(unused.some(function (err) { return err.line === 15 && err.character == 10 && err.name === "foo"; }));
  test.ok(unused.some(function (err) { return err.line === 68 && err.character == 5 && err.name === "y"; }));

  test.done();
};

// Regression test for gh-2784
exports.unused.usedThroughShadowedDeclaration = function (test) {
  var code = [
    "(function() {",
    "  var x;",
    "  {",
    "    var x;",
    "    void x;",
    "  }",
    "}());"
  ];

  TestRun(test)
    .addError(4, "'x' is already defined.")
    .test(code, { unused: true });

  test.done();
};

exports.unused.unusedThroughShadowedDeclaration = function (test) {
  var code = [
    "(function() {",
    "  {",
    "      var x;",
    "      void x;",
    "  }",
    "  {",
    "      var x;",
    "  }",
    "})();"
  ];

  TestRun(test)
    .addError(7, "'x' is already defined.")
    .test(code, { unused: true });

  test.done();
};

exports.unused.hoisted = function (test) {
  var code = [
    "(function() {",
    "  {",
    "    var x;",
    "  }",
    "  {",
    "    var x;",
    "  }",
    "  void x;",
    "}());"
  ];

  TestRun(test)
    .addError(6, "'x' is already defined.")
    .addError(8, "'x' used out of scope.")
    .test(code, { unused: true });

  test.done();
};

exports.unused.crossBlocks = function (test) {
  var code = fs.readFileSync(__dirname + '/fixtures/unused-cross-blocks.js', 'utf8');

  TestRun(test)
    .addError(15, "'func4' is already defined.")
    .addError(18, "'func5' is already defined.")
    .addError(41, "'topBlock6' is already defined.")
    .addError(44, "'topBlock7' is already defined.")
    .addError(56, "'topBlock3' is already defined.")
    .addError(59, "'topBlock4' is already defined.")
    .addError(9, "'unusedFunc' is defined but never used.")
    .addError(27, "'unusedTopBlock' is defined but never used.")
    .addError(52, "'unusedNestedBlock' is defined but never used.")
    .test(code, { unused: true });

  TestRun(test)
    .addError(15, "'func4' is already defined.")
    .addError(18, "'func5' is already defined.")
    .addError(41, "'topBlock6' is already defined.")
    .addError(44, "'topBlock7' is already defined.")
    .addError(56, "'topBlock3' is already defined.")
    .addError(59, "'topBlock4' is already defined.")
    .test(code);

  test.done();
};

exports['param overrides function name expression'] = function (test) {
  TestRun(test)
    .test([
      "var A = function B(B) {",
      "  return B;",
      "};",
      "A();"
    ], { undef: true, unused: "strict" });

  test.done();
};

exports['let can re-use function and class name'] = function (test) {
  TestRun(test)
    .test([
      "var A = function B(C) {",
      "  let B = C;",
      "  return B;",
      "};",
      "A();",
      "var D = class E { constructor(F) { let E = F; return E; }};",
      "D();"
    ], { undef: true, unused: "strict", esnext: true });

  test.done();
};

exports['unused with param destructuring'] = function(test) {
  var code = [
    "let b = ([...args], a) => a;",
    "b = args => true;",
    "b = function([...args], a) { return a; };",
    "b = function([args], a) { return a; };",
    "b = function({ args }, a) { return a; };",
    "b = function({ a: args }, a) { return a; };",
    "b = function({ a: [args] }, a) { return a; };",
    "b = function({ a: [args] }, a) { return a; };"
  ];

  TestRun(test)
    .addError(2, "'args' is defined but never used.")
    .test(code, { esnext: true, unused: true });

  TestRun(test)
    .addError(1, "'args' is defined but never used.")
    .addError(2, "'args' is defined but never used.")
    .addError(3, "'args' is defined but never used.")
    .addError(4, "'args' is defined but never used.")
    .addError(5, "'args' is defined but never used.")
    .addError(6, "'args' is defined but never used.")
    .addError(7, "'args' is defined but never used.")
    .addError(8, "'args' is defined but never used.")
    .test(code, { esnext: true, unused: "strict" });


  test.done();
};

exports['unused data with options'] = function (test) {

  // see gh-1894 for discussion on this test

  var code = [
    "function func(placeHolder1, placeHolder2, used, param) {",
    "  used = 1;",
    "}"
  ];

  var expectedVarUnused = [{ name: 'func', line: 1, character: 10 }];
  var expectedParamUnused = [{ name: 'param', line: 1, character: 49 }];
  var expectedPlaceholderUnused = [{ name: 'placeHolder2', line: 1, character: 29 },
    { name: 'placeHolder1', line: 1, character: 15 }];

  var expectedAllUnused = expectedParamUnused.concat(expectedPlaceholderUnused, expectedVarUnused);
  var expectedVarAndParamUnused = expectedParamUnused.concat(expectedVarUnused);

  // true
  TestRun(test)
    .addError(1, "'func' is defined but never used.")
    .addError(1, "'param' is defined but never used.")
    .test(code, { unused: true });

  var unused = JSHINT.data().unused;
  test.deepEqual(expectedVarAndParamUnused, unused);

  // false
  TestRun(test)
    .test(code, { unused: false });

  unused = JSHINT.data().unused;
  test.deepEqual(expectedVarUnused, unused);

  // strict
  TestRun(test)
    .addError(1, "'func' is defined but never used.")
    .addError(1, "'placeHolder1' is defined but never used.")
    .addError(1, "'placeHolder2' is defined but never used.")
    .addError(1, "'param' is defined but never used.")
    .test(code, { unused: "strict" });

  unused = JSHINT.data().unused;
  test.deepEqual(expectedAllUnused, unused);

  // vars
  TestRun(test)
    .addError(1, "'func' is defined but never used.")
    .test(code, { unused: "vars" });

  unused = JSHINT.data().unused;
  test.deepEqual(expectedAllUnused, unused);

  test.done();
};

exports['unused with global override'] = function (test) {
  var code;

  code = [
    "alert();",
    "function alert() {}"
  ];

  TestRun(test)
    .test(code, { unused: true, undef: true, devel: true, latedef: false });

  test.done();
};

// Regressions for "unused" getting overwritten via comment (GH-778)
exports['unused overrides'] = function (test) {
  var code;

  code = ['function foo(a) {', '/*jshint unused:false */', '}', 'foo();'];
  TestRun(test).test(code, {es3: true, unused: true});

  code = ['function foo(a, b, c) {', '/*jshint unused:vars */', 'var i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(3, "'i' is defined but never used.")
    .test(code, {es3: true, unused: true});

  code = ['function foo(a, b, c) {', '/*jshint unused:true */', 'var i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "'c' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {es3: true, unused: "strict"});

  code = ['function foo(a, b, c) {', '/*jshint unused:strict */', 'var i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {es3: true, unused: true});

  code = ['/*jshint unused:vars */', 'function foo(a, b) {}', 'foo();'];
  TestRun(test).test(code, {es3: true, unused: "strict"});

  code = ['/*jshint unused:vars */', 'function foo(a, b) {', 'var i = 3;', '}', 'foo();'];
  TestRun(test)
    .addError(3, "'i' is defined but never used.")
    .test(code, {es3: true, unused: "strict"});

  code = ['/*jshint unused:badoption */', 'function foo(a, b) {', 'var i = 3;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "Bad option value.")
    .addError(2, "'b' is defined but never used.")
    .addError(2, "'a' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {es3: true, unused: "strict"});

  test.done();
};

exports['unused overrides esnext'] = function (test) {
  var code;

  code = ['function foo(a) {', '/*jshint unused:false */', '}', 'foo();'];
  TestRun(test).test(code, {esnext: true, unused: true});

  code = ['function foo(a, b, c) {', '/*jshint unused:vars */', 'let i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(3, "'i' is defined but never used.")
    .test(code, {esnext: true, unused: true});

  code = ['function foo(a, b, c) {', '/*jshint unused:true */', 'let i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "'c' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {esnext: true, unused: "strict"});

  code = ['function foo(a, b, c) {', '/*jshint unused:strict */', 'let i = b;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "'a' is defined but never used.")
    .addError(1, "'c' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {esnext: true, unused: true});

  code = ['/*jshint unused:vars */', 'function foo(a, b) {', 'let i = 3;', '}', 'foo();'];
  TestRun(test)
    .addError(3, "'i' is defined but never used.")
    .test(code, {esnext: true, unused: "strict"});

  code = ['/*jshint unused:badoption */', 'function foo(a, b) {', 'let i = 3;', '}', 'foo();'];
  TestRun(test)
    .addError(1, "Bad option value.")
    .addError(2, "'b' is defined but never used.")
    .addError(2, "'a' is defined but never used.")
    .addError(3, "'i' is defined but never used.")
    .test(code, {esnext: true, unused: "strict"});

  test.done();
};

exports['unused with latedef function'] = function (test) {
  var code;

  // Regression for gh-2363, gh-2282, gh-2191
  code = ['exports.a = a;',
    'function a() {}',
    'exports.b = function() { b(); };',
    'function b() {}',
    '(function() {',
    '  function c() { d(); }',
    '  window.c = c;',
    '  function d() {}',
    '})();',
    'var e;',
    '(function() {',
    '  e();',
    '  function e(){}',
    '})();',
    ''];

  TestRun(test)
    .addError(10, "'e' is defined but never used.")
    .test(code, {undef: false, unused: true, node: true});

  test.done();
};

// Regression test for `undef` to make sure that ...
exports['undef in a function scope'] = function (test) {
  var src = fixture('undef_func.js');

  // Make sure that the lint is clean with and without undef.
  TestRun(test).test(src, {es3: true});
  TestRun(test).test(src, {es3: true, undef: true });

  test.done();
};

/** Option `scripturl` allows the use of javascript-type URLs */
exports.scripturl = function (test) {
  var code = [
      "var foo = { 'count': 12, 'href': 'javascript:' };",
      "foo = 'javascript:' + 'xyz';"
    ],
    src = fs.readFileSync(__dirname + '/fixtures/scripturl.js', 'utf8');

  // Make sure there is an error
  TestRun(test)
    .addError(1, "Script URL.")
    .addError(2, "Script URL.") // 2 times?
    .addError(2, "JavaScript URL.")
    .test(code, {es3: true});

  // Make sure the error goes away when javascript URLs are tolerated
  TestRun(test).test(code, { es3: true, scripturl: true });

  // Make sure an error does not exist for labels that look like URLs (GH-1013)
  TestRun(test)
    .test(src, {es3: true});

  test.done();
};

/**
 * Option `forin` disallows the use of for in loops without hasOwnProperty.
 *
 * The for in statement is used to loop through the names of properties
 * of an object, including those inherited through the prototype chain.
 * The method hasOwnPropery is used to check if the property belongs to
 * an object or was inherited through the prototype chain.
 */
exports.forin = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/forin.js', 'utf8');
  var msg = 'The body of a for in should be wrapped in an if statement to filter unwanted ' +
        'properties from the prototype.';

  // Make sure there are no other errors
  TestRun(test).test(src, {es3: true});

  // Make sure it fails when forin is true
  TestRun(test)
    .addError(15, msg)
    .addError(23, msg)
    .addError(37, msg)
    .addError(43, msg)
    .addError(73, msg)
    .test(src, { es3: true, forin: true });

  test.done();
};

/**
 * Option `loopfunc` allows you to use function expression in the loop.
 * E.g.:
 *   while (true) x = function (test) {};
 *
 * This is generally a bad idea since it is too easy to make a
 * closure-related mistake.
 */
exports.loopfunc = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/loopfunc.js', 'utf8');

  // By default, not functions are allowed inside loops
  TestRun(test)
    .addError(4, "Don't make functions within a loop.")
    .addError(8, "Don't make functions within a loop.")
    .addError(20, "Don't make functions within a loop.")
    .addError(25, "Don't make functions within a loop.")
    .addError(12, "Function declarations should not be placed in blocks. Use a function " +
            "expression or move the statement to the top of the outer function.")
    .addError(42, "Don't make functions within a loop.")
    .test(src, {es3: true});

  // When loopfunc is true, only function declaration should fail.
  // Expressions are okay.
  TestRun(test)
    .addError(12, "Function declarations should not be placed in blocks. Use a function " +
            "expression or move the statement to the top of the outer function.")
    .test(src, { es3: true, loopfunc: true });

  var es6LoopFuncSrc = [
    "for (var i = 0; i < 5; i++) {",
    "  var y = w => i;",
    "}",
    "for (i = 0; i < 5; i++) {",
    "  var z = () => i;",
    "}",
    "for (i = 0; i < 5; i++) {",
    "  y = i => i;", // not capturing
    "}",
    "for (i = 0; i < 5; i++) {",
    "  y = { a() { return i; } };",
    "}",
    "for (i = 0; i < 5; i++) {",
    "  y = class { constructor() { this.i = i; }};",
    "}",
    "for (i = 0; i < 5; i++) {",
    "  y = { a() { return () => i; } };",
    "}"
  ];
  TestRun(test)
    .addError(2, "Don't make functions within a loop.")
    .addError(5, "Don't make functions within a loop.")
    .addError(11, "Don't make functions within a loop.")
    .addError(14, "Don't make functions within a loop.")
    .addError(17, "Don't make functions within a loop.")
    .test(es6LoopFuncSrc, {esnext: true});

  // functions declared in the expressions that loop should warn
  var src2 = [
    "for(var i = 0; function a(){return i;}; i++) { break; }",
    "var j;",
    "while(function b(){return j;}){}",
    "for(var c = function(){return j;};;){c();}"];

  TestRun(test)
    .addError(1, "Don't make functions within a loop.")
    .addError(3, "Don't make functions within a loop.")
    .test(src2, { es3: true, loopfunc: false, boss: true });

  test.done();
};

/** Option `boss` unlocks some useful but unsafe features of JavaScript. */
exports.boss = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/boss.js', 'utf8');

  // By default, warn about suspicious assignments
  TestRun(test)
    .addError(1, 'Expected a conditional expression and instead saw an assignment.')
    .addError(4, 'Expected a conditional expression and instead saw an assignment.')
    .addError(7, 'Expected a conditional expression and instead saw an assignment.')
    .addError(12, 'Expected a conditional expression and instead saw an assignment.')

    // GH-657
    .addError(14, 'Expected a conditional expression and instead saw an assignment.')
    .addError(17, 'Expected a conditional expression and instead saw an assignment.')
    .addError(20, 'Expected a conditional expression and instead saw an assignment.')
    .addError(25, 'Expected a conditional expression and instead saw an assignment.')

    // GH-670
    .addError(28, "Did you mean to return a conditional instead of an assignment?")
    .addError(32, "Did you mean to return a conditional instead of an assignment?")
    .test(src, {es3: true});

  // But if you are the boss, all is good
  TestRun(test).test(src, { es3: true, boss: true });

  test.done();
};

/**
 * Options `eqnull` allows you to use '== null' comparisons.
 * It is useful when you want to check if value is null _or_ undefined.
 */
exports.eqnull = function (test) {
  var code = [
    'if (e == null) doSomething();',
    'if (null == e) doSomething();',
    'if (e != null) doSomething();',
    'if (null != e) doSomething();',
  ];

  // By default, warn about `== null` comparison
  TestRun(test)
    .addError(1, "Use '===' to compare with 'null'.")
    .addError(2, "Use '===' to compare with 'null'.")
    .addError(3, "Use '!==' to compare with 'null'.")
    .addError(4, "Use '!==' to compare with 'null'.")
    .test(code, {es3: true});

  // But when `eqnull` is true, no questions asked
  TestRun(test).test(code, { es3: true, eqnull: true });

  // Make sure that `eqnull` has precedence over `eqeqeq`
  TestRun(test).test(code, { es3: true, eqeqeq: true, eqnull: true });

  test.done();
};

/**
 * Option `supernew` allows you to use operator `new` with anonymous functions
 * and objects without invocation.
 *
 * Ex.:
 *   new function (test) { ... };
 *   new Date;
 */
exports.supernew = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/supernew.js', 'utf8');

  TestRun(test)
    .addError(1, "Weird construction. Is 'new' necessary?")
    .addError(9, "Missing '()' invoking a constructor.", { character: 1 })
    .addError(11, "Missing '()' invoking a constructor.", {
      character: 13
    })
    .test(src, {es3: true});

  TestRun(test).test(src, { es3: true, supernew: true });

  test.done();
};

/** Option `bitwise` disallows the use of bitwise operators. */
exports.bitwise = function (test) {
  var unOps = [ "~" ];
  var binOps = [ "&",  "|",  "^",  "<<",  ">>",  ">>>" ];
  var modOps = [ "&=", "|=", "^=", "<<=", ">>=", ">>>=" ];

  var i, op;

  for (i = 0; i < unOps.length; i += 1) {
    op = unOps[i];

    TestRun(test)
      .test("var b = " + op + "a;", {es3: true});

    TestRun(test)
      .addError(1, "Unexpected use of '" + op + "'.")
      .test("var b = " + op + "a;", {es3: true, bitwise: true});
  }

  for (i = 0; i < binOps.length; i += 1) {
    op = binOps[i];

    TestRun(test)
      .test("var c = a " + op + " b;", {es3: true});

    TestRun(test)
      .addError(1, "Unexpected use of '" + op + "'.")
      .test("var c = a " + op + " b;", {es3: true, bitwise: true});
  }

  for (i = 0; i < modOps.length; i += 1) {
    op = modOps[i];

    TestRun(test)
      .test("b " + op + " a;", {es3: true});

    TestRun(test)
      .addError(1, "Unexpected use of '" + op + "'.")
      .test("b " + op + " a;", {es3: true, bitwise: true});
  }

  test.done();
};

/** Option `debug` allows the use of debugger statements. */
exports.debug = function (test) {
  var code = 'function test () { debugger; return true; }';

  // By default disallow debugger statements.
  TestRun(test)
    .addError(1, "Forgotten 'debugger' statement?")
    .test(code, {es3: true});

  // But allow them if debug is true.
  TestRun(test).test(code, { es3: true, debug: true });

  test.done();
};

/** `debugger` statements without semicolons are found on the correct line */
exports.debug = function (test) {
  var src = [
    "function test () {",
    "debugger",
    "return true; }"
  ];

  // Ensure we mark the correct line when finding debugger statements
  TestRun(test)
    .addError(2, "Forgotten 'debugger' statement?")
    .test(src, {es3: true, asi: true});

  test.done();
};

/** Option `eqeqeq` requires you to use === all the time. */
exports.eqeqeq = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/eqeqeq.js', 'utf8');

  TestRun(test)
    .addError(8, "Use '===' to compare with 'null'.")
    .test(src, {es3: true});

  TestRun(test)
    .addError(2, "Expected '===' and instead saw '=='.")
    .addError(5, "Expected '!==' and instead saw '!='.")
    .addError(8, "Expected '===' and instead saw '=='.")
    .test(src, { es3: true, eqeqeq: true });

  test.done();
};

/** Option `evil` allows the use of eval. */
exports.evil = function (test) {
  var src = [
    "eval('hey();');",
    "document.write('');",
    "document.writeln('');",
    "window.execScript('xyz');",
    "new Function('xyz();');",
    "setTimeout('xyz();', 2);",
    "setInterval('xyz();', 2);",
    "var t = document['eval']('xyz');"
  ];

  TestRun(test)
    .addError(1, "eval can be harmful.")
    .addError(2, "document.write can be a form of eval.")
    .addError(3, "document.write can be a form of eval.")
    .addError(4, "eval can be harmful.")
    .addError(5, "The Function constructor is a form of eval.")
    .addError(6, "Implied eval. Consider passing a function instead of a string.")
    .addError(7, "Implied eval. Consider passing a function instead of a string.")
    .addError(8, "eval can be harmful.")
    .test(src, { es3: true, browser: true });

  TestRun(test).test(src, { es3: true, evil: true, browser: true });

  test.done();
};

/**
 * Option `immed` forces you to wrap immediate invocations in parens.
 *
 * Functions in JavaScript can be immediately invoce but that can confuse
 * readers of your code. To make it less confusing, wrap the invocations in
 * parens.
 *
 * E.g. (note the parens):
 *   var a = (function (test) {
 *     return 'a';
 *   }());
 *   console.log(a); // --> 'a'
 */
exports.immed = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/immed.js', 'utf8');

  TestRun(test).test(src, {es3: true});

  TestRun(test)
    .addError(3, "Wrap an immediate function invocation in parens " +
           "to assist the reader in understanding that the expression " +
           "is the result of a function, and not the function itself.")
    .addError(13, "Wrapping non-IIFE function literals in parens is unnecessary.")
    .test(src, { es3: true, immed: true });

  // Regression for GH-900
  TestRun(test)
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Expected an identifier and instead saw ')'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Unmatched '{'.")
    .addError(1, "Expected an assignment or function call and instead saw an expression.")
    .addError(1, "Missing semicolon.")
    .addError(1, "Unrecoverable syntax error. (100% scanned).")
    .test("(function () { if (true) { }());", { es3: true, immed: true });

  test.done();
};

/** Option `plusplus` prohibits the use of increments/decrements. */
exports.plusplus = function (test) {
  var ops = [ '++', '--' ];

  for (var i = 0, op; op = ops[i]; i += 1) {
    TestRun(test).test('var i = j' + op + ';', {es3: true});
    TestRun(test).test('var i = ' + op + 'j;', {es3: true});
  }

  for (i = 0, op = null; op = ops[i]; i += 1) {
    TestRun(test)
      .addError(1, "Unexpected use of '" + op + "'.")
      .test('var i = j' + op + ';', { es3: true, plusplus: true });

    TestRun(test)
      .addError(1, "Unexpected use of '" + op + "'.")
      .test('var i = ' + op + 'j;', { es3: true, plusplus: true });
  }

  test.done();
};

/**
 * Option `newcap` requires constructors to be capitalized.
 *
 * Constructors are functions that are designed to be used with the `new` statement.
 * `new` creates a new object and binds it to the implied this parameter.
 * A constructor executed without new will have its this assigned to a global object,
 * leading to errors.
 *
 * Unfortunately, JavaScript gives us absolutely no way of telling if a function is a
 * constructor. There is a convention to capitalize all constructor names to prevent
 * those mistakes. This option enforces that convention.
 */
exports.newcap = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/newcap.js', 'utf8');

  TestRun(test).test(src, {es3: true}); // By default, everything is fine

  // When newcap is true, enforce the conventions
  TestRun(test)
    .addError(1, 'A constructor name should start with an uppercase letter.')
    .addError(5, "Missing 'new' prefix when invoking a constructor.")
    .addError(10, "A constructor name should start with an uppercase letter.")
    .addError(14, "A constructor name should start with an uppercase letter.")
    .test(src, { es3: true, newcap: true });

  test.done();
};

/** Option `sub` allows all forms of subscription. */
exports.sub = function (test) {
  TestRun(test)
    .addError(1, "['prop'] is better written in dot notation.", {
      character: 17
    })
    .test("window.obj = obj['prop'];", {es3: true});

  TestRun(test).test("window.obj = obj['prop'];", { es3: true, sub: true });

  test.done();
};

/** Option `strict` requires you to use "use strict"; */
exports.strict = function (test) {
  var code  = "(function (test) { return; }());";
  var code1 = '(function (test) { "use strict"; return; }());';
  var code2 = "var obj = Object({ foo: 'bar' });";
  var code3 = "'use strict'; \n function hello() { return; }";
  var src = fs.readFileSync(__dirname + '/fixtures/strict_violations.js', 'utf8');
  var src2 = fs.readFileSync(__dirname + '/fixtures/strict_incorrect.js', 'utf8');
  var src3 = fs.readFileSync(__dirname + '/fixtures/strict_newcap.js', 'utf8');

  TestRun(test).test(code, {es3: true});
  TestRun(test).test(code1, {es3: true});

  var run = TestRun(test)
    .addError(1, 'Missing "use strict" statement.');
  run.test(code, { es3: true, strict: true });
  run.test(code, { es3: true, strict: "global" });
  TestRun(test).test(code, { es3: true, strict: "implied" });

  TestRun(test).test(code1, { es3: true, strict: true });
  TestRun(test).test(code1, { es3: true, strict: "global" });
  TestRun(test)
    .addError(1, 'Unnecessary directive "use strict".')
    .test(code1, { es3: true, strict: "implied" });

  // Test for strict mode violations
  run = TestRun(test)
    .addError(4, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(7, 'Strict violation.')
    .addError(8, 'Strict violation.');
  run.test(src, { es3: true, strict: true });
  run.test(src, { es3: true, strict: "global" });

  run = TestRun(test)
    .addError(4, 'Expected an assignment or function call and instead saw an expression.')
    .addError(9, 'Missing semicolon.')
    .addError(28, 'Expected an assignment or function call and instead saw an expression.')
    .addError(53, 'Expected an assignment or function call and instead saw an expression.');
  run.test(src2, { es3: true, strict: false });

  TestRun(test)
    .test(src3, {es3 : true});

  TestRun(test).test(code2, { es3: true, strict: true });
  TestRun(test)
    .addError(1, 'Missing "use strict" statement.')
    .test(code2, { es3: true, strict: "global" });

  TestRun(test).test(code3, { strict: "global"});
  run = TestRun(test)
    .addError(1, 'Use the function form of "use strict".');
  run.test(code3, { strict: true });
  run.addError(1, 'Unnecessary directive "use strict".')
    .test(code3, { strict: "implied" });

  [ true, false, "global", "implied" ].forEach(function(val) {
    JSHINT("/*jshint strict: " + val + " */");
    test.strictEqual(JSHINT.data().options.strict, val);
  });

  TestRun(test)
    .addError(1, "Bad option value.")
    .test("/*jshint strict: foo */");

  TestRun(test, "environments have precedence over 'strict: true'")
    .test(code3, { strict: true, node: true });

  TestRun(test, "gh-2668")
    .addError(1, "Missing \"use strict\" statement.")
    .test("a = 2;", { strict: "global" });

  test.done();
};

/**
 * This test asserts sub-optimal behavior.
 *
 * In the "browserify", "node" and "phantomjs" environments, user code is not
 * executed in the global scope directly. This means that top-level `use
 * strict` directives, although seemingly global, do *not* enable ES5 strict
 * mode for other scripts executed in the same environment. Because of this,
 * the `strict` option should enforce a top-level `use strict` directive in
 * those environments.
 *
 * The `strict` option was implemented without consideration for these
 * environments, so the sub-optimal behavior must be preserved for backwards
 * compatability.
 *
 * TODO: Interpret `strict: true` as `strict: global` in the Browserify,
 * Node.js, and PhantomJS environments, and remove this test in JSHint 3
 */
exports.strictEnvs = function (test) {
  var partialStrict = [
    "void 0;",
    "(function() { void 0; }());",
    "(function() { 'use strict'; void 0; }());"
  ];
  TestRun(test, "")
    .addError(2, "Missing \"use strict\" statement.")
    .test(partialStrict, { strict: true, browserify: true });
  TestRun(test, "")
    .addError(2, "Missing \"use strict\" statement.")
    .test(partialStrict, { strict: true, node: true });
  TestRun(test, "")
    .addError(2, "Missing \"use strict\" statement.")
    .test(partialStrict, { strict: true, phantom: true });

  partialStrict = [
    '(() =>',
    '  void 0',
    ')();',
  ]

  TestRun(test, "Block-less arrow functions in the Browserify env")
    .addError(3, "Missing \"use strict\" statement.")
    .test(partialStrict, { esversion: 6, strict: true, browserify: true });
  TestRun(test, "Block-less arrow function in the Node.js environment")
    .addError(3, "Missing \"use strict\" statement.")
    .test(partialStrict, { esversion: 6, strict: true, node: true });
  TestRun(test, "Block-less arrow function in the PhantomJS environment")
    .addError(3, "Missing \"use strict\" statement.")
    .test(partialStrict, { esversion: 6, strict: true, phantom: true });

  test.done();
};

/**
 * The following test asserts sub-optimal behavior.
 *
 * Through the `strict` and `globalstrict` options, JSHint can be configured to
 * issue warnings when code is not in strict mode. Historically, JSHint has
 * issued these warnings on a per-statement basis in global code, leading to
 * "noisy" output through the repeated reporting of the missing directive.
 */
exports.strictNoise = function (test) {
  TestRun(test, "global scope")
    .addError(1, "Missing \"use strict\" statement.")
    .addError(2, "Missing \"use strict\" statement.")
    .test([
      "void 0;",
      "void 0;",
    ], { strict: true, globalstrict: true });

  TestRun(test, "function scope")
    .addError(2, "Missing \"use strict\" statement.")
    .test([
      "(function() {",
      "  void 0;",
      "  void 0;",
      "}());",
    ], { strict: true });

  TestRun(test, "function scope")
    .addError(2, "Missing \"use strict\" statement.")
    .test([
      "(function() {",
      "  (function() {",
      "    void 0;",
      "    void 0;",
      "  }());",
      "}());",
    ], { strict: true });

  test.done();
};

/** Option `globalstrict` allows you to use global "use strict"; */
exports.globalstrict = function (test) {
  var code = [
    '"use strict";',
    'function hello() { return; }'
  ];

  TestRun(test)
    .addError(1, 'Use the function form of "use strict".')
    .test(code, { es3: true, strict: true });

  TestRun(test).test(code, { es3: true, globalstrict: true });

  // Check that globalstrict also enabled strict
  TestRun(test)
    .addError(1, 'Missing "use strict" statement.')
    .test(code[1], { es3: true, globalstrict: true });

  // Don't enforce "use strict"; if strict has been explicitly set to false
  TestRun(test).test(code[1], { es3: true, globalstrict: true, strict: false });

  TestRun(test, "co-occurence with 'strict: global' (via configuration)")
    .addError(0, "Incompatible values for the 'strict' and 'globalstrict' linting options. (0% scanned).")
    .test("this is not JavaScript", { strict: "global", globalstrict: false });

  TestRun(test, "co-occurence with 'strict: global' (via configuration)")
    .addError(0, "Incompatible values for the 'strict' and 'globalstrict' linting options. (0% scanned).")
    .test("this is not JavaScript", { strict: "global", globalstrict: true });

  TestRun(test, "co-occurence with 'strict: global' (via in-line directive")
    .addError(2, "Incompatible values for the 'strict' and 'globalstrict' linting options. (66% scanned).")
    .test([
      "",
      "// jshint globalstrict: true",
      "this is not JavaScript"
    ], { strict: "global" });

  TestRun(test, "co-occurence with 'strict: global' (via in-line directive")
    .addError(2, "Incompatible values for the 'strict' and 'globalstrict' linting options. (66% scanned).")
    .test([
      "",
      "// jshint globalstrict: false",
      "this is not JavaScript"
    ], { strict: "global" });

  TestRun(test, "co-occurence with 'strict: global' (via in-line directive")
    .addError(2, "Incompatible values for the 'strict' and 'globalstrict' linting options. (66% scanned).")
    .test([
      "",
      "// jshint strict: global",
      "this is not JavaScript"
    ], { globalstrict: true });

  TestRun(test, "co-occurence with 'strict: global' (via in-line directive")
    .addError(2, "Incompatible values for the 'strict' and 'globalstrict' linting options. (66% scanned).")
    .test([
      "",
      "// jshint strict: global",
      "this is not JavaScript"
    ], { globalstrict: false });

  TestRun(test, "co-occurence with internally-set 'strict: gobal' (module code)")
    .test(code, { strict: true, globalstrict: false, esnext: true, module: true });

  TestRun(test, "co-occurence with internally-set 'strict: gobal' (Node.js code)")
    .test(code, { strict: true, globalstrict: false, node: true });

  TestRun(test, "co-occurence with internally-set 'strict: gobal' (Phantom.js code)")
    .test(code, { strict: true, globalstrict: false, phantom: true });

  TestRun(test, "co-occurence with internally-set 'strict: gobal' (Browserify code)")
    .test(code, { strict: true, globalstrict: false, browserify: true });

  // Check that we can detect missing "use strict"; statement for code that is
  // not inside a function
  code = [
    "var a = 1;",
    "a += 1;",
    "function func() {}"
  ];
  TestRun(test)
    .addError(1, 'Missing "use strict" statement.')
    .addError(2, 'Missing "use strict" statement.')
    .test(code, { globalstrict: true, strict: true });

  // globalscript does not prevent you from using only the function-mode
  // "use strict";
  code = '(function (test) { "use strict"; return; }());';
  TestRun(test).test(code, { globalstrict: true, strict: true });

  TestRun(test, "gh-2661")
    .test("'use strict';", { strict: false, globalstrict: true });

  TestRun(test, "gh-2836 (1)")
    .test([
      "// jshint globalstrict: true",
      // The specific option set by the following directive is not relevant.
      // Any option set by another directive will trigger the regression.
      "// jshint undef: true"
    ]);

  TestRun(test, "gh-2836 (2)")
    .test([
      "// jshint strict: true, globalstrict: true",
      // The specific option set by the following directive is not relevant.
      // Any option set by another directive will trigger the regression.
      "// jshint undef: true"
    ]);

  test.done();
};

/** Option `laxbreak` allows you to insert newlines before some operators. */
exports.laxbreak = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/laxbreak.js', 'utf8');

  TestRun(test)
    .addError(2, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(3, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(12, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .test(src, { es3: true });

  var ops = [ '||', '&&', '*', '/', '%', '+', '-', '>=',
        '==', '===', '!=', '!==', '>', '<', '<=', 'instanceof' ];

  for (var i = 0, op, code; op = ops[i]; i += 1) {
    code = ['var a = b ', op + ' c;'];
    TestRun(test)
      .addError(2, "Misleading line break before '" + op + "'; readers may interpret this as an expression boundary.")
      .test(code, { es3: true });

    TestRun(test).test(code, { es3: true, laxbreak: true });
  }

  code = [ 'var a = b ', '? c : d;' ];
  TestRun(test)
    .addError(2, "Misleading line break before '?'; readers may interpret this as an expression boundary.")
    .test(code, { es3: true });

  TestRun(test).test(code, { es3: true, laxbreak: true });

  test.done();
};

exports.validthis = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/strict_this.js', 'utf8');

  TestRun(test)
    .addError(8, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(9, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(11, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(src, {es3: true});

  src = fs.readFileSync(__dirname + '/fixtures/strict_this2.js', 'utf8');
  TestRun(test).test(src, {es3: true});

  // Test for erroneus use of validthis

  var code = ['/*jshint validthis:true */', 'hello();'];
  TestRun(test)
    .addError(1, "Option 'validthis' can't be used in a global scope.")
    .test(code, {es3: true});

  code = ['function x() {', '/*jshint validthis:heya */', 'hello();', '}'];
  TestRun(test)
    .addError(2, "Bad option value.")
    .test(code, {es3: true});

  test.done();
};

/*
 * Test string relevant options
 *   multistr   allows multiline strings
 */
exports.strings = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/strings.js', 'utf8');

  TestRun(test)
    .addError(9, "Unclosed string.")
    .addError(10, "Unclosed string.")
    .addError(15, "Unclosed string.")
    .addError(25, "Octal literals are not allowed in strict mode.")
    .test(src, { es3: true, multistr: true });

  TestRun(test)
    .addError(3, "Bad escaping of EOL. Use option multistr if needed.")
    .addError(4, "Bad escaping of EOL. Use option multistr if needed.")
    .addError(9, "Unclosed string.")
    .addError(10, "Unclosed string.")
    .addError(14, "Bad escaping of EOL. Use option multistr if needed.")
    .addError(15, "Unclosed string.")
    .addError(25, "Octal literals are not allowed in strict mode.")
    .addError(29, "Bad escaping of EOL. Use option multistr if needed.")
    .test(src, { es3: true });

  test.done();
};

/*
 * Test the `quotmark` option
 *   quotmark   quotation mark or true (=ensure consistency)
 */
exports.quotes = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/quotes.js', 'utf8');
  var src2 = fs.readFileSync(__dirname + '/fixtures/quotes2.js', 'utf8');

  TestRun(test)
    .test(src, { es3: true });

  TestRun(test)
    .addError(3, "Mixed double and single quotes.")
    .test(src, { es3: true, quotmark: true });

  TestRun(test)
    .addError(3, "Strings must use singlequote.")
    .test(src, { es3: true, quotmark: 'single' });

  TestRun(test)
    .addError(2, "Strings must use doublequote.")
    .test(src, { es3: true, quotmark: 'double' });

  // test multiple runs (must have the same result)
  var run = TestRun(test);
  run.addError(3, "Mixed double and single quotes.")
    .test(src, { es3: true, quotmark: true });
  run.addError(3, "Mixed double and single quotes.")
    .test(src2, { es3: true, quotmark: true });

  test.done();
};

// Test the `quotmark` option when defined as a JSHint comment.
exports.quotesInline = function (test) {
  TestRun(test)
    .addError(6, "Strings must use doublequote.")
    .addError(14, "Strings must use singlequote.")
    .addError(21, "Mixed double and single quotes.")
    .addError(32, "Bad option value.")
    .test(fs.readFileSync(__dirname + "/fixtures/quotes3.js", "utf8"));

  test.done();
};

// Test the `quotmark` option along with TemplateLiterals.
exports.quotesAndTemplateLiterals = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/quotes4.js', 'utf8');

  // Without esnext
  TestRun(test)
    .addError(2, "'template literal syntax' is only available in ES6 (use 'esversion: 6').")
    .test(src);

  // With esnext
  TestRun(test)
    .test(src, {esnext: true});

  // With esnext and single quotemark
  TestRun(test)
    .test(src, {esnext: true, quotmark: 'single'});

  // With esnext and double quotemark
  TestRun(test)
    .addError(1, "Strings must use doublequote.")
    .test(src, {esnext: true, quotmark: 'double'});

  test.done();
};

exports.scope = {};
exports.scope.basic = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/scope.js', 'utf8');

  TestRun(test, 1)
    .addError(11, "'j' used out of scope.") // 3x
    .addError(12, "'x' used out of scope.")
    .addError(20, "'aa' used out of scope.")
    .addError(27, "'bb' used out of scope.")
    .addError(37, "'cc' is not defined.")
    .addError(42, "'bb' is not defined.")
    .addError(53, "'xx' used out of scope.")
    .addError(54, "'yy' used out of scope.")
    .test(src, {es3: true});

  TestRun(test, 2)
    .addError(37, "'cc' is not defined.")
    .addError(42, "'bb' is not defined.")
    .test(src, { es3: true, funcscope: true });

  test.done();
};

exports.scope.crossBlocks = function (test) {
  var code = fs.readFileSync(__dirname + '/fixtures/scope-cross-blocks.js', 'utf8');

  TestRun(test)
    .addError(3, "'topBlockBefore' used out of scope.")
    .addError(4, "'nestedBlockBefore' used out of scope.")
    .addError(11, "'nestedBlockBefore' used out of scope.")
    .addError(27, "'nestedBlockAfter' used out of scope.")
    .addError(32, "'nestedBlockAfter' used out of scope.")
    .addError(33, "'topBlockAfter' used out of scope.")
    .test(code);

  TestRun(test)
    .test(code, { funcscope: true });


  test.done();
};

/*
 * Tests `esnext` and `moz` options.
 *
 * This test simply makes sure that options are recognizable
 * and do not reset ES5 mode (see GH-1068)
 *
 */
exports.esnext = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/const.js', 'utf8');

  var code = [
    'const myConst = true;',
    'const foo = 9;',
    'var myConst = function (test) { };',
    'foo = "hello world";',
    'var a = { get x() {} };'
  ];

  TestRun(test)
    .addError(21, "const 'immutable4' is initialized to 'undefined'.")
    .test(src, { esnext: true });

  TestRun(test)
    .addError(21, "const 'immutable4' is initialized to 'undefined'.")
    .test(src, { moz: true });

  TestRun(test)
    .addError(3, "'myConst' has already been declared.")
    .addError(4, "Attempting to override 'foo' which is a constant.")
    .test(code, { esnext: true });

  TestRun(test)
    .addError(3, "'myConst' has already been declared.")
    .addError(4, "Attempting to override 'foo' which is a constant.")
    .test(code, { moz: true });

  test.done();
};

// The `moz` option should not preclude ES6
exports.mozAndEs6 = function (test) {
  var src = [
   "var x = () => {};",
   "function* toArray(...rest) {",
   "  void new.target;",
   "  yield rest;",
   "}",
   "var y = [...x];"
  ];

  TestRun(test)
    .test(src, { esversion: 6 });

  TestRun(test)
    .test(src, { esversion: 6, moz: true });

  test.done();
};

/*
 * Tests the `maxlen` option
 */
exports.maxlen = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/maxlen.js', 'utf8');

  TestRun(test)
    .addError(3, "Line is too long.")
    .addError(4, "Line is too long.")
    .addError(5, "Line is too long.")
    .addError(6, "Line is too long.")
    // line 7 and more are exceptions and won't trigger the error
    .test(src, { es3: true, maxlen: 23 });

  test.done();
};

/*
 * Tests the `laxcomma` option
 */
exports.laxcomma = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/laxcomma.js', 'utf8');

  // All errors.
  TestRun(test)
    .addError(1, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(2, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(2, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(6, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(10, "Misleading line break before '&&'; readers may interpret this as an expression boundary.")
    .addError(15, "Misleading line break before '?'; readers may interpret this as an expression boundary.")
    .test(src, {es3: true});

  // Allows bad line breaking, but not on commas.
  TestRun(test)
    .addError(1, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(2, "Comma warnings can be turned off with 'laxcomma'.")
    .addError(2, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .addError(6, "Misleading line break before ','; readers may interpret this as an expression boundary.")
    .test(src, {es3: true, laxbreak: true });

  // Allows comma-first style but warns on bad line breaking
  TestRun(test)
    .addError(10, "Misleading line break before '&&'; readers may interpret this as an expression boundary.")
    .addError(15, "Misleading line break before '?'; readers may interpret this as an expression boundary.")
    .test(src, {es3: true, laxcomma: true });

  // No errors if both laxbreak and laxcomma are turned on
  TestRun(test).test(src, {es3: true, laxbreak: true, laxcomma: true });

  test.done();
};

/*
 * Tests the `browser` option
 */
exports.browser = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/browser.js', 'utf8');

  TestRun(test)
    .addError(2, "'atob' is not defined.")
    .addError(3, "'btoa' is not defined.")
    .addError(6, "'DOMParser' is not defined.")
    .addError(10, "'XMLSerializer' is not defined.")
    .addError(14, "'NodeFilter' is not defined.")
    .addError(15, "'Node' is not defined.")
    .addError(18, "'MutationObserver' is not defined.")
    .addError(21, "'SVGElement' is not defined.")
    .addError(24, "'Comment' is not defined.")
    .addError(25, "'DocumentFragment' is not defined.")
    .addError(26, "'Range' is not defined.")
    .addError(27, "'Text' is not defined.")
    .addError(31, "'document' is not defined.")
    .addError(32, "'fetch' is not defined.")
    .addError(35, "'URL' is not defined.")
    .test(src, {es3: true, undef: true });

  TestRun(test).test(src, {es3: true, browser: true, undef: true });

  test.done();
};

exports.unnecessarysemicolon = function (test) {
  var code = [
    "function foo() {",
    "    var a;;",
    "}"
  ];

  TestRun(test)
    .addError(2, "Unnecessary semicolon.")
    .test(code, {es3: true});

  test.done();
};

exports.blacklist = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/browser.js', 'utf8');
  var code = [
    '/*jshint browser: true */',
    '/*global -event, bar, -btoa */',
    'var a = event.hello();',
    'var c = foo();',
    'var b = btoa(1);',
    'var d = bar();'
  ];

  // make sure everything is ok
  TestRun(test).test(src, { es3: true, undef: true, browser: true });

  // disallow Node in a predef Object
  TestRun(test)
    .addError(15, "'Node' is not defined.")
    .test(src, {
      undef: true,
      browser: true,
      predef: { '-Node': false }
    });
  // disallow Node and NodeFilter in a predef Array
  TestRun(test)
    .addError(14, "'NodeFilter' is not defined.")
    .addError(15, "'Node' is not defined.")
    .test(src, {
      undef: true,
      browser: true,
      predef: ['-Node', '-NodeFilter']
    });

  TestRun(test)
    .addError(3, "'event' is not defined.")
    .addError(4, "'foo' is not defined.")
    .addError(5, "'btoa' is not defined.")
    .test(code, { es3: true, undef: true });

  test.done();
};

/*
 * Tests the `maxstatements` option
 */
exports.maxstatements = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/max-statements-per-function.js', 'utf8');

  TestRun(test)
    .addError(1, "This function has too many statements. (8)")
    .test(src, { es3: true, maxstatements: 7 });

  TestRun(test)
    .test(src, { es3: true, maxstatements: 8 });

  TestRun(test)
    .test(src, { es3: true });

  test.done();
};

/*
 * Tests the `maxdepth` option
 */
exports.maxdepth = function (test) {
  var fixture = '/fixtures/max-nested-block-depth-per-function.js';
  var src = fs.readFileSync(__dirname + fixture, 'utf8');

  TestRun(test)
    .addError(5, "Blocks are nested too deeply. (2)")
    .addError(14, "Blocks are nested too deeply. (2)")
    .test(src, { es3: true, maxdepth: 1 });

  TestRun(test)
    .addError(9, "Blocks are nested too deeply. (3)")
    .test(src, { es3: true, maxdepth: 2 });

  TestRun(test)
    .test(src, { es3: true, maxdepth: 3 });

  TestRun(test)
    .test(src, { es3: true });

  test.done();
};

/*
 * Tests the `maxparams` option
 */
exports.maxparams = function (test) {
  var fixture = '/fixtures/max-parameters-per-function.js';
  var src = fs.readFileSync(__dirname + fixture, 'utf8');

  TestRun(test)
    .addError(4, "This function has too many parameters. (3)")
    .addError(10, "This function has too many parameters. (3)")
    .addError(16, "This function has too many parameters. (3)")
    .test(src, { esnext: true, maxparams: 2 });

  TestRun(test)
    .test(src, { esnext: true, maxparams: 3 });

  TestRun(test)
    .addError(4, "This function has too many parameters. (3)")
    .addError(8, "This function has too many parameters. (1)")
    .addError(9, "This function has too many parameters. (1)")
    .addError(10, "This function has too many parameters. (3)")
    .addError(11, "This function has too many parameters. (1)")
    .addError(13, "This function has too many parameters. (2)")
    .addError(16, "This function has too many parameters. (3)")
    .test(src, {esnext: true, maxparams: 0 });

  TestRun(test)
    .test(src, { esnext: true });

  var functions = JSHINT.data().functions;
  test.equal(functions.length, 9);
  test.equal(functions[0].metrics.parameters, 0);
  test.equal(functions[1].metrics.parameters, 3);
  test.equal(functions[2].metrics.parameters, 0);
  test.equal(functions[3].metrics.parameters, 1);
  test.equal(functions[4].metrics.parameters, 1);
  test.equal(functions[5].metrics.parameters, 3);
  test.equal(functions[6].metrics.parameters, 1);
  test.equal(functions[7].metrics.parameters, 2);
  test.equal(functions[8].metrics.parameters, 3);

  test.done();
};

/*
 * Tests the `maxcomplexity` option
 */
exports.maxcomplexity = function (test) {
  var fixture = '/fixtures/max-cyclomatic-complexity-per-function.js';
  var src = fs.readFileSync(__dirname + fixture, 'utf8');

  TestRun(test)
    .addError(8, "This function's cyclomatic complexity is too high. (2)")
    .addError(15, "This function's cyclomatic complexity is too high. (2)")
    .addError(25, "This function's cyclomatic complexity is too high. (2)")
    .addError(47, "This function's cyclomatic complexity is too high. (8)")
    .addError(76, "This function's cyclomatic complexity is too high. (2)")
    .addError(80, "This function's cyclomatic complexity is too high. (2)")
    .test(src, { es3: true, maxcomplexity: 1 });

  TestRun(test)
    .test(src, { es3: true, maxcomplexity: 8 });

  TestRun(test)
    .test(src, { es3: true });

  test.done();
};

// Metrics output per function.
exports.fnmetrics = function (test) {
  JSHINT([
    "function foo(a, b) { if (a) return b; }",
    "function bar() { var a = 0; a += 1; return a; }",
    "function hasTryCatch() { try { } catch(e) { }}",
    "try { throw e; } catch(e) {}"
  ]);

  test.equal(JSHINT.data().functions.length, 3);

  test.deepEqual(JSHINT.data().functions[0].metrics, {
    complexity: 2,
    parameters: 2,
    statements: 1
  });

  test.deepEqual(JSHINT.data().functions[1].metrics, {
    complexity: 1,
    parameters: 0,
    statements: 3
  });

  test.deepEqual(JSHINT.data().functions[2].metrics, {
    complexity: 2,
    parameters: 0,
    statements: 1
  });

  test.done();
};

/*
 * Tests ignored warnings.
 */
exports.ignored = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/ignored.js", "utf-8");

  TestRun(test)
    .addError(4, "A trailing decimal point can be confused with a dot: '12.'.")
    .addError(12, "Missing semicolon.")
    .test(src, { es3: true });

  TestRun(test)
    .addError(12, "Missing semicolon.")
    .test(src, { es3: true, "-W047": true });

  test.done();
};

/*
 * Tests ignored warnings being unignored.
 */
exports.unignored = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/unignored.js", "utf-8");

  TestRun(test)
    .addError(5, "A leading decimal point can be confused with a dot: '.12'.")
    .test(src, { es3: true });

  test.done();
};

/*
 * Tests that the W117 and undef can be toggled per line.
 */
exports['per-line undef / -W117'] = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/ignore-w117.js", "utf-8");

  TestRun(test)
    .addError(5, "'c' is not defined.")
    .addError(11, "'c' is not defined.")
    .addError(15, "'c' is not defined.")
    .test(src, { undef:true });

  test.done();
};

/*
* Tests the `freeze` option -- Warn if native object prototype is assigned to.
*/
exports.freeze = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/nativeobject.js", "utf-8");

  TestRun(test)
    .addError(3, "Extending prototype of native object: 'Array'.")
    .addError(13, "Extending prototype of native object: 'Boolean'.")
    .test(src, { freeze: true, esversion: 6 });

  TestRun(test)
    .test(src, { esversion: 6 });

  test.done();
};

exports.nonbsp = function (test) {
  var src = fs.readFileSync(__dirname + '/fixtures/nbsp.js', 'utf8');

  TestRun(test)
    .test(src, { sub: true });

  TestRun(test)
    .addError(1, "This line contains non-breaking spaces: http://jshint.com/docs/options/#nonbsp")
    .test(src, { nonbsp: true, sub: true });

  test.done();
};

/** Option `nocomma` disallows the use of comma operator. */
exports.nocomma = function (test) {
  // By default allow comma operator
  TestRun(test, "nocomma off by default")
    .test("return 2, 5;", {});

  TestRun(test, "nocomma main case")
    .addError(1, "Unexpected use of a comma operator.")
    .test("return 2, 5;", { nocomma: true });

  TestRun(test, "nocomma in an expression")
    .addError(1, "Unexpected use of a comma operator.")
    .test("(2, 5);", { expr: true, nocomma: true });

  TestRun(test, "avoid nocomma false positives in value literals")
    .test("return { a: 2, b: [1, 2] };", { nocomma: true });

  TestRun(test, "avoid nocomma false positives in for statements")
    .test("for(;;) { return; }", { nocomma: true });

  TestRun(test, "avoid nocomma false positives in function expressions")
    .test("return function(a, b) {};", { nocomma: true });

  TestRun(test, "avoid nocomma false positives in arrow function expressions")
    .test("return (a, b) => a;", { esnext: true, nocomma: true });

  TestRun(test, "avoid nocomma false positives in destructuring arrays")
    .test("var [a, b] = [1, 2];", { esnext: true, nocomma: true });

  TestRun(test, "avoid nocomma false positives in destructuring objects")
    .test("var {a, b} = {a:1, b:2};", { esnext: true, nocomma: true });

  test.done();
};

exports.enforceall = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/enforceall.js", "utf8");

  // Throws errors not normally on be default
  TestRun(test)
    .addError(1, "This line contains non-breaking spaces: http://jshint.com/docs/options/#nonbsp")
    .addError(1, "['key'] is better written in dot notation.")
    .addError(1, "'obj' is not defined.")
    .addError(1, "Missing semicolon.")
    .test(src, { enforceall: true });

  // Can override default hard
  TestRun(test)
    .test(src, { enforceall: true, nonbsp: false, bitwise: false, sub: true, undef: false, unused: false, asi:true });

  test.done();
};

exports.removeglobal = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/removeglobals.js", "utf8");

  TestRun(test)
    .addError(1, "'JSON' is not defined.")
    .test(src, { undef: true, predef: ["-JSON", "myglobal"] });

  test.done();
};

exports.ignoreDelimiters = function (test) {
  var src = fs.readFileSync(__dirname + "/fixtures/ignoreDelimiters.js", "utf8");

  TestRun(test)
    // make sure line/column are still reported properly
    .addError(6, "Missing semicolon.", { character: 37 })
    .test(src, {
      ignoreDelimiters: [
        { start: "<%=", end: "%>" },
        { start: "<%", end: "%>" },
        { start: "<?php", end: "?>" },
        // make sure single tokens are ignored
        { start: "foo" },
        { end: "bar" }
      ]
    });

  test.done();
};

exports.esnextPredefs = function (test) {
  var code = [
    '/* global alert: true */',
    'var mySym = Symbol("name");',
    'var myBadSym = new Symbol("name");',
    'alert(Reflect);'
  ];

  TestRun(test)
    .addError(3, "Do not use Symbol as a constructor.")
    .test(code, { esnext: true, undef: true });

  test.done();
};

var singleGroups = exports.singleGroups = {};

singleGroups.loneIdentifier = function (test) {
  var code = [
    "if ((a)) {}",
    "if ((a) + b + c) {}",
    "if (a + (b) + c) {}",
    "if (a + b + (c)) {}",
  ];

  TestRun(test)
    .addError(1, "Unnecessary grouping operator.")
    .addError(2, "Unnecessary grouping operator.")
    .addError(3, "Unnecessary grouping operator.")
    .addError(4, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.neighborless = function (test) {
  var code = [
    "if ((a instanceof b)) {}",
    "if ((a in b)) {}",
    "if ((a + b)) {}"
  ];

  TestRun(test)
    .addError(1, "Unnecessary grouping operator.")
    .addError(2, "Unnecessary grouping operator.")
    .addError(3, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.bindingPower = {};

singleGroups.bindingPower.singleExpr = function (test) {
  var code = [
    "var a = !(a instanceof b);",
    "var b = !(a in b);",
    "var c = !!(a && a.b);",
    "var d = (1 - 2) * 3;",
    "var e = 3 * (1 - 2);",
    "var f = a && (b || c);",
    "var g = ~(a * b);",
    "var h = void (a || b);",
    "var i = 2 * (3 - 4 - 5) * 6;",
    "var j = (a = 1) + 2;",
    "var j = (a += 1) / 2;",
    "var k = 'foo' + ('bar' ? 'baz' : 'qux');",
    "var l = 1 + (0 || 3);",
    "var u = a / (b * c);",
    "var v = a % (b / c);",
    "var w = a * (b * c);",
    "var x = z === (b === c);",
    "x = typeof (a + b);",
    // Invalid forms:
    "var j = 2 * ((3 - 4) - 5) * 6;",
    "var l = 2 * ((3 - 4 - 5)) * 6;",
    "var m = typeof(a.b);",
    "var n = 1 - (2 * 3);",
    "var o = (3 * 1) - 2;",
    "var p = ~(Math.abs(a));",
    "var q = -(a[b]);",
    "var r = +(a.b);",
    "var s = --(a.b);",
    "var t = ++(a[b]);",
    "if (a in c || (b in c)) {}",
    "if ((a in c) || b in c) {}",
    "if ((a in c) || (b in c)) {}",
    "if ((a * b) * c) {}",
    "if (a + (b * c)) {}",
    "(a ? a : (a=[])).push(b);",
    "if (a || (1 / 0 == 1 / 0)) {}",
  ];

  TestRun(test)
    .addError(19, "Unnecessary grouping operator.")
    .addError(20, "Unnecessary grouping operator.")
    .addError(21, "Unnecessary grouping operator.")
    .addError(22, "Unnecessary grouping operator.")
    .addError(23, "Unnecessary grouping operator.")
    .addError(24, "Unnecessary grouping operator.")
    .addError(25, "Unnecessary grouping operator.")
    .addError(26, "Unnecessary grouping operator.")
    .addError(27, "Unnecessary grouping operator.")
    .addError(28, "Unnecessary grouping operator.")
    .addError(29, "Unnecessary grouping operator.")
    .addError(30, "Unnecessary grouping operator.")
    .addError(31, "Unnecessary grouping operator.")
    .addError(32, "Unnecessary grouping operator.")
    .addError(33, "Unnecessary grouping operator.")
    .addError(34, "Unnecessary grouping operator.")
    .addError(35, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  code = [
    "var x;",
    "x = (printA || printB)``;",
    "x = (printA || printB)`${}`;",
    "x = (new X)``;",
    "x = (new X)`${}`;",
    // Should warn:
    "x = (x.y)``;",
    "x = (x.y)`${}`;",
    "x = (x[x])``;",
    "x = (x[x])`${}`;",
    "x = (x())``;",
    "x = (x())`${}`;"
  ];

  TestRun(test)
    .addError(6, "Unnecessary grouping operator.")
    .addError(7, "Unnecessary grouping operator.")
    .addError(8, "Unnecessary grouping operator.")
    .addError(9, "Unnecessary grouping operator.")
    .addError(10, "Unnecessary grouping operator.")
    .addError(11, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true, esversion: 6, supernew: true });

  test.done();
};

singleGroups.bindingPower.multiExpr = function (test) {
  var code = [
    "var j = (a, b);",
    "var k = -(a, b);",
    "var i = (1, a = 1) + 2;",
    "var k = a ? (b, c) : (d, e);",
    "var j = (a, b + c) * d;",
    "if (a, (b * c)) {}",
    "if ((a * b), c) {}",
    "if ((a, b, c)) {}",
    "if ((a + 1)) {}"
  ];

  TestRun(test)
    .addError(6, "Unnecessary grouping operator.")
    .addError(7, "Unnecessary grouping operator.")
    .addError(8, "Unnecessary grouping operator.")
    .addError(9, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.multiExpr = function (test) {
  var code = [
    "var a = (1, 2);",
    "var b = (true, false) ? 1 : 2;",
    "var c = true ? (1, 2) : false;",
    "var d = true ? false : (1, 2);",
    "foo((1, 2));"
  ];

  TestRun(test)
    .test(code, { singleGroups: true });

  test.done();
};

// Although the following form is redundant in purely mathematical terms, type
// coercion semantics in JavaScript make it impossible to statically determine
// whether the grouping operator is necessary. JSHint should err on the side of
// caution and allow this form.
singleGroups.concatenation = function (test) {
  var code = [
    "var a = b + (c + d);",
    "var e = (f + g) + h;"
  ];

  TestRun(test)
    .addError(2, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.functionExpression = function (test) {
  var code = [
    "(function() {})();",
    "(function() {}).call();",
    "(function() {}());",
    "(function() {}.call());",
    "if (true) {} (function() {}());",
    "(function() {}());",
    // These usages are not technically necessary, but parenthesis are commonly
    // used to signal that a function expression is going to be invoked
    // immediately.
    "var a = (function() {})();",
    "var b = (function() {}).call();",
    "var c = (function() {}());",
    "var d = (function() {}.call());",
    "var e = { e: (function() {})() };",
    "var f = { f: (function() {}).call() };",
    "var g = { g: (function() {}()) };",
    "var h = { h: (function() {}.call()) };",
    "if ((function() {})()) {}",
    "if ((function() {}).call()) {}",
    "if ((function() {}())) {}",
    "if ((function() {}.call())) {}",
    // Invalid forms:
    "var i = (function() {});"
  ];

  TestRun(test)
    .addError(19, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true, asi: true });

  test.done();
};

singleGroups.generatorExpression = function (test) {
  var code = [
    "(function*() { yield; })();",
    "(function*() { yield; }).call();",
    "(function*() { yield; }());",
    "(function*() { yield; }.call());",
    "if (true) {} (function*() { yield; }());",
    "(function*() { yield; }());",
    // These usages are not technically necessary, but parenthesis are commonly
    // used to signal that a function expression is going to be invoked
    // immediately.
    "var a = (function*() { yield; })();",
    "var b = (function*() { yield; }).call();",
    "var c = (function*() { yield; }());",
    "var d = (function*() { yield; }.call());",
    "var e = { e: (function*() { yield; })() };",
    "var f = { f: (function*() { yield; }).call() };",
    "var g = { g: (function*() { yield; }()) };",
    "var h = { h: (function*() { yield; }.call()) };",
    "if ((function*() { yield; })()) {}",
    "if ((function*() { yield; }).call()) {}",
    "if ((function*() { yield; }())) {}",
    "if ((function*() { yield; }.call())) {}",
    // Invalid forms:
    "var i = (function*() { yield; });"
  ];

  TestRun(test)
    .addError(19, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true, asi: true, esnext: true });

  test.done();
};

singleGroups.yield = function (test) {
  TestRun(test, "otherwise-invalid position")
    .test([
      "function* g() {",
      "  var x;",
      "  x = 0 || (yield);",
      "  x = 0 || (yield 0);",
      "  x = 0 && (yield);",
      "  x = 0 && (yield 0);",
      "  x = !(yield);",
      "  x = !(yield 0);",
      "  x = !!(yield);",
      "  x = !!(yield 0);",
      "  x = 0 + (yield);",
      "  x = 0 + (yield 0);",
      "  x = 0 - (yield);",
      "  x = 0 - (yield 0);",
      "}"
    ], { singleGroups: true, esversion: 6 });

  TestRun(test, "operand delineation")
    .test([
      "function* g() {",
      "  (yield).x = 0;",
      "  x = (yield) ? 0 : 0;",
      "  x = (yield 0) ? 0 : 0;",
      "  x = (yield) / 0;",
      "}"
    ], { singleGroups: true, esversion: 6 });

  TestRun(test)
    .addError(2, "Unnecessary grouping operator.")
    .addError(3, "Unnecessary grouping operator.")
    .addError(4, "Unnecessary grouping operator.")
    .addError(5, "Unnecessary grouping operator.")
    .addError(6, "Unnecessary grouping operator.")
    .addError(7, "Unnecessary grouping operator.")
    .addError(8, "Unnecessary grouping operator.")
    .addError(9, "Unnecessary grouping operator.")
    .addError(10, "Unnecessary grouping operator.")
    .addError(11, "Unnecessary grouping operator.")
    .addError(12, "Unnecessary grouping operator.")
    .addError(13, "Unnecessary grouping operator.")
    .addError(14, "Unnecessary grouping operator.")
    .addError(15, "Unnecessary grouping operator.")
    .addError(16, "Unnecessary grouping operator.")
    .addError(17, "Unnecessary grouping operator.")
    .addError(18, "Unnecessary grouping operator.")
    .addError(19, "Unnecessary grouping operator.")
    .addError(20, "Unnecessary grouping operator.")
    .addError(21, "Unnecessary grouping operator.")
    .addError(22, "Unnecessary grouping operator.")
    .addError(23, "Unnecessary grouping operator.")
    .addError(24, "Unnecessary grouping operator.")
    .addError(25, "Unnecessary grouping operator.")
    .addError(26, "Unnecessary grouping operator.")
    .addError(27, "Unnecessary grouping operator.")
    .addError(28, "Unnecessary grouping operator.")
    .addError(29, "Unnecessary grouping operator.")
    .addError(30, "Unnecessary grouping operator.")
    .addError(31, "Unnecessary grouping operator.")
    .addError(32, "Unnecessary grouping operator.")
    .addError(33, "Unnecessary grouping operator.")
    .addError(34, "Unnecessary grouping operator.")
    .test([
      "function* g() {",
      "  (yield);",
      "  (yield 0);",
      "  var x = (yield);",
      "  var y = (yield 0);",
      "  x = (yield);",
      "  x = (yield 0);",
      "  x += (yield);",
      "  x += (yield 0);",
      "  x -= (yield);",
      "  x -= (yield 0);",
      "  x *= (yield);",
      "  x *= (yield 0);",
      "  x /= (yield);",
      "  x /= (yield 0);",
      "  x %= (yield);",
      "  x %= (yield 0);",
      "  x <<= (yield 0);",
      "  x <<= (yield);",
      "  x >>= (yield);",
      "  x >>= (yield 0);",
      "  x >>>= (yield);",
      "  x >>>= (yield 0);",
      "  x &= (yield);",
      "  x &= (yield 0);",
      "  x ^= (yield);",
      "  x ^= (yield 0);",
      "  x |= (yield);",
      "  x |= (yield 0);",
      "  x = 0 ? (yield) : 0;",
      "  x = 0 ? (yield 0) : 0;",
      "  x = 0 ? 0 : (yield);",
      "  x = 0 ? 0 : (yield 0);",
      "  yield (yield);",
      "}"
    ], { singleGroups: true, esversion: 6 });

  test.done();
};

singleGroups.arrowFunctions = function (test) {
  var code = [
    "var a = () => ({});",
    "var b = (c) => {};",
    "var g = (() => 3)();",
    "var h = (() => ({}))();",
    "var i = (() => 3).length;",
    "var j = (() => ({})).length;",
    "var k = (() => 3)[prop];",
    "var l = (() => ({}))[prop];",
    "var m = (() => 3) || 3;",
    "var n = (() => ({})) || 3;",
    "var o = (() => {})();",
    "var p = (() => {})[prop];",
    "var q = (() => {}) || 3;",
    "(() => {})();",
    // Invalid forms:
    "var d = () => (e);",
    "var f = () => (3);",
    "var r = (() => 3);",
    "var s = (() => {});"
  ];

  TestRun(test)
    .addError(15, "Unnecessary grouping operator.")
    .addError(16, "Unnecessary grouping operator.")
    .addError(17, "Unnecessary grouping operator.")
    .addError(18, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true, esnext: true });

  test.done();
};

singleGroups.objectLiterals = function (test) {
  var code = [
    "({}).method();",
    "if(true) {} ({}).method();",
    "g(); ({}).method();",

    // Invalid forms
    "var a = ({}).method();",
    "if (({}).method()) {}",
    "var b = { a: ({}).method() };"
  ];

  TestRun(test, "grouping operator not required")
    .addError(4, "Unnecessary grouping operator.")
    .addError(5, "Unnecessary grouping operator.")
    .addError(6, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.newLine = function(test) {
  var code = [
    "function x() {",
    "  return f",
    "    ();",
    "}",
    "x({ f: null });"
  ];

  TestRun(test)
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.lineNumber = function (test) {
  var code = [
    "var x = (",
    "  1",
    ")",
    ";"
  ];

  TestRun(test)
    .addError(1, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.unary = function (test) {
  var code = [
    "(-3).toString();",
    "(+3)[methodName]();",
    "(!3).toString();",
    "(~3).toString();",
    "(typeof x).toString();",
    "(new x).method();",

    // Unnecessary:
    "x = (-3) + 5;",
    "x = (+3) - 5;",
    "x = (!3) / 5;",
    "x = (~3) << 5;",
    "x = (typeof x) === 'undefined';",
    "x = (new x) + 4;",
  ];

  TestRun(test)
    .addError(6, "Missing '()' invoking a constructor.")
    .addError(7, "Unnecessary grouping operator.")
    .addError(8, "Unnecessary grouping operator.")
    .addError(9, "Unnecessary grouping operator.")
    .addError(10, "Unnecessary grouping operator.")
    .addError(11, "Unnecessary grouping operator.")
    .addError(12, "Unnecessary grouping operator.")
    .addError(12, "Missing '()' invoking a constructor.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.numberLiterals = function (test) {
  var code = [
    "(3).toString();",
    "(3.1).toString();",
    "(.3).toString();",
    "(3.).toString();",
    "(1e3).toString();",
    "(1e-3).toString();",
    "(1.1e3).toString();",
    "(1.1e-3).toString();",
    "(3)[methodName]();",
    "var x = (3) + 3;",
    "('3').toString();"
  ];

  TestRun(test)
    .addError(2, "Unnecessary grouping operator.")
    .addError(3, "Unnecessary grouping operator.")
    .addError(3, "A leading decimal point can be confused with a dot: '.3'.")
    .addError(4, "Unnecessary grouping operator.")
    .addError(4, "A trailing decimal point can be confused with a dot: '3.'.")
    .addError(5, "Unnecessary grouping operator.")
    .addError(6, "Unnecessary grouping operator.")
    .addError(7, "Unnecessary grouping operator.")
    .addError(8, "Unnecessary grouping operator.")
    .addError(9, "Unnecessary grouping operator.")
    .addError(10, "Unnecessary grouping operator.")
    .addError(11, "Unnecessary grouping operator.")
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.postfix = function (test) {
  var code = [
    "var x;",
    "(x++).toString();",
    "(x--).toString();"
  ];

  TestRun(test)
    .test(code, { singleGroups: true });

  test.done();
};

singleGroups.destructuringAssign = function (test) {

  var code = [
    // statements
    "({ x } = { x : 1 });",
    "([ x ] = [ 1 ]);",
    // expressions
    "1, ({ x } = { x : 1 });",
    "1, ([ x ] = [ 1 ]);"
  ];

  TestRun(test)
    .addError(2, "Unnecessary grouping operator.")
    .addError(3, "Unnecessary grouping operator.")
    .addError(4, "Unnecessary grouping operator.")
    .test(code, { esversion: 6, singleGroups: true, expr: true });

  test.done();
};

exports.elision = function (test) {
  var code = [
    "var a = [1,,2];",
    "var b = [1,,,,2];",
    "var c = [1,2,];",
    "var d = [,1,2];",
    "var e = [,,1,2];",
  ];

  TestRun(test, "elision=false ES5")
    .addError(1, "Empty array elements require elision=true.")
    .addError(2, "Empty array elements require elision=true.")
    .addError(4, "Empty array elements require elision=true.")
    .addError(5, "Empty array elements require elision=true.")
    .test(code, { elision: false, es3: false });

  TestRun(test, "elision=false ES3")
    .addError(1, "Extra comma. (it breaks older versions of IE)")
    .addError(2, "Extra comma. (it breaks older versions of IE)")
    .addError(2, "Extra comma. (it breaks older versions of IE)")
    .addError(2, "Extra comma. (it breaks older versions of IE)")
    .addError(3, "Extra comma. (it breaks older versions of IE)")
    .addError(4, "Extra comma. (it breaks older versions of IE)")
    .addError(5, "Extra comma. (it breaks older versions of IE)")
    .addError(5, "Extra comma. (it breaks older versions of IE)")
    .test(code, { elision: false, es3: true });

  TestRun(test, "elision=true ES5")
    .test(code, { elision: true, es3: false });

  TestRun(test, "elision=true ES3")
    .addError(3, "Extra comma. (it breaks older versions of IE)")
    .test(code, { elision: true, es3: true });

  test.done();
};

exports.badInlineOptionValue = function (test) {
  var src = [ "/* jshint bitwise:batcrazy */" ];

  TestRun(test)
    .addError(1, "Bad option value.")
    .test(src);

  test.done();
};

exports.futureHostile = function (test) {
  var code = [
    "var JSON = {};",
    "var Map = function() {};",
    "var Promise = function() {};",
    "var Proxy = function() {};",
    "var Reflect = function() {};",
    "var Set = function() {};",
    "var Symbol = function() {};",
    "var WeakMap = function() {};",
    "var WeakSet = function() {};",
    "var ArrayBuffer = function() {};",
    "var DataView = function() {};",
    "var Int8Array = function() {};",
    "var Int16Array = function() {};",
    "var Int32Array = function() {};",
    "var Uint8Array = function() {};",
    "var Uint16Array = function() {};",
    "var Uint32Array = function() {};",
    "var Uint8ClampledArray = function() {};",
    "var Float32Array = function() {};",
    "var Float64Array = function() {};"
  ];

  TestRun(test, "ES3 without option")
    .addError(1, "'JSON' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(2, "'Map' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(3, "'Promise' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(4, "'Proxy' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(5, "'Reflect' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(6, "'Set' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(7, "'Symbol' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(8, "'WeakMap' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(9, "'WeakSet' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(10, "'ArrayBuffer' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(11, "'DataView' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(12, "'Int8Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(13, "'Int16Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(14, "'Int32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(15, "'Uint8Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(16, "'Uint16Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(17, "'Uint32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(18, "'Uint8ClampledArray' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(19, "'Float32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(20, "'Float64Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .test(code, { es3: true, es5: false, futurehostile: false });

  TestRun(test, "ES3 with option")
    .test(code, { es3: true, es5: false });

  TestRun(test, "ES5 without option")
    .addError(1, "Redefinition of 'JSON'.")
    .addError(2, "'Map' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(3, "'Promise' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(4, "'Proxy' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(5, "'Reflect' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(6, "'Set' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(7, "'Symbol' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(8, "'WeakMap' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(9, "'WeakSet' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(10, "'ArrayBuffer' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(11, "'DataView' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(12, "'Int8Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(13, "'Int16Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(14, "'Int32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(15, "'Uint8Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(16, "'Uint16Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(17, "'Uint32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(18, "'Uint8ClampledArray' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(19, "'Float32Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .addError(20, "'Float64Array' is defined in a future version of JavaScript. Use a different variable name to avoid migration issues.")
    .test(code, { futurehostile: false });

  TestRun(test, "ES5 with option")
    .addError(1, "Redefinition of 'JSON'.")
    .test(code, {});

  TestRun(test, "ES5 with opt-out")
    .test(code, {
      predef: ["-JSON"]
    });

  TestRun(test, "ESNext without option")
    .addError(1, "Redefinition of 'JSON'.")
    .addError(2, "Redefinition of 'Map'.")
    .addError(3, "Redefinition of 'Promise'.")
    .addError(4, "Redefinition of 'Proxy'.")
    .addError(5, "Redefinition of 'Reflect'.")
    .addError(6, "Redefinition of 'Set'.")
    .addError(7, "Redefinition of 'Symbol'.")
    .addError(8, "Redefinition of 'WeakMap'.")
    .addError(9, "Redefinition of 'WeakSet'.")
    .addError(10, "Redefinition of 'ArrayBuffer'.")
    .addError(11, "Redefinition of 'DataView'.")
    .addError(12, "Redefinition of 'Int8Array'.")
    .addError(13, "Redefinition of 'Int16Array'.")
    .addError(14, "Redefinition of 'Int32Array'.")
    .addError(15, "Redefinition of 'Uint8Array'.")
    .addError(16, "Redefinition of 'Uint16Array'.")
    .addError(17, "Redefinition of 'Uint32Array'.")
    .addError(18, "Redefinition of 'Uint8ClampledArray'.")
    .addError(19, "Redefinition of 'Float32Array'.")
    .addError(20, "Redefinition of 'Float64Array'.")
    .test(code, { esnext: true, futurehostile: false });

  TestRun(test, "ESNext with option")
    .addError(1, "Redefinition of 'JSON'.")
    .addError(2, "Redefinition of 'Map'.")
    .addError(3, "Redefinition of 'Promise'.")
    .addError(4, "Redefinition of 'Proxy'.")
    .addError(5, "Redefinition of 'Reflect'.")
    .addError(6, "Redefinition of 'Set'.")
    .addError(7, "Redefinition of 'Symbol'.")
    .addError(8, "Redefinition of 'WeakMap'.")
    .addError(9, "Redefinition of 'WeakSet'.")
    .addError(10, "Redefinition of 'ArrayBuffer'.")
    .addError(11, "Redefinition of 'DataView'.")
    .addError(12, "Redefinition of 'Int8Array'.")
    .addError(13, "Redefinition of 'Int16Array'.")
    .addError(14, "Redefinition of 'Int32Array'.")
    .addError(15, "Redefinition of 'Uint8Array'.")
    .addError(16, "Redefinition of 'Uint16Array'.")
    .addError(17, "Redefinition of 'Uint32Array'.")
    .addError(18, "Redefinition of 'Uint8ClampledArray'.")
    .addError(19, "Redefinition of 'Float32Array'.")
    .addError(20, "Redefinition of 'Float64Array'.")
    .test(code, { esnext: true });

  TestRun(test, "ESNext with opt-out")
    .test(code, {
      esnext: true,
      futurehostile: false,
      predef: [
        "-JSON",
        "-Map",
        "-Promise",
        "-Proxy",
        "-Reflect",
        "-Set",
        "-Symbol",
        "-WeakMap",
        "-WeakSet",
        "-ArrayBuffer",
        "-DataView",
        "-Int8Array",
        "-Int16Array",
        "-Int32Array",
        "-Uint8Array",
        "-Uint16Array",
        "-Uint32Array",
        "-Uint8ClampledArray",
        "-Float32Array",
        "-Float64Array"
      ]
    });

  code = [
    "let JSON = {};",
    "let Map = function() {};",
    "let Promise = function() {};",
    "let Proxy = function() {};",
    "let Reflect = function() {};",
    "let Set = function() {};",
    "let Symbol = function() {};",
    "let WeakMap = function() {};",
    "let WeakSet = function() {};",
    "let ArrayBuffer = function() {};",
    "let DataView = function() {};",
    "let Int8Array = function() {};",
    "let Int16Array = function() {};",
    "let Int32Array = function() {};",
    "let Uint8Array = function() {};",
    "let Uint16Array = function() {};",
    "let Uint32Array = function() {};",
    "let Uint8ClampledArray = function() {};",
    "let Float32Array = function() {};",
    "let Float64Array = function() {};"
  ];

  TestRun(test, "ESNext with option")
    .addError(1, "Redefinition of 'JSON'.")
    .addError(2, "Redefinition of 'Map'.")
    .addError(3, "Redefinition of 'Promise'.")
    .addError(4, "Redefinition of 'Proxy'.")
    .addError(5, "Redefinition of 'Reflect'.")
    .addError(6, "Redefinition of 'Set'.")
    .addError(7, "Redefinition of 'Symbol'.")
    .addError(8, "Redefinition of 'WeakMap'.")
    .addError(9, "Redefinition of 'WeakSet'.")
    .addError(10, "Redefinition of 'ArrayBuffer'.")
    .addError(11, "Redefinition of 'DataView'.")
    .addError(12, "Redefinition of 'Int8Array'.")
    .addError(13, "Redefinition of 'Int16Array'.")
    .addError(14, "Redefinition of 'Int32Array'.")
    .addError(15, "Redefinition of 'Uint8Array'.")
    .addError(16, "Redefinition of 'Uint16Array'.")
    .addError(17, "Redefinition of 'Uint32Array'.")
    .addError(18, "Redefinition of 'Uint8ClampledArray'.")
    .addError(19, "Redefinition of 'Float32Array'.")
    .addError(20, "Redefinition of 'Float64Array'.")
    .test(code, { esnext: true });

  TestRun(test, "ESNext with opt-out")
    .test(code, {
      esnext: true,
      futurehostile: false,
      predef: [
        "-JSON",
        "-Map",
        "-Promise",
        "-Proxy",
        "-Reflect",
        "-Set",
        "-Symbol",
        "-WeakMap",
        "-WeakSet",
        "-ArrayBuffer",
        "-DataView",
        "-Int8Array",
        "-Int16Array",
        "-Int32Array",
        "-Uint8Array",
        "-Uint16Array",
        "-Uint32Array",
        "-Uint8ClampledArray",
        "-Float32Array",
        "-Float64Array"
      ]
    });

  code = [
    "const JSON = {};",
    "const Map = function() {};",
    "const Promise = function() {};",
    "const Proxy = function() {};",
    "const Reflect = function() {};",
    "const Set = function() {};",
    "const Symbol = function() {};",
    "const WeakMap = function() {};",
    "const WeakSet = function() {};",
    "const ArrayBuffer = function() {};",
    "const DataView = function() {};",
    "const Int8Array = function() {};",
    "const Int16Array = function() {};",
    "const Int32Array = function() {};",
    "const Uint8Array = function() {};",
    "const Uint16Array = function() {};",
    "const Uint32Array = function() {};",
    "const Uint8ClampledArray = function() {};",
    "const Float32Array = function() {};",
    "const Float64Array = function() {};"
  ];

  TestRun(test, "ESNext with option")
    .addError(1, "Redefinition of 'JSON'.")
    .addError(2, "Redefinition of 'Map'.")
    .addError(3, "Redefinition of 'Promise'.")
    .addError(4, "Redefinition of 'Proxy'.")
    .addError(5, "Redefinition of 'Reflect'.")
    .addError(6, "Redefinition of 'Set'.")
    .addError(7, "Redefinition of 'Symbol'.")
    .addError(8, "Redefinition of 'WeakMap'.")
    .addError(9, "Redefinition of 'WeakSet'.")
    .addError(10, "Redefinition of 'ArrayBuffer'.")
    .addError(11, "Redefinition of 'DataView'.")
    .addError(12, "Redefinition of 'Int8Array'.")
    .addError(13, "Redefinition of 'Int16Array'.")
    .addError(14, "Redefinition of 'Int32Array'.")
    .addError(15, "Redefinition of 'Uint8Array'.")
    .addError(16, "Redefinition of 'Uint16Array'.")
    .addError(17, "Redefinition of 'Uint32Array'.")
    .addError(18, "Redefinition of 'Uint8ClampledArray'.")
    .addError(19, "Redefinition of 'Float32Array'.")
    .addError(20, "Redefinition of 'Float64Array'.")
    .test(code, { esnext: true });

  TestRun(test, "ESNext with opt-out")
    .test(code, {
      esnext: true,
      futurehostile: false,
      predef: [
        "-JSON",
        "-Map",
        "-Promise",
        "-Proxy",
        "-Reflect",
        "-Set",
        "-Symbol",
        "-WeakMap",
        "-WeakSet",
        "-ArrayBuffer",
        "-DataView",
        "-Int8Array",
        "-Int16Array",
        "-Int32Array",
        "-Uint8Array",
        "-Uint16Array",
        "-Uint32Array",
        "-Uint8ClampledArray",
        "-Float32Array",
        "-Float64Array"
      ]
    });

  test.done();
};


exports.varstmt = function (test) {
  var code = [
    "var x;",
    "var y = 5;",
    "var fn = function() {",
    "  var x;",
    "  var y = 5;",
    "};",
    "for (var a in x);"
  ];

  TestRun(test)
    .addError(1, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .addError(2, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .addError(3, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .addError(4, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .addError(5, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .addError(7, "`var` declarations are forbidden. Use `let` or `const` instead.")
    .test(code, { varstmt: true });

  test.done();
};

exports.module = {};
exports.module.behavior = function(test) {
  var code = [
    "var package = 3;",
    "function f() { return this; }"
  ];

  TestRun(test)
    .test(code, {});

  TestRun(test)
    .addError(0, "The 'module' option is only available when linting ECMAScript 6 code.")
    .addError(1, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(2, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(code, { module: true });

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(2, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(code, { module: true, esnext: true });

  code = [
    "/* jshint module: true */",
    "var package = 3;",
    "function f() { return this; }"
  ];

  TestRun(test)
    .addError(1, "The 'module' option is only available when linting ECMAScript 6 code.")
    .addError(2, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(3, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(code);

  code[0] = "/* jshint module: true, esnext: true */";

  TestRun(test)
    .addError(2, "Expected an identifier and instead saw 'package' (a reserved word).")
    .addError(3, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(code);

  test.done();
};

exports.module.declarationRestrictions = function( test ) {
  TestRun(test)
    .addError(2, "The 'module' option cannot be set after any executable code.")
    .test([
      "(function() {",
      "  /* jshint module: true */",
      "})();"
    ], { esnext: true });

  TestRun(test)
    .addError(2, "The 'module' option cannot be set after any executable code.")
    .test([
      "void 0;",
      "/* jshint module: true */"
    ], { esnext: true });

  TestRun(test)
    .addError(3, "The 'module' option cannot be set after any executable code.")
    .test([
      "void 0;",
      "// hide",
      "/* jshint module: true */"
    ], { esnext: true });

  TestRun(test, "First line (following statement)")
    .addError(1, "The 'module' option cannot be set after any executable code.")
    .test([
      "(function() {})(); /* jshint module: true */"
    ], { esnext: true });

  TestRun(test, "First line (within statement)")
    .addError(1, "The 'module' option cannot be set after any executable code.")
    .test([
      "(function() { /* jshint module: true */",
      "})();"
    ], { esnext: true });

  TestRun(test, "First line (before statement)")
    .test([
      "/* jshint module: true */ (function() {",
      "})();"
    ], { esnext: true });

  TestRun(test, "First line (within expression)")
    .addError(1, "The 'module' option cannot be set after any executable code.")
    .test("Math.abs(/*jshint module: true */4);", { esnext: true });

  TestRun(test, "Following single-line comment")
    .test([
      "// License boilerplate",
      "/* jshint module: true */"
    ], { esnext: true });

  TestRun(test, "Following multi-line comment")
    .test([
      "/**",
      " * License boilerplate",
      " */",
      "  /* jshint module: true */"
    ], { esnext: true });

  TestRun(test, "Following shebang")
    .test([
      "#!/usr/bin/env node",
      "/* jshint module: true */"
    ], { esnext: true });

  TestRun(test, "Not re-applied with every directive (gh-2560)")
    .test([
      "/* jshint module:true */",
      "function bar() {",
      "  /* jshint validthis:true */",
      "}"
    ], { esnext: true });

  test.done();
};

exports.module.newcap = function(test) {
  var code = [
    "var ctor = function() {};",
    "var Ctor = function() {};",
    "var c1 = new ctor();",
    "var c2 = Ctor();"
  ];

  TestRun(test, "The `newcap` option is not automatically enabled for module code.")
    .test(code, { esversion: 6, module: true });

  test.done();
};

exports.module.await = function(test) {
  var allPositions = [
    "var await;",
    "function await() {}",
    "await: while (false) {}",
    "void { await: null };",
    "void {}.await;"
  ];

  TestRun(test)
    .test(allPositions, { esversion: 3 });
  TestRun(test)
    .test(allPositions);
  TestRun(test)
    .test(allPositions, { esversion: 6 });

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'await' (a reserved word).")
    .test("var await;", { esversion: 6, module: true });

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'await' (a reserved word).")
    .test("function await() {}", { esversion: 6, module: true });

  TestRun(test)
    .addError(1, "Expected an identifier and instead saw 'await' (a reserved word).")
    .test("await: while (false) {}", { esversion: 6, module: true });

  TestRun(test)
    .test([
      "void { await: null };",
      "void {}.await;"
    ], { esversion: 6, module: true });

  test.done();
};

exports.esversion = function(test) {
  var code = [
    "// jshint esversion: 3",
    "// jshint esversion: 4",
    "// jshint esversion: 5",
    "// jshint esversion: 6",
    "// jshint esversion: 2015"
  ];

  TestRun(test, "Value")
    .addError(2, "Bad option value.")
    .test(code);

  var es5code = [
    "var a = {",
    "  get b() {}",
    "};"
  ];

  TestRun(test, "ES5 syntax as ES3")
    .addError(2, "get/set are ES5 features.")
    .test(es5code, { esversion: 3 });

  TestRun(test, "ES5 syntax as ES5")
    .test(es5code); // esversion: 5 (default)

  TestRun(test, "ES5 syntax as ES6")
    .test(es5code, { esversion: 6 });

  var es6code = [
    "var a = {",
    "  ['b']: 1",
    "};"
  ];

  TestRun(test, "ES6 syntax as ES3")
    .addError(2, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .test(es6code, { esversion: 3 });

  TestRun(test, "ES6 syntax as ES5")
    .addError(2, "'computed property names' is only available in ES6 (use 'esversion: 6').")
    .test(es6code); // esversion: 5 (default)

  TestRun(test, "ES6 syntax as ES6")
    .test(es6code, { esversion: 6 });

  // Array comprehensions aren't defined in ECMAScript 6,
  // but they can be enabled using the `esnext` option
  var arrayComprehension = [
    "var a = [ 1, 2, 3 ];",
    "var b = [ for (i of a) i ];"
  ];

  TestRun(test, "array comprehensions - esversion: 6")
    .addError(2, "'array comprehension' is only available in Mozilla JavaScript extensions " +
                 "(use moz option).")
    .test(arrayComprehension, { esversion: 6 });

  TestRun(test, "array comprehensions - esnext: true")
    .test(arrayComprehension, { esnext: true });


  TestRun(test, "incompatibility with `es3`") // TODO: Remove in JSHint 3
    .addError(0, "Incompatible values for the 'esversion' and 'es3' linting options. (0% scanned).")
    .test(es6code, { esversion: 6, es3: true });

  TestRun(test, "incompatibility with `es5`") // TODO: Remove in JSHint 3
    .addError(0, "Incompatible values for the 'esversion' and 'es5' linting options. (0% scanned).")
    .test(es6code, { esversion: 6, es5: true });

  TestRun(test, "incompatibility with `esnext`") // TODO: Remove in JSHint 3
    .addError(0, "Incompatible values for the 'esversion' and 'esnext' linting options. (0% scanned).")
    .test(es6code, { esversion: 3, esnext: true });

  TestRun(test, "imcompatible option specified in-line")
    .addError(2, "Incompatible values for the 'esversion' and 'es3' linting options. (66% scanned).")
    .test(["", "// jshint esversion: 3", ""], { es3: true });

  TestRun(test, "incompatible option specified in-line")
    .addError(2, "Incompatible values for the 'esversion' and 'es3' linting options. (66% scanned).")
    .test(["", "// jshint es3: true", ""], { esversion: 3 });

  TestRun(test, "compatible option specified in-line")
    .addError(3, "'class' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(["", "// jshint esversion: 3", "class A {}"], { esversion: 3 });

  TestRun(test, "compatible option specified in-line")
    .addError(3, "'class' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).")
    .test(["", "// jshint esversion: 3", "class A {}"], { esversion: 6 });

  TestRun(test, "compatible option specified in-line")
    .test(["", "// jshint esversion: 6", "class A {}"], { esversion: 3 });

  var code2 = [ // TODO: Remove in JSHint 3
    "/* jshint esversion: 3, esnext: true */"
  ].concat(es6code);

  TestRun(test, "incompatible options specified in-line") // TODO: Remove in JSHint 3
    .addError(1, "Incompatible values for the 'esversion' and 'esnext' linting options. (25% scanned).")
    .test(code2);

  var code3 = [
    "var someCode;",
    "// jshint esversion: 3"
  ];

  TestRun(test, "cannot be set after any executable code")
    .addError(2, "The 'esversion' option cannot be set after any executable code.")
    .test(code3);

  var code4 = [
    "#!/usr/bin/env node",
    "/**",
    " * License",
    " */",
    "// jshint esversion: 3",
    "// jshint esversion: 6"
  ];

  TestRun(test, "can follow shebang or comments")
    .test(code4);

  var code5 = [
    "// jshint moz: true",
    "// jshint esversion: 3",
    "var x = {",
    "  get a() {}",
    "};",
    "// jshint moz: true",
    "var x = {",
    "  get a() {}",
    "};"
  ];

  TestRun(test, "correctly swap between moz and esversion")
    .addError(4, "get/set are ES5 features.")
    .test(code5);


  test.done();
};
