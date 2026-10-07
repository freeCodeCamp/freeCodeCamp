// deno-fmt-ignore-file
import { Guard } from '../../guard/index.mjs';
import { Deferred } from '../types/deferred.mjs';
import { KeysToIndexer } from '../engine/helpers/keys_to_indexer.mjs';
import { PickAction } from '../engine/pick/instantiate.mjs';
/** Creates a deferred Pick action. */
export function PickDeferred(type, indexer, options = {}) {
    return Deferred('Pick', [type, indexer], options);
}
/** Applies a Pick action using the given types. */
export function Pick(type, indexer_or_keys, options = {}) {
    const indexer = Guard.IsArray(indexer_or_keys) ? KeysToIndexer(indexer_or_keys) : indexer_or_keys;
    return PickAction(type, indexer, options);
}
