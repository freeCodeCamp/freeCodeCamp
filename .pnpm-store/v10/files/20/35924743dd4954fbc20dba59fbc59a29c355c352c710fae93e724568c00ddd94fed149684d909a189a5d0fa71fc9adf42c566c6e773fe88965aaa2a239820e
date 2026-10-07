// deno-fmt-ignore-file
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMultipleOf(_stack, _context, schema, value) {
    return E.MultipleOf(value, E.Constant(schema.multipleOf));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMultipleOf(_stack, _context, schema, value) {
    return G.IsMultipleOf(value, schema.multipleOf);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorMultipleOf(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMultipleOf(stack, context, schema, value) || context.AddError({
        keyword: 'multipleOf',
        schemaPath,
        instancePath,
        params: { multipleOf: schema.multipleOf }
    });
}
