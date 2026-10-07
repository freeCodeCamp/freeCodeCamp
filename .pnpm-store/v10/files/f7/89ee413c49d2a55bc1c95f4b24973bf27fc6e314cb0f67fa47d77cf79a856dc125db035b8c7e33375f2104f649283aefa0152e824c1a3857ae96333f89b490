// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { IsCyclic } from '../../types/cyclic.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { IsObject } from '../../types/object.mjs';
import { IsTuple } from '../../types/tuple.mjs';
import { IsUnion } from '../../types/union.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromObject } from './from_object.mjs';
import { FromTuple } from './from_tuple.mjs';
import { FromUnion } from './from_union.mjs';
export function FromType(type) {
    return (IsCyclic(type) ? FromCyclic(type.$defs, type.$ref) :
        IsIntersect(type) ? FromIntersect(type.allOf) :
            IsUnion(type) ? FromUnion(type.anyOf) :
                IsTuple(type) ? FromTuple(type.items) :
                    IsObject(type) ? FromObject(type.properties) :
                        {});
}
