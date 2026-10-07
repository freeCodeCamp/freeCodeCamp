// deno-fmt-ignore-file
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildRequired(_stack, _context, schema, value) {
    return E.ReduceAnd(schema.required.map((key) => E.HasPropertyKey(value, E.Constant(key))));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckRequired(_stack, _context, schema, value) {
    return G.Every(schema.required, 0, (key) => G.HasPropertyKey(value, key));
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorRequired(_stack, context, schemaPath, instancePath, schema, value) {
    const requiredProperties = [];
    const isRequired = G.EveryAll(schema.required, 0, (key) => {
        const hasKey = G.HasPropertyKey(value, key);
        if (!hasKey)
            requiredProperties.push(key);
        return hasKey;
    });
    return isRequired || context.AddError({
        keyword: 'required',
        schemaPath,
        instancePath,
        params: { requiredProperties }
    });
}
