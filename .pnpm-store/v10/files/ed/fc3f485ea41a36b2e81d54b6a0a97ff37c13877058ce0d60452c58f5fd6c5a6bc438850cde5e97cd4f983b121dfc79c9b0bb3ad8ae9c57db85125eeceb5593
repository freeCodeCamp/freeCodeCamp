import { safeIndexOf, safePush } from '../../../utils/globals.js';
import { boolean } from '../../boolean.js';
import { constant } from '../../constant.js';
import { option } from '../../option.js';
import { tuple } from '../../tuple.js';
import { extractEnumerableKeys } from '../helpers/EnumerableKeysExtractor.js';
import { buildValuesAndSeparateKeysToObjectMapper, buildValuesAndSeparateKeysToObjectUnmapper, } from '../mappers/ValuesAndSeparateKeysToObject.js';
const noKeyValue = Symbol('no-key');
export function buildPartialRecordArbitrary(recordModel, requiredKeys, noNullPrototype) {
    const keys = extractEnumerableKeys(recordModel);
    const arbs = [];
    for (let index = 0; index !== keys.length; ++index) {
        const k = keys[index];
        const requiredArbitrary = recordModel[k];
        if (requiredKeys === undefined || safeIndexOf(requiredKeys, k) !== -1) {
            safePush(arbs, requiredArbitrary);
        }
        else {
            safePush(arbs, option(requiredArbitrary, { nil: noKeyValue }));
        }
    }
    return tuple(tuple(...arbs), noNullPrototype ? constant(false) : boolean()).map(buildValuesAndSeparateKeysToObjectMapper(keys, noKeyValue), buildValuesAndSeparateKeysToObjectUnmapper(keys, noKeyValue));
}
