// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { IsCyclic } from '../../types/cyclic.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { Object, IsObject } from '../../types/object.mjs';
import { IsUnion } from '../../types/union.mjs';
import { FromCyclic } from './from_cyclic.mjs';
import { FromIntersect } from './from_intersect.mjs';
import { FromUnion } from './from_union.mjs';
import { FromObject } from './from_object.mjs';
export function FromType(type) {
    return (IsCyclic(type) ? FromCyclic(type.$defs, type.$ref) :
        IsIntersect(type) ? FromIntersect(type.allOf) :
            IsUnion(type) ? FromUnion(type.anyOf) :
                IsObject(type) ? FromObject(type.properties) :
                    Object({}));
}
