// deno-fmt-ignore-file
import { Unique } from './_unique.mjs';
import { AccumulatedErrorContext } from './_context.mjs';
import { Guard as G, EmitGuard as E } from '../../guard/index.mjs';
import { BuildSchema, CheckSchema, ErrorSchema } from './schema.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildUnevaluatedItems(stack, context, schema, value) {
    const [index, item] = [Unique(), Unique()];
    const indices = E.Call(E.Member('context', 'GetIndices'), []);
    const hasIndex = E.Call(E.Member('indices', 'has'), [index]);
    const isSchema = BuildSchema(stack, context, schema.unevaluatedItems, item);
    const addIndex = E.Call(E.Member('context', 'AddIndex'), [index]);
    const isEvery = E.Every(value, E.Constant(0), [item, index], E.And(E.Or(hasIndex, isSchema), addIndex));
    return E.Call(E.ArrowFunction(['context'], E.Statements([
        E.ConstDeclaration('indices', indices),
        E.Return(isEvery)
    ])), ['context']);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckUnevaluatedItems(stack, context, schema, value) {
    const indices = context.GetIndices();
    return G.Every(value, 0, (item, index) => {
        return (indices.has(index) || CheckSchema(stack, context, schema.unevaluatedItems, item))
            && context.AddIndex(index);
    });
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorUnevaluatedItems(stack, context, schemaPath, instancePath, schema, value) {
    const indices = context.GetIndices();
    const unevaluatedItems = [];
    const isUnevaluatedItems = G.EveryAll(value, 0, (item, index) => {
        const nextContext = new AccumulatedErrorContext();
        const isEvaluatedItem = (indices.has(index) || ErrorSchema(stack, nextContext, schemaPath, instancePath, schema.unevaluatedItems, item))
            && context.AddIndex(index);
        if (!isEvaluatedItem)
            unevaluatedItems.push(index);
        return isEvaluatedItem;
    });
    return isUnevaluatedItems || context.AddError({
        keyword: 'unevaluatedItems',
        schemaPath,
        instancePath,
        params: { unevaluatedItems }
    });
}
