import { TNativeContext } from '../types';

export const testAudioBufferSourceNodeStopMethodNullifiedBufferSupport = (nativeContext: TNativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createBufferSource();

    nativeAudioBufferSourceNode.start();

    try {
        nativeAudioBufferSourceNode.stop();
    } catch {
        return false;
    }

    return true;
};
