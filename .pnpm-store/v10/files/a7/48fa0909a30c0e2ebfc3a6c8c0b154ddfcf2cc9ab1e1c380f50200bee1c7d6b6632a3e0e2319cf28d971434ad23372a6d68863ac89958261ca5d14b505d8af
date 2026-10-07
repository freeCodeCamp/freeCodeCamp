// deno-fmt-ignore-file
import { Unreachable } from '../../../system/unreachable/index.mjs';
import { PropertyKeys } from '../../types/properties.mjs';
import { CyclicCheck } from './check.mjs';
function ResolveCandidateKeys(context, keys) {
    return keys.reduce((result, left) => {
        return left in context
            ? CyclicCheck([left], context, context[left])
                ? [...result, left]
                : result
            : Unreachable();
    }, []);
}
/** Returns keys for context types that need to be transformed to TCyclic. */
export function CyclicCandidates(context) {
    const keys = PropertyKeys(context);
    const result = ResolveCandidateKeys(context, keys);
    return result;
}
