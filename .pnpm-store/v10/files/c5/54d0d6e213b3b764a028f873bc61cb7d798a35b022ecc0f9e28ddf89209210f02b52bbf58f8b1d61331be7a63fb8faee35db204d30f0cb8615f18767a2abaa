import { constantFrom } from './constantFrom.js';
import { constant } from './constant.js';
import { option } from './option.js';
import { tuple } from './tuple.js';
import { webQueryParameters } from './webQueryParameters.js';
import { webFragments } from './webFragments.js';
import { webAuthority } from './webAuthority.js';
import { partsToUrlMapper, partsToUrlUnmapper } from './_internals/mappers/PartsToUrl.js';
import { relativeSizeToSize, resolveSize } from './_internals/helpers/MaxLengthFromMinLength.js';
import { webPath } from './webPath.js';
const safeObjectAssign = Object.assign;
export function webUrl(constraints) {
    const c = constraints || {};
    const resolvedSize = resolveSize(c.size);
    const resolvedAuthoritySettingsSize = c.authoritySettings !== undefined && c.authoritySettings.size !== undefined
        ? relativeSizeToSize(c.authoritySettings.size, resolvedSize)
        : resolvedSize;
    const resolvedAuthoritySettings = safeObjectAssign(safeObjectAssign({}, c.authoritySettings), {
        size: resolvedAuthoritySettingsSize,
    });
    const validSchemes = c.validSchemes || ['http', 'https'];
    const schemeArb = constantFrom(...validSchemes);
    const authorityArb = webAuthority(resolvedAuthoritySettings);
    return tuple(schemeArb, authorityArb, webPath({ size: resolvedSize }), c.withQueryParameters === true ? option(webQueryParameters({ size: resolvedSize })) : constant(null), c.withFragments === true ? option(webFragments({ size: resolvedSize })) : constant(null)).map(partsToUrlMapper, partsToUrlUnmapper);
}
