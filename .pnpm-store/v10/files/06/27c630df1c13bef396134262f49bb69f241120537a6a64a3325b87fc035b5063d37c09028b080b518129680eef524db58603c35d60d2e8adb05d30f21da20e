import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createDelayNodeRendererFactory = (connectAudioParam, createNativeDelayNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode) => {
    return (maxDelayTime) => {
        const renderedNativeDelayNodes = new WeakMap();
        const createDelayNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeDelayNode = getNativeAudioNode(proxy);
            // If the initially used nativeDelayNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeDelayNodeIsOwnedByContext = isOwnedByContext(nativeDelayNode, nativeOfflineAudioContext);
            if (!nativeDelayNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeDelayNode.channelCount,
                    channelCountMode: nativeDelayNode.channelCountMode,
                    channelInterpretation: nativeDelayNode.channelInterpretation,
                    delayTime: nativeDelayNode.delayTime.value,
                    maxDelayTime
                };
                nativeDelayNode = createNativeDelayNode(nativeOfflineAudioContext, options);
            }
            renderedNativeDelayNodes.set(nativeOfflineAudioContext, nativeDelayNode);
            if (!nativeDelayNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
            }
            else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.delayTime, nativeDelayNode.delayTime);
            }
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeDelayNode);
            return nativeDelayNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeDelayNode = renderedNativeDelayNodes.get(nativeOfflineAudioContext);
                if (renderedNativeDelayNode !== undefined) {
                    return Promise.resolve(renderedNativeDelayNode);
                }
                return createDelayNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=delay-node-renderer-factory.js.map