import { n as INTERNAL_REQUEST_ID_HEADER_NAME, r as Interceptor, t as createRequestId } from "./createRequestId-DYCsFHOi.mjs";
import { i as FetchResponse, n as setRawRequest, o as RequestController, r as FetchRequest } from "./getRawRequest-B1BqgWG6.mjs";
import { n as encodeBuffer, r as toArrayBuffer, t as decodeBuffer } from "./bufferUtils-BiiO6HZv.mjs";
import { n as patchesRegistry, t as hasConfigurableGlobal } from "./hasConfigurableGlobal-FTYwno1G.mjs";
import { n as isResponseError, t as handleRequest } from "./handleRequest-BHrC8Flw.mjs";
import { invariant } from "outvariant";
import { isNodeProcess } from "is-node-process";

//#region src/interceptors/XMLHttpRequest/utils/concatArrayBuffer.ts
/**
* Concatenate two `Uint8Array` buffers.
*/
function concatArrayBuffer(left, right) {
	const result = new Uint8Array(left.byteLength + right.byteLength);
	result.set(left, 0);
	result.set(right, left.byteLength);
	return result;
}

//#endregion
//#region src/interceptors/XMLHttpRequest/polyfills/EventPolyfill.ts
var EventPolyfill = class {
	constructor(type, options) {
		this.NONE = 0;
		this.CAPTURING_PHASE = 1;
		this.AT_TARGET = 2;
		this.BUBBLING_PHASE = 3;
		this.type = "";
		this.srcElement = null;
		this.currentTarget = null;
		this.eventPhase = 0;
		this.isTrusted = true;
		this.composed = false;
		this.cancelable = true;
		this.defaultPrevented = false;
		this.bubbles = true;
		this.lengthComputable = true;
		this.loaded = 0;
		this.total = 0;
		this.cancelBubble = false;
		this.returnValue = true;
		this.type = type;
		this.target = options?.target || null;
		this.currentTarget = options?.currentTarget || null;
		this.timeStamp = Date.now();
	}
	composedPath() {
		return [];
	}
	initEvent(type, bubbles, cancelable) {
		this.type = type;
		this.bubbles = !!bubbles;
		this.cancelable = !!cancelable;
	}
	preventDefault() {
		this.defaultPrevented = true;
	}
	stopPropagation() {}
	stopImmediatePropagation() {}
};

//#endregion
//#region src/interceptors/XMLHttpRequest/polyfills/ProgressEventPolyfill.ts
var ProgressEventPolyfill = class extends EventPolyfill {
	constructor(type, init) {
		super(type);
		this.lengthComputable = init?.lengthComputable || false;
		this.composed = init?.composed || false;
		this.loaded = init?.loaded || 0;
		this.total = init?.total || 0;
	}
};

//#endregion
//#region src/interceptors/XMLHttpRequest/utils/createEvent.ts
const SUPPORTS_PROGRESS_EVENT = typeof ProgressEvent !== "undefined";
function createEvent(target, type, init) {
	const progressEvents = [
		"error",
		"progress",
		"loadstart",
		"loadend",
		"load",
		"timeout",
		"abort"
	];
	/**
	* `ProgressEvent` is not supported in React Native.
	* @see https://github.com/mswjs/interceptors/issues/40
	*/
	const ProgressEventClass = SUPPORTS_PROGRESS_EVENT ? ProgressEvent : ProgressEventPolyfill;
	return progressEvents.includes(type) ? new ProgressEventClass(type, {
		lengthComputable: true,
		loaded: init?.loaded || 0,
		total: init?.total || 0
	}) : new EventPolyfill(type, {
		target,
		currentTarget: target
	});
}

//#endregion
//#region src/utils/findPropertySource.ts
/**
* Returns the source object of the given property on the target object
* (the target itself, any parent in its prototype, or null).
*/
function findPropertySource(target, propertyName) {
	if (!(propertyName in target)) return null;
	if (Object.prototype.hasOwnProperty.call(target, propertyName)) return target;
	const prototype = Reflect.getPrototypeOf(target);
	return prototype ? findPropertySource(prototype, propertyName) : null;
}

//#endregion
//#region src/utils/createProxy.ts
function createProxy(target, options) {
	return new Proxy(target, optionsToProxyHandler(options));
}
function optionsToProxyHandler(options) {
	const { constructorCall, methodCall, getProperty, setProperty } = options;
	const handler = {};
	if (typeof constructorCall !== "undefined") handler.construct = function(target, args, newTarget) {
		const next = Reflect.construct.bind(null, target, args, newTarget);
		return constructorCall.call(newTarget, args, next);
	};
	handler.set = function(target, propertyName, nextValue) {
		const next = () => {
			const propertySource = findPropertySource(target, propertyName) || target;
			const ownDescriptors = Reflect.getOwnPropertyDescriptor(propertySource, propertyName);
			if (typeof ownDescriptors?.set !== "undefined") {
				ownDescriptors.set.apply(target, [nextValue]);
				return true;
			}
			return Reflect.defineProperty(propertySource, propertyName, {
				writable: true,
				enumerable: true,
				configurable: true,
				value: nextValue
			});
		};
		if (typeof setProperty !== "undefined") return setProperty.call(target, [propertyName, nextValue], next);
		return next();
	};
	handler.get = function(target, propertyName, receiver) {
		/**
		* @note Using `Reflect.get()` here causes "TypeError: Illegal invocation".
		*/
		const next = () => target[propertyName];
		const value = typeof getProperty !== "undefined" ? getProperty.call(target, [propertyName, receiver], next) : next();
		if (typeof value === "function") return (...args) => {
			const next$1 = value.bind(target, ...args);
			if (typeof methodCall !== "undefined") return methodCall.call(target, [propertyName, args], next$1);
			return next$1();
		};
		return value;
	};
	return handler;
}

//#endregion
//#region src/interceptors/XMLHttpRequest/utils/isDomParserSupportedType.ts
function isDomParserSupportedType(type) {
	return [
		"application/xhtml+xml",
		"application/xml",
		"image/svg+xml",
		"text/html",
		"text/xml"
	].some((supportedType) => {
		return type.startsWith(supportedType);
	});
}

//#endregion
//#region src/utils/parseJson.ts
/**
* Parses a given string into JSON.
* Gracefully handles invalid JSON by returning `null`.
*/
function parseJson(data) {
	try {
		return JSON.parse(data);
	} catch (_) {
		return null;
	}
}

//#endregion
//#region src/interceptors/XMLHttpRequest/utils/createResponse.ts
/**
* Creates a Fetch API `Response` instance from the given
* `XMLHttpRequest` instance and a response body.
*/
function createResponse(request, body) {
	return new FetchResponse(FetchResponse.isResponseWithBody(request.status) ? body : null, {
		url: request.responseURL,
		status: request.status,
		statusText: request.statusText,
		headers: createHeadersFromXMLHttpRequestHeaders(request.getAllResponseHeaders())
	});
}
function createHeadersFromXMLHttpRequestHeaders(headersString) {
	const headers = new Headers();
	const lines = headersString.split(/[\r\n]+/);
	for (const line of lines) {
		if (line.trim() === "") continue;
		const [name, ...parts] = line.split(": ");
		const value = parts.join(": ");
		headers.append(name, value);
	}
	return headers;
}

//#endregion
//#region src/interceptors/XMLHttpRequest/utils/getBodyByteLength.ts
/**
* Return a total byte length of the given request/response body.
* If the `Content-Length` header is present, it will be used as the byte length.
*/
async function getBodyByteLength(input) {
	const explicitContentLength = input.headers.get("content-length");
	if (explicitContentLength != null && explicitContentLength !== "") return Number(explicitContentLength);
	return (await input.arrayBuffer()).byteLength;
}

//#endregion
//#region src/interceptors/XMLHttpRequest/XMLHttpRequestController.ts
const kIsRequestHandled = Symbol("kIsRequestHandled");
const IS_NODE = isNodeProcess();
const kFetchRequest = Symbol("kFetchRequest");
/**
* An `XMLHttpRequest` instance controller that allows us
* to handle any given request instance (e.g. responding to it).
*/
var XMLHttpRequestController = class {
	constructor(initialRequest, logger) {
		this.initialRequest = initialRequest;
		this.logger = logger;
		this.method = "GET";
		this.url = null;
		this[kIsRequestHandled] = false;
		this.events = /* @__PURE__ */ new Map();
		this.uploadEvents = /* @__PURE__ */ new Map();
		this.requestId = createRequestId();
		this.requestHeaders = new Headers();
		this.responseBuffer = new Uint8Array();
		this.request = createProxy(initialRequest, {
			setProperty: ([propertyName, nextValue], invoke) => {
				switch (propertyName) {
					case "ontimeout": {
						const eventName = propertyName.slice(2);
						/**
						* @note Proxy callbacks to event listeners because JSDOM has trouble
						* translating these properties to callbacks. It seemed to be operating
						* on events exclusively.
						*/
						this.request.addEventListener(eventName, nextValue);
						return invoke();
					}
					default: return invoke();
				}
			},
			methodCall: ([methodName, args], invoke) => {
				switch (methodName) {
					case "open": {
						const [method, url] = args;
						if (typeof url === "undefined") {
							this.method = "GET";
							this.url = toAbsoluteUrl(method);
						} else {
							this.method = method;
							this.url = toAbsoluteUrl(url);
						}
						this.logger = this.logger.extend(`${this.method} ${this.url.href}`);
						this.logger.info("open", this.method, this.url.href);
						return invoke();
					}
					case "addEventListener": {
						const [eventName, listener] = args;
						this.registerEvent(eventName, listener);
						this.logger.info("addEventListener", eventName, listener);
						return invoke();
					}
					case "setRequestHeader": {
						const [name, value] = args;
						this.requestHeaders.set(name, value);
						this.logger.info("setRequestHeader", name, value);
						return invoke();
					}
					case "send": {
						const [body] = args;
						this.request.addEventListener("load", () => {
							if (typeof this.onResponse !== "undefined") {
								const fetchResponse = createResponse(
									this.request,
									/**
									* The `response` property is the right way to read
									* the ambiguous response body, as the request's "responseType" may differ.
									* @see https://xhr.spec.whatwg.org/#the-response-attribute
									*/
									this.request.response
								);
								this.onResponse.call(this, {
									response: fetchResponse,
									isMockedResponse: this[kIsRequestHandled],
									request: fetchRequest,
									requestId: this.requestId
								});
							}
						});
						const requestBody = typeof body === "string" ? encodeBuffer(body) : body;
						const fetchRequest = this.toFetchApiRequest(requestBody);
						this[kFetchRequest] = fetchRequest.clone();
						/**
						* @note Start request handling on the next tick so that the user
						* could add event listeners for "loadend" before the interceptor fires it.
						*/
						queueMicrotask(() => {
							(this.onRequest?.call(this, {
								request: fetchRequest,
								requestId: this.requestId
							}) || Promise.resolve()).finally(() => {
								if (!this[kIsRequestHandled]) {
									this.logger.info("request callback settled but request has not been handled (readystate %d), performing as-is...", this.request.readyState);
									/**
									* @note Set the intercepted request ID on the original request in Node.js
									* so that if it triggers any other interceptors, they don't attempt
									* to process it once again.
									*
									* For instance, XMLHttpRequest is often implemented via "http.ClientRequest"
									* and we don't want for both XHR and ClientRequest interceptors to
									* handle the same request at the same time (e.g. emit the "response" event twice).
									*/
									if (IS_NODE) this.request.setRequestHeader(INTERNAL_REQUEST_ID_HEADER_NAME, this.requestId);
									return invoke();
								}
							});
						});
						break;
					}
					default: return invoke();
				}
			}
		});
		/**
		* Proxy the `.upload` property to gather the event listeners/callbacks.
		*/
		define(this.request, "upload", createProxy(this.request.upload, {
			setProperty: ([propertyName, nextValue], invoke) => {
				switch (propertyName) {
					case "onloadstart":
					case "onprogress":
					case "onaboart":
					case "onerror":
					case "onload":
					case "ontimeout":
					case "onloadend": {
						const eventName = propertyName.slice(2);
						this.registerUploadEvent(eventName, nextValue);
					}
				}
				return invoke();
			},
			methodCall: ([methodName, args], invoke) => {
				switch (methodName) {
					case "addEventListener": {
						const [eventName, listener] = args;
						this.registerUploadEvent(eventName, listener);
						this.logger.info("upload.addEventListener", eventName, listener);
						return invoke();
					}
				}
			}
		}));
	}
	registerEvent(eventName, listener) {
		const nextEvents = (this.events.get(eventName) || []).concat(listener);
		this.events.set(eventName, nextEvents);
		this.logger.info("registered event \"%s\"", eventName, listener);
	}
	registerUploadEvent(eventName, listener) {
		const nextEvents = (this.uploadEvents.get(eventName) || []).concat(listener);
		this.uploadEvents.set(eventName, nextEvents);
		this.logger.info("registered upload event \"%s\"", eventName, listener);
	}
	/**
	* Responds to the current request with the given
	* Fetch API `Response` instance.
	*/
	async respondWith(response) {
		/**
		* @note Since `XMLHttpRequestController` delegates the handling of the responses
		* to the "load" event listener that doesn't distinguish between the mocked and original
		* responses, mark the request that had a mocked response with a corresponding symbol.
		*
		* Mark this request as having a mocked response immediately since
		* calculating request/response total body length is asynchronous.
		*/
		this[kIsRequestHandled] = true;
		/**
		* Dispatch request upload events for requests with a body.
		* @see https://github.com/mswjs/interceptors/issues/573
		*/
		if (this[kFetchRequest]) {
			const totalRequestBodyLength = await getBodyByteLength(this[kFetchRequest]);
			this.trigger("loadstart", this.request.upload, {
				loaded: 0,
				total: totalRequestBodyLength
			});
			this.trigger("progress", this.request.upload, {
				loaded: totalRequestBodyLength,
				total: totalRequestBodyLength
			});
			this.trigger("load", this.request.upload, {
				loaded: totalRequestBodyLength,
				total: totalRequestBodyLength
			});
			this.trigger("loadend", this.request.upload, {
				loaded: totalRequestBodyLength,
				total: totalRequestBodyLength
			});
		}
		this.logger.info("responding with a mocked response: %d %s", response.status, response.statusText);
		define(this.request, "status", response.status);
		define(this.request, "statusText", response.statusText);
		define(this.request, "responseURL", this.url.href);
		this.request.getResponseHeader = new Proxy(this.request.getResponseHeader, { apply: (_, __, args) => {
			this.logger.info("getResponseHeader", args[0]);
			if (this.request.readyState < this.request.HEADERS_RECEIVED) {
				this.logger.info("headers not received yet, returning null");
				return null;
			}
			const headerValue = response.headers.get(args[0]);
			this.logger.info("resolved response header \"%s\" to", args[0], headerValue);
			return headerValue;
		} });
		this.request.getAllResponseHeaders = new Proxy(this.request.getAllResponseHeaders, { apply: () => {
			this.logger.info("getAllResponseHeaders");
			if (this.request.readyState < this.request.HEADERS_RECEIVED) {
				this.logger.info("headers not received yet, returning empty string");
				return "";
			}
			const allHeaders = Array.from(response.headers.entries()).map(([headerName, headerValue]) => {
				return `${headerName}: ${headerValue}`;
			}).join("\r\n");
			this.logger.info("resolved all response headers to", allHeaders);
			return allHeaders;
		} });
		Object.defineProperties(this.request, {
			response: {
				enumerable: true,
				configurable: false,
				get: () => this.response
			},
			responseText: {
				enumerable: true,
				configurable: false,
				get: () => this.responseText
			},
			responseXML: {
				enumerable: true,
				configurable: false,
				get: () => this.responseXML
			}
		});
		const totalResponseBodyLength = await getBodyByteLength(response.clone());
		this.logger.info("calculated response body length", totalResponseBodyLength);
		this.trigger("loadstart", this.request, {
			loaded: 0,
			total: totalResponseBodyLength
		});
		this.setReadyState(this.request.HEADERS_RECEIVED);
		this.setReadyState(this.request.LOADING);
		const finalizeResponse = () => {
			this.logger.info("finalizing the mocked response...");
			this.setReadyState(this.request.DONE);
			this.trigger("load", this.request, {
				loaded: this.responseBuffer.byteLength,
				total: totalResponseBodyLength
			});
			this.trigger("loadend", this.request, {
				loaded: this.responseBuffer.byteLength,
				total: totalResponseBodyLength
			});
		};
		if (response.body) {
			this.logger.info("mocked response has body, streaming...");
			const reader = response.body.getReader();
			const readNextResponseBodyChunk = async () => {
				const { value, done } = await reader.read();
				if (done) {
					this.logger.info("response body stream done!");
					finalizeResponse();
					return;
				}
				if (value) {
					this.logger.info("read response body chunk:", value);
					this.responseBuffer = concatArrayBuffer(this.responseBuffer, value);
					this.trigger("progress", this.request, {
						loaded: this.responseBuffer.byteLength,
						total: totalResponseBodyLength
					});
				}
				readNextResponseBodyChunk();
			};
			readNextResponseBodyChunk();
		} else finalizeResponse();
	}
	responseBufferToText() {
		return decodeBuffer(this.responseBuffer);
	}
	get response() {
		this.logger.info("getResponse (responseType: %s)", this.request.responseType);
		if (this.request.readyState !== this.request.DONE) return null;
		switch (this.request.responseType) {
			case "json": {
				const responseJson = parseJson(this.responseBufferToText());
				this.logger.info("resolved response JSON", responseJson);
				return responseJson;
			}
			case "arraybuffer": {
				const arrayBuffer = toArrayBuffer(this.responseBuffer);
				this.logger.info("resolved response ArrayBuffer", arrayBuffer);
				return arrayBuffer;
			}
			case "blob": {
				const mimeType = this.request.getResponseHeader("Content-Type") || "text/plain";
				const responseBlob = new Blob([this.responseBufferToText()], { type: mimeType });
				this.logger.info("resolved response Blob (mime type: %s)", responseBlob, mimeType);
				return responseBlob;
			}
			default: {
				const responseText = this.responseBufferToText();
				this.logger.info("resolving \"%s\" response type as text", this.request.responseType, responseText);
				return responseText;
			}
		}
	}
	get responseText() {
		/**
		* Throw when trying to read the response body as text when the
		* "responseType" doesn't expect text. This just respects the spec better.
		* @see https://xhr.spec.whatwg.org/#the-responsetext-attribute
		*/
		invariant(this.request.responseType === "" || this.request.responseType === "text", "InvalidStateError: The object is in invalid state.");
		if (this.request.readyState !== this.request.LOADING && this.request.readyState !== this.request.DONE) return "";
		const responseText = this.responseBufferToText();
		this.logger.info("getResponseText: \"%s\"", responseText);
		return responseText;
	}
	get responseXML() {
		invariant(this.request.responseType === "" || this.request.responseType === "document", "InvalidStateError: The object is in invalid state.");
		if (this.request.readyState !== this.request.DONE) return null;
		const contentType = this.request.getResponseHeader("Content-Type") || "";
		if (typeof DOMParser === "undefined") {
			console.warn("Cannot retrieve XMLHttpRequest response body as XML: DOMParser is not defined. You are likely using an environment that is not browser or does not polyfill browser globals correctly.");
			return null;
		}
		if (isDomParserSupportedType(contentType)) return new DOMParser().parseFromString(this.responseBufferToText(), contentType);
		return null;
	}
	errorWith(error) {
		/**
		* @note Mark this request as handled even if it received a mock error.
		* This prevents the controller from trying to perform this request as-is.
		*/
		this[kIsRequestHandled] = true;
		this.logger.info("responding with an error");
		this.setReadyState(this.request.DONE);
		this.trigger("error", this.request);
		this.trigger("loadend", this.request);
	}
	/**
	* Transitions this request's `readyState` to the given one.
	*/
	setReadyState(nextReadyState) {
		this.logger.info("setReadyState: %d -> %d", this.request.readyState, nextReadyState);
		if (this.request.readyState === nextReadyState) {
			this.logger.info("ready state identical, skipping transition...");
			return;
		}
		define(this.request, "readyState", nextReadyState);
		this.logger.info("set readyState to: %d", nextReadyState);
		if (nextReadyState !== this.request.UNSENT) {
			this.logger.info("triggering \"readystatechange\" event...");
			this.trigger("readystatechange", this.request);
		}
	}
	/**
	* Triggers given event on the `XMLHttpRequest` instance.
	*/
	trigger(eventName, target, options) {
		const callback = target[`on${eventName}`];
		const event = createEvent(target, eventName, options);
		this.logger.info("trigger \"%s\"", eventName, options || "");
		if (typeof callback === "function") {
			this.logger.info("found a direct \"%s\" callback, calling...", eventName);
			callback.call(target, event);
		}
		const events = target instanceof XMLHttpRequestUpload ? this.uploadEvents : this.events;
		for (const [registeredEventName, listeners] of events) if (registeredEventName === eventName) {
			this.logger.info("found %d listener(s) for \"%s\" event, calling...", listeners.length, eventName);
			listeners.forEach((listener) => listener.call(target, event));
		}
	}
	/**
	* Converts this `XMLHttpRequest` instance into a Fetch API `Request` instance.
	*/
	toFetchApiRequest(body) {
		this.logger.info("converting request to a Fetch API Request...");
		const resolvedBody = body instanceof Document ? body.documentElement.innerText : body;
		const fetchRequest = new FetchRequest(this.url.href, {
			method: this.method,
			headers: this.requestHeaders,
			credentials: this.request.withCredentials ? "include" : "same-origin",
			body: ["GET", "HEAD"].includes(this.method.toUpperCase()) ? null : resolvedBody
		});
		define(fetchRequest, "headers", createProxy(fetchRequest.headers, { methodCall: ([methodName, args], invoke) => {
			switch (methodName) {
				case "append":
				case "set": {
					const [headerName, headerValue] = args;
					this.request.setRequestHeader(headerName, headerValue);
					break;
				}
				case "delete": {
					const [headerName] = args;
					console.warn(`XMLHttpRequest: Cannot remove a "${headerName}" header from the Fetch API representation of the "${fetchRequest.method} ${fetchRequest.url}" request. XMLHttpRequest headers cannot be removed.`);
					break;
				}
			}
			return invoke();
		} }));
		setRawRequest(fetchRequest, this.request);
		this.logger.info("converted request to a Fetch API Request!", fetchRequest);
		return fetchRequest;
	}
};
function toAbsoluteUrl(url) {
	/**
	* @note XMLHttpRequest interceptor may run in environments
	* that implement XMLHttpRequest but don't implement "location"
	* (for example, React Native). If that's the case, return the
	* input URL as-is (nothing to be relative to).
	* @see https://github.com/mswjs/msw/issues/1777
	*/
	if (typeof location === "undefined") return new URL(url);
	return new URL(url.toString(), location.href);
}
function define(target, property, value) {
	Reflect.defineProperty(target, property, {
		writable: true,
		enumerable: true,
		value
	});
}

//#endregion
//#region src/interceptors/XMLHttpRequest/XMLHttpRequestProxy.ts
/**
* Create a proxied `XMLHttpRequest` class.
* The proxied class establishes spies on certain methods,
* allowing us to intercept requests and respond to them.
*/
function createXMLHttpRequestProxy({ emitter, logger }) {
	return new Proxy(globalThis.XMLHttpRequest, { construct(target, args, newTarget) {
		logger.info("constructed new XMLHttpRequest");
		const originalRequest = Reflect.construct(target, args, newTarget);
		/**
		* @note Forward prototype descriptors onto the proxied object.
		* XMLHttpRequest is implemented in JSDOM in a way that assigns
		* a bunch of descriptors, like "set responseType()" on the prototype.
		* With this propagation, we make sure that those descriptors trigger
		* when the user operates with the proxied request instance.
		*/
		const prototypeDescriptors = Object.getOwnPropertyDescriptors(target.prototype);
		for (const propertyName in prototypeDescriptors) Reflect.defineProperty(originalRequest, propertyName, prototypeDescriptors[propertyName]);
		const xhrRequestController = new XMLHttpRequestController(originalRequest, logger);
		xhrRequestController.onRequest = async function({ request, requestId }) {
			const controller = new RequestController(request, {
				passthrough: () => {
					this.logger.info("no mocked response received, performing request as-is...");
				},
				respondWith: async (response) => {
					if (isResponseError(response)) {
						this.errorWith(/* @__PURE__ */ new TypeError("Network error"));
						return;
					}
					await this.respondWith(response);
				},
				errorWith: (reason) => {
					this.logger.info("request errored!", { error: reason });
					if (reason instanceof Error) this.errorWith(reason);
				}
			});
			this.logger.info("awaiting mocked response...");
			this.logger.info("emitting the \"request\" event for %s listener(s)...", emitter.listenerCount("request"));
			await handleRequest({
				request,
				requestId,
				controller,
				emitter
			});
		};
		xhrRequestController.onResponse = async function({ response, isMockedResponse, request, requestId }) {
			this.logger.info("emitting the \"response\" event for %s listener(s)...", emitter.listenerCount("response"));
			emitter.emit("response", {
				response,
				isMockedResponse,
				request,
				requestId
			});
		};
		return xhrRequestController.request;
	} });
}

//#endregion
//#region src/interceptors/XMLHttpRequest/index.ts
var XMLHttpRequestInterceptor = class XMLHttpRequestInterceptor extends Interceptor {
	static {
		this.interceptorSymbol = Symbol("xhr");
	}
	constructor() {
		super(XMLHttpRequestInterceptor.interceptorSymbol);
	}
	checkEnvironment() {
		return hasConfigurableGlobal("XMLHttpRequest");
	}
	setup() {
		const logger = this.logger.extend("setup");
		logger.info("patching global XMLHttpRequest...");
		this.subscriptions.push(patchesRegistry.applyPatch(globalThis, "XMLHttpRequest", () => {
			return createXMLHttpRequestProxy({
				emitter: this.emitter,
				logger: this.logger
			});
		}));
		logger.info("global XMLHttpRequest patched!", globalThis.XMLHttpRequest.name);
	}
};

//#endregion
export { XMLHttpRequestInterceptor as t };
//# sourceMappingURL=XMLHttpRequest-DP9ps_69.mjs.map