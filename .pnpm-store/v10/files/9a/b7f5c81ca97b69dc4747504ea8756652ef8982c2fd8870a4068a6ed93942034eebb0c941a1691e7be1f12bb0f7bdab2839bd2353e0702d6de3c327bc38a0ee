// deno-lint-ignore-file no-control-regex
const UriReference = /^(?!.*[^\x00-\x7F])(?!.*\\)(?:(?:[a-z][a-z0-9+\-.]*:)?(?:\/\/[^\s[\]{}<>^`|]*)?|[^\s[\]{}<>^`|]*)(?:\?[^\s[\]{}<>^`|]*)?(?:#[^\s[\]{}<>^`|]*)?$/i;
/**
 * Returns true if the value is a valid URI Reference.
 * @specification https://tools.ietf.org/html/rfc3986
 */
export function IsUriReference(value) {
    return UriReference.test(value);
}
