export type Replacer = (number | string)[] | null | undefined | ((key: string, value: unknown) => string | number | boolean | null | object)

export function stringify(value: undefined | symbol | ((...args: unknown[]) => unknown), replacer?: Replacer, space?: string | number): undefined
export function stringify(value: string | number | unknown[] | null | boolean | object, replacer?: Replacer, space?: string | number): string
export function stringify(value: unknown, replacer?: ((key: string, value: unknown) => unknown) | (number | string)[] | null | undefined, space?: string | number): string | undefined

export interface StringifyOptions {
  bigint?: boolean,
  circularValue?: string | null | TypeErrorConstructor | ErrorConstructor,
  deterministic?: boolean,
  maximumBreadth?: number,
  maximumDepth?: number,
  strict?: boolean,
}

export namespace stringify {
  export function configure(options: StringifyOptions): typeof stringify
}

export function configure(options: StringifyOptions): typeof stringify

export default stringify
