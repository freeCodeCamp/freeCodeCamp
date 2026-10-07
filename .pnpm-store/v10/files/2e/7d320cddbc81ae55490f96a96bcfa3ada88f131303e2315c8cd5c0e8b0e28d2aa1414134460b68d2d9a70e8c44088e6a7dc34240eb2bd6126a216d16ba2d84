export const computeBufferSize = (baseLatency: null | number, sampleRate: number) => {
    if (baseLatency === null) {
        return 512;
    }

    return Math.max(512, Math.min(16384, Math.pow(2, Math.round(Math.log2(baseLatency * sampleRate)))));
};
