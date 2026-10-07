import * as String from './string.mjs';
// --------------------------------------------------------------------------
// Guards
// --------------------------------------------------------------------------
/** Returns true if this value is an array */
export function IsArray(value) {
    return Array.isArray(value);
}
/** Returns true if this value is an async iterator */
export function IsAsyncIterator(value) {
    return IsObject(value) && Symbol.asyncIterator in value;
}
/** Returns true if this value is bigint */
export function IsBigInt(value) {
    return IsEqual(typeof value, 'bigint');
}
/** Returns true if this value is a boolean */
export function IsBoolean(value) {
    return IsEqual(typeof value, 'boolean');
}
/** Returns true if this value is a constructor */
export function IsConstructor(value) {
    if (IsUndefined(value) || !IsFunction(value))
        return false;
    const result = Function.prototype.toString.call(value);
    if (/^class\s/.test(result))
        return true;
    if (/\[native code\]/.test(result))
        return true;
    return false;
}
/** Returns true if this value is a function */
export function IsFunction(value) {
    return IsEqual(typeof value, 'function');
}
/** Returns true if this value is integer */
export function IsInteger(value) {
    return Number.isInteger(value);
}
/** Returns true if this value is an iterator */
export function IsIterator(value) {
    return IsObject(value) && Symbol.iterator in value;
}
/** Returns true if this value is null */
export function IsNull(value) {
    return IsEqual(value, null);
}
/** Returns true if this value is number */
export function IsNumber(value) {
    return Number.isFinite(value);
}
/** Returns true if this value is an object but not an array */
export function IsObjectNotArray(value) {
    return IsObject(value) && !IsArray(value);
}
/** Returns true if this value is an object */
export function IsObject(value) {
    return IsEqual(typeof value, 'object') && !(IsNull(value));
}
/** Returns true if this value is string */
export function IsString(value) {
    return IsEqual(typeof value, 'string');
}
/** Returns true if this value is symbol */
export function IsSymbol(value) {
    return IsEqual(typeof value, 'symbol');
}
/** Returns true if this value is undefined */
export function IsUndefined(value) {
    return IsEqual(value, undefined);
}
// --------------------------------------------------------------------------
// Relational
// --------------------------------------------------------------------------
export function IsEqual(left, right) {
    return left === right;
}
export function IsGreaterThan(left, right) {
    return left > right;
}
export function IsLessThan(left, right) {
    return left < right;
}
export function IsLessEqualThan(left, right) {
    return left <= right;
}
export function IsGreaterEqualThan(left, right) {
    return left >= right;
}
// --------------------------------------------------------------------------
// MultipleOf
// --------------------------------------------------------------------------
export function IsMultipleOf(dividend, divisor) {
    if (IsBigInt(dividend) || IsBigInt(divisor)) {
        return BigInt(dividend) % BigInt(divisor) === 0n;
    }
    const tolerance = 1e-10;
    if (!IsNumber(dividend))
        return true;
    if (IsInteger(dividend) && (1 / divisor) % 1 === 0)
        return true;
    const mod = dividend % divisor;
    return Math.min(Math.abs(mod), Math.abs(mod - divisor)) < tolerance;
}
// ------------------------------------------------------------------
// IsClassInstance
// ------------------------------------------------------------------
/** Returns true if the value appears to be an instance of a class. */
export function IsClassInstance(value) {
    if (!IsObject(value))
        return false;
    const proto = globalThis.Object.getPrototypeOf(value);
    if (IsNull(proto))
        return false;
    return IsEqual(typeof proto.constructor, 'function') &&
        !(IsEqual(proto.constructor, globalThis.Object) ||
            IsEqual(proto.constructor.name, 'Object'));
}
// ------------------------------------------------------------------
// IsValueLike
// ------------------------------------------------------------------
export function IsValueLike(value) {
    return IsBigInt(value) ||
        IsBoolean(value) ||
        IsNull(value) ||
        IsNumber(value) ||
        IsString(value) ||
        IsUndefined(value);
}
// --------------------------------------------------------------------------
// String
// --------------------------------------------------------------------------
/** Returns the number of grapheme clusters in the string */
export function GraphemeCount(value) {
    return String.GraphemeCount(value);
}
/** Returns true if the string has at most the given number of graphemes */
export function IsMaxLength(value, length) {
    return String.IsMaxLengthFast(value, length);
}
/** Returns true if the string has at least the given number of graphemes */
export function IsMinLength(value, length) {
    return String.IsMinLengthFast(value, length);
}
// --------------------------------------------------------------------------
// Array
// --------------------------------------------------------------------------
/** Returns true if all elements from offset satisfy the callback, short-circuiting on the first failure */
export function Every(value, offset, callback) {
    for (let index = offset; index < value.length; index++) {
        if (!callback(value[index], index))
            return false;
    }
    return true;
}
/** Returns true if all elements from offset satisfy the callback, visiting every element regardless of failure */
export function EveryAll(value, offset, callback) {
    let result = true;
    for (let index = offset; index < value.length; index++) {
        if (!callback(value[index], index))
            result = false;
    }
    return result;
}
/** Takes the left-most element from an array and dispatches to the true arm, or the false arm if empty */
export function TakeLeft(array, true_, false_) {
    return (IsEqual(array.length, 0) ? false_() : true_(array[0], array.slice(1)));
}
// --------------------------------------------------------------------------
// Object
// --------------------------------------------------------------------------
/** Returns true if this value has this property key */
export function HasPropertyKey(value, key) {
    const isProtoField = IsEqual(key, '__proto__') || IsEqual(key, 'constructor');
    return isProtoField ? Object.prototype.hasOwnProperty.call(value, key) : key in value;
}
/** Returns object entries as `[RegExp, Value][]` */
export function EntriesRegExp(value) {
    return Keys(value).map((key) => [new RegExp(`^${key}$`), value[key]]);
}
/** Returns object entries as `[string, Value][]` */
export function Entries(value) {
    return Object.entries(value);
}
/** Returns the property keys for this object via `Object.getOwnPropertyKeys({ ... })` */
export function Keys(value) {
    return Object.getOwnPropertyNames(value);
}
/** Returns the property keys for this object via `Object.getOwnPropertyKeys({ ... })` */
export function Symbols(value) {
    return Object.getOwnPropertySymbols(value);
}
/** Returns the property values for the given object via `Object.values()` */
export function Values(value) {
    return Object.values(value);
}
// ------------------------------------------------------------------
// IsDeepEqual
// ------------------------------------------------------------------
function DeepEqualObject(left, right) {
    if (!IsObject(right))
        return false;
    const keys = Keys(left);
    return IsEqual(keys.length, Keys(right).length) &&
        keys.every((key) => IsDeepEqual(left[key], right[key]));
}
function DeepEqualArray(left, right) {
    return IsArray(right) && IsEqual(left.length, right.length) &&
        left.every((_, index) => IsDeepEqual(left[index], right[index]));
}
/** Tests values for deep equality */
export function IsDeepEqual(left, right) {
    return (IsArray(left) ? DeepEqualArray(left, right) : IsObject(left) ? DeepEqualObject(left, right) : IsEqual(left, right));
}
