// deno-fmt-ignore-file
import { EmitGuard as E, Guard as G } from '../../guard/index.mjs';
// ------------------------------------------------------------------
// Build
// ------------------------------------------------------------------
export function BuildDependentRequired(_stack, _context, schema, value) {
    const isLength = E.IsEqual(E.Member(E.Keys(value), 'length'), E.Constant(0));
    const isEvery = E.ReduceAnd(G.Entries(schema.dependentRequired).map(([key, keys]) => {
        const notKey = E.Not(E.HasPropertyKey(value, E.Constant(key)));
        const everyKey = E.ReduceAnd(keys.map((key) => E.HasPropertyKey(value, E.Constant(key))));
        return E.Or(notKey, everyKey);
    }));
    return E.Or(isLength, isEvery);
}
// ------------------------------------------------------------------
// Check
// ------------------------------------------------------------------
export function CheckDependentRequired(_stack, _context, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEvery = G.Every(G.Entries(schema.dependentRequired), 0, ([key, keys]) => {
        return !G.HasPropertyKey(value, key) ||
            keys.every((key) => G.HasPropertyKey(value, key));
    });
    return isLength || isEvery;
}
// ------------------------------------------------------------------
// Error
// ------------------------------------------------------------------
export function ErrorDependentRequired(_stack, context, schemaPath, instancePath, schema, value) {
    const isLength = G.IsEqual(G.Keys(value).length, 0);
    const isEveryEntry = G.EveryAll(G.Entries(schema.dependentRequired), 0, ([key, keys]) => {
        return !G.HasPropertyKey(value, key) || G.EveryAll(keys, 0, (dependency) => G.HasPropertyKey(value, dependency) || context.AddError({
            keyword: 'dependentRequired',
            schemaPath,
            instancePath,
            params: { property: key, dependencies: keys },
        }));
    });
    return isLength || isEveryEntry;
}
