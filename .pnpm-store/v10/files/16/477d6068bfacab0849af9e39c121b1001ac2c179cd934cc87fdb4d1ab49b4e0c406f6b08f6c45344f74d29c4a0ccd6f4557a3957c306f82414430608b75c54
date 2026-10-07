import { match } from 'path-to-regexp'
import { getCleanUrl } from '@mswjs/interceptors'
import { normalizePath } from './normalizePath'

export type Path = string | RegExp
export type PathParams<KeyType extends keyof any = string> = {
  [ParamName in KeyType]?: string | ReadonlyArray<string>
}

export interface Match {
  matches: boolean
  params?: PathParams
}

/**
 * Coerce a path supported by MSW into a path
 * supported by "path-to-regexp".
 */
export function coercePath(path: string): string {
  return (
    path
      /**
       * Replace wildcards ("*") with unnamed capturing groups
       * because "path-to-regexp" doesn't support wildcards.
       * Ignore path parameter' modifiers (i.e. ":name*").
       */
      .replace(
        /([:a-zA-Z_-]*)(\*{1,2})+/g,
        (_, parameterName: string | undefined, wildcard: string) => {
          const expression = '(.*)'

          if (!parameterName) {
            return expression
          }

          return parameterName.startsWith(':')
            ? `${parameterName}${wildcard}`
            : `${parameterName}${expression}`
        },
      )
      /**
       * Escape the port so that "path-to-regexp" can match
       * absolute URLs with numeric or wildcard ports.
       */
      .replace(/([^/])(:)(?=(?:\d+|\(\.\*\))(?=\/|$))/, '$1\\$2')
      /**
       * Escape the protocol so that "path-to-regexp" could match
       * absolute URL.
       * @see https://github.com/pillarjs/path-to-regexp/issues/259
       */
      .replace(/^([^/]+)(:)(?=\/\/)/, '$1\\$2')
  )
}

/**
 * Returns the result of matching given request URL against a mask.
 */
export function matchRequestUrl(url: URL, path: Path, baseUrl?: string): Match {
  const normalizedPath = normalizePath(path, baseUrl)
  const cleanPath =
    typeof normalizedPath === 'string'
      ? coercePath(normalizedPath)
      : normalizedPath

  const cleanUrl = getCleanUrl(url)
  const result = match(cleanPath, { decode: decodeURIComponent })(cleanUrl)
  const params = (result && (result.params as PathParams)) || {}

  return {
    matches: result !== false,
    params,
  }
}

export function isPath(value: unknown): value is Path {
  return typeof value === 'string' || value instanceof RegExp
}
