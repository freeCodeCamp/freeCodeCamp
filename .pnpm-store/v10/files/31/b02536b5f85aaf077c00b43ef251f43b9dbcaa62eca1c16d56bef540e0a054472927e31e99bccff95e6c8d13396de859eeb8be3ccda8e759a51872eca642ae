// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ConstructorParametersAction } from '../engine/constructor_parameters/instantiate.mjs';
/** Creates a deferred ConstructorParameters action. */
export function ConstructorParametersDeferred(type, options = {}) {
    return Deferred('ConstructorParameters', [type], options);
}
/** Applies a ConstructorParameters action to a type. */
export function ConstructorParameters(type, options = {}) {
    return ConstructorParametersAction(type, options);
}
