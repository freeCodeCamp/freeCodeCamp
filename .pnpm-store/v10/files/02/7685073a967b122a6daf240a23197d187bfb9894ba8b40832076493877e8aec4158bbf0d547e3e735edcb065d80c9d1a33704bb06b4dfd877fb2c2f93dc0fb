import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TExcludeAction } from '../engine/exclude/instantiate.mjs';
/** Creates a deferred Exclude action. */
export type TExcludeDeferred<Left extends TSchema, Right extends TSchema> = (TDeferred<'Exclude', [Left, Right]>);
/** Creates a deferred Exclude action. */
export declare function ExcludeDeferred<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options?: TSchemaOptions): TExcludeDeferred<Left, Right>;
/** Applies a Exclude action using the given types */
export type TExclude<Left extends TSchema, Right extends TSchema> = (TExcludeAction<Left, Right>);
/** Applies a Exclude action using the given types */
export declare function Exclude<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options?: TSchemaOptions): TExclude<Left, Right>;
