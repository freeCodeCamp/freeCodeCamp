import { tuple } from './tuple.js';
import { uniqueArray } from './uniqueArray.js';
import { keyValuePairsToObjectMapper, keyValuePairsToObjectUnmapper } from './_internals/mappers/KeyValuePairsToObject.js';
import { constant } from './constant.js';
import { boolean } from './boolean.js';
function dictionaryKeyExtractor(entry) {
    return entry[0];
}
export function dictionary(keyArb, valueArb, constraints = {}) {
    const noNullPrototype = constraints.noNullPrototype !== false;
    return tuple(uniqueArray(tuple(keyArb, valueArb), {
        minLength: constraints.minKeys,
        maxLength: constraints.maxKeys,
        size: constraints.size,
        selector: dictionaryKeyExtractor,
        depthIdentifier: constraints.depthIdentifier,
    }), noNullPrototype ? constant(false) : boolean()).map(keyValuePairsToObjectMapper, keyValuePairsToObjectUnmapper);
}
