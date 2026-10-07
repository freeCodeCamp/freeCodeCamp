interface URLSearchParams extends Iterable<[name: string, value: string]> {
  readonly size: number

  append(name: string, value: string): void
  delete(name: string, value?: string): void
  get(name: string): string | undefined
  getAll(name: string): string[]
  has(name: string, value?: string): boolean
  set(name: string, value: string): void

  toString(): string
  toJSON(): string
}

declare class URLSearchParams {
  constructor(init: string | Record<string, string> | Iterable<[string, string]>)
}

declare namespace URLSearchParams {
  export function isURLSearchParams(value: unknown): value is URLSearchParams
}

export = URLSearchParams
