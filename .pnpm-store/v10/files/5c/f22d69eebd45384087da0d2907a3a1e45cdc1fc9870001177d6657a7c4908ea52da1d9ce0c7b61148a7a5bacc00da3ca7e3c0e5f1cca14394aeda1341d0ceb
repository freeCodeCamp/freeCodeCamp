// deno-fmt-ignore-file
import * as Externals from './_externals.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildPattern(_stack, _context, schema, value) {
    const regexp = Externals.CreateVariable(G.IsString(schema.pattern) ? new RegExp(schema.pattern, 'u') : schema.pattern);
    return E.Call(E.Member(regexp, 'test'), [value]);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckPattern(_stack, _context, schema, value) {
    const regexp = G.IsString(schema.pattern) ? new RegExp(schema.pattern, 'u') : schema.pattern;
    return regexp.test(value);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorPattern(stack, context, schemaPath, instancePath, schema, value) {
    return CheckPattern(stack, context, schema, value) || context.AddError({
        keyword: 'pattern',
        schemaPath,
        instancePath,
        params: { pattern: schema.pattern }
    });
}
