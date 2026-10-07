// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ExtractAction } from '../engine/extract/instantiate.mjs';
/** Creates a deferred Extract action. */
export function ExtractDeferred(left, right, options = {}) {
    return Deferred('Extract', [left, right], options);
}
/** Applies an Extract action using the given types. */
export function Extract(left, right, options = {}) {
    return ExtractAction(left, right, options);
}
