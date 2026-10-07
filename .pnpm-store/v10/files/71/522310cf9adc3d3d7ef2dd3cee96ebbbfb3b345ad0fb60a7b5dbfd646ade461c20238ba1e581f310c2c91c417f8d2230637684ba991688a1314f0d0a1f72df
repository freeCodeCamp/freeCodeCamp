// deno-fmt-ignore-file
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
import { FromType } from './from_type.mjs';
export function FromIntersect(types) {
    const evaluated = EvaluateIntersect(types);
    const result = FromType(evaluated);
    return result;
}
