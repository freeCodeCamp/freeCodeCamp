// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Metrics } from './metrics.mjs';
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
function IsGuard(value) {
    return Guard.IsObject(value) && Guard.HasPropertyKey(value, '~guard');
}
function FromGuard(value) {
    return value; // non-clonable
}
// ------------------------------------------------------------------
// Array
// ------------------------------------------------------------------
function FromArray(value) {
    return value.map((value) => FromValue(value));
}
// ------------------------------------------------------------------
// Object
// ------------------------------------------------------------------
function FromObject(value) {
    const result = {};
    const descriptors = Object.getOwnPropertyDescriptors(value);
    for (const key of Object.keys(descriptors)) {
        const descriptor = descriptors[key];
        if (Guard.HasPropertyKey(descriptor, 'value')) {
            Object.defineProperty(result, key, { ...descriptor, value: FromValue(descriptor.value) });
        }
    }
    return result;
}
// ------------------------------------------------------------------
// RegExp
// ------------------------------------------------------------------
function FromRegExp(value) {
    return new RegExp(value.source, value.flags);
}
// ------------------------------------------------------------------
// RegExp
// ------------------------------------------------------------------
function FromUnknown(value) {
    return value;
}
// ------------------------------------------------------------------
// Value
// ------------------------------------------------------------------
function FromValue(value) {
    return (value instanceof RegExp ? FromRegExp(value) :
        IsGuard(value) ? FromGuard(value) :
            Guard.IsArray(value) ? FromArray(value) :
                Guard.IsObject(value) ? FromObject(value) :
                    FromUnknown(value));
}
/**
 * Clones a value using the TypeBox type cloning strategy. This function preserves non-enumerable
 * properties from the source value. This is to ensure cloned types retain discriminable
 * hidden properties.
 */
export function Clone(value) {
    Metrics.clone += 1;
    return FromValue(value);
}
