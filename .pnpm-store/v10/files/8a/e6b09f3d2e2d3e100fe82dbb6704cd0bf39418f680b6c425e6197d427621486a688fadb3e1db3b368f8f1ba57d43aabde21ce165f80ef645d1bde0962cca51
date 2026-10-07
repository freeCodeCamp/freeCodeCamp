// deno-fmt-ignore-file
import { EnumValuesToUnion } from '../enum/enum_to_union.mjs';
import { FromKey } from './from_key.mjs';
export function FromEnumKey(values, value) {
    const unionKey = EnumValuesToUnion(values);
    const result = FromKey(unionKey, value);
    return result;
}
