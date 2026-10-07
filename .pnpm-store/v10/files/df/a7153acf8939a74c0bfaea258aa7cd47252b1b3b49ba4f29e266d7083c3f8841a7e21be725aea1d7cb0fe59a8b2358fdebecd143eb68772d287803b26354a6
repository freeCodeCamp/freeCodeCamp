"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
function mergeUnique(key, uniques, getter) {
    var uniquesSet = new Set(uniques);
    return function (a, b, k) {
        return (k === key) && Array.from(__spreadArray(__spreadArray([], __read(a)), __read(b)).map(function (it) { return ({ key: getter(it), value: it }); })
            .map(function (_a) {
            var key = _a.key, value = _a.value;
            return ({ key: (uniquesSet.has(key) ? key : value), value: value });
        })
            .reduce(function (m, _a) {
            var key = _a.key, value = _a.value;
            m["delete"](key); // This is required to preserve backward compatible order of elements after a merge.
            return m.set(key, value);
        }, new Map())
            .values());
    };
}
exports["default"] = mergeUnique;
//# sourceMappingURL=unique.js.map