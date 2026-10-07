/*!
 * chai
 * Copyright(c) 2011-2014 Jake Luer <jake@alogicalparadox.com>
 * MIT Licensed
 */

import * as chai from '../../chai.js';
import {Assertion} from '../assertion.js';
import {AssertionError} from 'assertion-error';

/**
 * @param {unknown} val
 * @param {string} message
 * @returns {Assertion}
 */
function expect(val, message) {
  return new Assertion(val, message);
}

export {expect};

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
 * @param {unknown} actual
 * @param {unknown} expected
 * @param {string} message
 * @param {string} operator
 * @namespace expect
 * @public
 */
expect.fail = function (actual, expected, message, operator) {
  if (arguments.length < 2) {
    message = actual;
    actual = undefined;
  }

  message = message || 'expect.fail()';
  throw new AssertionError(
    message,
    {
      actual: actual,
      expected: expected,
      operator: operator
    },
    chai.expect.fail
  );
};
