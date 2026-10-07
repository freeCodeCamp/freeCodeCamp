import { resolveSize } from './_internals/helpers/MaxLengthFromMinLength.js';
import { buildUriPathArbitrary } from './_internals/builders/UriPathArbitraryBuilder.js';
export function webPath(constraints) {
    const c = constraints || {};
    const resolvedSize = resolveSize(c.size);
    return buildUriPathArbitrary(resolvedSize);
}
