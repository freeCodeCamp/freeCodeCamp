// deno-fmt-ignore-file
import { CheckContext, AccumulatedErrorContext } from './_context.mjs';
import { Reducer } from './_reducer.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
function BuildOneOfUnevaluated(stack, context, schema, value) {
    return Reducer(stack, context, schema.oneOf, value, E.IsEqual(E.Member('results', 'length'), E.Constant(1)));
}
function BuildOneOfFast(stack, context, schema, value) {
    const results = E.ArrayLiteral(schema.oneOf.map((schema) => BuildSchema(stack, context, schema, value)));
    const count = E.Call(E.Member(results, 'reduce'), [
        E.ArrowFunction(['count', 'result'], E.Ternary(E.IsEqual('result', E.Constant(true)), E.PrefixIncrement('count'), 'count')),
        E.Constant(0),
    ]);
    return E.IsEqual(count, E.Constant(1));
}
export function BuildOneOf(stack, context, schema, value) {
    return context.UseUnevaluated() ? BuildOneOfUnevaluated(stack, context, schema, value) : BuildOneOfFast(stack, context, schema, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckOneOf(stack, context, schema, value) {
    const passedContexts = schema.oneOf.reduce((result, schema) => {
        const nextContext = new CheckContext();
        return CheckSchema(stack, nextContext, schema, value) ? [...result, nextContext] : result;
    }, []);
    return G.IsEqual(passedContexts.length, 1) && context.Merge(passedContexts);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorOneOf(stack, context, schemaPath, instancePath, schema, value) {
    const failedContexts = [];
    const passingSchemas = [];
    const passedContexts = schema.oneOf.reduce((result, schema, index) => {
        const nextContext = new AccumulatedErrorContext();
        const nextSchemaPath = `${schemaPath}/oneOf/${index}`;
        const isSchema = ErrorSchema(stack, nextContext, nextSchemaPath, instancePath, schema, value);
        if (isSchema)
            passingSchemas.push(index);
        if (!isSchema)
            failedContexts.push(nextContext);
        return isSchema ? [...result, nextContext] : result;
    }, []);
    const isOneOf = G.IsEqual(passedContexts.length, 1) && context.Merge(passedContexts);
    if (!isOneOf && G.IsEqual(passingSchemas.length, 0))
        failedContexts.forEach(failed => failed.GetErrors().forEach(error => context.AddError(error)));
    return isOneOf || context.AddError({
        keyword: 'oneOf',
        schemaPath,
        instancePath,
        params: { passingSchemas },
    });
}
