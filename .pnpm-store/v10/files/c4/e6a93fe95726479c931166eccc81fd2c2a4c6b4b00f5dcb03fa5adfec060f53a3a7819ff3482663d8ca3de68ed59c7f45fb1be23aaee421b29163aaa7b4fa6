import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createWaveShaperNodeRendererFactory = (createNativeWaveShaperNode, getNativeAudioNode, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeWaveShaperNodes = new WeakMap();
        const createWaveShaperNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeWaveShaperNode = getNativeAudioNode(proxy);
            // If the initially used nativeWaveShaperNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeWaveShaperNodeIsOwnedByContext = isOwnedByContext(nativeWaveShaperNode, nativeOfflineAudioContext);
            if (!nativeWaveShaperNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeWaveShaperNode.channelCount,
                    channelCountMode: nativeWaveShaperNode.channelCountMode,
                    channelInterpretation: nativeWaveShaperNode.channelInterpretation,
                    curve: nativeWaveShaperNode.curve,
                    oversample: nativeWaveShaperNode.oversample
                };
                nativeWaveShaperNode = createNativeWaveShaperNode(nativeOfflineAudioContext, options);
            }
            renderedNativeWaveShaperNodes.set(nativeOfflineAudioContext, nativeWaveShaperNode);
            if (isNativeAudioNodeFaker(nativeWaveShaperNode)) {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode.inputs[0]);
            }
            else {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
            }
            return nativeWaveShaperNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);
                if (renderedNativeWaveShaperNode !== undefined) {
                    return Promise.resolve(renderedNativeWaveShaperNode);
                }
                return createWaveShaperNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=wave-shaper-node-renderer-factory.js.map