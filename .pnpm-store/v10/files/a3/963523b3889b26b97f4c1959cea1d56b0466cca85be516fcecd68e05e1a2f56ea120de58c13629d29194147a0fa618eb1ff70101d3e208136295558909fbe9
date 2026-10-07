import { TSanitizeAudioWorkletNodeOptionsFunction } from '../types';

export const sanitizeAudioWorkletNodeOptions: TSanitizeAudioWorkletNodeOptionsFunction = (options) => {
    return {
        ...options,
        outputChannelCount:
            options.outputChannelCount !== undefined
                ? options.outputChannelCount
                : options.numberOfInputs === 1 && options.numberOfOutputs === 1
                ? /*
                   * Bug #61: This should be the computedNumberOfChannels, but unfortunately that is almost impossible to fake. That's why
                   * the channelCountMode is required to be 'explicit' as long as there is not a native implementation in every browser. That
                   * makes sure the computedNumberOfChannels is equivilant to the channelCount which makes it much easier to compute.
                   */
                  [options.channelCount]
                : Array.from({ length: options.numberOfOutputs }, () => 1)
    };
};
