import { TNativeAudioBufferSourceNode, TNativeConstantSourceNode, TNativeOscillatorNode } from '../types';

export const wrapAudioScheduledSourceNodeStopMethodNegativeParameters = (
    nativeAudioScheduledSourceNode: TNativeAudioBufferSourceNode | TNativeConstantSourceNode | TNativeOscillatorNode
): void => {
    nativeAudioScheduledSourceNode.stop = ((stop) => {
        return (when = 0) => {
            if (when < 0) {
                throw new RangeError("The parameter can't be negative.");
            }

            stop.call(nativeAudioScheduledSourceNode, when);
        };
    })(nativeAudioScheduledSourceNode.stop);
};
