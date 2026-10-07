// deno-fmt-ignore-file
import { IsNumber } from '../../types/number.mjs';
import { Never } from '../../types/never.mjs';
import { PropertyKeys } from '../../types/properties.mjs';
import { EvaluateUnion } from '../evaluate/evaluate.mjs';
import { ToIndexableKeys } from '../indexable/to_indexable_keys.mjs';
import { IntegerKey } from '../../types/record.mjs';
import { ExpandThis } from '../this/expand_this.mjs';
function IndexProperty(properties, key) {
    const selectedType = key in properties ? properties[key] : Never();
    const result = ExpandThis(properties, selectedType);
    return result;
}
function IndexProperties(properties, keys) {
    return keys.reduce((result, left) => {
        return [...result, IndexProperty(properties, left)];
    }, []);
}
function FromIndexer(properties, indexer) {
    const keys = ToIndexableKeys(indexer);
    const variants = IndexProperties(properties, keys);
    const result = EvaluateUnion(variants);
    return result;
}
const NumericKeyPattern = new RegExp(IntegerKey);
function NumericKeys(keys) {
    const result = keys.filter(key => NumericKeyPattern.test(key));
    return result;
}
function FromIndexerNumber(properties) {
    const keys = PropertyKeys(properties);
    const numericKeys = NumericKeys(keys);
    const variants = IndexProperties(properties, numericKeys);
    const result = EvaluateUnion(variants);
    return result;
}
export function FromObject(properties, indexer) {
    const result = IsNumber(indexer) ? FromIndexerNumber(properties) : FromIndexer(properties, indexer);
    return result;
}
