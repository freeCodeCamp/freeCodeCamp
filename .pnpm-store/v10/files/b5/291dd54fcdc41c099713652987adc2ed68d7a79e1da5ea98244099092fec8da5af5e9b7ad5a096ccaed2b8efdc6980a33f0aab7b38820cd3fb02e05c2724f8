import { createIndexSizeError } from '../factories/index-size-error';
export const wrapAudioBufferGetChannelDataMethod = (audioBuffer) => {
    audioBuffer.getChannelData = ((getChannelData) => {
        return (channel) => {
            try {
                return getChannelData.call(audioBuffer, channel);
            }
            catch (err) {
                if (err.code === 12) {
                    throw createIndexSizeError();
                }
                throw err;
            }
        };
    })(audioBuffer.getChannelData);
};
//# sourceMappingURL=wrap-audio-buffer-get-channel-data-method.js.map