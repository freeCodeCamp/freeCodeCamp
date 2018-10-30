'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = reject;

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function reject(eachfn, arr, iteratee, callback) {
    (0, _filter2.default)(eachfn, arr, function (value, cb) {
        iteratee(value, function (err, v) {
            cb(err, !v);
        });
    }, callback);
}
module.exports = exports['default'];