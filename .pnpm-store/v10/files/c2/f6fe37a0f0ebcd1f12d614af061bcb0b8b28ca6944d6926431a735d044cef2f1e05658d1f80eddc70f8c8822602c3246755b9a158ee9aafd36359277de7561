import { Readable } from "node:stream";

//#region src/utils/node/index.d.ts

/**
 * Returns the request body stream of the given request.
 * @note This is only relevant in the context of `http.ClientRequest`.
 * This function will throw if the given `request` wasn't created based on
 * the `http.ClientRequest` instance.
 * You must rely on the web stream consumers for other request clients.
 */
declare function getClientRequestBodyStream(request: Request): Readable;
declare function setRawRequestBodyStream(request: Request, stream: Readable): void;
//#endregion
export { getClientRequestBodyStream, setRawRequestBodyStream };
//# sourceMappingURL=index.d.cts.map