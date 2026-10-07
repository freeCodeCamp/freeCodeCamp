import { TNativeContext } from '../types';

export const testAudioScheduledSourceNodeStopMethodNegativeParametersSupport = (nativeContext: TNativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();

    try {
        nativeAudioBufferSourceNode.stop(-1);
    } catch (err) {
        return err instanceof RangeError;
    }

    return false;
};
