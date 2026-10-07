// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { Instantiate } from '../engine/instantiate.mjs';
/** Creates a deferred Module action. */
export function ModuleDeferred(context, options = {}) {
    return Deferred('Module', [context], options);
}
/** Applies a Module transformation action to the embedded property types. */
export function Module(context, options = {}) {
    return Instantiate({}, ModuleDeferred(context, options));
}
