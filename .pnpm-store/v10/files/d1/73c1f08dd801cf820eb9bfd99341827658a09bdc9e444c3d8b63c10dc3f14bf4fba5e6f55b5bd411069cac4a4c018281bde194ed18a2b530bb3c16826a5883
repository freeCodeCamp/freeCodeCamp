"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decomposeDouble = decomposeDouble;
exports.doubleToIndex = doubleToIndex;
exports.indexToDouble = indexToDouble;
const ArrayInt64_1 = require("./ArrayInt64");
const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
const safeEpsilon = Number.EPSILON;
const INDEX_POSITIVE_INFINITY = { sign: 1, data: [2146435072, 0] };
const INDEX_NEGATIVE_INFINITY = { sign: -1, data: [2146435072, 1] };
const f64 = new Float64Array(1);
const u32 = new Uint32Array(f64.buffer, f64.byteOffset);
function bitCastDoubleToUInt64(f) {
    f64[0] = f;
    return [u32[1], u32[0]];
}
function decomposeDouble(d) {
    const { 0: hi, 1: lo } = bitCastDoubleToUInt64(d);
    const signBit = hi >>> 31;
    const exponentBits = (hi >>> 20) & 0x7ff;
    const significandBits = (hi & 0xfffff) * 0x100000000 + lo;
    const exponent = exponentBits === 0 ? -1022 : exponentBits - 1023;
    let significand = exponentBits === 0 ? 0 : 1;
    significand += significandBits / 2 ** 52;
    significand *= signBit === 0 ? 1 : -1;
    return { exponent, significand };
}
function positiveNumberToInt64(n) {
    return [~~(n / 0x100000000), n >>> 0];
}
function indexInDoubleFromDecomp(exponent, significand) {
    if (exponent === -1022) {
        const rescaledSignificand = significand * 2 ** 52;
        return positiveNumberToInt64(rescaledSignificand);
    }
    const rescaledSignificand = (significand - 1) * 2 ** 52;
    const exponentOnlyHigh = (exponent + 1023) * 2 ** 20;
    const index = positiveNumberToInt64(rescaledSignificand);
    index[0] += exponentOnlyHigh;
    return index;
}
function doubleToIndex(d) {
    if (d === safePositiveInfinity) {
        return (0, ArrayInt64_1.clone64)(INDEX_POSITIVE_INFINITY);
    }
    if (d === safeNegativeInfinity) {
        return (0, ArrayInt64_1.clone64)(INDEX_NEGATIVE_INFINITY);
    }
    const decomp = decomposeDouble(d);
    const exponent = decomp.exponent;
    const significand = decomp.significand;
    if (d > 0 || (d === 0 && 1 / d === safePositiveInfinity)) {
        return { sign: 1, data: indexInDoubleFromDecomp(exponent, significand) };
    }
    else {
        const indexOpposite = indexInDoubleFromDecomp(exponent, -significand);
        if (indexOpposite[1] === 0xffffffff) {
            indexOpposite[0] += 1;
            indexOpposite[1] = 0;
        }
        else {
            indexOpposite[1] += 1;
        }
        return { sign: -1, data: indexOpposite };
    }
}
function indexToDouble(index) {
    if (index.sign === -1) {
        const indexOpposite = { sign: 1, data: [index.data[0], index.data[1]] };
        if (indexOpposite.data[1] === 0) {
            indexOpposite.data[0] -= 1;
            indexOpposite.data[1] = 0xffffffff;
        }
        else {
            indexOpposite.data[1] -= 1;
        }
        return -indexToDouble(indexOpposite);
    }
    if ((0, ArrayInt64_1.isEqual64)(index, INDEX_POSITIVE_INFINITY)) {
        return safePositiveInfinity;
    }
    if (index.data[0] < 0x200000) {
        return (index.data[0] * 0x100000000 + index.data[1]) * 2 ** -1074;
    }
    const postIndexHigh = index.data[0] - 0x200000;
    const exponent = -1021 + (postIndexHigh >> 20);
    const significand = 1 + ((postIndexHigh & 0xfffff) * 2 ** 32 + index.data[1]) * safeEpsilon;
    return significand * 2 ** exponent;
}
