import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IDynamicsCompressorNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TDynamicsCompressorNodeRendererFactoryFactory, TNativeDynamicsCompressorNode, TNativeOfflineAudioContext } from '../types';

export const createDynamicsCompressorNodeRendererFactory: TDynamicsCompressorNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeDynamicsCompressorNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeDynamicsCompressorNodes = new WeakMap<TNativeOfflineAudioContext, TNativeDynamicsCompressorNode>();

        const createDynamicsCompressorNode = async (
            proxy: IDynamicsCompressorNode<T>,
            nativeOfflineAudioContext: TNativeOfflineAudioContext
        ) => {
            let nativeDynamicsCompressorNode = getNativeAudioNode<T, TNativeDynamicsCompressorNode>(proxy);

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
            } else {
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
            render(
                proxy: IDynamicsCompressorNode<T>,
                nativeOfflineAudioContext: TNativeOfflineAudioContext
            ): Promise<TNativeDynamicsCompressorNode> {
                const renderedNativeDynamicsCompressorNode = renderedNativeDynamicsCompressorNodes.get(nativeOfflineAudioContext);

                if (renderedNativeDynamicsCompressorNode !== undefined) {
                    return Promise.resolve(renderedNativeDynamicsCompressorNode);
                }

                return createDynamicsCompressorNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
