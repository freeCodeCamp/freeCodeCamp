// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
import { EvaluateIntersect } from '../evaluate/evaluate.mjs';
export function FromIntersect(types) {
    const result = types.map(type => FromType(type));
    return EvaluateIntersect(result);
}
