type Parse = typeof parse

declare namespace parse {
  export type ParseOptions = {
    /**
     * What to do when a `__proto__` key is found.
      * - `'error'` - throw a `SyntaxError` when a `__proto__` key is found. This is the default value.
      * - `'remove'` - deletes any `__proto__` keys from the result object.
      * - `'ignore'` - skips all validation (same as calling `JSON.parse()` directly).
      */
    protoAction?: 'error' | 'remove' | 'ignore';
    /**
     * What to do when a `constructor` key is found.
     * - `'error'` - throw a `SyntaxError` when a `constructor.prototype` key is found. This is the default value.
     * - `'remove'` - deletes any `constructor` keys from the result object.
     * - `'ignore'` - skips all validation (same as calling `JSON.parse()` directly).
     */
    constructorAction?: 'error' | 'remove' | 'ignore';
    /** If `true`, returns `null` instead of throwing an error when a security issue is found. */
    safe?: boolean;
  }

  export type ScanOptions = ParseOptions

  export type Reviver = (this: any, key: string, value: any) => any

  /**
   * Parses a given JSON-formatted text into an object.
   *
   * @param text The JSON text string.
   * @param reviver The `JSON.parse()` optional `reviver` argument.
   * @param options Optional configuration object.
   * @returns The parsed object.
   */
  export const parse: Parse

  /**
   * Safely parses a given JSON-formatted text into an object.
   *
   * @param text The JSON text string.
   * @param reviver The `JSON.parse()` optional `reviver` argument.
   * @returns The parsed object, or `undefined` if there was an error or if the JSON contained possibly insecure properties.
   */
  export function safeParse (text: string | Buffer, reviver?: Reviver | null): any

  /**
   * Scans a given object for prototype properties.
   *
   * @param obj The object being scanned.
   * @param options Optional configuration object.
   * @returns The object, or `null` if onError is set to `nullify`
   */
  export function scan (obj: { [key: string | number]: any }, options?: ParseOptions): any

  export { parse as default }
}

declare function parse (text: string | Buffer, options?: parse.ParseOptions): any
declare function parse (text: string | Buffer, reviver?: parse.Reviver | null, options?: parse.ParseOptions): any
export = parse
