// deno-fmt-ignore-file
import * as S from '../types/index.mjs';
import * as V from './_externals.mjs';
import { Unique } from './_unique.mjs';
import { AccumulatedErrorContext } from './_context.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildSchemaPushStack, CheckSchemaPushStack, ErrorSchemaPushStack } from './schema.mjs';
// ------------------------------------------------------------------
// Common: GetPropertiesPattern
//
// Constructs a regular expression that matches all property keys
// and pattern properties defined in a schema. This approach unifies
// handling of both property types, avoiding separate logic paths.
//
// If no keys or patterns are present, it returns a pattern that
// matches nothing: '(?!)'.
//
// ------------------------------------------------------------------
function GetPropertyKeyAsPattern(key) {
    const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return `^${escaped}$`;
}
function GetPropertiesPattern(schema) {
    const patterns = [];
    if (S.IsPatternProperties(schema))
        patterns.push(...G.Keys(schema.patternProperties));
    if (S.IsProperties(schema))
        patterns.push(...G.Keys(schema.properties).map(GetPropertyKeyAsPattern));
    return G.IsEqual(patterns.length, 0) ? '(?!)' : `(${patterns.join('|')})`;
}
// ------------------------------------------------------------------
// BuildAdditionalPropertiesFast
//
// Optimized logic for schemas with `additionalProperties: false`.
//
// This fast-path applies only when:
// - `additionalProperties` is explicitly set to false,
// - the schema uses only `properties` (no `patternProperties`),
// - and all defined properties are required (i.e., no optional keys).
//
// This constraint is common when enforcing strict object shapes
// with only known, fixed keys. When all these conditions are met,
// we can generate a simplified and efficient runtime check.
//
// ------------------------------------------------------------------
export function CanAdditionalPropertiesFast(_context, schema, _value) {
    return S.IsRequired(schema)
        && S.IsProperties(schema)
        && !S.IsPatternProperties(schema)
        && G.IsEqual(schema.additionalProperties, false)
        && G.IsEqual(G.Keys(schema.properties).length, schema.required.length);
}
export function BuildAdditionalPropertiesFast(_context, schema, value) {
    return E.IsEqual(E.Member(E.Call(E.Member('Object', 'getOwnPropertyNames'), [value]), 'length'), E.Constant(schema.required.length));
}
// ------------------------------------------------------------------
// BuildAdditionalPropertiesStandard
// ------------------------------------------------------------------
export function BuildAdditionalPropertiesStandard(stack, context, schema, value) {
    const [key, _index] = [Unique(), Unique()];
    const regexp = V.CreateVariable(new RegExp(GetPropertiesPattern(schema)));
    const isSchema = BuildSchemaPushStack(stack, context, schema.additionalProperties, `${value}[${key}]`);
    const isKey = E.Call(E.Member(regexp, 'test'), [key]);
    const addKey = context.AddKey(key);
    const guarded = context.UseUnevaluated() ? E.Or(isKey, E.And(isSchema, addKey)) : E.Or(isKey, isSchema);
    const result = E.Every(E.Keys(value), E.Constant(0), [key, _index], guarded);
    return result;
}
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildAdditionalProperties(stack, context, schema, value) {
    return CanAdditionalPropertiesFast(context, schema, value)
        ? BuildAdditionalPropertiesFast(context, schema, value)
        : BuildAdditionalPropertiesStandard(stack, context, schema, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckAdditionalProperties(stack, context, schema, value) {
    const regexp = new RegExp(GetPropertiesPattern(schema));
    const isAdditionalProperties = G.Every(G.Keys(value), 0, (key, _index) => {
        return regexp.test(key) ||
            (CheckSchemaPushStack(stack, context, schema.additionalProperties, value[key]) && context.AddKey(key));
    });
    return isAdditionalProperties;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorAdditionalProperties(stack, context, schemaPath, instancePath, schema, value) {
    const regexp = new RegExp(GetPropertiesPattern(schema));
    const additionalProperties = [];
    const isAdditionalProperties = G.EveryAll(G.Keys(value), 0, (key, _index) => {
        const nextSchemaPath = `${schemaPath}/additionalProperties`;
        const nextInstancePath = `${instancePath}/${key}`;
        const nextContext = new AccumulatedErrorContext();
        const isAdditionalProperty = regexp.test(key) ||
            (ErrorSchemaPushStack(stack, nextContext, nextSchemaPath, nextInstancePath, schema.additionalProperties, value[key]) && context.AddKey(key));
        if (!isAdditionalProperty)
            additionalProperties.push(key);
        return isAdditionalProperty;
    });
    return isAdditionalProperties || context.AddError({
        keyword: 'additionalProperties',
        schemaPath,
        instancePath: instancePath,
        params: { additionalProperties },
    });
}
