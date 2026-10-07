// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { String } from '../../types/string.mjs';
import { IsTemplateLiteral } from '../../types/template_literal.mjs';
import { Union, IsUnion } from '../../types/union.mjs';
import { ParsePatternIntoTypes } from '../patterns/pattern.mjs';
import { IsTemplateLiteralFinite } from './is_finite.mjs';
import { TemplateLiteralCreate } from './create.mjs';
function FromLiteralPush(variants, value, result = []) {
    return Guard.TakeLeft(variants, (left, right) => FromLiteralPush(right, value, [...result, `${left}${value}`]), () => result);
}
function FromLiteral(variants, value) {
    return (Guard.IsEqual(variants.length, 0) ? [`${value}`] : FromLiteralPush(variants, value));
}
function FromUnion(variants, types, result = []) {
    return Guard.TakeLeft(types, (left, right) => FromUnion(variants, right, [...result, ...FromType(variants, left)]), () => result);
}
// ------------------------------------------------------------------
// deno-coverage-ignore-start - symmetric unreachable | internal
// 
// Parsed TemplateLiteral patterns only yield Literal or Union but
// we keep the fall-through to assert that no other types can reach 
// here without error.
//
// ------------------------------------------------------------------
function FromType(variants, type) {
    const result = (IsUnion(type) ? FromUnion(variants, type.anyOf) :
        IsLiteral(type) ? FromLiteral(variants, type.const) :
            Unreachable() // []
    );
    return result;
}
function DecodeFromSpan(variants, types) {
    return Guard.TakeLeft(types, (left, right) => DecodeFromSpan(FromType(variants, left), right), () => variants);
}
function VariantsToLiterals(variants) {
    return variants.map(variant => Literal(variant));
}
function DecodeTypesAsUnion(types) {
    const variants = DecodeFromSpan([], types);
    const literals = VariantsToLiterals(variants);
    const result = Union(literals);
    return result;
}
// ------------------------------------------------------------------
// deno-coverage-ignore-start - internal
// 
// Cannot invoke the 0-length condition as the TemplateLiteral 
// parsers always return at least 1 TLiteral or TUnion. We would 
// return a empty string TLiteral for this case, but will use 
// Unreachable to catch parse inputs that trigger 0-length.
//
// ------------------------------------------------------------------
function DecodeTypes(types) {
    return (Guard.IsEqual(types.length, 0) ? Unreachable() : // Literal('') :
        Guard.IsEqual(types.length, 1) && IsLiteral(types[0]) ? types[0] :
            DecodeTypesAsUnion(types));
}
/**
 * (Internal) Decodes a TemplateLiteral pattern into a Type. This function is unsafe. Decoding a non-finite
 * TemplateLiteral pattern may produce another TemplateLiteral pattern. During enumeration, this
 * TemplateLiteral -> TemplateLiteral behavior can cause a StackOverflow. A better in-flight template-literal
 * decoding algorithm is needed. (for review)
 */
export function TemplateLiteralDecodeUnsafe(pattern) {
    const types = ParsePatternIntoTypes(pattern);
    const result = Guard.IsEqual(types.length, 0) // Failed to Parse | IsTemplateLiteralPattern
        ? String() // ... Pattern cannot be typed, so discard
        : IsTemplateLiteralFinite(types)
            ? DecodeTypes(types)
            : TemplateLiteralCreate(pattern);
    return result;
}
/** Decodes a TemplateLiteral pattern but returns TString if the pattern in non-finite. */
export function TemplateLiteralDecode(pattern) {
    const decoded = TemplateLiteralDecodeUnsafe(pattern);
    const result = IsTemplateLiteral(decoded) ? String() : decoded;
    return result;
}
