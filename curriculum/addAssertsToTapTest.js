let _ = require('lodash');

function createIsAssert(tapTest, isThing) {
  const { assert } = tapTest;
  return function() {
    const args = [...arguments];
    args[0] = isThing(args[0]);
    assert.apply(tapTest, args);
  };
}

function addAssertsToTapTest(tapTest) {
  const assert = tapTest.assert;

  assert.isTrue = createIsAssert(tapTest, v => v === true);
  assert.isFalse = createIsAssert(tapTest, v => v === false);
  assert.isArray = createIsAssert(tapTest, _.isArray);
  assert.isBoolean = createIsAssert(tapTest, _.isBoolean);
  assert.isString = createIsAssert(tapTest, _.isString);
  assert.isNumber = createIsAssert(tapTest, _.isNumber);
  assert.isUndefined = createIsAssert(tapTest, _.isUndefined);
  assert.isNaN = createIsAssert(tapTest, _.isNaN);

  assert.deepEqual = tapTest.deepEqual;
  assert.equal = tapTest.equal;
  assert.strictEqual = tapTest.equal;
  assert.sameMembers = function sameMembers() {
    const [ first, second, ...args] = arguments;
    assert.apply(
      tapTest,
      [
        _.difference(first, second).length === 0 &&
        _.difference(second, first).length === 0
      ].concat(args)
    );
  };
  assert.includeMembers = function includeMembers() {
    const [ first, second, ...args] = arguments;
    assert.apply(tapTest,
      [
        _.difference(second, first).length === 0
      ].concat(args));
  };
  assert.match = function match() {
    const [value, regex, ...args] = arguments;
    assert.apply(tapTest,
      [
        regex.test(value)
      ].concat(args));
  };

  return assert;
}

module.exports = addAssertsToTapTest;
