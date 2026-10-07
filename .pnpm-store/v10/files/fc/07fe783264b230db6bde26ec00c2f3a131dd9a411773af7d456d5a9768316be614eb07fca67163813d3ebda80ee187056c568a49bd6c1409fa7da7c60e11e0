import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TLowercaseAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Lowercase action. */
export type TLowercaseDeferred<Type extends TSchema> = (TDeferred<'Lowercase', [Type]>);
/** Creates a deferred Lowercase action. */
export declare function LowercaseDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TLowercaseDeferred<Type>;
/** Applies a Lowercase action to the given type. */
export type TLowercase<Type extends TSchema> = (TLowercaseAction<Type>);
/** Applies a Lowercase action to the given type. */
export declare function Lowercase<Type extends TSchema>(type: Type, options?: TSchemaOptions): TLowercase<Type>;
