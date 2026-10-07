"use strict";
/*
 * Levenshtein distance, from the `js-levenshtein` NPM module.
 * Copied here to avoid complexity of adding another CommonJS module dependency.
 */
Object.defineProperty(exports, "__esModule", { value: true });
function _min(d0, d1, d2, bx, ay) {
    return d0 < d1 || d2 < d1
        ? d0 > d2
            ? d2 + 1
            : d0 + 1
        : bx === ay
            ? d1
            : d1 + 1;
}
/**
 * Calculates levenshtein distance.
 * @param a
 * @param b
 */
function levenshtein(a, b) {
    if (a === b) {
        return 0;
    }
    if (a.length > b.length) {
        var tmp = a;
        a = b;
        b = tmp;
    }
    var la = a.length;
    var lb = b.length;
    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
        la--;
        lb--;
    }
    var offset = 0;
    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
        offset++;
    }
    la -= offset;
    lb -= offset;
    if (la === 0 || lb === 1) {
        return lb;
    }
    var vector = new Array(la << 1);
    for (var y = 0; y < la;) {
        vector[la + y] = a.charCodeAt(offset + y);
        vector[y] = ++y;
    }
    var x;
    var d0;
    var d1;
    var d2;
    var d3;
    for (x = 0; (x + 3) < lb;) {
        var bx0 = b.charCodeAt(offset + (d0 = x));
        var bx1 = b.charCodeAt(offset + (d1 = x + 1));
        var bx2 = b.charCodeAt(offset + (d2 = x + 2));
        var bx3 = b.charCodeAt(offset + (d3 = x + 3));
        var dd_1 = (x += 4);
        for (var y = 0; y < la;) {
            var ay = vector[la + y];
            var dy = vector[y];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd_1 = _min(d2, d3, dd_1, bx3, ay);
            vector[y++] = dd_1;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
        }
    }
    var dd = 0;
    for (; x < lb;) {
        var bx0 = b.charCodeAt(offset + (d0 = x));
        dd = ++x;
        for (var y = 0; y < la; y++) {
            var dy = vector[y];
            vector[y] = dd = dy < d0 || dd < d0
                ? dy > dd ? dd + 1 : dy + 1
                : bx0 === vector[la + y]
                    ? d0
                    : d0 + 1;
            d0 = dy;
        }
    }
    return dd;
}
exports.default = levenshtein;