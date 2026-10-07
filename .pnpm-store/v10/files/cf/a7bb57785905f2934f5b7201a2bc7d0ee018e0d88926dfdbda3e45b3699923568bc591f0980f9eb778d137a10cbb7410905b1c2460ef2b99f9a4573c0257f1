import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TRequiredAction } from '../engine/required/instantiate.mjs';
/** Creates a deferred Required action. */
export type TRequiredDeferred<Type extends TSchema> = (TDeferred<'Required', [Type]>);
/** Creates a deferred Required action. */
export declare function RequiredDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TDeferred<"Required", [Type]>;
/** Applies a Required action to the given type. */
export type TRequired<Type extends TSchema> = (TRequiredAction<Type>);
/** Applies a Required action to the given type. */
export declare function Required<Type extends TSchema>(type: Type, options?: TSchemaOptions): TRequired<Type>;
