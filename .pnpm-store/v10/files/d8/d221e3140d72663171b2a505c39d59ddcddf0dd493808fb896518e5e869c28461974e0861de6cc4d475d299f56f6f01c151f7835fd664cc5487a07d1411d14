import { TNativeAnalyserNode } from '../types';

export const wrapAnalyserNodeGetFloatTimeDomainDataMethod = (nativeAnalyserNode: TNativeAnalyserNode): void => {
    nativeAnalyserNode.getFloatTimeDomainData = (array: Float32Array) => {
        const byteTimeDomainData = new Uint8Array(array.length);

        nativeAnalyserNode.getByteTimeDomainData(byteTimeDomainData);

        const length = Math.max(byteTimeDomainData.length, nativeAnalyserNode.fftSize);

        for (let i = 0; i < length; i += 1) {
            array[i] = (byteTimeDomainData[i] - 128) * 0.0078125;
        }

        return array;
    };
};
