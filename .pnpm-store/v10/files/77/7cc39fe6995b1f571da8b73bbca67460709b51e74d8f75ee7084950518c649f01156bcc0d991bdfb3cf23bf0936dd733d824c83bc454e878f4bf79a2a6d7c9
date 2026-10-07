// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ConditionalAction } from '../engine/conditional/instantiate.mjs';
/** Creates a deferred Conditional action. */
export function ConditionalDeferred(left, right, true_, false_, options = {}) {
    return Deferred('Conditional', [left, right, true_, false_], options);
}
/** Applies a Conditional action to the given types. */
export function Conditional(left, right, true_, false_, options = {}) {
    return ConditionalAction({}, { callstack: [] }, left, right, true_, false_, options);
}
