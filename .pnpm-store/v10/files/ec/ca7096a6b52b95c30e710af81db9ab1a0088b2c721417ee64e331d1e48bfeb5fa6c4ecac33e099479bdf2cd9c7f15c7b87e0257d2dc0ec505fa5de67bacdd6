// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Guard } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Modifiers
// ------------------------------------------------------------------
import { IsImmutable, Immutable } from '../types/_immutable.mjs';
import { IsOptional, OptionalAdd, OptionalRemove } from '../types/_optional.mjs';
import { IsReadonly, ReadonlyAdd, ReadonlyRemove } from '../types/_readonly.mjs';
// ------------------------------------------------------------------
// Types
// ------------------------------------------------------------------
import { IsBase } from '../types/base.mjs';
import { _Array_, IsArray, ArrayOptions } from '../types/array.mjs';
import { AsyncIterator, IsAsyncIterator, AsyncIteratorOptions } from '../types/async_iterator.mjs';
import { Constructor, IsConstructor, ConstructorOptions } from '../types/constructor.mjs';
import { Deferred, IsDeferred } from '../types/deferred.mjs';
import { _Function_, IsFunction, FunctionOptions } from '../types/function.mjs';
import { IsCall } from '../types/call.mjs';
import { Intersect, IsIntersect, IntersectOptions } from '../types/intersect.mjs';
import { Iterator, IsIterator, IteratorOptions } from '../types/iterator.mjs';
import { Object, IsObject, ObjectOptions } from '../types/object.mjs';
import { _Promise_, IsPromise, PromiseOptions } from '../types/promise.mjs';
import { RecordFromPattern, IsRecord, RecordPattern, RecordValue } from '../types/record.mjs';
import { Tuple, IsTuple, TupleOptions } from '../types/tuple.mjs';
import { Union, IsUnion, UnionOptions } from '../types/union.mjs';
import { IsRef } from '../types/ref.mjs';
import { Rest, IsRest } from '../types/rest.mjs';
// ------------------------------------------------------------------
// Modifier Actions
// ------------------------------------------------------------------
import { IsReadonlyAddAction, IsReadonlyRemoveAction } from '../action/_readonly.mjs';
import { IsOptionalAddAction, IsOptionalRemoveAction } from '../action/_optional.mjs';
// ------------------------------------------------------------------
// Instantiate
// ------------------------------------------------------------------
import { AwaitedInstantiate } from './awaited/instantiate.mjs';
import { CallInstantiate } from './call/instantiate.mjs';
import { CapitalizeInstantiate } from './intrinsics/instantiate.mjs';
import { ConditionalInstantiate } from './conditional/index.mjs';
import { ConstructorParametersInstantiate } from './constructor_parameters/instantiate.mjs';
import { EvaluateInstantiate } from './evaluate/instantiate.mjs';
import { ExcludeInstantiate } from './exclude/instantiate.mjs';
import { ExtractInstantiate } from './extract/instantiate.mjs';
import { IndexInstantiate } from './indexed/instantiate.mjs';
import { InstanceTypeInstantiate } from './instance_type/instantiate.mjs';
import { InterfaceInstantiate } from './interface/instantiate.mjs';
import { KeyOfInstantiate } from './keyof/instantiate.mjs';
import { LowercaseInstantiate } from './intrinsics/instantiate.mjs';
import { MappedInstantiate } from './mapped/instantiate.mjs';
import { ModuleInstantiate } from './module/instantiate.mjs';
import { NonNullableInstantiate } from './non_nullable/instantiate.mjs';
import { OmitInstantiate } from './omit/instantiate.mjs';
import { OptionsInstantiate } from './options/instantiate.mjs';
import { ParametersInstantiate } from './parameters/instantiate.mjs';
import { PartialInstantiate } from './partial/instantiate.mjs';
import { PickInstantiate } from './pick/instantiate.mjs';
import { ReadonlyObjectInstantiate } from './readonly_object/instantiate.mjs';
import { RecordInstantiate } from './record/instantiate.mjs';
import { RefInstantiate } from './ref/instantiate.mjs';
import { RequiredInstantiate } from './required/instantiate.mjs';
import { ReturnTypeInstantiate } from './return_type/instantiate.mjs';
import { TemplateLiteralInstantiate } from './template_literal/instantiate.mjs';
import { UncapitalizeInstantiate } from './intrinsics/instantiate.mjs';
import { UppercaseInstantiate } from './intrinsics/instantiate.mjs';
import { RestSpread } from './rest/index.mjs';
export function CanInstantiate(types) {
    return Guard.TakeLeft(types, (left, right) => IsRef(left)
        ? false
        : CanInstantiate(right), () => true);
}
function ModifierActions(type, readonly, optional) {
    return (IsReadonlyRemoveAction(type) ? ModifierActions(type.type, 'remove', optional) :
        IsOptionalRemoveAction(type) ? ModifierActions(type.type, readonly, 'remove') :
            IsReadonlyAddAction(type) ? ModifierActions(type.type, 'add', optional) :
                IsOptionalAddAction(type) ? ModifierActions(type.type, readonly, 'add') :
                    [type, readonly, optional]);
}
function ApplyReadonly(action, type) {
    return (Guard.IsEqual(action, 'remove') ? ReadonlyRemove(type) :
        Guard.IsEqual(action, 'add') ? ReadonlyAdd(type) :
            type);
}
function ApplyOptional(action, type) {
    return (Guard.IsEqual(action, 'remove') ? OptionalRemove(type) :
        Guard.IsEqual(action, 'add') ? OptionalAdd(type) :
            type);
}
export function InstantiateProperties(context, state, properties) {
    return Guard.Keys(properties).reduce((result, key) => {
        return { ...result, [key]: InstantiateType(context, state, properties[key]) };
    }, {});
}
export function InstantiateElements(context, state, types) {
    const elements = InstantiateTypes(context, state, types);
    const result = RestSpread(elements);
    return result;
}
export function InstantiateTypes(context, state, types) {
    return types.map(type => InstantiateType(context, state, type));
}
function InstantiateDeferred(context, state, action, parameters, options) {
    return (Guard.IsEqual(action, 'Awaited') ? AwaitedInstantiate(context, state, parameters[0], options) :
        Guard.IsEqual(action, 'Capitalize') ? CapitalizeInstantiate(context, state, parameters[0], options) :
            Guard.IsEqual(action, 'Conditional') ? ConditionalInstantiate(context, state, parameters[0], parameters[1], parameters[2], parameters[3], options) :
                Guard.IsEqual(action, 'ConstructorParameters') ? ConstructorParametersInstantiate(context, state, parameters[0], options) :
                    Guard.IsEqual(action, 'Evaluate') ? EvaluateInstantiate(context, state, parameters[0], options) :
                        Guard.IsEqual(action, 'Exclude') ? ExcludeInstantiate(context, state, parameters[0], parameters[1], options) :
                            Guard.IsEqual(action, 'Extract') ? ExtractInstantiate(context, state, parameters[0], parameters[1], options) :
                                Guard.IsEqual(action, 'Index') ? IndexInstantiate(context, state, parameters[0], parameters[1], options) :
                                    Guard.IsEqual(action, 'InstanceType') ? InstanceTypeInstantiate(context, state, parameters[0], options) :
                                        Guard.IsEqual(action, 'Interface') ? InterfaceInstantiate(context, state, parameters[0], parameters[1], options) :
                                            Guard.IsEqual(action, 'KeyOf') ? KeyOfInstantiate(context, state, parameters[0], options) :
                                                Guard.IsEqual(action, 'Lowercase') ? LowercaseInstantiate(context, state, parameters[0], options) :
                                                    Guard.IsEqual(action, 'Mapped') ? MappedInstantiate(context, state, parameters[0], parameters[1], parameters[2], parameters[3], options) :
                                                        Guard.IsEqual(action, 'Module') ? ModuleInstantiate(context, state, parameters[0], options) :
                                                            Guard.IsEqual(action, 'NonNullable') ? NonNullableInstantiate(context, state, parameters[0], options) :
                                                                Guard.IsEqual(action, 'Pick') ? PickInstantiate(context, state, parameters[0], parameters[1], options) :
                                                                    Guard.IsEqual(action, 'Options') ? OptionsInstantiate(context, state, parameters[0], parameters[1]) :
                                                                        Guard.IsEqual(action, 'Parameters') ? ParametersInstantiate(context, state, parameters[0], options) :
                                                                            Guard.IsEqual(action, 'Partial') ? PartialInstantiate(context, state, parameters[0], options) :
                                                                                Guard.IsEqual(action, 'Omit') ? OmitInstantiate(context, state, parameters[0], parameters[1], options) :
                                                                                    Guard.IsEqual(action, 'ReadonlyObject') ? ReadonlyObjectInstantiate(context, state, parameters[0], options) :
                                                                                        Guard.IsEqual(action, 'Record') ? RecordInstantiate(context, state, parameters[0], parameters[1], options) :
                                                                                            Guard.IsEqual(action, 'Required') ? RequiredInstantiate(context, state, parameters[0], options) :
                                                                                                Guard.IsEqual(action, 'ReturnType') ? ReturnTypeInstantiate(context, state, parameters[0], options) :
                                                                                                    Guard.IsEqual(action, 'TemplateLiteral') ? TemplateLiteralInstantiate(context, state, parameters[0], options) :
                                                                                                        Guard.IsEqual(action, 'Uncapitalize') ? UncapitalizeInstantiate(context, state, parameters[0], options) :
                                                                                                            Guard.IsEqual(action, 'Uppercase') ? UppercaseInstantiate(context, state, parameters[0], options) :
                                                                                                                Deferred(action, parameters, options));
}
export function InstantiateType(context, state, input) {
    const immutable = IsImmutable(input);
    const modifiers = ModifierActions(input, IsReadonly(input) ? 'add' : 'none', IsOptional(input) ? 'add' : 'none');
    const type = IsBase(modifiers[0]) ? modifiers[0].Clone() : modifiers[0];
    const instantiated = (IsRef(type) ? RefInstantiate(context, state, type, type.$ref) :
        IsArray(type) ? _Array_(InstantiateType(context, state, type.items), ArrayOptions(type)) :
            IsAsyncIterator(type) ? AsyncIterator(InstantiateType(context, state, type.iteratorItems), AsyncIteratorOptions(type)) :
                IsCall(type) ? CallInstantiate(context, state, type.target, type.arguments) :
                    IsConstructor(type) ? Constructor(InstantiateTypes(context, state, type.parameters), InstantiateType(context, state, type.instanceType), ConstructorOptions(type)) :
                        IsDeferred(type) ? InstantiateDeferred(context, state, type.action, type.parameters, type.options) :
                            IsFunction(type) ? _Function_(InstantiateTypes(context, state, type.parameters), InstantiateType(context, state, type.returnType), FunctionOptions(type)) :
                                IsIntersect(type) ? Intersect(InstantiateTypes(context, state, type.allOf), IntersectOptions(type)) :
                                    IsIterator(type) ? Iterator(InstantiateType(context, state, type.iteratorItems), IteratorOptions(type)) :
                                        IsObject(type) ? Object(InstantiateProperties(context, state, type.properties), ObjectOptions(type)) :
                                            IsPromise(type) ? _Promise_(InstantiateType(context, state, type.item), PromiseOptions(type)) :
                                                IsRecord(type) ? RecordFromPattern(RecordPattern(type), InstantiateType(context, state, RecordValue(type))) :
                                                    IsRest(type) ? Rest(InstantiateType(context, state, type.items)) :
                                                        IsTuple(type) ? Tuple(InstantiateElements(context, state, type.items), TupleOptions(type)) :
                                                            IsUnion(type) ? Union(InstantiateTypes(context, state, type.anyOf), UnionOptions(type)) :
                                                                type);
    const withImmutable = immutable ? Immutable(instantiated) : instantiated;
    const withModifiers = ApplyReadonly(modifiers[1], ApplyOptional(modifiers[2], withImmutable));
    return withModifiers;
}
/** Instantiates computed schematics using the given context and type. */
export function Instantiate(context, type) {
    return InstantiateType(context, { callstack: [] }, type);
}
