// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { AccumulatedErrorContext } from './_context.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildIf(stack, context, schema, value) {
    const thenSchema = Schema.IsThen(schema) ? schema.then : true;
    const elseSchema = Schema.IsElse(schema) ? schema.else : true;
    return E.Ternary(BuildSchema(stack, context, schema.if, value), BuildSchema(stack, context, thenSchema, value), BuildSchema(stack, context, elseSchema, value));
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckIf(stack, context, schema, value) {
    const thenSchema = Schema.IsThen(schema) ? schema.then : true;
    const elseSchema = Schema.IsElse(schema) ? schema.else : true;
    return CheckSchema(stack, context, schema.if, value)
        ? CheckSchema(stack, context, thenSchema, value)
        : CheckSchema(stack, context, elseSchema, value);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorIf(stack, context, schemaPath, instancePath, schema, value) {
    const thenSchema = Schema.IsThen(schema) ? schema.then : true;
    const elseSchema = Schema.IsElse(schema) ? schema.else : true;
    const trueContext = new AccumulatedErrorContext();
    const isIf = ErrorSchema(stack, trueContext, `${schemaPath}/if`, instancePath, schema.if, value)
        ? ErrorSchema(stack, trueContext, `${schemaPath}/then`, instancePath, thenSchema, value) || context.AddError({
            keyword: 'if',
            schemaPath,
            instancePath,
            params: { failingKeyword: 'then' },
        })
        : ErrorSchema(stack, context, `${schemaPath}/else`, instancePath, elseSchema, value) || context.AddError({
            keyword: 'if',
            schemaPath,
            instancePath,
            params: { failingKeyword: 'else' },
        });
    if (isIf)
        context.Merge([trueContext]);
    return isIf;
}
