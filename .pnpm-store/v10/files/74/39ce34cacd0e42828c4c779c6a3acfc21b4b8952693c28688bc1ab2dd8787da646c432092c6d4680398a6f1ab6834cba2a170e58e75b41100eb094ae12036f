// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Union } from '../../types/union.mjs';
import { Literal } from '../../types/literal.mjs';
import { Null } from '../../types/null.mjs';
import { Never } from '../../types/never.mjs';
function FromEnumValue(value) {
    return (Guard.IsString(value) || Guard.IsNumber(value) ? Literal(value) :
        Guard.IsNull(value) ? Null() :
            Never());
}
export function EnumValuesToVariants(values) {
    const result = values.map(value => FromEnumValue(value));
    return result;
}
export function EnumValuesToUnion(values) {
    const variants = EnumValuesToVariants(values);
    const result = Union(variants);
    return result;
}
export function EnumToUnion(type) {
    const result = EnumValuesToUnion(type.enum);
    return result;
}
