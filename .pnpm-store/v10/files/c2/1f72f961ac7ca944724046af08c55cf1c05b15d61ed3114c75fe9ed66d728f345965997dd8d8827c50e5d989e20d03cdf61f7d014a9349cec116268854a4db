// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { KeyOfAction } from '../engine/keyof/instantiate.mjs';
/** Creates a deferred KeyOf action. */
export function KeyOfDeferred(type, options = {}) {
    return Deferred('KeyOf', [type], options);
}
/** Applies a KeyOf action to the given type. */
export function KeyOf(type, options = {}) {
    return KeyOfAction(type, options);
}
