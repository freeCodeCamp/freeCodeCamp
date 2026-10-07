// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { EvaluateUnion } from '../evaluate/evaluate.mjs';
import { FromType } from './from_type.mjs';
function CollapseUnionProperties(left, right) {
    const sharedKeys = Guard.Keys(left).filter((key) => key in right);
    const result = sharedKeys.reduce((result, key) => {
        return { ...result, [key]: EvaluateUnion([left[key], right[key]]) };
    }, {});
    return result;
}
function ReduceVariants(types, result) {
    return Guard.TakeLeft(types, (left, right) => ReduceVariants(right, CollapseUnionProperties(result, FromType(left))), () => result);
}
export function FromUnion(types) {
    return Guard.TakeLeft(types, (left, right) => ReduceVariants(right, FromType(left)), () => Unreachable());
}
// deno-coverage-ignore-stop
