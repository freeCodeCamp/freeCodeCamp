const charCodesToRemove = [
  String.fromCharCode(0x0a),
  String.fromCharCode(0x0d),
  String.fromCharCode(0x09),
  String.fromCharCode(0x20),
]

const HEADER_VALUE_REMOVE_REGEXP = new RegExp(
  `(^[${charCodesToRemove.join('')}]|$[${charCodesToRemove.join('')}])`,
  'g'
)

/**
 * Normalize the given header value.
 * @see https://fetch.spec.whatwg.org/#concept-header-value-normalize
 */
export function normalizeHeaderValue(value: string): string {
  const nextValue = value.replace(HEADER_VALUE_REMOVE_REGEXP, '')
  return nextValue
}
