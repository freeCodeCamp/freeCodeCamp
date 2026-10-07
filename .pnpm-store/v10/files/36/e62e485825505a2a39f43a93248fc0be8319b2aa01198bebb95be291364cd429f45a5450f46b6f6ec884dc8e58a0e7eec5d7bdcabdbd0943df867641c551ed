import { TNativeAudioBuffer, TWrapAudioBufferCopyChannelMethodsFactory } from '../types';

export const createWrapAudioBufferCopyChannelMethods: TWrapAudioBufferCopyChannelMethodsFactory = (
    convertNumberToUnsignedLong,
    createIndexSizeError
) => {
    return (audioBuffer: TNativeAudioBuffer): void => {
        audioBuffer.copyFromChannel = (destination, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
            const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
            const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);

            if (channelNumber >= audioBuffer.numberOfChannels) {
                throw createIndexSizeError();
            }

            const audioBufferLength = audioBuffer.length;
            const channelData = audioBuffer.getChannelData(channelNumber);
            const destinationLength = destination.length;

            for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < destinationLength; i += 1) {
                destination[i] = channelData[i + bufferOffset];
            }
        };

        audioBuffer.copyToChannel = (source, channelNumberAsNumber, bufferOffsetAsNumber = 0) => {
            const bufferOffset = convertNumberToUnsignedLong(bufferOffsetAsNumber);
            const channelNumber = convertNumberToUnsignedLong(channelNumberAsNumber);

            if (channelNumber >= audioBuffer.numberOfChannels) {
                throw createIndexSizeError();
            }

            const audioBufferLength = audioBuffer.length;
            const channelData = audioBuffer.getChannelData(channelNumber);
            const sourceLength = source.length;

            for (let i = bufferOffset < 0 ? -bufferOffset : 0; i + bufferOffset < audioBufferLength && i < sourceLength; i += 1) {
                channelData[i + bufferOffset] = source[i];
            }
        };
    };
};
