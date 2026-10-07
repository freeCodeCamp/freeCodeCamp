// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildDependentSchemas(stack, context, schema, value) {
    const isLength = E.IsEqual(E.Member(E.Keys(value), 'length'), E.Constant(0));
    const isEvery = E.ReduceAnd(G.Entries(schema.dependentSchemas).map(([key, schema]) => {
        const notKey = E.Not(E.HasPropertyKey(value, E.Constant(key)));
        const isSchema = BuildSchema(stack, context, schema, value);
        return E.Or(notKey, isSchema);
    }));
    return E.Or(isLength, isEvery);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckDependentSchemas(stack, context, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEvery = G.Every(G.Entries(schema.dependentSchemas), 0, ([key, schema]) => {
        return !G.HasPropertyKey(value, key) ||
            CheckSchema(stack, context, schema, value);
    });
    return isLength || isEvery;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorDependentSchemas(stack, context, schemaPath, instancePath, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEvery = G.EveryAll(G.Entries(schema.dependentSchemas), 0, ([key, schema]) => {
        const nextSchemaPath = `${schemaPath}/dependentSchemas/${key}`;
        return !G.HasPropertyKey(value, key) ||
            ErrorSchema(stack, context, nextSchemaPath, instancePath, schema, value);
    });
    return isLength || isEvery;
}
