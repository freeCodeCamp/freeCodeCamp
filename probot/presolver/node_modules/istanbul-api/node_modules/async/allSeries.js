'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _everyLimit = require('./everyLimit');

var _everyLimit2 = _interopRequireDefault(_everyLimit);

var _doLimit = require('./internal/doLimit');

var _doLimit2 = _interopRequireDefault(_doLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`every`]{@link module:Collections.every} but runs only a single async operation at a time.
 *
 * @name everySeries
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.every]{@link module:Collections.every}
 * @alias allSeries
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {AsyncFunction} iteratee - An async truth test to apply to each item
 * in the collection in series.
 * The iteratee must complete with a boolean result value.
 * Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Result will be either `true` or `false`
 * depending on the values of the async tests. Invoked with (err, result).
 */
exports.default = (0, _doLimit2.default)(_everyLimit2.default, 1);
module.exports = exports['default'];