import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TInstanceTypeAction } from '../engine/instance_type/instantiate.mjs';
/** Creates a deferred InstanceType action. */
export type TInstanceTypeDeferred<Type extends TSchema> = (TDeferred<'InstanceType', [Type]>);
/** Creates a deferred InstanceType action. */
export declare function InstanceTypeDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TInstanceTypeDeferred<Type>;
/** Applies a InstanceType action to the given type. */
export type TInstanceType<Type extends TSchema> = (TInstanceTypeAction<Type>);
/** Applies a InstanceType action to the given type. */
export declare function InstanceType<Type extends TSchema>(type: Type, options?: TSchemaOptions): TInstanceType<Type>;
