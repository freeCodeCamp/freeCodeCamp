// deno-fmt-ignore-file
import * as Schema from '../types/index.mjs';
import { Hashing } from '../../system/hashing/index.mjs';
import { EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema } from './schema.mjs';
const functions = new Map();
// ------------------------------------------------------------------
// CreateCallExpression
// ------------------------------------------------------------------
function CreateCallExpression(context, _schema, hash, value) {
    return context.UseUnevaluated()
        ? E.Call(`check_${hash}`, ['context', value])
        : E.Call(`check_${hash}`, [value]);
}
// ------------------------------------------------------------------
// CreateFunctionExpression
// ------------------------------------------------------------------
function CreateFunctionExpression(stack, context, schema, hash) {
    const expression = BuildSchema(stack, context, schema, 'value');
    return context.UseUnevaluated()
        ? E.ConstDeclaration(`check_${hash}`, E.ArrowFunction(['context', 'value'], expression))
        : E.ConstDeclaration(`check_${hash}`, E.ArrowFunction(['value'], expression));
}
// ------------------------------------------------------------------
// ResetFunctions
// ------------------------------------------------------------------
export function ResetFunctions() {
    functions.clear();
}
// ------------------------------------------------------------------
// GetFunctions
// ------------------------------------------------------------------
export function GetFunctions() {
    return [...functions.values()];
}
// ------------------------------------------------------------------
// CreateFunction
// ------------------------------------------------------------------
export function CreateFunction(stack, context, schema, value) {
    const hash = Schema.IsSchemaObject(schema) ? Hashing.Hash({ __baseURL: stack.BaseURL().href, ...schema }) : Hashing.Hash(schema);
    const call = CreateCallExpression(context, schema, hash, value);
    if (functions.has(hash))
        return call;
    functions.set(hash, '');
    functions.set(hash, CreateFunctionExpression(stack, context, schema, hash));
    return call;
}
