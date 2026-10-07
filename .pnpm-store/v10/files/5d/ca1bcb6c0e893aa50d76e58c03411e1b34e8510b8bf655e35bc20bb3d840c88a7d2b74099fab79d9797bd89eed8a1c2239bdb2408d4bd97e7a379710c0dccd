// deno-fmt-ignore-file
import { EnumToUnion } from '../../type/engine/enum/index.mjs';
import { FromType } from './from_type.mjs';
export function FromEnum(context, type, value) {
    const union = EnumToUnion(type);
    return FromType(context, union, value);
}
