// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsOptional } from './_optional.mjs';
/** Creates a RequiredArray derived from the given TProperties value. */
export function RequiredArray(properties) {
    return Guard.Keys(properties).filter((key) => !IsOptional(properties[key]));
}
/** Extracts a tuple of keys from a TProperties value. */
export function PropertyKeys(properties) {
    return Guard.Keys(properties);
}
/** Extracts a tuple of property values from a TProperties value. */
export function PropertyValues(properties) {
    return Guard.Values(properties);
}
