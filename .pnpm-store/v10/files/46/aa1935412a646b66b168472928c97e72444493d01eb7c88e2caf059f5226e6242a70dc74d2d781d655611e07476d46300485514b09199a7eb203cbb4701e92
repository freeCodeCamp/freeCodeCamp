// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsInfer } from '../types/infer.mjs';
import { IsOptional } from '../types/_optional.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
function ParameterCompare(inferred, left, leftRest, right, rightRest) {
    // Parameter extends Right on Left, except when infer Right  
    const checkLeft = IsInfer(right) ? left : right;
    const checkRight = IsInfer(right) ? right : left;
    const isLeftOptional = IsOptional(left);
    const isRightOptional = IsOptional(right);
    return ((!isLeftOptional && isRightOptional)
        ? Result.ExtendsFalse() // 'fail: left-required-but-right-is-optional'
        : Result.Match(ExtendsLeft(inferred, checkLeft, checkRight), inferred => ExtendsParameters(inferred, leftRest, rightRest), () => Result.ExtendsFalse()) // 'fail: left-and-right-did-not-match'
    );
}
function ParameterRight(inferred, left, leftRest, rightRest) {
    return Guard.TakeLeft(rightRest, (head, tail) => ParameterCompare(inferred, left, leftRest, head, tail), () => IsOptional(left) // 'right-did-not-have-enough-elements'
        ? Result.ExtendsTrue(inferred) // 'ok: left was optional'
        : Result.ExtendsFalse()); // 'fail: left was required'
}
function ParametersLeft(inferred, left, rightRest) {
    return Guard.TakeLeft(left, (head, tail) => ParameterRight(inferred, head, tail, rightRest), () => Result.ExtendsTrue(inferred)); // 'ok: no-more-elements-in-left'
}
export function ExtendsParameters(inferred, left, right) {
    return ParametersLeft(inferred, left, right);
}
