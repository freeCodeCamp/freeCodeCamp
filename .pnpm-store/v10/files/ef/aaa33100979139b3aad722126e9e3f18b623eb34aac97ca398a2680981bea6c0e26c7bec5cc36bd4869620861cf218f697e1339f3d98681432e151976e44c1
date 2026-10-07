const DEFAULT_OPTIONS = {
    channelCount: 6,
    channelCountMode: 'explicit',
    channelInterpretation: 'discrete',
    numberOfOutputs: 6
};
export const createChannelSplitterNodeConstructor = (audioNodeConstructor, createChannelSplitterNodeRenderer, createNativeChannelSplitterNode, getNativeContext, isNativeOfflineAudioContext, sanitizeChannelSplitterOptions) => {
    return class ChannelSplitterNode extends audioNodeConstructor {
        constructor(context, options) {
            const nativeContext = getNativeContext(context);
            const mergedOptions = sanitizeChannelSplitterOptions({ ...DEFAULT_OPTIONS, ...options });
            const nativeChannelSplitterNode = createNativeChannelSplitterNode(nativeContext, mergedOptions);
            const channelSplitterNodeRenderer = ((isNativeOfflineAudioContext(nativeContext) ? createChannelSplitterNodeRenderer() : null));
            super(context, false, nativeChannelSplitterNode, channelSplitterNodeRenderer);
        }
    };
};
//# sourceMappingURL=channel-splitter-node-constructor.js.map