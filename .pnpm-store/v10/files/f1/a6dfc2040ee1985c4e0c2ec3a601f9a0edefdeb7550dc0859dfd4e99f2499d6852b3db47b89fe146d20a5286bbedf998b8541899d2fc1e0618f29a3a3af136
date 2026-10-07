import { AnyHandler } from '../../experimental/handlers-controller.mjs';
import { R as RequestHandler } from '../../HttpResponse-CxHR1nNN.mjs';
import { WebSocketHandler } from '../../handlers/WebSocketHandler.mjs';
import '@mswjs/interceptors';
import './isIterable.mjs';
import '../../typeUtils.mjs';
import 'graphql';
import '../matching/matchRequestUrl.mjs';
import 'strict-event-emitter';
import '@mswjs/interceptors/WebSocket';

/**
 * A filter function that ensures that the provided argument
 * is a handler of the given kind. This helps differentiate
 * between different kinds of handlers, e.g. request and event handlers.
 */
declare function isHandlerKind<K extends AnyHandler['kind']>(kind: K): (input: unknown) => input is K extends "websocket" ? WebSocketHandler : RequestHandler;

export { isHandlerKind };
