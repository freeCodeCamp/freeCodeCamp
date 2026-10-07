// deno-fmt-ignore-file
import { Evaluate, Instantiate } from '../../type/index.mjs';
import { FromType } from './from_type.mjs';
export function FromIntersect(context, type) {
    const instantiated = Instantiate(context, type);
    const evaluated = Evaluate(instantiated);
    return FromType(context, evaluated);
}
