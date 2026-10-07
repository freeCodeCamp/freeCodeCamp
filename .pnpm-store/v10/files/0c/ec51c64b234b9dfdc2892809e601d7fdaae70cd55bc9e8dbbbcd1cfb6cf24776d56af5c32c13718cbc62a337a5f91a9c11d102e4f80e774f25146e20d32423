import { type TSchema } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TCyclic } from '../../types/cyclic.mjs';
import { type TObject } from '../../types/object.mjs';
import { type TCyclicDependencies } from '../cyclic/dependencies.mjs';
import { type TInterfaceDeferred } from '../../action/index.mjs';
import { type TInstantiateProperties } from '../instantiate.mjs';
import { type TInstantiateTypes } from '../instantiate.mjs';
import { type TEvaluateIntersect } from '../evaluate/evaluate.mjs';
type TCyclicInterface<Context extends TProperties, Heritage extends TSchema[], Properties extends TProperties, InstantiatedHeritage extends TSchema[] = TInstantiateTypes<Context, {
    callstack: [];
}, Heritage>, instantiatedProperties extends TProperties = TInstantiateProperties<{}, {
    callstack: [];
}, Properties>, EvaluatedInterface extends TSchema = TEvaluateIntersect<[...InstantiatedHeritage, TObject<instantiatedProperties>]>> = EvaluatedInterface;
type TCyclicDefinitions<Context extends TProperties, Dependencies extends string[], Result extends TProperties = {
    [Key in Extract<keyof Context, Dependencies[number]>]: Context[Key] extends TInterfaceDeferred<infer Heritage extends TSchema[], infer Properties extends TProperties> ? TCyclicInterface<Context, Heritage, Properties> : Context[Key];
}> = Result;
export type TInstantiateCyclic<Context extends TProperties, Ref extends string, Type extends TSchema, Dependencies extends string[] = TCyclicDependencies<Context, Ref, Type>, Definitions extends TProperties = TCyclicDefinitions<Context, Dependencies>, Result extends TSchema = TCyclic<Definitions, Ref>> = Result;
export declare function InstantiateCyclic<Context extends TProperties, Ref extends string, Type extends TSchema>(context: Context, ref: Ref, type: Type): TInstantiateCyclic<Context, Ref, Type>;
export {};
