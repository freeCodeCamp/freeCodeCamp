// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
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
function FromRef(stack, context, ref) {
    return (stack.includes(ref)
        ? true
        : FromType([...stack, ref], context, context[ref]));
}
function FromProperties(stack, context, properties) {
    const types = PropertyValues(properties);
    return FromTypes(stack, context, types);
}
function FromTypes(stack, context, types) {
    return Guard.TakeLeft(types, (left, right) => FromType(stack, context, left)
        ? true
        : FromTypes(stack, context, right), () => false);
}
function FromType(stack, context, type) {
    return (IsRef(type) ? FromRef(stack, context, type.$ref) :
        IsArray(type) ? FromType(stack, context, type.items) :
            IsAsyncIterator(type) ? FromType(stack, context, type.iteratorItems) :
                IsConstructor(type) ? FromTypes(stack, context, [...type.parameters, type.instanceType]) :
                    IsFunction(type) ? FromTypes(stack, context, [...type.parameters, type.returnType]) :
                        IsInterfaceDeferred(type) ? FromProperties(stack, context, type.parameters[1]) :
                            IsIntersect(type) ? FromTypes(stack, context, type.allOf) :
                                IsIterator(type) ? FromType(stack, context, type.iteratorItems) :
                                    IsObject(type) ? FromProperties(stack, context, type.properties) :
                                        IsPromise(type) ? FromType(stack, context, type.item) :
                                            IsUnion(type) ? FromTypes(stack, context, type.anyOf) :
                                                IsTuple(type) ? FromTypes(stack, context, type.items) :
                                                    IsRecord(type) ? FromType(stack, context, RecordValue(type)) :
                                                        false);
}
/** Performs a cyclic check on the given type. Initial key stack can be empty, but faster if specified */
export function CyclicCheck(stack, context, type) {
    const result = FromType(stack, context, type);
    return result;
}
