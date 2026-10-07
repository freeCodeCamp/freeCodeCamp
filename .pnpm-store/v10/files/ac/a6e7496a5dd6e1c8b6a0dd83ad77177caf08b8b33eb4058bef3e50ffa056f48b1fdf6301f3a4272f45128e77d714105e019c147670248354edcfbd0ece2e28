// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Ref } from '../../type/index.mjs';
import { FromType } from './from_type.mjs';
export function FromCyclic(context, type, value) {
    return FromType({ ...context, ...type.$defs }, Ref(type.$ref), value);
}
