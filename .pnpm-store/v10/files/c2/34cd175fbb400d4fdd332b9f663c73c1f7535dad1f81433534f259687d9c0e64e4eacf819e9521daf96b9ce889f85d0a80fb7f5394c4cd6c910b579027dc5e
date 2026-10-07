const safeNegativeInfinity = Number.NEGATIVE_INFINITY;
const safePositiveInfinity = Number.POSITIVE_INFINITY;
export const MIN_VALUE_32 = 2 ** -126 * 2 ** -23;
export const MAX_VALUE_32 = 2 ** 127 * (1 + (2 ** 23 - 1) / 2 ** 23);
export const EPSILON_32 = 2 ** -23;
const INDEX_POSITIVE_INFINITY = 2139095040;
const INDEX_NEGATIVE_INFINITY = -2139095041;
const f32 = new Float32Array(1);
const u32 = new Uint32Array(f32.buffer, f32.byteOffset);
function bitCastFloatToUInt32(f) {
    f32[0] = f;
    return u32[0];
}
export function decomposeFloat(f) {
    const bits = bitCastFloatToUInt32(f);
    const signBit = bits >>> 31;
    const exponentBits = (bits >>> 23) & 0xff;
    const significandBits = bits & 0x7fffff;
    const exponent = exponentBits === 0 ? -126 : exponentBits - 127;
    let significand = exponentBits === 0 ? 0 : 1;
    significand += significandBits / 2 ** 23;
    significand *= signBit === 0 ? 1 : -1;
    return { exponent, significand };
}
function indexInFloatFromDecomp(exponent, significand) {
    if (exponent === -126) {
        return significand * 0x800000;
    }
    return (exponent + 127) * 0x800000 + (significand - 1) * 0x800000;
}
export function floatToIndex(f) {
    if (f === safePositiveInfinity) {
        return INDEX_POSITIVE_INFINITY;
    }
    if (f === safeNegativeInfinity) {
        return INDEX_NEGATIVE_INFINITY;
    }
    const decomp = decomposeFloat(f);
    const exponent = decomp.exponent;
    const significand = decomp.significand;
    if (f > 0 || (f === 0 && 1 / f === safePositiveInfinity)) {
        return indexInFloatFromDecomp(exponent, significand);
    }
    else {
        return -indexInFloatFromDecomp(exponent, -significand) - 1;
    }
}
export function indexToFloat(index) {
    if (index < 0) {
        return -indexToFloat(-index - 1);
    }
    if (index === INDEX_POSITIVE_INFINITY) {
        return safePositiveInfinity;
    }
    if (index < 0x1000000) {
        return index * 2 ** -149;
    }
    const postIndex = index - 0x1000000;
    const exponent = -125 + (postIndex >> 23);
    const significand = 1 + (postIndex & 0x7fffff) / 0x800000;
    return significand * 2 ** exponent;
}
