import { HeadersObject } from '../glossary'

// List of headers that cannot have multiple values,
// while potentially having a comma in their single value.
const singleValueHeaders = ['user-agent']

/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
export function headersToObject(headers: Headers): HeadersObject {
  const headersObject: HeadersObject = {}

  headers.forEach((value, name) => {
    const isMultiValue =
      !singleValueHeaders.includes(name.toLowerCase()) && value.includes(',')
    headersObject[name] = isMultiValue
      ? value.split(',').map((s) => s.trim())
      : value
  })

  return headersObject
}
