'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./internal/filter');

var _filter2 = _interopRequireDefault(_filter);

var _doParallelLimit = require('./internal/doParallelLimit');

var _doParallelLimit2 = _interopRequireDefault(_doParallelLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`filter`]{@link module:Collections.filter} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name filterLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.filter]{@link module:Collections.filter}
 * @alias selectLimit
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {Function} iteratee - A truth test to apply to each item in `coll`.
 * The `iteratee` is passed a `callback(err, truthValue)`, which must be called
 * with a boolean argument once it has completed. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished. Invoked with (err, results).
 */
exports.default = (0, _doParallelLimit2.default)(_filter2.default);
module.exports = exports['default'];