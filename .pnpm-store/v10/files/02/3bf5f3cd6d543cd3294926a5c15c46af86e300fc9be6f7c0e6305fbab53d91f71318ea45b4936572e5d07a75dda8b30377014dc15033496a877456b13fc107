// deno-fmt-ignore-file
import { Union, IsUnion } from '../../types/union.mjs';
import { Intersect, IsIntersect } from '../../types/intersect.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { ConvertToIntegerKey } from '../helpers/keys.mjs';
function ConvertLiteral(value) {
    return Literal(ConvertToIntegerKey(value));
}
function ArrayIndexerTypes(types) {
    return types.map(type => FormatArrayIndexer(type));
}
/** Formats embedded integer-like strings on an Indexer to be number values inline with TS indexing | coercion behaviors. */
export function FormatArrayIndexer(type) {
    return (IsIntersect(type) ? Intersect(ArrayIndexerTypes(type.allOf)) :
        IsUnion(type) ? Union(ArrayIndexerTypes(type.anyOf)) :
            IsLiteral(type) ? ConvertLiteral(type.const) :
                type);
}
