import { createInvalidStateError } from '../factories/invalid-state-error';
import { TNativeAudioBufferSourceNode } from '../types';

export const wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode: TNativeAudioBufferSourceNode): void => {
    nativeAudioBufferSourceNode.start = ((start) => {
        let isScheduled = false;

        return (when = 0, offset = 0, duration?: number) => {
            if (isScheduled) {
                throw createInvalidStateError();
            }

            start.call(nativeAudioBufferSourceNode, when, offset, duration);

            isScheduled = true;
        };
    })(nativeAudioBufferSourceNode.start);
};
