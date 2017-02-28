"use strict";

var fs = require('fs');
var TestRun = require("../helpers/testhelper").setup.testRun;

exports["Backbone.js 0.5.3"] = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/backbone.js', 'utf8');

  TestRun(test)
    .addError(32, "Unnecessary grouping operator.")
    .addError(784, "Unnecessary grouping operator.")
    .addError(864, "Unnecessary grouping operator.")
    .addError(685, "Missing '()' invoking a constructor.")
    .addError(764, "Use '===' to compare with '0'.")
    .addError(859, "Use '!==' to compare with '0'.")
    .test(src, { expr: true, eqnull: true, boss: true, regexdash: true, singleGroups: true });

  test.done();
};

exports.jQuery_1_7 = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/jquery-1.7.js', 'utf8');
  var globals = { DOMParser: false, ActiveXObject: false, define: false };

  TestRun(test)
    .addError(551, "'name' is defined but never used.")
    .addError(1044, "'actual' is defined but never used.")
    .addError(1312, "'pCount' is defined but never used.")
    .addError(1369, "'events' is defined but never used.")
    .addError(1607, "'table' is defined but never used.")
    .addError(1710, "'internalKey' is defined but never used.")
    .addError(1813, "'internalKey' is defined but never used.")
    .addError(2818, "Expected an assignment or function call and instead saw an expression.")
    .addError(2822, "Expected an assignment or function call and instead saw an expression.")
    .addError(2859, "'rnamespaces' is defined but never used.")
    .addError(2861, "'rperiod' is defined but never used.")
    .addError(2862, "'rspaces' is defined but never used.")
    .addError(2863, "'rescape' is defined but never used.")
    .addError(2900, "'quick' is defined but never used.")
    .addError(3269, "'related' is defined but never used.")
    .addError(3592, "'selector' is defined but never used.")
    .addError(4465, "'curLoop' is defined but never used.")
    .addError(4560, "Expected an assignment or function call and instead saw an expression.")
    .addError(4694, "'cache' is defined but never used.")
    .addError(4712, "Expected a 'break' statement before 'case'.")
    .addError(4843, "Expected an assignment or function call and instead saw an expression.")
    .addError(5635, "'elem' is defined but never used.")
    .addError(5675, "'i' is defined but never used.")
    .addError(5691, "'i' is defined but never used.")
    .addError(7141, "'i' is defined but never used.")
    .addError(6061, "'cur' is defined but never used.")
    .test(src, { undef: true, unused: true }, globals);

  test.done();
};

exports.prototype_1_7 = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/prototype-17.js', 'utf8');

  TestRun(test)
    .addError(22, "Missing semicolon.")
    .addError(94, "Unnecessary semicolon.")
    .addError(110, "Missing '()' invoking a constructor.")
    .addError(253, "'i' is already defined.")
    .addError(253, "'length' is already defined.")
    .addError(260, "'i' is already defined.")
    .addError(260, "'length' is already defined.")
    .addError(261, "'key' is already defined.")
    .addError(261, "'str' is already defined.")
    .addError(319, "Reassignment of 'isArray', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(392, "Missing semicolon.")
    .addError(400, "Missing semicolon.")
    .addError(409, "Missing semicolon.")
    .addError(430, "Missing semicolon.")
    .addError(451, "Missing semicolon.")
    .addError(633, "Use '!==' to compare with 'undefined'.")
    .addError(737, "Use '===' to compare with ''.")
    .addError(807, "Use '===' to compare with ''.")
    .addError(1137, "Use '===' to compare with '0'.")
    .addError(1215, "Missing semicolon.")
    .addError(1224, "Unnecessary semicolon.")
    .addError(1916, "Missing semicolon.")
    .addError(2034, "Missing semicolon.")
    .addError(2662, "Missing semicolon.")
    .addError(2735, "Missing semicolon.")
    .addError(2924, "Missing semicolon.")
    .addError(2987, "'tagName' used out of scope.")
    .addError(2989, "'tagName' used out of scope.")
    .addError(2989, "'tagName' used out of scope.")
    .addError(2990, "'tagName' used out of scope.")
    .addError(3827, "Reassignment of 'getOffsetParent', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(3844, "Reassignment of 'positionedOffset', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(3860, "Reassignment of 'cumulativeOffset', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(4036, "'ret' is already defined.")
    .addError(4072, "'cur' used out of scope.")
    .addError(4085, "'i' is already defined.")
    .addError(4132, "'match' is already defined.")
    .addError(4290, "'i' is already defined.")
    .addError(4290, "'l' is already defined.")
    .addError(4291, "'elem' is already defined.")
    .addError(4312, "'nodeCheck' used out of scope.")
    .addError(4322, "'nodeCheck' used out of scope.")
    .addError(4520, "'i' is already defined.")
    .addError(4538, "Expected a 'break' statement before 'case'.")
    .addError(4547, "Use '===' to compare with '0'.")
    .addError(4565, "Use '===' to compare with '0'.")
    .addError(4566, "Use '===' to compare with '0'.")
    .addError(4568, "Use '===' to compare with '0'.")
    .addError(4656, "'i' is already defined.")
    .addError(4722, "Missing '()' invoking a constructor.")
    .addError(4988, "Missing semicolon.")
    .addError(4988, "Missing semicolon.")
    .addError(5021, "Missing semicolon.")
    .addError(5397, "Missing semicolon.")
    .addError(5112, "Use '!==' to compare with 'undefined'.")
    .addError(5140, "Use '!==' to compare with ''.")
    .addError(5224, "'values' is already defined.")
    .addError(5495, "Function declarations should not be placed in blocks. Use a function " +
      "expression or move the statement to the top of the outer function.")
    .addError(5545, "The '__proto__' property is deprecated.")
    .test(src, {
      sub      : true,
      lastsemic: true,
      loopfunc : true,
      evil     : true,
      eqnull   : true,
      laxbreak : true,
      boss     : true,
      expr     : true,
      maxerr   : 9001
    });

  test.done();
};


exports.lodash_0_6_1 = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/lodash.js', 'utf8');
  var globals = { _: false, define: false };
  var options = {
    unused   : true,
    expr     : true,
    eqnull   : true,
    boss     : true,
    regexdash: true,
    proto    : true,
    laxbreak : true,
    newcap   : false,
    node     : true,
    evil     : true,
    laxcomma : true
  };

  TestRun(test)
    .addError(168, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(170, "Missing '()' invoking a constructor.")
    .addError(632, "Missing semicolon.")
    .addError(920, "Reassignment of 'isArguments', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(963, "Reassignment of 'isFunction', which is is a function. Use 'var' or 'let' to declare bindings that may change.")
    .addError(1122, "'isArr' used out of scope.")
    .addError(1127, "'className' used out of scope.")
    .addError(1129, "Use '===' to compare with 'true'.")
    .addError(1153, "'isArr' used out of scope.")
    .addError(1159, "'isArr' used out of scope.")
    .addError(1490, "Use '===' to compare with '0'.")
    .addError(1670, "Missing semicolon.")
    .addError(3374, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(3377, "Missing '()' invoking a constructor.")
    .addError(3384, "Missing semicolon.")
    .addError(3677, "Missing '()' invoking a constructor.")
    .addError(3683, "Missing '()' invoking a constructor.")
    .addError(3825, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(4225, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(4226, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .addError(4242, "If a strict mode function is executed using function invocation, its 'this' value will be undefined.")
    .test(src, options, globals);

  test.done();
};

exports.json2 = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/json2.js', 'utf8');

  TestRun(test)
    .addError(177, "'key' is defined but never used.")
    .addError(191, "'key' is defined but never used.")
    .test(src, { singleGroups: true, undef: true, unused: true, laxbreak: true, predef: ["-JSON"] }, { JSON: true });

  test.done();
};

exports.codemirror3 = function (test) {
  var src = fs.readFileSync(__dirname + '/libs/codemirror3.js', 'utf8');
  var opt = {
    newcap:   false,
    undef:    true,
    unused:   true,
    eqnull:   true,
    boss:     true,
    laxbreak: true,
    shadow:   true,
    loopfunc: true,
    browser:  true,
    supernew: true,

    "-W008":  true, // Ignore warnings about leading dots in numbers.
    "-W038":  true, // Ignore scope warnings.
    "-W040":  true, // Ignore possible strict violations.
    "-W041":  true, // Ignore poor relations warnings.

  };

  TestRun(test)
    .addError(1342, "Value of 'e' may be overwritten in IE 8 and earlier.")
    .addError(1526, "Value of 'e' may be overwritten in IE 8 and earlier.")
    .addError(1533, "Value of 'e' may be overwritten in IE 8 and earlier.")
    .addError(4093, "Unnecessary semicolon.")
    .test(src, opt, { CodeMirror: true });

  test.done();
};
