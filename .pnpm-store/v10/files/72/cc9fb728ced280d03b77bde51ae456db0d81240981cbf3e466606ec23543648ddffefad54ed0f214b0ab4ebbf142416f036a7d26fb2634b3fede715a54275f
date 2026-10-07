// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ExcludeAction } from '../engine/exclude/instantiate.mjs';
/** Creates a deferred Exclude action. */
export function ExcludeDeferred(left, right, options = {}) {
    return Deferred('Exclude', [left, right], options);
}
/** Applies a Exclude action using the given types */
export function Exclude(left, right, options = {}) {
    return ExcludeAction(left, right, options);
}
