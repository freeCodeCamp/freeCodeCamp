var MIN_SIZE = 16 * 1024;
var SafeUint32Array = typeof Uint32Array !== 'undefined' ? Uint32Array : Array; // fallback on Array when TypedArray is not supported

module.exports = function adoptBuffer(buffer, size) {
    if (buffer === null || buffer.length < size) {
        return new SafeUint32Array(Math.max(size + 1024, MIN_SIZE));
    }

    return buffer;
};
