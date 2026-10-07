import { type TProperties } from '../../types/properties.mjs';
import { type TSchema } from '../../types/schema.mjs';
import { type TState, type TInstantiateType, type TCanInstantiate } from '../instantiate.mjs';
import { type TOptionsDeferred, type TOptions } from '../../action/options.mjs';
export type TOptionsAction<Type extends TSchema, Options extends TSchema, Result extends TSchema = TCanInstantiate<[Type]> extends true ? TOptions<Type, Options> : TOptionsDeferred<Type, Options>> = Result;
export declare function OptionsAction<Type extends TSchema, Options extends TSchema>(type: Type, options: Options): TOptionsAction<Type, Options>;
export type TOptionsInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Options extends TSchema, InstantiatedType extends TSchema = TInstantiateType<Context, State, Type>> = TOptionsAction<InstantiatedType, Options>;
export declare function OptionsInstantiate<Context extends TProperties, State extends TState, Type extends TSchema, Options extends TSchema>(context: Context, state: State, type: Type, options: Options): TOptionsInstantiate<Context, State, Type, Options>;
