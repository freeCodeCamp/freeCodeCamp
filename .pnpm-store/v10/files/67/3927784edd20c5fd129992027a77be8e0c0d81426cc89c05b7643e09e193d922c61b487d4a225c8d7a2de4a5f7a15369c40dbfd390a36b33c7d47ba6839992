// Type definitions for pino-std-serializers 2.4
// Definitions by: Connor Fitzgerald <https://github.com/connorjayfitzgerald>
//                 Igor Savin <https://github.com/kibertoad>
// TypeScript Version: 2.7

/// <reference types="node" />
import { IncomingMessage, ServerResponse } from 'http';

export interface SerializedError {
  /**
   * The name of the object's constructor.
   */
  type: string;
  /**
   * The supplied error message.
   */
  message: string;
  /**
   * The stack when the error was generated.
   */
  stack: string;
  /**
   * Non-enumerable. The original Error object. This will not be included in the logged output.
   * This is available for subsequent serializers to use.
   */
  raw: Error;
  /**
   * `cause` is never included in the log output, if you need the `cause`, use {@link raw.cause}
   */
  cause?: never;
  /**
   * Any other extra properties that have been attached to the object will also be present on the serialized object.
   */
  [key: string]: any;
  [key: number]: any;
}

/**
 * Serializes an Error object. Does not serialize "err.cause" fields (will append the err.cause.message to err.message
 * and err.cause.stack to err.stack)
 */
export function err(err: Error): SerializedError;

/**
 * Serializes an Error object, including full serialization for any err.cause fields recursively.
 */
export function errWithCause(err: Error): SerializedError;

export interface SerializedRequest {
  /**
   * Defaults to `undefined`, unless there is an `id` property already attached to the `request` object or
   * to the `request.info` object. Attach a synchronous function to the `request.id` that returns an
   * identifier to have the value filled.
   */
  id: string | undefined;
  /**
   * HTTP method.
   */
  method: string;
  /**
   * Request pathname (as per req.url in core HTTP).
   */
  url: string;
  /**
   * Reference to the `headers` object from the request (as per req.headers in core HTTP).
   */
  headers: Record<string, string>;
  remoteAddress: string;
  remotePort: number;
  params: Record<string, string>;
  query: Record<string, string>;

  /**
   * Non-enumerable, i.e. will not be in the output, original request object. This is available for subsequent
   * serializers to use. In cases where the `request` input already has  a `raw` property this will
   * replace the original `request.raw` property.
   */
  raw: IncomingMessage;
}

/**
 * Serializes a Request object.
 */
export function req(req: IncomingMessage): SerializedRequest;

/**
 * Used internally by Pino for general request logging.
 */
export function mapHttpRequest(req: IncomingMessage): {
  req: SerializedRequest
};

export interface SerializedResponse {
  /**
   * HTTP status code.
   */
  statusCode: number;
  /**
   * The headers to be sent in the response.
   */
  headers: Record<string, string>;
  /**
   * Non-enumerable, i.e. will not be in the output, original response object. This is available for subsequent serializers to use.
   */
  raw: ServerResponse;
}

/**
 * Serializes a Response object.
 */
export function res(res: ServerResponse): SerializedResponse;

/**
 * Used internally by Pino for general response logging.
 */
export function mapHttpResponse(res: ServerResponse): {
  res: SerializedResponse
};

export type CustomErrorSerializer = (err: SerializedError) => Record<string, any>;

/**
 * A utility method for wrapping the default error serializer.
 * This allows custom serializers to work with the already serialized object.
 * The customSerializer accepts one parameter — the newly serialized error object — and returns the new (or updated) error object.
 */
export function wrapErrorSerializer(customSerializer: CustomErrorSerializer): (err: Error) => Record<string, any>;

export type CustomRequestSerializer = (req: SerializedRequest) => Record<string, any>;

/**
 * A utility method for wrapping the default request serializer.
 * This allows custom serializers to work with the already serialized object.
 * The customSerializer accepts one parameter — the newly serialized request object — and returns the new (or updated) request object.
 */
export function wrapRequestSerializer(customSerializer: CustomRequestSerializer): (req: IncomingMessage) => Record<string, any>;

export type CustomResponseSerializer = (res: SerializedResponse) => Record<string, any>;

/**
 * A utility method for wrapping the default response serializer.
 * This allows custom serializers to work with the already serialized object.
 * The customSerializer accepts one parameter — the newly serialized response object — and returns the new (or updated) response object.
 */
export function wrapResponseSerializer(customSerializer: CustomResponseSerializer): (res: ServerResponse) => Record<string, any>;
