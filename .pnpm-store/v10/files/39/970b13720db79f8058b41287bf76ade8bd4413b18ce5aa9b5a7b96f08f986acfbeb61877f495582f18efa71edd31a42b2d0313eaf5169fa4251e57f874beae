import URLError from './lib/errors'
import URLSearchParams from './lib/url-search-params'

interface URL {
  href: string
  protocol: string
  username: string
  password: string
  host: string
  hostname: string
  port: string
  pathname: string
  search: string
  searchParams: URLSearchParams
  hash: string

  toString(): string
  toJSON(): string
}

declare class URL {
  constructor(input: string, base?: string | URL)
}

declare namespace URL {
  export function isURL(value: unknown): value is URL

  export function isURLSearchParams(value: unknown): value is URLSearchParams

  export function parse(input: string, base?: string | URL): URL | null

  export function canParse(input: string, base?: string | URL): boolean

  export function fileURLToPath(url: URL | string): string

  export function pathToFileURL(pathname: string): URL

  export { URL, type URLError, URLError as errors, URLSearchParams }
}

export = URL
