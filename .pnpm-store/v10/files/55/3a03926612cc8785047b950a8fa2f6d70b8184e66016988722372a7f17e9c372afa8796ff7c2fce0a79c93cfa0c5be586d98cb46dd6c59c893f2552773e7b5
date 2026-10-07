// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchemaPushStack, CheckSchemaPushStack, ErrorSchemaPushStack } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildPrefixItems(stack, context, schema, value) {
    return E.ReduceAnd(schema.prefixItems.map((schema, index) => {
        const isLength = E.IsLessEqualThan(E.Member(value, 'length'), E.Constant(index));
        const isSchema = BuildSchemaPushStack(stack, context, schema, `${value}[${index}]`);
        const addIndex = context.AddIndex(E.Constant(index));
        const guarded = context.UseUnevaluated() ? E.And(isSchema, addIndex) : isSchema;
        return E.Or(isLength, guarded);
    }));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckPrefixItems(stack, context, schema, value) {
    return G.IsEqual(value.length, 0) || G.Every(schema.prefixItems, 0, (schema, index) => {
        return G.IsLessEqualThan(value.length, index)
            || (CheckSchemaPushStack(stack, context, schema, value[index]) && context.AddIndex(index));
    });
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorPrefixItems(stack, context, schemaPath, instancePath, schema, value) {
    return G.IsEqual(value.length, 0) || G.EveryAll(schema.prefixItems, 0, (schema, index) => {
        const nextSchemaPath = `${schemaPath}/prefixItems/${index}`;
        const nextInstancePath = `${instancePath}/${index}`;
        return G.IsLessEqualThan(value.length, index)
            || (ErrorSchemaPushStack(stack, context, nextSchemaPath, nextInstancePath, schema, value[index]) && context.AddIndex(index));
    });
}
