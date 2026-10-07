// deno-fmt-ignore-file
import { CheckContext } from './_context.mjs';
import { Reducer } from './_reducer.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
function BuildNotUnevaluated(stack, context, schema, value) {
    return Reducer(stack, context, [schema.not], value, E.Not(E.IsEqual(E.Member('results', 'length'), E.Constant(1))));
}
function BuildNotFast(stack, context, schema, value) {
    return E.Not(BuildSchema(stack, context, schema.not, value));
}
export function BuildNot(stack, context, schema, value) {
    return context.UseUnevaluated() ? BuildNotUnevaluated(stack, context, schema, value) : BuildNotFast(stack, context, schema, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckNot(stack, context, schema, value) {
    const nextContext = new CheckContext();
    const isSchema = !CheckSchema(stack, nextContext, schema.not, value);
    const isNot = isSchema && context.Merge([nextContext]);
    return isNot;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorNot(stack, context, schemaPath, instancePath, schema, value) {
    return CheckNot(stack, context, schema, value) || context.AddError({
        keyword: 'not',
        schemaPath,
        instancePath,
        params: {},
    });
}
