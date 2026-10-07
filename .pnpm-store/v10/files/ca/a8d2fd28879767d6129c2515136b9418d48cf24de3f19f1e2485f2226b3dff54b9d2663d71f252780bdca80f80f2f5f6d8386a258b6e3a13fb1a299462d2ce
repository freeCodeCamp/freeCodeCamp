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
export function BuildMinContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return E.Constant(true);
    const [result, item] = [Unique(), Unique()];
    const count = E.Call(E.Member(value, 'reduce'), [E.ArrowFunction([result, item], E.Ternary(BuildSchema(stack, context, schema.contains, item), E.PrefixIncrement(result), result)), E.Constant(0)]);
    return E.IsGreaterEqualThan(count, E.Constant(schema.minContains));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMinContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return true;
    const count = value.reduce((result, item) => CheckSchema(stack, context, schema.contains, item) ? ++result : result, 0);
    return G.IsGreaterEqualThan(count, schema.minContains);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMinContains(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMinContains(stack, context, schema, value) || context.AddError({
        keyword: 'contains',
        schemaPath,
        instancePath,
        params: { minContains: schema.minContains }
    });
}
