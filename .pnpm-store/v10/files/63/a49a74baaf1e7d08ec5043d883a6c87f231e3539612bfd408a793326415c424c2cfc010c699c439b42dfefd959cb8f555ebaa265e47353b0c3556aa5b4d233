// deno-fmt-ignore-file
import { Memory } from '../../../system/memory/index.mjs';
import { Cyclic } from '../../types/cyclic.mjs';
import { FromType } from './from_type.mjs';
import { CyclicTarget } from '../cyclic/target.mjs';
export function FromCyclic(defs, ref) {
    const target = CyclicTarget(defs, ref);
    const partial = FromType(target);
    const result = Cyclic(Memory.Assign(defs, { [ref]: partial }), ref);
    return result;
}
