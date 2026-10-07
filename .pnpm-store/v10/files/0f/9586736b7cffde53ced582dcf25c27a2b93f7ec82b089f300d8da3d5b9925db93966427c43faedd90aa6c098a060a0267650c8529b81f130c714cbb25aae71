import { assignNativeAudioNodeOptions } from '../helpers/assign-native-audio-node-options';
import { wrapChannelSplitterNode } from '../helpers/wrap-channel-splitter-node';
export const createNativeChannelSplitterNode = (nativeContext, options) => {
    const nativeChannelSplitterNode = nativeContext.createChannelSplitter(options.numberOfOutputs);
    // Bug #96: Safari does not have the correct channelCount.
    // Bug #29: Safari does not have the correct channelCountMode.
    // Bug #31: Safari does not have the correct channelInterpretation.
    assignNativeAudioNodeOptions(nativeChannelSplitterNode, options);
    // Bug #29, #30, #31, #32, #96 & #97: Only Chrome, Edge & Firefox partially support the spec yet.
    wrapChannelSplitterNode(nativeChannelSplitterNode);
    return nativeChannelSplitterNode;
};
//# sourceMappingURL=native-channel-splitter-node.js.map