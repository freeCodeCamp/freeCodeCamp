"use strict";
exports.__esModule = true;
exports.distance = exports.closest = void 0;
var peq = new Uint32Array(0x10000);
var myers_32 = function (a, b) {
    var n = a.length;
    var m = b.length;
    var lst = 1 << (n - 1);
    var pv = -1;
    var mv = 0;
    var sc = n;
    var i = n;
    while (i--) {
        peq[a.charCodeAt(i)] |= 1 << i;
    }
    for (i = 0; i < m; i++) {
        var eq = peq[b.charCodeAt(i)];
        var xv = eq | mv;
        eq |= ((eq & pv) + pv) ^ pv;
        mv |= ~(eq | pv);
        pv &= eq;
        if (mv & lst) {
            sc++;
        }
        if (pv & lst) {
            sc--;
        }
        mv = (mv << 1) | 1;
        pv = (pv << 1) | ~(xv | mv);
        mv &= xv;
    }
    i = n;
    while (i--) {
        peq[a.charCodeAt(i)] = 0;
    }
    return sc;
};
var myers_x = function (b, a) {
    var n = a.length;
    var m = b.length;
    var mhc = [];
    var phc = [];
    var hsize = Math.ceil(n / 32);
    var vsize = Math.ceil(m / 32);
    for (var i = 0; i < hsize; i++) {
        phc[i] = -1;
        mhc[i] = 0;
    }
    var j = 0;
    for (; j < vsize - 1; j++) {
        var mv_1 = 0;
        var pv_1 = -1;
        var start_1 = j * 32;
        var vlen_1 = Math.min(32, m) + start_1;
        for (var k = start_1; k < vlen_1; k++) {
            peq[b.charCodeAt(k)] |= 1 << k;
        }
        for (var i = 0; i < n; i++) {
            var eq = peq[a.charCodeAt(i)];
            var pb = (phc[(i / 32) | 0] >>> i) & 1;
            var mb = (mhc[(i / 32) | 0] >>> i) & 1;
            var xv = eq | mv_1;
            var xh = ((((eq | mb) & pv_1) + pv_1) ^ pv_1) | eq | mb;
            var ph = mv_1 | ~(xh | pv_1);
            var mh = pv_1 & xh;
            if ((ph >>> 31) ^ pb) {
                phc[(i / 32) | 0] ^= 1 << i;
            }
            if ((mh >>> 31) ^ mb) {
                mhc[(i / 32) | 0] ^= 1 << i;
            }
            ph = (ph << 1) | pb;
            mh = (mh << 1) | mb;
            pv_1 = mh | ~(xv | ph);
            mv_1 = ph & xv;
        }
        for (var k = start_1; k < vlen_1; k++) {
            peq[b.charCodeAt(k)] = 0;
        }
    }
    var mv = 0;
    var pv = -1;
    var start = j * 32;
    var vlen = Math.min(32, m - start) + start;
    for (var k = start; k < vlen; k++) {
        peq[b.charCodeAt(k)] |= 1 << k;
    }
    var score = m;
    for (var i = 0; i < n; i++) {
        var eq = peq[a.charCodeAt(i)];
        var pb = (phc[(i / 32) | 0] >>> i) & 1;
        var mb = (mhc[(i / 32) | 0] >>> i) & 1;
        var xv = eq | mv;
        var xh = ((((eq | mb) & pv) + pv) ^ pv) | eq | mb;
        var ph = mv | ~(xh | pv);
        var mh = pv & xh;
        score += (ph >>> (m - 1)) & 1;
        score -= (mh >>> (m - 1)) & 1;
        if ((ph >>> 31) ^ pb) {
            phc[(i / 32) | 0] ^= 1 << i;
        }
        if ((mh >>> 31) ^ mb) {
            mhc[(i / 32) | 0] ^= 1 << i;
        }
        ph = (ph << 1) | pb;
        mh = (mh << 1) | mb;
        pv = mh | ~(xv | ph);
        mv = ph & xv;
    }
    for (var k = start; k < vlen; k++) {
        peq[b.charCodeAt(k)] = 0;
    }
    return score;
};
var distance = function (a, b) {
    if (a.length < b.length) {
        var tmp = b;
        b = a;
        a = tmp;
    }
    if (b.length === 0) {
        return a.length;
    }
    if (a.length <= 32) {
        return myers_32(a, b);
    }
    return myers_x(a, b);
};
exports.distance = distance;
var closest = function (str, arr) {
    var min_distance = Infinity;
    var min_index = 0;
    for (var i = 0; i < arr.length; i++) {
        var dist = distance(str, arr[i]);
        if (dist < min_distance) {
            min_distance = dist;
            min_index = i;
        }
    }
    return arr[min_index];
};
exports.closest = closest;
