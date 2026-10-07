// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsLiteral } from '../../types/literal.mjs';
import { IsUnion } from '../../types/union.mjs';
function FromLiteral(_value) {
    return true;
}
function FromTypesReduce(types) {
    return Guard.TakeLeft(types, (left, right) => FromType(left)
        ? FromTypesReduce(right)
        : false, () => true);
}
function FromTypes(types) {
    const result = Guard.IsEqual(types.length, 0) ? false : FromTypesReduce(types);
    return result;
}
function FromType(type) {
    return (IsUnion(type) ? FromTypes(type.anyOf) :
        IsLiteral(type) ? FromLiteral(type.const) :
            false);
}
/** Returns true if the given TemplateLiteral types yields a finite variant set */
export function IsTemplateLiteralFinite(types) {
    const result = FromTypes(types);
    return result;
}
