// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { IsUnion } from '../types/union.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import * as Result from './result.mjs';
// ----------------------------------------------------------------------------
// Inference
// ----------------------------------------------------------------------------
import { IsInferable, TryInferable, InferUnionResult } from './inference.mjs';
function ExtendsUnionSome(inferred, type, unionTypes) {
    return Guard.TakeLeft(unionTypes, (head, tail) => Result.Match(ExtendsLeft(inferred, type, head), inferred => Result.ExtendsTrue(inferred), () => ExtendsUnionSome(inferred, type, tail)), () => Result.ExtendsFalse());
}
function ExtendsUnionLeft(inferred, left, right) {
    return Guard.TakeLeft(left, (head, tail) => Result.Match(ExtendsUnionSome(inferred, head, right), inferred => ExtendsUnionLeft(inferred, tail, right), () => Result.ExtendsFalse()), () => Result.ExtendsTrue(inferred));
}
export function ExtendsUnion(inferred, left, right) {
    const inferrable = TryInferable(right);
    return (IsInferable(inferrable)
        // @ts-ignore 4.9.5 fails to see `type` property on inferrable
        ? InferUnionResult(inferred, inferrable.name, left, inferrable.type)
        : IsUnion(right)
            ? ExtendsUnionLeft(inferred, left, right.anyOf)
            : ExtendsUnionLeft(inferred, left, [right]));
}
