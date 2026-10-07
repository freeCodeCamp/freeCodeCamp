// deno-fmt-ignore-file
import { IsArray, _Array_ } from '../../types/array.mjs';
import { IsAsyncIterator, AsyncIterator } from '../../types/async_iterator.mjs';
import { IsConstructor, Constructor } from '../../types/constructor.mjs';
import { IsFunction, _Function_ } from '../../types/function.mjs';
import { IsIterator, Iterator } from '../../types/iterator.mjs';
import { IsIntersect, Intersect } from '../../types/intersect.mjs';
import { _Object_ } from '../../types/object.mjs';
import { IsPromise, Promise } from '../../types/promise.mjs';
import { IsTuple, Tuple } from '../../types/tuple.mjs';
import { IsThis } from '../../types/this.mjs';
import { IsUnion, Union } from '../../types/union.mjs';
function FromTypes(properties, types) {
    return types.map(type => FromType(properties, type));
}
export function FromType(properties, type) {
    return (IsArray(type) ? _Array_(FromType(properties, type.items)) :
        IsAsyncIterator(type) ? AsyncIterator(FromType(properties, type.iteratorItems)) :
            IsConstructor(type) ? Constructor(FromTypes(properties, type.parameters), FromType(properties, type.instanceType)) :
                IsFunction(type) ? _Function_(FromTypes(properties, type.parameters), FromType(properties, type.returnType)) :
                    IsIterator(type) ? Iterator(FromType(properties, type.iteratorItems)) :
                        IsPromise(type) ? Promise(FromType(properties, type.item)) :
                            IsTuple(type) ? Tuple(FromTypes(properties, type.items)) :
                                IsUnion(type) ? Union(FromTypes(properties, type.anyOf)) :
                                    IsIntersect(type) ? Intersect(FromTypes(properties, type.allOf)) :
                                        IsThis(type) ? _Object_(properties) :
                                            type);
}
export function ExpandThis(properties, type) {
    const result = FromType(properties, type);
    return result;
}
