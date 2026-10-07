"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reduce_1 = require("./reduce");
function min(comparer) {
    var min = (typeof comparer === 'function')
        ? function (x, y) { return comparer(x, y) < 0 ? x : y; }
        : function (x, y) { return x < y ? x : y; };
    return reduce_1.reduce(min);
}
exports.min = min;
//# sourceMappingURL=min.js.map