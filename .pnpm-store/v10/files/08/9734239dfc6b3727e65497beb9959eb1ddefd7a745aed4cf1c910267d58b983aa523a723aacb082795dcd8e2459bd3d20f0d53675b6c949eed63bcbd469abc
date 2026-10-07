// deno-fmt-ignore-file
import { CheckContext, AccumulatedErrorContext } from './_context.mjs';
import { Reducer } from './_reducer.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
function BuildAnyOfStandard(stack, context, schema, value) {
    return Reducer(stack, context, schema.anyOf, value, E.IsGreaterThan(E.Member('results', 'length'), E.Constant(0)));
}
function BuildAnyOfFast(stack, context, schema, value) {
    return E.ReduceOr(schema.anyOf.map((schema) => BuildSchema(stack, context, schema, value)));
}
export function BuildAnyOf(stack, context, schema, value) {
    return context.UseUnevaluated()
        ? BuildAnyOfStandard(stack, context, schema, value)
        : BuildAnyOfFast(stack, context, schema, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckAnyOf(stack, context, schema, value) {
    const results = schema.anyOf.reduce((result, schema) => {
        const nextContext = new CheckContext();
        return CheckSchema(stack, nextContext, schema, value) ? [...result, nextContext] : result;
    }, []);
    return G.IsGreaterThan(results.length, 0) && context.Merge(results);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorAnyOf(stack, context, schemaPath, instancePath, schema, value) {
    const failedContexts = [];
    const results = schema.anyOf.reduce((result, schema, index) => {
        const nextContext = new AccumulatedErrorContext();
        const nextSchemaPath = `${schemaPath}/anyOf/${index}`;
        const isSchema = ErrorSchema(stack, nextContext, nextSchemaPath, instancePath, schema, value);
        if (!isSchema)
            failedContexts.push(nextContext);
        return isSchema ? [...result, nextContext] : result;
    }, []);
    const isAnyOf = G.IsGreaterThan(results.length, 0) && context.Merge(results);
    if (!isAnyOf)
        failedContexts.forEach(failed => failed.GetErrors().forEach(error => context.AddError(error)));
    return isAnyOf || context.AddError({
        keyword: 'anyOf',
        schemaPath,
        instancePath,
        params: {}
    });
}
