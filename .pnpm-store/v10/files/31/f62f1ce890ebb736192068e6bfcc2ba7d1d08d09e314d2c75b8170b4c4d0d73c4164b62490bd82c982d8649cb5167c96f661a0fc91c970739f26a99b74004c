import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TParametersAction } from '../engine/parameters/instantiate.mjs';
/** Creates a deferred Parameters action. */
export type TParametersDeferred<Type extends TSchema> = (TDeferred<'Parameters', [Type]>);
/** Creates a deferred Parameters action. */
export declare function ParametersDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TParametersDeferred<Type>;
/** Applies a Parameters action to the given type. */
export type TParameters<Type extends TSchema> = (TParametersAction<Type>);
/** Applies a Parameters action to the given type. */
export declare function Parameters<Type extends TSchema>(type: Type, options?: TSchemaOptions): TParameters<Type>;
