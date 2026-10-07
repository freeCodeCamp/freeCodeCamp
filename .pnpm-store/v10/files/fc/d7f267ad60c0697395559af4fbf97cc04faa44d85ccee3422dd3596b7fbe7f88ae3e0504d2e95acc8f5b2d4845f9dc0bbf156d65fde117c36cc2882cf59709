// deno-fmt-ignore-file
import * as Functions from './_functions.mjs';
import * as Schema from '../types/index.mjs';
import { CheckContext, AccumulatedErrorContext } from './_context.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
import { CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// BuildRefStandard
// ------------------------------------------------------------------
function BuildRefStandard(stack, context, target, value) {
    const interior = E.ArrowFunction(['context', 'value'], Functions.CreateFunction(stack, context, target, 'value'));
    const exterior = E.ArrowFunction(['context', 'value'], E.Statements([
        E.ConstDeclaration('nextContext', E.New('CheckContext', [])),
        E.ConstDeclaration('result', E.Call(interior, ['nextContext', 'value'])),
        E.If('result', context.Merge('[nextContext]')),
        E.Return('result')
    ]));
    return E.Call(exterior, ['context', value]);
}
// ------------------------------------------------------------------
// BuildRefStandard
// ------------------------------------------------------------------
function BuildRefFast(stack, context, target, value) {
    return Functions.CreateFunction(stack, context, target, value);
}
// ------------------------------------------------------------------
// BuildRef
// ------------------------------------------------------------------
export function BuildRef(stack, context, schema, value) {
    const target = stack.Ref(schema) ?? false;
    return context.UseUnevaluated()
        ? BuildRefStandard(stack, context, target, value)
        : BuildRefFast(stack, context, target, value);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckRef(stack, context, schema, value) {
    const target = stack.Ref(schema) ?? false;
    const nextContext = new CheckContext();
    const result = (Schema.IsSchema(target) && CheckSchema(stack, nextContext, target, value));
    if (result)
        context.Merge([nextContext]);
    return result;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorRef(stack, context, _schemaPath, instancePath, schema, value) {
    const target = stack.Ref(schema) ?? false;
    const nextContext = new AccumulatedErrorContext();
    const result = (Schema.IsSchema(target) && ErrorSchema(stack, nextContext, '#', instancePath, target, value));
    if (result)
        context.Merge([nextContext]);
    if (!result)
        nextContext.GetErrors().forEach(error => context.AddError(error));
    return result;
}
