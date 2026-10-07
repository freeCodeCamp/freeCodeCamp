declare function pathToRegexp (path: pathToRegexp.Path, keys?: pathToRegexp.Key[], options?: pathToRegexp.RegExpOptions & pathToRegexp.ParseOptions): RegExp;

declare namespace pathToRegexp {
  export interface RegExpOptions {
    /**
     * When `true` the route will be case sensitive. (default: `false`)
     */
    sensitive?: boolean;
    /**
     * When `false` the trailing slash is optional. (default: `false`)
     */
    strict?: boolean;
    /**
     * When `false` the path will match at the beginning. (default: `true`)
     */
    end?: boolean;
    /**
     * Sets the final character for non-ending optimistic matches. (default: `/`)
     */
    delimiter?: string;
    /**
     * List of characters that can also be "end" characters.
     */
    endsWith?: string | string[];
  }

  export interface ParseOptions {
    /**
     * Set the default delimiter for repeat parameters. (default: `'/'`)
     */
    delimiter?: string;
    /**
     * List of valid delimiter characters. (default: `'./'`)
     */
    delimiters?: string | string[];
  }

  /**
   * Parse an Express-style path into an array of tokens.
   */
  export function parse (path: string, options?: ParseOptions): Token[];

  /**
   * Transforming an Express-style path into a valid path.
   */
  export function compile (path: string, options?: ParseOptions): PathFunction;

  /**
   * Transform an array of tokens into a path generator function.
   */
  export function tokensToFunction (tokens: Token[]): PathFunction;

  /**
   * Transform an array of tokens into a matching regular expression.
   */
  export function tokensToRegExp (tokens: Token[], keys?: Key[], options?: RegExpOptions): RegExp;

  export interface Key {
    name: string | number;
    prefix: string;
    delimiter: string;
    optional: boolean;
    repeat: boolean;
    pattern: string;
    partial: boolean;
  }

  interface PathFunctionOptions {
    /**
     * Function for encoding input strings for output.
     */
    encode?: (value: string, token: Key) => string;
  }

  export type Token = string | Key;
  export type Path = string | RegExp | Array<string | RegExp>;
  export type PathFunction = (data?: Object, options?: PathFunctionOptions) => string;
}

export = pathToRegexp;
