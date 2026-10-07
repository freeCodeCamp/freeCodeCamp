// deno-fmt-ignore-file
import * as V from './_externals.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildRefine(_stack, _context, schema, value) {
    const refinements = V.CreateVariable(schema['~refine'].map((refinement) => refinement));
    return E.Every(refinements, E.Constant(0), ['refinement', '_'], E.Call(E.Member('refinement', 'check'), [value]));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckRefine(_stack, _context, schema, value) {
    return G.Every(schema['~refine'], 0, (refinement, _) => refinement.check(value));
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorRefine(_stack, context, schemaPath, instancePath, schema, value) {
    return G.EveryAll(schema['~refine'], 0, (refinement, index) => {
        return refinement.check(value) || context.AddError({
            keyword: '~refine',
            schemaPath,
            instancePath,
            params: { index, message: refinement.error(value) },
        });
    });
}
