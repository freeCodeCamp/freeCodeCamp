"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.integerLogLike = integerLogLike;
exports.bigIntLogLike = bigIntLogLike;
exports.biasNumericRange = biasNumericRange;
const globals_1 = require("../../../utils/globals");
const safeMathFloor = Math.floor;
const safeMathLog = Math.log;
function integerLogLike(v) {
    return safeMathFloor(safeMathLog(v) / safeMathLog(2));
}
function bigIntLogLike(v) {
    if (v === (0, globals_1.BigInt)(0))
        return (0, globals_1.BigInt)(0);
    return (0, globals_1.BigInt)((0, globals_1.String)(v).length);
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
