// deno-fmt-ignore-file
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
import { FromKey } from './from_key.mjs';
export function FromIntersectKey(types, value) {
    const evaluatedKey = EvaluateIntersect(types);
    const result = FromKey(evaluatedKey, value);
    return result;
}
