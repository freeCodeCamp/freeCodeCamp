// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Deferred } from '../types/deferred.mjs';
import { KeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { IndexAction } from '../engine/indexed/instantiate.mjs';
/** Creates a deferred Index action. */
export function IndexDeferred(type, indexer, options = {}) {
    return Deferred('Index', [type, indexer], options);
}
/** Applies a Index action using the given types. */
export function Index(type, indexer_or_keys, options = {}) {
    const indexer = Guard.IsArray(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys;
    return IndexAction(type, indexer, options);
}
