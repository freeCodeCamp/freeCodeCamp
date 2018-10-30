'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doWhilst;

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
 * The post-check version of [`whilst`]{@link module:ControlFlow.whilst}. To reflect the difference in
 * the order of operations, the arguments `test` and `iteratee` are switched.
 *
 * `doWhilst` is to `whilst` as `do while` is to `while` in plain JavaScript.
 *
 * @name doWhilst
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.whilst]{@link module:ControlFlow.whilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - A function which is called each time `test`
 * passes. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has failed and repeated execution of `iteratee` has stopped.
 * `callback` will be passed an error and any arguments passed to the final
 * `iteratee`'s callback. Invoked with (err, [results]);
 */
function doWhilst(iteratee, test, callback) {
    callback = (0, _onlyOnce2.default)(callback || _noop2.default);
    var _iteratee = (0, _wrapAsync2.default)(iteratee);
    var next = function (err /*, ...args*/) {
        if (err) return callback(err);
        var args = (0, _slice2.default)(arguments, 1);
        if (test.apply(this, args)) return _iteratee(next);
        callback.apply(null, [null].concat(args));
    };
    _iteratee(next);
}
module.exports = exports['default'];