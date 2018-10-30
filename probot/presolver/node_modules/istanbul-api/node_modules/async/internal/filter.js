'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = _filter;

var _arrayMap = require('lodash/_arrayMap');

var _arrayMap2 = _interopRequireDefault(_arrayMap);

var _isArrayLike = require('lodash/isArrayLike');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _baseProperty = require('lodash/_baseProperty');

var _baseProperty2 = _interopRequireDefault(_baseProperty);

var _noop = require('lodash/noop');

var _noop2 = _interopRequireDefault(_noop);

var _wrapAsync = require('./wrapAsync');

var _wrapAsync2 = _interopRequireDefault(_wrapAsync);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function filterArray(eachfn, arr, iteratee, callback) {
    var truthValues = new Array(arr.length);
    eachfn(arr, function (x, index, callback) {
        iteratee(x, function (err, v) {
            truthValues[index] = !!v;
            callback(err);
        });
    }, function (err) {
        if (err) return callback(err);
        var results = [];
        for (var i = 0; i < arr.length; i++) {
            if (truthValues[i]) results.push(arr[i]);
        }
        callback(null, results);
    });
}

function filterGeneric(eachfn, coll, iteratee, callback) {
    var results = [];
    eachfn(coll, function (x, index, callback) {
        iteratee(x, function (err, v) {
            if (err) {
                callback(err);
            } else {
                if (v) {
                    results.push({ index: index, value: x });
                }
                callback();
            }
        });
    }, function (err) {
        if (err) {
            callback(err);
        } else {
            callback(null, (0, _arrayMap2.default)(results.sort(function (a, b) {
                return a.index - b.index;
            }), (0, _baseProperty2.default)('value')));
        }
    });
}

function _filter(eachfn, coll, iteratee, callback) {
    var filter = (0, _isArrayLike2.default)(coll) ? filterArray : filterGeneric;
    filter(eachfn, coll, (0, _wrapAsync2.default)(iteratee), callback || _noop2.default);
}
module.exports = exports['default'];