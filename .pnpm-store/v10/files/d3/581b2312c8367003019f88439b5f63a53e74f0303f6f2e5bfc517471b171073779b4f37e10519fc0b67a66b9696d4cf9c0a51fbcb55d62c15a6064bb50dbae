// deno-fmt-ignore-file
import { Format } from '../../format/index.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildFormat(_stack, _context, schema, value) {
    return E.Call(E.Member('Format', 'Test'), [E.Constant(schema.format), value]);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckFormat(_stack, _context, schema, value) {
    return Format.Test(schema.format, value);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorFormat(stack, context, schemaPath, instancePath, schema, value) {
    return CheckFormat(stack, context, schema, value) || context.AddError({
        keyword: 'format',
        schemaPath,
        instancePath,
        params: { format: schema.format },
    });
}
