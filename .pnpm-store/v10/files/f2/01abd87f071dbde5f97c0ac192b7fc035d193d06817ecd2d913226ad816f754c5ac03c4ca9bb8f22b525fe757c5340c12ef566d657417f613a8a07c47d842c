// deno-fmt-ignore-file
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildDependencies(stack, context, schema, value) {
    const isLength = E.IsEqual(E.Member(E.Keys(value), 'length'), E.Constant(0));
    const isEveryDependency = E.ReduceAnd(G.Entries(schema.dependencies).map(([key, schema]) => {
        const notKey = E.Not(E.HasPropertyKey(value, E.Constant(key)));
        const isSchema = BuildSchema(stack, context, schema, value);
        const isEveryKey = (schema) => E.ReduceAnd(schema.map((key) => E.HasPropertyKey(value, E.Constant(key))));
        return E.Or(notKey, G.IsArray(schema) ? isEveryKey(schema) : isSchema);
    }));
    return E.Or(isLength, isEveryDependency);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckDependencies(stack, context, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEvery = G.Every(G.Entries(schema.dependencies), 0, ([key, schema]) => {
        return !G.HasPropertyKey(value, key) || (G.IsArray(schema)
            ? schema.every((key) => G.HasPropertyKey(value, key))
            : CheckSchema(stack, context, schema, value));
    });
    return isLength || isEvery;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorDependencies(stack, context, schemaPath, instancePath, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEvery = G.EveryAll(G.Entries(schema.dependencies), 0, ([key, schema]) => {
        const nextSchemaPath = `${schemaPath}/dependencies/${key}`;
        return !G.HasPropertyKey(value, key) || (G.IsArray(schema)
            ? schema.every((dependency) => G.HasPropertyKey(value, dependency) || context.AddError({
                keyword: 'dependencies',
                schemaPath,
                instancePath,
                params: { property: key, dependencies: schema },
            })) : ErrorSchema(stack, context, nextSchemaPath, instancePath, schema, value));
    });
    return isLength || isEvery;
}
