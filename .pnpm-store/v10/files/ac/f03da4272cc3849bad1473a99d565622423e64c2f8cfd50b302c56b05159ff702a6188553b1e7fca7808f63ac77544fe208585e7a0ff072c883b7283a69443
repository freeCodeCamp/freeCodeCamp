import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TExcludeDeferred } from '../../action/exclude.mjs';
import { type TExcludeOperation } from './operation.mjs';
export type TExcludeAction<Left extends TSchema, Right extends TSchema, Result extends TSchema = TCanInstantiate<[Left, Right]> extends true ? TExcludeOperation<Left, Right> : TExcludeDeferred<Left, Right>> = Result;
export declare function ExcludeAction<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options: TSchemaOptions): TExcludeAction<Left, Right>;
export type TExcludeInstantiate<Context extends TProperties, State extends TState, Left extends TSchema, Right extends TSchema, InstantiatedLeft extends TSchema = TInstantiateType<Context, State, Left>, InstantiatedRight extends TSchema = TInstantiateType<Context, State, Right>> = TExcludeAction<InstantiatedLeft, InstantiatedRight>;
export declare function ExcludeInstantiate<Context extends TProperties, State extends TState, Left extends TSchema, Right extends TSchema>(context: Context, state: State, left: Left, right: Right, options: TSchemaOptions): TExcludeInstantiate<Context, State, Left, Right>;
