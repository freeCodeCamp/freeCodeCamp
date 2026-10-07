/**
 * Returns all accepted mime types, ordered by precedence as defined
 * in [RFC 7231 Section 5.3.2](https://datatracker.ietf.org/doc/html/rfc7231#section-5.3.2).
 *
 * Precedence rules (highest to lowest):
 * 1. Quality value (`q` parameter, default 1).
 * 2. Specificity: `type/subtype` > `type/*` > `*\/*`.
 * 3. Number of media type parameters (more = more specific).
 *
 * Types with `q=0` are excluded (explicitly not acceptable).
 */
declare function getAllAcceptedMimeTypes(acceptHeader: string | null): Array<string>;

export { getAllAcceptedMimeTypes };
