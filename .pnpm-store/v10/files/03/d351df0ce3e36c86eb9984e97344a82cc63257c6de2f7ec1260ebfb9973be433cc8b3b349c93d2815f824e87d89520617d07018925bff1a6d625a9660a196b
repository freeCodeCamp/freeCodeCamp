import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TNonNullableAction } from '../engine/non_nullable/instantiate.mjs';
/** Creates a deferred NonNullable action. */
export type TNonNullableDeferred<Type extends TSchema> = (TDeferred<'NonNullable', [Type]>);
/** Creates a deferred NonNullable action. */
export declare function NonNullableDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TNonNullableDeferred<Type>;
/** Applies a NonNullable action to the given type. */
export type TNonNullable<Type extends TSchema> = (TNonNullableAction<Type>);
/** Applies a NonNullable action to the given type. */
export declare function NonNullable<Type extends TSchema>(type: Type, options?: TSchemaOptions): TNonNullable<Type>;
