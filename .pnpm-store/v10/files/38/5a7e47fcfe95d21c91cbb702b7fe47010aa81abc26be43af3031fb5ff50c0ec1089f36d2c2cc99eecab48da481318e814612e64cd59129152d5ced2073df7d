// TypeScript Version: 3.0
/// <reference types="node" />

export interface DotenvExpandOptions {
  ignoreProcessEnv?: boolean;
  error?: Error;
  parsed?: {
    [name: string]: string;
  }
}

export interface DotenvExpandOutput {
  ignoreProcessEnv?: boolean;
  error?: Error;
  parsed?: {
    [name: string]: string;
  };
}

/**
 * Adds variable expansion on top of dotenv.
 *
 * See https://docs.dotenv.org
 *
 * @param options - additional options. example: `{ ignoreProcessEnv: false, error: null, parsed: { { KEY: 'value' } }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export function expand(options?: DotenvExpandOptions): DotenvExpandOutput
