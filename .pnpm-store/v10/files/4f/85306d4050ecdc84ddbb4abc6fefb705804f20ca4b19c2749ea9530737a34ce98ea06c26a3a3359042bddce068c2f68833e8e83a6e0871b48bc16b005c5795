import { IAudioDestinationNode, IMinimalOfflineAudioContext, IOfflineAudioContext } from '../interfaces';
import {
    TAudioDestinationNodeRendererFactory,
    TNativeAudioDestinationNode,
    TNativeOfflineAudioContext,
    TRenderInputsOfAudioNodeFunction
} from '../types';

export const createAudioDestinationNodeRenderer: TAudioDestinationNodeRendererFactory = <
    T extends IMinimalOfflineAudioContext | IOfflineAudioContext
>(
    renderInputsOfAudioNode: TRenderInputsOfAudioNodeFunction
) => {
    const renderedNativeAudioDestinationNodes = new WeakMap<TNativeOfflineAudioContext, TNativeAudioDestinationNode>();

    const createAudioDestinationNode = async (proxy: IAudioDestinationNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
        const nativeAudioDestinationNode = nativeOfflineAudioContext.destination;

        renderedNativeAudioDestinationNodes.set(nativeOfflineAudioContext, nativeAudioDestinationNode);

        await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeAudioDestinationNode);

        return nativeAudioDestinationNode;
    };

    return {
        render(
            proxy: IAudioDestinationNode<T>,
            nativeOfflineAudioContext: TNativeOfflineAudioContext
        ): Promise<TNativeAudioDestinationNode> {
            const renderedNativeAudioDestinationNode = renderedNativeAudioDestinationNodes.get(nativeOfflineAudioContext);

            if (renderedNativeAudioDestinationNode !== undefined) {
                return Promise.resolve(renderedNativeAudioDestinationNode);
            }

            return createAudioDestinationNode(proxy, nativeOfflineAudioContext);
        }
    };
};
