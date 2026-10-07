// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Any } from '../../types/any.mjs';
import { Array as _Array_, IsArray, ArrayOptions } from '../../types/array.mjs';
import { AsyncIterator, IsAsyncIterator } from '../../types/async_iterator.mjs';
import { Constructor, IsConstructor } from '../../types/constructor.mjs';
import { Function as _Function_, IsFunction } from '../../types/function.mjs';
import { Intersect, IsIntersect } from '../../types/intersect.mjs';
import { Iterator, IsIterator } from '../../types/iterator.mjs';
import { Object, IsObject } from '../../types/object.mjs';
import { Promise, IsPromise } from '../../types/promise.mjs';
import { IsRecord, Record, RecordKey, RecordValue } from '../../types/record.mjs';
import { IsRef } from '../../types/ref.mjs';
import { Tuple, IsTuple } from '../../types/tuple.mjs';
import { Union, IsUnion } from '../../types/union.mjs';
import { Unknown } from '../../types/unknown.mjs';
function FromRef(_ref) {
    return Any();
}
function FromProperties(properties) {
    return Guard.Keys(properties).reduce((result, key) => {
        return { ...result, [key]: FromType(properties[key]) };
    }, {});
}
function FromTypes(types) {
    return types.reduce((result, left) => {
        return [...result, FromType(left)];
    }, []);
}
function FromType(type) {
    return (IsRef(type) ? FromRef(type.$ref) :
        IsArray(type) ? _Array_(FromType(type.items), ArrayOptions(type)) :
            IsAsyncIterator(type) ? AsyncIterator(FromType(type.iteratorItems)) :
                IsConstructor(type) ? Constructor(FromTypes(type.parameters), FromType(type.instanceType)) :
                    IsFunction(type) ? _Function_(FromTypes(type.parameters), FromType(type.returnType)) :
                        IsIntersect(type) ? Intersect(FromTypes(type.allOf)) :
                            IsIterator(type) ? Iterator(FromType(type.iteratorItems)) :
                                IsObject(type) ? Object(FromProperties(type.properties)) :
                                    IsPromise(type) ? Promise(FromType(type.item)) :
                                        IsRecord(type) ? Record(RecordKey(type), FromType(RecordValue(type))) :
                                            IsUnion(type) ? Union(FromTypes(type.anyOf)) :
                                                IsTuple(type) ? Tuple(FromTypes(type.items)) :
                                                    type);
}
function CyclicAnyFromParameters(defs, ref) {
    return (ref in defs
        ? FromType(defs[ref])
        : Unknown());
}
/** Transforms TCyclic TRef's into TAny's. This function is used prior to TExtends checks to enable cyclics to be structurally checked and terminated (with TAny) at first point of recursion, what would otherwise be a recursive TRef.*/
export function CyclicExtends(type) {
    return CyclicAnyFromParameters(type.$defs, type.$ref);
}
