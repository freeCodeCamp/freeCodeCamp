// deno-fmt-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { IsArray } from '../../types/array.mjs';
import { IsAsyncIterator } from '../../types/async_iterator.mjs';
import { IsConstructor } from '../../types/constructor.mjs';
import { IsFunction } from '../../types/function.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { IsIterator } from '../../types/iterator.mjs';
import { IsObject } from '../../types/object.mjs';
import { IsPromise } from '../../types/promise.mjs';
import { PropertyValues } from '../../types/properties.mjs';
import { IsRecord, RecordValue } from '../../types/record.mjs';
import { IsTuple } from '../../types/tuple.mjs';
import { IsUnion } from '../../types/union.mjs';
import { IsRef } from '../../types/ref.mjs';
import { IsInterfaceDeferred } from '../../action/interface.mjs';
function FromRef(context, ref, result) {
    return (result.includes(ref)
        ? result
        : ref in context
            ? FromType(context, context[ref], [...result, ref])
            : Unreachable());
}
function FromProperties(context, properties, result) {
    const types = PropertyValues(properties);
    return FromTypes(context, types, result);
}
function FromTypes(context, types, result) {
    return types.reduce((result, left) => {
        return FromType(context, left, result);
    }, result);
}
function FromType(context, type, result) {
    return (IsRef(type) ? FromRef(context, type.$ref, result) :
        IsArray(type) ? FromType(context, type.items, result) :
            IsAsyncIterator(type) ? FromType(context, type.iteratorItems, result) :
                IsConstructor(type) ? FromTypes(context, [...type.parameters, type.instanceType], result) :
                    IsFunction(type) ? FromTypes(context, [...type.parameters, type.returnType], result) :
                        IsInterfaceDeferred(type) ? FromProperties(context, type.parameters[1], result) :
                            IsIntersect(type) ? FromTypes(context, type.allOf, result) :
                                IsIterator(type) ? FromType(context, type.iteratorItems, result) :
                                    IsObject(type) ? FromProperties(context, type.properties, result) :
                                        IsPromise(type) ? FromType(context, type.item, result) :
                                            IsUnion(type) ? FromTypes(context, type.anyOf, result) :
                                                IsTuple(type) ? FromTypes(context, type.items, result) :
                                                    IsRecord(type) ? FromType(context, RecordValue(type), result) :
                                                        result);
}
/** Returns dependent cyclic keys for the given type. This function is used to dead-type-eliminate (DTE) for initializing TCyclic types. */
export function CyclicDependencies(context, key, type) {
    const result = FromType(context, type, [key]);
    return result;
}
