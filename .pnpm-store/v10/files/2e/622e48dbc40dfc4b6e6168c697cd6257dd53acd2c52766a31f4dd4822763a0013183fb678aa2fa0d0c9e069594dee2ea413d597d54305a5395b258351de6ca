// deno-fmt-ignore-file
import { Unique } from './_unique.mjs';
import { AccumulatedErrorContext } from './_context.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildUnevaluatedProperties(stack, context, schema, value) {
    const [key, prop] = [Unique(), Unique()];
    const keys = E.Call(E.Member('context', 'GetKeys'), []);
    const hasKey = E.Call(E.Member('keys', 'has'), [key]);
    const addKey = E.Call(E.Member('context', 'AddKey'), [key]);
    const isSchema = BuildSchema(stack, context, schema.unevaluatedProperties, prop);
    const isEvery = E.Every(E.Entries(value), E.Constant(0), [`[${key}, ${prop}]`, '_'], E.Or(hasKey, E.And(isSchema, addKey)));
    return E.Call(E.ArrowFunction(['context'], E.Statements([
        E.ConstDeclaration('keys', keys),
        E.Return(isEvery)
    ])), ['context']);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckUnevaluatedProperties(stack, context, schema, value) {
    const keys = context.GetKeys();
    return G.Every(G.Entries(value), 0, ([key, prop]) => {
        return keys.has(key)
            || (CheckSchema(stack, context, schema.unevaluatedProperties, prop) && context.AddKey(key));
    });
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorUnevaluatedProperties(stack, context, schemaPath, instancePath, schema, value) {
    const keys = context.GetKeys();
    const unevaluatedProperties = [];
    const isUnevaluatedProperties = G.EveryAll(G.Entries(value), 0, ([key, prop]) => {
        const nextContext = new AccumulatedErrorContext();
        const isEvaluatedProperty = keys.has(key)
            || (ErrorSchema(stack, nextContext, schemaPath, instancePath, schema.unevaluatedProperties, prop) && context.AddKey(key));
        if (!isEvaluatedProperty)
            unevaluatedProperties.push(key);
        return isEvaluatedProperty;
    });
    return isUnevaluatedProperties || context.AddError({
        keyword: 'unevaluatedProperties',
        schemaPath,
        instancePath,
        params: { unevaluatedProperties }
    });
}
