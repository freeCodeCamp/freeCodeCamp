// deno-fmt-ignore-file
import { Literal } from '../../types/literal.mjs';
import { EvaluateUnionFast } from '../evaluate/evaluate.mjs';
export function FromTuple(types) {
    const result = types.map((_, index) => Literal(index));
    return EvaluateUnionFast(result);
}
