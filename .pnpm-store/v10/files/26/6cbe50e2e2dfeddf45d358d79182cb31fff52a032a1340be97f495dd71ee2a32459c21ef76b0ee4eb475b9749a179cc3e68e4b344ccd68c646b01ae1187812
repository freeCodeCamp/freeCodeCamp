import {asciiAlphanumeric} from 'micromark-util-character'
import {encode} from 'micromark-util-encode'
/**
 * Make a value safe for injection as a URL.
 *
 * This encodes unsafe characters with percent-encoding and skips already
 * encoded sequences (see `normalizeUri`).
 * Further unsafe characters are encoded as character references (see
 * `micromark-util-encode`).
 *
 * A regex of allowed protocols can be given, in which case the URL is
 * sanitized.
 * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or
 * `/^https?$/i` for `img[src]` (this is what `github.com` allows).
 * If the URL includes an unknown protocol (one not matched by `protocol`, such
 * as a dangerous example, `javascript:`), the value is ignored.
 *
 * @param {string | null | undefined} url
 *   URI to sanitize.
 * @param {RegExp | null | undefined} [protocol]
 *   Allowed protocols.
 * @returns {string}
 *   Sanitized URI.
 */
export function sanitizeUri(url, protocol) {
  const value = encode(normalizeUri(url || ''))
  if (!protocol) {
    return value
  }
  const colon = value.indexOf(':')
  const questionMark = value.indexOf('?')
  const numberSign = value.indexOf('#')
  const slash = value.indexOf('/')
  if (
    // If there is no protocol, it’s relative.
    colon < 0 ||
    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    (slash > -1 && colon > slash) ||
    (questionMark > -1 && colon > questionMark) ||
    (numberSign > -1 && colon > numberSign) ||
    // It is a protocol, it should be allowed.
    protocol.test(value.slice(0, colon))
  ) {
    return value
  }
  return ''
}

/**
 * Normalize a URL.
 *
 * Encode unsafe characters with percent-encoding, skipping already encoded
 * sequences.
 *
 * @param {string} value
 *   URI to normalize.
 * @returns {string}
 *   Normalized URI.
 */
export function normalizeUri(value) {
  /** @type {Array<string>} */
  const result = []
  let index = -1
  let start = 0
  let skip = 0
  while (++index < value.length) {
    const code = value.charCodeAt(index)
    /** @type {string} */
    let replace = ''

    // A correct percent encoded value.
    if (
      code === 37 &&
      asciiAlphanumeric(value.charCodeAt(index + 1)) &&
      asciiAlphanumeric(value.charCodeAt(index + 2))
    ) {
      skip = 2
    }
    // ASCII.
    else if (code < 128) {
      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {
        replace = String.fromCharCode(code)
      }
    }
    // Astral.
    else if (code > 55_295 && code < 57_344) {
      const next = value.charCodeAt(index + 1)

      // A correct surrogate pair.
      if (code < 56_320 && next > 56_319 && next < 57_344) {
        replace = String.fromCharCode(code, next)
        skip = 1
      }
      // Lone surrogate.
      else {
        replace = '\uFFFD'
      }
    }
    // Unicode.
    else {
      replace = String.fromCharCode(code)
    }
    if (replace) {
      result.push(value.slice(start, index), encodeURIComponent(replace))
      start = index + skip + 1
      replace = ''
    }
    if (skip) {
      index += skip
      skip = 0
    }
  }
  return result.join('') + value.slice(start)
}
