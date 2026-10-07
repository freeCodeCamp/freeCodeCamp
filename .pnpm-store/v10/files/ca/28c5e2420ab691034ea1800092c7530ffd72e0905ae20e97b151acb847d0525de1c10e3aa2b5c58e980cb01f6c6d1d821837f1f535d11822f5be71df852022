/// <reference types="node" />
/// <reference types="node" />
import { Readable } from "stream";
import type { BlobOptionalType, ReadableStreamOptionalType } from "../externals-check/browser-externals-check";
/**
 * @public
 *
 * A union of types that can be used as inputs for the service model
 * "blob" type when it represents the request's entire payload or body.
 *
 * For example, in Lambda::invoke, the payload is modeled as a blob type
 * and this union applies to it.
 * In contrast, in Lambda::createFunction the Zip file option is a blob type,
 * but is not the (entire) payload and this union does not apply.
 *
 * Note: not all types are signable by the standard SignatureV4 signer when
 * used as the request body. For example, in Node.js a Readable stream
 * is not signable by the default signer.
 * They are included in the union because it may work in some cases,
 * but the expected types are primarily string and Uint8Array.
 *
 * Additional details may be found in the internal
 * function "getPayloadHash" in the SignatureV4 module.
 */
export type BlobPayloadInputTypes = string | ArrayBuffer | ArrayBufferView | Uint8Array | NodeJsRuntimeBlobTypes | BrowserRuntimeBlobTypes;
/**
 * @public
 *
 * Additional blob types for the Node.js environment.
 */
export type NodeJsRuntimeBlobTypes = Readable | Buffer;
/**
 * @public
 *
 * Additional blob types for the browser environment.
 */
export type BrowserRuntimeBlobTypes = BlobOptionalType | ReadableStreamOptionalType;
/**
 * @deprecated renamed to BlobPayloadInputTypes.
 */
export type BlobTypes = BlobPayloadInputTypes;
