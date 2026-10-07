'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "dequal", {
    enumerable: true,
    get: function() {
        return dequal;
    }
});
var _type_of = require("@swc/helpers/_/_type_of");
/* eslint-disable complexity */ /*
 * Code taken from dequal/lite v2.0.0
 * https://github.com/lukeed/dequal/blob/9aa73181ac7e081cd330cac67d313632ac04bb02/src/lite.js
 *
 * It adds a 3rd argument `compare(a, b)` that lets execute custom logic to
 * compare values.
 * We use it to skip comparing function references.
 */ // eslint-disable-next-line typescript/unbound-method
var has = Object.prototype.hasOwnProperty;
function dequal(foo, bar, compare) {
    // start of custom implementation
    if (compare === null || compare === void 0 ? void 0 : compare(foo, bar)) {
        return true;
    }
    // end of custom implementation
    var ctor;
    var len;
    if (foo === bar) return true;
    if (foo && bar && (ctor = foo.constructor) === bar.constructor) {
        if (ctor === Date) return foo.getTime() === bar.getTime();
        if (ctor === RegExp) return foo.toString() === bar.toString();
        if (ctor === Array) {
            if ((len = foo.length) === bar.length) {
                while(len-- && dequal(foo[len], bar[len], compare));
            }
            return len === -1;
        }
        if (!ctor || (typeof foo === "undefined" ? "undefined" : _type_of._(foo)) === 'object') {
            len = 0;
            // eslint-disable-next-line guard-for-in, instantsearch/no-for-in
            for(ctor in foo){
                if (has.call(foo, ctor) && ++len && !has.call(bar, ctor)) return false;
                if (!(ctor in bar) || !dequal(foo[ctor], bar[ctor], compare)) return false;
            }
            return Object.keys(bar).length === len;
        }
    }
    // eslint-disable-next-line no-self-compare
    return foo !== foo && bar !== bar;
}
