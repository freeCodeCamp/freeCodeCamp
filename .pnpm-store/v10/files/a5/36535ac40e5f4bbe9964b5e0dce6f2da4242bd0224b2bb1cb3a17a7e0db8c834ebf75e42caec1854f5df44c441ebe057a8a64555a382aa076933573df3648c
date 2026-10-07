import { headersToList } from './headersToList'

/**
 * Converts a given `Headers` instance to its string representation.
 */
export function headersToString(headers: Headers): string {
  const list = headersToList(headers)
  const lines = list.map(([name, value]) => {
    const values = ([] as string[]).concat(value)
    return `${name}: ${values.join(', ')}`
  })

  return lines.join('\r\n')
}
