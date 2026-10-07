import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createDynamicsCompressorNodeRendererFactory = (connectAudioParam, createNativeDynamicsCompressorNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeDynamicsCompressorNodes = new WeakMap();
        const createDynamicsCompressorNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeDynamicsCompressorNode = getNativeAudioNode(proxy);
            /*
             * If the initially used nativeDynamicsCompressorNode was not constructed on the same OfflineAudioContext it needs to be
             * created again.
             */
            const nativeDynamicsCompressorNodeIsOwnedByContext = isOwnedByContext(nativeDynamicsCompressorNode, nativeOfflineAudioContext);
            if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
                const options = {
                    attack: nativeDynamicsCompressorNode.attack.value,
                    channelCount: nativeDynamicsCompressorNode.channelCount,
                    channelCountMode: nativeDynamicsCompressorNode.channelCountMode,
                    channelInterpretation: nativeDynamicsCompressorNode.channelInterpretation,
                    knee: nativeDynamicsCompressorNode.knee.value,
                    ratio: nativeDynamicsCompressorNode.ratio.value,
                    release: nativeDynamicsCompressorNode.release.value,
                    threshold: nativeDynamicsCompressorNode.threshold.value
                };
                nativeDynamicsCompressorNode = createNativeDynamicsCompressorNode(nativeOfflineAudioContext, options);
            }
            renderedNativeDynamicsCompressorNodes.set(nativeOfflineAudioContext, nativeDynamicsCompressorNode);
            if (!nativeDynamicsCompressorNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
                await renderAutomation(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
                await renderAutomation(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
                await renderAutomation(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
                await renderAutomation(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
            }
            else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.attack, nativeDynamicsCompressorNode.attack);
                await connectAudioParam(nativeOfflineAudioContext, proxy.knee, nativeDynamicsCompressorNode.knee);
                await connectAudioParam(nativeOfflineAudioContext, proxy.ratio, nativeDynamicsCompressorNode.ratio);
                await connectAudioParam(nativeOfflineAudioContext, proxy.release, nativeDynamicsCompressorNode.release);
                await connectAudioParam(nativeOfflineAudioContext, proxy.threshold, nativeDynamicsCompressorNode.threshold);
            }
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDynamicsCompressorNode);
            return nativeDynamicsCompressorNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);
                if (renderedNativeDynamicsCompressorNode !== undefined) {
                    return Promise.resolve(renderedNativeDynamicsCompressorNode);
                }
                return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=dynamics-compressor-node-renderer-factory.js.map