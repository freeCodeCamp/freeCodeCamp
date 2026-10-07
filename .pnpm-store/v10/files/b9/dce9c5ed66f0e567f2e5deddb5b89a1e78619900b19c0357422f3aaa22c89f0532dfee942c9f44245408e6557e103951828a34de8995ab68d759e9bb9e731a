import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IMinimalOfflineAudioContext, IOfflineAudioContext, IWaveShaperNode } from '../interfaces';
import { TNativeOfflineAudioContext, TNativeWaveShaperNode, TWaveShaperNodeRendererFactoryFactory } from '../types';

export const createWaveShaperNodeRendererFactory: TWaveShaperNodeRendererFactoryFactory = (
    createNativeWaveShaperNode,
    getNativeAudioNode,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeWaveShaperNodes = new WeakMap<TNativeOfflineAudioContext, TNativeWaveShaperNode>();

        const createWaveShaperNode = async (proxy: IWaveShaperNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeWaveShaperNode = getNativeAudioNode<T, TNativeWaveShaperNode>(proxy);

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
            } else {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeWaveShaperNode);
            }

            return nativeWaveShaperNode;
        };

        return {
            render(proxy: IWaveShaperNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeWaveShaperNode> {
                const renderedNativeWaveShaperNode = renderedNativeWaveShaperNodes.get(nativeOfflineAudioContext);

                if (renderedNativeWaveShaperNode !== undefined) {
                    return Promise.resolve(renderedNativeWaveShaperNode);
                }

                return createWaveShaperNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
