'use strict';

var Test = require('tape/lib/test');
var is = require('object-is');

var deepEqual = require('../');
var assert = require('../assert');

var equal = process.env.ASSERT ? function assertDeepEqual(a, b, options) {
  try {
    if (options && options.strict) {
      assert.deepStrictEqual(a, b);
    } else {
      assert.deepEqual(a, b);
    }
  } catch (e) {
    return false;
  }
  return true;
} : deepEqual;

function equalReversed(t, a, b, isEqual, msg, isStrict, skipReversed) {
  var actual = isStrict
    ? equal(a, b, { strict: true })
    : equal(a, b);
  var suffix = isEqual ? ' are equal' : ' are not equal';
  t.equal(actual, !!isEqual, msg + suffix);
  if (typeof skipReversed === 'boolean' ? !skipReversed : !is(a, b)) {
    var actualReverse = isStrict
      ? equal(b, a, { strict: true })
      : equal(b, a);
    t.equal(actualReverse, !!isEqual, msg + suffix + ' (reversed)');
  }
}
function deepEqualTest(t, a, b, msg, isEqual, isStrictEqual, skipReversed) {
  equalReversed(t, a, b, isEqual, msg, false, skipReversed);
  equalReversed(t, a, b, isStrictEqual, 'strict: ' + msg, true, skipReversed);
}

Test.prototype.deepEqualTest = function (a, b, message, isEqual, isStrictEqual, skipReversed) {
  return deepEqualTest(this, a, b, message, !!isEqual, !!isStrictEqual, skipReversed);
};
