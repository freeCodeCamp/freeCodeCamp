//#region src/utils/bufferUtils.ts
const encoder = new TextEncoder();
function encodeBuffer(text) {
	return encoder.encode(text);
}
function decodeBuffer(buffer, encoding) {
	return new TextDecoder(encoding).decode(buffer);
}
/**
* Create an `ArrayBuffer` from the given `Uint8Array`.
* Takes the byte offset into account to produce the right buffer
* in the case when the buffer is bigger than the data view.
*/
function toArrayBuffer(array) {
	return array.buffer.slice(array.byteOffset, array.byteOffset + array.byteLength);
}

//#endregion
export { encodeBuffer as n, toArrayBuffer as r, decodeBuffer as t };
//# sourceMappingURL=bufferUtils-BiiO6HZv.mjs.map