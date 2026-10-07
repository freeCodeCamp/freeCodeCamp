import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { TNativeChannelMergerNodeFactoryFactory } from '../types';

export const createNativeChannelMergerNodeFactory: TNativeChannelMergerNodeFactoryFactory = (
    nativeAudioContextConstructor,
    wrapChannelMergerNode
) => {
    return (nativeContext, options) => {
        const nativeChannelMergerNode = nativeContext.createChannelMerger(options.numberOfInputs);

        /*
         * Bug #20: Safari requires a connection of any kind to treat the input signal correctly.
         * @todo Unfortunately there is no way to test for this behavior in a synchronous fashion which is why testing for the existence of
         * the webkitAudioContext is used as a workaround here.
         */
        if (nativeAudioContextConstructor !== null && nativeAudioContextConstructor.name === 'webkitAudioContext') {
            wrapChannelMergerNode(nativeContext, nativeChannelMergerNode);
        }

        assignNativeAudioNodeOptions(nativeChannelMergerNode, options);

        return nativeChannelMergerNode;
    };
};
