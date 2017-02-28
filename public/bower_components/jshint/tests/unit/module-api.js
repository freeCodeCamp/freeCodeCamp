/**
 * The JSHint API does not allow for un-registering "modules", and the Nodeunit
 * API does not support per-group setup/teardown logic. These deficiencies
 * necessitate additional logic in the test suite in order to test the JSHint
 * "module" API hygienically:
 *
 * - Only one JSHint "module" should be added at any time, regardless of the
 *   number of tests executed
 * - No JSHint "module" should run following the completion of this group of
 *   tests
 */
"use strict";

var JSHINT  = require("../..").JSHINT;
var TestRun = require("../helpers/testhelper").setup.testRun;

var firstRun = true;
var testContext = null;
var suiteSetup = function (done) {
  JSHINT.addModule(function (linter) {
    if (!testContext) {
      return;
    }
    testContext.onAddModule(linter);
  });

  done();
};
exports.setUp = function (done) {
  testContext = this;

  if (firstRun) {
    firstRun = false;
    suiteSetup(done);
    return;
  }

  done();
};
exports.tearDown = function (done) {
  testContext = null;
  done();
};

exports["test for GH-1103"] = function (test) {
  var code = [ "var ohnoes = 42;" ];

  var run = TestRun(test);

  var patch = true;

  this.onAddModule = function (linter) {
    if (!patch) {
      return;
    }
    patch = false;

    var ohnoes = "oh noes";
    Array.prototype.ohnoes = function () {
      linter.warn("E024", { line: 1, char: 1, data: [ ohnoes += "!" ] });
    };
  };

  run.test(code);

  test.done();

  delete Array.prototype.ohnoes;
};

exports.identifiers = function (test) {
  var src = [
    "var x = {",
    "  y: 23,",
    "  'z': 45",
    "};"
  ];
  var expected = [
    {
      line: 1,
      char: 6,
      from: 5,
      name: 'x',
      raw_name: 'x',
      isProperty: false
    },
    {
      line: 2,
      char: 4,
      from: 3,
      name: 'y',
      raw_name: 'y',
      isProperty: false
    }
  ];
  var actual = [];
  this.onAddModule = function (linter) {
    linter.on("Identifier", function(x) {
      actual.push(x);
    });
  };

  JSHINT(src);

  test.deepEqual(actual, expected);

  test.done();
};
