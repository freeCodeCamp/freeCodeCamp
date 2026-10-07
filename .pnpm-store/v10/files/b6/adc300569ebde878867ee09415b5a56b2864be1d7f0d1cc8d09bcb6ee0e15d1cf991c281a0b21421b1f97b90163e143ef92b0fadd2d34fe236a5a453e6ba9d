import { checkGlobals } from './utils/internal/checkGlobals'

export { SetupApi } from './experimental/setup-api'

/* HTTP handlers */
export { RequestHandler } from './handlers/RequestHandler'
export { http } from './http'
export { HttpHandler, HttpMethods } from './handlers/HttpHandler'
export { graphql } from './graphql'
export { GraphQLHandler } from './handlers/GraphQLHandler'

/* WebSocket handler */
export { ws, type WebSocketLink } from './ws'
export {
  WebSocketHandler,
  type WebSocketHandlerEventMap,
  type WebSocketHandlerConnection,
} from './handlers/WebSocketHandler'

/* Server-Sent Events */
export {
  sse,
  type ServerSentEventRequestHandler,
  type ServerSentEventResolver,
  type ServerSentEventResolverExtras,
  type ServerSentEventMessage,
} from './sse'

/* Utils */
export { matchRequestUrl } from './utils/matching/matchRequestUrl'
export { handleRequest, type HandleRequestOptions } from './utils/handleRequest'
export {
  onUnhandledRequest,
  type UnhandledRequestStrategy,
  type UnhandledRequestCallback,
} from './utils/request/onUnhandledRequest'
export { getResponse } from './getResponse'
export { cleanUrl } from './utils/url/cleanUrl'

/**
 * Type definitions.
 */

export type { AnyHandler } from './experimental/handlers-controller'

export type { SharedOptions, LifeCycleEventsMap } from './sharedOptions'

export type {
  ResponseResolver,
  ResponseResolverReturnType,
  AsyncResponseResolverReturnType,
  RequestHandlerOptions,
  DefaultBodyType,
  DefaultRequestMultipartBody,
  JsonBodyType,
  ResponseResolverInfo,
} from './handlers/RequestHandler'

export type {
  RequestQuery,
  HttpRequestParsedResult,
  HttpHandlerInfo,
  HttpRequestResolverExtras,
  HttpHandlerMethod,
  HttpCustomPredicate,
} from './handlers/HttpHandler'
export type { HttpRequestHandler, HttpResponseResolver } from './http'

export type {
  GraphQLQuery,
  GraphQLVariables,
  GraphQLRequestBody,
  GraphQLResponseBody,
  GraphQLJsonRequestBody,
  GraphQLOperationType,
  GraphQLCustomPredicate,
} from './handlers/GraphQLHandler'
export type {
  GraphQLRequestHandler,
  GraphQLOperationHandler,
  GraphQLResponseResolver,
  GraphQLLinkHandlers,
} from './graphql'

export type { WebSocketData, WebSocketEventListener } from './ws'

export type { Path, PathParams, Match } from './utils/matching/matchRequestUrl'
export type { ParsedGraphQLRequest } from './utils/internal/parseGraphQLRequest'
export type { ResponseResolutionContext } from './utils/executeHandlers'

export {
  HttpResponse,
  type HttpResponseInit,
  type StrictRequest,
  type StrictResponse,
} from './HttpResponse'
export { delay, type DelayMode } from './delay'
export { bypass } from './bypass'
export { passthrough } from './passthrough'
export { isCommonAssetRequest } from './isCommonAssetRequest'

// Validate environmental globals before executing any code.
// This ensures that the library gives user-friendly errors
// when ran in the environments that require additional polyfills
// from the end user.
checkGlobals()
