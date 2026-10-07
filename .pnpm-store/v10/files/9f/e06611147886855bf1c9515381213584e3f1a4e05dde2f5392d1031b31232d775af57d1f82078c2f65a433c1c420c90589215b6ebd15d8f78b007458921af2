// deno-fmt-ignore-file
import { Never } from '../../types/never.mjs';
import { IsRef } from '../../types/ref.mjs';
function Resolve(defs, ref) {
    return (ref in defs
        ? IsRef(defs[ref])
            // @ts-ignore 5.0.4 - does not see $ref
            ? Resolve(defs, defs[ref].$ref)
            : defs[ref]
        : Never());
}
/** Returns the target Type from the Defs or Never if target is non-resolvable */
export function CyclicTarget(defs, ref) {
    const result = Resolve(defs, ref);
    return result;
}
