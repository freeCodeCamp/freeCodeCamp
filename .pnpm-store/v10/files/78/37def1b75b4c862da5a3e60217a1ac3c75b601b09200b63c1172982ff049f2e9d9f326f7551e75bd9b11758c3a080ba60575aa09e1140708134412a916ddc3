const MIN_SIZE = 16 * 1024;

export function adoptBuffer(buffer = null, size) {
    if (buffer === null || buffer.length < size) {
        return new Uint32Array(Math.max(size + 1024, MIN_SIZE));
    }

    return buffer;
};
