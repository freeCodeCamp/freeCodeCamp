// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { AwaitedAction } from '../engine/awaited/instantiate.mjs';
/** Creates a deferred Awaited action. */
export function AwaitedDeferred(type, options = {}) {
    return Deferred('Awaited', [type], options);
}
/**
 * Applies an Awaited action to a type.
 *
 * @deprecated This action is being removed in the next version of TypeBox.
 */
export function Awaited(type, options = {}) {
    return AwaitedAction(type, options);
}
