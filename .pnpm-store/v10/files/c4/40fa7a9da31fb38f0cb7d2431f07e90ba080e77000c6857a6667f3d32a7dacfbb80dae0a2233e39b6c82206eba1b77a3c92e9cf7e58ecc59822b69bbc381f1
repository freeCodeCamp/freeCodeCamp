import { isNativeAudioNodeFaker } from '../guards/native-audio-node-faker';
import { isOwnedByContext } from '../helpers/is-owned-by-context';
import { IMinimalOfflineAudioContext, IOfflineAudioContext, IStereoPannerNode } from '../interfaces';
import { TNativeOfflineAudioContext, TNativeStereoPannerNode, TStereoPannerNodeRendererFactoryFactory } from '../types';

export const createStereoPannerNodeRendererFactory: TStereoPannerNodeRendererFactoryFactory = (
    connectAudioParam,
    createNativeStereoPannerNode,
    getNativeAudioNode,
    renderAutomation,
    renderInputsOfAudioNode
) => {
    return <T extends IMinimalOfflineAudioContext | IOfflineAudioContext>() => {
        const renderedNativeStereoPannerNodes = new WeakMap<TNativeOfflineAudioContext, TNativeStereoPannerNode>();

        const createStereoPannerNode = async (proxy: IStereoPannerNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext) => {
            let nativeStereoPannerNode = getNativeAudioNode<T, TNativeStereoPannerNode>(proxy);

            /*
             * If the initially used nativeStereoPannerNode was not constructed on the same OfflineAudioContext it needs to be created
             * again.
             */
            const nativeStereoPannerNodeIsOwnedByContext = isOwnedByContext(nativeStereoPannerNode, nativeOfflineAudioContext);

            if (!nativeStereoPannerNodeIsOwnedByContext) {
                const options = {
                    channelCount: nativeStereoPannerNode.channelCount,
                    channelCountMode: nativeStereoPannerNode.channelCountMode,
                    channelInterpretation: nativeStereoPannerNode.channelInterpretation,
                    pan: nativeStereoPannerNode.pan.value
                };

                nativeStereoPannerNode = createNativeStereoPannerNode(nativeOfflineAudioContext, options);
            }

            renderedNativeStereoPannerNodes.set(nativeOfflineAudioContext, nativeStereoPannerNode);

            if (!nativeStereoPannerNodeIsOwnedByContext) {
                await renderAutomation(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
            } else {
                await connectAudioParam(nativeOfflineAudioContext, proxy.pan, nativeStereoPannerNode.pan);
            }

            if (isNativeAudioNodeFaker(nativeStereoPannerNode)) {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode.inputs[0]);
            } else {
                await renderInputsOfAudioNode(proxy, nativeOfflineAudioContext, nativeStereoPannerNode);
            }

            return nativeStereoPannerNode;
        };

        return {
            render(proxy: IStereoPannerNode<T>, nativeOfflineAudioContext: TNativeOfflineAudioContext): Promise<TNativeStereoPannerNode> {
                const renderedNativeStereoPannerNode = renderedNativeStereoPannerNodes.get(nativeOfflineAudioContext);

                if (renderedNativeStereoPannerNode !== undefined) {
                    return Promise.resolve(renderedNativeStereoPannerNode);
                }

                return createStereoPannerNode(proxy, nativeOfflineAudioContext);
            }
        };
    };
};
