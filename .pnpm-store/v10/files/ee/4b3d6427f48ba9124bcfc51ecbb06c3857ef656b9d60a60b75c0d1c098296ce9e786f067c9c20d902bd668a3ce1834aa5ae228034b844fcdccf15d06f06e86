import { createIndexSizeError } from '../factories/index-size-error';
import { TNativeAudioBuffer } from '../types';

export const wrapAudioBufferGetChannelDataMethod = (audioBuffer: TNativeAudioBuffer): void => {
    audioBuffer.getChannelData = ((getChannelData) => {
        return (channel: number) => {
            try {
                return getChannelData.call(audioBuffer, channel);
            } catch (err) {
                if (err.code === 12) {
                    throw createIndexSizeError();
                }

                throw err;
            }
        };
    })(audioBuffer.getChannelData);
};
