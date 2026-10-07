import { type TSchema, type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
import { type TInterfaceDeferred } from '../../action/index.mjs';
import { type TState, type TCanInstantiate } from '../instantiate.mjs';
import { type TInstantiateProperties } from '../instantiate.mjs';
import { type TInstantiateTypes } from '../instantiate.mjs';
type TInterfaceOperation<Heritage extends TSchema[], Properties extends TProperties, Result extends TSchema = TEvaluateIntersect<[...Heritage, TObject<Properties>]>> = Result;
export type TInterfaceAction<Heritage extends TSchema[], Properties extends TProperties, Result extends TSchema = TCanInstantiate<Heritage> extends true ? TInterfaceOperation<Heritage, Properties> : TInterfaceDeferred<Heritage, Properties>> = Result;
export declare function InterfaceAction<Heritage extends TSchema[], Properties extends TProperties>(heritage: [...Heritage], properties: Properties, options: TSchemaOptions): TInterfaceAction<Heritage, Properties>;
export type TInterfaceInstantiate<Context extends TProperties, State extends TState, Heritage extends TSchema[], Properties extends TProperties, InstantiatedHeritage extends TSchema[] = TInstantiateTypes<Context, {
    callstack: [];
}, Heritage>, InstantiatedProperties extends TProperties = TInstantiateProperties<Context, {
    callstack: [];
}, Properties>> = TInterfaceAction<InstantiatedHeritage, InstantiatedProperties>;
export declare function InterfaceInstantiate<Context extends TProperties, State extends TState, Heritage extends TSchema[], Properties extends TProperties>(context: Context, state: State, heritage: [...Heritage], properties: Properties, options: TSchemaOptions): TInterfaceInstantiate<Context, State, Heritage, Properties>;
export {};
