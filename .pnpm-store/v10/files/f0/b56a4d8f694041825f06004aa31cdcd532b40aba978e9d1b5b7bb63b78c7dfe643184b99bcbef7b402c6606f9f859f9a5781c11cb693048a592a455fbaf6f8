import { a as deleteGlobalSymbol, i as InterceptorReadyState, n as INTERNAL_REQUEST_ID_HEADER_NAME, o as getGlobalSymbol, r as Interceptor, t as createRequestId } from "./createRequestId-DYCsFHOi.mjs";
import { i as FetchResponse, o as RequestController, r as FetchRequest, t as getRawRequest } from "./getRawRequest-B1BqgWG6.mjs";
import { n as encodeBuffer, t as decodeBuffer } from "./bufferUtils-BiiO6HZv.mjs";
import { t as resolveWebSocketUrl } from "./resolveWebSocketUrl-C83-x9iE.mjs";

//#region src/BatchInterceptor.ts
/**
* A batch interceptor that exposes a single interface
* to apply and operate with multiple interceptors at once.
*/
var BatchInterceptor = class BatchInterceptor extends Interceptor {
	constructor(options) {
		BatchInterceptor.symbol = Symbol(options.name);
		super(BatchInterceptor.symbol);
		this.interceptors = options.interceptors;
	}
	setup() {
		const logger = this.logger.extend("setup");
		logger.info("applying all %d interceptors...", this.interceptors.length);
		for (const interceptor of this.interceptors) {
			logger.info("applying \"%s\" interceptor...", interceptor.constructor.name);
			interceptor.apply();
			logger.info("adding interceptor dispose subscription");
			this.subscriptions.push(() => interceptor.dispose());
		}
	}
	on(event, listener) {
		for (const interceptor of this.interceptors) interceptor.on(event, listener);
		return this;
	}
	once(event, listener) {
		for (const interceptor of this.interceptors) interceptor.once(event, listener);
		return this;
	}
	off(event, listener) {
		for (const interceptor of this.interceptors) interceptor.off(event, listener);
		return this;
	}
	removeAllListeners(event) {
		for (const interceptors of this.interceptors) interceptors.removeAllListeners(event);
		return this;
	}
};

//#endregion
//#region src/utils/getCleanUrl.ts
/**
* Removes query parameters and hashes from a given URL.
*/
function getCleanUrl(url, isAbsolute = true) {
	return [isAbsolute && url.origin, url.pathname].filter(Boolean).join("");
}

//#endregion
export { BatchInterceptor, FetchRequest, FetchResponse, INTERNAL_REQUEST_ID_HEADER_NAME, Interceptor, InterceptorReadyState, RequestController, createRequestId, decodeBuffer, deleteGlobalSymbol, encodeBuffer, getCleanUrl, getGlobalSymbol, getRawRequest, resolveWebSocketUrl };
//# sourceMappingURL=index.mjs.map