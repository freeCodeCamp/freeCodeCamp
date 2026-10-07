// deno-fmt-ignore-file
import { Guard, GlobalsGuard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// ClassInstance
//
// TypeBox does not support cloning arbitrary class instances. It treats
// class instances as atomic values, similar to number, boolean, and
// string. In the future, an implementation could detect the presence of
// a .clone() method, but no formal specification for this behavior
// exists, so we don't.
//
// ------------------------------------------------------------------
function FromClassInstance(value) {
    return value; // atomic
}
// ------------------------------------------------------------------
// ObjectInstance
// ------------------------------------------------------------------
function FromObjectInstance(value) {
    const result = {};
    for (const key of Object.getOwnPropertyNames(value)) {
        result[key] = Clone(value[key]);
    }
    for (const key of Object.getOwnPropertySymbols(value)) {
        result[key] = Clone(value[key]);
    }
    return result;
}
Object.create({});
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
function FromObject(value) {
    return (Guard.IsClassInstance(value)
        ? FromClassInstance(value)
        : FromObjectInstance(value));
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
function FromArray(value) {
    return value.map((element) => Clone(element));
}
// ------------------------------------------------------------------
// TypeArray
// ------------------------------------------------------------------
function FromTypedArray(value) {
    return value.slice();
}
// ------------------------------------------------------------------
// Map
// ------------------------------------------------------------------
function FromMap(value) {
    return new Map(Clone([...value.entries()]));
}
// ------------------------------------------------------------------
// Set
// ------------------------------------------------------------------
function FromSet(value) {
    return new Set(Clone([...value.values()]));
}
// ------------------------------------------------------------------
// Value
// ------------------------------------------------------------------
function FromValue(value) {
    return value;
}
// ------------------------------------------------------------------
// Clone
// ------------------------------------------------------------------
/**
 * Returns a Clone of the given value. This function is similar to structuredClone()
 * but also supports deep cloning instances of Map, Set and TypeArray.
 */
export function Clone(value) {
    return (GlobalsGuard.IsTypeArray(value) ? FromTypedArray(value) :
        GlobalsGuard.IsMap(value) ? FromMap(value) :
            GlobalsGuard.IsSet(value) ? FromSet(value) :
                Guard.IsArray(value) ? FromArray(value) :
                    Guard.IsObject(value) ? FromObject(value) :
                        FromValue(value));
}
