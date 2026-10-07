import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TExtractAction } from '../engine/extract/instantiate.mjs';
/** Creates a deferred Extract action. */
export type TExtractDeferred<Left extends TSchema, Right extends TSchema> = (TDeferred<'Extract', [Left, Right]>);
/** Creates a deferred Extract action. */
export declare function ExtractDeferred<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options?: TSchemaOptions): TExtractDeferred<Left, Right>;
/** Applies an Extract action using the given types. */
export type TExtract<Left extends TSchema, Right extends TSchema> = (TExtractAction<Left, Right>);
/** Applies an Extract action using the given types. */
export declare function Extract<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options?: TSchemaOptions): TExtract<Left, Right>;
