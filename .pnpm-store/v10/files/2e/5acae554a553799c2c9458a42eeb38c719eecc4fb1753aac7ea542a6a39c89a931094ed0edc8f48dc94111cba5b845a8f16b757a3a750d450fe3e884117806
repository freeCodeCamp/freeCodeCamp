/**
 * Stream parser for parsing SSE (Server-Sent Events) streams.
 * The AI SDK 5 format uses SSE with JSON payloads prefixed by "data: ".
 */
import type { UIMessageChunk } from './types';
/**
 * Parse a stream of bytes as SSE (Server-Sent Events) and convert to UIMessageChunk events.
 * Handles the "data: " prefix used by the AI SDK 5 streaming format.
 *
 * @param stream - The input stream of raw bytes
 * @returns A ReadableStream of parsed UIMessageChunk events
 */
export declare function parseJsonEventStream<TChunk extends UIMessageChunk = UIMessageChunk>(stream: ReadableStream<Uint8Array>): ReadableStream<TChunk>;
/**
 * Process a ReadableStream using a callback for each value.
 * This is a non-async alternative to for-await-of iteration.
 */
export declare function processStream<T>(stream: ReadableStream<T>, onChunk: (chunk: T) => void | Promise<void>, onDone: () => void, onError: (error: Error) => void): void;
