/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

module.exports = function (chai, util) {
  chai.expect = function (val, message) {
    return new chai.Assertion(val, message);
  };

  /**
   * ### .fail([message])
   * ### .fail(actual, expected, [message], [operator])
   *
   * Throw a failure.
   *
   *     expect.fail();
   *     expect.fail("custom error message");
   *     expect.fail(1, 2);
   *     expect.fail(1, 2, "custom error message");
   *     expect.fail(1, 2, "custom error message", ">");
   *     expect.fail(1, 2, undefined, ">");
   *
   * @name fail
   * @param {Mixed} actual
   * @param {Mixed} expected
   * @param {String} message
   * @param {String} operator
   * @namespace BDD
   * @api public
   */

  chai.expect.fail = function (actual, expected, message, operator) {
    if (arguments.length < 2) {
        message = actual;
        actual = undefined;
    }

    message = message || 'expect.fail()';
    throw new chai.AssertionError(message, {
        actual: actual
      , expected: expected
      , operator: operator
    }, chai.expect.fail);
  };
};
