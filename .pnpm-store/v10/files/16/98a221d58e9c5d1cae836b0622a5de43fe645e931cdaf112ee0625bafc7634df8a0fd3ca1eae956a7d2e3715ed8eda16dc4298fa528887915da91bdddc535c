// deno-lint-ignore-file ban-types
// deno-fmt-ignore-file
import { Guard } from '../../../guard/index.mjs';
import { Literal, IsLiteral } from '../../types/literal.mjs';
import { IsNumber } from '../../types/number.mjs';
import { IsInteger } from '../../types/integer.mjs';
import { EvaluateUnionFast } from '../evaluate/evaluate.mjs';
import { Extends, ExtendsResult } from '../../extends/index.mjs';
import { FormatArrayIndexer } from './array_indexer.mjs';
function IndexElementsWithIndexer(types, indexer) {
    return types.reduceRight((result, right, index) => {
        const check = Extends({}, Literal(index), indexer);
        return ExtendsResult.IsExtendsTrueLike(check)
            ? [right, ...result]
            : result;
    }, []);
}
function FromTupleWithIndexer(types, indexer) {
    const formattedArrayIndexer = FormatArrayIndexer(indexer);
    const elements = IndexElementsWithIndexer(types, formattedArrayIndexer);
    return EvaluateUnionFast(elements);
}
function FromTupleWithoutIndexer(types) {
    return EvaluateUnionFast(types);
}
export function FromTuple(types, indexer) {
    return (
    // length (intrinsic)
    IsLiteral(indexer) && Guard.IsEqual(indexer.const, 'length')
        ? Literal(types.length)
        // indexer
        : IsNumber(indexer) || IsInteger(indexer)
            ? FromTupleWithoutIndexer(types)
            : FromTupleWithIndexer(types, indexer));
}
