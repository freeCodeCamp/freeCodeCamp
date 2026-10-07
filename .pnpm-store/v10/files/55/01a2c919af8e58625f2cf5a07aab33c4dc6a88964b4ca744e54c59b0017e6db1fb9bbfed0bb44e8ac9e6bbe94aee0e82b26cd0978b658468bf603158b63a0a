// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Unique } from './_unique.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchemaPushStack, CheckSchemaPushStack, ErrorSchemaPushStack } from './schema.mjs';
// ------------------------------------------------------------------
// Valid
// ------------------------------------------------------------------
function IsValid(schema) {
    return Schema.IsItems(schema) && G.IsArray(schema.items);
}
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildAdditionalItems(stack, context, schema, value) {
    if (!IsValid(schema))
        return E.Constant(true);
    const [item, index] = [Unique(), Unique()];
    const isSchema = BuildSchemaPushStack(stack, context, schema.additionalItems, item);
    const isLength = E.IsLessThan(index, E.Constant(schema.items.length));
    const addIndex = context.AddIndex(index);
    const guarded = context.UseUnevaluated() ? E.Or(isLength, E.And(isSchema, addIndex)) : E.Or(isLength, isSchema);
    return E.Call(E.Member(value, 'every'), [E.ArrowFunction([item, index], guarded)]);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckAdditionalItems(stack, context, schema, value) {
    if (!IsValid(schema))
        return true;
    const isAdditionalItems = value.every((item, index) => {
        return G.IsLessThan(index, schema.items.length)
            || (CheckSchemaPushStack(stack, context, schema.additionalItems, item) && context.AddIndex(index));
    });
    return isAdditionalItems;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorAdditionalItems(stack, context, schemaPath, instancePath, schema, value) {
    if (!IsValid(schema))
        return true;
    const isAdditionalItems = value.every((item, index) => {
        const nextSchemaPath = `${schemaPath}/additionalItems`;
        const nextInstancePath = `${instancePath}/${index}`;
        return G.IsLessThan(index, schema.items.length) ||
            (ErrorSchemaPushStack(stack, context, nextSchemaPath, nextInstancePath, schema.additionalItems, item) && context.AddIndex(index));
    });
    return isAdditionalItems;
}
