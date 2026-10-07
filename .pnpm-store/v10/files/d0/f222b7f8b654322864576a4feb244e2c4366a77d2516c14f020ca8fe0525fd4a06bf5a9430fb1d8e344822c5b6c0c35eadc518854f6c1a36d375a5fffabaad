// deno-fmt-ignore-file
import { CheckContext, AccumulatedErrorContext } from './_context.mjs';
import { Reducer } from './_reducer.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
function BuildAllOfStandard(stack, context, schema, value) {
    return Reducer(stack, context, schema.allOf, value, E.IsEqual(E.Member('results', 'length'), E.Constant(schema.allOf.length)));
}
function BuildAllOfFast(stack, context, schema, value) {
    return E.ReduceAnd(schema.allOf.map((schema) => BuildSchema(stack, context, schema, value)));
}
export function BuildAllOf(stack, context, schema, value) {
    return context.UseUnevaluated()
        ? BuildAllOfStandard(stack, context, schema, value)
        : BuildAllOfFast(stack, context, schema, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckAllOf(stack, context, schema, value) {
    const results = schema.allOf.reduce((result, schema) => {
        const nextContext = new CheckContext();
        return CheckSchema(stack, nextContext, schema, value) ? [...result, nextContext] : result;
    }, []);
    return G.IsEqual(results.length, schema.allOf.length) && context.Merge(results);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorAllOf(stack, context, schemaPath, instancePath, schema, value) {
    const failedContexts = [];
    const results = schema.allOf.reduce((result, schema, index) => {
        const nextSchemaPath = `${schemaPath}/allOf/${index}`;
        const nextContext = new AccumulatedErrorContext();
        const isSchema = ErrorSchema(stack, nextContext, nextSchemaPath, instancePath, schema, value);
        if (!isSchema)
            failedContexts.push(nextContext);
        return isSchema ? [...result, nextContext] : result;
    }, []);
    const isAllOf = G.IsEqual(results.length, schema.allOf.length) && context.Merge(results);
    if (!isAllOf)
        failedContexts.forEach(failed => failed.GetErrors().forEach(error => context.AddError(error)));
    return isAllOf;
}
