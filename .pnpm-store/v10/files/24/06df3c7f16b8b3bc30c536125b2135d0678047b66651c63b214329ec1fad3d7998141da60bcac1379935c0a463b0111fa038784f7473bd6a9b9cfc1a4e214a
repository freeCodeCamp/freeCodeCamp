import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TKeyOfAction } from '../engine/keyof/instantiate.mjs';
/** Creates a deferred KeyOf action. */
export type TKeyOfDeferred<Type extends TSchema> = (TDeferred<'KeyOf', [Type]>);
/** Creates a deferred KeyOf action. */
export declare function KeyOfDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TKeyOfDeferred<Type>;
/** Applies a KeyOf action to the given type. */
export type TKeyOf<Type extends TSchema> = (TKeyOfAction<Type>);
/** Applies a KeyOf action to the given type. */
export declare function KeyOf<Type extends TSchema>(type: Type, options?: TSchemaOptions): TKeyOf<Type>;
