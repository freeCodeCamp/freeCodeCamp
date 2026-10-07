import { BatchInterceptor } from "@mswjs/interceptors";
import { NetworkSource } from './network-source.mjs';
import { InternalError } from '../../utils/internal/devUtils.mjs';
import { HttpNetworkFrame, ResponseEvent } from '../frames/http-frame.mjs';
import { WebSocketNetworkFrame } from '../frames/websocket-frame.mjs';
import { deleteRequestPassthroughHeader } from '../request-utils.mjs';
class InterceptorSource extends NetworkSource {
  #interceptor;
  #frames;
  constructor(options) {
    super();
    this.#interceptor = new BatchInterceptor({
      name: "interceptor-source",
      interceptors: options.interceptors
    });
    this.#frames = /* @__PURE__ */ new Map();
  }
  enable() {
    this.#interceptor.apply();
    this.#interceptor.on("request", this.#handleRequest.bind(this)).on("response", this.#handleResponse.bind(this)).on("connection", this.#handleWebSocketConnection.bind(this));
  }
  disable() {
    super.disable();
    this.#interceptor.dispose();
    this.#frames.clear();
  }
  async #handleRequest({
    requestId,
    request,
    controller
  }) {
    const httpFrame = new InterceptorHttpNetworkFrame({
      id: requestId,
      request,
      controller
    });
    this.#frames.set(requestId, httpFrame);
    await this.queue(httpFrame);
  }
  async #handleResponse({
    requestId,
    request,
    response,
    isMockedResponse
  }) {
    const httpFrame = this.#frames.get(requestId);
    this.#frames.delete(requestId);
    if (httpFrame == null) {
      return;
    }
    queueMicrotask(() => {
      httpFrame.events.emit(
        new ResponseEvent(
          isMockedResponse ? "response:mocked" : "response:bypass",
          {
            requestId,
            request,
            response
          }
        )
      );
    });
  }
  async #handleWebSocketConnection(connection) {
    await this.queue(
      new InterceptorWebSocketNetworkFrame({
        connection
      })
    );
  }
}
class InterceptorHttpNetworkFrame extends HttpNetworkFrame {
  #controller;
  constructor(options) {
    super({
      id: options.id,
      request: options.request
    });
    this.#controller = options.controller;
  }
  passthrough() {
    deleteRequestPassthroughHeader(this.data.request);
  }
  respondWith(response) {
    if (response) {
      this.#controller.respondWith(response);
    }
  }
  errorWith(reason) {
    if (reason instanceof Response) {
      return this.respondWith(reason);
    }
    if (reason instanceof InternalError) {
      this.#controller.errorWith(reason);
    }
    throw reason;
  }
}
class InterceptorWebSocketNetworkFrame extends WebSocketNetworkFrame {
  constructor(args) {
    super({ connection: args.connection });
  }
  errorWith(reason) {
    if (reason instanceof Error) {
      const { client } = this.data.connection;
      const errorEvent = new Event("error");
      Object.defineProperty(errorEvent, "cause", {
        enumerable: true,
        configurable: false,
        value: reason
      });
      client.socket.dispatchEvent(errorEvent);
    }
  }
  passthrough() {
    this.data.connection.server.connect();
  }
}
export {
  InterceptorSource
};
//# sourceMappingURL=interceptor-source.mjs.map