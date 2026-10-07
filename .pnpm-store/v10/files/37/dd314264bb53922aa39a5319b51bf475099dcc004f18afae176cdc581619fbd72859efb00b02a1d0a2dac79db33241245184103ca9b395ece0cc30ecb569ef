// deno-lint-ignore-file no-control-regex
// deno-coverage-ignore-start
function TryUrl(value) {
    try {
        new URL(value, 'http://example.com'); // This handles relative paths correctly
        return true;
    }
    catch {
        return false;
    }
}
// deno-coverage-ignore-stop
/**
 * Returns true if the value is a Iri reference
 * @specification
 */
export function IsIriReference(value) {
    // 1. Basic forbidden character checks (must be percent-encoded or not exist)
    // RFC 3987 excludes space, backslash, and control characters from being unencoded.
    if (value.includes(' ')) { // Unencoded space (U+0020)
        return false;
    }
    if (value.includes('\\')) { // Backslash (U+005C)
        return false;
    }
    // ASCII control characters (U+0000-U+001F and U+007F)
    if (/[\x00-\x1F\x7F]/.test(value)) {
        return false;
    }
    // 2. Check for invalid percent-encoding
    // A percent sign '%' must always be followed by exactly two hexadecimal characters.
    // This regex finds a '%' that is NOT followed by two hexadecimal characters.
    //   - `%` matches a literal percent sign.
    //   - `(?!...)` is a negative lookahead, asserting that what follows is NOT.
    //   - `[0-9a-fA-F]{2}` matches exactly two hexadecimal digits.
    // So, if a '%' is found that is not immediately followed by two hex digits, this regex will match.
    if (/%(?![0-9a-fA-F]{2})/.test(value)) {
        return false;
    }
    // 3. Handle empty string (valid relative reference to the current document)
    if (value === '') {
        return true;
    }
    // 4. Determine if it's attempting to be an absolute IRI or a relative IRI, and parse.
    const colonIndex = value.indexOf(':');
    const hasValidSchemePrefix = colonIndex > 0 && // Colon must not be at the very beginning (e.g., ":foo")
        /^[a-zA-Z][a-zA-Z0-9+\-.]*$/.test(value.substring(0, colonIndex));
    if (hasValidSchemePrefix) {
        return TryUrl(value);
    }
    else {
        // This handles cases like `httpx//example.com/path` which look like malformed absolute URIs.
        const looksLikeMalformedSchemeAndAuthority = value.match(/^([a-zA-Z][a-zA-Z0-9+\-.]*)(\/\/)/);
        if (looksLikeMalformedSchemeAndAuthority && colonIndex === -1) {
            return false;
        }
        // Otherwise, it's a relative IRI reference.
        return TryUrl(value);
    }
}
