interface Reviver {
  (this: any, key: string, value: any): any;
}

interface ParseOptions {
  /**
   * - `'error'` - throw a `SyntaxError` when a `__proto__` key is found. This is the default value.
   * - `'remove'` - deletes any `__proto__` keys from the result object.
   * - `'ignore'` - skips all validation (same as calling `JSON.parse()` directly).
   */
  protoAction?: 'error' | 'remove' | 'ignore';
}

/**
 * Parses a given JSON-formatted text into an object.
 * @param text the JSON text string.
 */
export function parse(text: string): any;

/**
 * Parses a given JSON-formatted text into an object.
 * @param text the JSON text string.
 * @param reviver the `JSON.parse()` optional `reviver` argument.
 */
export function parse(text: string, reviver: Reviver): any;

/**
 * Parses a given JSON-formatted text into an object.
 * @param text the JSON text string.
 * @param options optional configuration object.
 */
export function parse(text: string, options: ParseOptions): any;

/**
 * Parses a given JSON-formatted text into an object.
 * @param text the JSON text string.
 * @param reviver the `JSON.parse()` optional `reviver` argument.
 * @param options optional configuration object.
 */
export function parse(text: string, reviver: Reviver, options: ParseOptions): any;

interface ScanOptions {
  /**
   * - `'error'` - throw a `SyntaxError` when a `__proto__` key is found. This is the default value.
   * - `'remove'` - deletes any `__proto__` keys from the input `obj`.
   */
  protoAction?: 'error' | 'remove';
}

/**
 * Scans a given object for prototype properties.
 * @param obj the object being scanned.
 * @param options optional configuration object.
 */
export function scan(obj: any, options?: ScanOptions): void;

/**
 * Parses a given JSON-formatted text into an object or `null` if an error is found.
 * @param text the JSON text string.
 * @param reviver the `JSON.parse()` optional `reviver` argument.
 */
export function safeParse(text: string, reviver?: Reviver) : any | null;
