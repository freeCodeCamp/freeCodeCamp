/* This program is free software. It comes without any warranty, to
     * the extent permitted by applicable law. You can redistribute it
     * and/or modify it under the terms of the Do What The Fuck You Want
     * To Public License, Version 2, as published by Sam Hocevar. See
     * http://www.wtfpl.net/ for more details. */
var leftPad = require("./");
var test = require("tape");
var fc = require("fast-check");

test('edge cases', function (assert) {
  assert.plan(12);
  assert.strictEqual(leftPad('foobar', 6), 'foobar');
  assert.strictEqual(leftPad('foobar', 5), 'foobar');
  assert.strictEqual(leftPad('foobar', -1), 'foobar');
  assert.strictEqual(leftPad('foobar', 6, '1'), 'foobar');
  assert.strictEqual(leftPad('foobar', 5, '1'), 'foobar');
  assert.strictEqual(leftPad('foobar', -1, '1'), 'foobar');
  assert.strictEqual(leftPad('foobar', 8, ''), '  foobar');
  assert.strictEqual(leftPad('foobar', 8, false), '  foobar', 'false default to space');
  assert.strictEqual(leftPad('foobar', 8, 0), '00foobar', '0 is treated as 0');
  assert.strictEqual(leftPad(0, 3, 1), '110', 'integer for str is converted to string');
  assert.strictEqual(leftPad(true, 7), '   true', 'boolean for str is converted to string');
  assert.strictEqual(leftPad('', 2), '  ', 'empty str for str');
});

test('spaces for ch', function (assert) {
  assert.plan(12);
  // default to space if not specified
  assert.strictEqual(leftPad('foo', 2), 'foo');
  assert.strictEqual(leftPad('foo', 3), 'foo');
  assert.strictEqual(leftPad('foo', 4), ' foo');
  assert.strictEqual(leftPad('foo', 5), '  foo');
  assert.strictEqual(leftPad('foo', 12), '         foo');
  assert.strictEqual(leftPad('foo', 13), '          foo');
  // explicit space param
  assert.strictEqual(leftPad('foo', 2, ' '), 'foo');
  assert.strictEqual(leftPad('foo', 3, ' '), 'foo');
  assert.strictEqual(leftPad('foo', 4, ' '), ' foo');
  assert.strictEqual(leftPad('foo', 5, ' '), '  foo');
  assert.strictEqual(leftPad('foo', 12, ' '), '         foo');
  assert.strictEqual(leftPad('foo', 13, ' '), '          foo');
});

test('non spaces for ch', function (assert) {
  assert.plan(7);
  assert.strictEqual(leftPad(1, 2, 0), '01');
  assert.strictEqual(leftPad(1, 2, '-'), '-1');
  assert.strictEqual(leftPad('foo', 4, '*'), '*foo', '0b1 len');
  assert.strictEqual(leftPad('foo', 5, '*'), '**foo', '0b10 len');
  assert.strictEqual(leftPad('foo', 6, '*'), '***foo', '0b11 len');
  assert.strictEqual(leftPad('foo', 7, '*'), '****foo', '0b001 len');
  assert.strictEqual(leftPad('foo', 103, '*'), '****************************************************************************************************foo', '100 pad');
});

var runProperty = function(assert, name, checkFn) {
  var prop = fc.property(fc.string(), fc.nat(1000), fc.char(), checkFn);
  var result = fc.check(prop);
  var message = '';
  if (result.failed) {
    message = 'Property "' + name + '" failed on counterexample ' + JSON.stringify(result.counterexample) + ' (seed: ' + result.seed + ')';
  }
  assert.strictEqual(message, '', name);
};

test('properties', function (assert) {
  assert.plan(4);
  runProperty(assert, 'starts by ch', function(str, len, ch) {
      var beg = leftPad(str, len, ch).substr(0, len -str.length);
      for (var idx = 0 ; idx != beg.length ; ++idx)
        if (beg[idx] !== ch)
          return false;
      return true;
  });
  runProperty(assert, 'ends by str', function(str, len, ch) {
      var out = leftPad(str, len, ch);
      for (var idx = 0 ; idx != str.length ; ++idx)
        if (str[str.length -idx -1] !== out[out.length -idx -1])
          return false;
      return true;
  });
  runProperty(assert, 'len char long if padded (unchanged otherwise)', function(str, len, ch) {
      var out = leftPad(str, len, ch);
      return str.length < len ? out.length === len : str === out;
  });
  runProperty(assert, 'no ch equivalent to space', function(str, len) {
      return leftPad(str, len) === leftPad(str, len, ' ');
  });
});
