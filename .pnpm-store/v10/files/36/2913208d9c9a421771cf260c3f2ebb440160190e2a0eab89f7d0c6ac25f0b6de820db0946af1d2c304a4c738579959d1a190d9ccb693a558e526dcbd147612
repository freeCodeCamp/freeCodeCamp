// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMaxItems(_stack, _context, schema, value) {
    return E.IsLessEqualThan(E.Member(value, 'length'), E.Constant(schema.maxItems));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMaxItems(_stack, _context, schema, value) {
    return G.IsLessEqualThan(value.length, schema.maxItems);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMaxItems(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMaxItems(stack, context, schema, value) || context.AddError({
        keyword: 'maxItems',
        schemaPath,
        instancePath,
        params: { limit: schema.maxItems }
    });
}
