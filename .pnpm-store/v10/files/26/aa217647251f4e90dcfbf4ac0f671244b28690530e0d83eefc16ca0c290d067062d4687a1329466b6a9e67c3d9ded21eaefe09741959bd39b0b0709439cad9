import { TNativeContext } from '../types';

export const testAudioScheduledSourceNodeStartMethodNegativeParametersSupport = (nativeContext: TNativeContext) => {
    const nativeAudioBufferSourceNode = nativeContext.createOscillator();

    try {
        nativeAudioBufferSourceNode.start(-1);
    } catch (err) {
        return err instanceof RangeError;
    }

    return false;
};
