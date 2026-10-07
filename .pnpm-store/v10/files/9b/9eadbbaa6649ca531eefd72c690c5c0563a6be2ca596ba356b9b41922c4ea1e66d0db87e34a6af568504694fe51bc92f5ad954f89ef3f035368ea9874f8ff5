import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createGainNodeRendererFactory = (connectAudioParam, createNativeGainNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeGainNodes = new WeakMap();
        const createGainNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeGainNode = getNativeAudioNode(proxy);
            // If the initially used nativeGainNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeGainNodeIsOwnedByContext = isOwnedByContext(nativeGainNode, nativeOfflineAudioContext);
            if (!nativeGainNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeGainNode.channelCount,
                    channelCountMode: nativeGainNode.channelCountMode,
                    channelInterpretation: nativeGainNode.channelInterpretation,
                    gain: nativeGainNode.gain.value
                };
                nativeGainNode = createNativeGainNode(nativeOfflineAudioContext, options);
            }
            renderedNativeGainNodes.set(nativeOfflineAudioContext, nativeGainNode);
            if (!nativeGainNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
            }
            else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
            }
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeGainNode);
            return nativeGainNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);
                if (renderedNativeGainNode !== undefined) {
                    return Promise.resolve(renderedNativeGainNode);
                }
                return createGainNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=gain-node-renderer-factory.js.map