import * as Guard from './guard.mjs';
// --------------------------------------------------------------------------
// Native
// --------------------------------------------------------------------------
/** Returns true if this value is a F32 */
export function IsF32(value) {
    return Guard.IsNumber(value) &&
        Guard.IsEqual(value, Math.fround(value));
}
/** Returns true if this value is a F64 */
export function IsF64(value) {
    return Guard.IsNumber(value);
}
/** Returns true if this value is a U8 */
export function IsU8(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, 0) &&
        Guard.IsLessEqualThan(value, 255);
}
/** Returns true if this value is a U16 */
export function IsU16(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, 0) &&
        Guard.IsLessEqualThan(value, 65535);
}
/** Returns true if this value is a U32 */
export function IsU32(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, 0) &&
        Guard.IsLessEqualThan(value, 4294967295);
}
/** Returns true if this value is a U64 */
export function IsU64(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, 0);
}
/** Returns true if this value is a I8 */
export function IsI8(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, -128) &&
        Guard.IsLessEqualThan(value, 127);
}
/** Returns true if this value is a I16 */
export function IsI16(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, -32768) &&
        Guard.IsLessEqualThan(value, 32767);
}
/** Returns true if this value is a I32 */
export function IsI32(value) {
    return Guard.IsInteger(value) &&
        Guard.IsGreaterEqualThan(value, -2147483648) &&
        Guard.IsLessEqualThan(value, 2147483647);
}
/** Returns true if this value is a I64 */
export function IsI64(value) {
    return Guard.IsBigInt(value) &&
        Guard.IsGreaterEqualThan(value, BigInt('-9223372036854775808')) &&
        Guard.IsLessEqualThan(value, BigInt('9223372036854775807'));
}
