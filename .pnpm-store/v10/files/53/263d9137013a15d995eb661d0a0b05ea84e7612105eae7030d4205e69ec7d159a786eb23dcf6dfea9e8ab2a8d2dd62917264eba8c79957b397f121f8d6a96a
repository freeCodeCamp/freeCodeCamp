export const createAudioDestinationNodeRenderer = (renderInputsOfAudioNode) => {
    const renderedNativeAudioDestinationNodes = new WeakMap();
    const createAudioDestinationNode = async (proxy, nativeOfflineAudioContext) => {
        const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;
        renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);
        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);
        return nativeAudioDestinationNode;
    };
    return {
        render(proxy, nativeOfflineAudioContext) {
            const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);
            if (renderedNativeAudioDestinationNode !== undefined) {
                return Promise.resolve(renderedNativeAudioDestinationNode);
            }
            return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
        }
    };
};
//# sourceMappingURL=audio-destination-node-renderer-factory.js.map