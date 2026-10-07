import { LRUCache } from './map.js';

/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
new LRUCache(10000);
const nfdCache = new LRUCache(10000); // bounded to 10000 elements
function normalizeNFD(str) {
    return normalize(str, 'NFD', nfdCache);
}
const nonAsciiCharactersPattern = /[^\u0000-\u0080]/;
function normalize(str, form, normalizedCache) {
    if (!str) {
        return str;
    }
    const cached = normalizedCache.get(str);
    if (cached) {
        return cached;
    }
    let res;
    if (nonAsciiCharactersPattern.test(str)) {
        res = str.normalize(form);
    }
    else {
        res = str;
    }
    // Use the cache for fast lookup
    normalizedCache.set(str, res);
    return res;
}
const removeAccents = (function () {
    // transform into NFD form and remove accents
    // see: https://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/37511463#37511463
    const regex = /[\u0300-\u036f]/g;
    return function (str) {
        return normalizeNFD(str).replace(regex, '');
    };
})();

export { normalizeNFD, removeAccents };
