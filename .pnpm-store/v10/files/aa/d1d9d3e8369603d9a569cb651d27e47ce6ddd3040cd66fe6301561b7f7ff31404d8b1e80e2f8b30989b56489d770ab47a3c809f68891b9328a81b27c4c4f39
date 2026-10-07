// deno-fmt-ignore-file
import * as Externals from './_externals.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildConst(_stack, _context, schema, value) {
    return G.IsValueLike(schema.const)
        ? E.IsEqual(value, E.Constant(schema.const))
        : E.IsDeepEqual(value, Externals.CreateVariable(schema.const));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckConst(_stack, _context, schema, value) {
    return G.IsValueLike(schema.const)
        ? G.IsEqual(value, schema.const)
        : G.IsDeepEqual(value, schema.const);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function ErrorConst(stack, context, schemaPath, instancePath, schema, value) {
    return CheckConst(stack, context, schema, value) || context.AddError({
        keyword: 'const',
        schemaPath,
        instancePath,
        params: { allowedValue: schema.const },
    });
}
