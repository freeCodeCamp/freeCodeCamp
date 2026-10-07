import { AnyHandler } from '../../experimental/handlers-controller.js';
import { R as RequestHandler } from '../../HttpResponse-aGiIzO91.js';
import { WebSocketHandler } from '../../handlers/WebSocketHandler.js';
import '@mswjs/interceptors';
import './isIterable.js';
import '../../typeUtils.js';
import 'graphql';
import '../matching/matchRequestUrl.js';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

/**
 * A filter function that ensures that the provided argument
 * is a handler of the given kind. This helps differentiate
 * between different kinds of handlers, e.g. request and event handlers.
 */
declare function isHandlerKind<K extends AnyHandler['kind']>(kind: K): (input: unknown) => input is K extends "websocket" ? WebSocketHandler : RequestHandler;

export { isHandlerKind };
