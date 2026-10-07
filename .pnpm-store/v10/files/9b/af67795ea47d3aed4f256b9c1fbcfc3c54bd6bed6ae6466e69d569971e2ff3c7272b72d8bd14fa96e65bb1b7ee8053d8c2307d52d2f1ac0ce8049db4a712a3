// deno-fmt-ignore-file
import { Unreachable } from '../unreachable/index.mjs';
import { Guard, GlobalsGuard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// InstanceKeys
//
// Retrieves all enumerable and non-enumerable own property keys 
// and inherited prototype keys (excluding symbols and the 'constructor') 
// from an object instance.
//
// This function is useful for differentiating between class instances 
// based on their structural keys rather than relying on the 
// constructor name. It provides a more reliable structural comparison 
// by capturing both own and prototype properties.
//
// ------------------------------------------------------------------
function InstanceKeys(value) {
    const propertyKeys = new Set();
    let current = value;
    while (current && current !== Object.prototype) {
        for (const key of Reflect.ownKeys(current)) {
            if (key !== 'constructor' && typeof key !== 'symbol')
                propertyKeys.add(key);
        }
        current = Object.getPrototypeOf(current);
    }
    return [...propertyKeys];
}
// ------------------------------------------------------------------
// IsIEEE754
//
// TypeBox guards do not consider +/- Infinity or NaN as valid
// numbers, but they are valid IEEE754 numbers. We use a special
// guard to ensure these numbers are considered for hashing.
//
// ------------------------------------------------------------------
function IsIEEE754(value) {
    return typeof value === 'number';
}
// ------------------------------------------------------------------
// ByteMarker
// ------------------------------------------------------------------
var ByteMarker;
(function (ByteMarker) {
    ByteMarker[ByteMarker["Array"] = 0] = "Array";
    ByteMarker[ByteMarker["BigInt"] = 1] = "BigInt";
    ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
    ByteMarker[ByteMarker["Date"] = 3] = "Date";
    ByteMarker[ByteMarker["Constructor"] = 4] = "Constructor";
    ByteMarker[ByteMarker["Function"] = 5] = "Function";
    ByteMarker[ByteMarker["Null"] = 6] = "Null";
    ByteMarker[ByteMarker["Number"] = 7] = "Number";
    ByteMarker[ByteMarker["Object"] = 8] = "Object";
    ByteMarker[ByteMarker["RegExp"] = 9] = "RegExp";
    ByteMarker[ByteMarker["String"] = 10] = "String";
    ByteMarker[ByteMarker["Symbol"] = 11] = "Symbol";
    ByteMarker[ByteMarker["TypeArray"] = 12] = "TypeArray";
    ByteMarker[ByteMarker["Undefined"] = 13] = "Undefined";
})(ByteMarker || (ByteMarker = {}));
// ------------------------------------------------------------------
// State
// ------------------------------------------------------------------
let Accumulator = BigInt('14695981039346656037');
const [Prime, Size] = [BigInt('1099511628211'), BigInt('18446744073709551616' /* 2 ^ 64 */)];
const Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
const F64 = new Float64Array(1);
const F64In = new DataView(F64.buffer);
const F64Out = new Uint8Array(F64.buffer);
// ------------------------------------------------------------------
// Operation
// ------------------------------------------------------------------
function FNV1A64_OP(byte) {
    Accumulator = Accumulator ^ Bytes[byte];
    Accumulator = (Accumulator * Prime) % Size;
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
function FromArray(value) {
    FNV1A64_OP(ByteMarker.Array);
    for (const item of value) {
        FromValue(item);
    }
}
// ------------------------------------------------------------------
// BigInt
// ------------------------------------------------------------------
function FromBigInt(value) {
    FNV1A64_OP(ByteMarker.BigInt);
    F64In.setBigInt64(0, value);
    for (const byte of F64Out) {
        FNV1A64_OP(byte);
    }
}
// ------------------------------------------------------------------
// Boolean
// ------------------------------------------------------------------
function FromBoolean(value) {
    FNV1A64_OP(ByteMarker.Boolean);
    FNV1A64_OP(value ? 1 : 0);
}
// ------------------------------------------------------------------
// Constructor
// ------------------------------------------------------------------
function FromConstructor(value) {
    FNV1A64_OP(ByteMarker.Constructor);
    FromValue(value.toString());
}
// ------------------------------------------------------------------
// Date
// ------------------------------------------------------------------
function FromDate(value) {
    FNV1A64_OP(ByteMarker.Date);
    FromValue(value.getTime());
}
// ------------------------------------------------------------------
// Function
// ------------------------------------------------------------------
function FromFunction(value) {
    FNV1A64_OP(ByteMarker.Function);
    FromValue(value.toString());
}
// ------------------------------------------------------------------
// Null
// ------------------------------------------------------------------
function FromNull(_value) {
    FNV1A64_OP(ByteMarker.Null);
}
// ------------------------------------------------------------------
// Number | IEEE754
// ------------------------------------------------------------------
function FromNumber(value) {
    FNV1A64_OP(ByteMarker.Number);
    F64In.setFloat64(0, value, true /* little-endian */);
    for (const byte of F64Out) {
        FNV1A64_OP(byte);
    }
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
function FromObject(value) {
    FNV1A64_OP(ByteMarker.Object);
    for (const key of InstanceKeys(value).sort()) {
        FromValue(key);
        FromValue(value[key]);
    }
}
// ------------------------------------------------------------------
// RegExp
// ------------------------------------------------------------------
function FromRegExp(value) {
    FNV1A64_OP(ByteMarker.RegExp);
    FromString(value.toString());
}
// ------------------------------------------------------------------
// String
// ------------------------------------------------------------------
const encoder = new TextEncoder();
function FromString(value) {
    FNV1A64_OP(ByteMarker.String);
    for (const byte of encoder.encode(value)) {
        FNV1A64_OP(byte);
    }
}
// ------------------------------------------------------------------
// Symbol
// ------------------------------------------------------------------
function FromSymbol(value) {
    FNV1A64_OP(ByteMarker.Symbol);
    FromValue(value.toString());
}
// ------------------------------------------------------------------
// TypeArray
// ------------------------------------------------------------------
function FromTypeArray(value) {
    FNV1A64_OP(ByteMarker.TypeArray);
    const buffer = new Uint8Array(value.buffer);
    for (let i = 0; i < buffer.length; i++) {
        FNV1A64_OP(buffer[i]);
    }
}
// ------------------------------------------------------------------
// Undefined
// ------------------------------------------------------------------
function FromUndefined(_value) {
    return FNV1A64_OP(ByteMarker.Undefined);
}
// ------------------------------------------------------------------
// Hash
//
// deno-coverage-ignore-start - unreachable
//
// This function should all JavaScript values so we can't reach the
// fall-through. We use Unreachable to assert that no values pass
// through. We will need to handle these should they arise.
//
// ------------------------------------------------------------------
function FromValue(value) {
    return (GlobalsGuard.IsTypeArray(value) ? FromTypeArray(value) :
        GlobalsGuard.IsDate(value) ? FromDate(value) :
            GlobalsGuard.IsRegExp(value) ? FromRegExp(value) :
                GlobalsGuard.IsBoolean(value) ? FromBoolean(value.valueOf()) :
                    GlobalsGuard.IsString(value) ? FromString(value.valueOf()) :
                        GlobalsGuard.IsNumber(value) ? FromNumber(value.valueOf()) :
                            IsIEEE754(value) ? FromNumber(value) :
                                Guard.IsArray(value) ? FromArray(value) :
                                    Guard.IsBoolean(value) ? FromBoolean(value) :
                                        Guard.IsBigInt(value) ? FromBigInt(value) :
                                            Guard.IsConstructor(value) ? FromConstructor(value) :
                                                Guard.IsNull(value) ? FromNull(value) :
                                                    Guard.IsObject(value) ? FromObject(value) :
                                                        Guard.IsString(value) ? FromString(value) :
                                                            Guard.IsSymbol(value) ? FromSymbol(value) :
                                                                Guard.IsUndefined(value) ? FromUndefined(value) :
                                                                    Guard.IsFunction(value) ? FromFunction(value) :
                                                                        Unreachable());
}
// deno-coverage-ignore-stop
// ------------------------------------------------------------------
// Hash
// ------------------------------------------------------------------
/** Generates a FNV1A-64 non cryptographic hash of the given value */
export function HashCode(value) {
    Accumulator = BigInt('14695981039346656037');
    FromValue(value);
    return Accumulator;
}
/** Generates a FNV1A-64 non cryptographic hash of the given value */
export function Hash(value) {
    return HashCode(value).toString(16).padStart(16, '0');
}
