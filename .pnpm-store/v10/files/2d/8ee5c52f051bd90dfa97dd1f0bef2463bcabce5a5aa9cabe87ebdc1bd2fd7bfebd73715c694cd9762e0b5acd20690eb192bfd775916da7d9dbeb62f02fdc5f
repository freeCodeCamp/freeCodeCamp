const require_createRequestId = require('./createRequestId-DOf8Ktjs.cjs');
const require_getRawRequest = require('./getRawRequest-DdfaiPVH.cjs');
const require_bufferUtils = require('./bufferUtils-Uc0eRItL.cjs');
const require_resolveWebSocketUrl = require('./resolveWebSocketUrl-6K6EgqsA.cjs');

//#region src/BatchInterceptor.ts
/**
* A batch interceptor that exposes a single interface
* to apply and operate with multiple interceptors at once.
*/
var BatchInterceptor = class BatchInterceptor extends require_createRequestId.Interceptor {
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
exports.BatchInterceptor = BatchInterceptor;
exports.FetchRequest = require_getRawRequest.FetchRequest;
exports.FetchResponse = require_getRawRequest.FetchResponse;
exports.INTERNAL_REQUEST_ID_HEADER_NAME = require_createRequestId.INTERNAL_REQUEST_ID_HEADER_NAME;
exports.Interceptor = require_createRequestId.Interceptor;
exports.InterceptorReadyState = require_createRequestId.InterceptorReadyState;
exports.RequestController = require_getRawRequest.RequestController;
exports.createRequestId = require_createRequestId.createRequestId;
exports.decodeBuffer = require_bufferUtils.decodeBuffer;
exports.deleteGlobalSymbol = require_createRequestId.deleteGlobalSymbol;
exports.encodeBuffer = require_bufferUtils.encodeBuffer;
exports.getCleanUrl = getCleanUrl;
exports.getGlobalSymbol = require_createRequestId.getGlobalSymbol;
exports.getRawRequest = require_getRawRequest.getRawRequest;
exports.resolveWebSocketUrl = require_resolveWebSocketUrl.resolveWebSocketUrl;
//# sourceMappingURL=index.cjs.map