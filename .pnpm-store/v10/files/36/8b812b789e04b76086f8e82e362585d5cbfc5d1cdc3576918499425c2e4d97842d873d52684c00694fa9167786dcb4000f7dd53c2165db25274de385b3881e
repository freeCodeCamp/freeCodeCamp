import { Value } from '../../../check/arbitrary/definition/Value.js';
import { stream } from '../../../stream/Stream.js';
const safeMathCeil = Math.ceil;
const safeMathFloor = Math.floor;
function halvePosInteger(n) {
    return safeMathFloor(n / 2);
}
function halveNegInteger(n) {
    return safeMathCeil(n / 2);
}
export function shrinkInteger(current, target, tryTargetAsap) {
    const realGap = current - target;
    function* shrinkDecr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halvePosInteger(realGap);
        for (let toremove = gap; toremove > 0; toremove = halvePosInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    function* shrinkIncr() {
        let previous = tryTargetAsap ? undefined : target;
        const gap = tryTargetAsap ? realGap : halveNegInteger(realGap);
        for (let toremove = gap; toremove < 0; toremove = halveNegInteger(toremove)) {
            const next = toremove === realGap ? target : current - toremove;
            yield new Value(next, previous);
            previous = next;
        }
    }
    return realGap > 0 ? stream(shrinkDecr()) : stream(shrinkIncr());
}
