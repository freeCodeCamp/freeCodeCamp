// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ParametersAction } from '../engine/parameters/instantiate.mjs';
/** Creates a deferred Parameters action. */
export function ParametersDeferred(type, options = {}) {
    return Deferred('Parameters', [type], options);
}
/** Applies a Parameters action to the given type. */
export function Parameters(type, options = {}) {
    return ParametersAction(type, options);
}
