import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createConvolverNodeRendererFactory = (createNativeConvolverNode, getNativeAudioNode, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeConvolverNodes = new WeakMap();
        const createConvolverNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeConvolverNode = getNativeAudioNode(proxy);
            // If the initially used nativeConvolverNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeConvolverNodeIsOwnedByContext = isOwnedByContext(nativeConvolverNode, nativeOfflineAudioContext);
            if (!nativeConvolverNodeIsOwnedByContext) {
                const options = {
                    buffer: nativeConvolverNode.buffer,
                    channelCount: nativeConvolverNode.channelCount,
                    channelCountMode: nativeConvolverNode.channelCountMode,
                    channelInterpretation: nativeConvolverNode.channelInterpretation,
                    disableNormalization: !nativeConvolverNode.normalize
                };
                nativeConvolverNode = createNativeConvolverNode(nativeOfflineAudioContext, options);
            }
            renderedNativeConvolverNodes.set(nativeOfflineAudioContext, nativeConvolverNode);
            if (isNativeAudioNodeFaker(nativeConvolverNode)) {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode.inputs[0]);
            }
            else {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeConvolverNode);
            }
            return nativeConvolverNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeConvolverNode = renderedNativeConvolverNodes.get(nativeOfflineAudioContext);
                if (renderedNativeConvolverNode !== undefined) {
                    return Promise.resolve(renderedNativeConvolverNode);
                }
                return createConvolverNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=convolver-node-renderer-factory.js.map