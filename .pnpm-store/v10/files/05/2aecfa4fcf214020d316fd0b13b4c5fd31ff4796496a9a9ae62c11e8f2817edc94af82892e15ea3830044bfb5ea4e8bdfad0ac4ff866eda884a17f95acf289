// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Unreachable } from '../../system/unreachable/index.mjs';
import { Memory } from '../../system/memory/index.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsArray } from '../types/array.mjs';
import { IsUnknown } from '../types/unknown.mjs';
import { Tuple } from '../types/tuple.mjs';
import { ExtendsLeft } from './extends_left.mjs';
import { Union } from '../types/union.mjs';
// ----------------------------------------------------------------------------
// Operator
// ----------------------------------------------------------------------------
import { IsInfer } from '../types/infer.mjs';
import { IsRest } from '../types/rest.mjs';
import * as Result from './result.mjs';
// ----------------------------------------------------------------------------
// Factory
// ----------------------------------------------------------------------------
export function Inferrable(name, type) {
    return Memory.Create({ '~kind': 'Inferrable' }, { name, type }, {});
}
// ----------------------------------------------------------------------------
// Guard
// ----------------------------------------------------------------------------
export function IsInferable(value) {
    return Guard.IsObject(value)
        && Guard.HasPropertyKey(value, '~kind')
        && Guard.HasPropertyKey(value, 'name')
        && Guard.HasPropertyKey(value, 'type')
        && Guard.IsEqual(value["~kind"], 'Inferrable')
        && Guard.IsString(value.name)
        && Guard.IsObject(value.type);
}
export function TryRestInferable(type) {
    return (IsRest(type)
        ? IsInfer(type.items)
            ? IsArray(type.items.extends) ? Inferrable(type.items.name, type.items.extends.items) :
                IsUnknown(type.items.extends) ? Inferrable(type.items.name, type.items.extends) :
                    undefined
            : Unreachable() // undefined
        : undefined);
}
export function TryInferable(type) {
    return (IsInfer(type) ? Inferrable(type.name, type.extends) :
        undefined);
}
function TryInferResults(rest, right, result = []) {
    return Guard.TakeLeft(rest, (head, tail) => Result.Match(ExtendsLeft({}, head, right), () => TryInferResults(tail, right, [...result, head]), () => undefined), () => result);
}
export function InferTupleResult(inferred, name, left, right) {
    const results = TryInferResults(left, right);
    return (Guard.IsArray(results)
        ? Result.ExtendsTrue(Memory.Assign(inferred, { [name]: Tuple(results) }))
        : Result.ExtendsFalse());
}
export function InferUnionResult(inferred, name, left, right) {
    const results = TryInferResults(left, right);
    return (Guard.IsArray(results)
        ? Result.ExtendsTrue(Memory.Assign(inferred, { [name]: Union(results) }))
        : Result.ExtendsFalse());
}
