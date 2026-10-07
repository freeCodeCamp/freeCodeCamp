// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Deferred } from '../types/deferred.mjs';
import { KeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { OmitAction } from '../engine/omit/instantiate.mjs';
/** Creates a deferred Omit action. */
export function OmitDeferred(type, indexer, options = {}) {
    return Deferred('Omit', [type, indexer], options);
}
/** Applies a Omit action using the given types. */
export function Omit(type, indexer_or_keys, options = {}) {
    const indexer = Guard.IsArray(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys;
    return OmitAction(type, indexer, options);
}
