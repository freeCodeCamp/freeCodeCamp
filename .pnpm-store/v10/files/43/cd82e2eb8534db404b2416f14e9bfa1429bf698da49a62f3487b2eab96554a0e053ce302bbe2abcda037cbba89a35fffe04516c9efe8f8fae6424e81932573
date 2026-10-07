const require_chunk = require('./chunk-CbDLau6x.cjs');
const require_getRawRequest = require('./getRawRequest-B6znU6il.cjs');
let outvariant = require("outvariant");
let node_http = require("node:http");
let node_stream = require("node:stream");

//#region src/utils/node/index.ts
const kRawRequestBodyStream = Symbol("kRawRequestBodyStream");
/**
* Returns the request body stream of the given request.
* @note This is only relevant in the context of `http.ClientRequest`.
* This function will throw if the given `request` wasn't created based on
* the `http.ClientRequest` instance.
* You must rely on the web stream consumers for other request clients.
*/
function getClientRequestBodyStream(request) {
	(0, outvariant.invariant)(require_getRawRequest.getRawRequest(request) instanceof node_http.ClientRequest, `Failed to retrieve raw request body stream: request is not an instance of "http.ClientRequest". Note that you can only use the "getClientRequestBodyStream" function with the requests issued by "http.clientRequest".`);
	const requestBodyStream = Reflect.get(request, kRawRequestBodyStream);
	(0, outvariant.invariant)(requestBodyStream instanceof node_stream.Readable, "Failed to retrieve raw request body stream: corrupted stream (%s)", typeof requestBodyStream);
	return requestBodyStream;
}
function setRawRequestBodyStream(request, stream) {
	Reflect.set(request, kRawRequestBodyStream, stream);
}

//#endregion
Object.defineProperty(exports, 'getClientRequestBodyStream', {
  enumerable: true,
  get: function () {
    return getClientRequestBodyStream;
  }
});
Object.defineProperty(exports, 'setRawRequestBodyStream', {
  enumerable: true,
  get: function () {
    return setRawRequestBodyStream;
  }
});
//# sourceMappingURL=node-DIKcnzhK.cjs.map