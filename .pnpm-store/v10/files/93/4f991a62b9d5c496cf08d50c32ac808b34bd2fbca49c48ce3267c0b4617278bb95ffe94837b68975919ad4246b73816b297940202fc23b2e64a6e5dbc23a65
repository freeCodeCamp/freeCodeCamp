import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TTemplateLiteralDeferred } from '../../types/template_literal.mjs';
import { type TTemplateLiteralEncode } from './encode.mjs';
import { type TState, type TInstantiateTypes, type TCanInstantiate } from '../instantiate.mjs';
export type TTemplateLiteralAction<Types extends TSchema[], Result extends TSchema = TCanInstantiate<Types> extends true ? TTemplateLiteralEncode<Types> : TTemplateLiteralDeferred<Types>> = Result;
export declare function TemplateLiteralAction<Types extends TSchema[]>(types: [...Types], options: TSchemaOptions): TTemplateLiteralAction<Types>;
export type TTemplateLiteralInstantiate<Context extends TProperties, State extends TState, Types extends TSchema[], InstantiatedTypes extends TSchema[] = TInstantiateTypes<Context, State, Types>> = TTemplateLiteralAction<InstantiatedTypes>;
export declare function TemplateLiteralInstantiate<Context extends TProperties, State extends TState, Types extends TSchema[]>(context: Context, state: State, types: [...Types], options: TSchemaOptions): TTemplateLiteralInstantiate<Context, State, Types>;
