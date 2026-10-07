import { type TSchema, type TSchemaOptions } from './schema.mjs';
/** Represents a deferred action. */
export interface TDeferred<Action extends string = string, Types extends TSchema[] = TSchema[]> extends TSchema {
    '~kind': 'Deferred';
    action: Action;
    parameters: Types;
    options: TSchemaOptions;
}
/** Creates a Deferred action. */
export declare function Deferred<Action extends string, Types extends TSchema[]>(action: Action, parameters: [...Types], options: TSchemaOptions): TDeferred<Action, Types>;
/** Returns true if the given value is a TDeferred. */
export declare function IsDeferred(value: unknown): value is TDeferred;
