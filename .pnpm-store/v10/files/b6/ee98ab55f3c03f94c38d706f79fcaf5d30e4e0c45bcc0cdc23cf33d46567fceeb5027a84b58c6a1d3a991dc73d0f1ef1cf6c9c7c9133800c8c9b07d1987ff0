import { a as RequestController, c as Interceptor, i as createRequestId, n as FetchResponse, s as INTERNAL_REQUEST_ID_HEADER_NAME, t as FetchRequest } from "./fetchUtils-BKJ1XmiO.mjs";
import { n as setRawRequest } from "./getRawRequest-C2-1urzA.mjs";
import { a as isPropertyAccessible, i as emitAsync, r as isObject, t as handleRequest } from "./handleRequest-DCLzePtS.mjs";
import { n as setRawRequestBodyStream } from "./node-lsdNwZEW.mjs";
import { Logger } from "@open-draft/logger";
import { invariant } from "outvariant";
import http, { IncomingMessage, STATUS_CODES, ServerResponse, globalAgent } from "node:http";
import https, { globalAgent as globalAgent$1 } from "node:https";
import net from "node:net";
import { HTTPParser } from "_http_common";
import { Readable } from "node:stream";
import { URL as URL$1, parse, urlToHttpOptions } from "node:url";
import { Agent } from "http";

//#region src/interceptors/Socket/utils/normalizeSocketWriteArgs.ts
/**
* Normalizes the arguments provided to the `Writable.prototype.write()`
* and `Writable.prototype.end()`.
*/
function normalizeSocketWriteArgs(args) {
	const normalized = [
		args[0],
		void 0,
		void 0
	];
	if (typeof args[1] === "string") normalized[1] = args[1];
	else if (typeof args[1] === "function") normalized[2] = args[1];
	if (typeof args[2] === "function") normalized[2] = args[2];
	return normalized;
}

//#endregion
//#region src/interceptors/Socket/MockSocket.ts
var MockSocket = class extends net.Socket {
	constructor(options) {
		super();
		this.options = options;
		this.connecting = false;
		this.connect();
		this._final = (callback) => {
			callback(null);
		};
	}
	connect() {
		this.connecting = true;
		return this;
	}
	write(...args) {
		const [chunk, encoding, callback] = normalizeSocketWriteArgs(args);
		this.options.write(chunk, encoding, callback);
		return true;
	}
	end(...args) {
		const [chunk, encoding, callback] = normalizeSocketWriteArgs(args);
		this.options.write(chunk, encoding, callback);
		return super.end.apply(this, args);
	}
	push(chunk, encoding) {
		this.options.read(chunk, encoding);
		return super.push(chunk, encoding);
	}
};

//#endregion
//#region src/interceptors/Socket/utils/baseUrlFromConnectionOptions.ts
function baseUrlFromConnectionOptions(options) {
	if ("href" in options) return new URL(options.href);
	const protocol = options.port === 443 ? "https:" : "http:";
	const host = options.host;
	const url = new URL(`${protocol}//${host}`);
	if (options.port) url.port = options.port.toString();
	if (options.path) url.pathname = options.path;
	if (options.auth) {
		const [username, password] = options.auth.split(":");
		url.username = username;
		url.password = password;
	}
	return url;
}

//#endregion
//#region src/interceptors/ClientRequest/utils/recordRawHeaders.ts
const kRawHeaders = Symbol("kRawHeaders");
const kRestorePatches = Symbol("kRestorePatches");
function recordRawHeader(headers, args, behavior) {
	ensureRawHeadersSymbol(headers, []);
	const rawHeaders = Reflect.get(headers, kRawHeaders);
	if (behavior === "set") {
		for (let index = rawHeaders.length - 1; index >= 0; index--) if (rawHeaders[index][0].toLowerCase() === args[0].toLowerCase()) rawHeaders.splice(index, 1);
	}
	rawHeaders.push(args);
}
/**
* Define the raw headers symbol on the given `Headers` instance.
* If the symbol already exists, this function does nothing.
*/
function ensureRawHeadersSymbol(headers, rawHeaders) {
	if (Reflect.has(headers, kRawHeaders)) return;
	defineRawHeadersSymbol(headers, rawHeaders);
}
/**
* Define the raw headers symbol on the given `Headers` instance.
* If the symbol already exists, it gets overridden.
*/
function defineRawHeadersSymbol(headers, rawHeaders) {
	Object.defineProperty(headers, kRawHeaders, {
		value: rawHeaders,
		enumerable: false,
		configurable: true
	});
}
/**
* Patch the global `Headers` class to store raw headers.
* This is for compatibility with `IncomingMessage.prototype.rawHeaders`.
*
* @note Node.js has their own raw headers symbol but it
* only records the first header name in case of multi-value headers.
* Any other headers are normalized before comparing. This makes it
* incompatible with the `rawHeaders` format.
*
* let h = new Headers()
* h.append('X-Custom', 'one')
* h.append('x-custom', 'two')
* h[Symbol('headers map')] // Map { 'X-Custom' => 'one, two' }
*/
function recordRawFetchHeaders() {
	if (Reflect.get(Headers, kRestorePatches)) return Reflect.get(Headers, kRestorePatches);
	const { Headers: OriginalHeaders, Request: OriginalRequest, Response: OriginalResponse } = globalThis;
	const { set, append, delete: headersDeleteMethod } = Headers.prototype;
	Object.defineProperty(Headers, kRestorePatches, {
		value: () => {
			Headers.prototype.set = set;
			Headers.prototype.append = append;
			Headers.prototype.delete = headersDeleteMethod;
			globalThis.Headers = OriginalHeaders;
			globalThis.Request = OriginalRequest;
			globalThis.Response = OriginalResponse;
			Object.setPrototypeOf(FetchRequest, OriginalRequest);
			Object.setPrototypeOf(FetchRequest.prototype, OriginalRequest.prototype);
			Object.setPrototypeOf(FetchResponse, OriginalResponse);
			Object.setPrototypeOf(FetchResponse.prototype, OriginalResponse.prototype);
			Reflect.deleteProperty(Headers, kRestorePatches);
		},
		enumerable: false,
		configurable: true
	});
	Object.defineProperty(globalThis, "Headers", {
		enumerable: true,
		writable: true,
		value: new Proxy(Headers, { construct(target, args, newTarget) {
			const headersInit = args[0] || [];
			if (headersInit instanceof Headers && Reflect.has(headersInit, kRawHeaders)) {
				const sanitizedHeaders = Reflect.get(headersInit, kRawHeaders).map((tuple) => [tuple[0], tuple[1]]);
				const headers$1 = Reflect.construct(target, [sanitizedHeaders], newTarget);
				ensureRawHeadersSymbol(headers$1, [...sanitizedHeaders]);
				return headers$1;
			}
			const headers = Reflect.construct(target, args, newTarget);
			if (!Reflect.has(headers, kRawHeaders)) ensureRawHeadersSymbol(headers, Array.isArray(headersInit) ? headersInit : Object.entries(headersInit));
			return headers;
		} })
	});
	Headers.prototype.set = new Proxy(Headers.prototype.set, { apply(target, thisArg, args) {
		recordRawHeader(thisArg, [args[0], args[1]], "set");
		return Reflect.apply(target, thisArg, args);
	} });
	Headers.prototype.append = new Proxy(Headers.prototype.append, { apply(target, thisArg, args) {
		recordRawHeader(thisArg, [args[0], args[1]], "append");
		return Reflect.apply(target, thisArg, args);
	} });
	Headers.prototype.delete = new Proxy(Headers.prototype.delete, { apply(target, thisArg, args) {
		const rawHeaders = Reflect.get(thisArg, kRawHeaders);
		if (rawHeaders) {
			for (let index = rawHeaders.length - 1; index >= 0; index--) if (rawHeaders[index][0].toLowerCase() === args[0].toLowerCase()) rawHeaders.splice(index, 1);
		}
		return Reflect.apply(target, thisArg, args);
	} });
	Object.defineProperty(globalThis, "Request", {
		enumerable: true,
		writable: true,
		value: new Proxy(Request, { construct(target, args, newTarget) {
			const request = Reflect.construct(target, args, newTarget);
			const inferredRawHeaders = [];
			if (typeof args[0] === "object" && args[0].headers != null) inferredRawHeaders.push(...inferRawHeaders(args[0].headers));
			if (typeof args[1] === "object" && args[1].headers != null) inferredRawHeaders.push(...inferRawHeaders(args[1].headers));
			if (inferredRawHeaders.length > 0) ensureRawHeadersSymbol(request.headers, inferredRawHeaders);
			return request;
		} })
	});
	Object.defineProperty(globalThis, "Response", {
		enumerable: true,
		writable: true,
		value: new Proxy(Response, { construct(target, args, newTarget) {
			const response = Reflect.construct(target, args, newTarget);
			if (typeof args[1] === "object" && args[1].headers != null) ensureRawHeadersSymbol(response.headers, inferRawHeaders(args[1].headers));
			return response;
		} })
	});
	/**
	* Re-parent FetchRequest/FetchResponse so their `super()` calls go
	* through the proxied globalThis.Request/Response above. Without this,
	* FetchRequest extends the statically-captured (original) Request,
	* bypassing the construct proxy that records raw headers.
	*/
	Object.setPrototypeOf(FetchRequest, globalThis.Request);
	Object.setPrototypeOf(FetchRequest.prototype, globalThis.Request.prototype);
	Object.setPrototypeOf(FetchResponse, globalThis.Response);
	Object.setPrototypeOf(FetchResponse.prototype, globalThis.Response.prototype);
}
function restoreHeadersPrototype() {
	if (!Reflect.get(Headers, kRestorePatches)) return;
	Reflect.get(Headers, kRestorePatches)();
}
function getRawFetchHeaders(headers) {
	if (!Reflect.has(headers, kRawHeaders)) return Array.from(headers.entries());
	const rawHeaders = Reflect.get(headers, kRawHeaders);
	return rawHeaders.length > 0 ? rawHeaders : Array.from(headers.entries());
}
/**
* Infers the raw headers from the given `HeadersInit` provided
* to the Request/Response constructor.
*
* If the `init.headers` is a Headers instance, use it directly.
* That means the headers were created standalone and already have
* the raw headers stored.
* If the `init.headers` is a HeadersInit, create a new Headers
* instance out of it.
*/
function inferRawHeaders(headers) {
	if (headers instanceof Headers) return Reflect.get(headers, kRawHeaders) || [];
	return Reflect.get(new Headers(headers), kRawHeaders);
}

//#endregion
//#region src/interceptors/ClientRequest/utils/parserUtils.ts
/**
* @see https://github.com/nodejs/node/blob/f3adc11e37b8bfaaa026ea85c1cf22e3a0e29ae9/lib/_http_common.js#L180
*/
function freeParser(parser, socket) {
	if (parser._consumed) parser.unconsume();
	parser._headers = [];
	parser._url = "";
	parser.socket = null;
	parser.incoming = null;
	parser.outgoing = null;
	parser.maxHeaderPairs = 2e3;
	parser._consumed = false;
	parser.onIncoming = null;
	parser[HTTPParser.kOnHeaders] = null;
	parser[HTTPParser.kOnHeadersComplete] = null;
	parser[HTTPParser.kOnMessageBegin] = null;
	parser[HTTPParser.kOnMessageComplete] = null;
	parser[HTTPParser.kOnBody] = null;
	parser[HTTPParser.kOnExecute] = null;
	parser[HTTPParser.kOnTimeout] = null;
	parser.remove();
	parser.free();
	if (socket)
 /**
	* @note Unassigning the socket's parser will fail this assertion
	* if there's still some data being processed on the socket:
	* @see https://github.com/nodejs/node/blob/4e1f39b678b37017ac9baa0971e3aeecd3b67b51/lib/_http_client.js#L613
	*/
	if (socket.destroyed) socket.parser = null;
	else socket.once("end", () => {
		socket.parser = null;
	});
}

//#endregion
//#region src/interceptors/ClientRequest/MockHttpSocket.ts
const kRequestId = Symbol("kRequestId");
var MockHttpSocket = class extends MockSocket {
	constructor(options) {
		super({
			write: (chunk, encoding, callback) => {
				if (this.socketState !== "passthrough") this.writeBuffer.push([
					chunk,
					encoding,
					callback
				]);
				if (chunk) {
					/**
					* Forward any writes to the mock socket to the underlying original socket.
					* This ensures functional duplex connections, like WebSocket.
					* @see https://github.com/mswjs/interceptors/issues/682
					*/
					if (this.socketState === "passthrough") this.originalSocket?.write(chunk, encoding, callback);
					this.requestParser.execute(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk, encoding));
				}
			},
			read: (chunk) => {
				if (chunk !== null)
 /**
				* @todo We need to free the parser if the connection has been
				* upgraded to a non-HTTP protocol. It won't be able to parse data
				* from that point onward anyway. No need to keep it in memory.
				*/
				this.responseParser.execute(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
			}
		});
		this.requestRawHeadersBuffer = [];
		this.responseRawHeadersBuffer = [];
		this.writeBuffer = [];
		this.socketState = "unknown";
		this.onRequestHeaders = (rawHeaders) => {
			this.requestRawHeadersBuffer.push(...rawHeaders);
		};
		this.onRequestStart = (versionMajor, versionMinor, rawHeaders, _, path, __, ___, ____, shouldKeepAlive) => {
			this.shouldKeepAlive = shouldKeepAlive;
			const url = new URL(path || "", this.baseUrl);
			const method = this.connectionOptions.method?.toUpperCase() || "GET";
			const headers = FetchResponse.parseRawHeaders([...this.requestRawHeadersBuffer, ...rawHeaders || []]);
			this.requestRawHeadersBuffer.length = 0;
			const canHaveBody = method !== "GET" && method !== "HEAD";
			if (url.username || url.password) {
				if (!headers.has("authorization")) headers.set("authorization", `Basic ${url.username}:${url.password}`);
				url.username = "";
				url.password = "";
			}
			this.requestStream = new Readable({ read: () => {
				this.flushWriteBuffer();
			} });
			const requestId = createRequestId();
			this.request = new FetchRequest(url, {
				method,
				headers,
				credentials: "same-origin",
				duplex: canHaveBody ? "half" : void 0,
				body: canHaveBody ? Readable.toWeb(this.requestStream) : null
			});
			Reflect.set(this.request, kRequestId, requestId);
			setRawRequest(this.request, Reflect.get(this, "_httpMessage"));
			setRawRequestBodyStream(this.request, this.requestStream);
			/**
			* @fixme Stop relying on the "X-Request-Id" request header
			* to figure out if one interceptor has been invoked within another.
			* @see https://github.com/mswjs/interceptors/issues/378
			*/
			if (this.request.headers.has(INTERNAL_REQUEST_ID_HEADER_NAME)) {
				this.passthrough();
				return;
			}
			this.onRequest({
				requestId,
				request: this.request,
				socket: this
			});
		};
		this.onResponseHeaders = (rawHeaders) => {
			this.responseRawHeadersBuffer.push(...rawHeaders);
		};
		this.onResponseStart = (versionMajor, versionMinor, rawHeaders, method, url, status, statusText) => {
			const headers = FetchResponse.parseRawHeaders([...this.responseRawHeadersBuffer, ...rawHeaders || []]);
			this.responseRawHeadersBuffer.length = 0;
			const response = new FetchResponse(
				/**
				* @note The Fetch API response instance exposed to the consumer
				* is created over the response stream of the HTTP parser. It is NOT
				* related to the Socket instance. This way, you can read response body
				* in response listener while the Socket instance delays the emission
				* of "end" and other events until those response listeners are finished.
				*/
				FetchResponse.isResponseWithBody(status) ? Readable.toWeb(this.responseStream = new Readable({ read() {} })) : null,
				{
					url,
					status,
					statusText,
					headers
				}
			);
			invariant(this.request, "Failed to handle a response: request does not exist");
			FetchResponse.setUrl(this.request.url, response);
			/**
			* @fixme Stop relying on the "X-Request-Id" request header
			* to figure out if one interceptor has been invoked within another.
			* @see https://github.com/mswjs/interceptors/issues/378
			*/
			if (this.request.headers.has(INTERNAL_REQUEST_ID_HEADER_NAME)) return;
			this.responseListenersPromise = this.onResponse({
				response,
				isMockedResponse: this.socketState === "mock",
				requestId: Reflect.get(this.request, kRequestId),
				request: this.request,
				socket: this
			});
		};
		this.connectionOptions = options.connectionOptions;
		this.createConnection = options.createConnection;
		this.onRequest = options.onRequest;
		this.onResponse = options.onResponse;
		this.baseUrl = baseUrlFromConnectionOptions(this.connectionOptions);
		this.requestParser = new HTTPParser();
		this.requestParser.initialize(HTTPParser.REQUEST, {});
		this.requestParser[HTTPParser.kOnHeaders] = this.onRequestHeaders.bind(this);
		this.requestParser[HTTPParser.kOnHeadersComplete] = this.onRequestStart.bind(this);
		this.requestParser[HTTPParser.kOnBody] = this.onRequestBody.bind(this);
		this.requestParser[HTTPParser.kOnMessageComplete] = this.onRequestEnd.bind(this);
		this.responseParser = new HTTPParser();
		this.responseParser.initialize(HTTPParser.RESPONSE, {});
		this.responseParser[HTTPParser.kOnHeaders] = this.onResponseHeaders.bind(this);
		this.responseParser[HTTPParser.kOnHeadersComplete] = this.onResponseStart.bind(this);
		this.responseParser[HTTPParser.kOnBody] = this.onResponseBody.bind(this);
		this.responseParser[HTTPParser.kOnMessageComplete] = this.onResponseEnd.bind(this);
		this.once("finish", () => freeParser(this.requestParser, this));
		if (this.baseUrl.protocol === "https:") {
			Reflect.set(this, "encrypted", true);
			Reflect.set(this, "authorized", false);
			Reflect.set(this, "getProtocol", () => "TLSv1.3");
			Reflect.set(this, "getSession", () => void 0);
			Reflect.set(this, "isSessionReused", () => false);
			Reflect.set(this, "getCipher", () => ({
				name: "AES256-SHA",
				standardName: "TLS_RSA_WITH_AES_256_CBC_SHA",
				version: "TLSv1.3"
			}));
		}
	}
	emit(event, ...args) {
		const emitEvent = super.emit.bind(this, event, ...args);
		if (this.responseListenersPromise) {
			this.responseListenersPromise.finally(emitEvent);
			return this.listenerCount(event) > 0;
		}
		return emitEvent();
	}
	destroy(error) {
		freeParser(this.responseParser, this);
		if (error) this.emit("error", error);
		return super.destroy(error);
	}
	/**
	* Establish this Socket connection as-is and pipe
	* its data/events through this Socket.
	*/
	passthrough() {
		this.socketState = "passthrough";
		if (this.destroyed) return;
		const socket = this.createConnection();
		this.originalSocket = socket;
		/**
		* @note Inherit the original socket's connection handle.
		* Without this, each push to the mock socket results in a
		* new "connection" listener being added (i.e. buffering pushes).
		* @see https://github.com/nodejs/node/blob/b18153598b25485ce4f54d0c5cb830a9457691ee/lib/net.js#L734
		*/
		if ("_handle" in socket) Object.defineProperty(this, "_handle", {
			value: socket._handle,
			enumerable: true,
			writable: true
		});
		this.once("close", () => {
			socket.removeAllListeners();
			if (!socket.destroyed) socket.destroy();
			this.originalSocket = void 0;
		});
		this.address = socket.address.bind(socket);
		let writeArgs;
		let headersWritten = false;
		while (writeArgs = this.writeBuffer.shift()) if (writeArgs !== void 0) {
			if (!headersWritten) {
				const [chunk, encoding, callback] = writeArgs;
				const chunkString = chunk.toString();
				const chunkBeforeRequestHeaders = chunkString.slice(0, chunkString.indexOf("\r\n") + 2);
				const chunkAfterRequestHeaders = chunkString.slice(chunk.indexOf("\r\n\r\n"));
				const headersChunk = `${chunkBeforeRequestHeaders}${getRawFetchHeaders(this.request.headers).filter(([name]) => {
					return name.toLowerCase() !== INTERNAL_REQUEST_ID_HEADER_NAME;
				}).map(([name, value]) => `${name}: ${value}`).join("\r\n")}${chunkAfterRequestHeaders}`;
				socket.write(headersChunk, encoding, callback);
				headersWritten = true;
				continue;
			}
			socket.write(...writeArgs);
		}
		if (Reflect.get(socket, "encrypted")) [
			"encrypted",
			"authorized",
			"getProtocol",
			"getSession",
			"isSessionReused",
			"getCipher"
		].forEach((propertyName) => {
			Object.defineProperty(this, propertyName, {
				enumerable: true,
				get: () => {
					const value = Reflect.get(socket, propertyName);
					return typeof value === "function" ? value.bind(socket) : value;
				}
			});
		});
		socket.on("lookup", (...args) => this.emit("lookup", ...args)).on("connect", () => {
			this.connecting = socket.connecting;
			this.emit("connect");
		}).on("secureConnect", () => this.emit("secureConnect")).on("secure", () => this.emit("secure")).on("session", (session) => this.emit("session", session)).on("ready", () => this.emit("ready")).on("drain", () => this.emit("drain")).on("data", (chunk) => {
			this.push(chunk);
		}).on("error", (error) => {
			Reflect.set(this, "_hadError", Reflect.get(socket, "_hadError"));
			this.emit("error", error);
		}).on("resume", () => this.emit("resume")).on("timeout", () => this.emit("timeout")).on("prefinish", () => this.emit("prefinish")).on("finish", () => this.emit("finish")).on("close", (hadError) => this.emit("close", hadError)).on("end", () => this.emit("end"));
	}
	/**
	* Convert the given Fetch API `Response` instance to an
	* HTTP message and push it to the socket.
	*/
	async respondWith(response) {
		if (this.destroyed) return;
		invariant(this.socketState !== "mock", "[MockHttpSocket] Failed to respond to the \"%s %s\" request with \"%s %s\": the request has already been handled", this.request?.method, this.request?.url, response.status, response.statusText);
		if (isPropertyAccessible(response, "type") && response.type === "error") {
			this.errorWith(/* @__PURE__ */ new TypeError("Network error"));
			return;
		}
		this.mockConnect();
		this.socketState = "mock";
		this.flushWriteBuffer();
		const serverResponse = new ServerResponse(new IncomingMessage(this));
		/**
		* Assign a mock socket instance to the server response to
		* spy on the response chunk writes. Push the transformed response chunks
		* to this `MockHttpSocket` instance to trigger the "data" event.
		* @note Providing the same `MockSocket` instance when creating `ServerResponse`
		* does not have the same effect.
		* @see https://github.com/nodejs/node/blob/10099bb3f7fd97bb9dd9667188426866b3098e07/test/parallel/test-http-server-response-standalone.js#L32
		*/
		serverResponse.assignSocket(new MockSocket({
			write: (chunk, encoding, callback) => {
				this.push(chunk, encoding);
				callback?.();
			},
			read() {}
		}));
		/**
		* @note Remove the `Connection` and `Date` response headers
		* injected by `ServerResponse` by default. Those are required
		* from the server but the interceptor is NOT technically a server.
		* It's confusing to add response headers that the developer didn't
		* specify themselves. They can always add these if they wish.
		* @see https://www.rfc-editor.org/rfc/rfc9110#field.date
		* @see https://www.rfc-editor.org/rfc/rfc9110#field.connection
		*/
		serverResponse.removeHeader("connection");
		serverResponse.removeHeader("date");
		const rawResponseHeaders = getRawFetchHeaders(response.headers);
		/**
		* @note Call `.writeHead` in order to set the raw response headers
		* in the same case as they were provided by the developer. Using
		* `.setHeader()`/`.appendHeader()` normalizes header names.
		*/
		serverResponse.writeHead(response.status, response.statusText || STATUS_CODES[response.status], rawResponseHeaders);
		this.once("error", () => {
			serverResponse.destroy();
		});
		if (response.body) try {
			const reader = response.body.getReader();
			while (true) {
				const { done, value } = await reader.read();
				if (done) {
					serverResponse.end();
					break;
				}
				serverResponse.write(value);
			}
		} catch (error) {
			if (error instanceof Error) {
				serverResponse.destroy();
				/**
				* @note Destroy the request socket gracefully.
				* Response stream errors do NOT produce request errors.
				*/
				this.destroy();
				return;
			}
			serverResponse.destroy();
			throw error;
		}
		else serverResponse.end();
		if (!this.shouldKeepAlive) {
			this.emit("readable");
			/**
			* @todo @fixme This is likely a hack.
			* Since we push null to the socket, it never propagates to the
			* parser, and the parser never calls "onResponseEnd" to close
			* the response stream. We are closing the stream here manually
			* but that shouldn't be the case.
			*/
			this.responseStream?.push(null);
			this.push(null);
		}
	}
	/**
	* Close this socket connection with the given error.
	*/
	errorWith(error) {
		this.destroy(error);
	}
	mockConnect() {
		this.connecting = false;
		const isIPv6 = net.isIPv6(this.connectionOptions.hostname) || this.connectionOptions.family === 6;
		const addressInfo = {
			address: isIPv6 ? "::1" : "127.0.0.1",
			family: isIPv6 ? "IPv6" : "IPv4",
			port: this.connectionOptions.port
		};
		this.address = () => addressInfo;
		this.emit("lookup", null, addressInfo.address, addressInfo.family === "IPv6" ? 6 : 4, this.connectionOptions.host);
		this.emit("connect");
		this.emit("ready");
		if (this.baseUrl.protocol === "https:") {
			this.emit("secure");
			this.emit("secureConnect");
			this.emit("session", this.connectionOptions.session || Buffer.from("mock-session-renegotiate"));
			this.emit("session", Buffer.from("mock-session-resume"));
		}
	}
	flushWriteBuffer() {
		for (const writeCall of this.writeBuffer) if (typeof writeCall[2] === "function") {
			writeCall[2]();
			/**
			* @note Remove the callback from the write call
			* so it doesn't get called twice on passthrough
			* if `request.end()` was called within `request.write()`.
			* @see https://github.com/mswjs/interceptors/issues/684
			*/
			writeCall[2] = void 0;
		}
	}
	onRequestBody(chunk) {
		invariant(this.requestStream, "Failed to write to a request stream: stream does not exist");
		this.requestStream.push(chunk);
	}
	onRequestEnd() {
		if (this.requestStream) this.requestStream.push(null);
	}
	onResponseBody(chunk) {
		invariant(this.responseStream, "Failed to write to a response stream: stream does not exist");
		this.responseStream.push(chunk);
	}
	onResponseEnd() {
		if (this.responseStream) this.responseStream.push(null);
	}
};

//#endregion
//#region src/interceptors/ClientRequest/agents.ts
var MockAgent = class extends http.Agent {
	constructor(options) {
		super();
		this.customAgent = options.customAgent;
		this.onRequest = options.onRequest;
		this.onResponse = options.onResponse;
	}
	createConnection(options, callback) {
		const createConnection = this.customAgent instanceof http.Agent ? this.customAgent.createConnection : super.createConnection;
		const createConnectionOptions = this.customAgent instanceof http.Agent ? {
			...options,
			...this.customAgent.options
		} : options;
		return new MockHttpSocket({
			connectionOptions: options,
			createConnection: createConnection.bind(this.customAgent || this, createConnectionOptions, callback),
			onRequest: this.onRequest.bind(this),
			onResponse: this.onResponse.bind(this)
		});
	}
};
var MockHttpsAgent = class extends https.Agent {
	constructor(options) {
		super();
		this.customAgent = options.customAgent;
		this.onRequest = options.onRequest;
		this.onResponse = options.onResponse;
	}
	createConnection(options, callback) {
		const createConnection = this.customAgent instanceof http.Agent ? this.customAgent.createConnection : super.createConnection;
		const createConnectionOptions = this.customAgent instanceof http.Agent ? {
			...options,
			...this.customAgent.options
		} : options;
		return new MockHttpSocket({
			connectionOptions: options,
			createConnection: createConnection.bind(this.customAgent || this, createConnectionOptions, callback),
			onRequest: this.onRequest.bind(this),
			onResponse: this.onResponse.bind(this)
		});
	}
};

//#endregion
//#region src/utils/getUrlByRequestOptions.ts
const logger$2 = new Logger("utils getUrlByRequestOptions");
const DEFAULT_PATH = "/";
const DEFAULT_PROTOCOL = "http:";
const DEFAULT_HOSTNAME = "localhost";
const SSL_PORT = 443;
function getAgent(options) {
	return options.agent instanceof Agent ? options.agent : void 0;
}
function getProtocolByRequestOptions(options) {
	if (options.protocol) return options.protocol;
	const agentProtocol = getAgent(options)?.protocol;
	if (agentProtocol) return agentProtocol;
	const port = getPortByRequestOptions(options);
	return options.cert || port === SSL_PORT ? "https:" : options.uri?.protocol || DEFAULT_PROTOCOL;
}
function getPortByRequestOptions(options) {
	if (options.port) return Number(options.port);
	const agent = getAgent(options);
	if (agent?.options.port) return Number(agent.options.port);
	if (agent?.defaultPort) return Number(agent.defaultPort);
}
function getAuthByRequestOptions(options) {
	if (options.auth) {
		const [username, password] = options.auth.split(":");
		return {
			username,
			password
		};
	}
}
/**
* Returns true if host looks like an IPv6 address without surrounding brackets
* It assumes any host containing `:` is definitely not IPv4 and probably IPv6,
* but note that this could include invalid IPv6 addresses as well.
*/
function isRawIPv6Address(host) {
	return host.includes(":") && !host.startsWith("[") && !host.endsWith("]");
}
function getHostname(options) {
	let host = options.hostname || options.host;
	if (host) {
		if (isRawIPv6Address(host)) host = `[${host}]`;
		return new URL(`http://${host}`).hostname;
	}
	return DEFAULT_HOSTNAME;
}
/**
* Creates a `URL` instance from a given `RequestOptions` object.
*/
function getUrlByRequestOptions(options) {
	logger$2.info("request options", options);
	if (options.uri) {
		logger$2.info("constructing url from explicitly provided \"options.uri\": %s", options.uri);
		return new URL(options.uri.href);
	}
	logger$2.info("figuring out url from request options...");
	const protocol = getProtocolByRequestOptions(options);
	logger$2.info("protocol", protocol);
	const port = getPortByRequestOptions(options);
	logger$2.info("port", port);
	const hostname = getHostname(options);
	logger$2.info("hostname", hostname);
	const path = options.path || DEFAULT_PATH;
	logger$2.info("path", path);
	const credentials = getAuthByRequestOptions(options);
	logger$2.info("credentials", credentials);
	const authString = credentials ? `${credentials.username}:${credentials.password}@` : "";
	logger$2.info("auth string:", authString);
	const portString = typeof port !== "undefined" ? `:${port}` : "";
	const url = new URL(`${protocol}//${hostname}${portString}${path}`);
	url.username = credentials?.username || "";
	url.password = credentials?.password || "";
	logger$2.info("created url:", url);
	return url;
}

//#endregion
//#region src/utils/cloneObject.ts
const logger$1 = new Logger("cloneObject");
function isPlainObject(obj) {
	logger$1.info("is plain object?", obj);
	if (obj == null || !obj.constructor?.name) {
		logger$1.info("given object is undefined, not a plain object...");
		return false;
	}
	logger$1.info("checking the object constructor:", obj.constructor.name);
	return obj.constructor.name === "Object";
}
function cloneObject(obj) {
	logger$1.info("cloning object:", obj);
	const enumerableProperties = Object.entries(obj).reduce((acc, [key, value]) => {
		logger$1.info("analyzing key-value pair:", key, value);
		acc[key] = isPlainObject(value) ? cloneObject(value) : value;
		return acc;
	}, {});
	return isPlainObject(obj) ? enumerableProperties : Object.assign(Object.getPrototypeOf(obj), enumerableProperties);
}

//#endregion
//#region src/interceptors/ClientRequest/utils/normalizeClientRequestArgs.ts
const logger = new Logger("http normalizeClientRequestArgs");
function resolveRequestOptions(args, url) {
	if (typeof args[1] === "undefined" || typeof args[1] === "function") {
		logger.info("request options not provided, deriving from the url", url);
		return urlToHttpOptions(url);
	}
	if (args[1]) {
		logger.info("has custom RequestOptions!", args[1]);
		const requestOptionsFromUrl = urlToHttpOptions(url);
		logger.info("derived RequestOptions from the URL:", requestOptionsFromUrl);
		/**
		* Clone the request options to lock their state
		* at the moment they are provided to `ClientRequest`.
		* @see https://github.com/mswjs/interceptors/issues/86
		*/
		logger.info("cloning RequestOptions...");
		const clonedRequestOptions = cloneObject(args[1]);
		logger.info("successfully cloned RequestOptions!", clonedRequestOptions);
		return {
			...requestOptionsFromUrl,
			...clonedRequestOptions
		};
	}
	logger.info("using an empty object as request options");
	return {};
}
/**
* Overrides the given `URL` instance with the explicit properties provided
* on the `RequestOptions` object. The options object takes precedence,
* and will replace URL properties like "host", "path", and "port", if specified.
*/
function overrideUrlByRequestOptions(url, options) {
	url.host = options.host || url.host;
	url.hostname = options.hostname || url.hostname;
	url.port = options.port ? options.port.toString() : url.port;
	if (options.path) {
		const parsedOptionsPath = parse(options.path, false);
		url.pathname = parsedOptionsPath.pathname || "";
		url.search = parsedOptionsPath.search || "";
	}
	return url;
}
function resolveCallback(args) {
	return typeof args[1] === "function" ? args[1] : args[2];
}
/**
* Normalizes parameters given to a `http.request` call
* so it always has a `URL` and `RequestOptions`.
*/
function normalizeClientRequestArgs(defaultProtocol, args) {
	let url;
	let options;
	let callback;
	logger.info("arguments", args);
	logger.info("using default protocol:", defaultProtocol);
	if (args.length === 0) {
		const url$1 = new URL$1("http://localhost");
		return [url$1, resolveRequestOptions(args, url$1)];
	}
	if (typeof args[0] === "string") {
		logger.info("first argument is a location string:", args[0]);
		url = new URL$1(args[0]);
		logger.info("created a url:", url);
		const requestOptionsFromUrl = urlToHttpOptions(url);
		logger.info("request options from url:", requestOptionsFromUrl);
		options = resolveRequestOptions(args, url);
		logger.info("resolved request options:", options);
		callback = resolveCallback(args);
	} else if (args[0] instanceof URL$1) {
		url = args[0];
		logger.info("first argument is a URL:", url);
		if (typeof args[1] !== "undefined" && isObject(args[1])) url = overrideUrlByRequestOptions(url, args[1]);
		options = resolveRequestOptions(args, url);
		logger.info("derived request options:", options);
		callback = resolveCallback(args);
	} else if ("hash" in args[0] && !("method" in args[0])) {
		const [legacyUrl] = args;
		logger.info("first argument is a legacy URL:", legacyUrl);
		if (legacyUrl.hostname === null) {
			/**
			* We are dealing with a relative url, so use the path as an "option" and
			* merge in any existing options, giving priority to existing options -- i.e. a path in any
			* existing options will take precedence over the one contained in the url. This is consistent
			* with the behaviour in ClientRequest.
			* @see https://github.com/nodejs/node/blob/d84f1312915fe45fe0febe888db692c74894c382/lib/_http_client.js#L122
			*/
			logger.info("given legacy URL is relative (no hostname)");
			return isObject(args[1]) ? normalizeClientRequestArgs(defaultProtocol, [{
				path: legacyUrl.path,
				...args[1]
			}, args[2]]) : normalizeClientRequestArgs(defaultProtocol, [{ path: legacyUrl.path }, args[1]]);
		}
		logger.info("given legacy url is absolute");
		const resolvedUrl = new URL$1(legacyUrl.href);
		return args[1] === void 0 ? normalizeClientRequestArgs(defaultProtocol, [resolvedUrl]) : typeof args[1] === "function" ? normalizeClientRequestArgs(defaultProtocol, [resolvedUrl, args[1]]) : normalizeClientRequestArgs(defaultProtocol, [
			resolvedUrl,
			args[1],
			args[2]
		]);
	} else if (isObject(args[0])) {
		options = { ...args[0] };
		logger.info("first argument is RequestOptions:", options);
		options.protocol = options.protocol || defaultProtocol;
		logger.info("normalized request options:", options);
		url = getUrlByRequestOptions(options);
		logger.info("created a URL from RequestOptions:", url.href);
		callback = resolveCallback(args);
	} else throw new Error(`Failed to construct ClientRequest with these parameters: ${args}`);
	options.protocol = options.protocol || url.protocol;
	options.method = options.method || "GET";
	/**
	* Ensure that the default Agent is always set.
	* This prevents the protocol mismatch for requests with { agent: false },
	* where the global Agent is inferred.
	* @see https://github.com/mswjs/msw/issues/1150
	* @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L130
	* @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L157-L159
	*/
	if (!options._defaultAgent) {
		logger.info("has no default agent, setting the default agent for \"%s\"", options.protocol);
		options._defaultAgent = options.protocol === "https:" ? globalAgent$1 : globalAgent;
	}
	logger.info("successfully resolved url:", url.href);
	logger.info("successfully resolved options:", options);
	logger.info("successfully resolved callback:", callback);
	/**
	* @note If the user-provided URL is not a valid URL in Node.js,
	* (e.g. the one provided by the JSDOM polyfills), case it to
	* string. Otherwise, this throws on Node.js incompatibility
	* (`ERR_INVALID_ARG_TYPE` on the connection listener)
	* @see https://github.com/node-fetch/node-fetch/issues/1376#issuecomment-966435555
	*/
	if (!(url instanceof URL$1)) url = url.toString();
	return [
		url,
		options,
		callback
	];
}

//#endregion
//#region src/interceptors/ClientRequest/index.ts
var ClientRequestInterceptor = class ClientRequestInterceptor extends Interceptor {
	static {
		this.symbol = Symbol("client-request-interceptor");
	}
	constructor() {
		super(ClientRequestInterceptor.symbol);
		this.onRequest = async ({ request, socket }) => {
			const controller = new RequestController(request, {
				passthrough() {
					socket.passthrough();
				},
				async respondWith(response) {
					await socket.respondWith(response);
				},
				errorWith(reason) {
					if (reason instanceof Error) socket.errorWith(reason);
				}
			});
			await handleRequest({
				request,
				requestId: Reflect.get(request, kRequestId),
				controller,
				emitter: this.emitter
			});
		};
		this.onResponse = async ({ requestId, request, response, isMockedResponse }) => {
			return emitAsync(this.emitter, "response", {
				requestId,
				request,
				response,
				isMockedResponse
			});
		};
	}
	setup() {
		const { ClientRequest: OriginalClientRequest, get: originalGet, request: originalRequest } = http;
		const { get: originalHttpsGet, request: originalHttpsRequest } = https;
		const onRequest = this.onRequest.bind(this);
		const onResponse = this.onResponse.bind(this);
		http.ClientRequest = new Proxy(http.ClientRequest, { construct: (target, args) => {
			const [url, options, callback] = normalizeClientRequestArgs("http:", args);
			options.agent = new (options.protocol === "https:" ? MockHttpsAgent : MockAgent)({
				customAgent: options.agent,
				onRequest,
				onResponse
			});
			return Reflect.construct(target, [
				url,
				options,
				callback
			]);
		} });
		http.request = new Proxy(http.request, { apply: (target, thisArg, args) => {
			const [url, options, callback] = normalizeClientRequestArgs("http:", args);
			options.agent = new MockAgent({
				customAgent: options.agent,
				onRequest,
				onResponse
			});
			return Reflect.apply(target, thisArg, [
				url,
				options,
				callback
			]);
		} });
		http.get = new Proxy(http.get, { apply: (target, thisArg, args) => {
			const [url, options, callback] = normalizeClientRequestArgs("http:", args);
			options.agent = new MockAgent({
				customAgent: options.agent,
				onRequest,
				onResponse
			});
			return Reflect.apply(target, thisArg, [
				url,
				options,
				callback
			]);
		} });
		https.request = new Proxy(https.request, { apply: (target, thisArg, args) => {
			const [url, options, callback] = normalizeClientRequestArgs("https:", args);
			options.agent = new MockHttpsAgent({
				customAgent: options.agent,
				onRequest,
				onResponse
			});
			return Reflect.apply(target, thisArg, [
				url,
				options,
				callback
			]);
		} });
		https.get = new Proxy(https.get, { apply: (target, thisArg, args) => {
			const [url, options, callback] = normalizeClientRequestArgs("https:", args);
			options.agent = new MockHttpsAgent({
				customAgent: options.agent,
				onRequest,
				onResponse
			});
			return Reflect.apply(target, thisArg, [
				url,
				options,
				callback
			]);
		} });
		recordRawFetchHeaders();
		this.subscriptions.push(() => {
			http.ClientRequest = OriginalClientRequest;
			http.get = originalGet;
			http.request = originalRequest;
			https.get = originalHttpsGet;
			https.request = originalHttpsRequest;
			restoreHeadersPrototype();
		});
	}
};

//#endregion
export { ClientRequestInterceptor as t };
//# sourceMappingURL=ClientRequest-dRpI9v1o.mjs.map