'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isEqual", {
    enumerable: true,
    get: function() {
        return isEqual;
    }
});
function isPrimitive(obj) {
    return obj !== Object(obj);
}
function isEqual(first, second) {
    if (first === second) {
        return true;
    }
    if (isPrimitive(first) || isPrimitive(second) || typeof first === 'function' || typeof second === 'function') {
        return first === second;
    }
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // @TODO avoid for..of because of the large polyfill
        // eslint-disable-next-line instantsearch/no-for-of
        for(var _iterator = Object.keys(first)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            if (!(key in second)) {
                return false;
            }
            if (!isEqual(first[key], second[key])) {
                return false;
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return true;
}
