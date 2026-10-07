import { HeadersObject } from '../glossary'

/**
 * Appends a given header to the headers object.
 * Converts multiple values into a list.
 */
export function appendHeader(
  headers: HeadersObject,
  name: string,
  value: string | string[]
): HeadersObject {
  if (headers.hasOwnProperty(name)) {
    return Object.assign({}, headers, {
      [name]: ([] as string[]).concat(headers[name]).concat(value),
    })
  }

  return Object.assign({}, headers, {
    [name]: value,
  })
}
