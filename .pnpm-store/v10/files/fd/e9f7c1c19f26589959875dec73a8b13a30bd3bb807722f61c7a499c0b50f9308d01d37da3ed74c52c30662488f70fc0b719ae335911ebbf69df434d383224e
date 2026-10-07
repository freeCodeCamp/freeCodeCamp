import { a as RequestController, c as Interceptor, d as getGlobalSymbol, i as createRequestId, l as InterceptorReadyState, n as FetchResponse, s as INTERNAL_REQUEST_ID_HEADER_NAME, t as FetchRequest, u as deleteGlobalSymbol } from "./fetchUtils-BKJ1XmiO.mjs";
import { t as BatchInterceptor } from "./BatchInterceptor-DdMNfSUY.mjs";
import { n as encodeBuffer, t as decodeBuffer } from "./bufferUtils-DxPxwff_.mjs";
import { t as getRawRequest } from "./getRawRequest-C2-1urzA.mjs";

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
export { BatchInterceptor, FetchRequest, FetchResponse, INTERNAL_REQUEST_ID_HEADER_NAME, Interceptor, InterceptorReadyState, RequestController, createRequestId, decodeBuffer, deleteGlobalSymbol, encodeBuffer, getCleanUrl, getGlobalSymbol, getRawRequest, resolveWebSocketUrl };
//# sourceMappingURL=index.mjs.map