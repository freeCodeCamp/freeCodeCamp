'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = doUntil;

var _doWhilst = require('./doWhilst');

var _doWhilst2 = _interopRequireDefault(_doWhilst);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like ['doWhilst']{@link module:ControlFlow.doWhilst}, except the `test` is inverted. Note the
 * argument ordering differs from `until`.
 *
 * @name doUntil
 * @static
 * @memberOf module:ControlFlow
 * @method
 * @see [async.doWhilst]{@link module:ControlFlow.doWhilst}
 * @category Control Flow
 * @param {AsyncFunction} iteratee - An async function which is called each time
 * `test` fails. Invoked with (callback).
 * @param {Function} test - synchronous truth test to perform after each
 * execution of `iteratee`. Invoked with any non-error callback results of
 * `iteratee`.
 * @param {Function} [callback] - A callback which is called after the test
 * function has passed and repeated execution of `iteratee` has stopped. `callback`
 * will be passed an error and any arguments passed to the final `iteratee`'s
 * callback. Invoked with (err, [results]);
 */
function doUntil(iteratee, test, callback) {
    (0, _doWhilst2.default)(iteratee, function () {
        return !test.apply(this, arguments);
    }, callback);
}
module.exports = exports['default'];