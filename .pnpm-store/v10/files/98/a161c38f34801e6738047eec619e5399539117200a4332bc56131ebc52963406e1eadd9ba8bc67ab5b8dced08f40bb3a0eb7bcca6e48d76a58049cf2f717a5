export const createAddSilentConnection = (createNativeGainNode) => {
    return (nativeContext, nativeAudioScheduledSourceNode) => {
        const nativeGainNode = createNativeGainNode(nativeContext, {
            channelCount: 1,
            channelCountMode: 'explicit',
            channelInterpretation: 'discrete',
            gain: 0
        });
        nativeAudioScheduledSourceNode.connect(nativeGainNode).connect(nativeContext.destination);
        const disconnect = () => {
            nativeAudioScheduledSourceNode.removeEventListener('ended', disconnect);
            nativeAudioScheduledSourceNode.disconnect(nativeGainNode);
            nativeGainNode.disconnect();
        };
        nativeAudioScheduledSourceNode.addEventListener('ended', disconnect);
    };
};
//# sourceMappingURL=add-silent-connection.js.map