"use strict";

const nodeURL = require("url");

const DOMException = require("domexception");
const { parseURL, serializeURL, serializeURLOrigin } = require("whatwg-url");
const WebSocket = require("ws");

const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");

const EventTargetImpl = require("../events/EventTarget-impl").implementation;

const idlUtils = require("../generated/utils");
const Blob = require("../generated/Blob");
const CloseEvent = require("../generated/CloseEvent");
const Event = require("../generated/Event");
const MessageEvent = require("../generated/MessageEvent");

const CONNECTING = 0;
const OPEN = 1;
const CLOSING = 2;
const CLOSED = 3;

const productions = {
  // https://tools.ietf.org/html/rfc7230#section-3.2.6
  token: /^[!#$%&'*+\-.^_`|~\dA-Za-z]+$/
};

const readyStateWSToDOM = [];
readyStateWSToDOM[WebSocket.CONNECTING] = CONNECTING;
readyStateWSToDOM[WebSocket.OPEN] = OPEN;
readyStateWSToDOM[WebSocket.CLOSING] = CLOSING;
readyStateWSToDOM[WebSocket.CLOSED] = CLOSED;

// https://tools.ietf.org/html/rfc6455#section-4.3
// See Sec-WebSocket-Protocol-Client, which is for the syntax of an entire header value. This function checks if a
// single header conforms to the rules.
function verifySecWebSocketProtocol(str) {
  return productions.token.test(str);
}

class PromiseQueues extends WeakMap {
  get(window) {
    const cur = super.get(window);
    return cur !== undefined ? cur : Promise.resolve();
  }
}

const openSockets = new WeakMap();
const openingQueues = new PromiseQueues();

class WebSocketImpl extends EventTargetImpl {
  constructor(constructorArgs, privateData) {
    super([], privateData);
    const { window } = privateData;
    this._ownerDocument = idlUtils.implForWrapper(window._document);

    const url = constructorArgs[0];
    let protocols = constructorArgs[1] !== undefined ? constructorArgs[1] : [];

    const urlRecord = parseURL(url);
    if (urlRecord === null) {
      throw new DOMException(`The URL '${url}' is invalid.`, "SyntaxError");
    }
    if (urlRecord.scheme !== "ws" && urlRecord.scheme !== "wss") {
      throw new DOMException(
        `The URL's scheme must be either 'ws' or 'wss'. '${urlRecord.scheme}' is not allowed.`,
        "SyntaxError"
      );
    }
    if (urlRecord.fragment !== null) {
      throw new DOMException(`The URL contains a fragment identifier ('${urlRecord.fragment}'). Fragment identifiers ` +
                             "are not allowed in WebSocket URLs.", "SyntaxError");
    }

    if (typeof protocols === "string") {
      protocols = [protocols];
    }
    const protocolSet = new Set();
    for (const protocol of protocols) {
      if (!verifySecWebSocketProtocol(protocol)) {
        throw new DOMException(`The subprotocol '${protocol}' is invalid.`, "SyntaxError");
      }
      const lowered = protocol.toLowerCase();
      if (protocolSet.has(lowered)) {
        throw new DOMException(`The subprotocol '${protocol}' is duplicated.`, "SyntaxError");
      }
      protocolSet.add(lowered);
    }

    this._urlRecord = urlRecord;
    this.url = serializeURL(urlRecord);
    const nodeParsedURL = nodeURL.parse(this.url);
    this.extensions = "";

    this.binaryType = "blob";

    this._ws = null;
    // Used when this._ws has not been initialized yet.
    this._readyState = CONNECTING;
    this._requiredToFail = false;
    this.bufferedAmount = 0;
    this._sendQueue = [];

    let openSocketsForWindow = openSockets.get(window._globalProxy);
    if (openSocketsForWindow === undefined) {
      openSocketsForWindow = new Set();
      openSockets.set(window._globalProxy, openSocketsForWindow);
    }
    openSocketsForWindow.add(this);

    openingQueues.set(this._ownerDocument, openingQueues.get(this._ownerDocument).then(() => new Promise(resolve => {
      // close() called before _ws has been initialized.
      if (this._requiredToFail) {
        resolve();
        this._readyState = CLOSED;
        this._onConnectionClosed(1006, "");
        return;
      }

      this._ws = new WebSocket(this.url, protocols, {
        headers: {
          "user-agent": window.navigator.userAgent,
          cookie: this._ownerDocument._cookieJar.getCookieStringSync(nodeParsedURL, { http: true }),
          origin: this._ownerDocument.origin
        },
        rejectUnauthorized: this._ownerDocument._strictSSL
      });
      this._ws.once("open", () => {
        resolve();
        this._onConnectionEstablished();
      });
      this._ws.on("message", this._onMessageReceived.bind(this));
      this._ws.once("close", (...args) => {
        resolve();
        this._onConnectionClosed(...args);
      });
      this._ws.once("upgrade", ({ headers }) => {
        if (Array.isArray(headers["set-cookie"])) {
          for (const cookie of headers["set-cookie"]) {
            this._ownerDocument._cookieJar.setCookieSync(cookie, nodeParsedURL, { http: true, ignoreError: true });
          }
        } else if (headers["set-cookie"] !== undefined) {
          this._ownerDocument._cookieJar.setCookieSync(
            headers["set-cookie"], nodeParsedURL,
            { http: true, ignoreError: true }
          );
        }
      });
      this._ws.on("error", () => {
        // The exact error is passed into this callback, but it is ignored as we don't really care about it.
        resolve();
        this._requiredToFail = true;
        // Do not emit an error here, as that will be handled in _onConnectionClosed. ws always emits a close event
        // after errors.
      });
    })));
  }

  // https://html.spec.whatwg.org/multipage/web-sockets.html#make-disappear
  _makeDisappear() {
    this._eventListeners = Object.create(null);
    this._close(1001);
  }

  static cleanUpWindow(window) {
    const openSocketsForWindow = openSockets.get(window._globalProxy);
    if (openSocketsForWindow !== undefined) {
      for (const ws of openSocketsForWindow) {
        ws._makeDisappear();
      }
    }
  }

  // https://html.spec.whatwg.org/multipage/web-sockets.html#feedback-from-the-protocol
  _onConnectionEstablished() {
    // readyState is a getter.
    if (this._ws.extensions !== null) {
      // Right now, ws only supports one extension, permessage-deflate, without any parameters. This algorithm may need
      // to be more sophiscated as more extenions are supported.
      this.extensions = Object.keys(this._ws.extensions).join(", ");
    }
    // protocol is a getter.
    this._dispatch(Event.createImpl(["open"], { isTrusted: true }));
  }

  _onMessageReceived(data) {
    if (this.readyState !== OPEN) {
      return;
    }
    let dataForEvent;
    if (typeof data === "string") {
      dataForEvent = data;
    } else if (this.binaryType === "arraybuffer") {
      if (data instanceof ArrayBuffer) {
        dataForEvent = data;
      } else if (Array.isArray(data)) {
        dataForEvent = new Uint8Array(Buffer.concat(data)).buffer;
      } else {
        dataForEvent = new Uint8Array(data).buffer;
      }
    } else { // this.binaryType === "blob"
      if (!Array.isArray(data)) {
        data = [data];
      }
      dataForEvent = Blob.create([data, { type: "" }]);
    }
    this._dispatch(MessageEvent.createImpl([
      "message", {
        data: dataForEvent,
        origin: serializeURLOrigin(this._urlRecord)
      }
    ], { isTrusted: true }));
  }

  _onConnectionClosed(code, reason) {
    const openSocketsForWindow = openSockets.get(this._ownerDocument._defaultView);
    openSocketsForWindow.delete(this);

    const wasClean = !this._requiredToFail;
    if (this._requiredToFail) {
      this._dispatch(Event.createImpl(["error"], { isTrusted: true }));
    }
    this._dispatch(CloseEvent.createImpl([
      "close", {
        wasClean,
        code,
        reason
      }
    ], { isTrusted: true }));
  }

  get readyState() {
    if (this._ws !== null) {
      return readyStateWSToDOM[this._ws.readyState];
    }
    return this._readyState;
  }

  get protocol() {
    if (this._ws === null) {
      return "";
    }
    return this._ws.protocol;
  }

  close(code = undefined, reason = undefined) {
    if (code !== undefined && code !== 1000 && !(code >= 3000 && code <= 4999)) {
      throw new DOMException(
        `The code must be either 1000, or between 3000 and 4999. ${code} is neither.`,
        "InvalidAccessError"
      );
    }
    if (reason !== undefined && Buffer.byteLength(reason, "utf8") > 123) {
      throw new DOMException("The message must not be greater than 123 bytes.", "SyntaxError");
    }
    this._close(code, reason);
  }

  _close(code = undefined, reason = undefined) {
    if (this.readyState === CONNECTING) {
      this._requiredToFail = true;
      if (this._ws !== null) {
        this._ws.terminate();
      } else {
        this._readyState = CLOSING;
      }
    } else if (this.readyState === OPEN) {
      this._ws.close(code, reason);
    }
  }

  send(data) {
    if (this.readyState === CONNECTING) {
      throw new DOMException("Still in CONNECTING state.", "InvalidStateError");
    }
    if (this.readyState !== OPEN) {
      return;
    }
    if (Blob.isImpl(data)) {
      data = data._buffer;
    }
    let length;
    if (typeof data === "string") {
      length = Buffer.byteLength(data, "utf8");
    } else {
      length = data.byteLength;
    }
    this.bufferedAmount += length;
    this._sendQueue.push([data, length]);
    this._scheduleSend();
  }

  _actuallySend() {
    for (const [data, length] of this._sendQueue.splice(0)) {
      this._ws.send(data, { binary: typeof data !== "string" }, () => {
        this.bufferedAmount -= length;
      });
    }
  }

  _scheduleSend() {
    if (this._dequeueScheduled) {
      return;
    }
    this._dequeueScheduled = true;
    process.nextTick(() => {
      this._dequeueScheduled = false;
      this._actuallySend();
    });
  }
}

setupForSimpleEventAccessors(WebSocketImpl.prototype, ["open", "message", "error", "close"]);

exports.implementation = WebSocketImpl;
