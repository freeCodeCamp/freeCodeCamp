'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll, limit, iteratee, callback) {
    callback = callback || _noop2.default;
    var _iteratee = (0, _wrapAsync2.default)(iteratee);
    (0, _mapLimit2.default)(coll, limit, function (val, callback) {
        _iteratee(val, function (err, key) {
            if (err) return callback(err);
            return callback(null, { key: key, val: val });
        });
    }, function (err, mapResults) {
        var result = {};
        // from MDN, handle object having an `hasOwnProperty` prop
        var hasOwnProperty = Object.prototype.hasOwnProperty;

        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                var key = mapResults[i].key;
                var val = mapResults[i].val;

                if (hasOwnProperty.call(result, key)) {
                    result[key].push(val);
                } else {
                    result[key] = [val];
                }
            }
        }

        return callback(err, result);
    });
};

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _mapLimit = require('./mapLimit');

var _mapLimit2 = _interopRequireDefault(_mapLimit);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

;
/**
 * The same as [`groupBy`]{@link module:Collections.groupBy} but runs a maximum of `limit` async operations at a time.
 *
 * @name groupByLimit
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
module.exports = exports['default'];