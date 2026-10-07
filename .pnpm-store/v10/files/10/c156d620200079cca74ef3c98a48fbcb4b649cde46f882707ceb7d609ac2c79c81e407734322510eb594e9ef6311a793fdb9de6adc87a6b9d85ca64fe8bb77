import { isOwnedByContext } from '../helpers/is-owned-by-context';
export const createBiquadFilterNodeRendererFactory = (connectAudioParam, createNativeBiquadFilterNode, getNativeAudioNode, renderAutomation, renderInputsOfAudioNode) => {
    return () => {
        const renderedNativeBiquadFilterNodes = new WeakMap();
        const createBiquadFilterNode = async (proxy, nativeOfflineAudioContext) => {
            let nativeBiquadFilterNode = getNativeAudioNode(proxy);
            /*
             * If the initially used nativeBiquadFilterNode was not constructed on the same OfflineAudioContext it needs to be created
             * again.
             */
            const nativeBiquadFilterNodeIsOwnedByContext = isOwnedByContext(nativeBiquadFilterNode, nativeOfflineAudioContext);
            if (!nativeBiquadFilterNodeIsOwnedByContext) {
                const options = {
                    Q: nativeBiquadFilterNode.Q.value,
                    channelCount: nativeBiquadFilterNode.channelCount,
                    channelCountMode: nativeBiquadFilterNode.channelCountMode,
                    channelInterpretation: nativeBiquadFilterNode.channelInterpretation,
                    detune: nativeBiquadFilterNode.detune.value,
                    frequency: nativeBiquadFilterNode.frequency.value,
                    gain: nativeBiquadFilterNode.gain.value,
                    type: nativeBiquadFilterNode.type
                };
                nativeBiquadFilterNode = createNativeBiquadFilterNode(nativeOfflineAudioContext, options);
            }
            renderedNativeBiquadFilterNodes.set(nativeOfflineAudioContext, nativeBiquadFilterNode);
            if (!nativeBiquadFilterNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
                await renderAutomation(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
                await renderAutomation(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
                await renderAutomation(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
            }
            else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.Q, nativeBiquadFilterNode.Q);
                await connectAudioParam(nativeOfflineAudioContext, proxy.detune, nativeBiquadFilterNode.detune);
                await connectAudioParam(nativeOfflineAudioContext, proxy.frequency, nativeBiquadFilterNode.frequency);
                await connectAudioParam(nativeOfflineAudioContext, proxy.gain, nativeBiquadFilterNode.gain);
            }
            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeBiquadFilterNode);
            return nativeBiquadFilterNode;
        };
        return {
            render(proxy, nativeOfflineAudioContext) {
                const renderedNativeBiquadFilterNode = renderedNativeBiquadFilterNodes.get(nativeOfflineAudioContext);
                if (renderedNativeBiquadFilterNode !== undefined) {
                    return Promise.resolve(renderedNativeBiquadFilterNode);
                }
                return createBiquadFilterNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
//# sourceMappingURL=biquad-filter-node-renderer-factory.js.map