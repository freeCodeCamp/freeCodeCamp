import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TUppercaseAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Uppercase action. */
export type TUppercaseDeferred<Type extends TSchema> = (TDeferred<'Uppercase', [Type]>);
/** Creates a deferred Uppercase action. */
export declare function UppercaseDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TUppercaseDeferred<Type>;
/** Applies a Uppercase action to the given type. */
export type TUppercase<Type extends TSchema> = (TUppercaseAction<Type>);
/** Applies a Uppercase action to the given type. */
export declare function Uppercase<Type extends TSchema>(type: Type, options?: TSchemaOptions): TUppercase<Type>;
