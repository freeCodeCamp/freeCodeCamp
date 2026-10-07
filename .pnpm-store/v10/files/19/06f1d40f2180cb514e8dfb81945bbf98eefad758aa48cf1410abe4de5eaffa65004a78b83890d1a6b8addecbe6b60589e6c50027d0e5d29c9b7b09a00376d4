// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { IsEnum } from '../../types/enum.mjs';
import { IsTemplateLiteral } from '../../types/template_literal.mjs';
import { IsUnion } from '../../types/union.mjs';
import { EnumValuesToVariants } from '../enum/index.mjs';
import { TemplateLiteralDecode } from '../template_literal/decode.mjs';
function FromTemplateLiteral(pattern) {
    const decoded = TemplateLiteralDecode(pattern);
    const result = FromType(decoded);
    return result;
}
function FromUnion(types) {
    return types.reduce((result, left) => {
        return [...result, ...FromType(left)];
    }, []);
}
function FromLiteral(value) {
    const result = Guard.IsNumber(value) ? [Literal(`${value}`)] : [Literal(value)];
    return result;
}
function FromType(type) {
    const result = (IsEnum(type) ? FromUnion(EnumValuesToVariants(type.enum)) :
        IsLiteral(type) ? FromLiteral(type.const) :
            IsTemplateLiteral(type) ? FromTemplateLiteral(type.pattern) :
                IsUnion(type) ? FromUnion(type.anyOf) :
                    [type]);
    return result;
}
export function MappedVariants(type) {
    const result = FromType(type);
    return result;
}
