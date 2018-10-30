'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = applyEach;

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

var _initialParams = require('./initialParams');

var _initialParams2 = _interopRequireDefault(_initialParams);

var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function applyEach(eachfn) {
    return function (fns /*, ...args*/) {
        var args = (0, _slice2.default)(arguments, 1);
        var go = (0, _initialParams2.default)(function (args, callback) {
            var that = this;
            return eachfn(fns, function (fn, cb) {
                (0, _wrapAsync2.default)(fn).apply(that, args.concat(cb));
            }, callback);
        });
        if (args.length) {
            return go.apply(this, args);
        } else {
            return go;
        }
    };
}
module.exports = exports['default'];