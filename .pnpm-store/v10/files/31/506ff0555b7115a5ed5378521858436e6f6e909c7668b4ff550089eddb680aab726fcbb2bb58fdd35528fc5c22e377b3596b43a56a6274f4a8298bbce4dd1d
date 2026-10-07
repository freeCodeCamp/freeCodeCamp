// deno-fmt-ignore-file
import { Ref } from '../../type/index.mjs';
import { FromType } from './from_type.mjs';
import { Callback } from './callback.mjs';
export function FromCyclic(direction, context, type, value) {
    value = FromType(direction, { ...context, ...type.$defs }, Ref(type.$ref), value);
    return Callback(direction, context, type, value);
}
