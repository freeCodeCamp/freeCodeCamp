import { HeadersObject } from '../glossary'

/**
 * Reduces given headers object instnace.
 */
export function reduceHeadersObject<R>(
  headers: HeadersObject,
  reducer: (headers: R, name: string, value: string | string[]) => R,
  initialState: R
): R {
  return Object.keys(headers).reduce<R>((nextHeaders, name) => {
    return reducer(nextHeaders, name, headers[name])
  }, initialState)
}
