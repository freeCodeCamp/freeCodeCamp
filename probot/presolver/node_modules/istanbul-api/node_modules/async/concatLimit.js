'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (coll, limit, iteratee, callback) {
    callback = callback || _noop2.default;
    var _iteratee = (0, _wrapAsync2.default)(iteratee);
    (0, _mapLimit2.default)(coll, limit, function (val, callback) {
        _iteratee(val, function (err /*, ...args*/) {
            if (err) return callback(err);
            return callback(null, (0, _slice2.default)(arguments, 1));
        });
    }, function (err, mapResults) {
        var result = [];
        for (var i = 0; i < mapResults.length; i++) {
            if (mapResults[i]) {
                result = _concat.apply(result, mapResults[i]);
            }
        }

        return callback(err, result);
    });
};

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

var _mapLimit = require('./mapLimit');

var _mapLimit2 = _interopRequireDefault(_mapLimit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _concat = Array.prototype.concat;

/**
 * The same as [`concat`]{@link module:Collections.concat} but runs a maximum of `limit` async operations at a time.
 *
 * @name concatLimit
 * @static
 * @memberOf module:Collections
 * @method
 * @see [async.concat]{@link module:Collections.concat}
 * @category Collection
 * @param {Array|Iterable|Object} coll - A collection to iterate over.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - A function to apply to each item in `coll`,
 * which should use an array as its result. Invoked with (item, callback).
 * @param {Function} [callback] - A callback which is called after all the
 * `iteratee` functions have finished, or an error occurs. Results is an array
 * containing the concatenated results of the `iteratee` function. Invoked with
 * (err, results).
 */
module.exports = exports['default'];