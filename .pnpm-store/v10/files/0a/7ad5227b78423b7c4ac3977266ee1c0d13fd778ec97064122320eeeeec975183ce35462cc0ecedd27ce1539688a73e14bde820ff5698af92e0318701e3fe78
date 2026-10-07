"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shrinkInteger = shrinkInteger;
const Value_1 = require("../../../check/arbitrary/definition/Value");
const Stream_1 = require("../../../stream/Stream");
const safeMathCeil = Math.ceil;
const safeMathFloor = Math.floor;
function halvePosInteger(n) {
    return safeMathFloor(n / 2);
}
function halveNegInteger(n) {
    return safeMathCeil(n / 2);
}
function shrinkInteger(current, target, tryTargetAsap) {
    const realGap = current - target;
    function* shrinkDecr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halvePosInteger(realGap);
        for (let toremove = gap; toremove > 0; toremove = halvePosInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value_1.Value(next, previous);
            previous = next;
        }
    }
    function* shrinkIncr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halveNegInteger(realGap);
        for (let toremove = gap; toremove < 0; toremove = halveNegInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value_1.Value(next, previous);
            previous = next;
        }
    }
    return realGap > 0 ? (0, Stream_1.stream)(shrinkDecr()) : (0, Stream_1.stream)(shrinkIncr());
}
