import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IAudioNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import { TChannelSplitterNodeRendererFactoryFactory, TNativeAudioNode, TNativeOfflineAudioContext } from '../types';

export const createChannelSplitterNodeRendererFactory: TChannelSplitterNodeRendererFactoryFactory = (
    createNativeChannelSplitterNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeAudioNodes = new WeakMap<TNativeOfflineAudioContext, TNativeAudioNode>();

        const createAudioNode = async (proxy: IAudioNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeAudioNode = getNativeAudioNode<T, TNativeAudioNode>(proxy);

            // If the initially used nativeAudioNode was not constructed on the same OfflineAudioContext it needs to be created again.
            const nativeAudioNodeIsOwnedByContext = isOwnedByContext(nativeAudioNode, nativeOfflineAudioContext);

            if (!nativeAudioNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeAudioNode.channelCount,
                    channelCountMode: nativeAudioNode.channelCountMode,
                    channelInterpretation: nativeAudioNode.channelInterpretation,
                    numberOfOutputs: nativeAudioNode.numberOfOutputs
                };

                nativeAudioNode = createNativeChannelSplitterNode(nativeOfflineAudioContext, options);
            }

            renderedNativeAudioNodes.set(nativeOfflineAudioContext, nativeAudioNode);

            await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioNode);

            return nativeAudioNode;
        };

        return {
            render(proxy: IAudioNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeAudioNode> {
                const renderedNativeAudioNode = renderedNativeAudioNodes.get(nativeOfflineAudioContext);

                if (renderedNativeAudioNode !== undefined) {
                    return Promise.resolve(renderedNativeAudioNode);
                }

                return createAudioNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
