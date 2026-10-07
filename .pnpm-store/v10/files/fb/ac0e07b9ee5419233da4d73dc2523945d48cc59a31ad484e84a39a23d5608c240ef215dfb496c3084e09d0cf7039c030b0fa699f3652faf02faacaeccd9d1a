// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Intersect, IsIntersect } from '../../types/intersect.mjs';
import { Union, IsUnion } from '../../types/union.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { Number } from '../../types/number.mjs';
import { Never } from '../../types/never.mjs';
import { Extends, ExtendsResult } from '../../extends/index.mjs';
import { ConvertToIntegerKey } from '../helpers/keys.mjs';
function NormalizeLiteral(value) {
    return Literal(ConvertToIntegerKey(value));
}
function NormalizeIndexerTypes(types) {
    return types.map(type => NormalizeIndexer(type));
}
export function NormalizeIndexer(type) {
    return (IsIntersect(type) ? Intersect(NormalizeIndexerTypes(type.allOf)) :
        IsUnion(type) ? Union(NormalizeIndexerTypes(type.anyOf)) :
            IsLiteral(type) ? NormalizeLiteral(type.const) :
                type);
}
export function FromArray(type, indexer) {
    const normalizedIndexer = NormalizeIndexer(indexer);
    const check = Extends({}, normalizedIndexer, Number());
    const result = (
    // indexer
    ExtendsResult.IsExtendsTrueLike(check)
        ? type
        // length (intrinsic)
        : IsLiteral(indexer) && Guard.IsEqual(indexer.const, 'length')
            ? Number()
            : Never());
    return result;
}
