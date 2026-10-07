import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createAnalyserNodeRendererFactory = (createNativeAnalyserNode, getNativeAudioNode, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeAnalyserNodes = new WeakMap();
        const createAnalyserNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeAnalyserNode = getNativeAudioNode(proxy);
            // If the initially used nativeAnalyserNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeAnalyserNodeIsOwnedByContext = isOwnedByContext(nativeAnalyserNode, nativeOfflineAudioContext);
            if (!nativeAnalyserNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeAnalyserNode.channelCount,
                    channelCountMode: nativeAnalyserNode.channelCountMode,
                    channelInterpretation: nativeAnalyserNode.channelInterpretation,
                    fftSize: nativeAnalyserNode.fftSize,
                    maxDecibels: nativeAnalyserNode.maxDecibels,
                    minDecibels: nativeAnalyserNode.minDecibels,
                    smoothingTimeConstant: nativeAnalyserNode.smoothingTimeConstant
                };
                nativeAnalyserNode = createNativeAnalyserNode(nativeOfflineAudioContext, options);
            }
            renderedNativeAnalyserNodes.set(nativeOfflineAudioContext, nativeAnalyserNode);
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAnalyserNode);
            return nativeAnalyserNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeAnalyserNode = renderedNativeAnalyserNodes.get(nativeOfflineAudioContext);
                if (renderedNativeAnalyserNode !== undefined) {
                    return Promise.resolve(renderedNativeAnalyserNode);
                }
                return createAnalyserNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=analyser-node-renderer-factory.js.map