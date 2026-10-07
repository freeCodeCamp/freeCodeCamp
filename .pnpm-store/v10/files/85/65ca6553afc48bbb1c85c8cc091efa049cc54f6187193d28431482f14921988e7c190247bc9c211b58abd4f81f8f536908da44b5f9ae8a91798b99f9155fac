import { type TImmutable } from '../types/_immutable.mjs';
import { type TOptional, type TOptionalAdd, type TOptionalRemove } from '../types/_optional.mjs';
import { type TReadonly, type TReadonlyAdd, type TReadonlyRemove } from '../types/_readonly.mjs';
import { type TSchema } from '../types/schema.mjs';
import { type TArray } from '../types/array.mjs';
import { type TAsyncIterator } from '../types/async_iterator.mjs';
import { type TConstructor } from '../types/constructor.mjs';
import { type TDeferred } from '../types/deferred.mjs';
import { type TFunction } from '../types/function.mjs';
import { type TCall } from '../types/call.mjs';
import { type TIdentifier } from '../types/identifier.mjs';
import { type TIntersect } from '../types/intersect.mjs';
import { type TIterator } from '../types/iterator.mjs';
import { type TObject } from '../types/object.mjs';
import { type TPromise } from '../types/promise.mjs';
import { type TProperties } from '../types/properties.mjs';
import { type TRecord } from '../types/record.mjs';
import { type TTuple } from '../types/tuple.mjs';
import { type TUnion } from '../types/union.mjs';
import { type TRef } from '../types/ref.mjs';
import { type TRest } from '../types/rest.mjs';
import { type TReadonlyAddAction, type TReadonlyRemoveAction } from '../action/_readonly.mjs';
import { type TOptionalAddAction, type TOptionalRemoveAction } from '../action/_optional.mjs';
import { type TAwaitedInstantiate } from './awaited/instantiate.mjs';
import { type TCallInstantiate } from './call/instantiate.mjs';
import { type TCapitalizeInstantiate } from './intrinsics/instantiate.mjs';
import { type TConditionalInstantiate } from './conditional/index.mjs';
import { type TConstructorParametersInstantiate } from './constructor_parameters/instantiate.mjs';
import { type TEvaluateInstantiate } from './evaluate/instantiate.mjs';
import { type TExcludeInstantiate } from './exclude/instantiate.mjs';
import { type TExtractInstantiate } from './extract/instantiate.mjs';
import { type TIndexInstantiate } from './indexed/instantiate.mjs';
import { type TInstanceTypeInstantiate } from './instance_type/instantiate.mjs';
import { type TInterfaceInstantiate } from './interface/instantiate.mjs';
import { type TKeyOfInstantiate } from './keyof/instantiate.mjs';
import { type TLowercaseInstantiate } from './intrinsics/instantiate.mjs';
import { type TMappedInstantiate } from './mapped/instantiate.mjs';
import { type TModuleInstantiate } from './module/instantiate.mjs';
import { type TNonNullableInstantiate } from './non_nullable/instantiate.mjs';
import { type TOmitInstantiate } from './omit/instantiate.mjs';
import { type TOptionsInstantiate } from './options/instantiate.mjs';
import { type TParametersInstantiate } from './parameters/instantiate.mjs';
import { type TPartialInstantiate } from './partial/instantiate.mjs';
import { type TPickInstantiate } from './pick/instantiate.mjs';
import { type TReadonlyObjectInstantiate } from './readonly_object/instantiate.mjs';
import { type TRecordInstantiate } from './record/instantiate.mjs';
import { type TRefInstantiate } from './ref/instantiate.mjs';
import { type TRequiredInstantiate } from './required/instantiate.mjs';
import { type TReturnTypeInstantiate } from './return_type/instantiate.mjs';
import { type TTemplateLiteralInstantiate } from './template_literal/instantiate.mjs';
import { type TUncapitalizeInstantiate } from './intrinsics/instantiate.mjs';
import { type TUppercaseInstantiate } from './intrinsics/instantiate.mjs';
import { type TRestSpread } from './rest/index.mjs';
export interface TState {
    callstack: string[];
}
export type TCanInstantiate<Types extends TSchema[]> = Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? Left extends TRef ? false : TCanInstantiate<Right> : true;
export declare function CanInstantiate<Types extends TSchema[]>(types: [...Types]): TCanInstantiate<Types>;
type ModifierAction = 'add' | 'remove' | 'none';
type TModifierActions<Type extends TSchema, Readonly extends ModifierAction, Optional extends ModifierAction> = (Type extends TReadonlyRemoveAction<infer Type extends TSchema> ? TModifierActions<Type, 'remove', Optional> : Type extends TOptionalRemoveAction<infer Type extends TSchema> ? TModifierActions<Type, Readonly, 'remove'> : Type extends TReadonlyAddAction<infer Type extends TSchema> ? TModifierActions<Type, 'add', Optional> : Type extends TOptionalAddAction<infer Type extends TSchema> ? TModifierActions<Type, Readonly, 'add'> : [
    Type,
    Readonly,
    Optional
]);
type TApplyReadonly<Action extends ModifierAction, Type extends TSchema> = (Action extends 'remove' ? TReadonlyRemove<Type> : Action extends 'add' ? TReadonlyAdd<Type> : Type);
type TApplyOptional<Action extends ModifierAction, Type extends TSchema> = (Action extends 'remove' ? TOptionalRemove<Type> : Action extends 'add' ? TOptionalAdd<Type> : Type);
export type TInstantiateProperties<Context extends TProperties, State extends TState, Properties extends TProperties, Result extends TProperties = {
    [Key in keyof Properties]: TInstantiateType<Context, State, Properties[Key]>;
}> = Result;
export declare function InstantiateProperties<Context extends TProperties, State extends TState, Properties extends TProperties>(context: Context, state: State, properties: TProperties): TInstantiateProperties<Context, State, Properties>;
export type TInstantiateElements<Context extends TProperties, State extends TState, Types extends TSchema[], Elements extends TSchema[] = TInstantiateTypes<Context, State, Types>, Result extends TSchema[] = TRestSpread<Elements>> = Result;
export declare function InstantiateElements<Context extends TProperties, State extends TState, Types extends TSchema[]>(context: Context, state: State, types: [...Types]): TInstantiateElements<Context, State, Types>;
export type TInstantiateTypes<Context extends TProperties, State extends TState, Types extends TSchema[], Result extends TSchema[] = []> = (Types extends [infer Left extends TSchema, ...infer Right extends TSchema[]] ? TInstantiateTypes<Context, State, Right, [...Result, TInstantiateType<Context, State, Left>]> : Result);
export declare function InstantiateTypes<Context extends TProperties, State extends TState, Types extends TSchema[]>(context: Context, state: State, types: [...Types]): TInstantiateTypes<Context, State, Types>;
type TInstantiateDeferred<Context extends TProperties, State extends TState, Action extends string, Parameters extends TSchema[]> = ([
    Action,
    Parameters
] extends ['Awaited', [infer Type extends TSchema]] ? TAwaitedInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Capitalize', [infer Type extends TSchema]] ? TCapitalizeInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Conditional', [infer Left extends TSchema, infer Right extends TSchema, infer True extends TSchema, infer False extends TSchema]] ? TConditionalInstantiate<Context, State, Left, Right, True, False> : [
    Action,
    Parameters
] extends ['ConstructorParameters', [infer Type extends TSchema]] ? TConstructorParametersInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Evaluate', [infer Type extends TSchema]] ? TEvaluateInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Exclude', [infer Left extends TSchema, infer Right extends TSchema]] ? TExcludeInstantiate<Context, State, Left, Right> : [
    Action,
    Parameters
] extends ['Extract', [infer Left extends TSchema, infer Right extends TSchema]] ? TExtractInstantiate<Context, State, Left, Right> : [
    Action,
    Parameters
] extends ['Index', [infer Type extends TSchema, infer Indexer extends TSchema]] ? TIndexInstantiate<Context, State, Type, Indexer> : [
    Action,
    Parameters
] extends ['InstanceType', [infer Type extends TSchema]] ? TInstanceTypeInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Interface', [infer Heritage extends TSchema[], infer Properties extends TProperties]] ? TInterfaceInstantiate<Context, State, Heritage, Properties> : [
    Action,
    Parameters
] extends ['KeyOf', [infer Type extends TSchema]] ? TKeyOfInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Lowercase', [infer Type extends TSchema]] ? TLowercaseInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Mapped', [infer Name extends TIdentifier, infer Key extends TSchema, infer As extends TSchema, infer Property extends TSchema]] ? TMappedInstantiate<Context, State, Name, Key, As, Property> : [
    Action,
    Parameters
] extends ['Module', [infer Properties extends TProperties]] ? TModuleInstantiate<Context, State, Properties> : [
    Action,
    Parameters
] extends ['NonNullable', [infer Type extends TSchema]] ? TNonNullableInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Pick', [infer Type extends TSchema, infer Indexer extends TSchema]] ? TPickInstantiate<Context, State, Type, Indexer> : [
    Action,
    Parameters
] extends ['Options', [infer Type extends TSchema, infer Options extends TSchema]] ? TOptionsInstantiate<Context, State, Type, Options> : [
    Action,
    Parameters
] extends ['Parameters', [infer Type extends TSchema]] ? TParametersInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Partial', [infer Type extends TSchema]] ? TPartialInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Omit', [infer Type extends TSchema, infer Indexer extends TSchema]] ? TOmitInstantiate<Context, State, Type, Indexer> : [
    Action,
    Parameters
] extends ['ReadonlyObject', [infer Type extends TSchema]] ? TReadonlyObjectInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Record', [infer Key extends TSchema, infer Value extends TSchema]] ? TRecordInstantiate<Context, State, Key, Value> : [
    Action,
    Parameters
] extends ['Required', [infer Type extends TSchema]] ? TRequiredInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['ReturnType', [infer Type extends TSchema]] ? TReturnTypeInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['TemplateLiteral', [infer Types extends TSchema[]]] ? TTemplateLiteralInstantiate<Context, State, Types> : [
    Action,
    Parameters
] extends ['Uncapitalize', [infer Type extends TSchema]] ? TUncapitalizeInstantiate<Context, State, Type> : [
    Action,
    Parameters
] extends ['Uppercase', [infer Type extends TSchema]] ? TUppercaseInstantiate<Context, State, Type> : TDeferred<Action, Parameters>);
export type TInstantiateType<Context extends TProperties, State extends TState, Input extends TSchema, Immutable extends boolean = Input extends TImmutable ? true : false, Modifiers extends [TSchema, ModifierAction, ModifierAction] = TModifierActions<Input, Input extends TReadonly<Input> ? 'add' : 'none', Input extends TOptional<Input> ? 'add' : 'none'>, Type extends TSchema = Modifiers[0], Instantiated extends TSchema = (Type extends TRef<infer Ref extends string> ? TRefInstantiate<Context, State, Type, Ref> : Type extends TArray<infer Type extends TSchema> ? TArray<TInstantiateType<Context, State, Type>> : Type extends TAsyncIterator<infer Type extends TSchema> ? TAsyncIterator<TInstantiateType<Context, State, Type>> : Type extends TCall<infer Target extends TSchema, infer Parameters extends TSchema[]> ? TCallInstantiate<Context, State, Target, Parameters> : Type extends TConstructor<infer Parameters extends TSchema[], infer InstanceType extends TSchema> ? TConstructor<TInstantiateTypes<Context, State, Parameters>, TInstantiateType<Context, State, InstanceType>> : Type extends TDeferred<infer Action extends string, infer Types extends TSchema[]> ? TInstantiateDeferred<Context, State, Action, Types> : Type extends TFunction<infer Parameters extends TSchema[], infer ReturnType extends TSchema> ? TFunction<TInstantiateTypes<Context, State, Parameters>, TInstantiateType<Context, State, ReturnType>> : Type extends TIntersect<infer Types extends TSchema[]> ? TIntersect<TInstantiateTypes<Context, State, Types>> : Type extends TIterator<infer Type extends TSchema> ? TIterator<TInstantiateType<Context, State, Type>> : Type extends TObject<infer Properties extends TProperties> ? TObject<TInstantiateProperties<Context, State, Properties>> : Type extends TPromise<infer Type extends TSchema> ? TPromise<TInstantiateType<Context, State, Type>> : Type extends TRecord<infer Key extends string, infer Type extends TSchema> ? TRecord<Key, TInstantiateType<Context, State, Type>> : Type extends TRest<infer Type extends TSchema> ? TRest<TInstantiateType<Context, State, Type>> : Type extends TTuple<infer Types extends TSchema[]> ? TTuple<TInstantiateElements<Context, State, Types>> : Type extends TUnion<infer Types extends TSchema[]> ? TUnion<TInstantiateTypes<Context, State, Types>> : Type), WithImmutable extends TSchema = Immutable extends true ? TImmutable<Instantiated> : Instantiated, WithModifiers extends TSchema = TApplyReadonly<Modifiers[1], TApplyOptional<Modifiers[2], WithImmutable>>> = WithModifiers;
export declare function InstantiateType<Context extends TProperties, State extends TState, Type extends TSchema>(context: Context, state: State, input: Type): TInstantiateType<Context, State, Type>;
/** Instantiates computed schematics using the given context and type. */
export type TInstantiate<Context extends TProperties, Type extends TSchema> = (TInstantiateType<Context, {
    callstack: [];
}, Type>);
/** Instantiates computed schematics using the given context and type. */
export declare function Instantiate<Context extends TProperties, Type extends TSchema>(context: Context, type: Type): TInstantiate<Context, Type>;
export {};
