// deno-fmt-ignore-file
import { EnumValuesToVariants } from '../enum/enum_to_union.mjs';
import { FromUnion } from './from_union.mjs';
export function FromEnum(values) {
    const variants = EnumValuesToVariants(values);
    const result = FromUnion(variants);
    return result;
}
