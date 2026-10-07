
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
Object.defineProperty(exports, 'getRawRequest', {
  enumerable: true,
  get: function () {
    return getRawRequest;
  }
});
Object.defineProperty(exports, 'setRawRequest', {
  enumerable: true,
  get: function () {
    return setRawRequest;
  }
});
//# sourceMappingURL=getRawRequest-B6znU6il.cjs.map