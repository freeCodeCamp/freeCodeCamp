// deno-fmt-ignore-file
import { Hashing } from '../../system/hashing/index.mjs';
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Valid
// ------------------------------------------------------------------
function IsValid(schema) {
    return !G.IsEqual(schema.uniqueItems, false);
}
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildUniqueItems(_stack, _context, schema, value) {
    if (!IsValid(schema))
        return E.Constant(true);
    const set = E.Member(E.New('Set', [E.Call(E.Member(value, 'map'), [E.Member('Hashing', 'Hash')])]), 'size');
    const isLength = E.Member(value, 'length');
    return E.IsEqual(set, isLength);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckUniqueItems(_stack, _context, schema, value) {
    if (!IsValid(schema))
        return true;
    const set = new Set(value.map(Hashing.Hash)).size;
    const isLength = value.length;
    return G.IsEqual(set, isLength);
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorUniqueItems(_stack, context, schemaPath, instancePath, schema, value) {
    if (!IsValid(schema))
        return true;
    const set = new Set();
    const duplicateItems = value.reduce((result, value, index) => {
        const hash = Hashing.Hash(value);
        if (set.has(hash))
            return [...result, index];
        set.add(hash);
        return result;
    }, []);
    const isUniqueItems = G.IsEqual(duplicateItems.length, 0);
    return isUniqueItems || context.AddError({
        keyword: 'uniqueItems',
        schemaPath,
        instancePath,
        params: { duplicateItems },
    });
}
