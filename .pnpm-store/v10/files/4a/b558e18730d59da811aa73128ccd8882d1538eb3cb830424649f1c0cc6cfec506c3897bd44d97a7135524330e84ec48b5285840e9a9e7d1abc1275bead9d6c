import { type TSchemaOptions } from '../types/schema.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TInstantiate } from '../engine/instantiate.mjs';
/** Creates a deferred Module action. */
export type TModuleDeferred<Context extends TProperties> = (TDeferred<'Module', [Context]>);
/** Creates a deferred Module action. */
export declare function ModuleDeferred<Context extends TProperties>(context: Context, options?: TSchemaOptions): TModuleDeferred<Context>;
/** Applies a Module transformation action to the embedded property types. */
export type TModule<Context extends TProperties> = (TInstantiate<{}, TModuleDeferred<Context>>);
/** Applies a Module transformation action to the embedded property types. */
export declare function Module<Context extends TProperties>(context: Context, options?: TSchemaOptions): TModule<Context>;
