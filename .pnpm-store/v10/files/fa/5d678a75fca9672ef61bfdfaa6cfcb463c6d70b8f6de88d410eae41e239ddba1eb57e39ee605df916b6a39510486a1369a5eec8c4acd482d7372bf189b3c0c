// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchemaPushStack, CheckSchemaPushStack, ErrorSchemaPushStack } from './schema.mjs';
// ------------------------------------------------------------------
// ItemsSized
// ------------------------------------------------------------------
function BuildItemsSized(stack, context, schema, value) {
    return E.ReduceAnd(schema.items.map((schema, index) => {
        const isLength = E.IsLessEqualThan(E.Member(value, 'length'), E.Constant(index));
        const isSchema = BuildSchemaPushStack(stack, context, schema, `${value}[${index}]`);
        const addIndex = context.AddIndex(E.Constant(index));
        const guarded = context.UseUnevaluated() ? E.And(isSchema, addIndex) : isSchema;
        return E.Or(isLength, guarded);
    }));
}
function CheckItemsSized(stack, context, schema, value) {
    return G.Every(schema.items, 0, (schema, index) => {
        return G.IsLessEqualThan(value.length, index)
            || (CheckSchemaPushStack(stack, context, schema, value[index]) && context.AddIndex(index));
    });
}
function ErrorItemsSized(stack, context, schemaPath, instancePath, schema, value) {
    return G.EveryAll(schema.items, 0, (schema, index) => {
        const nextSchemaPath = `${schemaPath}/items/${index}`;
        const nextInstancePath = `${instancePath}/${index}`;
        return G.IsLessEqualThan(value.length, index)
            || (ErrorSchemaPushStack(stack, context, nextSchemaPath, nextInstancePath, schema, value[index]) && context.AddIndex(index));
    });
}
// ------------------------------------------------------------------
// ItemsUnsized
// ------------------------------------------------------------------
function BuildItemsUnsized(stack, context, schema, value) {
    const offset = Schema.IsPrefixItems(schema) ? schema.prefixItems.length : 0;
    const isSchema = BuildSchemaPushStack(stack, context, schema.items, 'element');
    const addIndex = context.AddIndex('index');
    const guarded = context.UseUnevaluated() ? E.And(isSchema, addIndex) : isSchema;
    return E.Every(value, E.Constant(offset), ['element', 'index'], guarded);
}
function CheckItemsUnsized(stack, context, schema, value) {
    const offset = Schema.IsPrefixItems(schema) ? schema.prefixItems.length : 0;
    return G.Every(value, offset, (element, index) => {
        return CheckSchemaPushStack(stack, context, schema.items, element)
            && context.AddIndex(index);
    });
}
function ErrorItemsUnsized(stack, context, schemaPath, instancePath, schema, value) {
    const offset = Schema.IsPrefixItems(schema) ? schema.prefixItems.length : 0;
    return G.EveryAll(value, offset, (element, index) => {
        const nextSchemaPath = `${schemaPath}/items`;
        const nextInstancePath = `${instancePath}/${index}`;
        return ErrorSchemaPushStack(stack, context, nextSchemaPath, nextInstancePath, schema.items, element)
            && context.AddIndex(index);
    });
}
// ------------------------------------------------------------------
// Items
// ------------------------------------------------------------------
export function BuildItems(stack, context, schema, value) {
    return Schema.IsItemsSized(schema) ? BuildItemsSized(stack, context, schema, value) : BuildItemsUnsized(stack, context, schema, value);
}
export function CheckItems(stack, context, schema, value) {
    return Schema.IsItemsSized(schema) ? CheckItemsSized(stack, context, schema, value) : CheckItemsUnsized(stack, context, schema, value);
}
export function ErrorItems(stack, context, schemaPath, instancePath, schema, value) {
    return Schema.IsItemsSized(schema) ? ErrorItemsSized(stack, context, schemaPath, instancePath, schema, value) : ErrorItemsUnsized(stack, context, schemaPath, instancePath, schema, value);
}
