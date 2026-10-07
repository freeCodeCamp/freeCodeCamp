
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
Object.defineProperty(exports, 'decodeBuffer', {
  enumerable: true,
  get: function () {
    return decodeBuffer;
  }
});
Object.defineProperty(exports, 'encodeBuffer', {
  enumerable: true,
  get: function () {
    return encodeBuffer;
  }
});
Object.defineProperty(exports, 'toArrayBuffer', {
  enumerable: true,
  get: function () {
    return toArrayBuffer;
  }
});
//# sourceMappingURL=bufferUtils-Uc0eRItL.cjs.map