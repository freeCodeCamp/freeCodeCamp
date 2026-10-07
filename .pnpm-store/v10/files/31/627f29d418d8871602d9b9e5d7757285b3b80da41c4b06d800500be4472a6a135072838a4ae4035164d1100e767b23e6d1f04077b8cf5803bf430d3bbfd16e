// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMaximum(_stack, _context, schema, value) {
    return E.IsLessEqualThan(value, E.Constant(schema.maximum));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMaximum(_stack, _context, schema, value) {
    return G.IsLessEqualThan(value, schema.maximum);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMaximum(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMaximum(stack, context, schema, value) || context.AddError({
        keyword: 'maximum',
        schemaPath,
        instancePath,
        params: { comparison: '<=', limit: schema.maximum }
    });
}
