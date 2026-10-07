// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
import { CyclicTarget } from '../cyclic/target.mjs';
export function FromCyclic(defs, ref) {
    const target = CyclicTarget(defs, ref);
    const result = FromType(target);
    return result;
}
