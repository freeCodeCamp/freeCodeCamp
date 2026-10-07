const DEFAULT_OPTIONS = {
    channelCount: 1,
    channelCountMode: 'explicit',
    channelInterpretation: 'speakers',
    numberOfInputs: 6
};
export const createChannelMergerNodeConstructor = (audioNodeConstructor, createChannelMergerNodeRenderer, createNativeChannelMergerNode, getNativeContext, isNativeOfflineAudioContext) => {
    return class ChannelMergerNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
            const nativeChannelMergerNode = createNativeChannelMergerNode(nativeContext, mergedOptions);
            const channelMergerNodeRenderer = ((isNativeOfflineAudioContext(nativeContext) ? createChannelMergerNodeRenderer() : null));
            super(context, false, nativeChannelMergerNode, channelMergerNodeRenderer);
        }
    };
};
//# sourceMappingURL=channel-merger-node-constructor.js.map