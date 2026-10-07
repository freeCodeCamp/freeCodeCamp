"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permuteDomain = permuteDomain;
const getPublicSuffix_1 = require("./getPublicSuffix");
/**
 * Generates the permutation of all possible values that {@link domainMatch} the given `domain` parameter. The
 * array is in shortest-to-longest order. Useful when building custom {@link Store} implementations.
 *
 * @example
 * ```
 * permuteDomain('foo.bar.example.com')
 * // ['example.com', 'bar.example.com', 'foo.bar.example.com']
 * ```
 *
 * @public
 * @param domain - the domain to generate permutations for
 * @param allowSpecialUseDomain - flag to control if {@link https://www.rfc-editor.org/rfc/rfc6761.html | Special Use Domains} such as `localhost` should be allowed
 */
function permuteDomain(domain, allowSpecialUseDomain) {
    const pubSuf = (0, getPublicSuffix_1.getPublicSuffix)(domain, {
        allowSpecialUseDomain: allowSpecialUseDomain,
    });
    if (!pubSuf) {
        return undefined;
    }
    if (pubSuf == domain) {
        return [domain];
    }
    // Nuke trailing dot
    if (domain.slice(-1) == '.') {
        domain = domain.slice(0, -1);
    }
    const prefix = domain.slice(0, -(pubSuf.length + 1)); // ".example.com"
    const parts = prefix.split('.').reverse();
    let cur = pubSuf;
    const permutations = [cur];
    while (parts.length) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const part = parts.shift();
        cur = `${part}.${cur}`;
        permutations.push(cur);
    }
    return permutations;
}
