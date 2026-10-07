import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TCapitalizeAction } from '../engine/intrinsics/instantiate.mjs';
/** Creates a deferred Capitalize action. */
export type TCapitalizeDeferred<Type extends TSchema> = (TDeferred<'Capitalize', [Type]>);
/** Creates a deferred Capitalize action. */
export declare function CapitalizeDeferred<Type extends TSchema>(type: Type, options?: TSchemaOptions): TCapitalizeDeferred<Type>;
/** Applies a Capitalize action to the given type. */
export type TCapitalize<Type extends TSchema> = (TCapitalizeAction<Type>);
/** Applies a Capitalize action to the given type. */
export declare function Capitalize<Type extends TSchema>(type: Type, options?: TSchemaOptions): TCapitalize<Type>;
