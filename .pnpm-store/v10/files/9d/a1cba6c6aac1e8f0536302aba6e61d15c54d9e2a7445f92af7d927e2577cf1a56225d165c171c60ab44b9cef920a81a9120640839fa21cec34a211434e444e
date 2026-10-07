import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TExtractDeferred } from '../../action/extract.mjs';
import { type TExtractOperation } from './operation.mjs';
export type TExtractAction<Left extends TSchema, Right extends TSchema, Result extends TSchema = TCanInstantiate<[Left, Right]> extends true ? TExtractOperation<Left, Right> : TExtractDeferred<Left, Right>> = Result;
export declare function ExtractAction<Left extends TSchema, Right extends TSchema>(left: Left, right: Right, options: TSchemaOptions): TExtractAction<Left, Right>;
export type TExtractInstantiate<Context extends TProperties, State extends TState, Left extends TSchema, Right extends TSchema, InstantiatedLeft extends TSchema = TInstantiateType<Context, State, Left>, InstantiatedRight extends TSchema = TInstantiateType<Context, State, Right>> = TExtractAction<InstantiatedLeft, InstantiatedRight>;
export declare function ExtractInstantiate<Context extends TProperties, State extends TState, Left extends TSchema, Right extends TSchema>(context: Context, state: State, left: Left, right: Right, options: TSchemaOptions): TExtractInstantiate<Context, State, Left, Right>;
