import { type TSchema, type TSchemaOptions } from '../types/schema.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TConditionalAction } from '../engine/conditional/instantiate.mjs';
/** Creates a deferred Conditional action. */
export type TConditionalDeferred<Left extends TSchema, Right extends TSchema, True extends TSchema, False extends TSchema> = (TDeferred<'Conditional', [Left, Right, True, False]>);
/** Creates a deferred Conditional action. */
export declare function ConditionalDeferred<Left extends TSchema, Right extends TSchema, True extends TSchema, False extends TSchema>(left: Left, right: Right, true_: True, false_: False, options?: TSchemaOptions): TConditionalDeferred<Left, Right, True, False>;
/** Applies a Conditional action to the given types. */
export type TConditional<Left extends TSchema, Right extends TSchema, True extends TSchema, False extends TSchema> = (TConditionalAction<{}, {
    callstack: [];
}, Left, Right, True, False>);
/** Applies a Conditional action to the given types. */
export declare function Conditional<Left extends TSchema, Right extends TSchema, True extends TSchema, False extends TSchema>(left: Left, right: Right, true_: True, false_: False, options?: TSchemaOptions): TConditional<Left, Right, True, False>;
