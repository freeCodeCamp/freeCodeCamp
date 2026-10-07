const require_fetchUtils = require('./fetchUtils-umV5xXBy.cjs');
const require_BatchInterceptor = require('./BatchInterceptor-Z1lwK23r.cjs');
const require_bufferUtils = require('./bufferUtils-S5_-2eN4.cjs');
const require_getRawRequest = require('./getRawRequest-B6znU6il.cjs');

//#region src/utils/getCleanUrl.ts
/**
* Removes query parameters and hashes from a given URL.
*/
function getCleanUrl(url, isAbsolute = true) {
	return [isAbsolute && url.origin, url.pathname].filter(Boolean).join("");
}

//#endregion
//#region src/utils/resolveWebSocketUrl.ts
/**
* Resolve potentially relative WebSocket URLs the same way
* the browser does (replace the protocol, use the origin, etc).
*
* @see https://websockets.spec.whatwg.org//#dom-websocket-websocket
*/
function resolveWebSocketUrl(url) {
	if (typeof url === "string") return resolveWebSocketUrl(new URL(url, typeof location !== "undefined" ? location.href : void 0));
	if (url.protocol === "http:") url.protocol = "ws:";
	else if (url.protocol === "https:") url.protocol = "wss:";
	if (url.protocol !== "ws:" && url.protocol !== "wss:")
 /**
	* @note These errors are modeled after the browser errors.
	* The exact error messages aren't provided in the specification.
	* Node.js uses more obscure error messages that I don't wish to replicate.
	*/
	throw new SyntaxError(`Failed to construct 'WebSocket': The URL's scheme must be either 'http', 'https', 'ws', or 'wss'. '${url.protocol}' is not allowed.`);
	if (url.hash !== "") throw new SyntaxError(`Failed to construct 'WebSocket': The URL contains a fragment identifier ('${url.hash}'). Fragment identifiers are not allowed in WebSocket URLs.`);
	return url.href;
}

//#endregion
exports.BatchInterceptor = require_BatchInterceptor.BatchInterceptor;
exports.FetchRequest = require_fetchUtils.FetchRequest;
exports.FetchResponse = require_fetchUtils.FetchResponse;
exports.INTERNAL_REQUEST_ID_HEADER_NAME = require_fetchUtils.INTERNAL_REQUEST_ID_HEADER_NAME;
exports.Interceptor = require_fetchUtils.Interceptor;
exports.InterceptorReadyState = require_fetchUtils.InterceptorReadyState;
exports.RequestController = require_fetchUtils.RequestController;
exports.createRequestId = require_fetchUtils.createRequestId;
exports.decodeBuffer = require_bufferUtils.decodeBuffer;
exports.deleteGlobalSymbol = require_fetchUtils.deleteGlobalSymbol;
exports.encodeBuffer = require_bufferUtils.encodeBuffer;
exports.getCleanUrl = getCleanUrl;
exports.getGlobalSymbol = require_fetchUtils.getGlobalSymbol;
exports.getRawRequest = require_getRawRequest.getRawRequest;
exports.resolveWebSocketUrl = resolveWebSocketUrl;
//# sourceMappingURL=index.cjs.map