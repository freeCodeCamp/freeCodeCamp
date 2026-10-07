// deno-fmt-ignore-file
import { Instantiate, Evaluate } from '../../type/index.mjs';
import { FromType } from './from_type.mjs';
export function FromIntersect(context, type, value) {
    const instantiated = Instantiate(context, type);
    const evaluated = Evaluate(instantiated);
    return FromType(context, evaluated, value);
}
