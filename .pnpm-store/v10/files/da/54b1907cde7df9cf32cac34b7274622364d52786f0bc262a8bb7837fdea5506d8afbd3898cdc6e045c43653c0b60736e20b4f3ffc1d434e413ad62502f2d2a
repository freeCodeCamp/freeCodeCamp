// TypeScript Version: 3.0
/// <reference types="node" />
import type { URL } from 'url';

export interface DotenvParseOutput {
  [name: string]: string;
}

/**
 * Parses a string or buffer in the .env file format into an object.
 *
 * See https://dotenvx.com/docs
 *
 * @param src - contents to be parsed. example: `'DB_HOST=localhost'`
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
   * Can also be an array of strings, specifying multiple paths.
   *
   * example: `require('dotenv').config({ path: '/custom/path/to/.env' })`
   * example: `require('dotenv').config({ path: ['/path/to/first.env', '/path/to/second.env'] })`
   */
  path?: string | string[] | URL;

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
   * Suppress all output (except errors).
   *
   * example: `require('dotenv').config({ quiet: true })`
   */
  quiet?: boolean;

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

  /**
   * Default: `process.env`
   *
   * Specify an object to write your secrets to. Defaults to process.env environment variables.
   *
   * example: `const processEnv = {}; require('dotenv').config({ processEnv: processEnv })`
   */
  processEnv?: DotenvPopulateInput;

  /**
   * Default: `undefined`
   *
   * Pass the DOTENV_KEY directly to config options. Defaults to looking for process.env.DOTENV_KEY environment variable. Note this only applies to decrypting .env.vault files. If passed as null or undefined, or not passed at all, dotenv falls back to its traditional job of parsing a .env file.
   *
   * example: `require('dotenv').config({ DOTENV_KEY: 'dotenv://:key_1234…@dotenvx.com/vault/.env.vault?environment=production' })`
   */
  DOTENV_KEY?: string;
}

export interface DotenvConfigOutput {
  error?: Error;
  parsed?: DotenvParseOutput;
}

export interface DotenvPopulateOptions {
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

export interface DotenvPopulateInput {
  [name: string]: string;
}

/**
 * Loads `.env` file contents into process.env by default. If `DOTENV_KEY` is present, it smartly attempts to load encrypted `.env.vault` file contents into process.env.
 *
 * See https://dotenvx.com/docs
 *
 * @param options - additional options. example: `{ path: './custom/path', encoding: 'latin1', quiet: false, debug: true, override: false }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export function config(options?: DotenvConfigOptions): DotenvConfigOutput;

/**
 * Loads `.env` file contents into process.env.
 *
 * See https://dotenvx.com/docs
 *
 * @param options - additional options. example: `{ path: './custom/path', encoding: 'latin1', quiet: false, debug: true, override: false }`
 * @returns an object with a `parsed` key if successful or `error` key if an error occurred. example: { parsed: { KEY: 'value' } }
 *
 */
export function configDotenv(options?: DotenvConfigOptions): DotenvConfigOutput;

/**
 * Loads `source` json contents into `target` like process.env.
 *
 * See https://dotenvx.com/docs
 *
 * @param processEnv - the target JSON object. in most cases use process.env but you can also pass your own JSON object
 * @param parsed - the source JSON object
 * @param options - additional options. example: `{ quiet: false, debug: true, override: false }`
 * @returns {void}
 *
 */
export function populate(processEnv: DotenvPopulateInput, parsed: DotenvPopulateInput, options?: DotenvConfigOptions): void;

/**
 * Decrypt ciphertext
 *
 * See https://dotenvx.com/docs
 *
 * @param encrypted - the encrypted ciphertext string
 * @param keyStr - the decryption key string
 * @returns {string}
 *
 */
export function decrypt(encrypted: string, keyStr: string): string;
