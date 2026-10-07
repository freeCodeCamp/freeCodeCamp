import { RAW_HEADER_NAMES } from './Headers'

/**
 * Returns the object of all raw headers.
 */
export function getRawHeaders(headers: Headers) {
  const rawHeaders: Record<string, string> = {}

  for (const [name, value] of headers.entries()) {
    rawHeaders[headers[RAW_HEADER_NAMES].get(name)] = value
  }

  return rawHeaders
}
