'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _parallel;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _isArrayLike = require('lodash/isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _slice = require('./slice');

var _slice2 = _interopRequireDefault(_slice);

var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _parallel(eachfn, tasks, callback) {
    callback = callback || _noop2.default;
    var results = (0, _isArrayLike2.default)(tasks) ? [] : {};

    eachfn(tasks, function (task, key, callback) {
        (0, _wrapAsync2.default)(task)(function (err, result) {
            if (arguments.length > 2) {
                result = (0, _slice2.default)(arguments, 1);
            }
            results[key] = result;
            callback(err);
        });
    }, function (err) {
        callback(err, results);
    });
}
module.exports = exports['default'];