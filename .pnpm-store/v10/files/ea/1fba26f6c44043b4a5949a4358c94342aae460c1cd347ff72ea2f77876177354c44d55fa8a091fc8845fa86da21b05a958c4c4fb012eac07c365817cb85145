const require_chunk = require('./chunk-CbDLau6x.cjs');
const require_fetchUtils = require('./fetchUtils-umV5xXBy.cjs');
const require_getRawRequest = require('./getRawRequest-B6znU6il.cjs');
const require_handleRequest = require('./handleRequest-DVOthWJo.cjs');
const require_hasConfigurableGlobal = require('./hasConfigurableGlobal-BtHi5OlL.cjs');
let _open_draft_deferred_promise = require("@open-draft/deferred-promise");
let _open_draft_until = require("@open-draft/until");
let node_zlib = require("node:zlib");
node_zlib = require_chunk.__toESM(node_zlib);

//#region src/interceptors/fetch/utils/createNetworkError.ts
function createNetworkError(cause) {
	return Object.assign(/* @__PURE__ */ new TypeError("Failed to fetch"), { cause });
}

//#endregion
//#region src/interceptors/fetch/utils/followRedirect.ts
const REQUEST_BODY_HEADERS = [
	"content-encoding",
	"content-language",
	"content-location",
	"content-type",
	"content-length"
];
const kRedirectCount = Symbol("kRedirectCount");
/**
* @see https://github.com/nodejs/undici/blob/a6dac3149c505b58d2e6d068b97f4dc993da55f0/lib/web/fetch/index.js#L1210
*/
async function followFetchRedirect(request, response) {
	if (response.status !== 303 && request.body != null) return Promise.reject(createNetworkError());
	const requestUrl = new URL(request.url);
	let locationUrl;
	try {
		locationUrl = new URL(response.headers.get("location"), request.url);
	} catch (error) {
		return Promise.reject(createNetworkError(error));
	}
	if (!(locationUrl.protocol === "http:" || locationUrl.protocol === "https:")) return Promise.reject(createNetworkError("URL scheme must be a HTTP(S) scheme"));
	if (Reflect.get(request, kRedirectCount) > 20) return Promise.reject(createNetworkError("redirect count exceeded"));
	Object.defineProperty(request, kRedirectCount, { value: (Reflect.get(request, kRedirectCount) || 0) + 1 });
	if (request.mode === "cors" && (locationUrl.username || locationUrl.password) && !sameOrigin(requestUrl, locationUrl)) return Promise.reject(createNetworkError("cross origin not allowed for request mode \"cors\""));
	const requestInit = {};
	if ([301, 302].includes(response.status) && request.method === "POST" || response.status === 303 && !["HEAD", "GET"].includes(request.method)) {
		requestInit.method = "GET";
		requestInit.body = null;
		REQUEST_BODY_HEADERS.forEach((headerName) => {
			request.headers.delete(headerName);
		});
	}
	if (!sameOrigin(requestUrl, locationUrl)) {
		request.headers.delete("authorization");
		request.headers.delete("proxy-authorization");
		request.headers.delete("cookie");
		request.headers.delete("host");
	}
	/**
	* @note Undici "safely" extracts the request body.
	* I suspect we cannot dispatch this request again
	* since its body has been read and the stream is locked.
	*/
	requestInit.headers = request.headers;
	const finalResponse = await fetch(new Request(locationUrl, requestInit));
	Object.defineProperty(finalResponse, "redirected", {
		value: true,
		configurable: true
	});
	return finalResponse;
}
/**
* @see https://github.com/nodejs/undici/blob/a6dac3149c505b58d2e6d068b97f4dc993da55f0/lib/web/fetch/util.js#L761
*/
function sameOrigin(left, right) {
	if (left.origin === right.origin && left.origin === "null") return true;
	if (left.protocol === right.protocol && left.hostname === right.hostname && left.port === right.port) return true;
	return false;
}

//#endregion
//#region src/interceptors/fetch/utils/brotli-decompress.ts
var BrotliDecompressionStream = class extends TransformStream {
	constructor() {
		const decompress = node_zlib.default.createBrotliDecompress({
			flush: node_zlib.default.constants.BROTLI_OPERATION_FLUSH,
			finishFlush: node_zlib.default.constants.BROTLI_OPERATION_FLUSH
		});
		super({ async transform(chunk, controller) {
			const buffer = Buffer.from(chunk);
			const decompressed = await new Promise((resolve, reject) => {
				decompress.write(buffer, (error) => {
					if (error) reject(error);
				});
				decompress.flush();
				decompress.once("data", (data) => resolve(data));
				decompress.once("error", (error) => reject(error));
				decompress.once("end", () => controller.terminate());
			}).catch((error) => {
				controller.error(error);
			});
			controller.enqueue(decompressed);
		} });
	}
};

//#endregion
//#region src/interceptors/fetch/utils/decompression.ts
var PipelineStream = class extends TransformStream {
	constructor(transformStreams, ...strategies) {
		super({}, ...strategies);
		const readable = [super.readable, ...transformStreams].reduce((readable$1, transform) => readable$1.pipeThrough(transform));
		Object.defineProperty(this, "readable", { get() {
			return readable;
		} });
	}
};
function parseContentEncoding(contentEncoding) {
	return contentEncoding.toLowerCase().split(",").map((coding) => coding.trim());
}
function createDecompressionStream(contentEncoding) {
	if (contentEncoding === "") return null;
	const codings = parseContentEncoding(contentEncoding);
	if (codings.length === 0) return null;
	return new PipelineStream(codings.reduceRight((transformers, coding) => {
		if (coding === "gzip" || coding === "x-gzip") return transformers.concat(new DecompressionStream("gzip"));
		else if (coding === "deflate") return transformers.concat(new DecompressionStream("deflate"));
		else if (coding === "br") return transformers.concat(new BrotliDecompressionStream());
		else transformers.length = 0;
		return transformers;
	}, []));
}
function decompressResponse(response) {
	if (response.body === null) return null;
	const decompressionStream = createDecompressionStream(response.headers.get("content-encoding") || "");
	if (!decompressionStream) return null;
	response.body.pipeTo(decompressionStream.writable);
	return decompressionStream.readable;
}

//#endregion
//#region src/interceptors/fetch/index.ts
var FetchInterceptor = class FetchInterceptor extends require_fetchUtils.Interceptor {
	static {
		this.symbol = Symbol("fetch");
	}
	constructor() {
		super(FetchInterceptor.symbol);
	}
	checkEnvironment() {
		return require_hasConfigurableGlobal.hasConfigurableGlobal("fetch");
	}
	async setup() {
		const logger = this.logger.extend("setup");
		const pureFetch = globalThis.fetch;
		const fetchProxy = async (input, init) => {
			const requestId = require_fetchUtils.createRequestId();
			const request = new require_fetchUtils.FetchRequest(typeof input === "string" && typeof location !== "undefined" && !require_fetchUtils.canParseUrl(input) ? new URL(input, location.href) : input, init);
			/**
			* @note Set the raw request only if a Request instance was provided to fetch.
			*/
			if (input instanceof Request) require_getRawRequest.setRawRequest(request, input);
			const responsePromise = new _open_draft_deferred_promise.DeferredPromise();
			const controller = new require_fetchUtils.RequestController(request, {
				passthrough: async () => {
					this.logger.info("request has not been handled, passthrough...");
					/**
					* @note Clone the request instance right before performing it.
					* This preserves any modifications made to the intercepted request
					* in the "request" listener. This also allows the user to read the
					* request body in the "response" listener (otherwise "unusable").
					*/
					const requestCloneForResponseEvent = request.clone();
					const { error: responseError, data: originalResponse } = await (0, _open_draft_until.until)(() => pureFetch(request));
					if (responseError) return responsePromise.reject(responseError);
					this.logger.info("original fetch performed", originalResponse);
					if (this.emitter.listenerCount("response") > 0) {
						this.logger.info("emitting the \"response\" event...");
						const responseClone = require_fetchUtils.FetchResponse.clone(originalResponse);
						await require_handleRequest.emitAsync(this.emitter, "response", {
							response: responseClone,
							isMockedResponse: false,
							request: requestCloneForResponseEvent,
							requestId
						});
					}
					responsePromise.resolve(originalResponse);
				},
				respondWith: async (rawResponse) => {
					if (require_handleRequest.isResponseError(rawResponse)) {
						this.logger.info("request has errored!", { response: rawResponse });
						responsePromise.reject(createNetworkError(rawResponse));
						return;
					}
					this.logger.info("received mocked response!", { rawResponse });
					const response = new require_fetchUtils.FetchResponse(decompressResponse(rawResponse) || rawResponse.body, {
						url: request.url,
						status: rawResponse.status,
						statusText: rawResponse.statusText,
						headers: rawResponse.headers
					});
					/**
					* Undici's handling of following redirect responses.
					* Treat the "manual" redirect mode as a regular mocked response.
					* This way, the client can manually follow the redirect it receives.
					* @see https://github.com/nodejs/undici/blob/a6dac3149c505b58d2e6d068b97f4dc993da55f0/lib/web/fetch/index.js#L1173
					*/
					if (require_fetchUtils.FetchResponse.isRedirectResponse(response.status)) {
						if (request.redirect === "error") {
							responsePromise.reject(createNetworkError("unexpected redirect"));
							return;
						}
						if (request.redirect === "follow") {
							followFetchRedirect(request, response).then((response$1) => {
								responsePromise.resolve(response$1);
							}, (reason) => {
								responsePromise.reject(reason);
							});
							return;
						}
					}
					if (this.emitter.listenerCount("response") > 0) {
						this.logger.info("emitting the \"response\" event...");
						await require_handleRequest.emitAsync(this.emitter, "response", {
							response: require_fetchUtils.FetchResponse.clone(response),
							isMockedResponse: true,
							request,
							requestId
						});
					}
					responsePromise.resolve(response);
				},
				errorWith: (reason) => {
					this.logger.info("request has been aborted!", { reason });
					responsePromise.reject(reason);
				}
			});
			this.logger.info("[%s] %s", request.method, request.url);
			this.logger.info("awaiting for the mocked response...");
			this.logger.info("emitting the \"request\" event for %s listener(s)...", this.emitter.listenerCount("request"));
			await require_handleRequest.handleRequest({
				request,
				requestId,
				emitter: this.emitter,
				controller
			});
			return responsePromise;
		};
		logger.info("patching global fetch...");
		this.subscriptions.push(require_hasConfigurableGlobal.patchesRegistry.applyPatch(globalThis, "fetch", () => fetchProxy));
		logger.info("global fetch patched!", globalThis.fetch.name);
	}
};

//#endregion
Object.defineProperty(exports, 'FetchInterceptor', {
  enumerable: true,
  get: function () {
    return FetchInterceptor;
  }
});
//# sourceMappingURL=fetch-znfXVEPe.cjs.map