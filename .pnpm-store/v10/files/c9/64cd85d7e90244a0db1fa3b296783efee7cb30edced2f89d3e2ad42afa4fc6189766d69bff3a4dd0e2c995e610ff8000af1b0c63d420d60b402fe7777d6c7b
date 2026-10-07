// TypeScript Version: 3.0
/// <reference types="node" />

export interface DotenvParseOutput {
  [name: string]: string;
}

/**
 * Parses a string or buffer in the .env file format into an object.
 *
 * See https://docs.dotenv.org
 *
 * @param src - contents to be parsed. example: `'DB_HOST=localhost'`
 * @param options - additional options. example: `{ debug: true }`
 * @returns an object with keys and values based on `src`. example: `{ DB_HOST : 'localhost' }`
 */
export function parse<T extends DotenvParseOutput = DotenvParseOutput>(
  src: string | Buffer
): T;

export interface DotenvConfigOptions {
  /**
   * Default: `path.resolve(process.cwd(), '.env')`
   *
   * Specify a custom path if your file containing environment variables is located elsewhere.
   *
   * example: `require('dotenv').config({ path: '/custom/path/to/.env' })`
   */
  path?: string;

  /**
   * Default: `utf8`
   *
   * Specify the encoding of your file containing environment variables.
   *
   * example: `require('dotenv').config({ encoding: 'latin1' })`
   */
  encoding?: string;

  /**
   * Default: `false`
   *
   * Turn on logging to help debug why certain keys or values are not being set as you expect.
   *
   * example: `require('dotenv').config({ debug: process.env.DEBUG })`
   */
  debug?: boolean;

  /**
   * Default: `false`
   *
   * Override any environment variables that have already been set on your machine with values from your .env file.
   *
   * example: `require('dotenv').config({ override: true })`
   */
  override?: boolean;
}

export interface DotenvConfigOutput {
  error?: Error;
  parsed?: DotenvParseOutput;
}

/**
 * Loads `.env` file contents into process.env.
 *
 * See https://docs.dotenv.org
 *
 * @param options - additional options. example: `{ path: './custom/path', encoding: 'latin1', debug: true, override: false }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export function config(options?: DotenvConfigOptions): DotenvConfigOutput;
