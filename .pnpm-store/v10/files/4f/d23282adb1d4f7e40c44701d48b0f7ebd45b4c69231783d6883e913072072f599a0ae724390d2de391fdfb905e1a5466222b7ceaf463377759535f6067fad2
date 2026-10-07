// deno-fmt-ignore-file
import { FromType } from './from_type.mjs';
/**
 * Transforms a type meant as an Indexer into string[] array which is used by Indexable types
 * like Index, Pick and Omit to select from property keys. This function should only be used
 * for Object key selection, and not for Array / Tuple key selection as Array-Like structures
 * require TNumber indexing support.
 */
export function ToIndexableKeys(type) {
    const result = FromType(type);
    return result;
}
