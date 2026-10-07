// deno-fmt-ignore-file
import { EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildBooleanSchema(_stack, _context, schema, _value) {
    return schema ? E.Constant(true) : E.Constant(false);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckBooleanSchema(_stack, _context, schema, _value) {
    return schema;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorBooleanSchema(stack, context, schemaPath, instancePath, schema, value) {
    return CheckBooleanSchema(stack, context, schema, value) || context.AddError({
        keyword: 'boolean',
        schemaPath,
        instancePath,
        params: {}
    });
}
