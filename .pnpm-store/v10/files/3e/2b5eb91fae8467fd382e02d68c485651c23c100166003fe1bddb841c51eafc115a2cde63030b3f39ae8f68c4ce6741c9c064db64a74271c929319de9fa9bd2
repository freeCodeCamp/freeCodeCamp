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
exports.__esModule = true;
function mergeWith(objects, customizer) {
    var _a = __read(objects), first = _a[0], rest = _a.slice(1);
    var ret = first;
    rest.forEach(function (a) {
        ret = mergeTo(ret, a, customizer);
    });
    return ret;
}
function mergeTo(a, b, customizer) {
    var ret = {};
    Object.keys(a)
        .concat(Object.keys(b))
        .forEach(function (k) {
        var v = customizer(a[k], b[k], k);
        ret[k] = typeof v === "undefined" ? a[k] : v;
    });
    return ret;
}
exports["default"] = mergeWith;
//# sourceMappingURL=merge-with.js.map