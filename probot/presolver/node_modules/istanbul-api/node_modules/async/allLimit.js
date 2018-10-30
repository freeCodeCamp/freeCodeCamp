'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createTester = require('./internal/createTester');

var _createTester2 = _interopRequireDefault(_createTester);

var _doParallelLimit = require('./internal/doParallelLimit');

var _doParallelLimit2 = _interopRequireDefault(_doParallelLimit);

var _notId = require('./internal/notId');

var _notId2 = _interopRequireDefault(_notId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`every`]{@link module:Collections.every} but runs a maximum of `limit` async operations at a time.
 *
 * @name everyLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in parallel.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
exports.default = (0, _doParallelLimit2.default)((0, _createTester2.default)(_notId2.default, _notId2.default));
module.exports = exports['default'];