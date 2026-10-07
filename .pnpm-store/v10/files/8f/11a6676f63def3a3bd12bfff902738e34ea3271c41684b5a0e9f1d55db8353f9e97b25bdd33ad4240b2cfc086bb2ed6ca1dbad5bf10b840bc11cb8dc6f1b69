// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { MappedAction } from '../engine/mapped/instantiate.mjs';
/** Creates a deferred Mapped action. */
export function MappedDeferred(identifier, type, as, property, options = {}) {
    return Deferred('Mapped', [identifier, type, as, property], options);
}
/** Applies a Mapped action using the given types. */
export function Mapped(identifier, type, as, property, options = {}) {
    return MappedAction({}, { callstack: [] }, identifier, type, as, property, options);
}
