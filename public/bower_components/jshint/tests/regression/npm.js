"use strict";

exports.npm = function (test) {
  var jshint;
  test.ok(jshint = require(__dirname + '/../../'));
  test.equal(typeof(jshint.JSHINT), 'function');
  test.done();
};
