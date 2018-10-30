'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = consoleFunc;

var _arrayEach = require('lodash/_arrayEach');

var _arrayEach2 = _interopRequireDefault(_arrayEach);

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function consoleFunc(name) {
    return function (fn /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        args.push(function (err /*, ...args*/) {
            var args = (0, _slice2.default)(arguments, 1);
            if (typeof console === 'object') {
                if (err) {
                    if (console.error) {
                        console.error(err);
                    }
                } else if (console[name]) {
                    (0, _arrayEach2.default)(args, function (x) {
                        console[name](x);
                    });
                }
            }
        });
        (0, _wrapAsync2.default)(fn).apply(null, args);
    };
}
module.exports = exports['default'];