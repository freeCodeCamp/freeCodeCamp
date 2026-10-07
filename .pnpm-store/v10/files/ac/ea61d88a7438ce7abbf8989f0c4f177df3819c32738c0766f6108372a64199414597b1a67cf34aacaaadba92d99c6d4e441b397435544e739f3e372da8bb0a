import type { Exact } from "../transform/exact";
/**
 * @public
 *
 * A checked type that resolves to Blob if it is defined as more than a stub, otherwise
 * resolves to 'never' so as not to widen the type of unions containing Blob
 * excessively.
 */
export type BlobOptionalType = BlobDefined extends true ? Blob : Unavailable;
/**
 * @public
 *
 * A checked type that resolves to ReadableStream if it is defined as more than a stub, otherwise
 * resolves to 'never' so as not to widen the type of unions containing ReadableStream
 * excessively.
 */
export type ReadableStreamOptionalType = ReadableStreamDefined extends true ? ReadableStream : Unavailable;
/**
 * @public
 *
 * Indicates a type is unavailable if it resolves to this.
 */
export type Unavailable = never;
/**
 * @internal
 *
 * Whether the global types define more than a stub for ReadableStream.
 */
export type ReadableStreamDefined = Exact<ReadableStream, {}> extends true ? false : true;
/**
 * @internal
 *
 * Whether the global types define more than a stub for Blob.
 */
export type BlobDefined = Exact<Blob, {}> extends true ? false : true;
