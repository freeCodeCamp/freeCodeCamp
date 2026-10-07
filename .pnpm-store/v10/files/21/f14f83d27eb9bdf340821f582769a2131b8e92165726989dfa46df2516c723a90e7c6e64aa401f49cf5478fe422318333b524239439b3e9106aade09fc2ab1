// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
export function FromTuple(context, type) {
    return Array.from({ length: type.minItems }, (_, i) => FromType(context, type.items[i]));
}
