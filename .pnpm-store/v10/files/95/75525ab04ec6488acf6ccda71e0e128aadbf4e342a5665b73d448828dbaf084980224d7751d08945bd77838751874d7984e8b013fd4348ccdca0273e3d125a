export const createNativeAudioDestinationNodeFactory = (createNativeGainNode, overwriteAccessors) => {
    return (nativeContext, channelCount, isNodeOfNativeOfflineAudioContext) => {
        const nativeAudioDestinationNode = nativeContext.destination;
        // Bug #132: Safari does not have the correct channelCount.
        if (nativeAudioDestinationNode.channelCount !== channelCount) {
            try {
                nativeAudioDestinationNode.channelCount = channelCount;
            }
            catch {
                // Bug #169: Safari throws an error on each attempt to change the channelCount.
            }
        }
        // Bug #83: Safari does not have the correct channelCountMode.
        if (isNodeOfNativeOfflineAudioContext && nativeAudioDestinationNode.channelCountMode !== 'explicit') {
            nativeAudioDestinationNode.channelCountMode = 'explicit';
        }
        // Bug #47: The AudioDestinationNode in Safari does not initialize the maxChannelCount property correctly.
        if (nativeAudioDestinationNode.maxChannelCount === 0) {
            Object.defineProperty(nativeAudioDestinationNode, 'maxChannelCount', {
                value: channelCount
            });
        }
        // Bug #168: No browser does yet have an AudioDestinationNode with an output.
        const gainNode = createNativeGainNode(nativeContext, {
            channelCount,
            channelCountMode: nativeAudioDestinationNode.channelCountMode,
            channelInterpretation: nativeAudioDestinationNode.channelInterpretation,
            gain: 1
        });
        overwriteAccessors(gainNode, 'channelCount', (get) => () => get.call(gainNode), (set) => (value) => {
            set.call(gainNode, value);
            try {
                nativeAudioDestinationNode.channelCount = value;
            }
            catch (err) {
                // Bug #169: Safari throws an error on each attempt to change the channelCount.
                if (value > nativeAudioDestinationNode.maxChannelCount) {
                    throw err;
                }
            }
        });
        overwriteAccessors(gainNode, 'channelCountMode', (get) => () => get.call(gainNode), (set) => (value) => {
            set.call(gainNode, value);
            nativeAudioDestinationNode.channelCountMode = value;
        });
        overwriteAccessors(gainNode, 'channelInterpretation', (get) => () => get.call(gainNode), (set) => (value) => {
            set.call(gainNode, value);
            nativeAudioDestinationNode.channelInterpretation = value;
        });
        Object.defineProperty(gainNode, 'maxChannelCount', {
            get: () => nativeAudioDestinationNode.maxChannelCount
        });
        // @todo This should be disconnected when the context is closed.
        gainNode.connect(nativeAudioDestinationNode);
        return gainNode;
    };
};
//# sourceMappingURL=native-audio-destination-node.js.map