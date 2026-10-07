// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { OptionsAction } from '../engine/options/instantiate.mjs';
/** Creates a deferred Options action. */
export function OptionsDeferred(type, options) {
    return Deferred('Options', [type, options], {});
}
/** Applies an immediate Options action to the given type. */
export function Options(type, options) {
    return OptionsAction(type, options);
}
