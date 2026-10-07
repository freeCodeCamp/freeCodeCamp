export interface Cookie {
  /** Cookie name */
  name: string;
  /** Cookie value */
  value: string;
  /** Cookie path */
  path?: string;
  /** Absolute expiration date for the cookie */
  expires?: Date;
  /**
   * Relative max age of the cookie in seconds from when the client receives it.
   * Note: when using with express's res.cookie() method, multiply maxAge by 1000 to convert to milliseconds.
   */
  maxAge?: number;
  /**
   * Domain for the cookie,
   * may begin with "." to indicate the named domain or any subdomain of it
   */
  domain?: string;
  /** Indicates that this cookie should only be sent over HTTPS */
  secure?: boolean;
  /** Indicates that this cookie should not be accessible to client-side JavaScript */
  httpOnly?: boolean;
  /** Indicates a cookie ought not to be sent along with cross-site requests */
  sameSite?: string;
  /** Indicates the cookie should be stored using partitioned storage */
  partitioned?: boolean;
}

export interface CookieMap {
  [name: string]: Cookie;
}

export interface Options {
  /**
   * Calls decodeURIComponent on each value.
   * @default true
   */
  decodeValues?: boolean;
  /**
   * Return an object instead of an array.
   * @default false
   */
  map?: boolean;
  /**
   * Suppress the warning that is logged when called on a request instead of a response.
   * @default false
   */
  silent?: boolean;
  /**
   * Controls whether combined cookie strings are split.
   * - `true`: always split
   * - `false`: never split
   * - `"auto"`: split strings but not arrays
   * @default "auto"
   */
  split?: boolean | "auto";
}

/** Object with a `headers` property (e.g. Node.js IncomingMessage or fetch Response) */
type ResponseLike = {
  headers:
    | { getSetCookie(): string[] }
    | { "set-cookie"?: string | readonly string[] }
    | Record<string, string | string[] | undefined>;
};

type SetCookieInput = string | readonly string[] | ResponseLike;

/**
 * Parses set-cookie headers into objects.
 */
export function parseSetCookie(
  input: SetCookieInput,
  options: Options & { map: true }
): CookieMap;
export function parseSetCookie(
  input: SetCookieInput,
  options?: Options & { map?: false }
): Cookie[];
export function parseSetCookie(
  input: SetCookieInput,
  options?: Options
): Cookie[] | CookieMap;

/**
 * Parses a single set-cookie header value string.
 * @deprecated Use `parseSetCookie` instead.
 */
export function parseString(
  setCookieValue: string,
  options?: Options
): Cookie | null;

/**
 * Splits a combined set-cookie header string into individual set-cookie header strings.
 * @deprecated Use `parseSetCookie` with the `split` option instead.
 */
export function splitCookiesString(
  input: string | readonly string[] | undefined
): string[];

/**
 * @deprecated Renamed to `parseSetCookie`. Kept for backward compatibility.
 */
export {
  parseSetCookie as parse,
};

/**
 * Default export — the `parseSetCookie` function with additional properties for backward compatibility.
 */
declare const _default: typeof parseSetCookie & {
  parseSetCookie: typeof parseSetCookie;
  parse: typeof parseSetCookie;
  parseString: typeof parseString;
  splitCookiesString: typeof splitCookiesString;
};
export default _default;
