// deno-fmt-ignore-file
// deno-lint-ignore-file
import { Memory } from '../../system/system.mjs';
import { Guard } from '../../guard/index.mjs';
import { IsSchema, IsKind } from './schema.mjs';
import { Deferred } from './deferred.mjs';
import { ParseTemplateIntoTypes } from '../engine/patterns/template.mjs';
import { TemplateLiteralAction } from '../engine/template_literal/instantiate.mjs';
/** Creates a deferred TemplateLiteral action. */
export function TemplateLiteralDeferred(types, options = {}) {
    return Deferred('TemplateLiteral', [types], options);
}
/** Returns true if this value is a deferred Interface action. */
export function IsTemplateLiteralDeferred(value) {
    return IsSchema(value)
        && Guard.HasPropertyKey(value, 'action')
        && Guard.IsEqual(value.action, 'TemplateLiteral');
}
export function TemplateLiteralFromTypes(types) {
    return TemplateLiteralAction(types, {});
}
export function TemplateLiteralFromString(template) {
    const types = ParseTemplateIntoTypes(template);
    return TemplateLiteralFromTypes(types);
}
/** Creates a TemplateLiteral type. */
export function TemplateLiteral(input, options = {}) {
    const type = Guard.IsString(input) ? TemplateLiteralFromString(input) : TemplateLiteralFromTypes(input);
    return Memory.Update(type, {}, options);
}
// ------------------------------------------------------------------
// Guard
// ------------------------------------------------------------------
/** Returns true if the given value is TTemplateLiteral. */
export function IsTemplateLiteral(value) {
    return IsKind(value, 'TemplateLiteral');
}
