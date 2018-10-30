'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = forever;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _onlyOnce = require('./internal/onlyOnce');

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _ensureAsync = require('./ensureAsync');

var _ensureAsync2 = _interopRequireDefault(_ensureAsync);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Calls the asynchronous function `fn` with a callback parameter that allows it
 * to call itself again, in series, indefinitely.

 * If an error is passed to the callback then `errback` is called with the
 * error, and execution stops, otherwise it will never be called.
 *
 * @name forever
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @category Control Flow
 * @param {AsyncFunction} fn - an async function to call repeatedly.
 * Invoked with (next).
 * @param {Function} [errback] - when `fn` passes an error to it's callback,
 * this function will be called, and execution stops. Invoked with (err).
 * @example
 *
 * async.forever(
 *     function(next) {
 *         // next is suitable for passing to things that need a callback(err [, whatever]);
 *         // it will result in this function being called again.
 *     },
 *     function(err) {
 *         // if next is called with a value in its first parameter, it will appear
 *         // in here as 'err', and execution will stop.
 *     }
 * );
 */
function forever(fn, errback) {
    var done = (0, _onlyOnce2.default)(errback || _noop2.default);
    var task = (0, _wrapAsync2.default)((0, _ensureAsync2.default)(fn));

    function next(err) {
        if (err) return done(err);
        task(next);
    }
    next();
}
module.exports = exports['default'];