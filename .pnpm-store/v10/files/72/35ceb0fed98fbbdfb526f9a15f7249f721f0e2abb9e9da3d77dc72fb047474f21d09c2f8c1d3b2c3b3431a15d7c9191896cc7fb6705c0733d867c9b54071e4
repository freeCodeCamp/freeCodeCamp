// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { IsEnum } from '../../types/enum.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { Union, IsUnion } from '../../types/union.mjs';
import { IsTemplateLiteral, IsTemplateLiteralDeferred } from '../../types/template_literal.mjs';
import { IsBigInt, BigIntPattern } from '../../types/bigint.mjs';
import { IsString, StringPattern } from '../../types/string.mjs';
import { IsNumber, NumberPattern } from '../../types/number.mjs';
import { IsInteger, IntegerPattern } from '../../types/integer.mjs';
import { IsBoolean } from '../../types/boolean.mjs';
import { NeverPattern } from '../../types/never.mjs';
import { TemplateLiteralCreate } from './create.mjs';
import { EnumValuesToVariants } from '../enum/enum_to_union.mjs';
import { TemplateLiteralAction } from './instantiate.mjs';
function JoinString(input) {
    return input.join('|');
}
function UnwrapTemplateLiteralPattern(pattern) {
    return pattern.slice(1, pattern.length - 1);
}
function EncodeLiteral(value, right, pattern) {
    return EncodeTypes(right, `${pattern}${value}`);
}
function EncodeBigInt(right, pattern) {
    return EncodeTypes(right, `${pattern}${BigIntPattern}`);
}
function EncodeInteger(right, pattern) {
    return EncodeTypes(right, `${pattern}${IntegerPattern}`);
}
function EncodeNumber(right, pattern) {
    return EncodeTypes(right, `${pattern}${NumberPattern}`);
}
function EncodeBoolean(right, pattern) {
    return EncodeType(Union([Literal('false'), Literal('true')]), right, pattern);
}
function EncodeString(right, pattern) {
    return EncodeTypes(right, `${pattern}${StringPattern}`);
}
function EncodeTemplateLiteral(templatePattern, right, pattern) {
    return EncodeTypes(right, `${pattern}${UnwrapTemplateLiteralPattern(templatePattern)}`);
}
function EncodeTemplateLiteralDeferred(types, right, pattern) {
    const templateLiteral = TemplateLiteralAction(types, {});
    const result = EncodeType(templateLiteral, right, pattern);
    return result;
}
function EncodeEnum(types, right, pattern) {
    const variants = EnumValuesToVariants(types);
    return EncodeUnion(variants, right, pattern);
}
function EncodeUnion(types, right, pattern, result = []) {
    return Guard.TakeLeft(types, (head, tail) => EncodeUnion(tail, right, pattern, [...result, EncodeType(head, [], '')]), () => EncodeTypes(right, `${pattern}(${JoinString(result)})`));
}
function EncodeType(type, right, pattern) {
    return (IsEnum(type) ? EncodeEnum(type.enum, right, pattern) :
        IsInteger(type) ? EncodeInteger(right, pattern) :
            IsLiteral(type) ? EncodeLiteral(type.const, right, pattern) :
                IsBigInt(type) ? EncodeBigInt(right, pattern) :
                    IsBoolean(type) ? EncodeBoolean(right, pattern) :
                        IsNumber(type) ? EncodeNumber(right, pattern) :
                            IsString(type) ? EncodeString(right, pattern) :
                                IsTemplateLiteral(type) ? EncodeTemplateLiteral(type.pattern, right, pattern) :
                                    IsTemplateLiteralDeferred(type) ? EncodeTemplateLiteralDeferred(type.parameters[0], right, pattern) :
                                        IsUnion(type) ? EncodeUnion(type.anyOf, right, pattern) :
                                            NeverPattern);
}
function EncodeTypes(types, pattern) {
    return Guard.TakeLeft(types, (left, right) => EncodeType(left, right, pattern), () => pattern);
}
function EncodePattern(types) {
    const encoded = EncodeTypes(types, '');
    const result = `^${encoded}$`;
    return result;
}
/** Encodes a TemplateLiteral type sequence into a TemplateLiteral */
export function TemplateLiteralEncode(types) {
    const pattern = EncodePattern(types);
    const result = TemplateLiteralCreate(pattern);
    return result;
}
