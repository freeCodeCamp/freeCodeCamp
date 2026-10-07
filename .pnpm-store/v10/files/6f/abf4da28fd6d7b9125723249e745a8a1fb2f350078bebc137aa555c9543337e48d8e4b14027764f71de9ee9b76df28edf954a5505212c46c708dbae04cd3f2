// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsIntersect } from '../../types/intersect.mjs';
import { Distribute } from './distribute.mjs';
import { Broaden } from './broaden.mjs';
import { Union, IsUnion } from '../../types/union.mjs';
import { Never } from '../../types/never.mjs';
export function EvaluateIntersect(types) {
    const distribution = Distribute(types);
    const result = Broaden(distribution);
    return result;
}
export function EvaluateUnion(types) {
    const result = Broaden(types);
    return result;
}
export function EvaluateType(type) {
    return (IsIntersect(type) ? EvaluateIntersect(type.allOf) :
        IsUnion(type) ? EvaluateUnion(type.anyOf) :
            type);
}
export function EvaluateUnionFast(types) {
    const result = (Guard.IsEqual(types.length, 1) ? types[0] :
        Guard.IsEqual(types.length, 0) ? Never() :
            Union(types));
    return result;
}
