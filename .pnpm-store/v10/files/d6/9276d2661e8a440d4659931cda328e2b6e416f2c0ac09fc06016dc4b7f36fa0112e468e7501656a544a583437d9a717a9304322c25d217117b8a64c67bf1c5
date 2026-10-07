// deno-fmt-ignore-file
// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsUnion } from '../../types/union.mjs';
import { IsObject } from '../../types/object.mjs';
import { IsTuple } from '../../types/tuple.mjs';
import { Composite } from './composite.mjs';
import { Narrow } from './narrow.mjs';
import { EvaluateType } from './evaluate.mjs';
import { EvaluateIntersect } from './evaluate.mjs';
function IsObjectLike(type) {
    return IsObject(type) || IsTuple(type);
}
function IsUnionOperand(left, right) {
    const isUnionLeft = IsUnion(left);
    const isUnionRight = IsUnion(right);
    const result = isUnionLeft || isUnionRight;
    return result;
}
function DistributeOperation(left, right) {
    const evaluatedLeft = EvaluateType(left);
    const evaluatedRight = EvaluateType(right);
    const isUnionOperand = IsUnionOperand(evaluatedLeft, evaluatedRight);
    const isObjectLeft = IsObjectLike(evaluatedLeft);
    const IsObjectRight = IsObjectLike(evaluatedRight);
    const result = (isUnionOperand ? EvaluateIntersect([evaluatedLeft, evaluatedRight]) :
        isObjectLeft && IsObjectRight ? Composite(evaluatedLeft, evaluatedRight) :
            isObjectLeft && !IsObjectRight ? evaluatedLeft :
                !isObjectLeft && IsObjectRight ? evaluatedRight :
                    Narrow(evaluatedLeft, evaluatedRight));
    return result;
}
function DistributeType(type, types, result = []) {
    return Guard.TakeLeft(types, (left, right) => DistributeType(type, right, [...result, DistributeOperation(type, left)]), () => Guard.IsEqual(result.length, 0)
        ? [type]
        : result);
}
function DistributeUnion(types, distribution, result = []) {
    return Guard.TakeLeft(types, (left, right) => DistributeUnion(right, distribution, [...result, ...Distribute([left], distribution)]), () => result);
}
export function Distribute(types, result = []) {
    return Guard.TakeLeft(types, (left, right) => IsUnion(left)
        ? Distribute(right, DistributeUnion(left.anyOf, result))
        : Distribute(right, DistributeType(left, result)), () => result);
}
