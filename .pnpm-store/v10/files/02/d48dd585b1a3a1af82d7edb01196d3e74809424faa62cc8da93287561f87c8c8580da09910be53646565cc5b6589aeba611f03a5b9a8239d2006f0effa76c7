// deno-fmt-ignore-file
import * as Externals from './_externals.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildGuard(_stack, _context, schema, value) {
    return E.Call(E.Member(E.Member(Externals.CreateVariable(schema), '~guard'), 'check'), [value]);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckGuard(_stack, _context, schema, value) {
    return schema['~guard'].check(value);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorGuard(_stack, context, schemaPath, instancePath, schema, value) {
    return schema['~guard'].check(value) || context.AddError({
        keyword: '~guard',
        schemaPath,
        instancePath,
        params: { errors: schema['~guard'].errors(value) },
    });
}
