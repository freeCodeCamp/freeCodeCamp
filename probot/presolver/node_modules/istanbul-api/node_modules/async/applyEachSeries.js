'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _applyEach = require('./internal/applyEach');

var _applyEach2 = _interopRequireDefault(_applyEach);

var _mapSeries = require('./mapSeries');

var _mapSeries2 = _interopRequireDefault(_mapSeries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The same as [`applyEach`]{@link module:ControlFlow.applyEach} but runs only a single async operation at a time.
 *
 * @name applyEachSeries
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.applyEach]{@link module:ControlFlow.applyEach}
 * @category Control Flow
 * @param {Array|Iterable|Object} fns - A collection of {@link AsyncFunction}s to all
 * call with the same arguments
 * @param {...*} [args] - any number of separate arguments to pass to the
 * function.
 * @param {Function} [callback] - the final argument should be the callback,
 * called when all functions have completed processing.
 * @returns {Function} - If only the first argument is provided, it will return
 * a function which lets you pass in the arguments as if it were a single
 * function call.
 */
exports.default = (0, _applyEach2.default)(_mapSeries2.default);
module.exports = exports['default'];