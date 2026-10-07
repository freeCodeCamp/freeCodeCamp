// deno-fmt-ignore-file
import * as Functions from './_functions.mjs';
import * as Schema from '../types/index.mjs';
import { CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildDynamicRef(stack, context, schema, value) {
    const target = stack.DynamicRef(schema) ?? false;
    return Functions.CreateFunction(stack, context, target, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckDynamicRef(stack, context, schema, value) {
    const target = stack.DynamicRef(schema) ?? false;
    return (Schema.IsSchema(target) && CheckSchema(stack, context, target, value));
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorDynamicRef(stack, context, _schemaPath, instancePath, schema, value) {
    const target = stack.DynamicRef(schema) ?? false;
    return (Schema.IsSchema(target) && ErrorSchema(stack, context, '#', instancePath, target, value));
}
