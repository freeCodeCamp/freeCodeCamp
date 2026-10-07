import { TNativeContext } from '../types';

export const testAudioBufferSourceNodeStartMethodConsecutiveCallsSupport = (nativeContext: TNativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();

    nativeAudioBufferSourceNode.start();

    try {
        nativeAudioBufferSourceNode.start();
    } catch {
        return true;
    }

    return false;
};
