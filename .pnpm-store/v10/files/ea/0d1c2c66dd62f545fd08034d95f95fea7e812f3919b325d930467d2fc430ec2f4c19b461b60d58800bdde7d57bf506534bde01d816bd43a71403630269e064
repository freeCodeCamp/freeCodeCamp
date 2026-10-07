import { TNativeAudioBuffer, TWrapAudioBufferCopyChannelMethodsOutOfBoundsFactory } from '../types';

export const createWrapAudioBufferCopyChannelMethodsOutOfBounds: TWrapAudioBufferCopyChannelMethodsOutOfBoundsFactory = (
    convertNumberToUnsignedLong
) => {
    return (audioBuffer: TNativeAudioBuffer): void => {
        audioBuffer.copyFromChannel = ((copyFromChannel) => {
            return (destination: Float32Array, channelNumberAsNumber: number, bufferOffsetAsNumber = 0) => {
                const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
                const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);

                if (bufferOffset < audioBuffer.length) {
                    return copyFromChannel.call(audioBuffer, destination, channelNumber, bufferOffset);
                }
            };
        })(audioBuffer.copyFromChannel);

        audioBuffer.copyToChannel = ((copyToChannel) => {
            return (source: Float32Array, channelNumberAsNumber: number, bufferOffsetAsNumber = 0) => {
                const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
                const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);

                if (bufferOffset < audioBuffer.length) {
                    return copyToChannel.call(audioBuffer, source, channelNumber, bufferOffset);
                }
            };
        })(audioBuffer.copyToChannel);
    };
};
