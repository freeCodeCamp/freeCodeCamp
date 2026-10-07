import { Memory } from '../../../system/memory/index.mjs';
import { type TSchemaOptions } from '../../types/schema.mjs';
import { type TProperties } from '../../types/properties.mjs';
import { type TState } from '../instantiate.mjs';
import { type TCyclicCandidates } from '../cyclic/candidates.mjs';
import { type TInstantiateCyclic } from '../cyclic/instantiate.mjs';
import { type TInstantiateType } from '../instantiate.mjs';
type TInstantiateCyclics<Context extends TProperties, CyclicKeys extends string[], Result extends TProperties = {
    [Key in Extract<keyof Context, CyclicKeys[number]>]: TInstantiateCyclic<Context, Key, Context[Key]>;
}> = Result;
type TInstantiateNonCyclics<Context extends TProperties, CyclicKeys extends string[], Result extends TProperties = {
    [Key in Exclude<keyof Context, CyclicKeys[number]>]: TInstantiateType<Context, {
        callstack: [];
    }, Context[Key]>;
}> = Result;
type TInstantiateModule<Context extends TProperties, CyclicCandidates extends string[] = TCyclicCandidates<Context>, InstantiatedCyclics extends TProperties = TInstantiateCyclics<Context, CyclicCandidates>, InstantiatedNonCyclics extends TProperties = TInstantiateNonCyclics<Context, CyclicCandidates>, InstantiatedModule extends TProperties = InstantiatedCyclics & InstantiatedNonCyclics> = {
    [Key in keyof InstantiatedModule]: InstantiatedModule[Key];
} & {};
export type TModuleInstantiate<Context extends TProperties, _State extends TState, Properties extends TProperties, ModuleContext extends TProperties = Memory.TAssign<Context, Properties>, InstantiatedModule extends TProperties = TInstantiateModule<ModuleContext>> = InstantiatedModule;
export declare function ModuleInstantiate<Context extends TProperties, State extends TState, Properties extends TProperties>(context: Context, _state: State, properties: Properties, options: TSchemaOptions): TModuleInstantiate<Context, State, Properties>;
export {};
