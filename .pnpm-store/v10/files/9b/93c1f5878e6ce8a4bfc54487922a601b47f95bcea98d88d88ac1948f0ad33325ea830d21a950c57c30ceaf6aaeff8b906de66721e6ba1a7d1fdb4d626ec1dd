import { TNativeAudioBufferSourceNode } from '../types';

export const wrapAudioBufferSourceNodeStartMethodOffsetClamping = (nativeAudioBufferSourceNode: TNativeAudioBufferSourceNode): void => {
    nativeAudioBufferSourceNode.start = ((start) => {
        return (when = 0, offset = 0, duration?: number) => {
            const buffer = nativeAudioBufferSourceNode.buffer;
            // Bug #154: Safari does not clamp the offset if it is equal to or greater than the duration of the buffer.
            const clampedOffset = buffer === null ? offset : Math.min(buffer.duration, offset);

            // Bug #155: Safari does not handle the offset correctly if it would cause the buffer to be not be played at all.
            if (buffer !== null && clampedOffset > buffer.duration - 0.5 / nativeAudioBufferSourceNode.context.sampleRate) {
                start.call(nativeAudioBufferSourceNode, when, 0, 0);
            } else {
                start.call(nativeAudioBufferSourceNode, when, clampedOffset, duration);
            }
        };
    })(nativeAudioBufferSourceNode.start);
};
