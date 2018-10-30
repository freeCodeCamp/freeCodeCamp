/* eslint-env browser */

"use strict";

const DOMException = require("domexception");
const { parseURL, serializeURL, serializeURLOrigin } = require("whatwg-url");

const { setupForSimpleEventAccessors } = require("../helpers/create-event-accessor");

const EventTargetImpl = require("../events/EventTarget-impl").implementation;

const idlUtils = require("../generated/utils");
const Blob = require("../generated/Blob");
const CloseEvent = require("../generated/CloseEvent");
const Event = require("../generated/Event");
const MessageEvent = require("../generated/MessageEvent");

const productions = {
  // https://tools.ietf.org/html/rfc7230#section-3.2.6
  token: /^[!#$%&'*+\-.^_`|~\dA-Za-z]+$/
};

// https://tools.ietf.org/html/rfc6455#section-4.3
// See Sec-WebSocket-Protocol-Client, which is for the syntax of an entire header value. This function checks if a
// single header conforms to the rules.
function verifySecWebSocketProtocol(str) {
  return productions.token.test(str);
}

const openSockets = new WeakMap();

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

    this._ws = new WebSocket(this.url, protocols);

    this._ws.onopen = () => {
      this._dispatch(Event.createImpl(["open"], { isTrusted: true }));
    };
    this._ws.onerror = () => {
      this._dispatch(Event.createImpl(["error"], { isTrusted: true }));
    };
    this._ws.onclose = event => {
      this._dispatch(CloseEvent.createImpl([
        "close", {
          wasClean: event.wasClean,
          code: event.code,
          reason: event.reason
        }
      ], { isTrusted: true }));
    };
    this._ws.onmessage = event => {
      this._dispatch(MessageEvent.createImpl([
        "message", {
          data: event.data,
          origin: serializeURLOrigin(this._urlRecord)
        }
      ], {
        isTrusted: true
      }));
    };

    let openSocketsForWindow = openSockets.get(window._globalProxy);
    if (openSocketsForWindow === undefined) {
      openSocketsForWindow = new Set();
      openSockets.set(window._globalProxy, openSocketsForWindow);
    }
    openSocketsForWindow.add(this);
  }

  // https://html.spec.whatwg.org/multipage/web-sockets.html#make-disappear
  _makeDisappear() {
    this._eventListeners = Object.create(null);
    this._ws.close(1001);
  }

  static cleanUpWindow(window) {
    const openSocketsForWindow = openSockets.get(window._globalProxy);
    if (openSocketsForWindow !== undefined) {
      for (const ws of openSocketsForWindow) {
        ws._makeDisappear();
      }
    }
  }

  get readyState() {
    return this._ws.readyState;
  }

  get bufferedAmount() {
    return this._ws.bufferedAmount;
  }

  get extensions() {
    return this._ws.extensions;
  }

  get protocol() {
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
    return this._ws.close(code, reason);
  }

  get binaryType() {
    return this._ws.binaryType;
  }

  set binaryType(val) {
    this._ws.binaryType = val;
  }

  send(data) {
    if (Blob.isImpl(data)) {
      data = data._buffer;
    }
    this._ws.send(data);
  }
}

setupForSimpleEventAccessors(WebSocketImpl.prototype, ["open", "message", "error", "close"]);

exports.implementation = WebSocketImpl;
