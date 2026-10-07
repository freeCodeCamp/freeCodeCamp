import { createInvalidStateError } from '../factories/invalid-state-error';
export const wrapAudioBufferSourceNodeStartMethodConsecutiveCalls = (nativeAudioBufferSourceNode) => {
    nativeAudioBufferSourceNode.start = ((start) => {
        let isScheduled = false;
        return (when = 0, offset = 0, duration) => {
            if (isScheduled) {
                throw createInvalidStateError();
            }
            start.call(nativeAudioBufferSourceNode, when, offset, duration);
            isScheduled = true;
        };
    })(nativeAudioBufferSourceNode.start);
};
//# sourceMappingURL=wrap-audio-buffer-source-node-start-method-consecutive-calls.js.map