import { Emitter } from "strict-event-emitter";
import { createRequestId, resolveWebSocketUrl } from "@mswjs/interceptors";
import {
  matchRequestUrl
} from '../utils/matching/matchRequestUrl.mjs';
import { getCallFrame } from '../utils/internal/getCallFrame.mjs';
import { attachWebSocketLogger } from '../ws/utils/attachWebSocketLogger.mjs';
const kEmitter = Symbol("kEmitter");
const kSender = Symbol("kSender");
const kConnect = Symbol("kConnect");
const kAutoConnect = Symbol("kAutoConnect");
const kStopPropagationPatched = Symbol("kStopPropagationPatched");
const KOnStopPropagation = Symbol("KOnStopPropagation");
class WebSocketHandler {
  constructor(url) {
    this.url = url;
    this.id = createRequestId();
    this[kEmitter] = new Emitter();
    this.callFrame = getCallFrame(new Error());
  }
  id;
  callFrame;
  kind = "websocket";
  [kEmitter];
  parse(args) {
    const clientUrl = new URL(args.url);
    const resolvedHandlerUrl = this.url instanceof RegExp || this.url.startsWith("*") ? this.url : this.#resolveWebSocketUrl(this.url, args.resolutionContext?.baseUrl);
    clientUrl.pathname = clientUrl.pathname.replace(/^\/socket.io\//, "/");
    const match = matchRequestUrl(
      clientUrl,
      resolvedHandlerUrl,
      args.resolutionContext?.baseUrl
    );
    return {
      match
    };
  }
  predicate(args) {
    return args.parsedResult.match.matches;
  }
  test(url, resolutionContext) {
    return this.#match(url, resolutionContext) != null;
  }
  async run(connection, resolutionContext) {
    const parsedResult = this.#match(connection.client.url, resolutionContext);
    if (parsedResult == null) {
      return null;
    }
    const resolvedConnection = {
      ...connection,
      params: parsedResult.match.params || {}
    };
    if (resolutionContext?.[kAutoConnect] ?? true) {
      if (this[kConnect](resolvedConnection)) {
        return resolvedConnection;
      }
      return null;
    }
    return resolvedConnection;
  }
  #match(url, resolutionContext) {
    const resolvedUrl = this.#resolveWebSocketUrl(
      url.toString(),
      resolutionContext?.baseUrl
    );
    const parsedResult = this.parse({
      url: resolvedUrl,
      resolutionContext
    });
    if (this.predicate({
      url,
      parsedResult
    })) {
      return parsedResult;
    }
    return null;
  }
  [kConnect](connection) {
    connection.client.addEventListener(
      "message",
      createStopPropagationListener(this)
    );
    connection.client.addEventListener(
      "close",
      createStopPropagationListener(this)
    );
    connection.server.addEventListener(
      "open",
      createStopPropagationListener(this)
    );
    connection.server.addEventListener(
      "message",
      createStopPropagationListener(this)
    );
    connection.server.addEventListener(
      "error",
      createStopPropagationListener(this)
    );
    connection.server.addEventListener(
      "close",
      createStopPropagationListener(this)
    );
    return this[kEmitter].emit("connection", connection);
  }
  log(connection) {
    return attachWebSocketLogger(connection);
  }
  #resolveWebSocketUrl(url, baseUrl) {
    const resolvedUrl = resolveWebSocketUrl(
      baseUrl ? (
        /**
         * @note Resolve against the base URL preemtively because `resolveWebSocketUrl` only
         * resolves against `location.href`, which is missing in Node.js. Base URL allows
         * the handler to accept a relative URL in Node.js.
         */
        new URL(url, baseUrl)
      ) : url
    );
    return resolvedUrl.replace(/\/$/, "");
  }
}
function createStopPropagationListener(handler) {
  return function stopPropagationListener(event) {
    const propagationStoppedAt = Reflect.get(event, "kPropagationStoppedAt");
    if (propagationStoppedAt && handler.id !== propagationStoppedAt) {
      event.stopImmediatePropagation();
      return;
    }
    Object.defineProperty(event, KOnStopPropagation, {
      value() {
        Object.defineProperty(event, "kPropagationStoppedAt", {
          value: handler.id
        });
      },
      configurable: true
    });
    if (!Reflect.get(event, kStopPropagationPatched)) {
      event.stopPropagation = new Proxy(event.stopPropagation, {
        apply: (target, thisArg, args) => {
          Reflect.get(event, KOnStopPropagation)?.call(handler);
          return Reflect.apply(target, thisArg, args);
        }
      });
      Object.defineProperty(event, kStopPropagationPatched, {
        value: true,
        // If something else attempts to redefine this, throw.
        configurable: false
      });
    }
  };
}
export {
  WebSocketHandler,
  kAutoConnect,
  kConnect,
  kEmitter,
  kSender
};
//# sourceMappingURL=WebSocketHandler.mjs.map