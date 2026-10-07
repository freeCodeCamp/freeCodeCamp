export const testPromiseSupport = (nativeContext) => {
    // This 12 numbers represent the 48 bytes of an empty WAVE file with a single sample.
    const uint32Array = new Uint32Array([1179011410, 40, 1163280727, 544501094, 16, 131073, 44100, 176400, 1048580, 1635017060, 4, 0]);
    try {
        // Bug #1: Safari requires a successCallback.
        const promise = nativeContext.decodeAudioData(uint32Array.buffer, () => {
            // Ignore the success callback.
        });
        if (promise === undefined) {
            return false;
        }
        promise.catch(() => {
            // Ignore rejected errors.
        });
        return true;
    }
    catch {
        // Ignore errors.
    }
    return false;
};
//# sourceMappingURL=test-promise-support.js.map