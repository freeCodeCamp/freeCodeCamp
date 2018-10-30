'use strict';
var oN = require('./O(n)');
var es6Repeat = require('./es6Repeat');
var current = require('../');

var Benchmark = require('benchmark');

var str = "abcd"
var len = 100;

function buildSuite (note, fns, args) {
  console.log(note);
  var suite = new Benchmark.Suite;

  Object.keys(fns).forEach(function (name) {
    suite.add(name, function () {
      fns[name].apply(null, args);
    });
  });
  suite.on('cycle', function (event) {
    console.log(String(event.target));
  }).on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
  });

  return suite;
}

var fns = {
  'O(n)': oN,
  'ES6 Repeat': es6Repeat,
  'Current': current
};

buildSuite('-> pad 100 spaces to str of len 4', fns, ['abcd', 104, ' ']).run();
buildSuite('-> pad 10 spaces to str of len 4', fns, ['abcd', 14,  ' ']).run();
buildSuite('-> pad 9 spaces to str of len 4', fns, ['abcd', 13,  ' ']).run();
buildSuite('-> pad 100 to str of len 100', fns, ['0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789', 200, ' ']).run();
buildSuite('-> pad 10 to str of len 100', fns, ['0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789', 110, ' ']).run();
buildSuite('-> pad 9 to str of len 100', fns, ['0012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789123456789', 109, ' ']).run();
