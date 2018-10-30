'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doDuring;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _slice = require('./internal/slice');

var _slice2 = _interopRequireDefault(_slice);

var _onlyOnce = require('./internal/onlyOnce');

var _onlyOnce2 = _interopRequireDefault(_onlyOnce);

var _wrapAsync = require('./internal/wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The post-check version of [`during`]{@link module:ControlFlow.during}. To reflect the difference in
 * the order of operations, the arguments `test` and `fn` are switched.
 *
 * Also a version of [`doWhilst`]{@link module:ControlFlow.doWhilst} with asynchronous `test` function.
 * @name doDuring
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.during]{@link module:ControlFlow.during}
 * @category Control Flow
 * @param {AsyncFunction} fn - An async function which is called each time
 * `test` passes. Invoked with (callback).
 * @param {AsyncFunction} test - asynchronous truth test to perform before each
 * execution of `fn`. Invoked with (...args, callback), where `...args` are the
 * non-error args from the previous callback of `fn`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `fn` has stopped. `callback`
 * will be passed an error if one occurred, otherwise `null`.
 */
function doDuring(fn, test, callback) {
    callback = (0, _onlyOnce2.default)(callback || _noop2.default);
    var _fn = (0, _wrapAsync2.default)(fn);
    var _test = (0, _wrapAsync2.default)(test);

    function next(err /*, ...args*/) {
        if (err) return callback(err);
        var args = (0, _slice2.default)(arguments, 1);
        args.push(check);
        _test.apply(this, args);
    };

    function check(err, truth) {
        if (err) return callback(err);
        if (!truth) return callback(null);
        _fn(next);
    }

    check(null, true);
}
module.exports = exports['default'];