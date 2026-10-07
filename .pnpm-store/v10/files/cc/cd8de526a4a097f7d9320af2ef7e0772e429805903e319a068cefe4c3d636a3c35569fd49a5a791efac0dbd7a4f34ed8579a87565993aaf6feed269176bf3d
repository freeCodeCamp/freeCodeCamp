import { Readable } from 'stream';

declare namespace getRawBody {
  export type Encoding = string | true;

  export interface Options {
    /**
     * The expected length of the stream.
     */
    length?: number | string | null;
    /**
     * The byte limit of the body. This is the number of bytes or any string
     * format supported by `bytes`, for example `1000`, `'500kb'` or `'3mb'`.
     */
    limit?: number | string | null;
    /**
     * The encoding to use to decode the body into a string. By default, a
     * `Buffer` instance will be returned when no encoding is specified. Most
     * likely, you want `utf-8`, so setting encoding to `true` will decode as
     * `utf-8`. You can use any type of encoding supported by `iconv-lite`.
     */
    encoding?: Encoding | null;
  }

  export interface RawBodyError extends Error {
    /**
     * The limit in bytes.
     */
    limit?: number;
    /**
     * The expected length of the stream.
     */
    length?: number;
    expected?: number;
    /**
     * The received bytes.
     */
    received?: number;
    /**
     * The encoding.
     */
    encoding?: string;
    /**
     * The corresponding status code for the error.
     */
    status: number;
    statusCode: number;
    /**
     * The error type.
     */
    type: string;
  }
}

/**
 * Gets the entire buffer of a stream either as a `Buffer` or a string.
 * Validates the stream's length against an expected length and maximum
 * limit. Ideal for parsing request bodies.
 */
declare function getRawBody(
  stream: Readable,
  callback: (err: getRawBody.RawBodyError, body: Buffer) => void
): void;

declare function getRawBody(
  stream: Readable,
  options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding,
  callback: (err: getRawBody.RawBodyError, body: string) => void
): void;

declare function getRawBody(
  stream: Readable,
  options: getRawBody.Options,
  callback: (err: getRawBody.RawBodyError, body: Buffer) => void
): void;

declare function getRawBody(
  stream: Readable,
  options: (getRawBody.Options & { encoding: getRawBody.Encoding }) | getRawBody.Encoding
): Promise<string>;

declare function getRawBody(
  stream: Readable,
  options?: getRawBody.Options
): Promise<Buffer>;

export = getRawBody;
