//#region src/getRawRequest.ts
const kRawRequest = Symbol("kRawRequest");
/**
* Returns a raw request instance associated with this request.
*
* @example
* interceptor.on('request', ({ request }) => {
*   const rawRequest = getRawRequest(request)
*
*   if (rawRequest instanceof http.ClientRequest) {
*     console.log(rawRequest.rawHeaders)
*   }
* })
*/
function getRawRequest(request) {
	return Reflect.get(request, kRawRequest);
}
function setRawRequest(request, rawRequest) {
	Reflect.set(request, kRawRequest, rawRequest);
}

//#endregion
export { setRawRequest as n, getRawRequest as t };
//# sourceMappingURL=getRawRequest-C2-1urzA.mjs.map