// deno-fmt-ignore-file
import * as Externals from './_externals.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildEnum(_stack, _context, schema, value) {
    return E.ReduceOr(schema.enum.map(option => {
        if (G.IsValueLike(option))
            return E.IsEqual(value, E.Constant(option));
        const variable = Externals.CreateVariable(option);
        return E.IsDeepEqual(value, variable);
    }));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckEnum(_stack, _context, schema, value) {
    return schema.enum.some(option => G.IsValueLike(option)
        ? G.IsEqual(value, option)
        : G.IsDeepEqual(value, option));
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorEnum(stack, context, schemaPath, instancePath, schema, value) {
    return CheckEnum(stack, context, schema, value) || context.AddError({
        keyword: 'enum',
        schemaPath,
        instancePath,
        params: { allowedValues: schema.enum }
    });
}
