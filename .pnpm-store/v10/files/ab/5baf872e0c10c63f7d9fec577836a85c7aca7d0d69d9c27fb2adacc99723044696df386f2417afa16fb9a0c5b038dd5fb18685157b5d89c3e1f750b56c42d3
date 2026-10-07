import * as http from 'node:http'
import * as http2 from 'node:http2'
import * as https from 'node:https'

type AutocompletePrimitiveBaseType<T> =
  T extends string ? string :
    T extends number ? number :
      T extends boolean ? boolean :
        never

export type Autocomplete<T> = T | (AutocompletePrimitiveBaseType<T> & Record<never, never>)

/**
 * Standard HTTP method strings
 * for internal use
 */
type _HTTPMethods = 'DELETE' | 'GET' | 'HEAD' | 'PATCH' | 'POST' | 'PUT' | 'OPTIONS' |
'PROPFIND' | 'PROPPATCH' | 'MKCOL' | 'COPY' | 'MOVE' | 'LOCK' | 'UNLOCK' | 'TRACE' | 'SEARCH' | 'REPORT' | 'MKCALENDAR'

export type HTTPMethods = Autocomplete<_HTTPMethods | Lowercase<_HTTPMethods>>

/**
 * A union type of the Node.js server types from the http, https, and http2 modules.
 */
export type RawServerBase = http.Server | https.Server | http2.Http2Server | http2.Http2SecureServer

/**
 * The default server type
 */
export type RawServerDefault = http.Server

/**
 * The default request type based on the server type. Utilizes generic constraining.
 */
export type RawRequestDefaultExpression<
  RawServer extends RawServerBase = RawServerDefault
> = RawServer extends http.Server | https.Server ? http.IncomingMessage
  : RawServer extends http2.Http2Server | http2.Http2SecureServer ? http2.Http2ServerRequest
    : never

/**
 * The default reply type based on the server type. Utilizes generic constraining.
 */
export type RawReplyDefaultExpression<
  RawServer extends RawServerBase = RawServerDefault
> = RawServer extends http.Server | https.Server ? http.ServerResponse
  : RawServer extends http2.Http2Server | http2.Http2SecureServer ? http2.Http2ServerResponse
    : never

export type RequestBodyDefault = unknown
export type RequestQuerystringDefault = unknown
export type RequestParamsDefault = unknown
export type RequestHeadersDefault = unknown

export type ContextConfigDefault = unknown
export type ReplyDefault = unknown

/**
 * Helpers for determining the type of the response payload based on the code
 */

type StringAsNumber<T extends string> = T extends `${infer N extends number}` ? N : never
type CodeClasses = 1 | 2 | 3 | 4 | 5
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type HttpCodes = StringAsNumber<`${CodeClasses}${Digit}${Digit}`>
type HttpKeys = HttpCodes | `${Digit}xx`
export type StatusCodeReply = {
  [Key in HttpKeys]?: unknown;
}

// weird TS quirk: https://stackoverflow.com/questions/58977876/generic-conditional-type-resolves-to-never-when-the-generic-type-is-set-to-never
export type ReplyKeysToCodes<Key> = [Key] extends [never] ? number :
  Key extends HttpCodes ? Key :
    Key extends `${infer X extends CodeClasses}xx` ?
      StringAsNumber<`${X}${Digit}${Digit}`> : number

export type CodeToReplyKey<Code extends number> = `${Code}` extends `${infer FirstDigit extends CodeClasses}${number}`
  ? `${FirstDigit}xx`
  : never

export type RecordKeysToLowercase<Input> = Input extends Record<string, unknown>
  ? {
      [Key in keyof Input as Key extends string
        ? Lowercase<Key>
        : Key
      ]: Input[Key];
    }
  : Input

type OmitIndexSignature<T> = {
  [K in keyof T as string extends K ? never : number extends K ? never : K]: T[K];
}

/**
 * HTTP header strings
 * Use this type only for input values, not for output values.
 */
export type HttpHeader = keyof OmitIndexSignature<http.OutgoingHttpHeaders> | (string & Record<never, never>)
