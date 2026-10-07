import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TConstructorParametersAction } from '../engine/constructor_parameters/instantiate.mjs';
/** Creates a deferred ConstructorParameters action. */
export type TConstructorParametersDeferred<Type extends TSchema> = (TDeferred<'ConstructorParameters', [Type]>);
/** Creates a deferred ConstructorParameters action. */
export declare function ConstructorParametersDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TConstructorParametersDeferred<Type>;
/** Applies a ConstructorParameters action to a type. */
export type TConstructorParameters<Type extends TSchema> = (TConstructorParametersAction<Type>);
/** Applies a ConstructorParameters action to a type. */
export declare function ConstructorParameters<Type extends TSchema>(type: Type, options?: TSchemaOptions): TConstructorParameters<Type>;
