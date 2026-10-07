// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Guard } from '../../../guard/index.mjs';
import { FromType } from './from_type.mjs';
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
function CollapseIntersectProperties(left, right) {
    const leftKeys = Guard.Keys(left).filter((key) => !Guard.HasPropertyKey(right, key));
    const rightKeys = Guard.Keys(right).filter((key) => !Guard.HasPropertyKey(left, key));
    const sharedKeys = Guard.Keys(left).filter((key) => Guard.HasPropertyKey(right, key));
    const leftProperties = leftKeys.reduce((result, key) => ({ ...result, [key]: left[key] }), {});
    const rightProperties = rightKeys.reduce((result, key) => ({ ...result, [key]: right[key] }), {});
    const sharedProperties = sharedKeys.reduce((result, key) => ({ ...result, [key]: EvaluateIntersect([left[key], right[key]]) }), {});
    const unique = Memory.Assign(leftProperties, rightProperties);
    const shared = Memory.Assign(unique, sharedProperties);
    return shared;
}
export function FromIntersect(types) {
    return types.reduce((result, left) => {
        return CollapseIntersectProperties(result, FromType(left));
    }, {});
}
