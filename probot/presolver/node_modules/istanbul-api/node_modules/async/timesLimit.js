'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = timeLimit;

var _mapLimit = require('./mapLimit');

var _mapLimit2 = _interopRequireDefault(_mapLimit);

var _baseRange = require('lodash/_baseRange');

var _baseRange2 = _interopRequireDefault(_baseRange);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [times]{@link module:ControlFlow.times} but runs a maximum of `limit` async operations at a
 * time.
 *
 * @name timesLimit
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.times]{@link module:ControlFlow.times}
 * @category Control Flow
 * @param {number} count - The number of times to run the function.
 * @param {number} limit - The maximum number of async operations at a time.
 * @param {AsyncFunction} iteratee - The async function to call `n` times.
 * Invoked with the iteration index and a callback: (n, next).
 * @param {Function} callback - see [async.map]{@link module:Collections.map}.
 */
function timeLimit(count, limit, iteratee, callback) {
  var _iteratee = (0, _wrapAsync2.default)(iteratee);
  (0, _mapLimit2.default)((0, _baseRange2.default)(0, count, 1), limit, _iteratee, callback);
}
module.exports = exports['default'];