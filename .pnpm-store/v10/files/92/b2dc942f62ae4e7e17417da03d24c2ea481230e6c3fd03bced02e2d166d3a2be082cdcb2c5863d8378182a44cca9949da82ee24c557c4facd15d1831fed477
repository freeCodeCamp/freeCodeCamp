import { TNativeContext } from '../types';

export const testAudioBufferSourceNodeStartMethodOffsetClampingSupport = (nativeContext: TNativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();
    const nativeAudioBuffer = nativeContext.createBuffer(1, 1, 44100);

    nativeAudioBufferSourceNode.buffer = nativeAudioBuffer;

    try {
        nativeAudioBufferSourceNode.start(0, 1);
    } catch {
        return false;
    }

    return true;
};
