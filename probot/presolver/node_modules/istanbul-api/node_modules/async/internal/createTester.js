'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _createTester;

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _breakLoop = require('./breakLoop');

var _breakLoop2 = _interopRequireDefault(_breakLoop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _createTester(check, getResult) {
    return function (eachfn, arr, iteratee, cb) {
        cb = cb || _noop2.default;
        var testPassed = false;
        var testResult;
        eachfn(arr, function (value, _, callback) {
            iteratee(value, function (err, result) {
                if (err) {
                    callback(err);
                } else if (check(result) && !testResult) {
                    testPassed = true;
                    testResult = getResult(true, value);
                    callback(null, _breakLoop2.default);
                } else {
                    callback();
                }
            });
        }, function (err) {
            if (err) {
                cb(err);
            } else {
                cb(null, testPassed ? testResult : getResult(false));
            }
        });
    };
}
module.exports = exports['default'];