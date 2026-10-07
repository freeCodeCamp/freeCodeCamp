/// <reference types="node" />
/// <reference types="node" />
import type { IncomingMessage } from "http";
import type { Readable } from "stream";
import type { BlobOptionalType, ReadableStreamOptionalType } from "../externals-check/browser-externals-check";
import type { SdkStream } from "../serde";
/**
 * @public
 *
 * This union represents a superset of the types you may receive
 * in streaming payload outputs.
 *
 * @see StreamingPayloadInputTypes for FAQ about mixing types from multiple environments.
 *
 * To highlight the upstream docs about the SdkStream mixin:
 *
 * The interface contains mix-in (via Object.assign) methods to transform the runtime-specific
 * stream implementation to specified format. Each stream can ONLY be transformed
 * once.
 *
 * The available methods are described on the SdkStream type via SdkStreamMixin.
 */
export type StreamingBlobPayloadOutputTypes = NodeJsRuntimeStreamingBlobPayloadOutputTypes | BrowserRuntimeStreamingBlobPayloadOutputTypes;
/**
 * @public
 *
 * Streaming payload output types in the Node.js environment.
 *
 * This is by default the IncomingMessage type from node:http responses when
 * using the default node-http-handler in Node.js environments.
 *
 * It can be other Readable types like node:http2's ClientHttp2Stream
 * such as when using the node-http2-handler.
 *
 * The SdkStreamMixin adds methods on this type to help transform (collect) it to
 * other formats.
 */
export type NodeJsRuntimeStreamingBlobPayloadOutputTypes = SdkStream<IncomingMessage | Readable>;
/**
 * @public
 *
 * Streaming payload output types in the browser environment.
 *
 * This is by default fetch's Response.body type (ReadableStream) when using
 * the default fetch-http-handler in browser-like environments.
 *
 * It may be a Blob, such as when using the XMLHttpRequest handler
 * and receiving an arraybuffer response body.
 *
 * The SdkStreamMixin adds methods on this type to help transform (collect) it to
 * other formats.
 */
export type BrowserRuntimeStreamingBlobPayloadOutputTypes = SdkStream<ReadableStreamOptionalType | BlobOptionalType>;
