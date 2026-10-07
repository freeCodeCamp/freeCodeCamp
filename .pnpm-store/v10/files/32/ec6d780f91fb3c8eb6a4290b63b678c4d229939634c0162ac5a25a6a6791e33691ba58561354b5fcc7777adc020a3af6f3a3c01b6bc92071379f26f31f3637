import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TReadonlyObjectAction } from '../engine/readonly_object/instantiate.mjs';
/** Creates a deferred ReadonlyType action. */
export type TReadonlyObjectDeferred<Type extends TSchema> = (TDeferred<'ReadonlyObject', [Type]>);
/** Creates a deferred ReadonlyType action. */
export declare function ReadonlyObjectDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TDeferred<"ReadonlyObject", [Type]>;
/** This type is an alias for TypeScript's `Readonly<T>` utility type. It will make all properties of a TObject readonly or marks an TArray or TTuple as immutable `readonly T[]`. */
export type TReadonlyObject<Type extends TSchema> = (TReadonlyObjectAction<Type>);
/** This type is an alias for TypeScript's `Readonly<T>` utility type. It will make all properties of a TObject readonly or marks an TArray or TTuple as immutable `readonly T[]`. */
export declare function ReadonlyObject<Type extends TSchema>(type: Type, options?: TSchemaOptions): TReadonlyObject<Type>;
/**
 * This type has been renamed to ReadonlyObject.
 * @deprecated
*/
export declare const ReadonlyType: typeof ReadonlyObject;
