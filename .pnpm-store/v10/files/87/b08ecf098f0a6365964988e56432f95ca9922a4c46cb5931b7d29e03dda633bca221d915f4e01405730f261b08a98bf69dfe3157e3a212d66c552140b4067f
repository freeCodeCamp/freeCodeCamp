import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createChannelMergerNodeRendererFactory = (createNativeChannelMergerNode, getNativeAudioNode, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeAudioNodes = new WeakMap();
        const createAudioNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeAudioNode = getNativeAudioNode(proxy);
            // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);
            if (!nativeAudioNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeAudioNode.channelCount,
                    channelCountMode: nativeAudioNode.channelCountMode,
                    channelInterpretation: nativeAudioNode.channelInterpretation,
                    numberOfInputs: nativeAudioNode.numberOfInputs
                };
                nativeAudioNode = createNativeChannelMergerNode(nativeOfflineAudioContext, options);
            }
            renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);
            return nativeAudioNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);
                if (renderedNativeAudioNode !== undefined) {
                    return Promise.resolve(renderedNativeAudioNode);
                }
                return createAudioNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=channel-merger-node-renderer-factory.js.map