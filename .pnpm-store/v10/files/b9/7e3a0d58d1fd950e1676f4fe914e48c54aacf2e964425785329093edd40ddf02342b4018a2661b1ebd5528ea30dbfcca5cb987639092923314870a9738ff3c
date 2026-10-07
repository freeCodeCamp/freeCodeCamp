import { BigInt, String } from '../../../utils/globals.js';
const safeMathFloor = Math.floor;
const safeMathLog = Math.log;
export function integerLogLike(v) {
    return safeMathFloor(safeMathLog(v) / safeMathLog(2));
}
export function bigIntLogLike(v) {
    if (v === BigInt(0))
        return BigInt(0);
    return BigInt(String(v).length);
}
function biasNumericRange(min, max, logLike) {
    if (min === max) {
        return [{ min: min, max: max }];
    }
    if (min < 0 && max > 0) {
        const logMin = logLike(-min);
        const logMax = logLike(max);
        return [
            { min: -logMin, max: logMax },
            { min: (max - logMax), max: max },
            { min: min, max: min + logMin },
        ];
    }
    const logGap = logLike((max - min));
    const arbCloseToMin = { min: min, max: min + logGap };
    const arbCloseToMax = { min: (max - logGap), max: max };
    return min < 0
        ? [arbCloseToMax, arbCloseToMin]
        : [arbCloseToMin, arbCloseToMax];
}
export { biasNumericRange };
