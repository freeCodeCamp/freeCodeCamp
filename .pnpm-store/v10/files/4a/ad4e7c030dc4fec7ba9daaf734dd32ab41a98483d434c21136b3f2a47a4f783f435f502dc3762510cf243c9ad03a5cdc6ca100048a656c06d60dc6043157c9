"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var sse_exports = {};
__export(sse_exports, {
  sse: () => sse
});
module.exports = __toCommonJS(sse_exports);
var import_outvariant = require("outvariant");
var import_deferred_promise = require("@open-draft/deferred-promise");
var import_strict_event_emitter = require("strict-event-emitter");
var import_HttpHandler = require("./handlers/HttpHandler");
var import_delay = require("./delay");
var import_getTimestamp = require("./utils/logging/getTimestamp");
var import_devUtils = require("./utils/internal/devUtils");
var import_attachWebSocketLogger = require("./ws/utils/attachWebSocketLogger");
var import_toPublicUrl = require("./utils/request/toPublicUrl");
const sse = (path, resolver) => {
  return new ServerSentEventHandler(path, resolver);
};
const SSE_RESPONSE_INIT = {
  headers: {
    "content-type": "text/event-stream",
    "cache-control": "no-cache",
    connection: "keep-alive"
  }
};
class ServerSentEventHandler extends import_HttpHandler.HttpHandler {
  #emitter;
  constructor(path, resolver) {
    (0, import_outvariant.invariant)(
      typeof EventSource !== "undefined",
      'Failed to construct a Server-Sent Event handler for path "%s": the EventSource API is not supported in this environment',
      path
    );
    super("GET", path, async (info) => {
      const { client, server, response } = createEventStream(
        info.request
      );
      client[kClientEmitter] = this.#emitter;
      await resolver({
        ...info,
        client,
        server
      });
      return response;
    });
    this.#emitter = new import_strict_event_emitter.Emitter();
  }
  async predicate(args) {
    if (args.request.headers.get("accept") !== "text/event-stream") {
      return false;
    }
    const matches = await super.predicate(args);
    if (matches && !args.resolutionContext?.quiet) {
      await super.log({
        request: args.request,
        /**
         * @note Construct a placeholder response since SSE response
         * is being streamed and cannot be cloned/consumed for logging.
         */
        response: new Response("[streaming]", SSE_RESPONSE_INIT)
      });
      this.#attachClientLogger(args.request, this.#emitter);
    }
    return matches;
  }
  async log(_args) {
    return;
  }
  #attachClientLogger(request, emitter) {
    const publicUrl = (0, import_toPublicUrl.toPublicUrl)(request.url);
    emitter.on("message", (payload) => {
      console.groupCollapsed(
        import_devUtils.devUtils.formatMessage(
          `${(0, import_getTimestamp.getTimestamp)()} SSE %s %c\u21E3%c ${payload.event}`
        ),
        publicUrl,
        `color:${import_attachWebSocketLogger.colors.mocked}`,
        "color:inherit"
      );
      console.log(payload.frames);
      console.groupEnd();
    });
    emitter.on("error", () => {
      console.groupCollapsed(
        import_devUtils.devUtils.formatMessage(`${(0, import_getTimestamp.getTimestamp)()} SSE %s %c\xD7%c error`),
        publicUrl,
        `color: ${import_attachWebSocketLogger.colors.system}`,
        "color:inherit"
      );
      console.log("Handler:", this);
      console.groupEnd();
    });
    emitter.on("close", () => {
      console.groupCollapsed(
        import_devUtils.devUtils.formatMessage(`${(0, import_getTimestamp.getTimestamp)()} SSE %s %c\u25A0%c close`),
        publicUrl,
        `colors:${import_attachWebSocketLogger.colors.system}`,
        "color:inherit"
      );
      console.log("Handler:", this);
      console.groupEnd();
    });
  }
}
const kClientEmitter = Symbol.for("kClientEmitter");
class ServerSentEventClient {
  [kClientEmitter];
  #encoder;
  #writer;
  constructor(writable) {
    this.#encoder = new TextEncoder();
    this.#writer = writable.getWriter();
  }
  /**
   * Sends the given payload to the intercepted `EventSource`.
   */
  send(payload) {
    if ("retry" in payload && payload.retry != null) {
      this.#sendRetry(payload.retry);
      return;
    }
    this.#sendMessage({
      id: payload.id,
      event: payload.event,
      data: typeof payload.data === "object" ? JSON.stringify(payload.data) : payload.data
    });
  }
  /**
   * Dispatches the given event on the intercepted `EventSource`.
   */
  dispatchEvent(event) {
    if (event instanceof MessageEvent) {
      this.#sendMessage({
        id: event.lastEventId || void 0,
        event: event.type === "message" ? void 0 : event.type,
        data: event.data
      });
      return;
    }
    if (event.type === "error") {
      this.error();
      return;
    }
    if (event.type === "close") {
      this.close();
      return;
    }
  }
  /**
   * Errors the underlying `EventSource`, closing the connection with an error.
   * This is equivalent to aborting the connection and will produce a `TypeError: Failed to fetch`
   * error.
   */
  error() {
    this.#writer.abort().catch((error) => {
      console.error(error);
      import_devUtils.devUtils.error(
        "Failed to abort server-side EventSource. Please see the original error above."
      );
    });
    this[kClientEmitter]?.emit("error");
  }
  /**
   * Closes the underlying `EventSource`, closing the connection.
   */
  close() {
    this.#writer.close().catch((error) => {
      console.error(error);
      import_devUtils.devUtils.error(
        "Failed to close server-side EventSource. Please see the original error above."
      );
    });
    this[kClientEmitter]?.emit("close");
  }
  #sendRetry(retry) {
    this.#writer.write(this.#encoder.encode(`retry:${retry}

`)).catch((error) => {
      console.error(error);
      import_devUtils.devUtils.error(
        "Failed to send a retry packet to server-side EventSource. Please see the original error above."
      );
    });
  }
  #sendMessage(message) {
    const frames = [];
    if (message.id) {
      frames.push(`id:${message.id}`);
    }
    if (message.event) {
      frames.push(`event:${message.event.toString()}`);
    }
    if (message.data != null) {
      for (const line of message.data.toString().split(/\r\n|\r|\n/)) {
        frames.push(`data:${line}`);
      }
    }
    frames.push("", "");
    this.#writer.write(this.#encoder.encode(frames.join("\n"))).catch((error) => {
      console.error(error);
      import_devUtils.devUtils.error(
        "Failed to send a message to server-side EventSource. Please see the original error above."
      );
    });
    this[kClientEmitter]?.emit("message", {
      id: message.id,
      event: message.event?.toString() || "message",
      data: message.data,
      frames
    });
  }
}
class ServerSentEventServer {
  #request;
  #client;
  constructor(args) {
    this.#request = args.request;
    this.#client = args.client;
  }
  /**
   * Establishes the actual connection for this SSE request
   * and returns the `EventSource` instance.
   */
  connect() {
    const source = new ObservableEventSource(this.#request.url, {
      withCredentials: this.#request.credentials === "include",
      headers: {
        /**
         * @note Mark this request as passthrough so it doesn't trigger
         * an infinite loop matching against the existing request handler.
         */
        accept: "msw/passthrough"
      },
      signal: this.#request.signal
    });
    source[kOnAnyMessage] = (event) => {
      Object.defineProperties(event, {
        target: {
          value: this,
          enumerable: true,
          writable: true,
          configurable: true
        }
      });
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          this.#client.dispatchEvent(event);
        }
      });
    };
    source.addEventListener("error", (event) => {
      Object.defineProperties(event, {
        target: {
          value: this,
          enumerable: true,
          writable: true,
          configurable: true
        }
      });
      queueMicrotask(() => {
        if (!event.defaultPrevented) {
          this.#client.dispatchEvent(event);
        }
      });
    });
    return source;
  }
}
const kRequest = Symbol("kRequest");
const kReconnectionTime = Symbol("kReconnectionTime");
const kLastEventId = Symbol("kLastEventId");
const kAbortController = Symbol("kAbortController");
const kOnOpen = Symbol("kOnOpen");
const kOnMessage = Symbol("kOnMessage");
const kOnAnyMessage = Symbol("kOnAnyMessage");
const kOnError = Symbol("kOnError");
class ObservableEventSource extends EventTarget {
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSED = 2;
  CONNECTING = ObservableEventSource.CONNECTING;
  OPEN = ObservableEventSource.OPEN;
  CLOSED = ObservableEventSource.CLOSED;
  readyState;
  url;
  withCredentials;
  [kRequest];
  [kReconnectionTime];
  [kLastEventId];
  [kAbortController];
  [kOnOpen] = null;
  [kOnMessage] = null;
  [kOnAnyMessage] = null;
  [kOnError] = null;
  constructor(url, init) {
    super();
    this.url = new URL(url).href;
    this.withCredentials = init?.withCredentials ?? false;
    this.readyState = this.CONNECTING;
    const headers = new Headers(init?.headers || {});
    headers.append("accept", "text/event-stream");
    this[kAbortController] = new AbortController();
    this[kReconnectionTime] = 2e3;
    this[kLastEventId] = "";
    this[kRequest] = new Request(this.url, {
      method: "GET",
      headers,
      credentials: this.withCredentials ? "include" : "omit",
      signal: this[kAbortController].signal
    });
    if (init?.signal) {
      if (init.signal.aborted) {
        this.close();
        return;
      }
      init.signal.addEventListener("abort", () => this.close(), {
        once: true,
        signal: this[kAbortController].signal
      });
    }
    this.connect();
  }
  get onopen() {
    return this[kOnOpen];
  }
  set onopen(handler) {
    if (this[kOnOpen]) {
      this.removeEventListener("open", this[kOnOpen]);
    }
    this[kOnOpen] = handler.bind(this);
    this.addEventListener("open", this[kOnOpen]);
  }
  get onmessage() {
    return this[kOnMessage];
  }
  set onmessage(handler) {
    if (this[kOnMessage]) {
      this.removeEventListener("message", { handleEvent: this[kOnMessage] });
    }
    this[kOnMessage] = handler.bind(this);
    this.addEventListener("message", { handleEvent: this[kOnMessage] });
  }
  get onerror() {
    return this[kOnError];
  }
  set onerror(handler) {
    if (this[kOnError]) {
      this.removeEventListener("error", { handleEvent: this[kOnError] });
    }
    this[kOnError] = handler.bind(this);
    this.addEventListener("error", { handleEvent: this[kOnError] });
  }
  addEventListener(type, listener, options) {
    super.addEventListener(
      type,
      listener,
      options
    );
  }
  removeEventListener(type, listener, options) {
    super.removeEventListener(
      type,
      listener,
      options
    );
  }
  dispatchEvent(event) {
    return super.dispatchEvent(event);
  }
  close() {
    this[kAbortController].abort();
    this.readyState = this.CLOSED;
  }
  async connect() {
    await fetch(this[kRequest]).then((response) => {
      this.processResponse(response);
    }).catch(() => {
      this.failConnection();
    });
  }
  processResponse(response) {
    if (!response.body) {
      this.failConnection();
      return;
    }
    if (isNetworkError(response)) {
      this.reestablishConnection();
      return;
    }
    if (response.status !== 200 || response.headers.get("content-type") !== "text/event-stream") {
      this.failConnection();
      return;
    }
    this.announceConnection();
    this.interpretResponseBody(response);
  }
  announceConnection() {
    queueMicrotask(() => {
      if (this.readyState !== this.CLOSED) {
        this.readyState = this.OPEN;
        this.dispatchEvent(new Event("open"));
      }
    });
  }
  interpretResponseBody(response) {
    const parsingStream = new EventSourceParsingStream({
      message: (message) => {
        if (message.id) {
          this[kLastEventId] = message.id;
        }
        const messageEvent = new MessageEvent(
          message.event ? message.event : "message",
          {
            data: message.data,
            origin: this[kRequest].url,
            lastEventId: this[kLastEventId],
            cancelable: true
          }
        );
        this[kOnAnyMessage]?.(messageEvent);
        this.dispatchEvent(messageEvent);
      },
      retry: (reconnectionTime) => {
        this[kReconnectionTime] = reconnectionTime;
      },
      abort: () => {
        throw new Error("Stream abort is not implemented");
      },
      close: () => {
        this.failConnection();
      }
    });
    response.body.pipeTo(parsingStream).then(() => {
      this.processResponseEndOfBody(response);
    }).catch(() => {
      this.failConnection();
    });
  }
  processResponseEndOfBody(response) {
    if (!isNetworkError(response)) {
      this.reestablishConnection();
    }
  }
  async reestablishConnection() {
    queueMicrotask(() => {
      if (this.readyState === this.CLOSED) {
        return;
      }
      this.readyState = this.CONNECTING;
      this.dispatchEvent(new Event("error"));
    });
    const signal = this[kAbortController].signal;
    if (signal.aborted) {
      return;
    }
    const aborted = new import_deferred_promise.DeferredPromise();
    const onAbort = () => aborted.resolve();
    signal.addEventListener("abort", onAbort, { once: true });
    await Promise.race([(0, import_delay.delay)(this[kReconnectionTime]), aborted]).finally(
      () => {
        signal.removeEventListener("abort", onAbort);
      }
    );
    if (signal.aborted) {
      return;
    }
    queueMicrotask(async () => {
      if (this.readyState !== this.CONNECTING) {
        return;
      }
      if (this[kLastEventId] !== "") {
        this[kRequest].headers.set("last-event-id", this[kLastEventId]);
      }
      await this.connect();
    });
  }
  failConnection() {
    queueMicrotask(() => {
      if (this.readyState !== this.CLOSED) {
        this.readyState = this.CLOSED;
        this.dispatchEvent(new Event("error"));
      }
    });
  }
}
function isNetworkError(response) {
  return response.type === "error" && response.status === 0 && response.statusText === "" && Array.from(response.headers.entries()).length === 0 && response.body === null;
}
var ControlCharacters = /* @__PURE__ */ ((ControlCharacters2) => {
  ControlCharacters2[ControlCharacters2["NewLine"] = 10] = "NewLine";
  ControlCharacters2[ControlCharacters2["CarriageReturn"] = 13] = "CarriageReturn";
  ControlCharacters2[ControlCharacters2["Space"] = 32] = "Space";
  ControlCharacters2[ControlCharacters2["Colon"] = 58] = "Colon";
  return ControlCharacters2;
})(ControlCharacters || {});
class EventSourceParsingStream extends WritableStream {
  constructor(underlyingSink) {
    super({
      write: (chunk) => {
        this.processResponseBodyChunk(chunk);
      },
      abort: (reason) => {
        this.underlyingSink.abort?.(reason);
      },
      close: () => {
        this.underlyingSink.close?.();
      }
    });
    this.underlyingSink = underlyingSink;
    this.decoder = new TextDecoder();
    this.position = 0;
  }
  decoder;
  buffer;
  position;
  fieldLength;
  discardTrailingNewline = false;
  message = {
    id: void 0,
    event: void 0,
    data: void 0
  };
  resetMessage() {
    this.message = {
      id: void 0,
      event: void 0,
      data: void 0
    };
  }
  processResponseBodyChunk(chunk) {
    if (this.buffer == null) {
      this.buffer = chunk;
      this.position = 0;
      this.fieldLength = -1;
    } else {
      const nextBuffer = new Uint8Array(this.buffer.length + chunk.length);
      nextBuffer.set(this.buffer);
      nextBuffer.set(chunk, this.buffer.length);
      this.buffer = nextBuffer;
    }
    const bufferLength = this.buffer.length;
    let lineStart = 0;
    while (this.position < bufferLength) {
      if (this.discardTrailingNewline) {
        if (this.buffer[this.position] === 10 /* NewLine */) {
          lineStart = ++this.position;
        }
        this.discardTrailingNewline = false;
      }
      let lineEnd = -1;
      for (; this.position < bufferLength && lineEnd === -1; ++this.position) {
        switch (this.buffer[this.position]) {
          case 58 /* Colon */: {
            if (this.fieldLength === -1) {
              this.fieldLength = this.position - lineStart;
            }
            break;
          }
          case 13 /* CarriageReturn */: {
            this.discardTrailingNewline = true;
            break;
          }
          case 10 /* NewLine */: {
            lineEnd = this.position;
            break;
          }
        }
      }
      if (lineEnd === -1) {
        break;
      }
      this.processLine(
        this.buffer.subarray(lineStart, lineEnd),
        this.fieldLength
      );
      lineStart = this.position;
      this.fieldLength = -1;
    }
    if (lineStart === bufferLength) {
      this.buffer = void 0;
    } else if (lineStart !== 0) {
      this.buffer = this.buffer.subarray(lineStart);
      this.position -= lineStart;
    }
  }
  processLine(line, fieldLength) {
    if (line.length === 0) {
      if (this.message.data === void 0) {
        this.message.event = void 0;
        return;
      }
      this.underlyingSink.message(this.message);
      this.resetMessage();
      return;
    }
    if (fieldLength > 0) {
      const field = this.decoder.decode(line.subarray(0, fieldLength));
      const valueOffset = fieldLength + (line[fieldLength + 1] === 32 /* Space */ ? 2 : 1);
      const value = this.decoder.decode(line.subarray(valueOffset));
      switch (field) {
        case "data": {
          this.message.data = this.message.data ? this.message.data + "\n" + value : value;
          break;
        }
        case "event": {
          this.message.event = value;
          break;
        }
        case "id": {
          this.message.id = value;
          break;
        }
        case "retry": {
          if (/^\d+$/.test(value)) {
            this.underlyingSink.retry?.(parseInt(value, 10));
          }
          break;
        }
      }
    }
  }
}
function createEventStream(request) {
  (0, import_outvariant.invariant)(
    !request.signal.aborted,
    'Failed to call "createEventStream" on the "%s %s" request: request aborted',
    request.method,
    request.url
  );
  const { readable, writable } = new TransformStream();
  const client = new ServerSentEventClient(writable);
  const server = new ServerSentEventServer({
    request,
    client
  });
  const response = new Response(readable, SSE_RESPONSE_INIT);
  request.signal.addEventListener(
    "abort",
    () => {
      client.close();
    },
    { once: true }
  );
  return {
    client,
    server,
    response
  };
}
//# sourceMappingURL=sse.js.map