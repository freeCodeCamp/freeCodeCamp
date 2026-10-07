// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Unique } from './_unique.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Invalid
// ------------------------------------------------------------------
function IsValid(schema) {
    return !(Schema.IsMinContains(schema) && G.IsEqual(schema.minContains, 0));
}
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return E.Constant(true);
    const item = Unique();
    const isLength = E.Not(E.IsEqual(E.Member(value, 'length'), E.Constant(0)));
    const isSome = E.Call(E.Member(value, 'some'), [E.ArrowFunction([item], BuildSchema(stack, context, schema.contains, item))]);
    return E.And(isLength, isSome);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckContains(stack, context, schema, value) {
    if (!IsValid(schema))
        return true;
    return !G.IsEqual(value.length, 0) &&
        value.some((item) => CheckSchema(stack, context, schema.contains, item));
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorContains(stack, context, schemaPath, instancePath, schema, value) {
    return CheckContains(stack, context, schema, value) || context.AddError({
        keyword: 'contains',
        schemaPath,
        instancePath,
        params: { minContains: 1 },
    });
}
