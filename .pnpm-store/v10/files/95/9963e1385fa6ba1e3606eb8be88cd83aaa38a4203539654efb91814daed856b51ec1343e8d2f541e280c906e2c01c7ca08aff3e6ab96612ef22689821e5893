import { Path } from './matchRequestUrl.js';

/**
 * Normalizes a given request handler path:
 * - Preserves RegExp.
 * - Removes query parameters and hashes.
 * - Rebases relative URLs against the "baseUrl" or the current location.
 * - Preserves relative URLs in Node.js, unless specified otherwise.
 * - Preserves optional path parameters.
 */
declare function normalizePath(path: Path, baseUrl?: string): Path;

export { normalizePath };
