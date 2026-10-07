/// <reference types="node" />
/// <reference types="node" />
import type { Readable } from "stream";
import type { BlobOptionalType, ReadableStreamOptionalType } from "../externals-check/browser-externals-check";
/**
 * @public
 *
 * This union represents a superset of the compatible types you
 * can use for streaming payload inputs.
 *
 * FAQ:
 * Why does the type union mix mutually exclusive runtime types, namely
 * Node.js and browser types?
 *
 * There are several reasons:
 * 1. For backwards compatibility.
 * 2. As a convenient compromise solution so that users in either environment may use the types
 *    without customization.
 * 3. The SDK does not have static type information about the exact implementation
 *    of the HTTP RequestHandler being used in your client(s) (e.g. fetch, XHR, node:http, or node:http2),
 *    given that it is chosen at runtime. There are multiple possible request handlers
 *    in both the Node.js and browser runtime environments.
 *
 *    Rather than restricting the type to a known common format (Uint8Array, for example)
 *    which doesn't include a universal streaming format in the currently supported Node.js versions,
 *    the type declaration is widened to multiple possible formats.
 *    It is up to the user to ultimately select a compatible format with the
 *    runtime and HTTP handler implementation they are using.
 *
 * Usage:
 *    The typical solution we expect users to have is to manually narrow the
 *    type when needed, picking the appropriate one out of the union according to the
 *    runtime environment and specific request handler.
 *    There is also the type utility "NodeJsClient", "BrowserClient" and more
 *    exported from this package. These can be applied at the client level
 *    to pre-narrow these streaming payload blobs. For usage see the readme.md
 *    in the root of the @smithy/types NPM package.
 */
export type StreamingBlobPayloadInputTypes = NodeJsRuntimeStreamingBlobPayloadInputTypes | BrowserRuntimeStreamingBlobPayloadInputTypes;
/**
 * @public
 *
 * Streaming payload input types in the Node.js environment.
 * These are derived from the types compatible with the request body used by node:http.
 *
 * Note: not all types are signable by the standard SignatureV4 signer when
 * used as the request body. For example, in Node.js a Readable stream
 * is not signable by the default signer.
 * They are included in the union because it may be intended in some cases,
 * but the expected types are primarily string, Uint8Array, and Buffer.
 *
 * Additional details may be found in the internal
 * function "getPayloadHash" in the SignatureV4 module.
 */
export type NodeJsRuntimeStreamingBlobPayloadInputTypes = string | Uint8Array | Buffer | Readable;
/**
 * @public
 *
 * Streaming payload input types in the browser environment.
 * These are derived from the types compatible with fetch's Request.body.
 */
export type BrowserRuntimeStreamingBlobPayloadInputTypes = string | Uint8Array | ReadableStreamOptionalType | BlobOptionalType;
