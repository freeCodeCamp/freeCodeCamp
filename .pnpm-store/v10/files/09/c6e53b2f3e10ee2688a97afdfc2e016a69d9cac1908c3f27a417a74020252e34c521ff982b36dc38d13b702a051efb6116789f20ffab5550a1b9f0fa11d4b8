// deno-fmt-ignore-file
import { Literal, IsLiteralValue } from '../../types/literal.mjs';
import { Union } from '../../types/union.mjs';
function KeysToLiterals(keys) {
    return keys.reduce((result, left) => {
        return IsLiteralValue(left)
            ? [...result, Literal(left)]
            : result;
    }, []);
}
export function KeysToIndexer(keys) {
    const literals = KeysToLiterals(keys);
    const result = Union(literals);
    return result;
}
