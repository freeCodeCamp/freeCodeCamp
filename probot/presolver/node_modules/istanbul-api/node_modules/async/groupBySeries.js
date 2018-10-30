'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doLimit = require('./internal/doLimit');

var _doLimit2 = _interopRequireDefault(_doLimit);

var _groupByLimit = require('./groupByLimit');

var _groupByLimit2 = _interopRequireDefault(_groupByLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs only a single async operation at a time.
 *
 * @name groupBySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.groupBy]{@link module:Collections.groupBy}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - An async function to apply to each item in
 * `coll`.
 * The iteratee should complete with a `key` to group the value under.
 * Invoked with (value, callback).
 * @param {Function} [callback] - A callback which is called when all `iteratee`
 * functions have finished, or an error occurs. Result is an `Object` whoses
 * properties are arrays of values which returned the corresponding key.
 */
exports.default = (0, _doLimit2.default)(_groupByLimit2.default, 1);
module.exports = exports['default'];