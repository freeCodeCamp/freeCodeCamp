import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IGainNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TGainNodeRendererFactoryFactory, TNativeGainNode, TNativeOfflineAudioContext } from '../types';

export const createGainNodeRendererFactory: TGainNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeGainNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeGainNodes = new WeakMap<TNativeOfflineAudioContext, TNativeGainNode>();

        const createGainNode = async (proxy: IGainNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeGainNode = getNativeAudioNode<T, TNativeGainNode>(proxy);

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
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.gain, nativeGainNode.gain);
            }

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeGainNode);

            return nativeGainNode;
        };

        return {
            render(proxy: IGainNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeGainNode> {
                const renderedNativeGainNode = renderedNativeGainNodes.get(nativeOfflineAudioContext);

                if (renderedNativeGainNode !== undefined) {
                    return Promise.resolve(renderedNativeGainNode);
                }

                return createGainNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
