// deno-fmt-ignore-file
import { Deferred } from '../types/deferred.mjs';
import { ReadonlyObjectAction } from '../engine/readonly_object/instantiate.mjs';
/** Creates a deferred ReadonlyType action. */
export function ReadonlyObjectDeferred(type, options = {}) {
    return Deferred('ReadonlyObject', [type], options);
}
/** This type is an alias for TypeScript's `Readonly<T>` utility type. It will make all properties of a TObject readonly or marks an TArray or TTuple as immutable `readonly T[]`. */
export function ReadonlyObject(type, options = {}) {
    return ReadonlyObjectAction(type, options);
}
/**
 * This type has been renamed to ReadonlyObject.
 * @deprecated
*/
export const ReadonlyType = ReadonlyObject;
