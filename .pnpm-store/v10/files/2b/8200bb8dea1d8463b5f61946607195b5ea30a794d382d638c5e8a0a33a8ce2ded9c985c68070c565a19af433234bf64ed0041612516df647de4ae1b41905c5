// deno-fmt-ignore-file
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildMaxProperties(_stack, _context, schema, value) {
    return E.IsLessEqualThan(E.Member(E.Keys(value), 'length'), E.Constant(schema.maxProperties));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckMaxProperties(_stack, _context, schema, value) {
    return G.IsLessEqualThan(G.Keys(value).length, schema.maxProperties);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function ErrorMaxProperties(stack, context, schemaPath, instancePath, schema, value) {
    return CheckMaxProperties(stack, context, schema, value) || context.AddError({
        keyword: 'maxProperties',
        schemaPath,
        instancePath,
        params: { limit: schema.maxProperties },
    });
}
