// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMinProperties(_stack, _context, schema, value) {
    return E.IsGreaterEqualThan(E.Member(E.Keys(value), 'length'), E.Constant(schema.minProperties));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMinProperties(_stack, _context, schema, value) {
    return G.IsGreaterEqualThan(G.Keys(value).length, schema.minProperties);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMinProperties(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMinProperties(stack, context, schema, value) || context.AddError({
        keyword: 'minProperties',
        schemaPath,
        instancePath,
        params: { limit: schema.minProperties },
    });
}
