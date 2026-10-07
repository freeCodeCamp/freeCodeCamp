const require_createRequestId = require('../../createRequestId-DOf8Ktjs.cjs');
const require_resolveWebSocketUrl = require('../../resolveWebSocketUrl-6K6EgqsA.cjs');
const require_hasConfigurableGlobal = require('../../hasConfigurableGlobal-BS75Oulv.cjs');
let _open_draft_deferred_promise = require("@open-draft/deferred-promise");
let outvariant = require("outvariant");

//#region src/interceptors/WebSocket/utils/bindEvent.ts
function bindEvent(target, event) {
	Object.defineProperties(event, {
		target: {
			value: target,
			enumerable: true,
			writable: true
		},
		currentTarget: {
			value: target,
			enumerable: true,
			writable: true
		}
	});
	return event;
}

//#endregion
//#region src/interceptors/WebSocket/utils/events.ts
const kCancelable = Symbol("kCancelable");
const kDefaultPrevented = Symbol("kDefaultPrevented");
/**
* A `MessageEvent` superset that supports event cancellation
* in Node.js. It's rather non-intrusive so it can be safely
* used in the browser as well.
*
* @see https://github.com/nodejs/node/issues/51767
*/
var CancelableMessageEvent = class extends MessageEvent {
	constructor(type, init) {
		super(type, init);
		this[kCancelable] = !!init.cancelable;
		this[kDefaultPrevented] = false;
	}
	get cancelable() {
		return this[kCancelable];
	}
	set cancelable(nextCancelable) {
		this[kCancelable] = nextCancelable;
	}
	get defaultPrevented() {
		return this[kDefaultPrevented];
	}
	set defaultPrevented(nextDefaultPrevented) {
		this[kDefaultPrevented] = nextDefaultPrevented;
	}
	preventDefault() {
		if (this.cancelable && !this[kDefaultPrevented]) this[kDefaultPrevented] = true;
	}
};
var CloseEvent = class extends Event {
	constructor(type, init = {}) {
		super(type, init);
		this.code = init.code === void 0 ? 0 : init.code;
		this.reason = init.reason === void 0 ? "" : init.reason;
		this.wasClean = init.wasClean === void 0 ? false : init.wasClean;
	}
};
var CancelableCloseEvent = class extends CloseEvent {
	constructor(type, init = {}) {
		super(type, init);
		this[kCancelable] = !!init.cancelable;
		this[kDefaultPrevented] = false;
	}
	get cancelable() {
		return this[kCancelable];
	}
	set cancelable(nextCancelable) {
		this[kCancelable] = nextCancelable;
	}
	get defaultPrevented() {
		return this[kDefaultPrevented];
	}
	set defaultPrevented(nextDefaultPrevented) {
		this[kDefaultPrevented] = nextDefaultPrevented;
	}
	preventDefault() {
		if (this.cancelable && !this[kDefaultPrevented]) this[kDefaultPrevented] = true;
	}
};

//#endregion
//#region src/interceptors/WebSocket/WebSocketClientConnection.ts
const kEmitter$1 = Symbol("kEmitter");
const kBoundListener$1 = Symbol("kBoundListener");
var WebSocketClientConnectionProtocol = class {};
/**
* The WebSocket client instance represents an incoming
* client connection. The user can control the connection,
* send and receive events.
*/
var WebSocketClientConnection = class {
	constructor(socket, transport) {
		this.socket = socket;
		this.transport = transport;
		this.id = require_createRequestId.createRequestId();
		this.url = new URL(socket.url);
		this[kEmitter$1] = new EventTarget();
		this.transport.addEventListener("outgoing", (event) => {
			const message = bindEvent(this.socket, new CancelableMessageEvent("message", {
				data: event.data,
				origin: event.origin,
				cancelable: true
			}));
			this[kEmitter$1].dispatchEvent(message);
			if (message.defaultPrevented) event.preventDefault();
		});
		/**
		* Emit the "close" event on the "client" connection
		* whenever the underlying transport is closed.
		* @note "client.close()" does NOT dispatch the "close"
		* event on the WebSocket because it uses non-configurable
		* close status code. Thus, we listen to the transport
		* instead of the WebSocket's "close" event.
		*/
		this.transport.addEventListener("close", (event) => {
			this[kEmitter$1].dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
		});
	}
	/**
	* Listen for the outgoing events from the connected WebSocket client.
	*/
	addEventListener(type, listener, options) {
		if (!Reflect.has(listener, kBoundListener$1)) {
			const boundListener = listener.bind(this.socket);
			Object.defineProperty(listener, kBoundListener$1, {
				value: boundListener,
				enumerable: false,
				configurable: false
			});
		}
		this[kEmitter$1].addEventListener(type, Reflect.get(listener, kBoundListener$1), options);
	}
	/**
	* Removes the listener for the given event.
	*/
	removeEventListener(event, listener, options) {
		this[kEmitter$1].removeEventListener(event, Reflect.get(listener, kBoundListener$1), options);
	}
	/**
	* Send data to the connected client.
	*/
	send(data) {
		this.transport.send(data);
	}
	/**
	* Close the WebSocket connection.
	* @param {number} code A status code (see https://www.rfc-editor.org/rfc/rfc6455#section-7.4.1).
	* @param {string} reason A custom connection close reason.
	*/
	close(code, reason) {
		this.transport.close(code, reason);
	}
};

//#endregion
//#region src/interceptors/WebSocket/WebSocketOverride.ts
const WEBSOCKET_CLOSE_CODE_RANGE_ERROR = "InvalidAccessError: close code out of user configurable range";
const kPassthroughPromise = Symbol("kPassthroughPromise");
const kOnSend = Symbol("kOnSend");
const kClose = Symbol("kClose");
var WebSocketOverride = class extends EventTarget {
	static {
		this.CONNECTING = 0;
	}
	static {
		this.OPEN = 1;
	}
	static {
		this.CLOSING = 2;
	}
	static {
		this.CLOSED = 3;
	}
	constructor(url, protocols) {
		super();
		this.CONNECTING = 0;
		this.OPEN = 1;
		this.CLOSING = 2;
		this.CLOSED = 3;
		this._onopen = null;
		this._onmessage = null;
		this._onerror = null;
		this._onclose = null;
		this.url = require_resolveWebSocketUrl.resolveWebSocketUrl(url);
		this.protocol = "";
		this.extensions = "";
		this.binaryType = "blob";
		this.readyState = this.CONNECTING;
		this.bufferedAmount = 0;
		this[kPassthroughPromise] = new _open_draft_deferred_promise.DeferredPromise();
		queueMicrotask(async () => {
			if (await this[kPassthroughPromise]) return;
			this.protocol = typeof protocols === "string" ? protocols : Array.isArray(protocols) && protocols.length > 0 ? protocols[0] : "";
			/**
			* @note Check that nothing has prevented this connection
			* (e.g. called `client.close()` in the connection listener).
			* If the connection has been prevented, never dispatch the open event,.
			*/
			if (this.readyState === this.CONNECTING) {
				this.readyState = this.OPEN;
				this.dispatchEvent(bindEvent(this, new Event("open")));
			}
		});
	}
	set onopen(listener) {
		this.removeEventListener("open", this._onopen);
		this._onopen = listener;
		if (listener !== null) this.addEventListener("open", listener);
	}
	get onopen() {
		return this._onopen;
	}
	set onmessage(listener) {
		this.removeEventListener("message", this._onmessage);
		this._onmessage = listener;
		if (listener !== null) this.addEventListener("message", listener);
	}
	get onmessage() {
		return this._onmessage;
	}
	set onerror(listener) {
		this.removeEventListener("error", this._onerror);
		this._onerror = listener;
		if (listener !== null) this.addEventListener("error", listener);
	}
	get onerror() {
		return this._onerror;
	}
	set onclose(listener) {
		this.removeEventListener("close", this._onclose);
		this._onclose = listener;
		if (listener !== null) this.addEventListener("close", listener);
	}
	get onclose() {
		return this._onclose;
	}
	/**
	* @see https://websockets.spec.whatwg.org/#ref-for-dom-websocket-send%E2%91%A0
	*/
	send(data) {
		if (this.readyState === this.CONNECTING) {
			this.close();
			throw new DOMException("InvalidStateError");
		}
		if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) return;
		this.bufferedAmount += getDataSize(data);
		queueMicrotask(() => {
			this.bufferedAmount = 0;
			/**
			* @note Notify the parent about outgoing data.
			* This notifies the transport and the connection
			* listens to the outgoing data to emit the "message" event.
			*/
			this[kOnSend]?.(data);
		});
	}
	close(code = 1e3, reason) {
		(0, outvariant.invariant)(code, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
		(0, outvariant.invariant)(code === 1e3 || code >= 3e3 && code <= 4999, WEBSOCKET_CLOSE_CODE_RANGE_ERROR);
		this[kClose](code, reason);
	}
	[kClose](code = 1e3, reason, wasClean = true) {
		/**
		* @note Move this check here so that even internal closures,
		* like those triggered by the `server` connection, are not
		* performed twice.
		*/
		if (this.readyState === this.CLOSING || this.readyState === this.CLOSED) return;
		this.readyState = this.CLOSING;
		queueMicrotask(() => {
			this.readyState = this.CLOSED;
			this.dispatchEvent(bindEvent(this, new CloseEvent("close", {
				code,
				reason,
				wasClean
			})));
			this._onopen = null;
			this._onmessage = null;
			this._onerror = null;
			this._onclose = null;
		});
	}
	addEventListener(type, listener, options) {
		return super.addEventListener(type, listener, options);
	}
	removeEventListener(type, callback, options) {
		return super.removeEventListener(type, callback, options);
	}
};
function getDataSize(data) {
	if (typeof data === "string") return data.length;
	if (data instanceof Blob) return data.size;
	return data.byteLength;
}

//#endregion
//#region src/interceptors/WebSocket/WebSocketServerConnection.ts
const kEmitter = Symbol("kEmitter");
const kBoundListener = Symbol("kBoundListener");
const kSend = Symbol("kSend");
var WebSocketServerConnectionProtocol = class {};
/**
* The WebSocket server instance represents the actual production
* WebSocket server connection. It's idle by default but you can
* establish it by calling `server.connect()`.
*/
var WebSocketServerConnection = class {
	constructor(client, transport, createConnection) {
		this.client = client;
		this.transport = transport;
		this.createConnection = createConnection;
		this[kEmitter] = new EventTarget();
		this.mockCloseController = new AbortController();
		this.realCloseController = new AbortController();
		this.transport.addEventListener("outgoing", (event) => {
			if (typeof this.realWebSocket === "undefined") return;
			queueMicrotask(() => {
				if (!event.defaultPrevented)
 /**
				* @note Use the internal send mechanism so consumers can tell
				* apart direct user calls to `server.send()` and internal calls.
				* E.g. MSW has to ignore this internal call to log out messages correctly.
				*/
				this[kSend](event.data);
			});
		});
		this.transport.addEventListener("incoming", this.handleIncomingMessage.bind(this));
	}
	/**
	* The `WebSocket` instance connected to the original server.
	* Accessing this before calling `server.connect()` will throw.
	*/
	get socket() {
		(0, outvariant.invariant)(this.realWebSocket, "Cannot access \"socket\" on the original WebSocket server object: the connection is not open. Did you forget to call `server.connect()`?");
		return this.realWebSocket;
	}
	/**
	* Open connection to the original WebSocket server.
	*/
	connect() {
		(0, outvariant.invariant)(!this.realWebSocket || this.realWebSocket.readyState !== WebSocket.OPEN, "Failed to call \"connect()\" on the original WebSocket instance: the connection already open");
		const realWebSocket = this.createConnection();
		realWebSocket.binaryType = this.client.binaryType;
		realWebSocket.addEventListener("open", (event) => {
			this[kEmitter].dispatchEvent(bindEvent(this.realWebSocket, new Event("open", event)));
		}, { once: true });
		realWebSocket.addEventListener("message", (event) => {
			this.transport.dispatchEvent(bindEvent(this.realWebSocket, new MessageEvent("incoming", {
				data: event.data,
				origin: event.origin
			})));
		});
		this.client.addEventListener("close", (event) => {
			this.handleMockClose(event);
		}, { signal: this.mockCloseController.signal });
		realWebSocket.addEventListener("close", (event) => {
			this.handleRealClose(event);
		}, { signal: this.realCloseController.signal });
		realWebSocket.addEventListener("error", () => {
			const errorEvent = bindEvent(realWebSocket, new Event("error", { cancelable: true }));
			this[kEmitter].dispatchEvent(errorEvent);
			if (!errorEvent.defaultPrevented) this.client.dispatchEvent(bindEvent(this.client, new Event("error")));
		});
		this.realWebSocket = realWebSocket;
	}
	/**
	* Listen for the incoming events from the original WebSocket server.
	*/
	addEventListener(event, listener, options) {
		if (!Reflect.has(listener, kBoundListener)) {
			const boundListener = listener.bind(this.client);
			Object.defineProperty(listener, kBoundListener, {
				value: boundListener,
				enumerable: false
			});
		}
		this[kEmitter].addEventListener(event, Reflect.get(listener, kBoundListener), options);
	}
	/**
	* Remove the listener for the given event.
	*/
	removeEventListener(event, listener, options) {
		this[kEmitter].removeEventListener(event, Reflect.get(listener, kBoundListener), options);
	}
	/**
	* Send data to the original WebSocket server.
	* @example
	* server.send('hello')
	* server.send(new Blob(['hello']))
	* server.send(new TextEncoder().encode('hello'))
	*/
	send(data) {
		this[kSend](data);
	}
	[kSend](data) {
		const { realWebSocket } = this;
		(0, outvariant.invariant)(realWebSocket, "Failed to call \"server.send()\" for \"%s\": the connection is not open. Did you forget to call \"server.connect()\"?", this.client.url);
		if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) return;
		if (realWebSocket.readyState === WebSocket.CONNECTING) {
			realWebSocket.addEventListener("open", () => {
				realWebSocket.send(data);
			}, { once: true });
			return;
		}
		realWebSocket.send(data);
	}
	/**
	* Close the actual server connection.
	*/
	close() {
		const { realWebSocket } = this;
		(0, outvariant.invariant)(realWebSocket, "Failed to close server connection for \"%s\": the connection is not open. Did you forget to call \"server.connect()\"?", this.client.url);
		this.realCloseController.abort();
		if (realWebSocket.readyState === WebSocket.CLOSING || realWebSocket.readyState === WebSocket.CLOSED) return;
		realWebSocket.close();
		queueMicrotask(() => {
			this[kEmitter].dispatchEvent(bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
				code: 1e3,
				cancelable: true
			})));
		});
	}
	handleIncomingMessage(event) {
		const messageEvent = bindEvent(event.target, new CancelableMessageEvent("message", {
			data: event.data,
			origin: event.origin,
			cancelable: true
		}));
		/**
		* @note Emit "message" event on the server connection
		* instance to let the interceptor know about these
		* incoming events from the original server. In that listener,
		* the interceptor can modify or skip the event forwarding
		* to the mock WebSocket instance.
		*/
		this[kEmitter].dispatchEvent(messageEvent);
		/**
		* @note Forward the incoming server events to the client.
		* Preventing the default on the message event stops this.
		*/
		if (!messageEvent.defaultPrevented) this.client.dispatchEvent(bindEvent(
			/**
			* @note Bind the forwarded original server events
			* to the mock WebSocket instance so it would
			* dispatch them straight away.
			*/
			this.client,
			new MessageEvent("message", {
				data: event.data,
				origin: event.origin
			})
		));
	}
	handleMockClose(_event) {
		if (this.realWebSocket) this.realWebSocket.close();
	}
	handleRealClose(event) {
		this.mockCloseController.abort();
		const closeEvent = bindEvent(this.realWebSocket, new CancelableCloseEvent("close", {
			code: event.code,
			reason: event.reason,
			wasClean: event.wasClean,
			cancelable: true
		}));
		this[kEmitter].dispatchEvent(closeEvent);
		if (!closeEvent.defaultPrevented) this.client[kClose](event.code, event.reason);
	}
};

//#endregion
//#region src/interceptors/WebSocket/WebSocketClassTransport.ts
/**
* Abstraction over the given mock `WebSocket` instance that allows
* for controlling that instance (e.g. sending and receiving messages).
*/
var WebSocketClassTransport = class extends EventTarget {
	constructor(socket) {
		super();
		this.socket = socket;
		this.socket.addEventListener("close", (event) => {
			this.dispatchEvent(bindEvent(this.socket, new CloseEvent("close", event)));
		});
		/**
		* Emit the "outgoing" event on the transport
		* whenever the WebSocket client sends data ("ws.send()").
		*/
		this.socket[kOnSend] = (data) => {
			this.dispatchEvent(bindEvent(this.socket, new CancelableMessageEvent("outgoing", {
				data,
				origin: this.socket.url,
				cancelable: true
			})));
		};
	}
	addEventListener(type, callback, options) {
		return super.addEventListener(type, callback, options);
	}
	dispatchEvent(event) {
		return super.dispatchEvent(event);
	}
	send(data) {
		queueMicrotask(() => {
			if (this.socket.readyState === this.socket.CLOSING || this.socket.readyState === this.socket.CLOSED) return;
			const dispatchEvent = () => {
				this.socket.dispatchEvent(bindEvent(
					/**
					* @note Setting this event's "target" to the
					* WebSocket override instance is important.
					* This way it can tell apart original incoming events
					* (must be forwarded to the transport) from the
					* mocked message events like the one below
					* (must be dispatched on the client instance).
					*/
					this.socket,
					new MessageEvent("message", {
						data,
						origin: this.socket.url
					})
				));
			};
			if (this.socket.readyState === this.socket.CONNECTING) this.socket.addEventListener("open", () => {
				dispatchEvent();
			}, { once: true });
			else dispatchEvent();
		});
	}
	close(code, reason) {
		/**
		* @note Call the internal close method directly
		* to allow closing the connection with the status codes
		* that are non-configurable by the user (> 1000 <= 1015).
		*/
		this.socket[kClose](code, reason);
	}
};

//#endregion
//#region src/interceptors/WebSocket/index.ts
/**
* Intercept the outgoing WebSocket connections created using
* the global `WebSocket` class.
*/
var WebSocketInterceptor = class WebSocketInterceptor extends require_createRequestId.Interceptor {
	static {
		this.symbol = Symbol("websocket");
	}
	constructor() {
		super(WebSocketInterceptor.symbol);
	}
	checkEnvironment() {
		return require_hasConfigurableGlobal.hasConfigurableGlobal("WebSocket");
	}
	setup() {
		const logger = this.logger.extend("setup");
		const WebSocketProxy = new Proxy(globalThis.WebSocket, { construct: (target, args, newTarget) => {
			const [url, protocols] = args;
			const createConnection = () => {
				return Reflect.construct(target, args, newTarget);
			};
			const socket = new WebSocketOverride(url, protocols);
			const transport = new WebSocketClassTransport(socket);
			queueMicrotask(async () => {
				try {
					const server = new WebSocketServerConnection(socket, transport, createConnection);
					const hasConnectionListeners = this.emitter.listenerCount("connection") > 0;
					await require_hasConfigurableGlobal.emitAsync(this.emitter, "connection", {
						client: new WebSocketClientConnection(socket, transport),
						server,
						info: { protocols }
					});
					if (hasConnectionListeners) socket[kPassthroughPromise].resolve(false);
					else {
						socket[kPassthroughPromise].resolve(true);
						server.connect();
						server.addEventListener("open", () => {
							socket.dispatchEvent(bindEvent(socket, new Event("open")));
							if (server["realWebSocket"]) socket.protocol = server["realWebSocket"].protocol;
						});
					}
				} catch (error) {
					/**
					* @note Translate unhandled exceptions during the connection
					* handling (i.e. interceptor exceptions) as WebSocket connection
					* closures with error. This prevents from the exceptions occurring
					* in `queueMicrotask` from being process-wide and uncatchable.
					*/
					if (error instanceof Error) {
						socket.dispatchEvent(new Event("error"));
						if (socket.readyState !== WebSocket.CLOSING && socket.readyState !== WebSocket.CLOSED) socket[kClose](1011, error.message, false);
						console.error(error);
					}
				}
			});
			return socket;
		} });
		logger.info("patching global WebSocket...");
		this.subscriptions.push(require_hasConfigurableGlobal.patchesRegistry.applyPatch(globalThis, "WebSocket", () => WebSocketProxy));
		logger.info("global WebSocket patched!", globalThis.WebSocket.name);
	}
};

//#endregion
exports.CancelableCloseEvent = CancelableCloseEvent;
exports.CancelableMessageEvent = CancelableMessageEvent;
exports.CloseEvent = CloseEvent;
exports.WebSocketClientConnection = WebSocketClientConnection;
exports.WebSocketClientConnectionProtocol = WebSocketClientConnectionProtocol;
exports.WebSocketInterceptor = WebSocketInterceptor;
exports.WebSocketServerConnection = WebSocketServerConnection;
exports.WebSocketServerConnectionProtocol = WebSocketServerConnectionProtocol;
//# sourceMappingURL=index.cjs.map