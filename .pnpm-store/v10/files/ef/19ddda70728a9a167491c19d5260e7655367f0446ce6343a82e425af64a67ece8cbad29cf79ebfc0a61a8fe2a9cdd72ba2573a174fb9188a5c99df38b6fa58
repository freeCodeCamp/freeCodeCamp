/**
 * Parses a given value into a JSON.
 * Does not throw an exception on an invalid JSON string.
 */
export function jsonParse<ValueType extends Record<string, any>>(
  value: any,
): ValueType | undefined {
  try {
    return JSON.parse(value)
  } catch {
    return undefined
  }
}
