// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Unique } from './_unique.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Valid
// ------------------------------------------------------------------
function IsValid(schema) {
    return Schema.IsContains(schema);
}
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMaxContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return E.Constant(true);
    const [result, item] = [Unique(), Unique()];
    const count = E.Call(E.Member(value, 'reduce'), [E.ArrowFunction([result, item], E.Ternary(BuildSchema(stack, context, schema.contains, item), E.PrefixIncrement(result), result)), E.Constant(0)]);
    return E.IsLessEqualThan(count, E.Constant(schema.maxContains));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMaxContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return true;
    const count = value.reduce((result, item) => CheckSchema(stack, context, schema.contains, item) ? ++result : result, 0);
    return G.IsLessEqualThan(count, schema.maxContains);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMaxContains(stack, context, schemaPath, instancePath, schema, value) {
    const minContains = Schema.IsMinContains(schema) ? schema.minContains : 1;
    return CheckMaxContains(stack, context, schema, value) || context.AddError({
        keyword: 'contains',
        schemaPath,
        instancePath,
        params: { minContains, maxContains: schema.maxContains },
    });
}
